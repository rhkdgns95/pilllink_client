import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
const { COLD, COLIC, HANGOVER, FEMALE, HEADACHE, SKIN, OTHER, TOOTHACHE } = CommonSymptomsText;

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
                    ...CommonSymptomsText.cold_snot
                },
                {
                    name: "CH_목아픔",
                    ...CommonSymptomsText.cold_throat
                },
                {
                    name: "CH_열",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "CH_몸살",
                    ...CommonSymptomsText.cold_muscle
                }
            ]
        },
        {
            ...CommonSymptoms[COLIC],
            name: "CH_복통",
            details: [
                {
                    name: "CH_설사",
                    ...CommonSymptomsText.colic_diarrhead
                },
                {
                    name: "CH_생리통",
                    ...CommonSymptomsText.colic_periodCramps
                },
                {
                    name: "CH_소화불량",
                    ...CommonSymptomsText.colic_indigestion
                },
                {
                    name: "CH_변비",
                    ...CommonSymptomsText.colic_constipation
                },
                {
                    name: "CH_메스꺼움",
                    ...CommonSymptomsText.colic_sickness
                },
                {
                    name: "CH_속쓰림",
                    ...CommonSymptomsText.colic_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[FEMALE],
            name: "CH_여성질환",
            details: [
                {
                    name: "CH_임시",
                    ...CommonSymptomsText.female_tmp
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
                    ...CommonSymptomsText.hangover_throwup
                },
                {
                    name: "CH_메스꺼움",
                    ...CommonSymptomsText.hangover_sickness
                },
                {
                    name: "CH_속쓰림",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[HEADACHE],
            name: "CH_두통",
            details: [
                {
                    name: "CH_두통",
                    ...CommonSymptomsText.headache_headache
                },
                {
                    name: "CH_편두통",
                    ...CommonSymptomsText.headache_migraine
                }
            ]
        },
        {
            ...CommonSymptoms[SKIN],
            name: "CH_피부질환",
            imgPath: "/images/symptoms/symptoms_skin.svg",
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
                    ...CommonSymptomsText.skin_hives
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
            ...CommonSymptoms[TOOTHACHE],
            name: "CH_구강질환",
            details: [
                {
                    name: "CH_혓바늘",
                    ...CommonSymptomsText.toothache_needle
                },
                {
                    name: "CH_구내염",
                    ...CommonSymptomsText.toothache_stomatitis
                },
                {
                    name: "CH_마른입술",
                    ...CommonSymptomsText.toothache_drylips
                },
                {
                    name: "CH_입냄새",
                    ...CommonSymptomsText.toothache_badbreath
                },
                {
                    name: "CH_잇몸",
                    ...CommonSymptomsText.toothache_gum
                },
                {
                    name: "CH_구강건조증",
                    ...CommonSymptomsText.toothache_drymouth
                }
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