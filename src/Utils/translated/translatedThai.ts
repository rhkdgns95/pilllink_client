import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedThai: ICountry = {
    name: "ไทย",
    value: "TH",
    imgPath: "/images/lang/lang_th.svg",
    selectors: [
        {
            ...CommonSelectors["ALLERGY"],
            name: "TH_알레르기",
            details: [
                {
                    name: "TH_해당사항 없음",
                    ...CommonSelectors["ALLERGY"].details["NULL"]
                },
                {
                    name: "TH_진통제",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_PAINKILLER"]
                },
                {
                    name: "TH_유당",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_ANTIBIOTIC"]
                }
            ]
        },
        {
            ...CommonSelectors["PREGNANT"],
            name: "TH_임신여부",
            details: [
                {
                    name: "TH_임신 X",
                    ...CommonSelectors["PREGNANT"].details["NULL"]
                },
                {
                    name: "TH_임신 O",
                    ...CommonSelectors["PREGNANT"].details["PREGNANT_TRUE"]
                }
            ]
        },
        {
            ...CommonSelectors["CHRONICDISEASES"],
            name: "TH_만성질환",
            details: [
                {
                    name: "TH_해당사항 없음",
                    ...CommonSelectors["CHRONICDISEASES"].details["NULL"]
                },
                {
                    name: "TH_간질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_LIVER"]
                },
                {
                    name: "TH_신장질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_KIDNEY"]
                }
            ]
        }
    ],
    symptoms: [
        { 
            ...CommonSymptoms[COLD],
            name: "TH_감기",
            details: [
                { 
                    name: "TH_기침",
                    ...CommonSymptomsText.cold_cough
                },
                {
                    name: "TH_두통",
                    ...CommonSymptomsText.cold_headache
                },
                {
                    name: "TH_콧물",
                    ...CommonSymptomsText.cold_runnyNose
                },
                {
                    name: "TH_목아픔",
                    ...CommonSymptomsText.cold_soreThroat
                },
                {
                    name: "TH_열",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "TH_몸살",
                    ...CommonSymptomsText.cold_bodyache
                }
            ]
        },
        {
            ...CommonSymptoms[HANGOVER],
            name: "TH_숙취",
            details: [
                {
                    name: "TH_두통",
                    ...CommonSymptomsText.hangover_headache
                },
                {
                    name: "TH_설사",
                    ...CommonSymptomsText.hangover_diarrhea
                },
                {
                    name: "TH_구토",
                    ...CommonSymptomsText.hangover_vomit
                },
                {
                    name: "TH_메스꺼움",
                    ...CommonSymptomsText.hangover_nausea
                },
                {
                    name: "TH_속쓰림",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[STOMACHACHE],
            name: "TH_복통",
            details: [
                {
                    name: "TH_설사",
                    ...CommonSymptomsText.stomachache_diarrhead
                },
                {
                    name: "TH_생리통",
                    ...CommonSymptomsText.stomachache_periodCramps
                },
                {
                    name: "TH_소화불량",
                    ...CommonSymptomsText.stomachache_indigestion
                },
                {
                    name: "TH_변비",
                    ...CommonSymptomsText.stomachache_constipation
                },
                {
                    name: "TH_메스꺼움",
                    ...CommonSymptomsText.stomachache_nausea
                },
                {
                    name: "TH_속쓰림",
                    ...CommonSymptomsText.stomachache_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[SKIN],
            name: "TH_피부질환",
            details: [
                {
                    name: "TH_철과상",
                    ...CommonSymptomsText.skin_abrasion
                },
                {
                    name: "TH_여드름",
                    ...CommonSymptomsText.skin_acne
                },
                {
                    name: "TH_두드러기",
                    ...CommonSymptomsText.skin_rash
                },
                {
                    name: "TH_습진",
                    ...CommonSymptomsText.skin_eczema
                },
                {
                    name: "TH_수포",
                    ...CommonSymptomsText.skin_blister
                },
                {
                    name: "TH_무좀",
                    ...CommonSymptomsText.skin_athletesfoot
                }
            ]
        },
        {
            ...CommonSymptoms[FEMALE],
            name: "TH_여성질환",
            details: [
                {
                    name: "TH_생리통",
                    ...CommonSymptomsText.female_periodCramp
                },
                {
                    name: "TH_임신테스트",
                    ...CommonSymptomsText.female_pregnancyTest
                },
                {
                    name: "TH_경구피임약",
                    ...CommonSymptomsText.female_oralBirthControl
                },
                {
                    name: "TH_사후피임약",
                    ...CommonSymptomsText.female_postCoitalBirthControl
                },
            ]
        },
        {
            ...CommonSymptoms[OTHER],
            name: "TH_기타",
            details: [
                {
                    name: "TH_기타_임시",
                    ...CommonSymptomsText.other_tmp
                }
            ]
        }
    ]
};