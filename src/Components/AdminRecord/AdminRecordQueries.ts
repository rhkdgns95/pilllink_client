import { gql } from "apollo-boost";
import { FRAGMENT_BOARD, FRAGMENT_USER } from "../../fragments";

export const GET_USER_BOARDS = gql`
    query getUserBoards {
        GetUserBoards {
            ok
            error
            boards {
                ...ItemBoard
                writer {
                    ...ItemUser
                }
            }
        }
    }
    ${FRAGMENT_BOARD}
    ${FRAGMENT_USER}
`;

export const UPDATE_BOARD_RESULT = gql`
    mutation updateBoardResult(
        $boardId: Int!
        $result: String!
    ) {
        UpdateBoardResult(
            boardId: $boardId
            result: $result
        ) {
            ok
            error
        }
    }
`;