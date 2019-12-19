import { gql } from "apollo-boost";
import { FRAGMENT_MEDICAL_RECORDS } from "../../fragments";

export const GET_MY_RECORDS = gql`
    query getMyMedicalRecords($first: Int $offset: Int){
        GetMyMedicalRecords(
            first: $first
            offset: $offset
        ) {
            ok
            error
            totalCount
            medicalRecords {
                
                ...ItemMedicalRecord
                ...ItemCold
                ...ItemHangover
                ...ItemStomachache
                ...ItemSkin
                ...ItemFemale
                ...ItemOther
                confirm {
                    ...ItemConfirm
                }
            }
        }
    }
    ${FRAGMENT_MEDICAL_RECORDS}
`;

