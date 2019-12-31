import { gql } from "apollo-boost";
import { FRAGMENT_USER } from "../../fragments";

export const GET_USERS = gql`
    query getUsers(
        $take: Int!
        $skip: Int!
    ) {
        GetUsers(
            take: $take
            skip: $skip
        ) {
            ok
            error
            users {
                ...ItemUser
            }
            totalUsers
        }
    }
    ${FRAGMENT_USER}
`;