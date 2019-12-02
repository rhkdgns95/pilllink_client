import { gql } from "apollo-boost";
import { FRAGMENT_USER } from "../../fragments";

export const GET_MY_PROFIE = gql`
    {
        GetMyProfile {
            ok
            error
            user {
                id
                ...ItemUser
            }
        }
    }
    ${FRAGMENT_USER}
`;