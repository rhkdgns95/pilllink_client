import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedMongol: ICountry = {
    name: "Монгол",
    value: "MO",
    imgPath: "/images/lang/lang_mo.svg",
    selectors: [
        {
            ...CommonSelectors["ALLERGY"],
            name: "MO_알레르기",
            details: [
                {
                    name: "MO_해당사항 없음",
                    ...CommonSelectors["ALLERGY"].details["NULL"]
                },
                {
                    name: "MO_진통제",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_PAINKILLER"]
                },
                {
                    name: "MO_유당",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_ANTIBIOTIC"]
                }
            ]
        },
        {
            ...CommonSelectors["PREGNANT"],
            name: "MO_임신여부",
            details: [
                {
                    name: "MO_임신 X",
                    ...CommonSelectors["PREGNANT"].details["NULL"]
                },
                {
                    name: "MO_임신 O",
                    ...CommonSelectors["PREGNANT"].details["PREGNANT_TRUE"]
                }
            ]
        },
        {
            ...CommonSelectors["CHRONICDISEASES"],
            name: "MO_만성질환",
            details: [
                {
                    name: "MO_해당사항 없음",
                    ...CommonSelectors["CHRONICDISEASES"].details["NULL"]
                },
                {
                    name: "MO_간질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_LIVER"]
                },
                {
                    name: "MO_신장질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_KIDNEY"]
                }
            ]
        }
    ],
    symptoms: [
        { 
            ...CommonSymptoms[COLD],
            name: "MO_감기",
            details: [
                { 
                    name: "MO_기침",
                    ...CommonSymptomsText.cold_cough
                },
                {
                    name: "MO_두통",
                    ...CommonSymptomsText.cold_headache
                },
                {
                    name: "MO_콧물",
                    ...CommonSymptomsText.cold_runnyNose
                },
                {
                    name: "MO_목아픔",
                    ...CommonSymptomsText.cold_soreThroat
                },
                {
                    name: "MO_열",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "MO_몸살",
                    ...CommonSymptomsText.cold_bodyache
                }
            ]
        },
        {
            ...CommonSymptoms[HANGOVER],
            name: "MO_숙취",
            details: [
                {
                    name: "MO_두통",
                    ...CommonSymptomsText.hangover_headache
                },
                {
                    name: "MO_설사",
                    ...CommonSymptomsText.hangover_diarrhea
                },
                {
                    name: "MO_구토",
                    ...CommonSymptomsText.hangover_vomit
                },
                {
                    name: "MO_메스꺼움",
                    ...CommonSymptomsText.hangover_nausea
                },
                {
                    name: "MO_속쓰림",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[STOMACHACHE],
            name: "MO_복통",
            details: [
                {
                    name: "MO_설사",
                    ...CommonSymptomsText.stomachache_diarrhead
                },
                {
                    name: "MO_생리통",
                    ...CommonSymptomsText.stomachache_periodCramps
                },
                {
                    name: "MO_소화불량",
                    ...CommonSymptomsText.stomachache_indigestion
                },
                {
                    name: "MO_변비",
                    ...CommonSymptomsText.stomachache_constipation
                },
                {
                    name: "MO_메스꺼움",
                    ...CommonSymptomsText.stomachache_nausea
                },
                {
                    name: "MO_속쓰림",
                    ...CommonSymptomsText.stomachache_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[SKIN],
            name: "MO_피부질환",
            details: [
                {
                    name: "MO_철과상",
                    ...CommonSymptomsText.skin_abrasion
                },
                {
                    name: "MO_여드름",
                    ...CommonSymptomsText.skin_acne
                },
                {
                    name: "MO_두드러기",
                    ...CommonSymptomsText.skin_rash
                },
                {
                    name: "MO_습진",
                    ...CommonSymptomsText.skin_eczema
                },
                {
                    name: "MO_수포",
                    ...CommonSymptomsText.skin_blister
                },
                {
                    name: "MO_무좀",
                    ...CommonSymptomsText.skin_athletesfoot
                }
            ]
        },
        {
            ...CommonSymptoms[FEMALE],
            name: "MO_여성질환",
            details: [
                {
                    name: "MO_생리통",
                    ...CommonSymptomsText.female_periodCramp
                },
                {
                    name: "MO_임신테스트",
                    ...CommonSymptomsText.female_pregnancyTest
                },
                {
                    name: "MO_경구피임약",
                    ...CommonSymptomsText.female_oralBirthControl
                },
                {
                    name: "MO_사후피임약",
                    ...CommonSymptomsText.female_postCoitalBirthControl
                },
            ]
        },
        {
            ...CommonSymptoms[OTHER],
            name: "MO_기타",
            details: [
                {
                    name: "MO_기타_임시",
                    ...CommonSymptomsText.other_tmp
                }
            ]
        }
    ]
};