import React, { createContext, useContext, useEffect, useState } from "react";
import { useLazyQuery } from "react-apollo";
import { getMyBoards, getMyBoards_GetMyBoards_boards, getMyBoardsVariables } from "../../Types/api";
import { GET_MY_BOARDS } from "./SuggestionQueries";
import { useAppContext } from "../App/AppProvider";

interface IContext {
    boards: Array<getMyBoards_GetMyBoards_boards | null> | null;
    loading: boolean;
    pagination: IUsePagination;
    max: number;
}
const InitContext: IContext = {
    boards: [],
    loading: false,
    pagination: { cursor: 1, screen: 1, onChangeCursor: () => {}, totalCount: 0, hasFirst: false, hasLast: false, hasPrev: false, hasNext: false, onClickArrow: () => {}, onClickDBArrow: () => {}, onhandleUsingArrow: () => {} },
    max: 0
};

const SuggestionContext: React.Context<IContext> = createContext<IContext>(InitContext);

const useSuggestionContext = () => useContext(SuggestionContext);


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
    const { user, handleTitle } = useAppContext();
    const [max, setMax] = useState<number>(0);  
    const pagination = usePagination(max, START_OFFSET, START_SCREEN);

    const [getBoards, { data, loading }] = useLazyQuery<getMyBoards, getMyBoardsVariables>(GET_MY_BOARDS, {
        fetchPolicy: "cache-and-network",
        onCompleted: data => {
            // console.log("GetMyBoards onCompletd: ", data);
        },
        onError: data => {
            console.log("GetMyBoards onError: ", data);
        },
    });
    
    const { cursor } = pagination;

    useEffect(() => {
        handleTitle("Pil+Link | My Suggestion");
    }, []);

    useEffect(() => {
        const { tableCount } = PaginationSettings;
        getBoards({
            variables: {
                take: tableCount,
                skip: cursor * tableCount - tableCount
            }
        });
        // onhandleUsingArrow();
    }, [ cursor ]);
    useEffect(() => {
        setMax(user ? user!.boardCount! : 0);
    }, [user]);

    const boards = data ? data.GetMyBoards.boards : null;
    
    return {
        value: {
            boards,
            loading,
            pagination,
            max
        }
    }
}

const SuggestionProvider: React.FC<any> = ({
    children
}) => (
    <SuggestionContext.Provider { ...useFetch() }>
        {
            children
        }
    </SuggestionContext.Provider>
);

export { useSuggestionContext };
export default SuggestionProvider;