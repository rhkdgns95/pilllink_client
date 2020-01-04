import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
import { PATH_IMG_LANG } from "../../Routes/App/AppProvider";

const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedEngland: ICountry = {
    name: "England",
    value: "EN",
    imgPath: PATH_IMG_LANG + "/lang_en.png",
    selectors: [
        {
            ...CommonSelectors["ALLERGY"],
            details: [
                {
                    name: "None",
                    ...CommonSelectors["ALLERGY"].details["NULL"]
                },
                {
                    name: "Painkiller",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_PAINKILLER"]
                },
                {
                    name: "Antibiotic",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_ANTIBIOTIC"]
                }
            ]
        },
        {
            ...CommonSelectors["PREGNANT"],
            details: [
                {
                    name: "Pregnant X",
                    ...CommonSelectors["PREGNANT"].details["NULL"]
                },
                {
                    name: "Pregnant O",
                    ...CommonSelectors["PREGNANT"].details["PREGNANT_TRUE"]
                }
            ]
        },
        {
            ...CommonSelectors["CHRONICDISEASES"],
            details: [
                {
                    name: "None",
                    ...CommonSelectors["CHRONICDISEASES"].details["NULL"]
                },
                {
                    name: "Liver Disease",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_LIVER"]
                },
                {
                    name: "High Blood Pressure",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_KIDNEY"]
                }
            ]
        }
    ],
    symptoms: [
        { 
            ...CommonSymptoms[COLD],
            details: [
                { 
                    name: "Cough",
                    ...CommonSymptomsText.cold_cough
                },
                {
                    name: "Headache",
                    ...CommonSymptomsText.cold_headache
                },
                {
                    name: "Runny Nose",
                    ...CommonSymptomsText.cold_runnyNose
                },
                {
                    name: "Sore Throat",
                    ...CommonSymptomsText.cold_soreThroat
                },
                {
                    name: "Fever",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "Bodyache",
                    ...CommonSymptomsText.cold_bodyache
                }
            ]
        },
        {
            ...CommonSymptoms[HANGOVER],
            details: [
                {
                    name: "Headache",
                    ...CommonSymptomsText.hangover_headache
                },
                {
                    name: "Diarrhea",
                    ...CommonSymptomsText.hangover_diarrhea
                },
                {
                    name: "Vomit",
                    ...CommonSymptomsText.hangover_vomit
                },
                {
                    name: "Nausea",
                    ...CommonSymptomsText.hangover_nausea
                },
                {
                    name: "Heartburn",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[STOMACHACHE],
            details: [
                {
                    name: "Diarrhea",
                    ...CommonSymptomsText.stomachache_diarrhead
                },
                {
                    name: "Period Cramp",
                    ...CommonSymptomsText.stomachache_periodCramps
                },
                {
                    name: "Indigestion",
                    ...CommonSymptomsText.stomachache_indigestion
                },
                {
                    name: "Constipation",
                    ...CommonSymptomsText.stomachache_constipation
                },
                {
                    name: "Nausea",
                    ...CommonSymptomsText.stomachache_nausea
                },
                {
                    name: "Heartburn",
                    ...CommonSymptomsText.stomachache_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[SKIN],
            details: [
                {
                    name: "Abrasion",
                    ...CommonSymptomsText.skin_abrasion
                },
                {
                    name: "Acne",
                    ...CommonSymptomsText.skin_acne
                },
                {
                    name: "Rash",
                    ...CommonSymptomsText.skin_rash
                },
                {
                    name: "Eczema",
                    ...CommonSymptomsText.skin_eczema
                },
                {
                    name: "Blister",
                    ...CommonSymptomsText.skin_blister
                },
                {
                    name: "Athlete's foot",
                    ...CommonSymptomsText.skin_athletesfoot
                }
            ]
        },
        {
            ...CommonSymptoms[FEMALE],
            details: [
                {
                    name: "Period cramp",
                    ...CommonSymptomsText.female_periodCramp
                },
                {
                    name: "Pregnancy Test",
                    ...CommonSymptomsText.female_pregnancyTest
                },
                {
                    name: "Oral Birth Control",
                    ...CommonSymptomsText.female_oralBirthControl
                },
                {
                    name: "Postcoital Birth Control",
                    ...CommonSymptomsText.female_postCoitalBirthControl
                },
            ]
        },
        {
            ...CommonSymptoms[OTHER],
            details: [
                {
                    name: "Band-Aid",
                    ...CommonSymptomsText.other_bandAid
                },
                {
                    name: "Bandage",
                    ...CommonSymptomsText.other_bandage
                },
                {
                    name: "Disinfectant",
                    ...CommonSymptomsText.other_disinfectant
                },
                {
                    name: "Saline Solution",
                    ...CommonSymptomsText.other_salineSolution
                },
                {
                    name: "Artificial Tears",
                    ...CommonSymptomsText.other_artificialTears
                }
            ]
        }
    ],
    confirms: [
        {
            name: "EN_1회 약 갯수",
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
            name: "Quanity",
            value: "AMOUNT",
            details: [
                {
                    name: "1days",
                    value: "D1"
                },
                {
                    name: "2days" ,
                    value: "D2"
                },
                {
                    name: "3days",
                    value: "D3"
                },
                {
                    name: "5days" ,
                    value: "D5"
                },
                {
                    name: "7days",
                    value: "D7"
                }
            ]
        },
        {
            name: "How many times a day",
            value: "TIME",
            details: [
                {
                    name: "Breakfast",
                    value: "TO_MORNING"
                },
                {
                    name: "Lunch" ,
                    value: "TO_LUNCH"
                },
                {
                    name: "Dinner",
                    value: "TO_DINNER"
                },
                {
                    name: "Before Sleep",
                    value: "TO_SLEEP"
                }
            ]
        },
        {
            name: "How to take medicine",
            value: "WAY",
            details: [
                {
                    name: "30mins before meal",
                    value: "AGO_EAT"
                },
                {
                    name: "30mins after meal",
                    value: "AFTER_EAT"
                },
                {
                    name: "Empty Stomach",
                    value: "NO_EAT"
                }
            ]
        },
        {
            name: "Caution",
            value: "CAUTION",
            details: [
                {
                    name: "Drowsiness",
                    value: "CAUTION_SLEEP"
                },
                {
                    name: "Rash",
                    value: "CAUTION_RASH"
                },
                {
                    name: "Blood pressure ↑",
                    value: "CAUTION_BLOODPRESSURE"
                },
                {
                    name: "Stomachache",
                    value: "CAUTION_STOMACAHCHE"
                },
                {
                    name: "Diarrhea",
                    value: "CAUTION_DIARRHEA"
                },
                {
                    name: "Dizziness",
                    value: "CAUTION_DIZZY"
                },
            ]
        },
    ],
    contents: [
        "You may select multiple symptoms.",
        "Please, click it to show to pharmacist."
    ],
    boardSelectors: [
        {
            name: "제안",
            value: "BOARD_SUGGESTION"
        },
        {
            name: "문의사항",
            value: "BOARD_QUESTION"
        },
        {
            name: "불편사항",
            value: "BOARD_PROBLEM"
        }
    ]
};