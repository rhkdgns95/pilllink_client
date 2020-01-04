import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
import { PATH_IMG_LANG } from "../../Routes/App/AppProvider";
const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedMexico: ICountry = {
    name: "Mexico",
    value: "ME",
    imgPath: PATH_IMG_LANG + "/lang_me.png",
    selectors: [
        {
            ...CommonSelectors["ALLERGY"],
            name: "Alergia",
            details: [
                {
                    name: "Ninguna",
                    ...CommonSelectors["ALLERGY"].details["NULL"]
                },
                {
                    name: "Calmante",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_PAINKILLER"]
                },
                {
                    name: "Antibiótico",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_ANTIBIOTIC"]
                }
            ]
        },
        {
            ...CommonSelectors["PREGNANT"],
            name: "Embarazo",
            details: [
                {
                    name: "Embarazo X",
                    ...CommonSelectors["PREGNANT"].details["NULL"]
                },
                {
                    name: "Embarazo O",
                    ...CommonSelectors["PREGNANT"].details["PREGNANT_TRUE"]
                }
            ]
        },
        {
            ...CommonSelectors["CHRONICDISEASES"],
            name: "enfermedad crónico",
            details: [
                {
                    name: "Ninguna",
                    ...CommonSelectors["CHRONICDISEASES"].details["NULL"]
                },
                {
                    name: "Hígado dolencia",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_LIVER"]
                },
                {
                    name: "Alta presión arterial",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_KIDNEY"]
                }
            ]
        }
    ],
    symptoms: [
        { 
            ...CommonSymptoms[COLD],
            name: "Resfriado",
            details: [
                { 
                    name: "Tos",
                    ...CommonSymptomsText.cold_cough
                },
                {
                    name: "Dolor de Cabeza",
                    ...CommonSymptomsText.cold_headache
                },
                {
                    name: "Flujo Nasal",
                    ...CommonSymptomsText.cold_runnyNose
                },
                {
                    name: "Dolor de Garganta ",
                    ...CommonSymptomsText.cold_soreThroat
                },
                {
                    name: "Fiebre",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "Dolor Corporal",
                    ...CommonSymptomsText.cold_bodyache
                }
            ]
        },
        {
            ...CommonSymptoms[HANGOVER],
            name: "Resaca",
            details: [
                {
                    name: "Dolor de Cabeza",
                    ...CommonSymptomsText.hangover_headache
                },
                {
                    name: "Diarrea",
                    ...CommonSymptomsText.hangover_diarrhea
                },
                {
                    name: "Vómito",
                    ...CommonSymptomsText.hangover_vomit
                },
                {
                    name: "Nausea",
                    ...CommonSymptomsText.hangover_nausea
                },
                {
                    name: "Acidez estomacal",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[STOMACHACHE],
            name: "Dolor de Estómago",
            details: [
                {
                    name: "Diarrea",
                    ...CommonSymptomsText.stomachache_diarrhead
                },
                {
                    name: "Dolor Menstrual - Cólicos",
                    ...CommonSymptomsText.stomachache_periodCramps
                },
                {
                    name: "Indigestión",
                    ...CommonSymptomsText.stomachache_indigestion
                },
                {
                    name: "Estreñimiento",
                    ...CommonSymptomsText.stomachache_constipation
                },
                {
                    name: "Nausea",
                    ...CommonSymptomsText.stomachache_nausea
                },
                {
                    name: "Acidez Estomacal",
                    ...CommonSymptomsText.stomachache_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[SKIN],
            name: "dermatopatía",
            details: [
                {
                    name: "Herida",
                    ...CommonSymptomsText.skin_abrasion
                },
                {
                    name: "Acné",
                    ...CommonSymptomsText.skin_acne
                },
                {
                    name: "Urticaria",
                    ...CommonSymptomsText.skin_rash
                },
                {
                    name: "Eccema",
                    ...CommonSymptomsText.skin_eczema
                },
                {
                    name: "Ampolla",
                    ...CommonSymptomsText.skin_blister
                },
                {
                    name: "Pie de Atleta",
                    ...CommonSymptomsText.skin_athletesfoot
                }
            ]
        },
        {
            ...CommonSymptoms[FEMALE],
            name: "Salud femenina",
            details: [
                {
                    name: "Dolor Menstrual",
                    ...CommonSymptomsText.female_periodCramp
                },
                {
                    name: "Prueba del Embarazo",
                    ...CommonSymptomsText.female_pregnancyTest
                },
                {
                    name: "Píldora Anticonceptiva",
                    ...CommonSymptomsText.female_oralBirthControl
                },
                {
                    name: "Píldora del día después",
                    ...CommonSymptomsText.female_postCoitalBirthControl
                },
            ]
        },
        {
            ...CommonSymptoms[OTHER],
            name: "Primeros Auxilios",
            details: [
                {
                    name: "Curita",
                    ...CommonSymptomsText.other_bandAid
                },
                {
                    name: "Venda",
                    ...CommonSymptomsText.other_bandage
                },
                {
                    name: "Desinfectante",
                    ...CommonSymptomsText.other_disinfectant
                },
                {
                    name: "Agua salina",
                    ...CommonSymptomsText.other_salineSolution
                },
                {
                    name: "Gotas para los ojos",
                    ...CommonSymptomsText.other_artificialTears
                }
            ]
        }
    ],
    confirms: [
        {
            name: "ME_1회 약 갯수",
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
            name: "Cantidad",
            value: "AMOUNT",
            details: [
                {
                    name: "1día",
                    value: "D1"
                },
                {
                    name: "2día" ,
                    value: "D2"
                },
                {
                    name: "3día",
                    value: "D3"
                },
                {
                    name: "5día" ,
                    value: "D5"
                },
                {
                    name: "7día",
                    value: "D7"
                }
            ]
        },
        {
            name: "Frecuencia",
            value: "TIME",
            details: [
                {
                    name: "Desayuno",
                    value: "TO_MORNING"
                },
                {
                    name: "Almuerzo" ,
                    value: "TO_LUNCH"
                },
                {
                    name: "Cena",
                    value: "TO_DINNER"
                },
                {
                    name: "Dormición antes",
                    value: "TO_SLEEP"
                }
            ]
        },
        {
            name: "Método",
            value: "WAY",
            details: [
                {
                    name: "En ayunas 30minuto",
                    value: "AGO_EAT"
                },
                {
                    name: "Después de la comida 30minuto",
                    value: "AFTER_EAT"
                },
                {
                    name: "Estómago vacío",
                    value: "NO_EAT"
                }
            ]
        },
        {
            name: "Avisos",
            value: "CAUTION",
            details: [
                {
                    name: "Somnolencia",
                    value: "CAUTION_SLEEP"
                },
                {
                    name: "Erupción",
                    value: "CAUTION_RASH"
                },
                {
                    name: "Presión sanguínea ↑",
                    value: "CAUTION_BLOODPRESSURE"
                },
                {
                    name: "Dolor de Estómago",
                    value: "CAUTION_STOMACAHCHE"
                },
                {
                    name: "Diarrea",
                    value: "CAUTION_DIARRHEA"
                },
                {
                    name: "Mareo",
                    value: "CAUTION_DIZZY"
                },
            ]
        },
    ],
    contents: [
        "Puedes seleccionar múltiples síntomas.",
        "Para mostrarlo usted mismo."
    ],
    boardSelectors: [
        {
            name: "sugerencia",
            value: "BOARD_SUGGESTION"
        },
        {
            name: "pregunta",
            value: "BOARD_QUESTION"
        },
        {
            name: "incomodidad",
            value: "BOARD_PROBLEM"
        }
    ]
};