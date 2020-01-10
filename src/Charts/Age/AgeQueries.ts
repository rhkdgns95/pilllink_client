import { gql } from "apollo-boost";

export const GET_AGE_USER = gql`
    query getAgeUser {
        GetAgeUser {
            ok
            error
            userAge {
                title
                count
            }
        }
    }
`;