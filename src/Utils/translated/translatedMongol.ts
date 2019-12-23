import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
import { PATH_IMG_LANG } from "../../Routes/App/AppProvider";
const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedMongol: ICountry = {
    name: "Монгол",
    value: "MO",
    imgPath: PATH_IMG_LANG + "/lang_mo.svg",
    selectors: [
        {
            ...CommonSelectors["ALLERGY"],
            name: "MO_알레르기",
            details: [
                {
                    name: "MO_해당사항 없음",
                    ...CommonSelectors["ALLERGY"].details["NULL"]
                },
                {
                    name: "MO_진통제",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_PAINKILLER"]
                },
                {
                    name: "MO_유당",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_ANTIBIOTIC"]
                }
            ]
        },
        {
            ...CommonSelectors["PREGNANT"],
            name: "MO_임신여부",
            details: [
                {
                    name: "MO_임신 X",
                    ...CommonSelectors["PREGNANT"].details["NULL"]
                },
                {
                    name: "MO_임신 O",
                    ...CommonSelectors["PREGNANT"].details["PREGNANT_TRUE"]
                }
            ]
        },
        {
            ...CommonSelectors["CHRONICDISEASES"],
            name: "MO_만성질환",
            details: [
                {
                    name: "MO_해당사항 없음",
                    ...CommonSelectors["CHRONICDISEASES"].details["NULL"]
                },
                {
                    name: "MO_간질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_LIVER"]
                },
                {
                    name: "MO_신장질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_KIDNEY"]
                }
            ]
        }
    ],
    symptoms: [
        { 
            ...CommonSymptoms[COLD],
            name: "ханиад",
            details: [
                { 
                    name: "ханиад",
                    ...CommonSymptomsText.cold_cough
                },
                {
                    name: "толгойн өвчин",
                    ...CommonSymptomsText.cold_headache
                },
                {
                    name: "нус",
                    ...CommonSymptomsText.cold_runnyNose
                },
                {
                    name: "хоолой хавдах",
                    ...CommonSymptomsText.cold_soreThroat
                },
                {
                    name: "халуун",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "бие булрах",
                    ...CommonSymptomsText.cold_bodyache
                }
            ]
        },
        {
            ...CommonSymptoms[HANGOVER],
            name: "шарталт",
            details: [
                {
                    name: "толгойн өвчин",
                    ...CommonSymptomsText.hangover_headache
                },
                {
                    name: "гэдэс суулгалт",
                    ...CommonSymptomsText.hangover_diarrhea
                },
                {
                    name: "бөөлжис",
                    ...CommonSymptomsText.hangover_vomit
                },
                {
                    name: "дотор муухайрах",
                    ...CommonSymptomsText.hangover_nausea
                },
                {
                    name: "MO_속쓰림",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[STOMACHACHE],
            name: "MO_복통",
            details: [
                {
                    name: "гэдэс суулгалт",
                    ...CommonSymptomsText.stomachache_diarrhead
                },
                {
                    name: "сарын тэмдэгийн өвдөлт",
                    ...CommonSymptomsText.stomachache_periodCramps
                },
                {
                    name: "хоолны шингэц муу",
                    ...CommonSymptomsText.stomachache_indigestion
                },
                {
                    name: "өтгөн хаталт",
                    ...CommonSymptomsText.stomachache_constipation
                },
                {
                    name: "дотор муухайрах",
                    ...CommonSymptomsText.stomachache_nausea
                },
                {
                    name: "MO_속쓰림",
                    ...CommonSymptomsText.stomachache_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[SKIN],
            name: "арьсны өвчин",
            details: [
                {
                    name: "шалбархай",
                    ...CommonSymptomsText.skin_abrasion
                },
                {
                    name: "батга",
                    ...CommonSymptomsText.skin_acne
                },
                {
                    name: "харшил",
                    ...CommonSymptomsText.skin_rash
                },
                {
                    name: "экзем",
                    ...CommonSymptomsText.skin_eczema
                },
                {
                    name: "цэврүү",
                    ...CommonSymptomsText.skin_blister
                },
                {
                    name: "хөлний мөөгөнцөр",
                    ...CommonSymptomsText.skin_athletesfoot
                }
            ]
        },
        {
            ...CommonSymptoms[FEMALE],
            name: "эмэгтэй эрүүл мэнд",
            details: [
                {
                    name: "сарын тэмдэгийн өвдөлт",
                    ...CommonSymptomsText.female_periodCramp
                },
                {
                    name: "хөл хүнд тест",
                    ...CommonSymptomsText.female_pregnancyTest
                },
                {
                    name: "идэх жирэмслэлтээр хамгаалах эм",
                    ...CommonSymptomsText.female_oralBirthControl
                },
                {
                    name: "ажлын дараах жирэмслэлтээр хамгаалах эм",
                    ...CommonSymptomsText.female_postCoitalBirthControl
                },
            ]
        },
        {
            ...CommonSymptoms[OTHER],
            name: "анхны тусламж",
            details: [
                {
                    name: "наалт",
                    ...CommonSymptomsText.other_bandAid
                },
                {
                    name: "боолт",
                    ...CommonSymptomsText.other_bandage
                },
                {
                    name: "ариутгах бодис",
                    ...CommonSymptomsText.other_disinfectant
                },
                {
                    name: "давсны уусмал",
                    ...CommonSymptomsText.other_salineSolution
                },
                {
                    name: "хиймэл нулимс",
                    ...CommonSymptomsText.other_artificialTears
                }
            ]
        }
    ],
    confirms: [
        {
            name: "эм хэмжээ",
            value: "AMOUNT",
            details: [
                {
                    name: "MO_3일",
                    value: "D3"
                },
                {
                    name: "MO_5일" ,
                    value: "D5"
                },
                {
                    name: "MO_7일",
                    value: "D7"
                }
            ]
        },
        {
            name: "эм удаа",
            value: "TIME",
            details: [
                {
                    name: "MO_아침",
                    value: "TO_MORNING"
                },
                {
                    name: "MO_점심" ,
                    value: "TO_LUNCH"
                },
                {
                    name: "MO_저녁",
                    value: "TO_DINNER"
                },
                {
                    name: "MO_취침전",
                    value: "TO_SLEEP"
                }
            ]
        },
        {
            name: "эм арга",
            value: "WAY",
            details: [
                {
                    name: "MO_식전30분",
                    value: "AGO_EAT"
                },
                {
                    name: "MO_식전즉시" ,
                    value: "AGO_IMMEDIATE_EAT"
                },
                {
                    name: "MO_식후즉시",
                    value: "AFTER_IMMEDIATE_EAT"
                },
                {
                    name: "MO_식후30분",
                    value: "AFTER_EAT"
                },
                {
                    name: "MO_공복",
                    value: "NO_EAT"
                }
            ]
        },
        {
            name: "анхааруулга",
            value: "CAUTION",
            details: [
                {
                    name: "MO_졸음",
                    value: "CAUTION_SLEEP"
                },
                {
                    name: "MO_발진",
                    value: "CAUTION_RASH"
                },
                {
                    name: "MO_혈압",
                    value: "CAUTION_BLOODPRESSURE"
                },
                {
                    name: "MO_복통",
                    value: "CAUTION_STOMACAHCHE"
                },
                {
                    name: "MO_설사",
                    value: "CAUTION_DIARRHEA"
                },
                {
                    name: "MO_어지러움",
                    value: "CAUTION_DIZZY"
                },
            ]
        },
    ]
};