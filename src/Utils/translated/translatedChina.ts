import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedChina: ICountry = {
    name: "中国人",
    value: "CH",
    imgPath: "/images/lang/lang_ch.svg",
    selectors: [
        {
            ...CommonSelectors["ALLERGY"],
            name: "CH_알레르기",
            details: [
                {
                    name: "CH_해당사항 없음",
                    ...CommonSelectors["ALLERGY"].details["NULL"]
                },
                {
                    name: "CH_진통제",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_PAINKILLER"]
                },
                {
                    name: "CH_유당",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_ANTIBIOTIC"]
                }
            ]
        },
        {
            ...CommonSelectors["PREGNANT"],
            name: "CH_임신여부",
            details: [
                {
                    name: "CH_임신 X",
                    ...CommonSelectors["PREGNANT"].details["NULL"]
                },
                {
                    name: "CH_임신 O",
                    ...CommonSelectors["PREGNANT"].details["PREGNANT_TRUE"]
                }
            ]
        },
        {
            ...CommonSelectors["CHRONICDISEASES"],
            name: "CH_만성질환",
            details: [
                {
                    name: "CH_해당사항 없음",
                    ...CommonSelectors["CHRONICDISEASES"].details["NULL"]
                },
                {
                    name: "CH_간질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_LIVER"]
                },
                {
                    name: "CH_신장질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_KIDNEY"]
                }
            ]
        }
    ],
    symptoms: [
        { 
            ...CommonSymptoms[COLD],
            name: "CH_감기",
            details: [
                { 
                    name: "CH_기침",
                    ...CommonSymptomsText.cold_cough
                },
                {
                    name: "CH_두통",
                    ...CommonSymptomsText.cold_headache
                },
                {
                    name: "CH_콧물",
                    ...CommonSymptomsText.cold_runnyNose
                },
                {
                    name: "CH_목아픔",
                    ...CommonSymptomsText.cold_soreThroat
                },
                {
                    name: "CH_열",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "CH_몸살",
                    ...CommonSymptomsText.cold_bodyache
                }
            ]
        },
        {
            ...CommonSymptoms[HANGOVER],
            name: "CH_숙취",
            details: [
                {
                    name: "CH_두통",
                    ...CommonSymptomsText.hangover_headache
                },
                {
                    name: "CH_설사",
                    ...CommonSymptomsText.hangover_diarrhea
                },
                {
                    name: "CH_구토",
                    ...CommonSymptomsText.hangover_vomit
                },
                {
                    name: "CH_메스꺼움",
                    ...CommonSymptomsText.hangover_nausea
                },
                {
                    name: "CH_속쓰림",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[STOMACHACHE],
            name: "CH_복통",
            details: [
                {
                    name: "CH_설사",
                    ...CommonSymptomsText.stomachache_diarrhead
                },
                {
                    name: "CH_생리통",
                    ...CommonSymptomsText.stomachache_periodCramps
                },
                {
                    name: "CH_소화불량",
                    ...CommonSymptomsText.stomachache_indigestion
                },
                {
                    name: "CH_변비",
                    ...CommonSymptomsText.stomachache_constipation
                },
                {
                    name: "CH_메스꺼움",
                    ...CommonSymptomsText.stomachache_nausea
                },
                {
                    name: "CH_속쓰림",
                    ...CommonSymptomsText.stomachache_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[SKIN],
            name: "CH_피부질환",
            details: [
                {
                    name: "CH_철과상",
                    ...CommonSymptomsText.skin_abrasion
                },
                {
                    name: "CH_여드름",
                    ...CommonSymptomsText.skin_acne
                },
                {
                    name: "CH_두드러기",
                    ...CommonSymptomsText.skin_rash
                },
                {
                    name: "CH_습진",
                    ...CommonSymptomsText.skin_eczema
                },
                {
                    name: "CH_수포",
                    ...CommonSymptomsText.skin_blister
                },
                {
                    name: "CH_무좀",
                    ...CommonSymptomsText.skin_athletesfoot
                }
            ]
        },
        {
            ...CommonSymptoms[FEMALE],
            name: "CH_여성질환",
            details: [
                {
                    name: "CH_생리통",
                    ...CommonSymptomsText.female_periodCramp
                },
                {
                    name: "CH_임신테스트",
                    ...CommonSymptomsText.female_pregnancyTest
                },
                {
                    name: "CH_경구피임약",
                    ...CommonSymptomsText.female_oralBirthControl
                },
                {
                    name: "CH_사후피임약",
                    ...CommonSymptomsText.female_postCoitalBirthControl
                },
            ]
        },
        {
            ...CommonSymptoms[OTHER],
            name: "CH_기타",
            details: [
                {
                    name: "CH_기타_임시",
                    ...CommonSymptomsText.other_tmp
                }
            ]
        }
    ]
};