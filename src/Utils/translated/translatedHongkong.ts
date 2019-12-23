import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
import { PATH_IMG_LANG } from "../../Routes/App/AppProvider";
const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedHongkong: ICountry = {
    name: "Hongkong",
    value: "HO",
    imgPath: PATH_IMG_LANG + "/lang_ho.svg",
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
            name: "感冒",
            details: [
                { 
                    name: "咳嗽",
                    ...CommonSymptomsText.cold_cough
                },
                {
                    name: "头痛",
                    ...CommonSymptomsText.cold_headache
                },
                {
                    name: "流鼻涕",
                    ...CommonSymptomsText.cold_runnyNose
                },
                {
                    name: "咽喉痛",
                    ...CommonSymptomsText.cold_soreThroat
                },
                {
                    name: "发烧",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "全身酸痛",
                    ...CommonSymptomsText.cold_bodyache
                }
            ]
        },
        {
            ...CommonSymptoms[HANGOVER],
            name: "宿醉",
            details: [
                {
                    name: "头痛",
                    ...CommonSymptomsText.hangover_headache
                },
                {
                    name: "腹泻",
                    ...CommonSymptomsText.hangover_diarrhea
                },
                {
                    name: "呕吐",
                    ...CommonSymptomsText.hangover_vomit
                },
                {
                    name: "恶心",
                    ...CommonSymptomsText.hangover_nausea
                },
                {
                    name: "胃酸",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[STOMACHACHE],
            name: "腹痛",
            details: [
                {
                    name: "腹泻",
                    ...CommonSymptomsText.stomachache_diarrhead
                },
                {
                    name: "生理痛",
                    ...CommonSymptomsText.stomachache_periodCramps
                },
                {
                    name: "消化不良",
                    ...CommonSymptomsText.stomachache_indigestion
                },
                {
                    name: "便秘",
                    ...CommonSymptomsText.stomachache_constipation
                },
                {
                    name: "恶心",
                    ...CommonSymptomsText.stomachache_nausea
                },
                {
                    name: "胃痛",
                    ...CommonSymptomsText.stomachache_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[SKIN],
            name: "皮肤疾患",
            details: [
                {
                    name: "擦伤",
                    ...CommonSymptomsText.skin_abrasion
                },
                {
                    name: "青春痘",
                    ...CommonSymptomsText.skin_acne
                },
                {
                    name: "风疹",
                    ...CommonSymptomsText.skin_rash
                },
                {
                    name: "湿疹",
                    ...CommonSymptomsText.skin_eczema
                },
                {
                    name: "水泡",
                    ...CommonSymptomsText.skin_blister
                },
                {
                    name: "脚气",
                    ...CommonSymptomsText.skin_athletesfoot
                }
            ]
        },
        {
            ...CommonSymptoms[FEMALE],
            name: "女性健康",
            details: [
                {
                    name: "生理痛",
                    ...CommonSymptomsText.female_periodCramp
                },
                {
                    name: "妊娠测试",
                    ...CommonSymptomsText.female_pregnancyTest
                },
                {
                    name: "长期避孕药",
                    ...CommonSymptomsText.female_oralBirthControl
                },
                {
                    name: "紧急避孕药",
                    ...CommonSymptomsText.female_postCoitalBirthControl
                },
            ]
        },
        {
            ...CommonSymptoms[OTHER],
            name: "紧急措施",
            details: [
                {
                    name: "创可贴",
                    ...CommonSymptomsText.other_bandAid
                },
                {
                    name: "绷带",
                    ...CommonSymptomsText.other_bandage
                },
                {
                    name: "消毒水",
                    ...CommonSymptomsText.other_disinfectant
                },
                {
                    name: "盐水",
                    ...CommonSymptomsText.other_salineSolution
                },
                {
                    name: "人工泪液",
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
                    name: "CH_3일",
                    value: "D3"
                },
                {
                    name: "CH_5일" ,
                    value: "D5"
                },
                {
                    name: "CH_7일",
                    value: "D7"
                }
            ]
        },
        {
            name: "用药次数",
            value: "TIME",
            details: [
                {
                    name: "CH_아침",
                    value: "TO_MORNING"
                },
                {
                    name: "CH_점심" ,
                    value: "TO_LUNCH"
                },
                {
                    name: "CH_저녁",
                    value: "TO_DINNER"
                },
                {
                    name: "CH_취침전",
                    value: "TO_SLEEP"
                }
            ]
        },
        {
            name: "用药方法",
            value: "WAY",
            details: [
                {
                    name: "CH_식전30분",
                    value: "AGO_EAT"
                },
                {
                    name: "CH_식전즉시" ,
                    value: "AGO_IMMEDIATE_EAT"
                },
                {
                    name: "CH_식후즉시",
                    value: "AFTER_IMMEDIATE_EAT"
                },
                {
                    name: "CH_식후30분",
                    value: "AFTER_EAT"
                },
                {
                    name: "CH_공복",
                    value: "NO_EAT"
                }
            ]
        },
        {
            name: "注意事项",
            value: "CAUTION",
            details: [
                {
                    name: "CH_졸음",
                    value: "CAUTION_SLEEP"
                },
                {
                    name: "CH_발진",
                    value: "CAUTION_RASH"
                },
                {
                    name: "CH_혈압",
                    value: "CAUTION_BLOODPRESSURE"
                },
                {
                    name: "CH_복통",
                    value: "CAUTION_STOMACAHCHE"
                },
                {
                    name: "CH_설사",
                    value: "CAUTION_DIARRHEA"
                },
                {
                    name: "CH_어지러움",
                    value: "CAUTION_DIZZY"
                },
            ]
        },
    ]
};