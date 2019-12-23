import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
import { PATH_IMG_LANG } from "../../Routes/App/AppProvider";
const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedRussia: ICountry = {
    name: "русский",
    value: "RU",
    imgPath: PATH_IMG_LANG + "/lang_ru.png",
    selectors: [
        {
            ...CommonSelectors["ALLERGY"],
            name: "RU_알레르기",
            details: [
                {
                    name: "RU_해당사항 없음",
                    ...CommonSelectors["ALLERGY"].details["NULL"]
                },
                {
                    name: "RU_진통제",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_PAINKILLER"]
                },
                {
                    name: "RU_유당",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_ANTIBIOTIC"]
                }
            ]
        },
        {
            ...CommonSelectors["PREGNANT"],
            name: "RU_임신여부",
            details: [
                {
                    name: "RU_임신 X",
                    ...CommonSelectors["PREGNANT"].details["NULL"]
                },
                {
                    name: "RU_임신 O",
                    ...CommonSelectors["PREGNANT"].details["PREGNANT_TRUE"]
                }
            ]
        },
        {
            ...CommonSelectors["CHRONICDISEASES"],
            name: "RU_만성질환",
            details: [
                {
                    name: "RU_해당사항 없음",
                    ...CommonSelectors["CHRONICDISEASES"].details["NULL"]
                },
                {
                    name: "RU_간질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_LIVER"]
                },
                {
                    name: "RU_신장질환",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_KIDNEY"]
                }
            ]
        }
    ],
    symptoms: [
        { 
            ...CommonSymptoms[COLD],
            name: "простуда",
            details: [
                { 
                    name: "кашель",
                    ...CommonSymptomsText.cold_cough
                },
                {
                    name: "головная боль",
                    ...CommonSymptomsText.cold_headache
                },
                {
                    name: "сопли",
                    ...CommonSymptomsText.cold_runnyNose
                },
                {
                    name: "боль в горле",
                    ...CommonSymptomsText.cold_soreThroat
                },
                {
                    name: "температура",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "переутомление",
                    ...CommonSymptomsText.cold_bodyache
                }
            ]
        },
        {
            ...CommonSymptoms[HANGOVER],
            name: "похмелье",
            details: [
                {
                    name: "головная боль",
                    ...CommonSymptomsText.hangover_headache
                },
                {
                    name: "понос",
                    ...CommonSymptomsText.hangover_diarrhea
                },
                {
                    name: "рвота",
                    ...CommonSymptomsText.hangover_vomit
                },
                {
                    name: "тошнить",
                    ...CommonSymptomsText.hangover_nausea
                },
                {
                    name: "изжога",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[STOMACHACHE],
            name: "желудочное заболевание",
            details: [
                {
                    name: "понос",
                    ...CommonSymptomsText.stomachache_diarrhead
                },
                {
                    name: "менструальная боль",
                    ...CommonSymptomsText.stomachache_periodCramps
                },
                {
                    name: "несварение",
                    ...CommonSymptomsText.stomachache_indigestion
                },
                {
                    name: "запор",
                    ...CommonSymptomsText.stomachache_constipation
                },
                {
                    name: "тошнить",
                    ...CommonSymptomsText.stomachache_nausea
                },
                {
                    name: "изжога",
                    ...CommonSymptomsText.stomachache_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[SKIN],
            name: "кожное заболевание",
            details: [
                {
                    name: "ссадина",
                    ...CommonSymptomsText.skin_abrasion
                },
                {
                    name: "угорь",
                    ...CommonSymptomsText.skin_acne
                },
                {
                    name: "крапивница",
                    ...CommonSymptomsText.skin_rash
                },
                {
                    name: "экзема",
                    ...CommonSymptomsText.skin_eczema
                },
                {
                    name: "водянистая мозоль",
                    ...CommonSymptomsText.skin_blister
                },
                {
                    name: "эпидермофития стоп",
                    ...CommonSymptomsText.skin_athletesfoot
                }
            ]
        },
        {
            ...CommonSymptoms[FEMALE],
            name: "женщина здоровье",
            details: [
                {
                    name: "менструальная боль",
                    ...CommonSymptomsText.female_periodCramp
                },
                {
                    name: "беременность тест",
                    ...CommonSymptomsText.female_pregnancyTest
                },
                {
                    name: "ора́льные противозача́точные сре́дства",
                    ...CommonSymptomsText.female_oralBirthControl
                },
                {
                    name: "посме́ртный противозачаточные средства",
                    ...CommonSymptomsText.female_postCoitalBirthControl
                },
            ]
        },
        {
            ...CommonSymptoms[OTHER],
            name: "скорая помощь",
            details: [
                {
                    name: "лейкопластырь",
                    ...CommonSymptomsText.other_bandAid
                },
                {
                    name: "бинт",
                    ...CommonSymptomsText.other_bandage
                },
                {
                    name: "дезинфицирующее средство",
                    ...CommonSymptomsText.other_disinfectant
                },
                {
                    name: "солёная вода",
                    ...CommonSymptomsText.other_salineSolution
                },
                {
                    name: "искусственный слёзы",
                    ...CommonSymptomsText.other_artificialTears
                }
            ]
        }
    ],
    confirms: [
        {
            name: "принима́ть лека́рство Частица",
            value: "AMOUNT",
            details: [
                {
                    name: "RU_3일",
                    value: "D3"
                },
                {
                    name: "RU_5일" ,
                    value: "D5"
                },
                {
                    name: "RU_7일",
                    value: "D7"
                }
            ]
        },
        {
            name: "принима́ть лека́рство количество раз",
            value: "TIME",
            details: [
                {
                    name: "RU_아침",
                    value: "TO_MORNING"
                },
                {
                    name: "RU_점심" ,
                    value: "TO_LUNCH"
                },
                {
                    name: "RU_저녁",
                    value: "TO_DINNER"
                },
                {
                    name: "RU_취침전",
                    value: "TO_SLEEP"
                }
            ]
        },
        {
            name: "принима́ть лека́рство способ",
            value: "WAY",
            details: [
                {
                    name: "RU_식전30분",
                    value: "AGO_EAT"
                },
                {
                    name: "RU_식전즉시" ,
                    value: "AGO_IMMEDIATE_EAT"
                },
                {
                    name: "RU_식후즉시",
                    value: "AFTER_IMMEDIATE_EAT"
                },
                {
                    name: "RU_식후30분",
                    value: "AFTER_EAT"
                },
                {
                    name: "RU_공복",
                    value: "NO_EAT"
                }
            ]
        },
        {
            name: "предупреждение",
            value: "CAUTION",
            details: [
                {
                    name: "RU_졸음",
                    value: "CAUTION_SLEEP"
                },
                {
                    name: "RU_발진",
                    value: "CAUTION_RASH"
                },
                {
                    name: "RU_혈압",
                    value: "CAUTION_BLOODPRESSURE"
                },
                {
                    name: "RU_복통",
                    value: "CAUTION_STOMACAHCHE"
                },
                {
                    name: "RU_설사",
                    value: "CAUTION_DIARRHEA"
                },
                {
                    name: "RU_어지러움",
                    value: "CAUTION_DIZZY"
                },
            ]
        },
    ]
};