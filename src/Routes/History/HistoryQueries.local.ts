import { gql } from "apollo-boost";

export const GET_CACHE_RECORDS = gql`
    {
        GetMyMedicalRecords @client {
            MedicalRecords {
                id
                lang
            }
        }
    }
`;