import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
import { PATH_IMG_LANG } from "../../Routes/App/AppProvider";
const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedPortugal: ICountry = {
    name: "Portugal",
    value: "PO",
    imgPath: PATH_IMG_LANG + "/lang_po.jpg",
    selectors: [
        {
            ...CommonSelectors["ALLERGY"],
            name: "PO_알레르기",
            details: [
                {
                    name: "PO_해당사항 없음",
                    ...CommonSelectors["ALLERGY"].details["NULL"]
                },
                {
                    name: "PO_진통제",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_PAINKILLER"]
                },
                {
                    name: "PO_유당",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_ANTIBIOTIC"]
                }
            ]
        },
        {
            ...CommonSelectors["PREGNANT"],
            name: "PO_임신여부",
            details: [
                {
                    name: "PO_임신 X",
                    ...CommonSelectors["PREGNANT"].details["NULL"]
                },
                {
                    name: "PO_임신 O",
                    ...CommonSelectors["PREGNANT"].details["PREGNANT_TRUE"]
                }
            ]
        },
        {
            ...CommonSelectors["CHRONICDISEASES"],
            name: "PO_만성질환",
            details: [
                {
                    name: "PO_해당사항 없음",
                    ...CommonSelectors["CHRONICDISEASES"].details["NULL"]
                },
                {
                    name: "PO_간질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_LIVER"]
                },
                {
                    name: "PO_신장질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_KIDNEY"]
                }
            ]
        }
    ],
    symptoms: [
        { 
            ...CommonSymptoms[COLD],
            name: "PO_감기",
            details: [
                { 
                    name: "PO_기침",
                    ...CommonSymptomsText.cold_cough
                },
                {
                    name: "PO_두통",
                    ...CommonSymptomsText.cold_headache
                },
                {
                    name: "PO_콧물",
                    ...CommonSymptomsText.cold_runnyNose
                },
                {
                    name: "PO_목아픔",
                    ...CommonSymptomsText.cold_soreThroat
                },
                {
                    name: "PO_열",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "PO_몸살",
                    ...CommonSymptomsText.cold_bodyache
                }
            ]
        },
        {
            ...CommonSymptoms[HANGOVER],
            name: "PO_숙취",
            details: [
                {
                    name: "PO_두통",
                    ...CommonSymptomsText.hangover_headache
                },
                {
                    name: "PO_설사",
                    ...CommonSymptomsText.hangover_diarrhea
                },
                {
                    name: "PO_구토",
                    ...CommonSymptomsText.hangover_vomit
                },
                {
                    name: "PO_메스꺼움",
                    ...CommonSymptomsText.hangover_nausea
                },
                {
                    name: "PO_속쓰림",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[STOMACHACHE],
            name: "PO_복통",
            details: [
                {
                    name: "PO_설사",
                    ...CommonSymptomsText.stomachache_diarrhead
                },
                {
                    name: "PO_생리통",
                    ...CommonSymptomsText.stomachache_periodCramps
                },
                {
                    name: "PO_소화불량",
                    ...CommonSymptomsText.stomachache_indigestion
                },
                {
                    name: "PO_변비",
                    ...CommonSymptomsText.stomachache_constipation
                },
                {
                    name: "PO_메스꺼움",
                    ...CommonSymptomsText.stomachache_nausea
                },
                {
                    name: "PO_속쓰림",
                    ...CommonSymptomsText.stomachache_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[SKIN],
            name: "PO_피부질환",
            details: [
                {
                    name: "PO_철과상",
                    ...CommonSymptomsText.skin_abrasion
                },
                {
                    name: "PO_여드름",
                    ...CommonSymptomsText.skin_acne
                },
                {
                    name: "PO_두드러기",
                    ...CommonSymptomsText.skin_rash
                },
                {
                    name: "PO_습진",
                    ...CommonSymptomsText.skin_eczema
                },
                {
                    name: "PO_수포",
                    ...CommonSymptomsText.skin_blister
                },
                {
                    name: "PO_무좀",
                    ...CommonSymptomsText.skin_athletesfoot
                }
            ]
        },
        {
            ...CommonSymptoms[FEMALE],
            name: "PO_여성질환",
            details: [
                {
                    name: "PO_생리통",
                    ...CommonSymptomsText.female_periodCramp
                },
                {
                    name: "PO_임신테스트",
                    ...CommonSymptomsText.female_pregnancyTest
                },
                {
                    name: "PO_경구피임약",
                    ...CommonSymptomsText.female_oralBirthControl
                },
                {
                    name: "PO_사후피임약",
                    ...CommonSymptomsText.female_postCoitalBirthControl
                },
            ]
        },
        {
            ...CommonSymptoms[OTHER],
            name: "PO_기타",
            details: [
                {
                    name: "Band-Aid",
                    ...CommonSymptomsText.other_bandAid
                },
                {
                    name: "Bandage",
                    ...CommonSymptomsText.other_bandage
                },
                {
                    name: "Disinfectant",
                    ...CommonSymptomsText.other_disinfectant
                },
                {
                    name: "Saline Solution",
                    ...CommonSymptomsText.other_salineSolution
                },
                {
                    name: "Artificial Tears",
                    ...CommonSymptomsText.other_artificialTears
                },
                {
                    name: "PO_멘소레담_크림형",
                    ...CommonSymptomsText.other_mensoredamCream
                },
                {
                    name: "PO_멘소레담_스프레이형",
                    ...CommonSymptomsText.other_mensoredamSpray
                },
                {
                    name: "PO_파스",
                    ...CommonSymptomsText.other_painKillingPatch
                },
                {
                    name: "PO_물파스",
                    ...CommonSymptomsText.other_painKillingPatchWater
                }
            ]
        }
    ],
    confirms: [
        {
            name: "PO_1회 약 갯수",
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
            name: "PO_복욕량",
            value: "AMOUNT",
            details: [
                {
                    name: "PO_1일",
                    value: "D1"
                },
                {
                    name: "PO_2일" ,
                    value: "D2"
                },
                {
                    name: "PO_3일",
                    value: "D3"
                },
                {
                    name: "PO_5일" ,
                    value: "D5"
                },
                {
                    name: "PO_7일",
                    value: "D7"
                }
            ]
        },
        {
            name: "PO_복용간격",
            value: "TIME",
            details: [
                {
                    name: "PO_아침",
                    value: "TO_MORNING"
                },
                {
                    name: "PO_점심" ,
                    value: "TO_LUNCH"
                },
                {
                    name: "PO_저녁",
                    value: "TO_DINNER"
                },
                {
                    name: "PO_취침전",
                    value: "TO_SLEEP"
                }
            ]
        },
        {
            name: "PO_복용방법",
            value: "WAY",
            details: [
                {
                    name: "PO_식전30분",
                    value: "AGO_EAT"
                },
                {
                    name: "PO_식후30분",
                    value: "AFTER_EAT"
                },
                {
                    name: "PO_공복",
                    value: "NO_EAT"
                }
            ]
        },
        {
            name: "PO_주의사항",
            value: "CAUTION",
            details: [
                {
                    name: "PO_졸음",
                    value: "CAUTION_SLEEP"
                },
                {
                    name: "PO_발진",
                    value: "CAUTION_RASH"
                },
                {
                    name: "PO_혈압",
                    value: "CAUTION_BLOODPRESSURE"
                },
                {
                    name: "PO_복통",
                    value: "CAUTION_STOMACAHCHE"
                },
                {
                    name: "PO_설사",
                    value: "CAUTION_DIARRHEA"
                },
                {
                    name: "PO_어지러움",
                    value: "CAUTION_DIZZY"
                },
            ]
        },
    ],
    contents: [
        "PO_중복선택가능",
        "PO_투글버튼 문구준비중."
    ],
    boardSelectors: [
        {
            name: "PO_제안",
            value: "BOARD_SUGGESTION"
        },
        {
            name: "PO_문의사항",
            value: "BOARD_QUESTION"
        },
        {
            name: "PO_불편사항",
            value: "BOARD_PROBLEM"
        }
    ]
};