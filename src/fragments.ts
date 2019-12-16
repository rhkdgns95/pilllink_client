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
        createdAt
        updatedAt
    }
`;

export const FRAGMENT_MEDICAL_RECORDS = gql`
    
    fragment ItemMedicalRecord on MedicalRecord {
        id
        lang
        status
        
        allergy
        pregnant
        chronicDiseases
        
        confirmId
        createdAt
        updatedAt
    }
    fragment ItemConfirm on ConfirmRecord {
        id
        createdAt
    }
    fragment ItemCold on MedicalRecord {
        cold_cough
        cold_headache
        cold_snot
        cold_throat
        cold_fever
        cold_muscle
    }
    fragment ItemColic on MedicalRecord {
        colic_diarrhead
        colic_periodCramps
        colic_indigestion
        colic_constipation
        colic_sickness
        colic_heartburn
    }
    fragment ItemFemale on MedicalRecord {
        female_tmp
    }
    fragment ItemHangover on MedicalRecord {
        hangover_headache
        hangover_diarrhea
        hangover_throwup
        hangover_sickness
        hangover_heartburn
    }
    fragment ItemHeadache on MedicalRecord {
        headache_headache
        headache_migraine
    }
    fragment ItemSkin on MedicalRecord {
        skin_abrasion
        skin_acne
        skin_hives
        skin_eczema
        skin_blister
        skin_athletesfoot
    }
    fragment ItemOther on MedicalRecord {
        other_tmp
    }
    fragment ItemToothache on MedicalRecord {
        toothache_needle
        toothache_stomatitis
        toothache_drylips
        toothache_badbreath
        toothache_gum
        toothache_drymouth
    }
`;