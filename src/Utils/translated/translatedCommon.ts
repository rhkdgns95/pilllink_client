import { PATH_IMG_DETAILS } from "../../Routes/App/AppProvider";

const CommonSymptomsText: ICommonSymptomsText = {
    // [1] - COLD
    COLD: "COLD",
    COLD_IMG: "/images/symptoms/symptoms_cold.svg",
    cold_cough: {
        value: "cold_cough",
        imgPath: PATH_IMG_DETAILS + "/comming_soon.svg"
    },
    cold_headache: {
        value: "cold_headache",
        imgPath: "/"
    },  // 두통    
    cold_snot: {
        value: "cold_snot",
        imgPath: PATH_IMG_DETAILS + "/comming_soon.svg"
    },  // 콧물
    cold_throat: {
        value: "cold_throat",
        imgPath: "/"
    },  // 목아픔
    cold_fever: {
        value: "cold_fever",
        imgPath: "/"
    },  // 열    
    cold_muscle: {
        value: "cold_muscle",
        imgPath: "/"
    },  // 몸살
    // [2] - COLIC
    COLIC: "COLIC",
    COLIC_IMG: "/images/symptoms/symptoms_colic.svg",
    colic_diarrhead: {
        value: "colic_diarrhead",
        imgPath: "/"
    }, // 설사
    colic_periodCramps: {
        value: "colic_periodCramps",
        imgPath: "/"
    }, // 생리통
    colic_indigestion: {
        value: "colic_indigestion",
        imgPath: "/"
    }, // 소화불량
    colic_constipation: {
        value: "colic_constipation",
        imgPath: "/"
    }, // 변비
    colic_sickness: {
        value: "colic_sickness",
        imgPath: "/"
    }, // 메스꺼움
    colic_heartburn: {
        value: "colic_heartburn",
        imgPath: "/"
    }, // 속쓰림
    // [3] - Female
    FEMALE: "FEMALE",
    FEMALE_IMG: "/images/symptoms/symptoms_female.svg",
    female_tmp: {
        value: "female_tmp",
        imgPath: "/"
    }, // 임시
    // [4] - Hangover
    HANGOVER: "HANGOVER",
    HANGOVER_IMG: "/images/symptoms/symptoms_hangover.svg",
    hangover_headache: {
        value: "hangover_headache",
        imgPath: "/"
    }, // 두통    
    hangover_diarrhea: {
        value: "hangover_diarrhea",
        imgPath: "/"
    }, // 설사    
    hangover_throwup: {
        value: "hangover_throwup",
        imgPath: ""
    }, // 구토    
    hangover_sickness: {
        value: "hangover_sickness",
        imgPath: ""
    }, // 메스꺼움    
    hangover_heartburn: {
        value: "hangover_heartburn",
        imgPath: ""
    }, // 속쓰림
    // [5] - Headache
    HEADACHE: "HEADACHE",
    HEADACHE_IMG: "/images/symptoms/symptoms_headache.svg",
    headache_headache: { 
        value: "headache_headache",
        imgPath: ""
    },
    headache_migraine: {
        value: "headache_migraine",
        imgPath: ""
    },
    // [6] - Other
    OTHER: "OTHER",
    OTHER_IMG: "/images/symptoms/symptoms_other.svg",
    other_tmp: {
        value: "other_tmp",
        imgPath: ""
    }, // 임시
    // [7] - Skin
    SKIN: "SKIN",
    SKIN_IMG: "/images/symptoms/symptoms_skin.svg",
    skin_abrasion: {
        value: "skin_abrasion",
        imgPath: "/"
    },  // 철과상
    skin_acne: {
        value: "skin_acne",
        imgPath: "/"
    },  // 여드름
    skin_hives: {
        value: "skin_hives",
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
    // [8] - Toothache
    TOOTHACHE: "TOOTHACHE",
    TOOTHACHE_IMG: "/images/symptoms/symptoms_toothache.svg",
    toothache_needle: {
        value: "toothache_needle",
        imgPath: "/"
    }, //  혓바늘
    toothache_stomatitis: {
        value: "toothache_stomatitis",
        imgPath: "/"
    }, //  구내염
    toothache_drylips: {
        value: "toothache_drylips",
        imgPath: "/"
    }, //  마른 입술
    toothache_badbreath: {
        value: "toothache_badbreath",
        imgPath: "/"
    }, //  입냄새
    toothache_gum: {
        value: "toothache_gum",
        imgPath: ""
    }, //  잇몸
    toothache_drymouth: {
        value: "toothache_drymouth",
        imgPath: "/"
    }, //  구강건조증
};

const { COLD, COLIC, HANGOVER, FEMALE, HEADACHE, SKIN, OTHER, TOOTHACHE } = CommonSymptomsText;
const { COLD_IMG, COLIC_IMG, HANGOVER_IMG, FEMALE_IMG, HEADACHE_IMG, SKIN_IMG, OTHER_IMG, TOOTHACHE_IMG } = CommonSymptomsText;

const CommonSymptoms: any = {
    "COLD": {
        name: "Cold",
        imgPath: COLD_IMG,
        value: COLD,
        details: []
    },
    "COLIC": {
        name: "Colic",
        imgPath: COLIC_IMG,
        value: COLIC,
        details: []
    },
    "FEMALE": {
        name: "Female Diseases",
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
    "HEADACHE": {
        name: "Headache",
        imgPath: HEADACHE_IMG,
        value: HEADACHE,
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
    "TOOTHACHE": {
        name: "Toothache",
        imgPath: TOOTHACHE_IMG,
        value: TOOTHACHE,
        details: []
    }
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