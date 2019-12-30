import { gql } from "apollo-boost";

export const LOGIN_QUERY = gql`
    query emailSignIn(
        $userId: String!
        $password: String!
    ) {
        EmailSignIn(
            userId: $userId
            password: $password
        ) {
            ok
            error
            token
        }
    }
`;

export const FORGOT_MY_ACCOUNT = gql`
    query forgotMyAccount(
        $firstName: String!
        $lastName: String!
        $email: String!
    ) {
      ForgotMyAccount(
          firstName: $firstName
          lastName: $lastName
          email: $email
      ) {
        ok
        error
        userId
      }
    }
`;

export const RESET_PASSWORD = gql`
    mutation resetPassword(
        $userId: String!
        $email: String!
    ) {
        ResetPassword(
            userId: $userId
            email: $email
        ) {
            ok
            error
        }
    }
`;