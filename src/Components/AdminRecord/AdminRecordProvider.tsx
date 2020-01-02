import React, { createContext, useContext, useState } from "react";
import { getUserBoards, getUserBoards_GetUserBoards_boards, updateBoardResult, updateBoardResultVariables } from "../../Types/api";
import { GET_USER_BOARDS, UPDATE_BOARD_RESULT } from "./AdminRecordQueries";
import { useQuery, useMutation } from "react-apollo";
import { useAppContext } from "../../Routes/App/AppProvider";

interface IContext {
    boards: Array<getUserBoards_GetUserBoards_boards | null> | null;
    isModal: boolean;
    toggleModal: () => any;
    currentBoardId: number;
    handleCurrentBoardId: (id: number) => any;
    loading: boolean;
    handleUpdateBoardResult: (result: string) => any;
}
const InitContext: IContext = {
    boards: [],
    isModal: false,
    toggleModal: () => {},
    currentBoardId: -1,
    handleCurrentBoardId: () => {},
    loading: false,
    handleUpdateBoardResult: () => {}
};

const AdminRecordContext: React.Context<IContext> = createContext<IContext>(InitContext);

const useAdminRecordContext = () => useContext(AdminRecordContext);

const useFetch = (): { value: IContext } => {
    const { isProgress, handleProgress, timeOut } = useAppContext();
    const [ isModal, setIsModal ] = useState<boolean>(false);
    const [ currentBoardId, setCurrentBoardId ] = useState<number>(-1);

    const toggleModal = () => {
        setIsModal(!isModal);
    }

    const handleCurrentBoardId = (id: number) => {
        setCurrentBoardId(id);
    }

    const { data } = useQuery<getUserBoards, any>(GET_USER_BOARDS, {
        fetchPolicy: "network-only",
        onCompleted: data => {
            // console.log("GetUserBoards onCompleted: ", data);
        },
        onError: data => {
            console.log("GetUserBoards onError: ", data);
        }
    });

    const [updateBoardResult, { loading }] = useMutation<updateBoardResult, updateBoardResultVariables>(UPDATE_BOARD_RESULT, {
        refetchQueries: [
            { query: GET_USER_BOARDS }
        ],
        onCompleted: data => {
            setTimeout(() => {
                if(isProgress) {
                    handleProgress(false);
                }
                const { UpdateBoardResult: { ok, error }} = data;
                if(isModal) {
                    toggleModal();
                }
                if(ok) {
                    alert("Completed.");
                } else {
                    const message: string = "Failed: " + error;
                    alert(message);    
                }
                console.log("UpdateBoardResult onCompleted: ", data);
            }, timeOut);
            
        },
        onError: data => {
            setTimeout(() => {
                if(isProgress) {
                    handleProgress(false);
                    if(isModal) {
                        toggleModal();
                    }
                }  
            }, timeOut);
            console.log("UpdateBoardResult onError: ", data);
        }
    });

    const handleUpdateBoardResult = (result: string) => {
        if(!isProgress) {
            handleProgress(true);
            updateBoardResult({
                variables: {
                    boardId: currentBoardId,
                    result
                }
            });
        }
    };

    const boards = data ? data.GetUserBoards.boards : [];

    return {
        value: {
            boards,
            isModal,
            toggleModal,
            currentBoardId,
            handleCurrentBoardId,
            loading,
            handleUpdateBoardResult
            
        }
    };
}
const AdminRecordProvider: React.FC<any> = ({
    children
}) => (
    <AdminRecordContext.Provider { ...useFetch() }>
        {
            children
        }
    </AdminRecordContext.Provider>
);

export { useAdminRecordContext }; 
export default AdminRecordProvider;