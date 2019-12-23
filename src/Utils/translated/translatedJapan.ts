import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
import { PATH_IMG_LANG } from "../../Routes/App/AppProvider";
const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedJapan: ICountry = {
    name: "日本",
    value: "JA",
    imgPath: PATH_IMG_LANG + "/lang_ja.svg",
    selectors: [
        {
            ...CommonSelectors["ALLERGY"],
            name: "JA_알레르기",
            details: [
                {
                    name: "JA_해당사항 없음",
                    ...CommonSelectors["ALLERGY"].details["NULL"]
                },
                {
                    name: "JA_진통제",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_PAINKILLER"]
                },
                {
                    name: "JA_유당",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_ANTIBIOTIC"]
                }
            ]
        },
        {
            ...CommonSelectors["PREGNANT"],
            name: "JA_임신여부",
            details: [
                {
                    name: "JA_임신 X",
                    ...CommonSelectors["PREGNANT"].details["NULL"]
                },
                {
                    name: "JA_임신 O",
                    ...CommonSelectors["PREGNANT"].details["PREGNANT_TRUE"]
                }
            ]
        },
        {
            ...CommonSelectors["CHRONICDISEASES"],
            name: "JA_만성질환",
            details: [
                {
                    name: "JA_해당사항 없음",
                    ...CommonSelectors["CHRONICDISEASES"].details["NULL"]
                },
                {
                    name: "JA_간질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_LIVER"]
                },
                {
                    name: "JA_신장질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_KIDNEY"]
                }
            ]
        }
    ],
    symptoms: [
        { 
            ...CommonSymptoms[COLD],
            name: "JA_감기",
            details: [
                { 
                    name: "JA_기침",
                    ...CommonSymptomsText.cold_cough
                },
                {
                    name: "JA_두통",
                    ...CommonSymptomsText.cold_headache
                },
                {
                    name: "JA_콧물",
                    ...CommonSymptomsText.cold_runnyNose
                },
                {
                    name: "JA_목아픔",
                    ...CommonSymptomsText.cold_soreThroat
                },
                {
                    name: "JA_열",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "JA_몸살",
                    ...CommonSymptomsText.cold_bodyache
                }
            ]
        },
        {
            ...CommonSymptoms[HANGOVER],
            name: "JA_숙취",
            details: [
                {
                    name: "JA_두통",
                    ...CommonSymptomsText.hangover_headache
                },
                {
                    name: "JA_설사",
                    ...CommonSymptomsText.hangover_diarrhea
                },
                {
                    name: "JA_구토",
                    ...CommonSymptomsText.hangover_vomit
                },
                {
                    name: "JA_메스꺼움",
                    ...CommonSymptomsText.hangover_nausea
                },
                {
                    name: "JA_속쓰림",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[STOMACHACHE],
            name: "JA_복통",
            details: [
                {
                    name: "JA_설사",
                    ...CommonSymptomsText.stomachache_diarrhead
                },
                {
                    name: "JA_생리통",
                    ...CommonSymptomsText.stomachache_periodCramps
                },
                {
                    name: "JA_소화불량",
                    ...CommonSymptomsText.stomachache_indigestion
                },
                {
                    name: "JA_변비",
                    ...CommonSymptomsText.stomachache_constipation
                },
                {
                    name: "JA_메스꺼움",
                    ...CommonSymptomsText.stomachache_nausea
                },
                {
                    name: "JA_속쓰림",
                    ...CommonSymptomsText.stomachache_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[SKIN],
            name: "JA_피부질환",
            details: [
                {
                    name: "JA_철과상",
                    ...CommonSymptomsText.skin_abrasion
                },
                {
                    name: "JA_여드름",
                    ...CommonSymptomsText.skin_acne
                },
                {
                    name: "JA_두드러기",
                    ...CommonSymptomsText.skin_rash
                },
                {
                    name: "JA_습진",
                    ...CommonSymptomsText.skin_eczema
                },
                {
                    name: "JA_수포",
                    ...CommonSymptomsText.skin_blister
                },
                {
                    name: "JA_무좀",
                    ...CommonSymptomsText.skin_athletesfoot
                }
            ]
        },
        {
            ...CommonSymptoms[FEMALE],
            name: "JA_여성질환",
            details: [
                {
                    name: "JA_생리통",
                    ...CommonSymptomsText.female_periodCramp
                },
                {
                    name: "JA_임신테스트",
                    ...CommonSymptomsText.female_pregnancyTest
                },
                {
                    name: "JA_경구피임약",
                    ...CommonSymptomsText.female_oralBirthControl
                },
                {
                    name: "JA_사후피임약",
                    ...CommonSymptomsText.female_postCoitalBirthControl
                },
            ]
        },
        {
            ...CommonSymptoms[OTHER],
            name: "応急処置・おうきゅうしょち",
            details: [
                {
                    name: "絆創膏・ばんそうこう",
                    ...CommonSymptomsText.other_bandAid
                },
                {
                    name: "包帯・ほうたい",
                    ...CommonSymptomsText.other_bandage
                },
                {
                    name: "消毒液・しょうどくえき",
                    ...CommonSymptomsText.other_disinfectant
                },
                {
                    name: "食塩水・しょくえんすい",
                    ...CommonSymptomsText.other_salineSolution
                },
                {
                    name: "目薬・めくすり",
                    ...CommonSymptomsText.other_artificialTears
                }
            ]
        }
    ],
    confirms: [
        {
            name: "用药量",
            value: "AMOUNT",
            details: [
                {
                    name: "JA_3일",
                    value: "D3"
                },
                {
                    name: "JA_5일" ,
                    value: "D5"
                },
                {
                    name: "JA_7일",
                    value: "D7"
                }
            ]
        },
        {
            name: "用药次数",
            value: "TIME",
            details: [
                {
                    name: "JA_아침",
                    value: "TO_MORNING"
                },
                {
                    name: "JA_점심" ,
                    value: "TO_LUNCH"
                },
                {
                    name: "JA_저녁",
                    value: "TO_DINNER"
                },
                {
                    name: "JA_취침전",
                    value: "TO_SLEEP"
                }
            ]
        },
        {
            name: "用药方法",
            value: "WAY",
            details: [
                {
                    name: "JA_식전30분",
                    value: "AGO_EAT"
                },
                {
                    name: "JA_식전즉시" ,
                    value: "AGO_IMMEDIATE_EAT"
                },
                {
                    name: "JA_식후즉시",
                    value: "AFTER_IMMEDIATE_EAT"
                },
                {
                    name: "JA_식후30분",
                    value: "AFTER_EAT"
                },
                {
                    name: "JA_공복",
                    value: "NO_EAT"
                }
            ]
        },
        {
            name: "注意事项",
            value: "CAUTION",
            details: [
                {
                    name: "JA_졸음",
                    value: "CAUTION_SLEEP"
                },
                {
                    name: "JA_발진",
                    value: "CAUTION_RASH"
                },
                {
                    name: "JA_혈압",
                    value: "CAUTION_BLOODPRESSURE"
                },
                {
                    name: "JA_복통",
                    value: "CAUTION_STOMACAHCHE"
                },
                {
                    name: "JA_설사",
                    value: "CAUTION_DIARRHEA"
                },
                
                {
                    name: "JA_어지러움",
                    value: "CAUTION_DIZZY"
                },
            ]
        },
    ]
};