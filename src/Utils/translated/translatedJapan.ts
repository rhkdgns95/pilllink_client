import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
import { PATH_IMG_LANG } from "../../Routes/App/AppProvider";
const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedJapan: ICountry = {
    name: "日本",
    value: "JA",
    imgPath: PATH_IMG_LANG + "/lang_ja.png",
    selectors: [
        {
            ...CommonSelectors["ALLERGY"],
            name: "アレルギー",
            details: [
                {
                    name: "ない",
                    ...CommonSelectors["ALLERGY"].details["NULL"]
                },
                {
                    name: "鎮痛薬 ちんつうざい ",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_PAINKILLER"]
                },
                {
                    name: "抗生剤 こうせいざい",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_ANTIBIOTIC"]
                }
            ]
        },
        {
            ...CommonSelectors["PREGNANT"],
            name: "妊娠 にんしん",
            details: [
                {
                    name: "不妊娠/ふにんしん",
                    ...CommonSelectors["PREGNANT"].details["NULL"]
                },
                {
                    name: "妊娠 にんしん O",
                    ...CommonSelectors["PREGNANT"].details["PREGNANT_TRUE"]
                }
            ]
        },
        {
            ...CommonSelectors["CHRONICDISEASES"],
            name: "慢性 疾患 まんせい しっかん",
            details: [
                {
                    name: "ない",
                    ...CommonSelectors["CHRONICDISEASES"].details["NULL"]
                },
                {
                    name: " 肝 疾患 きも しっかん",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_LIVER"]
                },
                {
                    name: "高血圧 こうけつあつ",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_KIDNEY"]
                }
            ]
        }
    ],
    symptoms: [
        { 
            ...CommonSymptoms[COLD],
            name: "風邪・かぜ",
            details: [
                { 
                    name: "咳・せき",
                    ...CommonSymptomsText.cold_cough
                },
                {
                    name: "頭痛・ずつう",
                    ...CommonSymptomsText.cold_headache
                },
                {
                    name: "鼻水・はなみず",
                    ...CommonSymptomsText.cold_runnyNose
                },
                {
                    name: "喉の痛み・のどのいたみ",
                    ...CommonSymptomsText.cold_soreThroat
                },
                {
                    name: "熱・ねつ",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "筋肉痛・きんにくつう",
                    ...CommonSymptomsText.cold_bodyache
                }
            ]
        },
        {
            ...CommonSymptoms[HANGOVER],
            name: "二日酔い・ふつかよい",
            details: [
                {
                    name: "頭痛・ずつう",
                    ...CommonSymptomsText.hangover_headache
                },
                {
                    name: "下痢・げり",
                    ...CommonSymptomsText.hangover_diarrhea
                },
                {
                    name: "嘔吐・おうと",
                    ...CommonSymptomsText.hangover_vomit
                },
                {
                    name: "むかむかする",
                    ...CommonSymptomsText.hangover_nausea
                },
                {
                    name: "胃のもたれ・いのもたれ",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[STOMACHACHE],
            name: "腹痛・はらいた",
            details: [
                {
                    name: "下痢・げり",
                    ...CommonSymptomsText.stomachache_diarrhead
                },
                {
                    name: "生理痛・せいりつう",
                    ...CommonSymptomsText.stomachache_periodCramps
                },
                {
                    name: "不消化・ふしょうか",
                    ...CommonSymptomsText.stomachache_indigestion
                },
                {
                    name: "ふん詰まり・ふんづまり",
                    ...CommonSymptomsText.stomachache_constipation
                },
                {
                    name: "むかむかする",
                    ...CommonSymptomsText.stomachache_nausea
                },
                {
                    name: "胃のもたれ・いのもたれ",
                    ...CommonSymptomsText.stomachache_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[SKIN],
            name: "皮膚疾患・ひふしっかん",
            details: [
                {
                    name: "かすり傷・かすりきず",
                    ...CommonSymptomsText.skin_abrasion
                },
                {
                    name: "にきび",
                    ...CommonSymptomsText.skin_acne
                },
                {
                    name: "蕁麻疹・じんましん",
                    ...CommonSymptomsText.skin_rash
                },
                {
                    name: "湿疹・しっしん",
                    ...CommonSymptomsText.skin_eczema
                },
                {
                    name: "水膨れ・みずぶくれ",
                    ...CommonSymptomsText.skin_blister
                },
                {
                    name: "水虫・みずむし",
                    ...CommonSymptomsText.skin_athletesfoot
                }
            ]
        },
        {
            ...CommonSymptoms[FEMALE],
            name: "女性健康・じょせいけんこう",
            details: [
                {
                    name: "生理痛・せいりつう",
                    ...CommonSymptomsText.female_periodCramp
                },
                {
                    name: "妊娠テスト・にんしんてすと",
                    ...CommonSymptomsText.female_pregnancyTest
                },
                {
                    name: "オーラルピル",
                    ...CommonSymptomsText.female_oralBirthControl
                },
                {
                    name: "モーニングアフターピル",
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
                },
                {
                    name: "JA_멘소레담_크림형",
                    ...CommonSymptomsText.other_mensoredamCream
                },
                {
                    name: "JA_멘소레담_스프레이형",
                    ...CommonSymptomsText.other_mensoredamSpray
                },
                {
                    name: "JA_파스",
                    ...CommonSymptomsText.other_painKillingPatch
                },
                {
                    name: "JA_물파스",
                    ...CommonSymptomsText.other_painKillingPatchWater
                }
            ]
        }
    ],
    confirms: [
        {
            name: "服量  ふくりょう",
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
            name: "用药量",
            value: "AMOUNT",
            details: [
                {
                    name: "1日 みっか",
                    value: "D1"
                },
                {
                    name: "2日 いつか" ,
                    value: "D2"
                },
                {
                    name: "3日 みっか",
                    value: "D3"
                },
                {
                    name: "5日 いつか" ,
                    value: "D5"
                },
                {
                    name: "7日 なのか",
                    value: "D7"
                }
            ]
        },
        {
            name: "用药次数",
            value: "TIME",
            details: [
                {
                    name: "朝飯 あさはん",
                    value: "TO_MORNING"
                },
                {
                    name: "昼飯 ひるめし" ,
                    value: "TO_LUNCH"
                },
                {
                    name: "夕飯  ゆうはん",
                    value: "TO_DINNER"
                },
                {
                    name: "就寝前 しゅうしん まえ",
                    value: "TO_SLEEP"
                }
            ]
        },
        {
            name: "用药方法",
            value: "WAY",
            details: [
                {
                    name: "食前 30分 しょくぜん 30ぶん",
                    value: "AGO_EAT"
                },
                {
                    name: "食後 30分 しょくご 30ぶん",
                    value: "AFTER_EAT"
                },
                {
                    name: "空腹 くうふく",
                    value: "NO_EAT"
                }
            ]
        },
        {
            name: "注意事项",
            value: "CAUTION",
            details: [
                {
                    name: "眠気 ねむけ",
                    value: "CAUTION_SLEEP"
                },
                {
                    name: "発疹 はっしん",
                    value: "CAUTION_RASH"
                },
                {
                    name: "血圧↑ けつあつ↑",
                    value: "CAUTION_BLOODPRESSURE"
                },
                {
                    name: "腹痛・はらいた",
                    value: "CAUTION_STOMACAHCHE"
                },
                {
                    name: "下痢・げり",
                    value: "CAUTION_DIARRHEA"
                },
                
                {
                    name: "眩暈 めまい",
                    value: "CAUTION_DIZZY"
                },
            ]
        },
    ],
    contents: [
        "多数の症状をご選択できます。",
        "クリックして薬剤師に見せてください."
    ],
    boardSelectors: [
        {
            name: "提案",
            value: "BOARD_SUGGESTION"
        },
        {
            name: "お問い合わせ",
            value: "BOARD_QUESTION"
        },
        {
            name: "不都合",
            value: "BOARD_PROBLEM"
        }
    ]
};