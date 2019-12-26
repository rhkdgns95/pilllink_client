import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
import { PATH_IMG_LANG } from "../../Routes/App/AppProvider";
const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedKorean: ICountry = {
    name: "한국어",
    value: "KO",
    imgPath: PATH_IMG_LANG + "/lang_ko.jpg",
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
                    name: "고혈압",
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
            name: "응급처치",
            details: [
                {
                    name: "반창고",
                    ...CommonSymptomsText.other_bandAid
                },
                {
                    name: "붕대",
                    ...CommonSymptomsText.other_bandage
                },
                {
                    name: "소독약",
                    ...CommonSymptomsText.other_disinfectant
                },
                {
                    name: "식염수",
                    ...CommonSymptomsText.other_salineSolution
                },
                {
                    name: "인공눈물",
                    ...CommonSymptomsText.other_artificialTears
                }
            ]
        }
    ],
    confirms: [
        {
            name: "복용량",
            value: "AMOUNT",
            details: [
                {
                    name: "3일",
                    value: "D3"
                },
                {
                    name: "5일" ,
                    value: "D5"
                },
                {
                    name: "7일",
                    value: "D7"
                }
            ]
        },
        {
            name: "복약횟수",
            value: "TIME",
            details: [
                {
                    name: "아침",
                    value: "TO_MORNING"
                },
                {
                    name: "점심" ,
                    value: "TO_LUNCH"
                },
                {
                    name: "저녁",
                    value: "TO_DINNER"
                },
                {
                    name: "취침전",
                    value: "TO_SLEEP"
                }
            ]
        },
        {
            name: "복용방법",
            value: "WAY",
            details: [
                {
                    name: "식전30분",
                    value: "AGO_EAT"
                },
                {
                    name: "식후30분",
                    value: "AFTER_EAT"
                },
                {
                    name: "공복",
                    value: "NO_EAT"
                }
            ]
        },
        {
            name: "주의사항",
            value: "CAUTION",
            details: [
                {
                    name: "졸음",
                    value: "CAUTION_SLEEP"
                },
                {
                    name: "발진",
                    value: "CAUTION_RASH"
                },
                {
                    name: "혈압 ↑",
                    value: "CAUTION_BLOODPRESSURE"
                },
                {
                    name: "복통",
                    value: "CAUTION_STOMACAHCHE"
                },
                {
                    name: "설사",
                    value: "CAUTION_DIARRHEA"
                },
                {
                    name: "어지러움",
                    value: "CAUTION_DIZZY"
                },
            ]
        },
    ],
    contents: [
        // 문구추가 여러개있을수도 있으므로 배열로 설정.
        // [0]은 toggle버튼이다.
        "약사에게 보여주기 위해 눌러주세요."
    ]    
};