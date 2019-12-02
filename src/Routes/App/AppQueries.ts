import { gql } from "apollo-boost" ;
import { FRAGMENT_USER } from "../../fragments";

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