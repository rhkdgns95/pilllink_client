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
            name: "аллергия",
            details: [
                {
                    name: "Ничего",
                    ...CommonSelectors["ALLERGY"].details["NULL"]
                },
                {
                    name: "болеутоляющее средство",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_PAINKILLER"]
                },
                {
                    name: "антибиотическое средство",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_ANTIBIOTIC"]
                }
            ]
        },
        {
            ...CommonSelectors["PREGNANT"],
            name: "беременность",
            details: [
                {
                    name: "беременность X",
                    ...CommonSelectors["PREGNANT"].details["NULL"]
                },
                {
                    name: "беременность O",
                    ...CommonSelectors["PREGNANT"].details["PREGNANT_TRUE"]
                }
            ]
        },
        {
            ...CommonSelectors["CHRONICDISEASES"],
            name: "хрони́ческое заболева́ние",
            details: [
                {
                    name: "Ничего",
                    ...CommonSelectors["CHRONICDISEASES"].details["NULL"]
                },
                {
                    name: "печень болезнь",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_LIVER"]
                },
                {
                    name: "высокое давление",
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
                    name: "3день",
                    value: "D3"
                },
                {
                    name: "5день" ,
                    value: "D5"
                },
                {
                    name: "7день",
                    value: "D7"
                }
            ]
        },
        {
            name: "принима́ть лека́рство количество раз",
            value: "TIME",
            details: [
                {
                    name: "завтрак",
                    value: "TO_MORNING"
                },
                {
                    name: "обед" ,
                    value: "TO_LUNCH"
                },
                {
                    name: "ужин",
                    value: "TO_DINNER"
                },
                {
                    name: "отбой до",
                    value: "TO_SLEEP"
                }
            ]
        },
        {
            name: "принима́ть лека́рство способ",
            value: "WAY",
            details: [
                {
                    name: "перед едой полчаса́",
                    value: "AGO_EAT"
                },
                {
                    name: "после еды полчаса́",
                    value: "AFTER_EAT"
                },
                {
                    name: "пустой желудок",
                    value: "NO_EAT"
                }
            ]
        },
        {
            name: "предупреждение",
            value: "CAUTION",
            details: [
                {
                    name: "дремота",
                    value: "CAUTION_SLEEP"
                },
                {
                    name: "сыпь",
                    value: "CAUTION_RASH"
                },
                {
                    name: "кровеносное давление ↑",
                    value: "CAUTION_BLOODPRESSURE"
                },
                {
                    name: "желудочное заболевание",
                    value: "CAUTION_STOMACAHCHE"
                },
                {
                    name: "понос",
                    value: "CAUTION_DIARRHEA"
                },
                {
                    name: "Головокружительно",
                    value: "CAUTION_DIZZY"
                },
            ]
        },
    ],
    contents: [
        "Можно выбрать несколько симптомов.",
        "Нажмите для показа фармацевту."
    ]
};