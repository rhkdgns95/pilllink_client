import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
const { COLD, COLIC, HANGOVER, FEMALE, HEADACHE, SKIN, OTHER, TOOTHACHE } = CommonSymptomsText;

export const TranslatedSpain: ICountry = {
    name: "Espanol",
    value: "ES",
    imgPath: "/images/lang/lang_es.svg",
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
                    ...CommonSymptomsText.cold_snot
                },
                {
                    name: "ES_목아픔",
                    ...CommonSymptomsText.cold_throat
                },
                {
                    name: "ES_열",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "ES_몸살",
                    ...CommonSymptomsText.cold_muscle
                }
            ]
        },
        {
            ...CommonSymptoms[COLIC],
            name: "ES_복통",
            details: [
                {
                    name: "ES_설사",
                    ...CommonSymptomsText.colic_diarrhead
                },
                {
                    name: "ES_생리통",
                    ...CommonSymptomsText.colic_periodCramps
                },
                {
                    name: "ES_소화불량",
                    ...CommonSymptomsText.colic_indigestion
                },
                {
                    name: "ES_변비",
                    ...CommonSymptomsText.colic_constipation
                },
                {
                    name: "ES_메스꺼움",
                    ...CommonSymptomsText.colic_sickness
                },
                {
                    name: "ES_속쓰림",
                    ...CommonSymptomsText.colic_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[FEMALE],
            name: "ES_여성질환",
            details: [
                {
                    name: "ES_임시",
                    ...CommonSymptomsText.female_tmp
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
                    ...CommonSymptomsText.hangover_throwup
                },
                {
                    name: "ES_메스꺼움",
                    ...CommonSymptomsText.hangover_sickness
                },
                {
                    name: "ES_속쓰림",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[HEADACHE],
            name: "ES_두통",
            details: [
                {
                    name: "ES_두통",
                    ...CommonSymptomsText.headache_headache
                },
                {
                    name: "ES_편두통",
                    ...CommonSymptomsText.headache_migraine
                }
            ]
        },
        {
            ...CommonSymptoms[SKIN],
            name: "ES_피부질환",
            imgPath: "/images/symptoms/symptoms_skin.svg",
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
                    ...CommonSymptomsText.skin_hives
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
            ...CommonSymptoms[TOOTHACHE],
            name: "ES_구강질환",
            details: [
                {
                    name: "ES_혓바늘",
                    ...CommonSymptomsText.toothache_needle
                },
                {
                    name: "ES_구내염",
                    ...CommonSymptomsText.toothache_stomatitis
                },
                {
                    name: "ES_마른입술",
                    ...CommonSymptomsText.toothache_drylips
                },
                {
                    name: "ES_입냄새",
                    ...CommonSymptomsText.toothache_badbreath
                },
                {
                    name: "ES_잇몸",
                    ...CommonSymptomsText.toothache_gum
                },
                {
                    name: "ES_구강건조증",
                    ...CommonSymptomsText.toothache_drymouth
                }
            ]
        },
        {
            ...CommonSymptoms[OTHER],
            name: "ES_기타",
            details: [
                {
                    name: "ES_기타_임시",
                    ...CommonSymptomsText.other_tmp
                }
            ]
        }
    ]
};