import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
import { PATH_IMG_LANG } from "../../Routes/App/AppProvider";
const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedFrance: ICountry = {
    name: "France",
    value: "FR",
    imgPath: PATH_IMG_LANG + "/lang_fr.jpg",
    selectors: [
        {
            ...CommonSelectors["ALLERGY"],
            name: "allergie",
            details: [
                {
                    name: "Néant",
                    ...CommonSelectors["ALLERGY"].details["NULL"]
                },
                {
                    name: "antalgique",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_PAINKILLER"]
                },
                {
                    name: "antibiotique",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_ANTIBIOTIC"]
                }
            ]
        },
        {
            ...CommonSelectors["PREGNANT"],
            name: "grossesse",
            details: [
                {
                    name: "grossesse X",
                    ...CommonSelectors["PREGNANT"].details["NULL"]
                },
                {
                    name: "grossesse O",
                    ...CommonSelectors["PREGNANT"].details["PREGNANT_TRUE"]
                }
            ]
        },
        {
            ...CommonSelectors["CHRONICDISEASES"],
            name: "maladie chronique",
            details: [
                {
                    name: "Néant",
                    ...CommonSelectors["CHRONICDISEASES"].details["NULL"]
                },
                {
                    name: "Maladie du foie",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_LIVER"]
                },
                {
                    name: "hypertension",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_KIDNEY"]
                }
            ]
        }
    ],
    symptoms: [
        { 
            ...CommonSymptoms[COLD],
            name: "Grippe",
            details: [
                { 
                    name: "Toux",
                    ...CommonSymptomsText.cold_cough
                },
                {
                    name: "Mal de tête",
                    ...CommonSymptomsText.cold_headache
                },
                {
                    name: "Nez qui coule",
                    ...CommonSymptomsText.cold_runnyNose
                },
                {
                    name: "Mal à la gorge",
                    ...CommonSymptomsText.cold_soreThroat
                },
                {
                    name: "Fièvre",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "Courbatures",
                    ...CommonSymptomsText.cold_bodyache
                }
            ]
        },
        {
            ...CommonSymptoms[HANGOVER],
            name: "Mal de tête /\n Gueule de bois",
            details: [
                {
                    name: "Mal de tête",
                    ...CommonSymptomsText.hangover_headache
                },
                {
                    name: "Diarrhée",
                    ...CommonSymptomsText.hangover_diarrhea
                },
                {
                    name: "Vomissement",
                    ...CommonSymptomsText.hangover_vomit
                },
                {
                    name: "Nausée",
                    ...CommonSymptomsText.hangover_nausea
                },
                {
                    name: "Mal au coeur",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[STOMACHACHE],
            name: "Mal de ventre",
            details: [
                {
                    name: "Diarrhée",
                    ...CommonSymptomsText.stomachache_diarrhead
                },
                {
                    name: "Crampes menstruelles",
                    ...CommonSymptomsText.stomachache_periodCramps
                },
                {
                    name: "Indigestion",
                    ...CommonSymptomsText.stomachache_indigestion
                },
                {
                    name: "Costipation",
                    ...CommonSymptomsText.stomachache_constipation
                },
                {
                    name: "Nausée",
                    ...CommonSymptomsText.stomachache_nausea
                },
                {
                    name: "Mal au coeur",
                    ...CommonSymptomsText.stomachache_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[SKIN],
            name: "Eruption cutanée",
            details: [
                {
                    name: "Frottement/écorchure",
                    ...CommonSymptomsText.skin_abrasion
                },
                {
                    name: "Acné",
                    ...CommonSymptomsText.skin_acne
                },
                {
                    name: "Rougeur/Irritation",
                    ...CommonSymptomsText.skin_rash
                },
                {
                    name: "Eczema",
                    ...CommonSymptomsText.skin_eczema
                },
                {
                    name: "Cloque/Ampoule",
                    ...CommonSymptomsText.skin_blister
                },
                {
                    name: "Le pied d'athlète",
                    ...CommonSymptomsText.skin_athletesfoot
                }
            ]
        },
        {
            ...CommonSymptoms[FEMALE],
            name: "Santé féminine",
            details: [
                {
                    name: "crampes menstruelle",
                    ...CommonSymptomsText.female_periodCramp
                },
                {
                    name: "Test de grossesse",
                    ...CommonSymptomsText.female_pregnancyTest
                },
                {
                    name: "Contraceptif oral",
                    ...CommonSymptomsText.female_oralBirthControl
                },
                {
                    name: "Contraceptif post coital",
                    ...CommonSymptomsText.female_postCoitalBirthControl
                },
            ]
        },
        {
            ...CommonSymptoms[OTHER],
            name: "secourismes",
            details: [
                {
                    name: "pansement",
                    ...CommonSymptomsText.other_bandAid
                },
                {
                    name: "bande",
                    ...CommonSymptomsText.other_bandage
                },
                {
                    name: "désinfectant",
                    ...CommonSymptomsText.other_disinfectant
                },
                {
                    name: "solution saline",
                    ...CommonSymptomsText.other_salineSolution
                },
                {
                    name: "Collyre",
                    ...CommonSymptomsText.other_artificialTears
                },
                {
                    name: "Lotion",
                    ...CommonSymptomsText.other_mensoredamCream
                },
                {
                    name: "Spray",
                    ...CommonSymptomsText.other_mensoredamSpray
                },
                {
                    name: "Patch",
                    ...CommonSymptomsText.other_painKillingPatch
                },
                {
                    name: "État liquide",
                    ...CommonSymptomsText.other_painKillingPatchWater
                }
            ]
        }
    ],
    confirms: [
        {
            name: "Dose",
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
            name: "Crampes menstruelle",
            value: "AMOUNT",
            details: [
                {
                    name: "1Jour",
                    value: "D1"
                },
                {
                    name: "2Jour" ,
                    value: "D2"
                },
                {
                    name: "3Jour",
                    value: "D3"
                },
                {
                    name: "5Jour" ,
                    value: "D5"
                },
                {
                    name: "7Jour",
                    value: "D7"
                }
            ]
        },
        {
            name: "Test de grossesse",
            value: "TIME",
            details: [
                {
                    name: "petit-déjeuner",
                    value: "TO_MORNING"
                },
                {
                    name: "déjeuner" ,
                    value: "TO_LUNCH"
                },
                {
                    name: "dîner",
                    value: "TO_DINNER"
                },
                {
                    name: "avant de se coucher",
                    value: "TO_SLEEP"
                }
            ]
        },
        {
            name: "Contraceptifs oraux",
            value: "WAY",
            details: [
                {
                    name: "30 minutes avant le repas",
                    value: "AGO_EAT"
                },
                {
                    name: "30 minutes après le repas",
                    value: "AFTER_EAT"
                },
                {
                    name: "À jeun",
                    value: "NO_EAT"
                }
            ]
        },
        {
            name: "Contraception post coital",
            value: "CAUTION",
            details: [
                {
                    name: "assoupissement",
                    value: "CAUTION_SLEEP"
                },
                {
                    name: "éruption",
                    value: "CAUTION_RASH"
                },
                {
                    name: "tension artérielle ↑",
                    value: "CAUTION_BLOODPRESSURE"
                },                
                {
                    name: "Mal de ventre",
                    value: "CAUTION_STOMACAHCHE"
                },
                {
                    name: "Diarrhée",
                    value: "CAUTION_DIARRHEA"
                },
                {
                    name: "Vertiges Cliquez pour montrer au",
                    value: "CAUTION_DIZZY"
                },
            ]
        },
    ],
    contents: [
        "Vous pouvez choisir plusieurs symptômes",
        "s'il vous plaît, cliquez-le pour le montrer au pharmacien"
    ],
    boardSelectors: [
        {
            name: "Suggestion",
            value: "BOARD_SUGGESTION"
        },
        {
            name: "Enquête",
            value: "BOARD_QUESTION"
        },
        {
            name: "Inconvenience",
            value: "BOARD_PROBLEM"
        }
    ]
};