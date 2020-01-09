import { gql } from "apollo-boost";
import { FRAGMENT_USER } from "./../../fragments";

export const GET_ADDRESS_USER = gql`
    query getAddressUser {
        GetAddressUser {
            ok
            error
            users {
                ...ItemUser
            }
        }
    }
    ${FRAGMENT_USER}
`;