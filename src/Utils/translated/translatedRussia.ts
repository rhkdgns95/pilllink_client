import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedRussia: ICountry = {
    name: "русский",
    value: "RU",
    imgPath: "/images/lang/lang_ru.svg",
    selectors: [
        {
            ...CommonSelectors["ALLERGY"],
            name: "RU_알레르기",
            details: [
                {
                    name: "RU_해당사항 없음",
                    ...CommonSelectors["ALLERGY"].details["NULL"]
                },
                {
                    name: "RU_진통제",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_PAINKILLER"]
                },
                {
                    name: "RU_유당",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_ANTIBIOTIC"]
                }
            ]
        },
        {
            ...CommonSelectors["PREGNANT"],
            name: "RU_임신여부",
            details: [
                {
                    name: "RU_임신 X",
                    ...CommonSelectors["PREGNANT"].details["NULL"]
                },
                {
                    name: "RU_임신 O",
                    ...CommonSelectors["PREGNANT"].details["PREGNANT_TRUE"]
                }
            ]
        },
        {
            ...CommonSelectors["CHRONICDISEASES"],
            name: "RU_만성질환",
            details: [
                {
                    name: "RU_해당사항 없음",
                    ...CommonSelectors["CHRONICDISEASES"].details["NULL"]
                },
                {
                    name: "RU_간질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_LIVER"]
                },
                {
                    name: "RU_신장질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_KIDNEY"]
                }
            ]
        }
    ],
    symptoms: [
        { 
            ...CommonSymptoms[COLD],
            name: "RU_감기",
            details: [
                { 
                    name: "RU_기침",
                    ...CommonSymptomsText.cold_cough
                },
                {
                    name: "RU_두통",
                    ...CommonSymptomsText.cold_headache
                },
                {
                    name: "RU_콧물",
                    ...CommonSymptomsText.cold_runnyNose
                },
                {
                    name: "RU_목아픔",
                    ...CommonSymptomsText.cold_soreThroat
                },
                {
                    name: "RU_열",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "RU_몸살",
                    ...CommonSymptomsText.cold_bodyache
                }
            ]
        },
        {
            ...CommonSymptoms[HANGOVER],
            name: "RU_숙취",
            details: [
                {
                    name: "RU_두통",
                    ...CommonSymptomsText.hangover_headache
                },
                {
                    name: "RU_설사",
                    ...CommonSymptomsText.hangover_diarrhea
                },
                {
                    name: "RU_구토",
                    ...CommonSymptomsText.hangover_vomit
                },
                {
                    name: "RU_메스꺼움",
                    ...CommonSymptomsText.hangover_nausea
                },
                {
                    name: "RU_속쓰림",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[STOMACHACHE],
            name: "RU_복통",
            details: [
                {
                    name: "RU_설사",
                    ...CommonSymptomsText.stomachache_diarrhead
                },
                {
                    name: "RU_생리통",
                    ...CommonSymptomsText.stomachache_periodCramps
                },
                {
                    name: "RU_소화불량",
                    ...CommonSymptomsText.stomachache_indigestion
                },
                {
                    name: "RU_변비",
                    ...CommonSymptomsText.stomachache_constipation
                },
                {
                    name: "RU_메스꺼움",
                    ...CommonSymptomsText.stomachache_nausea
                },
                {
                    name: "RU_속쓰림",
                    ...CommonSymptomsText.stomachache_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[SKIN],
            name: "RU_피부질환",
            details: [
                {
                    name: "RU_철과상",
                    ...CommonSymptomsText.skin_abrasion
                },
                {
                    name: "RU_여드름",
                    ...CommonSymptomsText.skin_acne
                },
                {
                    name: "RU_두드러기",
                    ...CommonSymptomsText.skin_rash
                },
                {
                    name: "RU_습진",
                    ...CommonSymptomsText.skin_eczema
                },
                {
                    name: "RU_수포",
                    ...CommonSymptomsText.skin_blister
                },
                {
                    name: "RU_무좀",
                    ...CommonSymptomsText.skin_athletesfoot
                }
            ]
        },
        {
            ...CommonSymptoms[FEMALE],
            name: "RU_여성질환",
            details: [
                {
                    name: "RU_생리통",
                    ...CommonSymptomsText.female_periodCramp
                },
                {
                    name: "RU_임신테스트",
                    ...CommonSymptomsText.female_pregnancyTest
                },
                {
                    name: "RU_경구피임약",
                    ...CommonSymptomsText.female_oralBirthControl
                },
                {
                    name: "RU_사후피임약",
                    ...CommonSymptomsText.female_postCoitalBirthControl
                },
            ]
        },
        {
            ...CommonSymptoms[OTHER],
            name: "RU_기타",
            details: [
                {
                    name: "RU_기타_임시",
                    ...CommonSymptomsText.other_tmp
                }
            ]
        }
    ]
};