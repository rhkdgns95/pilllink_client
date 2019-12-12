import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
const { COLD, COLIC, HANGOVER, FEMALE, HEADACHE, SKIN, OTHER, TOOTHACHE } = CommonSymptomsText;

export const TranslatedKorean: ICountry = {
    name: "한국어",
    value: "KO",
    imgPath: "/images/lang/lang_ko.svg",
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
                    name: "신장질환",
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
                    ...CommonSymptomsText.cold_snot
                },
                {
                    name: "목아픔",
                    ...CommonSymptomsText.cold_throat
                },
                {
                    name: "열",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "몸살",
                    ...CommonSymptomsText.cold_muscle
                }
            ]
        },
        {
            ...CommonSymptoms[COLIC],
            name: "복통",
            details: [
                {
                    name: "설사",
                    ...CommonSymptomsText.colic_diarrhead
                },
                {
                    name: "생리통",
                    ...CommonSymptomsText.colic_periodCramps
                },
                {
                    name: "소화불량",
                    ...CommonSymptomsText.colic_indigestion
                },
                {
                    name: "변비",
                    ...CommonSymptomsText.colic_constipation
                },
                {
                    name: "메스꺼움",
                    ...CommonSymptomsText.colic_sickness
                },
                {
                    name: "속쓰림",
                    ...CommonSymptomsText.colic_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[FEMALE],
            name: "여성질환",
            details: [
                {
                    name: "임시",
                    ...CommonSymptomsText.female_tmp
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
                    ...CommonSymptomsText.hangover_throwup
                },
                {
                    name: "메스꺼움",
                    ...CommonSymptomsText.hangover_sickness
                },
                {
                    name: "속쓰림",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[HEADACHE],
            name: "두통",
            details: [
                {
                    name: "두통",
                    ...CommonSymptomsText.headache_headache
                },
                {
                    name: "편두통",
                    ...CommonSymptomsText.headache_migraine
                }
            ]
        },
        {
            ...CommonSymptoms[SKIN],
            name: "피부질환",
            imgPath: "/images/symptoms/symptoms_skin.svg",
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
                    ...CommonSymptomsText.skin_hives
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
            ...CommonSymptoms[TOOTHACHE],
            name: "구강질환",
            details: [
                {
                    name: "혓바늘",
                    ...CommonSymptomsText.toothache_needle
                },
                {
                    name: "구내염",
                    ...CommonSymptomsText.toothache_stomatitis
                },
                {
                    name: "마른입술",
                    ...CommonSymptomsText.toothache_drylips
                },
                {
                    name: "입냄새",
                    ...CommonSymptomsText.toothache_badbreath
                },
                {
                    name: "잇몸",
                    ...CommonSymptomsText.toothache_gum
                },
                {
                    name: "구강건조증",
                    ...CommonSymptomsText.toothache_drymouth
                }
            ]
        },
        {
            ...CommonSymptoms[OTHER],
            name: "기타",
            details: [
                {
                    name: "기타_임시",
                    ...CommonSymptomsText.other_tmp
                }
            ]
        }
    ]
};