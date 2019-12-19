import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";

const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedEnglish: ICountry = {
    name: "English",
    value: "EN",
    imgPath: "/images/lang/lang_en.svg",
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
                    name: "None",
                    ...CommonSelectors["PREGNANT"].details["NULL"]
                },
                {
                    name: "Pregnant",
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
                    name: "Liver disease",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_LIVER"]
                },
                {
                    name: "Kidney disease",
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
                    name: "Other_tmp",
                    ...CommonSymptomsText.other_tmp
                }
            ]
        }
    ]
};