import { gql } from "apollo-boost" ;

export const FRAGMENT_USER = gql`
    fragment ItemUser on User {
        id
        fullName
        firstName
        lastName
        email
        nationality
        gender
        age
        isAbroad
        address
        medicalRecordsCount
    }
`;

export const FRAGMENT_MEDICAL_RECORDS = gql`
    fragment ItemMedicalRecord on MedicalRecord {
        id
        lang
    }
`;