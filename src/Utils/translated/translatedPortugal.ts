import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
const { COLD, COLIC, HANGOVER, FEMALE, HEADACHE, SKIN, OTHER, TOOTHACHE } = CommonSymptomsText;

export const TranslatedPortugal: ICountry = {
    name: "Português",
    value: "PO",
    imgPath: "/images/lang/lang_po.svg",
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
                    ...CommonSymptomsText.cold_snot
                },
                {
                    name: "PO_목아픔",
                    ...CommonSymptomsText.cold_throat
                },
                {
                    name: "PO_열",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "PO_몸살",
                    ...CommonSymptomsText.cold_muscle
                }
            ]
        },
        {
            ...CommonSymptoms[COLIC],
            name: "PO_복통",
            details: [
                {
                    name: "PO_설사",
                    ...CommonSymptomsText.colic_diarrhead
                },
                {
                    name: "PO_생리통",
                    ...CommonSymptomsText.colic_periodCramps
                },
                {
                    name: "PO_소화불량",
                    ...CommonSymptomsText.colic_indigestion
                },
                {
                    name: "PO_변비",
                    ...CommonSymptomsText.colic_constipation
                },
                {
                    name: "PO_메스꺼움",
                    ...CommonSymptomsText.colic_sickness
                },
                {
                    name: "PO_속쓰림",
                    ...CommonSymptomsText.colic_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[FEMALE],
            name: "PO_여성질환",
            details: [
                {
                    name: "PO_임시",
                    ...CommonSymptomsText.female_tmp
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
                    ...CommonSymptomsText.hangover_throwup
                },
                {
                    name: "PO_메스꺼움",
                    ...CommonSymptomsText.hangover_sickness
                },
                {
                    name: "PO_속쓰림",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[HEADACHE],
            name: "PO_두통",
            details: [
                {
                    name: "PO_두통",
                    ...CommonSymptomsText.headache_headache
                },
                {
                    name: "PO_편두통",
                    ...CommonSymptomsText.headache_migraine
                }
            ]
        },
        {
            ...CommonSymptoms[SKIN],
            name: "PO_피부질환",
            imgPath: "/images/symptoms/symptoms_skin.svg",
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
                    ...CommonSymptomsText.skin_hives
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
            ...CommonSymptoms[TOOTHACHE],
            name: "PO_구강질환",
            details: [
                {
                    name: "PO_혓바늘",
                    ...CommonSymptomsText.toothache_needle
                },
                {
                    name: "PO_구내염",
                    ...CommonSymptomsText.toothache_stomatitis
                },
                {
                    name: "PO_마른입술",
                    ...CommonSymptomsText.toothache_drylips
                },
                {
                    name: "PO_입냄새",
                    ...CommonSymptomsText.toothache_badbreath
                },
                {
                    name: "PO_잇몸",
                    ...CommonSymptomsText.toothache_gum
                },
                {
                    name: "PO_구강건조증",
                    ...CommonSymptomsText.toothache_drymouth
                }
            ]
        },
        {
            ...CommonSymptoms[OTHER],
            name: "PO_기타",
            details: [
                {
                    name: "PO_기타_임시",
                    ...CommonSymptomsText.other_tmp
                }
            ]
        }
    ]
};