import { gql } from "apollo-boost";

export const IS_LOGGED = gql`
    {
        auth @client {
            loggedIn 
        }
    }
`;
export const USER_LOGIN = gql`
    mutation userLoggedIn($token: String!) {
        UserLoggedIn(token: $token) @client
    }
`;

export const USER_LOGOUT = gql`
    mutation userLoggedOut {
        UserLoggedOut @client
    }
`;