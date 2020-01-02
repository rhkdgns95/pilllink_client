import { gql } from "apollo-boost";
import { FRAGMENT_BOARD } from "../../fragments";

export const GET_MY_BOARDS = gql`
    query getMyBoards($skip: Int! $take: Int!) {
        GetMyBoards(
            skip: $skip
            take: $take
        ) {
            ok
            error
            boards {
                ...ItemBoard
            }
        }
    }
    ${FRAGMENT_BOARD}
`;