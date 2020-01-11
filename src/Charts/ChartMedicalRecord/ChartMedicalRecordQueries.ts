import { gql } from "apollo-boost";

export const GET_PERIOD_MEDICAL_RECORD = gql`
    query getPeriodMedicalRecord($date: GetPeriodMedicalRecordArgs!) {
        GetPeriodMedicalRecord(date: $date) {
            ok
            error   
            data {
                title
                count
            }
        }
    }
`;