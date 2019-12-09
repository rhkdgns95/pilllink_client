import { gql } from "apollo-boost";

export const CREATE_MEDICAL_RECORD = gql`
    mutation createMedicalRecord(
        $lang: Language!
        $status: Status!
        $allergy: Allergy!
        $pregnant: Pregnant!
        $chronicDiseases: ChronicDiseases!
        $cold_cough: Boolean
        $cold_headache: Boolean
        $cold_snot: Boolean!
        $cold_throat: Boolean
        $cold_fever: Boolean
        $cold_muscle: Boolean
        $colic_diarrhead: Boolean
        $colic_periodCramps: Boolean
        $colic_indigestion: Boolean
        $colic_constipation: Boolean
        $colic_sickness: Boolean
        $colic_heartburn: Boolean
        $female_tmp: Boolean
        $hangover_headache: Boolean
        $hangover_diarrhea: Boolean
        $hangover_throwup: Boolean
        $hangover_sickness: Boolean
        $hangover_heartburn: Boolean
        $headache_headache: Boolean
        $headache_migraine: Boolean
        $skin_abrasion: Boolean
        $skin_acne: Boolean
        $skin_hives: Boolean
        $skin_eczema: Boolean
        $skin_blister: Boolean
        $skin_athletesfoot: Boolean
        $other_tmp: Boolean
        $toothache_needle: Boolean
        $toothache_stomatitis: Boolean
        $toothache_drylips: Boolean
        $toothache_badbreath: Boolean
        $toothache_gum: Boolean
        $toothache_drymouth: Boolean
    ) {
        CreateMedicalRecord(
            lang: $lang
            status: $status
            allergy: $allergy
            pregnant: $pregnant
            chronicDiseases: $chronicDiseases
            cold_cough: $cold_cough
            cold_headache: $cold_headache
            cold_snot: $cold_snot
            cold_throat: $cold_throat
            cold_fever: $cold_fever
            cold_muscle: $cold_muscle
            colic_diarrhead: $colic_diarrhead
            colic_periodCramps: $colic_periodCramps
            colic_indigestion: $colic_indigestion
            colic_constipation: $colic_constipation
            colic_sickness: $colic_sickness
            colic_heartburn: $colic_heartburn
            female_tmp: $female_tmp
            hangover_headache: $hangover_headache
            hangover_diarrhea: $hangover_diarrhea
            hangover_throwup: $hangover_throwup
            hangover_sickness: $hangover_sickness
            hangover_heartburn: $hangover_heartburn
            headache_headache: $headache_headache
            headache_migraine: $headache_migraine
            skin_abrasion: $skin_abrasion
            skin_acne: $skin_acne
            skin_hives: $skin_hives
            skin_eczema: $skin_eczema
            skin_blister: $skin_blister
            skin_athletesfoot: $skin_athletesfoot
            other_tmp: $other_tmp
            toothache_needle: $toothache_needle
            toothache_stomatitis: $toothache_stomatitis
            toothache_drylips: $toothache_drylips
            toothache_badbreath: $toothache_badbreath
            toothache_gum: $toothache_gum
            toothache_drymouth: $toothache_drymouth
        ) {
            ok
            error
            medicalRecordId
        }
    }
`;