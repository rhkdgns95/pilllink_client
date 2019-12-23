import { gql } from "apollo-boost";

export const CREATE_MEDICAL_RECORD = gql`
    mutation createMedicalRecord(
        $lang: Language!
        $status: Status!
        $allergy: Allergy!
        $pregnant: Pregnant!
        $chronicDiseases: ChronicDiseases!
        
        # Cold - 감기
        $cold_cough: Boolean #기침
        $cold_headache: Boolean #두통
        $cold_runnyNose: Boolean #콧물
        $cold_soreThroat: Boolean #목아픔
        $cold_fever: Boolean #열
        $cold_bodyache: Boolean #몸살
        # Hangover - 숙취
        $hangover_headache: Boolean #두통
        $hangover_diarrhea: Boolean #설사
        $hangover_vomit: Boolean #구토
        $hangover_nausea: Boolean #메스꺼움
        $hangover_heartburn: Boolean #속쓰림
        # Stomachache - 복통
        $stomachache_diarrhead: Boolean #설사
        $stomachache_periodCramps: Boolean #생리통
        $stomachache_indigestion: Boolean #소화불량
        $stomachache_constipation: Boolean #변비
        $stomachache_nausea: Boolean #메스꺼움
        $stomachache_heartburn: Boolean #속쓰림
        # Skin - 피부질환
        $skin_abrasion: Boolean #철과상
        $skin_acne: Boolean #여드름
        $skin_rash: Boolean #두드러기
        $skin_eczema: Boolean #습진
        $skin_blister: Boolean #수포
        $skin_athletesfoot: Boolean #무좀
        # Female - 여성질환
        $female_periodCramp: Boolean #생리통
        $female_pregnancyTest: Boolean #임신테스트
        $female_oralBirthControl: Boolean #경구피임약
        $female_postCoitalBirthControl: Boolean #사후피임약
        # Other - 응급처치
        $other_bandAid: Boolean
        $other_bandage: Boolean
        $other_disinfectant: Boolean
        $other_salineSolution: Boolean
        $other_artificialTears: Boolean
    ) {
        CreateMedicalRecord(
            lang: $lang
            status: $status
            allergy: $allergy
            pregnant: $pregnant
            chronicDiseases: $chronicDiseases
            cold_cough: $cold_cough
            cold_headache: $cold_headache
            cold_runnyNose: $cold_runnyNose
            cold_soreThroat: $cold_soreThroat
            cold_fever: $cold_fever
            cold_bodyache: $cold_bodyache
            hangover_headache: $hangover_headache
            hangover_diarrhea: $hangover_diarrhea
            hangover_vomit: $hangover_vomit
            hangover_nausea: $hangover_nausea
            hangover_heartburn: $hangover_heartburn
            stomachache_diarrhead: $stomachache_diarrhead
            stomachache_periodCramps: $stomachache_periodCramps
            stomachache_indigestion: $stomachache_indigestion
            stomachache_constipation: $stomachache_constipation
            stomachache_nausea: $stomachache_nausea
            stomachache_heartburn: $stomachache_heartburn
            skin_abrasion: $skin_abrasion
            skin_acne: $skin_acne
            skin_rash: $skin_rash
            skin_eczema: $skin_eczema
            skin_blister: $skin_blister
            skin_athletesfoot: $skin_athletesfoot
            female_periodCramp: $female_periodCramp
            female_pregnancyTest: $female_pregnancyTest
            female_oralBirthControl: $female_oralBirthControl
            female_postCoitalBirthControl: $female_postCoitalBirthControl
            other_bandAid: $other_bandAid
            other_bandage: $other_bandage
            other_disinfectant: $other_disinfectant
            other_salineSolution: $other_salineSolution
            other_artificialTears: $other_artificialTears
        ) {
            ok
            error
            medicalRecordId
        }
    }
`;