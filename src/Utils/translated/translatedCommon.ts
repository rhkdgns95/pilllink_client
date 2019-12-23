import { PATH_IMG_SYMPTOMS, PATH_IMG_DETAILS } from "../../Routes/App/AppProvider";

const CommonSymptomsText: ICommonSymptomsText = {
    // [1] - COLD
    COLD: "COLD",
    COLD_IMG: PATH_IMG_SYMPTOMS + "/symptoms_cold.svg",
    cold_cough: {
        value: "cold_cough",
        imgPath: PATH_IMG_DETAILS + "/comming_soon.svg"
    },
    cold_headache: {
        value: "cold_headache",
        imgPath: "/"
    },  // 두통    
    cold_runnyNose: {
        value: "cold_runnyNose",
        imgPath: PATH_IMG_DETAILS + "/comming_soon.svg"
    },  // 콧물
    cold_soreThroat: {
        value: "cold_soreThroat",
        imgPath: "/"
    },  // 목아픔
    cold_fever: {
        value: "cold_fever",
        imgPath: "/"
    },  // 열    
    cold_bodyache: {
        value: "cold_bodyache",
        imgPath: "/"
    },  // 몸살
    // [2] - Hangover
    HANGOVER: "HANGOVER",
    HANGOVER_IMG: PATH_IMG_SYMPTOMS + "/symptoms_hangover.svg",
    hangover_headache: {
        value: "hangover_headache",
        imgPath: "/"
    }, // 두통    
    hangover_diarrhea: {
        value: "hangover_diarrhea",
        imgPath: "/"
    }, // 설사    
    hangover_vomit: {
        value: "hangover_vomit",
        imgPath: ""
    }, // 구토    
    hangover_nausea: {
        value: "hangover_nausea",
        imgPath: ""
    }, // 메스꺼움    
    hangover_heartburn: {
        value: "hangover_heartburn",
        imgPath: ""
    }, // 속쓰림
    // [3] - STOMACHACHE
    STOMACHACHE: "STOMACHACHE",
    STOMACHACHE_IMG: PATH_IMG_SYMPTOMS + "/symptoms_stomachache.svg",
    stomachache_diarrhead: {
        value: "stomachache_diarrhead",
        imgPath: "/"
    }, // 설사
    stomachache_periodCramps: {
        value: "stomachache_periodCramps",
        imgPath: "/"
    }, // 생리통
    stomachache_indigestion: {
        value: "stomachache_indigestion",
        imgPath: "/"
    }, // 소화불량
    stomachache_constipation: {
        value: "stomachache_constipation",
        imgPath: "/"
    }, // 변비
    stomachache_nausea: {
        value: "stomachache_nausea",
        imgPath: "/"
    }, // 메스꺼움
    stomachache_heartburn: {
        value: "stomachache_heartburn",
        imgPath: "/"
    }, // 속쓰림
    // [4] - Skin
    SKIN: "SKIN",
    SKIN_IMG: PATH_IMG_SYMPTOMS + "/symptoms_skin.svg",
    skin_abrasion: {
        value: "skin_abrasion",
        imgPath: "/"
    },  // 철과상
    skin_acne: {
        value: "skin_acne",
        imgPath: "/"
    },  // 여드름
    skin_rash: {
        value: "skin_rash",
        imgPath: "/"
    },  // 두드러기
    skin_eczema: {
        value: "skin_eczema",
        imgPath: "/"
    },  // 습진
    skin_blister: {
        value: 'skin_blister',
        imgPath: "/"
    },  // 수포
    skin_athletesfoot: {
        value: "skin_athletesfoot",
        imgPath: "/"
    },  // 무좀
    // [5] - Female
    FEMALE: "FEMALE",
    FEMALE_IMG: PATH_IMG_SYMPTOMS + "/symptoms_female.svg",
    female_periodCramp: {
        value: "female_periodCramp",
        imgPath: "/"
    }, // 생리통
    female_pregnancyTest: {
        value: "female_pregnancyTest",
        imgPath: "/"
    }, // 임신테스트
    female_oralBirthControl: {
        value: "female_oralBirthControl",
        imgPath: "/"
    }, // 경구피임약
    female_postCoitalBirthControl: {
        value: "female_postCoitalBirthControl",
        imgPath: "/"
    }, // 사후피임약

    // [6] - Other
    OTHER: "OTHER",
    OTHER_IMG: PATH_IMG_SYMPTOMS + "/symptoms_other.svg",
    other_bandAid: {
        value: "other_bandAid",
        imgPath: "/"
    }, // 반창고
    other_bandage: {
        value: "other_bandage",
        imgPath: "/"
    }, // 붕대
    other_disinfectant: {
        value: "other_disinfectant",
        imgPath: "/"
    }, // 소독약
    other_salineSolution: {
        value: "other_salineSolution",
        imgPath: "/"
    }, // 식염수
    other_artificialTears: {
        value: "other_artificialTears",
        imgPath: "/"
    }, // 인공눈물
};

const { COLD, STOMACHACHE, HANGOVER, FEMALE, SKIN, OTHER } = CommonSymptomsText;
const { COLD_IMG, STOMACHACHE_IMG, HANGOVER_IMG, FEMALE_IMG, SKIN_IMG, OTHER_IMG } = CommonSymptomsText;

const CommonSymptoms: any = {
    "COLD": {
        name: "Cold",
        imgPath: COLD_IMG,
        value: COLD,
        details: []
    },
    "STOMACHACHE": {
        name: "Stomachache",
        imgPath: STOMACHACHE_IMG,
        value: STOMACHACHE,
        details: []
    },
    "FEMALE": {
        name: "Woman Health",
        imgPath: FEMALE_IMG,
        value: FEMALE,
        details: []
    },
    "HANGOVER": {
        name: "Hangover",
        imgPath: HANGOVER_IMG,
        value: HANGOVER,
        details: []
    },
    "SKIN": {
        name: "Skin Diseases",
        imgPath: SKIN_IMG,
        value: SKIN,
        details: []
    },
    "OTHER": {
        name: "Others",
        imgPath: OTHER_IMG,
        value: OTHER,
        details: []
    },
};

type ISelectors = "ALLERGY" | "PREGNANT" | "CHRONICDISEASES";
interface ICommonSelectors {
    [key: string]: {
        name: string;
        value: ISelectors;
        details: {
            [key: string]: {
                value: string;
            }
        }
    }
}
const NULL: string = "NULL";
const ALLERGY_PAINKILLER: string = "ALLERGY_PAINKILLER";
const ALLERGY_ANTIBIOTIC: string = "ALLERGY_ANTIBIOTIC";
const ALLERGY_LACTOSE: string = "ALLERGY_LACTOSE";
const PREGNANT_TRUE: string = "PREGNANT_TRUE";
const CHRONIC_LIVER: string = "CHRONIC_LIVER";
const CHRONIC_KIDNEY: string = "CHRONIC_KIDNEY";

const CommonSelectors: ICommonSelectors = {
    "ALLERGY": {
        name: "Allergy",
        value: "ALLERGY",
        details: {
            "NULL": {
                value: NULL
            },
            "ALLERGY_PAINKILLER": {
                value: ALLERGY_PAINKILLER
            },
            "ALLERGY_ANTIBIOTIC": {
                value: ALLERGY_ANTIBIOTIC
            },
            "ALLERGY_LACTOSE": {
                value: ALLERGY_LACTOSE
            }
        }
    },
    "PREGNANT": {
        name: "Pregnancy",
        value: "PREGNANT",
        details: {
            "NULL": {
                value: NULL
            },
            "PREGNANT_TRUE": {
                value: PREGNANT_TRUE
            }
        }
    },
    "CHRONICDISEASES": {
        name: "Chronic Diseases",
        value: "CHRONICDISEASES",
        details: {
            "NULL": {
                value: NULL
            },
            "CHRONIC_LIVER": {
                value: CHRONIC_LIVER
            },
            "CHRONIC_KIDNEY": {
                value: CHRONIC_KIDNEY 
            }
        }
    }
};

export { CommonSymptomsText, CommonSymptoms, CommonSelectors };
