import { gql } from "apollo-boost";

export const GET_GENDERS = gql`
    query getGender($dateFrom: Date $dateTo: Date) {
        GetGenders(dateFrom: $dateFrom dateTo: $dateTo) {
            ok
            error
            monthGender {
                month
                men
                women
            }
        }
    }
`;