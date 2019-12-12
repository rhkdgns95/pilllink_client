import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
const { COLD, COLIC, HANGOVER, FEMALE, HEADACHE, SKIN, OTHER, TOOTHACHE } = CommonSymptomsText;

export const TranslatedVietnam: ICountry = {
    name: "Tiếng việt nam",
    value: "VI",
    imgPath: "/images/lang/lang_vi.svg",
    selectors: [
        {
            ...CommonSelectors["ALLERGY"],
            name: "VI_알레르기",
            details: [
                {
                    name: "VI_해당사항 없음",
                    ...CommonSelectors["ALLERGY"].details["NULL"]
                },
                {
                    name: "VI_진통제",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_PAINKILLER"]
                },
                {
                    name: "VI_유당",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_ANTIBIOTIC"]
                }
            ]
        },
        {
            ...CommonSelectors["PREGNANT"],
            name: "VI_임신여부",
            details: [
                {
                    name: "VI_임신 X",
                    ...CommonSelectors["PREGNANT"].details["NULL"]
                },
                {
                    name: "VI_임신 O",
                    ...CommonSelectors["PREGNANT"].details["PREGNANT_TRUE"]
                }
            ]
        },
        {
            ...CommonSelectors["CHRONICDISEASES"],
            name: "VI_만성질환",
            details: [
                {
                    name: "VI_해당사항 없음",
                    ...CommonSelectors["CHRONICDISEASES"].details["NULL"]
                },
                {
                    name: "VI_간질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_LIVER"]
                },
                {
                    name: "VI_신장질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_KIDNEY"]
                }
            ]
        }
    ],
    symptoms: [
        { 
            ...CommonSymptoms[COLD],
            name: "VI_감기",
            details: [
                { 
                    name: "VI_기침",
                    ...CommonSymptomsText.cold_cough
                },
                {
                    name: "VI_두통",
                    ...CommonSymptomsText.cold_headache
                },
                {
                    name: "VI_콧물",
                    ...CommonSymptomsText.cold_snot
                },
                {
                    name: "VI_목아픔",
                    ...CommonSymptomsText.cold_throat
                },
                {
                    name: "VI_열",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "VI_몸살",
                    ...CommonSymptomsText.cold_muscle
                }
            ]
        },
        {
            ...CommonSymptoms[COLIC],
            name: "VI_복통",
            details: [
                {
                    name: "VI_설사",
                    ...CommonSymptomsText.colic_diarrhead
                },
                {
                    name: "VI_생리통",
                    ...CommonSymptomsText.colic_periodCramps
                },
                {
                    name: "VI_소화불량",
                    ...CommonSymptomsText.colic_indigestion
                },
                {
                    name: "VI_변비",
                    ...CommonSymptomsText.colic_constipation
                },
                {
                    name: "VI_메스꺼움",
                    ...CommonSymptomsText.colic_sickness
                },
                {
                    name: "VI_속쓰림",
                    ...CommonSymptomsText.colic_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[FEMALE],
            name: "VI_여성질환",
            details: [
                {
                    name: "VI_임시",
                    ...CommonSymptomsText.female_tmp
                }
            ]
        },
        {
            ...CommonSymptoms[HANGOVER],
            name: "VI_숙취",
            details: [
                {
                    name: "VI_두통",
                    ...CommonSymptomsText.hangover_headache
                },
                {
                    name: "VI_설사",
                    ...CommonSymptomsText.hangover_diarrhea
                },
                {
                    name: "VI_구토",
                    ...CommonSymptomsText.hangover_throwup
                },
                {
                    name: "VI_메스꺼움",
                    ...CommonSymptomsText.hangover_sickness
                },
                {
                    name: "VI_속쓰림",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[HEADACHE],
            name: "VI_두통",
            details: [
                {
                    name: "VI_두통",
                    ...CommonSymptomsText.headache_headache
                },
                {
                    name: "VI_편두통",
                    ...CommonSymptomsText.headache_migraine
                }
            ]
        },
        {
            ...CommonSymptoms[SKIN],
            name: "VI_피부질환",
            imgPath: "/images/symptoms/symptoms_skin.svg",
            details: [
                {
                    name: "VI_철과상",
                    ...CommonSymptomsText.skin_abrasion
                },
                {
                    name: "VI_여드름",
                    ...CommonSymptomsText.skin_acne
                },
                {
                    name: "VI_두드러기",
                    ...CommonSymptomsText.skin_hives
                },
                {
                    name: "VI_습진",
                    ...CommonSymptomsText.skin_eczema
                },
                {
                    name: "VI_수포",
                    ...CommonSymptomsText.skin_blister
                },
                {
                    name: "VI_무좀",
                    ...CommonSymptomsText.skin_athletesfoot
                }
            ]
        },
        {
            ...CommonSymptoms[TOOTHACHE],
            name: "VI_구강질환",
            details: [
                {
                    name: "VI_혓바늘",
                    ...CommonSymptomsText.toothache_needle
                },
                {
                    name: "VI_구내염",
                    ...CommonSymptomsText.toothache_stomatitis
                },
                {
                    name: "VI_마른입술",
                    ...CommonSymptomsText.toothache_drylips
                },
                {
                    name: "VI_입냄새",
                    ...CommonSymptomsText.toothache_badbreath
                },
                {
                    name: "VI_잇몸",
                    ...CommonSymptomsText.toothache_gum
                },
                {
                    name: "VI_구강건조증",
                    ...CommonSymptomsText.toothache_drymouth
                }
            ]
        },
        {
            ...CommonSymptoms[OTHER],
            name: "VI_기타",
            details: [
                {
                    name: "VI_기타_임시",
                    ...CommonSymptomsText.other_tmp
                }
            ]
        }
    ]
};