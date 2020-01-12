import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
import { PATH_IMG_LANG } from "../../Routes/App/AppProvider";
const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedThai: ICountry = {
    name: "ประเทศไทย",
    value: "TH",
    imgPath: PATH_IMG_LANG + "/lang_th.png",
    selectors: [
        {
            ...CommonSelectors["ALLERGY"],
            name: "อาการแพ้",
            details: [
                {
                    name: "ไม่ป้องกัน",
                    ...CommonSelectors["ALLERGY"].details["NULL"]
                },
                {
                    name: "ยาแก้ปวด",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_PAINKILLER"]
                },
                {
                    name: "สารปฏิชีวนะ",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_ANTIBIOTIC"]
                }
            ]
        },
        {
            ...CommonSelectors["PREGNANT"],
            name: "การตั้งครรภ์",
            details: [
                {
                    name: "การตั้งครรภ์ X",
                    ...CommonSelectors["PREGNANT"].details["NULL"]
                },
                {
                    name: "การตั้งครรภ์ O",
                    ...CommonSelectors["PREGNANT"].details["PREGNANT_TRUE"]
                }
            ]
        },
        {
            ...CommonSelectors["CHRONICDISEASES"],
            name: "อาการเรื้อรัง โรค",
            details: [
                {
                    name: "ไม่ป้องกัน",
                    ...CommonSelectors["CHRONICDISEASES"].details["NULL"]
                },
                {
                    name: "ตับ โรค",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_LIVER"]
                },
                {
                    name: "ความดันโลหิตสูง",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_KIDNEY"]
                }
            ]
        }
    ],
    symptoms: [
        { 
            ...CommonSymptoms[COLD],
            name: "หวัด",
            details: [
                { 
                    name: "การไอ",
                    ...CommonSymptomsText.cold_cough
                },
                {
                    name: "การปวดหัว",
                    ...CommonSymptomsText.cold_headache
                },
                {
                    name: "น้ำมูก",
                    ...CommonSymptomsText.cold_runnyNose
                },
                {
                    name: "คออักเสบ",
                    ...CommonSymptomsText.cold_soreThroat
                },
                {
                    name: "ไข้",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "การเป็นไข้",
                    ...CommonSymptomsText.cold_bodyache
                }
            ]
        },
        {
            ...CommonSymptoms[HANGOVER],
            name: "อาการเมาค้าง",
            details: [
                {
                    name: "การปวดหัว",
                    ...CommonSymptomsText.hangover_headache
                },
                {
                    name: "การท้องร่วง",
                    ...CommonSymptomsText.hangover_diarrhea
                },
                {
                    name: "การอ้วก",
                    ...CommonSymptomsText.hangover_vomit
                },
                {
                    name: "คลื่นไส้",
                    ...CommonSymptomsText.hangover_nausea
                },
                {
                    name: "เสียด",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[STOMACHACHE],
            name: "อาการปวดท้อง",
            details: [
                {
                    name: "การท้องร่วง",
                    ...CommonSymptomsText.stomachache_diarrhead
                },
                {
                    name: "อาการปวดท้องประจำเดือน",
                    ...CommonSymptomsText.stomachache_periodCramps
                },
                {
                    name: "การย่อยไม่ดี",
                    ...CommonSymptomsText.stomachache_indigestion
                },
                {
                    name: "อาการท้องผูก",
                    ...CommonSymptomsText.stomachache_constipation
                },
                {
                    name: "คลื่นไส้",
                    ...CommonSymptomsText.stomachache_nausea
                },
                {
                    name: "เสียด",
                    ...CommonSymptomsText.stomachache_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[SKIN],
            name: "โรคผิวหนัง",
            details: [
                {
                    name: "รอยขีดข่วน",
                    ...CommonSymptomsText.skin_abrasion
                },
                {
                    name: "สิว",
                    ...CommonSymptomsText.skin_acne
                },
                {
                    name: "ลมพิษ",
                    ...CommonSymptomsText.skin_rash
                },
                {
                    name: "โรคหัดเปื่อย",
                    ...CommonSymptomsText.skin_eczema
                },
                {
                    name: "แผลพุพอง",
                    ...CommonSymptomsText.skin_blister
                },
                {
                    name: "โรคน้ำกัดเท้า",
                    ...CommonSymptomsText.skin_athletesfoot
                }
            ]
        },
        {
            ...CommonSymptoms[FEMALE],
            name: "ผู้หญิง สุขภาพ",
            details: [
                {
                    name: "อาการปวดท้องประจำเดือน",
                    ...CommonSymptomsText.female_periodCramp
                },
                {
                    name: "การตั้งครรภ์ การทดสอบ",
                    ...CommonSymptomsText.female_pregnancyTest
                },
                {
                    name: "ยาคุมกำเนิดชนิดกิน",
                    ...CommonSymptomsText.female_oralBirthControl
                },
                {
                    name: "ภายหลังเหตุการณ์ ยาคุมกำเนิด",
                    ...CommonSymptomsText.female_postCoitalBirthControl
                },
            ]
        },
        {
            ...CommonSymptoms[OTHER],
            name: "การปฐมพยาบาล",
            details: [
                {
                    name: "ปลาสเตอร์ปิดแผล",
                    ...CommonSymptomsText.other_bandAid
                },
                {
                    name: "ผ้าพันแผล",
                    ...CommonSymptomsText.other_bandage
                },
                {
                    name: "ยาฆ่าเชื้อ",
                    ...CommonSymptomsText.other_disinfectant
                },
                {
                    name: "น้ำเกลือ",
                    ...CommonSymptomsText.other_salineSolution
                },
                {
                    name: "การประดิษฐ์ น้ำตา",
                    ...CommonSymptomsText.other_artificialTears
                },
                {
                    name: "TH_멘소레담_크림형",
                    ...CommonSymptomsText.other_mensoredamCream
                },
                {
                    name: "TH_멘소레담_스프레이형",
                    ...CommonSymptomsText.other_mensoredamSpray
                },
                {
                    name: "TH_파스",
                    ...CommonSymptomsText.other_painKillingPatch
                },
                {
                    name: "TH_물파스",
                    ...CommonSymptomsText.other_painKillingPatchWater
                }
            ]
        }
    ],
    confirms: [
        {
            name: "ขนาด",
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
            name: "ยา ปริมาณ",
            value: "AMOUNT",
            details: [
                {
                    name: "1วัน",
                    value: "D1"
                },
                {
                    name: "2วัน" ,
                    value: "D2"
                },
                {
                    name: "3วัน",
                    value: "D3"
                },
                {
                    name: "5วัน" ,
                    value: "D5"
                },
                {
                    name: "7วัน",
                    value: "D7"
                }
            ]
        },
        {
            name: "ยา จำนวนครั้ง",
            value: "TIME",
            details: [
                {
                    name: "อาหารเช้า",
                    value: "TO_MORNING"
                },
                {
                    name: "อาหารกลางวัน" ,
                    value: "TO_LUNCH"
                },
                {
                    name: "อาหารเย็น",
                    value: "TO_DINNER"
                },
                {
                    name: "การนอน ก่อน",
                    value: "TO_SLEEP"
                }
            ]
        },
        {
            name: "ยา วิธี",
            value: "WAY",
            details: [
                {
                    name: "ก่อนกินข้าว 30นาที",
                    value: "AGO_EAT"
                },
                {
                    name: "หลังอาหาร 30นาที",
                    value: "AFTER_EAT"
                },
                {
                    name: "ท้องว่าง",
                    value: "NO_EAT"
                }
            ]
        },
        {
            name: "การตักเตือน",
            value: "CAUTION",
            details: [
                {
                    name: "ความง่วง",
                    value: "CAUTION_SLEEP"
                },
                {
                    name: "ผื่น",
                    value: "CAUTION_RASH"
                },
                {
                    name: "ความดันโลหิต ↑",
                    value: "CAUTION_BLOODPRESSURE"
                },
                {
                    name: "อาการปวดท้อง",
                    value: "CAUTION_STOMACAHCHE"
                },
                {
                    name: "การท้องร่วง",
                    value: "CAUTION_DIARRHEA"
                },
                {
                    name: "วิงเวียน",
                    value: "CAUTION_DIZZY"
                },
            ]
        },
    ],
    contents: [
        "คุณสามารถเลือกได้หลายลักษณะ",
        "กรุณาคลิกเพื่อแสดงให้เภสัชกรค่ะ."
    ],
    boardSelectors: [
        {
            name: "การเสนอ",
            value: "BOARD_SUGGESTION"
        },
        {
            name: "การสอบถาม",
            value: "BOARD_QUESTION"
        },
        {
            name: "ความไม่สบาย",
            value: "BOARD_PROBLEM"
        }
    ]
};