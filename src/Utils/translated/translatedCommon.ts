import { PATH_IMG_SYMPTOMS, PATH_IMG_DETAILS } from "../../Routes/App/AppProvider";

const CommonSymptomsText: ICommonSymptomsText = {
    // [1] - COLD
    COLD: "COLD",
    COLD_IMG: PATH_IMG_SYMPTOMS + "/symptoms_cold.png",
    cold_cough: {
        value: "cold_cough",
        imgPath: PATH_IMG_DETAILS + "/cold/cold_cough.png"
    },
    cold_headache: {
        value: "cold_headache",
        imgPath: PATH_IMG_DETAILS + "/cold/cold_headache.png"
    },  // 두통    
    cold_runnyNose: {
        value: "cold_runnyNose",
        imgPath: PATH_IMG_DETAILS + "/cold/cold_runny_nose.png"
    },  // 콧물
    cold_soreThroat: {
        value: "cold_soreThroat",
        imgPath: PATH_IMG_DETAILS + "/cold/cold_sore_throat.png"
    },  // 목아픔
    cold_fever: {
        value: "cold_fever",
        imgPath: PATH_IMG_DETAILS + "/cold/cold_fever.png"
    },  // 열    
    cold_bodyache: {
        value: "cold_bodyache",
        imgPath: PATH_IMG_DETAILS + "/cold/cold_musle_ache.png"
    },  // 몸살
    // [2] - Hangover
    HANGOVER: "HANGOVER",
    HANGOVER_IMG: PATH_IMG_SYMPTOMS + "/symptoms_hangover.png",
    hangover_headache: {
        value: "hangover_headache",
        imgPath: PATH_IMG_DETAILS + "/hangover/hangover_headache.png",
    }, // 두통    
    hangover_diarrhea: {
        value: "hangover_diarrhea",
        imgPath: PATH_IMG_DETAILS + "/hangover/hangover_diarrhea.png",
    }, // 설사    
    hangover_vomit: {
        value: "hangover_vomit",
        imgPath: PATH_IMG_DETAILS + "/hangover/hangover_vomit.png"
    }, // 구토    
    hangover_nausea: {
        value: "hangover_nausea",
        imgPath: PATH_IMG_DETAILS + "/hangover/hangover_nausea.png"
    }, // 메스꺼움    
    hangover_heartburn: {
        value: "hangover_heartburn",
        imgPath: PATH_IMG_DETAILS + "/hangover/hangover_heartburn.png"
    }, // 속쓰림
    // [3] - STOMACHACHE
    STOMACHACHE: "STOMACHACHE",
    STOMACHACHE_IMG: PATH_IMG_SYMPTOMS + "/symptoms_stomachache.png",
    stomachache_diarrhead: {
        value: "stomachache_diarrhead",
        imgPath: PATH_IMG_DETAILS + "/stomachache/stomachache_diarrhea.png"
    }, // 설사
    stomachache_periodCramps: {
        value: "stomachache_periodCramps",
        imgPath: PATH_IMG_DETAILS + "/stomachache/stomachache_periodpain.png"
    }, // 생리통
    stomachache_indigestion: {
        value: "stomachache_indigestion",
        imgPath: PATH_IMG_DETAILS + "/stomachache/stomachache_indigestion.png"
    }, // 소화불량
    stomachache_constipation: {
        value: "stomachache_constipation",
        imgPath: PATH_IMG_DETAILS + "/stomachache/stomachache_constipation.png"
    }, // 변비
    stomachache_nausea: {
        value: "stomachache_nausea",
        imgPath: PATH_IMG_DETAILS + "/stomachache/stomachache_nausea.png"
    }, // 메스꺼움
    stomachache_heartburn: {
        value: "stomachache_heartburn",
        imgPath: PATH_IMG_DETAILS + "/stomachache/stomachache_heartburn.png"
    }, // 속쓰림
    // [4] - Skin
    SKIN: "SKIN",
    SKIN_IMG: PATH_IMG_SYMPTOMS + "/symptoms_skin.png",
    skin_abrasion: {
        value: "skin_abrasion",
        imgPath: PATH_IMG_DETAILS + "/skin/skin_abrasion.png"
    },  // 철과상
    skin_acne: {
        value: "skin_acne",
        imgPath: PATH_IMG_DETAILS + "/skin/skin_acne.png"
    },  // 여드름
    skin_rash: {
        value: "skin_rash",
        imgPath: PATH_IMG_DETAILS + "/skin/skin_hives.png"
    },  // 두드러기
    skin_eczema: {
        value: "skin_eczema",
        imgPath: PATH_IMG_DETAILS + "/skin/skin_eczema.png"
    },  // 습진
    skin_blister: {
        value: 'skin_blister',
        imgPath: PATH_IMG_DETAILS + "/skin/skin_blister.png"
    },  // 수포
    skin_athletesfoot: {
        value: "skin_athletesfoot",
        imgPath: PATH_IMG_DETAILS + "/skin/skin_athletes_foot.png"
    },  // 무좀
    // [5] - Female
    FEMALE: "FEMALE",
    FEMALE_IMG: PATH_IMG_SYMPTOMS + "/symptoms_female.png",
    female_periodCramp: {
        value: "female_periodCramp",
        imgPath: PATH_IMG_DETAILS + "/female/female_period_pain.png"
    }, // 생리통
    female_pregnancyTest: {
        value: "female_pregnancyTest",
        imgPath: PATH_IMG_DETAILS + "/female/female_pregnant_test.png"
    }, // 임신테스트
    female_oralBirthControl: {
        value: "female_oralBirthControl",
        imgPath: PATH_IMG_DETAILS + "/female/female_oral_birth_control.png"
    }, // 경구피임약
    female_postCoitalBirthControl: {
        value: "female_postCoitalBirthControl",
        imgPath: PATH_IMG_DETAILS + "/female/female_post_coital_birthday_control.png"
    }, // 사후피임약

    // [6] - Other
    OTHER: "OTHER",
    OTHER_IMG: PATH_IMG_SYMPTOMS + "/symptoms_other.png",
    other_bandAid: {
        value: "other_bandAid",
        imgPath: PATH_IMG_DETAILS + "/other/other_bandaid.png"
    }, // 반창고
    other_bandage: {
        value: "other_bandage",
        imgPath: PATH_IMG_DETAILS + "/other/other_bandage.png"
    }, // 붕대
    other_disinfectant: {
        value: "other_disinfectant",
        imgPath: PATH_IMG_DETAILS + "/other/other_disinfectant.png"
    }, // 소독약
    other_salineSolution: {
        value: "other_salineSolution",
        imgPath: PATH_IMG_DETAILS + "/other/other_saline_solution.png"
    }, // 식염수
    other_artificialTears: {
        value: "other_artificialTears",
        imgPath: PATH_IMG_DETAILS + "/other/other_artificial_tears.png"
    }, // 인공눈물
    other_mensoredamCream: {
        value: "other_mensoredamCream",
        imgPath: PATH_IMG_DETAILS + "/other/other_mensoredam_cream.png"
    }, // 멘소레담 크림형
    other_mensoredamSpray: {
        value: "other_mensoredamSpray",
        imgPath: PATH_IMG_DETAILS + "/other/other_mensoredam_spray.png"
    }, // 멘소레담 스프레이형
    other_painKillingPatch: {
        value: "other_painKillingPatch",
        imgPath: PATH_IMG_DETAILS + "/other/other_pain_killing_patch.png"
    }, // 파스
    other_painKillingPatchWater: {
        value: "other_painKillingPatchWater",
        imgPath: PATH_IMG_DETAILS + "/other/other_pain_killing_patch_water.png"
    }, // 물파스
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
