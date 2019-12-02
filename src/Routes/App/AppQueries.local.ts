import { gql } from "apollo-boost";

export const IS_LOGGED = gql`
    {
        auth @client {
            loggedIn 
        }
    }
`;
