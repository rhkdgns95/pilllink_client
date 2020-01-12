import { gql } from "apollo-boost" ;

export const FRAGMENT_USER = gql`
    fragment ItemUser on User {
        id
        userId
        fullName
        firstName
        lastName
        email
        nationality
        gender
        age
        isAbroad
        abroadAddress
        addressList
        addressItem
        medicalRecordsCount
        boardCount
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
        
        # confirmId
        confirmCount
        createdAt
        updatedAt
    }
    fragment ItemConfirm on ConfirmRecord {
        id

        res_perOneTimeCnt
        res_amount
        res_way
        
        TO_MORNING
        TO_LUNCH
        TO_DINNER
        TO_SLEEP
        
        CAUTION_SLEEP
        CAUTION_STOMACAHCHE
        CAUTION_RASH
        CAUTION_DIZZY
        CAUTION_DIARRHEA
        CAUTION_BLOODPRESSURE
    }
    fragment ItemCold on MedicalRecord {
        cold_cough
        cold_headache
        cold_runnyNose
        cold_soreThroat
        cold_fever
        cold_bodyache
    }
    fragment ItemHangover on MedicalRecord {
        hangover_headache
        hangover_diarrhea
        hangover_vomit
        hangover_nausea
        hangover_heartburn
    }
    fragment ItemStomachache on MedicalRecord {
        stomachache_diarrhead
        stomachache_periodCramps
        stomachache_indigestion
        stomachache_constipation
        stomachache_nausea
        stomachache_heartburn
    }
    fragment ItemSkin on MedicalRecord {
        skin_abrasion
        skin_acne
        skin_rash
        skin_eczema
        skin_blister
        skin_athletesfoot
    }
    fragment ItemFemale on MedicalRecord {
        female_periodCramp
        female_pregnancyTest
        female_oralBirthControl
        female_postCoitalBirthControl
    }
    fragment ItemOther on MedicalRecord {
        other_bandAid
        other_bandage
        other_disinfectant
        other_salineSolution
        other_artificialTears
        other_mensoredamCream #멘소래담 크림형
        other_mensoredamSpray # 멘소레담 스프레이형
        other_painKillingPatch #파스
        other_painKillingPatchWater #물파스
    }
`;

export const FRAGMENT_BOARD = gql`
    fragment ItemBoard on Board {
        id
        text
        selector
        result
        writerId
        # writer {
            # ...ItemUser
            # fullName
        # }
        selector
        createdAt
        updatedAt
    }
`;