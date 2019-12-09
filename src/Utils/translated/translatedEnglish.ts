import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";

const { COLD, COLIC, HANGOVER, FEMALE, HEADACHE, SKIN, OTHER, TOOTHACHE } = CommonSymptomsText;

export const TranslatedEnglish: ICountry = {
    name: "English",
    value: "EN",
    imgPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/285px-Flag_of_the_United_States.svg.png",
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
            ...CommonSymptoms[COLD], // S-1. 감기
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
                    name: "Snot",
                    ...CommonSymptomsText.cold_snot
                },
                {
                    name: "Throat",
                    ...CommonSymptomsText.cold_throat
                },
                {
                    name: "Fever",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "Muscle",
                    ...CommonSymptomsText.cold_muscle
                }
            ]
        },
        {
            ...CommonSymptoms[COLIC],
            details: [
                {
                    name: "Diarrhead",
                    ...CommonSymptomsText.colic_diarrhead
                },
                {
                    name: "PeriodCramps",
                    ...CommonSymptomsText.colic_periodCramps
                },
                {
                    name: "Indigestion",
                    ...CommonSymptomsText.colic_indigestion
                },
                {
                    name: "Constipation",
                    ...CommonSymptomsText.colic_constipation
                },
                {
                    name: "Sickness",
                    ...CommonSymptomsText.colic_sickness
                },
                {
                    name: "Heartburn",
                    ...CommonSymptomsText.colic_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[FEMALE],
            details: [
                {
                    name: "Tmp",
                    ...CommonSymptomsText.female_tmp
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
                    name: "Throwup",
                    ...CommonSymptomsText.hangover_throwup
                },
                {
                    name: "Sickness",
                    ...CommonSymptomsText.hangover_sickness
                },
                {
                    name: "Heartburn",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[HEADACHE],
            details: [
                {
                    name: "Headache",
                    ...CommonSymptomsText.headache_headache
                },
                {
                    name: "Migraine",
                    ...CommonSymptomsText.headache_migraine
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
                    name: "Hives",
                    ...CommonSymptomsText.skin_hives
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
                    name: "Athletesfoot",
                    ...CommonSymptomsText.skin_athletesfoot
                }
            ]
        },
        {
            ...CommonSymptoms[TOOTHACHE],
            details: [
                {
                    name: "Needle",
                    ...CommonSymptomsText.toothache_needle
                },
                {
                    name: "Stomatitis",
                    ...CommonSymptomsText.toothache_stomatitis
                },
                {
                    name: "Drylips",
                    ...CommonSymptomsText.toothache_drylips
                },
                {
                    name: "Badbreath",
                    ...CommonSymptomsText.toothache_badbreath
                },
                {
                    name: "Gum",
                    ...CommonSymptomsText.toothache_gum
                },
                {
                    name: "Drymouth",
                    ...CommonSymptomsText.toothache_drymouth
                }
            ]
        },
        {
            ...CommonSymptoms[OTHER],
            details: [
                {
                    name: "Tmp",
                    ...CommonSymptomsText.other_tmp
                }
            ]
        }
    ]
};