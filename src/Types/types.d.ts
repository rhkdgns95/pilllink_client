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
    onInit?: () => any;
}
interface IUseSelectNationality {
    value: TNationality;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
}
interface IUseRadio {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onInit?: () => any;
    onToggleTranslate?: () => any;
}
interface IUseCheckbox {
    details: Array<ISymptomDetails>;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onInit: (initSymptomDetails: Array<ISymptomDetails>) => any;
}
interface IUseCheckboxArray {
    value: Array<string>;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onInit?: () => any;
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
interface IUseTab {
    no: number;
    text: string;
}
interface IUseTextare {
    value: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

interface IUsePagination {
    cursor: number;
    screen: number;
    totalCount: number;
    hasFirst: boolean;
    hasLast: boolean;
    hasPrev: boolean;
    hasNext: boolean;
    onChangeCursor: (cursor: number) => any;
    onClickDBArrow: (newScreen: number)  => any;
    onClickArrow: (newScreen: number) => any;
    onhandleUsingArrow: () => any;
}
interface IUseFeedback {
    recordPerOneTime: IUseRadio; // 약 갯수
    recordAmount: IUseRadio; // 복용일
    recordTime: IUseCheckboxArray; // 복약횟수
    recordWay: IUseRadio; // 복용방법
    recordCaution: IUseCheckboxArray; // 주의사항
}

// User Data.
type TGender = "M" | "W";
type TNationality = "JA" | "FR" | "ES" | "RU" | "MO" | "VI" | "TH" | "KO" | "EN" | "CH" | "US" | "CA" | "ME" | "TA" | "HO";
type TLanguage = "JA" | "FR" | "ES" | "RU" | "MO" | "VI" | "TH" | "KO" | "EN" | "CH" | "US" | "CA" | "ME" | "TA" | "HO";
type TStatus = "COLD" | "HANGOVER" | "STOMACHACHE" | "SKIN" | "FEMALE" | "OTHER";
type TPregnant = "NULL" | "PREGNANT_TRUE";
type TAllergy = "NULL" | "ALLERGY_ANTIBIOTIC" | "ALLERGY_LACTOSE" | "ALLERGY_PAINKILLER";
type TChronicDiseases =  "NULL" | "CHRONIC_KIDNEY" | "CHRONIC_LIVER";

// Form Data - SignUp.
interface ISignUpFormData {
    userId: string;
    firstName: string,
    lastName: string,
    gender: Gender,
    age: number,
    nationality: Nationality,
    isAbroad: boolean,
    abroadAddress: string | null,
    addressList: TAddressVal | null,
    addressItem: string | null,
    email: string,
    password: string,
}
// Form Data - Create Medical Record.
interface IMedicalRecord {
    status: TStatus; // symptoms
    allergy: TAllergy;
    pregnant: TPregnant;
    chronicDiseases: TChronicDiseases;
    cold_cough?: boolean | null;
    cold_headache?: boolean | null;
    cold_runnyNose?: boolean | null;
    cold_soreThroat?: boolean | null;
    cold_fever?: boolean | null;
    cold_bodyache?: boolean | null;
    hangover_headache?: boolean | null;
    hangover_diarrhea?: boolean | null;
    hangover_vomit?: boolean | null;
    hangover_nausea?: boolean | null;
    hangover_heartburn?: boolean | null;
    stomachache_diarrhead?: boolean | null;
    stomachache_periodCramps?: boolean | null;
    stomachache_indigestion?: boolean | null;
    stomachache_constipation?: boolean | null;
    stomachache_nausea?: boolean | null;
    stomachache_heartburn?: boolean | null;
    skin_abrasion?: boolean | null;
    skin_acne?: boolean | null;
    skin_rash?: boolean | null;
    skin_eczema?: boolean | null;
    skin_blister?: boolean | null;
    skin_athletesfoot?: boolean | null;
    female_periodCramp?: boolean | null;
    female_pregnancyTest?: boolean | null;
    female_oralBirthControl?: boolean | null;
    female_postCoitalBirthControl?: boolean | null;
    other_tmp?: boolean | null;
}
// Form Data - Update My Profile
interface IUpdateFormData {
    email: string;
    firstName: string;
    lastName: string;
    gender: TGender;
    age: number;
    nationality?: string;
    isAbroad: boolean;
    abroadAddress: string | null;
    addressList: TAddressVal | null;
    addressItem: string | null;
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
    HANGOVER: string;
    HANGOVER_IMG: string;
    STOMACHACHE: string;
    STOMACHACHE_IMG: string;
    SKIN: string;
    SKIN_IMG: string;
    FEMALE: string;
    FEMALE_IMG: string;
    OTHER: string;
    OTHER_IMG: string;
    // COLD
    cold_cough: TCommonText;
    cold_headache: TCommonText;
    cold_runnyNose: TCommonText;
    cold_soreThroat: TCommonText;
    cold_fever: TCommonText;
    cold_bodyache: TCommonText;
    // HANGOVER
    hangover_headache: TCommonText;
    hangover_diarrhea: TCommonText;
    hangover_vomit: TCommonText;
    hangover_nausea: TCommonText;
    hangover_heartburn: TCommonText;
    // Stomachache
    stomachache_diarrhead: TCommonText;
    stomachache_periodCramps: TCommonText;
    stomachache_indigestion: TCommonText;
    stomachache_constipation: TCommonText;
    stomachache_nausea: TCommonText;
    stomachache_heartburn: TCommonText;
    // SKIN
    skin_abrasion: TCommonText;
    skin_acne: TCommonText;
    skin_rash: TCommonText;
    skin_eczema: TCommonText;
    skin_blister: TCommonText;
    skin_athletesfoot: TCommonText;
    // FEMALE
    female_periodCramp: TCommonText;
    female_pregnancyTest: TCommonText;
    female_oralBirthControl: TCommonText;
    female_postCoitalBirthControl: TCommonText;
    // OTHER
    // other_tmp: TCommonText;
    other_bandAid: TCommonText;
    other_bandage: TCommonText;
    other_disinfectant: TCommonText;
    other_salineSolution: TCommonText;
    other_artificialTears: TCommonText;
}
interface ISymptomInputData {
    name: string;
    value: string;
    imgPath: string;
}
interface ISelectors {
    name: string;
    details: Array<ISymptomInputData>;
}
interface ISymptomPath {
    imgPath: string;
}
interface ISymptom extends ISymptomInputData{
    imgPath: string;
    details: Array<ISymptomInputData>;
}
interface IConfirmProps {
    name: string;
    value: string;
}
interface IConfirmData extends IConfirmProps {
    details: Array<IConfirmProps>
};
interface ICountry extends ISymptomInputData {
    imgPath: string;
    selectors: Array<>;
    symptoms: Array<ISymptom>;
    confirms: Array<IConfirmData>;
    contents: Array<string>;
    boardSelectors: Array<IConfirmProps>;
}

interface ISymptomDetails {
    value: string;
    checked: boolean;
}

type TAddressVal = "SEOUL" | "BUSAN" | "DAEGU" | "INCHEON" | "GWANGJU" | "DAEJEON" | "ULSAN" | "SEJONG" | "GYEONGGI" | "GANGWON" | "CHUNGBUK" | "CHUNGNAM" | "JEONBUK" | "JEONNAM" | "GYEONGBUK" | "GYEONGNAM" | "JEJU"; 

interface IAddressDetails {
    name: string,
    en_name: string,
    value: string, // 문자열에 숫자가 들어감.
}
interface IAddress {
    name: string,
    en_name: string,
    value: TAddressVal,
    details: Array<IAddressDetails>
}
interface IDimensions {
    width: number;
    height: number;
    marginLeft: number;
    paddingTop: number;
    color: string;
}
interface IUseChart {

}
interface IChartProps {
    name: string;
    units: number;
    color: string;
}
interface IChart {
    data: Array<IChartProps>;
    format: string;
    // data: Array<IChartProps>
}
interface IGenderChartProps {
    men_name: string;
    men_units: number;
    men_color: string;
    women_name: string;
    women_units: number;
    women_color: string;
}
interface IGenderChart {
    data: Array<IGenderChartProps>;
    format: string;
}
// interface IUseChart {
//     ref: React.RefObject<SVGSVGElement | null>;
//     dimensions: IDimensions;
// }
