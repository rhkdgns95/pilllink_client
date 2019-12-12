import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
const { COLD, COLIC, HANGOVER, FEMALE, HEADACHE, SKIN, OTHER, TOOTHACHE } = CommonSymptomsText;

export const TranslatedFrance: ICountry = {
    name: "La France",
    value: "FR",
    imgPath: "/images/lang/lang_fr.svg",
    selectors: [
        {
            ...CommonSelectors["ALLERGY"],
            name: "FR_알레르기",
            details: [
                {
                    name: "FR_해당사항 없음",
                    ...CommonSelectors["ALLERGY"].details["NULL"]
                },
                {
                    name: "FR_진통제",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_PAINKILLER"]
                },
                {
                    name: "FR_유당",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_ANTIBIOTIC"]
                }
            ]
        },
        {
            ...CommonSelectors["PREGNANT"],
            name: "FR_임신여부",
            details: [
                {
                    name: "FR_임신 X",
                    ...CommonSelectors["PREGNANT"].details["NULL"]
                },
                {
                    name: "FR_임신 O",
                    ...CommonSelectors["PREGNANT"].details["PREGNANT_TRUE"]
                }
            ]
        },
        {
            ...CommonSelectors["CHRONICDISEASES"],
            name: "FR_만성질환",
            details: [
                {
                    name: "FR_해당사항 없음",
                    ...CommonSelectors["CHRONICDISEASES"].details["NULL"]
                },
                {
                    name: "FR_간질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_LIVER"]
                },
                {
                    name: "FR_신장질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_KIDNEY"]
                }
            ]
        }
    ],
    symptoms: [
        { 
            ...CommonSymptoms[COLD],
            name: "FR_감기",
            details: [
                { 
                    name: "FR_기침",
                    ...CommonSymptomsText.cold_cough
                },
                {
                    name: "FR_두통",
                    ...CommonSymptomsText.cold_headache
                },
                {
                    name: "FR_콧물",
                    ...CommonSymptomsText.cold_snot
                },
                {
                    name: "FR_목아픔",
                    ...CommonSymptomsText.cold_throat
                },
                {
                    name: "FR_열",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "FR_몸살",
                    ...CommonSymptomsText.cold_muscle
                }
            ]
        },
        {
            ...CommonSymptoms[COLIC],
            name: "FR_복통",
            details: [
                {
                    name: "FR_설사",
                    ...CommonSymptomsText.colic_diarrhead
                },
                {
                    name: "FR_생리통",
                    ...CommonSymptomsText.colic_periodCramps
                },
                {
                    name: "FR_소화불량",
                    ...CommonSymptomsText.colic_indigestion
                },
                {
                    name: "FR_변비",
                    ...CommonSymptomsText.colic_constipation
                },
                {
                    name: "FR_메스꺼움",
                    ...CommonSymptomsText.colic_sickness
                },
                {
                    name: "FR_속쓰림",
                    ...CommonSymptomsText.colic_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[FEMALE],
            name: "FR_여성질환",
            details: [
                {
                    name: "FR_임시",
                    ...CommonSymptomsText.female_tmp
                }
            ]
        },
        {
            ...CommonSymptoms[HANGOVER],
            name: "FR_숙취",
            details: [
                {
                    name: "FR_두통",
                    ...CommonSymptomsText.hangover_headache
                },
                {
                    name: "FR_설사",
                    ...CommonSymptomsText.hangover_diarrhea
                },
                {
                    name: "FR_구토",
                    ...CommonSymptomsText.hangover_throwup
                },
                {
                    name: "FR_메스꺼움",
                    ...CommonSymptomsText.hangover_sickness
                },
                {
                    name: "FR_속쓰림",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[HEADACHE],
            name: "FR_두통",
            details: [
                {
                    name: "FR_두통",
                    ...CommonSymptomsText.headache_headache
                },
                {
                    name: "FR_편두통",
                    ...CommonSymptomsText.headache_migraine
                }
            ]
        },
        {
            ...CommonSymptoms[SKIN],
            name: "FR_피부질환",
            imgPath: "/images/symptoms/symptoms_skin.svg",
            details: [
                {
                    name: "FR_철과상",
                    ...CommonSymptomsText.skin_abrasion
                },
                {
                    name: "FR_여드름",
                    ...CommonSymptomsText.skin_acne
                },
                {
                    name: "FR_두드러기",
                    ...CommonSymptomsText.skin_hives
                },
                {
                    name: "FR_습진",
                    ...CommonSymptomsText.skin_eczema
                },
                {
                    name: "FR_수포",
                    ...CommonSymptomsText.skin_blister
                },
                {
                    name: "FR_무좀",
                    ...CommonSymptomsText.skin_athletesfoot
                }
            ]
        },
        {
            ...CommonSymptoms[TOOTHACHE],
            name: "FR_구강질환",
            details: [
                {
                    name: "FR_혓바늘",
                    ...CommonSymptomsText.toothache_needle
                },
                {
                    name: "FR_구내염",
                    ...CommonSymptomsText.toothache_stomatitis
                },
                {
                    name: "FR_마른입술",
                    ...CommonSymptomsText.toothache_drylips
                },
                {
                    name: "FR_입냄새",
                    ...CommonSymptomsText.toothache_badbreath
                },
                {
                    name: "FR_잇몸",
                    ...CommonSymptomsText.toothache_gum
                },
                {
                    name: "FR_구강건조증",
                    ...CommonSymptomsText.toothache_drymouth
                }
            ]
        },
        {
            ...CommonSymptoms[OTHER],
            name: "FR_기타",
            details: [
                {
                    name: "FR_기타_임시",
                    ...CommonSymptomsText.other_tmp
                }
            ]
        }
    ]
};