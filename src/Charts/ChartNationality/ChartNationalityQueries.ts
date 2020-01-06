import { gql } from "apollo-boost";

export const GET_NATIONALITY_USER = gql`
    query getNationalityUser {
        GetNationalityUser {
            ok
            error 
            countries {
                name
                count
            }
        }
    }
`;