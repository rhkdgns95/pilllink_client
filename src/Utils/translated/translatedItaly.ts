import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedItaly: ICountry = {
    name: "Italiano",
    value: "IT",
    imgPath: "/images/lang/lang_it.svg",
    selectors: [
        {
            ...CommonSelectors["ALLERGY"],
            name: "IT_알레르기",
            details: [
                {
                    name: "IT_해당사항 없음",
                    ...CommonSelectors["ALLERGY"].details["NULL"]
                },
                {
                    name: "IT_진통제",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_PAINKILLER"]
                },
                {
                    name: "IT_유당",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_ANTIBIOTIC"]
                }
            ]
        },
        {
            ...CommonSelectors["PREGNANT"],
            name: "IT_임신여부",
            details: [
                {
                    name: "IT_임신 X",
                    ...CommonSelectors["PREGNANT"].details["NULL"]
                },
                {
                    name: "IT_임신 O",
                    ...CommonSelectors["PREGNANT"].details["PREGNANT_TRUE"]
                }
            ]
        },
        {
            ...CommonSelectors["CHRONICDISEASES"],
            name: "IT_만성질환",
            details: [
                {
                    name: "IT_해당사항 없음",
                    ...CommonSelectors["CHRONICDISEASES"].details["NULL"]
                },
                {
                    name: "IT_간질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_LIVER"]
                },
                {
                    name: "IT_신장질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_KIDNEY"]
                }
            ]
        }
    ],
    symptoms: [
        { 
            ...CommonSymptoms[COLD],
            name: "IT_감기",
            details: [
                { 
                    name: "IT_기침",
                    ...CommonSymptomsText.cold_cough
                },
                {
                    name: "IT_두통",
                    ...CommonSymptomsText.cold_headache
                },
                {
                    name: "IT_콧물",
                    ...CommonSymptomsText.cold_runnyNose
                },
                {
                    name: "IT_목아픔",
                    ...CommonSymptomsText.cold_soreThroat
                },
                {
                    name: "IT_열",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "IT_몸살",
                    ...CommonSymptomsText.cold_bodyache
                }
            ]
        },
        {
            ...CommonSymptoms[HANGOVER],
            name: "IT_숙취",
            details: [
                {
                    name: "IT_두통",
                    ...CommonSymptomsText.hangover_headache
                },
                {
                    name: "IT_설사",
                    ...CommonSymptomsText.hangover_diarrhea
                },
                {
                    name: "IT_구토",
                    ...CommonSymptomsText.hangover_vomit
                },
                {
                    name: "IT_메스꺼움",
                    ...CommonSymptomsText.hangover_nausea
                },
                {
                    name: "IT_속쓰림",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[STOMACHACHE],
            name: "IT_복통",
            details: [
                {
                    name: "IT_설사",
                    ...CommonSymptomsText.stomachache_diarrhead
                },
                {
                    name: "IT_생리통",
                    ...CommonSymptomsText.stomachache_periodCramps
                },
                {
                    name: "IT_소화불량",
                    ...CommonSymptomsText.stomachache_indigestion
                },
                {
                    name: "IT_변비",
                    ...CommonSymptomsText.stomachache_constipation
                },
                {
                    name: "IT_메스꺼움",
                    ...CommonSymptomsText.stomachache_nausea
                },
                {
                    name: "IT_속쓰림",
                    ...CommonSymptomsText.stomachache_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[SKIN],
            name: "IT_피부질환",
            details: [
                {
                    name: "IT_철과상",
                    ...CommonSymptomsText.skin_abrasion
                },
                {
                    name: "IT_여드름",
                    ...CommonSymptomsText.skin_acne
                },
                {
                    name: "IT_두드러기",
                    ...CommonSymptomsText.skin_rash
                },
                {
                    name: "IT_습진",
                    ...CommonSymptomsText.skin_eczema
                },
                {
                    name: "IT_수포",
                    ...CommonSymptomsText.skin_blister
                },
                {
                    name: "IT_무좀",
                    ...CommonSymptomsText.skin_athletesfoot
                }
            ]
        },
        {
            ...CommonSymptoms[FEMALE],
            name: "IT_여성질환",
            details: [
                {
                    name: "IT_생리통",
                    ...CommonSymptomsText.female_periodCramp
                },
                {
                    name: "IT_임신테스트",
                    ...CommonSymptomsText.female_pregnancyTest
                },
                {
                    name: "IT_경구피임약",
                    ...CommonSymptomsText.female_oralBirthControl
                },
                {
                    name: "IT_사후피임약",
                    ...CommonSymptomsText.female_postCoitalBirthControl
                },
            ]
        },
        {
            ...CommonSymptoms[OTHER],
            name: "IT_기타",
            details: [
                {
                    name: "IT_기타_임시",
                    ...CommonSymptomsText.other_tmp
                }
            ]
        }
    ]
};