import React, { createContext, useContext, useState, useEffect } from "react";
import { getUsers, getUsersVariables, getUsers_GetUsers_users  } from "../../Types/api";
import { useLazyQuery } from "react-apollo";
import { GET_USERS } from "./AdminUsersQueries";

interface IContext {
    users: (getUsers_GetUsers_users | null)[] | null;
    pagination: IUsePagination;
    loading: boolean,
    max: number;
}

const InitContect: IContext = {
    users: [],
    pagination: { cursor: 1, screen: 1, onChangeCursor: () => {}, totalCount: 0, hasFirst: false, hasLast: false, hasPrev: false, hasNext: false, onClickArrow: () => {}, onClickDBArrow: () => {}, onhandleUsingArrow: () => {} },
    loading: false,
    max: 0
};

const AdminUsersContext: React.Context<IContext> = createContext<IContext>(InitContect);
const useAdminUsersContext = () => useContext(AdminUsersContext);

export const PaginationSettings = {
    pageCount: 3,  // pageCount: 한 페이지에서 보여질 리스트 갯수
    tableCount: 4, // tableCount: 한페이지에 보여질 table 갯수
}
const START_SCREEN = 1; // 1부터 시작, 인덱스가 아니므로 주의!
const START_OFFSET = 1; 

const usePagination = (max: number, initCursor: number, initScreen: number): IUsePagination => {
    const { pageCount, tableCount } = PaginationSettings;
    // console.log("MAX: ", max);
    const [ hasFirst, setHasFirst ] = useState<boolean>(initScreen !== 1); // 맨 처음
    const [ hasPrev, setHasPrev ] = useState<boolean>(initScreen !== 1); // '<' 버튼
    const [ hasLast, setHasLast ] = useState<boolean>(max > (pageCount * tableCount)); // 맨 끝
    const [ hasNext, setHasNext ] = useState<boolean>(max > (pageCount * tableCount)); // '>' 버튼
    const [ screen, setScreen ] = useState<number>(initScreen); // 스크린 == 페이지 그룹핑
    const [ cursor, setCursor ] = useState<number>(initCursor); // 현 페이지
    const [ totalCount ] = useState<number>(0);
    
    const handleLeftArrows = () => {
        if(screen === 1) {
            setHasFirst(false);
            setHasPrev(false);
        } else {
            setHasFirst(true);
            setHasPrev(true);
        }
    }
    /**
     *  [1] total > pageCount 이면 다음 값이 존재한다.
     * 
     *  @param total = pageCount * tableCount + 1
     *  원래 갯수의 + 1을 하여 다음 값이 
     *  있는지 없는지 여부를 파악하도록 하였다.
     * 
     */
    const handleRightArrows = () => {
        const { pageCount, tableCount } = PaginationSettings;
        const currentScreenTableCnt = screen * pageCount * tableCount
        if(max > currentScreenTableCnt ) {
            setHasLast(true);
            setHasNext(true);
        } else {
            setHasLast(false);
            setHasNext(false);
        }
    };
    const onhandleUsingArrow = () => {
        handleRightArrows();
        handleLeftArrows();
    }
    const onChangeCursor = (cursor: number) => {
        setCursor(cursor);
    }
    
    const onClickDBArrow = (newScreen: number) => {
        let cursor: number = 1;
        let tmpScreen: number = newScreen;
        if(newScreen === 1) { // 맨 처음값
            cursor = 1;
            tmpScreen = 1;
        } else { // 맨 끝값.
            const pageCursor = Math.floor(max / tableCount);
            cursor = (max / tableCount) %  1 === 0 ? pageCursor : pageCursor + 1;
            const pageTable = pageCount * tableCount;
            if((max / pageTable) % 1 !== 0) { // 소수점으로 나온경우 + 1 해준다.
                // 소수점인 경우
                tmpScreen = Math.floor(max / pageTable) + 1;
            } else {
                // 소수점이 아닌 경우
                tmpScreen = Math.floor(max / pageTable);
            }
        }
        setCursor(cursor);
        setScreen(tmpScreen);
    }

    const onClickArrow = (newScreen: number) => {
        let cursor: number = 1;
        if(newScreen < screen) { // 이전 스크린 [ > ]
            cursor = newScreen * pageCount;
        } else { // 이후 스크린 [ < ]
            const startPageNumber: number = newScreen * pageCount - (pageCount - 1);
            cursor = startPageNumber;
        }
        onChangeCursor(cursor);
        setScreen(newScreen);
    }

    useEffect(() => {
        onhandleUsingArrow();
        window.scrollTo({top: 0});
    }, [cursor, screen, onChangeCursor]);
    
    return {
        cursor,
        screen,
        totalCount,
        onChangeCursor,
        hasFirst,
        hasLast,
        hasPrev,
        hasNext,
        onhandleUsingArrow,
        onClickArrow,
        onClickDBArrow
    };
}

const useFetch = (): { value: IContext } => {
    const [max, setMax] = useState<number>(0);  
    const pagination = usePagination(max, START_OFFSET, START_SCREEN);

    const [ getUsers, { data, loading }] = useLazyQuery<getUsers, getUsersVariables>(GET_USERS, {
        fetchPolicy: "cache-and-network",
        onCompleted: data => {
            console.log("GET_USERS OK: ", data);
            setMax(data.GetUsers.totalUsers || 0);
        },
        onError: data => {
            console.log("GET_USERS ERROR: ", data);
        }
    });
    
    const { cursor, screen } = pagination;
    const users = data ? data.GetUsers.users : null;
    
    console.log("USERS:", users );

    useEffect(() => {
        const { tableCount } = PaginationSettings;
        getUsers({
            variables: {
                take: tableCount,
                skip: cursor * tableCount - tableCount
            }
        });
    }, [ cursor ]);

    return {
        value: {
            users,
            pagination,
            max,
            loading,
        }
    }
};

const AdminUsersProvider: React.FC<any> = ({
    children
}) => (
    <AdminUsersContext.Provider { ...useFetch() }>
        {
            children
        }
    </AdminUsersContext.Provider>    
);

export { useAdminUsersContext };
export default AdminUsersProvider;