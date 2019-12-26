import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
import { PATH_IMG_LANG } from "../../Routes/App/AppProvider";
const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedHongkong: ICountry = {
    name: "Hongkong",
    value: "HO",
    imgPath: PATH_IMG_LANG + "/lang_ho.png",
    selectors: [
        {
            ...CommonSelectors["ALLERGY"],
            name: "过敏性反应",
            details: [
                {
                    name: "没有人",
                    ...CommonSelectors["ALLERGY"].details["NULL"]
                },
                {
                    name: "镇痛剂",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_PAINKILLER"]
                },
                {
                    name: "抗生剂",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_ANTIBIOTIC"]
                }
            ]
        },
        {
            ...CommonSelectors["PREGNANT"],
            name: "妊娠",
            details: [
                {
                    name: "妊娠 X",
                    ...CommonSelectors["PREGNANT"].details["NULL"]
                },
                {
                    name: "妊娠 O",
                    ...CommonSelectors["PREGNANT"].details["PREGNANT_TRUE"]
                }
            ]
        },
        {
            ...CommonSelectors["CHRONICDISEASES"],
            name: "慢性病",
            details: [
                {
                    name: "没有人",
                    ...CommonSelectors["CHRONICDISEASES"].details["NULL"]
                },
                {
                    name: "肝病",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_LIVER"]
                },
                {
                    name: "血压高",
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
                    name: "3日",
                    value: "D3"
                },
                {
                    name: "5日" ,
                    value: "D5"
                },
                {
                    name: "7日",
                    value: "D7"
                }
            ]
        },
        {
            name: "用药次数",
            value: "TIME",
            details: [
                {
                    name: "早饭",
                    value: "TO_MORNING"
                },
                {
                    name: "午饭" ,
                    value: "TO_LUNCH"
                },
                {
                    name: "晚饭",
                    value: "TO_DINNER"
                },
                {
                    name: "就寝 之前",
                    value: "TO_SLEEP"
                }
            ]
        },
        {
            name: "用药方法",
            value: "WAY",
            details: [
                {
                    name: "饭前 30分",
                    value: "AGO_EAT"
                },
               {
                    name: "饭后 30分",
                    value: "AFTER_EAT"
                },
                {
                    name: "空腹",
                    value: "NO_EAT"
                }
            ]
        },
        {
            name: "注意事项",
            value: "CAUTION",
            details: [
                {
                    name: "困意",
                    value: "CAUTION_SLEEP"
                },
                {
                    name: "出疹子",
                    value: "CAUTION_RASH"
                },
                {
                    name: "血压 ↑",
                    value: "CAUTION_BLOODPRESSURE"
                },
                {
                    name: "腹痛",
                    value: "CAUTION_STOMACAHCHE"
                },
                {
                    name: "腹泻",
                    value: "CAUTION_DIARRHEA"
                },
                {
                    name: "发昏",
                    value: "CAUTION_DIZZY"
                },
            ]
        },
    ],
    contents: [
        "你可以选择多种症状",
        "拜托,给药剂师看看."
    ]
};