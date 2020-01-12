import { CommonSymptoms, CommonSymptomsText, CommonSelectors } from "./translatedCommon";
import { PATH_IMG_LANG } from "../../Routes/App/AppProvider";
const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;

export const TranslatedVietnam: ICountry = {
    name: "Việt nam",
    value: "VI",
    imgPath: PATH_IMG_LANG + "/lang_vi.jpg",
    selectors: [
        {
            ...CommonSelectors["ALLERGY"],
            name: "dị ứng",
            details: [
                {
                    name: "Không có",
                    ...CommonSelectors["ALLERGY"].details["NULL"]
                },
                {
                    name: "thuốc giảm đau",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_PAINKILLER"]
                },
                {
                    name: "thuốc kháng sinh",
                    ...CommonSelectors["ALLERGY"].details["ALLERGY_ANTIBIOTIC"]
                }
            ]
        },
        {
            ...CommonSelectors["PREGNANT"],
            name: "có thai",
            details: [
                {
                    name: "có thai X",
                    ...CommonSelectors["PREGNANT"].details["NULL"]
                },
                {
                    name: "có thai O",
                    ...CommonSelectors["PREGNANT"].details["PREGNANT_TRUE"]
                }
            ]
        },
        {
            ...CommonSelectors["CHRONICDISEASES"],
            name: "Bệnh mãn tính",
            details: [
                {
                    name: "Không có",
                    ...CommonSelectors["CHRONICDISEASES"].details["NULL"]
                },
                {
                    name: "gan bệnh tật",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_LIVER"]
                },
                {
                    name: "chứng cao huyết áp",
                    ...CommonSelectors["CHRONICDISEASES"].details["CHRONIC_KIDNEY"]
                }
            ]
        }
    ],
    symptoms: [
        { 
            ...CommonSymptoms[COLD],
            name: "bệnh cảm",
            details: [
                { 
                    name: "sự ho",
                    ...CommonSymptomsText.cold_cough
                },
                {
                    name: "sự đau đầu",
                    ...CommonSymptomsText.cold_headache
                },
                {
                    name: "nước mũi",
                    ...CommonSymptomsText.cold_runnyNose
                },
                {
                    name: "viêm họng",
                    ...CommonSymptomsText.cold_soreThroat
                },
                {
                    name: "nhiệt",
                    ...CommonSymptomsText.cold_fever
                },
                {
                    name: "chứng đau nhức toàn thân",
                    ...CommonSymptomsText.cold_bodyache
                }
            ]
        },
        {
            ...CommonSymptoms[HANGOVER],
            name: "dư vị say rượu",
            details: [
                {
                    name: "sự đau đầu",
                    ...CommonSymptomsText.hangover_headache
                },
                {
                    name: "sự tiêu chảy",
                    ...CommonSymptomsText.hangover_diarrhea
                },
                {
                    name: "sự ói mửa",
                    ...CommonSymptomsText.hangover_vomit
                },
                {
                    name: "buồn nôn",
                    ...CommonSymptomsText.hangover_nausea
                },
                {
                    name: "bệnh ợ lên có vị chua",
                    ...CommonSymptomsText.hangover_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[STOMACHACHE],
            name: "đau bụng",
            details: [
                {
                    name: "sự tiêu chảy",
                    ...CommonSymptomsText.stomachache_diarrhead
                },
                {
                    name: "sự đau bụng kinh",
                    ...CommonSymptomsText.stomachache_periodCramps
                },
                {
                    name: "sự khó tiêu",
                    ...CommonSymptomsText.stomachache_indigestion
                },
                {
                    name: "chứng táo bón",
                    ...CommonSymptomsText.stomachache_constipation
                },
                {
                    name: "buồn nôn",
                    ...CommonSymptomsText.stomachache_nausea
                },
                {
                    name: "bệnh ợ lên có vị chua",
                    ...CommonSymptomsText.stomachache_heartburn
                }
            ]
        },
        {
            ...CommonSymptoms[SKIN],
            name: "Bệnh da liễu",
            details: [
                {
                    name: "vết xước",
                    ...CommonSymptomsText.skin_abrasion
                },
                {
                    name: "mụn trứng cá",
                    ...CommonSymptomsText.skin_acne
                },
                {
                    name: "dị ứng",
                    ...CommonSymptomsText.skin_rash
                },
                {
                    name: "bệnh chàm",
                    ...CommonSymptomsText.skin_eczema
                },
                {
                    name: "vết bỏng",
                    ...CommonSymptomsText.skin_blister
                },
                {
                    name: "bệnh nấm ở chân",
                    ...CommonSymptomsText.skin_athletesfoot
                }
            ]
        },
        {
            ...CommonSymptoms[FEMALE],
            name: "phụ nữ sự khỏe mạnh",
            details: [
                {
                    name: "sự đau bụng kinh",
                    ...CommonSymptomsText.female_periodCramp
                },
                {
                    name: "Thử thai",
                    ...CommonSymptomsText.female_pregnancyTest
                },
                {
                    name: "thuốc ngừa thai loại uống",
                    ...CommonSymptomsText.female_oralBirthControl
                },
                {
                    name: "về sau thuốc tránh thai",
                    ...CommonSymptomsText.female_postCoitalBirthControl
                },
            ]
        },
        {
            ...CommonSymptoms[OTHER],
            name: "sự sơ cứu",
            details: [
                {
                    name: "băng dính y tế",
                    ...CommonSymptomsText.other_bandAid
                },
                {
                    name: "băng vải",
                    ...CommonSymptomsText.other_bandage
                },
                {
                    name: "thuốc khử trùng",
                    ...CommonSymptomsText.other_disinfectant
                },
                {
                    name: "nước muối",
                    ...CommonSymptomsText.other_salineSolution
                },
                {
                    name: "nhân tạo nước mắt",
                    ...CommonSymptomsText.other_artificialTears
                },
                {
                    name: "VI_멘소레담_크림형",
                    ...CommonSymptomsText.other_mensoredamCream
                },
                {
                    name: "VI_멘소레담_스프레이형",
                    ...CommonSymptomsText.other_mensoredamSpray
                },
                {
                    name: "VI_파스",
                    ...CommonSymptomsText.other_painKillingPatch
                },
                {
                    name: "VI_물파스",
                    ...CommonSymptomsText.other_painKillingPatchWater
                }
            ]
        }
    ],
    confirms: [
        {
            name: "liều lượng",
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
            name: "uống thuốc lượng",
            value: "AMOUNT",
            details: [
                {
                    name: "1ngày",
                    value: "D1"
                },
                {
                    name: "2ngày" ,
                    value: "D2"
                },
                {
                    name: "3ngày",
                    value: "D3"
                },
                {
                    name: "5ngày" ,
                    value: "D5"
                },
                {
                    name: "7ngày",
                    value: "D7"
                }
            ]
        },
        {
            name: "uống thuốc số lần",
            value: "TIME",
            details: [
                {
                    name: "cơm sáng",
                    value: "TO_MORNING"
                },
                {
                    name: "bữa trưa" ,
                    value: "TO_LUNCH"
                },
                {
                    name: "bữa tối",
                    value: "TO_DINNER"
                },
                {
                    name: "sự ngủ trước",
                    value: "TO_SLEEP"
                }
            ]
        },
        {
            name: "uống thuốc phương pháp",
            value: "WAY",
            details: [
                {
                    name: "trước khi ăn 30phút",
                    value: "AGO_EAT"
                },
                {
                    name: "sau bữa ăn 30phút",
                    value: "AFTER_EAT"
                },
                {
                    name: "bụng trống không",
                    value: "NO_EAT"
                }
            ]
        },
        {
            name: "nội dung chú ý",
            value: "CAUTION",
            details: [
                {
                    name: "cơn buồn ngủ",
                    value: "CAUTION_SLEEP"
                },
                {
                    name: "chứng nổi nhọt",
                    value: "CAUTION_RASH"
                },
                {
                    name: "huyết áp ↑",
                    value: "CAUTION_BLOODPRESSURE"
                },
                {
                    name: "đau bụng",
                    value: "CAUTION_STOMACAHCHE"
                },
                {
                    name: "sự tiêu chảy",
                    value: "CAUTION_DIARRHEA"
                },
                {
                    name: "chóng mặt",
                    value: "CAUTION_DIZZY"
                },
            ]
        },
    ],
    contents: [
        "Bạn có thể chọn rất nhiều các triệu chứng",
        "Nếu muốn cho các thầy thuốc xem thì hãy nhấp chuột."
    ],
    boardSelectors: [
        {
            name: "sự đề nghị",
            value: "BOARD_SUGGESTION"
        },
        {
            name: "việc hỏi việc hỏi",
            value: "BOARD_QUESTION"
        },
        {
            name: "sự bất tiện",
            value: "BOARD_PROBLEM"
        }
    ]
};