import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedFrance: ICountry = {
    name: "La France",
    value: "FR",
    imgPath: "/images/lang/lang_fr.svg",
    selectors: [
        {
            ...CommonSelectors["ALLERGY"],
            name: "FR_알레르기",
            details: [
                {
                    name: "FR_해당사항 없음",
                    ...CommonSelectors["ALLERGY"].details["NULL"]
                },
                {
                    name: "FR_진통제",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_PAINKILLER"]
                },
                {
                    name: "FR_유당",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_ANTIBIOTIC"]
                }
            ]
        },
        {
            ...CommonSelectors["PREGNANT"],
            name: "FR_임신여부",
            details: [
                {
                    name: "FR_임신 X",
                    ...CommonSelectors["PREGNANT"].details["NULL"]
                },
                {
                    name: "FR_임신 O",
                    ...CommonSelectors["PREGNANT"].details["PREGNANT_TRUE"]
                }
            ]
        },
        {
            ...CommonSelectors["CHRONICDISEASES"],
            name: "FR_만성질환",
            details: [
                {
                    name: "FR_해당사항 없음",
                    ...CommonSelectors["CHRONICDISEASES"].details["NULL"]
                },
                {
                    name: "FR_간질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_LIVER"]
                },
                {
                    name: "FR_신장질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_KIDNEY"]
                }
            ]
        }
    ],
    symptoms: [
        { 
            ...CommonSymptoms[COLD],
            name: "FR_감기",
            details: [
                { 
                    name: "FR_기침",
                    ...CommonSymptomsText.cold_cough
                },
                {
                    name: "FR_두통",
                    ...CommonSymptomsText.cold_headache
                },
                {
                    name: "FR_콧물",
                    ...CommonSymptomsText.cold_runnyNose
                },
                {
                    name: "FR_목아픔",
                    ...CommonSymptomsText.cold_soreThroat
                },
                {
                    name: "FR_열",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "FR_몸살",
                    ...CommonSymptomsText.cold_bodyache
                }
            ]
        },
        {
            ...CommonSymptoms[HANGOVER],
            name: "FR_숙취",
            details: [
                {
                    name: "FR_두통",
                    ...CommonSymptomsText.hangover_headache
                },
                {
                    name: "FR_설사",
                    ...CommonSymptomsText.hangover_diarrhea
                },
                {
                    name: "FR_구토",
                    ...CommonSymptomsText.hangover_vomit
                },
                {
                    name: "FR_메스꺼움",
                    ...CommonSymptomsText.hangover_nausea
                },
                {
                    name: "FR_속쓰림",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[STOMACHACHE],
            name: "FR_복통",
            details: [
                {
                    name: "FR_설사",
                    ...CommonSymptomsText.stomachache_diarrhead
                },
                {
                    name: "FR_생리통",
                    ...CommonSymptomsText.stomachache_periodCramps
                },
                {
                    name: "FR_소화불량",
                    ...CommonSymptomsText.stomachache_indigestion
                },
                {
                    name: "FR_변비",
                    ...CommonSymptomsText.stomachache_constipation
                },
                {
                    name: "FR_메스꺼움",
                    ...CommonSymptomsText.stomachache_nausea
                },
                {
                    name: "FR_속쓰림",
                    ...CommonSymptomsText.stomachache_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[SKIN],
            name: "FR_피부질환",
            details: [
                {
                    name: "FR_철과상",
                    ...CommonSymptomsText.skin_abrasion
                },
                {
                    name: "FR_여드름",
                    ...CommonSymptomsText.skin_acne
                },
                {
                    name: "FR_두드러기",
                    ...CommonSymptomsText.skin_rash
                },
                {
                    name: "FR_습진",
                    ...CommonSymptomsText.skin_eczema
                },
                {
                    name: "FR_수포",
                    ...CommonSymptomsText.skin_blister
                },
                {
                    name: "FR_무좀",
                    ...CommonSymptomsText.skin_athletesfoot
                }
            ]
        },
        {
            ...CommonSymptoms[FEMALE],
            name: "FR_여성질환",
            details: [
                {
                    name: "FR_생리통",
                    ...CommonSymptomsText.female_periodCramp
                },
                {
                    name: "FR_임신테스트",
                    ...CommonSymptomsText.female_pregnancyTest
                },
                {
                    name: "FR_경구피임약",
                    ...CommonSymptomsText.female_oralBirthControl
                },
                {
                    name: "FR_사후피임약",
                    ...CommonSymptomsText.female_postCoitalBirthControl
                },
            ]
        },
        {
            ...CommonSymptoms[OTHER],
            name: "FR_기타",
            details: [
                {
                    name: "FR_기타_임시",
                    ...CommonSymptomsText.other_tmp
                }
            ]
        }
    ]
};