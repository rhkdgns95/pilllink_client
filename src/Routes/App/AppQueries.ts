import { gql } from "apollo-boost" ;
import { FRAGMENT_USER, FRAGMENT_BOARD } from "../../fragments";

export const GET_MY_PROFILE = gql`
    query getMyProfile {
        GetMyProfile {
            ok
            error 
            user {
                ...ItemUser
            }
        }
    }
    ${FRAGMENT_USER}
`;

export const CREATE_BOARD = gql`
    mutation createBoard(
        $text: String!
        $selector: SELECTOR!
    ) {
        CreateBoard(
            text: $text
            selector: $selector
        ) {
            ok
            error
            boardId
        }
    }
`;