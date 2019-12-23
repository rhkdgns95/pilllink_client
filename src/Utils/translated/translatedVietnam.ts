import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
import { PATH_IMG_LANG } from "../../Routes/App/AppProvider";
const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedVietnam: ICountry = {
    name: "Tiếng việt nam",
    value: "VI",
    imgPath: PATH_IMG_LANG + "/lang_vi.svg",
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
                    ...CommonSymptomsText.cold_runnyNose
                },
                {
                    name: "VI_목아픔",
                    ...CommonSymptomsText.cold_soreThroat
                },
                {
                    name: "VI_열",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "VI_몸살",
                    ...CommonSymptomsText.cold_bodyache
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
                    ...CommonSymptomsText.hangover_vomit
                },
                {
                    name: "VI_메스꺼움",
                    ...CommonSymptomsText.hangover_nausea
                },
                {
                    name: "VI_속쓰림",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[STOMACHACHE],
            name: "VI_복통",
            details: [
                {
                    name: "VI_설사",
                    ...CommonSymptomsText.stomachache_diarrhead
                },
                {
                    name: "VI_생리통",
                    ...CommonSymptomsText.stomachache_periodCramps
                },
                {
                    name: "VI_소화불량",
                    ...CommonSymptomsText.stomachache_indigestion
                },
                {
                    name: "VI_변비",
                    ...CommonSymptomsText.stomachache_constipation
                },
                {
                    name: "VI_메스꺼움",
                    ...CommonSymptomsText.stomachache_nausea
                },
                {
                    name: "VI_속쓰림",
                    ...CommonSymptomsText.stomachache_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[SKIN],
            name: "VI_피부질환",
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
                    ...CommonSymptomsText.skin_rash
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
            ...CommonSymptoms[FEMALE],
            name: "VI_여성질환",
            details: [
                {
                    name: "VI_생리통",
                    ...CommonSymptomsText.female_periodCramp
                },
                {
                    name: "VI_임신테스트",
                    ...CommonSymptomsText.female_pregnancyTest
                },
                {
                    name: "VI_경구피임약",
                    ...CommonSymptomsText.female_oralBirthControl
                },
                {
                    name: "VI_사후피임약",
                    ...CommonSymptomsText.female_postCoitalBirthControl
                },
            ]
        },
        {
            ...CommonSymptoms[OTHER],
            name: "sự sơ cứu",
            details: [
                {
                    name: "băng dính y tế",
                    ...CommonSymptomsText.other_bandAid
                },
                {
                    name: "băng vải",
                    ...CommonSymptomsText.other_bandage
                },
                {
                    name: "thuốc khử trùng",
                    ...CommonSymptomsText.other_disinfectant
                },
                {
                    name: "nước muối",
                    ...CommonSymptomsText.other_salineSolution
                },
                {
                    name: "nhân tạo nước mắt",
                    ...CommonSymptomsText.other_artificialTears
                }
            ]
        }
    ],
    confirms: [
        {
            name: "uống thuốc lượng",
            value: "AMOUNT",
            details: [
                {
                    name: "VI_3일",
                    value: "D3"
                },
                {
                    name: "VI_5일" ,
                    value: "D5"
                },
                {
                    name: "VI_7일",
                    value: "D7"
                }
            ]
        },
        {
            name: "uống thuốc số lần",
            value: "TIME",
            details: [
                {
                    name: "VI_아침",
                    value: "TO_MORNING"
                },
                {
                    name: "VI_점심" ,
                    value: "TO_LUNCH"
                },
                {
                    name: "VI_저녁",
                    value: "TO_DINNER"
                },
                {
                    name: "VI_취침전",
                    value: "TO_SLEEP"
                }
            ]
        },
        {
            name: "uống thuốc phương pháp",
            value: "WAY",
            details: [
                {
                    name: "VI_식전30분",
                    value: "AGO_EAT"
                },
                {
                    name: "VI_식전즉시" ,
                    value: "AGO_IMMEDIATE_EAT"
                },
                {
                    name: "VI_식후즉시",
                    value: "AFTER_IMMEDIATE_EAT"
                },
                {
                    name: "VI_식후30분",
                    value: "AFTER_EAT"
                },
                {
                    name: "VI_공복",
                    value: "NO_EAT"
                }
            ]
        },
        {
            name: "nội dung chú ý",
            value: "CAUTION",
            details: [
                {
                    name: "VI_졸음",
                    value: "CAUTION_SLEEP"
                },
                {
                    name: "VI_발진",
                    value: "CAUTION_RASH"
                },
                {
                    name: "VI_혈압",
                    value: "CAUTION_BLOODPRESSURE"
                },
                {
                    name: "VI_복통",
                    value: "CAUTION_STOMACAHCHE"
                },
                {
                    name: "VI_설사",
                    value: "CAUTION_DIARRHEA"
                },
                {
                    name: "VI_어지러움",
                    value: "CAUTION_DIZZY"
                },
            ]
        },
    ]
};