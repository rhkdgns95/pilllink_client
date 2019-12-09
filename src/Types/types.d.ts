interface ITheme {
    bgColor: string;
    redColor: string;
    blueColor: string;
    greenColor: string;
    goldColor: string;
    grayColor: string;
}

interface IUseInputText {
    value: string;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>
}
interface IUseSelect {
    value: string;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
}
interface IUseSelectNationality {
    value: TNationality;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
}
interface IUseRadio {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}
interface IUseInputEdit {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onInit: (value: string) => any;
}
interface IUseSelectEdit {
    value: string;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
    onInit: (value: string) => any;
}
// User Data.
type TGender = "M" | "W";
type TNationality = "KO" | "EN" | "CH" | "US";
type TLanguage = "KO" | "EN" | "CH" | "US";
type TStatus = "COLD" | "COLIC" | "FEMALE" | "HANGOVER" | "HEADACHE" | "OTHER" | "SKIN" | "TOOTHACHE";
type TPregnant = "NULL" | "PREGNANT_TRUE";
type TAllergy = "NULL" | "ALLERGY_ANTIBIOTIC" | "ALLERGY_LACTOSE" | "ALLERGY_PAINKILLER";
type TChronicDiseases =  "NULL" | "CHRONIC_KIDNEY" | "CHRONIC_LIVER";

// Form Data - SignUp.
interface ISignUpFormData {
    firstName: string,
    lastName: string,
    gender: Gender,
    age: number,
    nationality: Nationality,
    isAbroad: boolean,
    email: string,
    password: string,
    address: string
}
// Form Data - Create Medical Record.
interface IMedicalRecord {
    status: TStatus; // symptoms
    allergy: TAllergy;
    pregnant: TPregnant;
    chronicDiseases: TChronicDiseases;
    cold_cough?: boolean | null;
    cold_headache?: boolean | null;
    cold_snot: boolean;
    cold_throat?: boolean | null;
    cold_fever?: boolean | null;
    cold_muscle?: boolean | null;
    colic_diarrhead?: boolean | null;
    colic_periodCramps?: boolean | null;
    colic_indigestion?: boolean | null;
    colic_constipation?: boolean | null;
    colic_sickness?: boolean | null;
    colic_heartburn?: boolean | null;
    female_tmp?: boolean | null;
    hangover_headache?: boolean | null;
    hangover_diarrhea?: boolean | null;
    hangover_throwup?: boolean | null;
    hangover_sickness?: boolean | null;
    hangover_heartburn?: boolean | null;
    headache_headache?: boolean | null;
    headache_migraine?: boolean | null;
    skin_abrasion?: boolean | null;
    skin_acne?: boolean | null;
    skin_hives?: boolean | null;
    skin_eczema?: boolean | null;
    skin_blister?: boolean | null;
    skin_athletesfoot?: boolean | null;
    other_tmp?: boolean | null;
    toothache_needle?: boolean | null;
    toothache_stomatitis?: boolean | null;
    toothache_drylips?: boolean | null;
    toothache_badbreath?: boolean | null;
    toothache_gum?: boolean | null;
    toothache_drymouth?: boolean | null;
}
// Form Data - Update My Profile
interface IUpdateFormData {
    firstName: string;
    lastName: string;
    gender: TGender;
    age: number;
    nationality?: string;
    isAbroad: boolean;
    address: string;
}
interface IMessage {
    ok: boolean;
    data: string;
    onChangeMessage: ({ok: boolean, data: string}) => any;
}

// Translator Symptoms
type TCommonText = {
    value: string;
    imgPath: string;
}
interface ICommonSymptomsText {
    COLD: string;
    COLD_IMG: string;
    COLIC: string;
    COLIC_IMG: string;
    FEMALE: string;
    FEMALE_IMG: string;
    HANGOVER: string;
    HANGOVER_IMG: string;
    HEADACHE: string;
    HEADACHE_IMG: string;
    OTHER: string;
    OTHER_IMG: string;
    SKIN: string;
    SKIN_IMG: string;
    TOOTHACHE: string;
    TOOTHACHE_IMG: string;
    // COLD
    cold_cough: TCommonText;
    cold_headache: TCommonText;
    cold_snot: TCommonText;
    cold_throat: TCommonText;
    cold_fever: TCommonText;
    cold_muscle: TCommonText;
    // COLIC
    colic_diarrhead: TCommonText;
    colic_periodCramps: TCommonText;
    colic_indigestion: TCommonText;
    colic_constipation: TCommonText;
    colic_sickness: TCommonText;
    colic_heartburn: TCommonText;
    // FEMALE
    female_tmp: TCommonText;
    // HANGOVER
    hangover_headache: TCommonText;
    hangover_diarrhea: TCommonText;
    hangover_throwup: TCommonText;
    hangover_sickness: TCommonText;
    hangover_heartburn: TCommonText;
    // HEADACHE
    headache_headache: TCommonText;
    headache_migraine: TCommonText;
    // SKIN
    skin_abrasion: TCommonText;
    skin_acne: TCommonText;
    skin_hives: TCommonText;
    skin_eczema: TCommonText;
    skin_blister: TCommonText;
    skin_athletesfoot: TCommonText;
    // OTHER
    other_tmp: TCommonText;
    // TOOTHACHE
    toothache_needle: TCommonText;
    toothache_stomatitis: TCommonText;
    toothache_drylips: TCommonText;
    toothache_badbreath: TCommonText;
    toothache_gum: TCommonText;
    toothache_drymouth: TCommonText;
}
interface ISymptomInputData {
    name: string;
    value: string;
}
interface ISelectors {
    name: string;
    details: Array<ISymptomInputData>;
}
interface ISymptom extends ISymptomInputData{
    imgPath: string;
    details: Array<ISymptomInputData>
}
interface ICountry extends ISymptomInputData {
    imgPath: string;
    selectors: Array<>
    symptoms: Array<ISymptom>;
}
