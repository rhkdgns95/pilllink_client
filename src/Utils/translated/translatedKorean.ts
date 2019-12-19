import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedKorean: ICountry = {
    name: "한국어",
    value: "KO",
    imgPath: "/images/lang/lang_ko.svg",
    selectors: [
        {
            ...CommonSelectors["ALLERGY"],
            name: "알레르기",
            details: [
                {
                    name: "해당사항 없음",
                    ...CommonSelectors["ALLERGY"].details["NULL"]
                },
                {
                    name: "진통제",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_PAINKILLER"]
                },
                {
                    name: "유당",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_ANTIBIOTIC"]
                }
            ]
        },
        {
            ...CommonSelectors["PREGNANT"],
            name: "임신여부",
            details: [
                {
                    name: "임신 X",
                    ...CommonSelectors["PREGNANT"].details["NULL"]
                },
                {
                    name: "임신 O",
                    ...CommonSelectors["PREGNANT"].details["PREGNANT_TRUE"]
                }
            ]
        },
        {
            ...CommonSelectors["CHRONICDISEASES"],
            name: "만성질환",
            details: [
                {
                    name: "해당사항 없음",
                    ...CommonSelectors["CHRONICDISEASES"].details["NULL"]
                },
                {
                    name: "간질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_LIVER"]
                },
                {
                    name: "신장질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_KIDNEY"]
                }
            ]
        }
    ],
    symptoms: [
        { 
            ...CommonSymptoms[COLD],
            name: "감기",
            details: [
                { 
                    name: "기침",
                    ...CommonSymptomsText.cold_cough
                },
                {
                    name: "두통",
                    ...CommonSymptomsText.cold_headache
                },
                {
                    name: "콧물",
                    ...CommonSymptomsText.cold_runnyNose
                },
                {
                    name: "목아픔",
                    ...CommonSymptomsText.cold_soreThroat
                },
                {
                    name: "열",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "몸살",
                    ...CommonSymptomsText.cold_bodyache
                }
            ]
        },
        {
            ...CommonSymptoms[HANGOVER],
            name: "숙취",
            details: [
                {
                    name: "두통",
                    ...CommonSymptomsText.hangover_headache
                },
                {
                    name: "설사",
                    ...CommonSymptomsText.hangover_diarrhea
                },
                {
                    name: "구토",
                    ...CommonSymptomsText.hangover_vomit
                },
                {
                    name: "메스꺼움",
                    ...CommonSymptomsText.hangover_nausea
                },
                {
                    name: "속쓰림",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[STOMACHACHE],
            name: "복통",
            details: [
                {
                    name: "설사",
                    ...CommonSymptomsText.stomachache_diarrhead
                },
                {
                    name: "생리통",
                    ...CommonSymptomsText.stomachache_periodCramps
                },
                {
                    name: "소화불량",
                    ...CommonSymptomsText.stomachache_indigestion
                },
                {
                    name: "변비",
                    ...CommonSymptomsText.stomachache_constipation
                },
                {
                    name: "메스꺼움",
                    ...CommonSymptomsText.stomachache_nausea
                },
                {
                    name: "속쓰림",
                    ...CommonSymptomsText.stomachache_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[SKIN],
            name: "피부질환",
            details: [
                {
                    name: "철과상",
                    ...CommonSymptomsText.skin_abrasion
                },
                {
                    name: "여드름",
                    ...CommonSymptomsText.skin_acne
                },
                {
                    name: "두드러기",
                    ...CommonSymptomsText.skin_rash
                },
                {
                    name: "습진",
                    ...CommonSymptomsText.skin_eczema
                },
                {
                    name: "수포",
                    ...CommonSymptomsText.skin_blister
                },
                {
                    name: "무좀",
                    ...CommonSymptomsText.skin_athletesfoot
                }
            ]
        },
        {
            ...CommonSymptoms[FEMALE],
            name: "여성질환",
            details: [
                {
                    name: "생리통",
                    ...CommonSymptomsText.female_periodCramp
                },
                {
                    name: "임신테스트",
                    ...CommonSymptomsText.female_pregnancyTest
                },
                {
                    name: "경구피임약",
                    ...CommonSymptomsText.female_oralBirthControl
                },
                {
                    name: "사후피임약",
                    ...CommonSymptomsText.female_postCoitalBirthControl
                },
            ]
        },
        {
            ...CommonSymptoms[OTHER],
            name: "기타",
            details: [
                {
                    name: "기타_임시",
                    ...CommonSymptomsText.other_tmp
                }
            ]
        }
    ]
};