import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
import { PATH_IMG_LANG } from "../../Routes/App/AppProvider";
const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedMexico: ICountry = {
    name: "Mexico",
    value: "ME",
    imgPath: PATH_IMG_LANG + "/lang_me.svg",
    selectors: [
        {
            ...CommonSelectors["ALLERGY"],
            name: "ES_알레르기",
            details: [
                {
                    name: "ES_해당사항 없음",
                    ...CommonSelectors["ALLERGY"].details["NULL"]
                },
                {
                    name: "ES_진통제",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_PAINKILLER"]
                },
                {
                    name: "ES_유당",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_ANTIBIOTIC"]
                }
            ]
        },
        {
            ...CommonSelectors["PREGNANT"],
            name: "ES_임신여부",
            details: [
                {
                    name: "ES_임신 X",
                    ...CommonSelectors["PREGNANT"].details["NULL"]
                },
                {
                    name: "ES_임신 O",
                    ...CommonSelectors["PREGNANT"].details["PREGNANT_TRUE"]
                }
            ]
        },
        {
            ...CommonSelectors["CHRONICDISEASES"],
            name: "ES_만성질환",
            details: [
                {
                    name: "ES_해당사항 없음",
                    ...CommonSelectors["CHRONICDISEASES"].details["NULL"]
                },
                {
                    name: "ES_간질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_LIVER"]
                },
                {
                    name: "ES_신장질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_KIDNEY"]
                }
            ]
        }
    ],
    symptoms: [
        { 
            ...CommonSymptoms[COLD],
            name: "ES_감기",
            details: [
                { 
                    name: "ES_기침",
                    ...CommonSymptomsText.cold_cough
                },
                {
                    name: "ES_두통",
                    ...CommonSymptomsText.cold_headache
                },
                {
                    name: "ES_콧물",
                    ...CommonSymptomsText.cold_runnyNose
                },
                {
                    name: "ES_목아픔",
                    ...CommonSymptomsText.cold_soreThroat
                },
                {
                    name: "ES_열",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "ES_몸살",
                    ...CommonSymptomsText.cold_bodyache
                }
            ]
        },
        {
            ...CommonSymptoms[HANGOVER],
            name: "ES_숙취",
            details: [
                {
                    name: "ES_두통",
                    ...CommonSymptomsText.hangover_headache
                },
                {
                    name: "ES_설사",
                    ...CommonSymptomsText.hangover_diarrhea
                },
                {
                    name: "ES_구토",
                    ...CommonSymptomsText.hangover_vomit
                },
                {
                    name: "ES_메스꺼움",
                    ...CommonSymptomsText.hangover_nausea
                },
                {
                    name: "ES_속쓰림",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[STOMACHACHE],
            name: "ES_복통",
            details: [
                {
                    name: "ES_설사",
                    ...CommonSymptomsText.stomachache_diarrhead
                },
                {
                    name: "ES_생리통",
                    ...CommonSymptomsText.stomachache_periodCramps
                },
                {
                    name: "ES_소화불량",
                    ...CommonSymptomsText.stomachache_indigestion
                },
                {
                    name: "ES_변비",
                    ...CommonSymptomsText.stomachache_constipation
                },
                {
                    name: "ES_메스꺼움",
                    ...CommonSymptomsText.stomachache_nausea
                },
                {
                    name: "ES_속쓰림",
                    ...CommonSymptomsText.stomachache_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[SKIN],
            name: "ES_피부질환",
            details: [
                {
                    name: "ES_철과상",
                    ...CommonSymptomsText.skin_abrasion
                },
                {
                    name: "ES_여드름",
                    ...CommonSymptomsText.skin_acne
                },
                {
                    name: "ES_두드러기",
                    ...CommonSymptomsText.skin_rash
                },
                {
                    name: "ES_습진",
                    ...CommonSymptomsText.skin_eczema
                },
                {
                    name: "ES_수포",
                    ...CommonSymptomsText.skin_blister
                },
                {
                    name: "ES_무좀",
                    ...CommonSymptomsText.skin_athletesfoot
                }
            ]
        },
        {
            ...CommonSymptoms[FEMALE],
            name: "ES_여성질환",
            details: [
                {
                    name: "ES_생리통",
                    ...CommonSymptomsText.female_periodCramp
                },
                {
                    name: "ES_임신테스트",
                    ...CommonSymptomsText.female_pregnancyTest
                },
                {
                    name: "ES_경구피임약",
                    ...CommonSymptomsText.female_oralBirthControl
                },
                {
                    name: "ES_사후피임약",
                    ...CommonSymptomsText.female_postCoitalBirthControl
                },
            ]
        },
        {
            ...CommonSymptoms[OTHER],
            name: "Primeros Auxilios",
            details: [
                {
                    name: "Curita",
                    ...CommonSymptomsText.other_bandAid
                },
                {
                    name: "Venda",
                    ...CommonSymptomsText.other_bandage
                },
                {
                    name: "Desinfectante",
                    ...CommonSymptomsText.other_disinfectant
                },
                {
                    name: "Agua salina",
                    ...CommonSymptomsText.other_salineSolution
                },
                {
                    name: "Gotas para los ojos",
                    ...CommonSymptomsText.other_artificialTears
                }
            ]
        }
    ],
    confirms: [
        {
            name: "Cantidad",
            value: "AMOUNT",
            details: [
                {
                    name: "ES_3일",
                    value: "D3"
                },
                {
                    name: "ES_5일" ,
                    value: "D5"
                },
                {
                    name: "ES_7일",
                    value: "D7"
                }
            ]
        },
        {
            name: "Frecuencia",
            value: "TIME",
            details: [
                {
                    name: "ES_아침",
                    value: "TO_MORNING"
                },
                {
                    name: "ES_점심" ,
                    value: "TO_LUNCH"
                },
                {
                    name: "ES_저녁",
                    value: "TO_DINNER"
                },
                {
                    name: "ES_취침전",
                    value: "TO_SLEEP"
                }
            ]
        },
        {
            name: "Método",
            value: "WAY",
            details: [
                {
                    name: "ES_식전30분",
                    value: "AGO_EAT"
                },
                {
                    name: "ES_식전즉시" ,
                    value: "AGO_IMMEDIATE_EAT"
                },
                {
                    name: "ES_식후즉시",
                    value: "AFTER_IMMEDIATE_EAT"
                },
                {
                    name: "ES_식후30분",
                    value: "AFTER_EAT"
                },
                {
                    name: "ES_공복",
                    value: "NO_EAT"
                }
            ]
        },
        {
            name: "Avisos",
            value: "CAUTION",
            details: [
                {
                    name: "ES_졸음",
                    value: "CAUTION_SLEEP"
                },
                {
                    name: "ES_발진",
                    value: "CAUTION_RASH"
                },
                {
                    name: "ES_혈압",
                    value: "CAUTION_BLOODPRESSURE"
                },
                {
                    name: "ES_복통",
                    value: "CAUTION_STOMACAHCHE"
                },
                {
                    name: "ES_설사",
                    value: "CAUTION_DIARRHEA"
                },
                {
                    name: "ES_어지러움",
                    value: "CAUTION_DIZZY"
                },
            ]
        },
    ]
};