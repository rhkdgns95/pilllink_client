import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
import { PATH_IMG_LANG } from "../../Routes/App/AppProvider";
const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedMongol: ICountry = {
    name: "Монгол",
    value: "MO",
    imgPath: PATH_IMG_LANG + "/lang_mo.png",
    selectors: [
        {
            ...CommonSelectors["ALLERGY"],
            name: "харшил",
            details: [
                {
                    name: "байхгүй",
                    ...CommonSelectors["ALLERGY"].details["NULL"]
                },
                {
                    name: "өвчин намдаах эм",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_PAINKILLER"]
                },
                {
                    name: "антибиотек",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_ANTIBIOTIC"]
                }
            ]
        },
        {
            ...CommonSelectors["PREGNANT"],
            name: "хөл хүнд",
            details: [
                {
                    name: "хөл хүнд  X",
                    ...CommonSelectors["PREGNANT"].details["NULL"]
                },
                {
                    name: "хөл хүнд O",
                    ...CommonSelectors["PREGNANT"].details["PREGNANT_TRUE"]
                }
            ]
        },
        {
            ...CommonSelectors["CHRONICDISEASES"],
            name: "архаг өвчин",
            details: [
                {
                    name: "байхгүй",
                    ...CommonSelectors["CHRONICDISEASES"].details["NULL"]
                },
                {
                    name: "элэг өвчин",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_LIVER"]
                },
                {
                    name: "цусны өндөр даралт",
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
                    name: "дотор хорсох",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[STOMACHACHE],
            name: "гэдэсний өвчин",
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
                    name: "дотор хорсох",
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
                },
                {
                    name: "MO_멘소레담_크림형",
                    ...CommonSymptomsText.other_mensoredamCream
                },
                {
                    name: "MO_멘소레담_스프레이형",
                    ...CommonSymptomsText.other_mensoredamSpray
                },
                {
                    name: "MO_파스",
                    ...CommonSymptomsText.other_painKillingPatch
                },
                {
                    name: "MO_물파스",
                    ...CommonSymptomsText.other_painKillingPatchWater
                }
            ]
        }
    ],
    confirms: [
        {
            name: "ТУГНАЛ",
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
            name: "эм хэмжээ",
            value: "AMOUNT",
            details: [
                {
                    name: "1өдөр",
                    value: "D1"
                },
                {
                    name: "2өдөр" ,
                    value: "D2"
                },
                {
                    name: "3өдөр",
                    value: "D3"
                },
                {
                    name: "5өдөр" ,
                    value: "D5"
                },
                {
                    name: "7өдөр",
                    value: "D7"
                }
            ]
        },
        {
            name: "эм удаа",
            value: "TIME",
            details: [
                {
                    name: "өглөөний цай",
                    value: "TO_MORNING"
                },
                {
                    name: "үдийн хоол" ,
                    value: "TO_LUNCH"
                },
                {
                    name: "оройн хоол",
                    value: "TO_DINNER"
                },
                {
                    name: "унтах түрүүчийн",
                    value: "TO_SLEEP"
                }
            ]
        },
        {
            name: "эм арга",
            value: "WAY",
            details: [
                {
                    name: "хоолны өмнө 30минут",
                    value: "AGO_EAT"
                },
                {
                    name: "хоолны дараа 30минут",
                    value: "AFTER_EAT"
                },
                {
                    name: "өлөн элэг",
                    value: "NO_EAT"
                }
            ]
        },
        {
            name: "анхааруулга",
            value: "CAUTION",
            details: [
                {
                    name: "нойр",
                    value: "CAUTION_SLEEP"
                },
                {
                    name: "тууралт",
                    value: "CAUTION_RASH"
                },
                {
                    name: "цусны даралт ↑",
                    value: "CAUTION_BLOODPRESSURE"
                },
                {
                    name: "гэдэсний өвчин",
                    value: "CAUTION_STOMACAHCHE"
                },
                {
                    name: "гэдэс суулгалт",
                    value: "CAUTION_DIARRHEA"
                },
                {
                    name: "толгой эргэх",
                    value: "CAUTION_DIZZY"
                },
            ]
        },
    ],
    contents: [
        "Та олон шинж тэмдгийг сонгож болно",
        "Хэл сэлгэх товчлуур."
    ],
    boardSelectors: [
        {
            name: "санал",
            value: "BOARD_SUGGESTION"
        },
        {
            name: "запрос",
            value: "BOARD_QUESTION"
        },
        {
            name: "неудобство",
            value: "BOARD_PROBLEM"
        }
    ]
};