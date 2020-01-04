import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
import { PATH_IMG_LANG } from "../../Routes/App/AppProvider";
const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedItaly: ICountry = {
    name: "Italiano",
    value: "IT",
    imgPath: PATH_IMG_LANG + "/lang_it.jpg",
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
            name: "IT_응급처치",
            details: [
                {
                    name: "IT_반창코",
                    ...CommonSymptomsText.other_bandAid
                },
                {
                    name: "IT_붕대",
                    ...CommonSymptomsText.other_bandage
                },
                {
                    name: "IT_소독약",
                    ...CommonSymptomsText.other_disinfectant
                },
                {
                    name: "IT_식염수",
                    ...CommonSymptomsText.other_salineSolution
                },
                {
                    name: "IT_인공눈물",
                    ...CommonSymptomsText.other_artificialTears
                }
            ]
        }
    ],
    confirms: [
        {
            name: "IT_1회 약 갯수",
            value: "PER_ONETIME_CNT",
            details: [
                {
                    name: "1",
                    value: "1"
                },
                {
                    name: "2",
                    value: "2"
                },
                {
                    name: "3",
                    value: "3"
                },
            ]
        },
        {
            name: "IT_복욕량",
            value: "AMOUNT",
            details: [
                {
                    name: "IT_1일",
                    value: "D1"
                },
                {
                    name: "IT_2일" ,
                    value: "D2"
                },
                {
                    name: "IT_3일",
                    value: "D3"
                },
                {
                    name: "IT_5일" ,
                    value: "D5"
                },
                {
                    name: "IT_7일",
                    value: "D7"
                }
            ]
        },
        {
            name: "IT_복용간격",
            value: "TIME",
            details: [
                {
                    name: "IT_아침",
                    value: "TO_MORNING"
                },
                {
                    name: "IT_점심" ,
                    value: "TO_LUNCH"
                },
                {
                    name: "IT_저녁",
                    value: "TO_DINNER"
                },
                {
                    name: "IT_취침전",
                    value: "TO_SLEEP"
                }
            ]
        },
        {
            name: "IT_복용방법",
            value: "WAY",
            details: [
                {
                    name: "IT_식전30분",
                    value: "AGO_EAT"
                },
                {
                    name: "IT_식후30분",
                    value: "AFTER_EAT"
                },
                {
                    name: "IT_공복",
                    value: "NO_EAT"
                }
            ]
        },
        {
            name: "IT_주의사항",
            value: "CAUTION",
            details: [
                {
                    name: "IT_졸음",
                    value: "CAUTION_SLEEP"
                },
                {
                    name: "IT_복통",
                    value: "CAUTION_STOMACAHCHE"
                },
                {
                    name: "IT_발진",
                    value: "CAUTION_RASH"
                },
                {
                    name: "IT_어지러움",
                    value: "CAUTION_DIZZY"
                },
                {
                    name: "IT_설사",
                    value: "CAUTION_DIARRHEA"
                },
                {
                    name: "IT_혈압",
                    value: "CAUTION_BLOODPRESSURE"
                }
            ]
        },
    ],
    contents: [
        "IT_중복선택 가능.",
        "IT_투글버튼 문구"
    ],
    boardSelectors: [
        {
            name: "제안",
            value: "BOARD_SUGGESTION"
        },
        {
            name: "문의사항",
            value: "BOARD_QUESTION"
        },
        {
            name: "불편사항",
            value: "BOARD_PROBLEM"
        }
    ]
};