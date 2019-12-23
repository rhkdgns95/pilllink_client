import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
import { PATH_IMG_LANG } from "../../Routes/App/AppProvider";
const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedThai: ICountry = {
    name: "ไทย",
    value: "TH",
    imgPath: PATH_IMG_LANG + "/lang_th.svg",
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
                    name: "TH_속쓰림",
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
                    name: "TH_속쓰림",
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
                }
            ]
        }
    ],
    confirms: [
        {
            name: "ยา ปริมาณ",
            value: "AMOUNT",
            details: [
                {
                    name: "TH_3일",
                    value: "D3"
                },
                {
                    name: "TH_5일" ,
                    value: "D5"
                },
                {
                    name: "TH_7일",
                    value: "D7"
                }
            ]
        },
        {
            name: "ยา จำนวนครั้ง",
            value: "TIME",
            details: [
                {
                    name: "TH_아침",
                    value: "TO_MORNING"
                },
                {
                    name: "TH_점심" ,
                    value: "TO_LUNCH"
                },
                {
                    name: "TH_저녁",
                    value: "TO_DINNER"
                },
                {
                    name: "TH_취침전",
                    value: "TO_SLEEP"
                }
            ]
        },
        {
            name: "ยา วิธี",
            value: "WAY",
            details: [
                {
                    name: "TH_식전30분",
                    value: "AGO_EAT"
                },
                {
                    name: "TH_식전즉시" ,
                    value: "AGO_IMMEDIATE_EAT"
                },
                {
                    name: "TH_식후즉시",
                    value: "AFTER_IMMEDIATE_EAT"
                },
                {
                    name: "TH_식후30분",
                    value: "AFTER_EAT"
                },
                {
                    name: "TH_공복",
                    value: "NO_EAT"
                }
            ]
        },
        {
            name: "การตักเตือน",
            value: "CAUTION",
            details: [
                {
                    name: "TH_졸음",
                    value: "CAUTION_SLEEP"
                },
                {
                    name: "TH_발진",
                    value: "CAUTION_RASH"
                },
                {
                    name: "TH_혈압",
                    value: "CAUTION_BLOODPRESSURE"
                },
                {
                    name: "TH_복통",
                    value: "CAUTION_STOMACAHCHE"
                },
                {
                    name: "TH_설사",
                    value: "CAUTION_DIARRHEA"
                },
                {
                    name: "TH_어지러움",
                    value: "CAUTION_DIZZY"
                },
            ]
        },
    ]
};