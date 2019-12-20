import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedFrance: ICountry = {
    name: "La France",
    value: "FR",
    imgPath: "/images/lang/lang_fr.svg",
    selectors: [
        {
            ...CommonSelectors["ALLERGY"],
            name: "FR_알레르기",
            details: [
                {
                    name: "FR_해당사항 없음",
                    ...CommonSelectors["ALLERGY"].details["NULL"]
                },
                {
                    name: "FR_진통제",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_PAINKILLER"]
                },
                {
                    name: "FR_유당",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_ANTIBIOTIC"]
                }
            ]
        },
        {
            ...CommonSelectors["PREGNANT"],
            name: "FR_임신여부",
            details: [
                {
                    name: "FR_임신 X",
                    ...CommonSelectors["PREGNANT"].details["NULL"]
                },
                {
                    name: "FR_임신 O",
                    ...CommonSelectors["PREGNANT"].details["PREGNANT_TRUE"]
                }
            ]
        },
        {
            ...CommonSelectors["CHRONICDISEASES"],
            name: "FR_만성질환",
            details: [
                {
                    name: "FR_해당사항 없음",
                    ...CommonSelectors["CHRONICDISEASES"].details["NULL"]
                },
                {
                    name: "FR_간질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_LIVER"]
                },
                {
                    name: "FR_신장질환",
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
            name: "FR_기타",
            details: [
                {
                    name: "FR_기타_임시",
                    ...CommonSymptomsText.other_tmp
                }
            ]
        }
    ]
};