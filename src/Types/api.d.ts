/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMyProfile
// ====================================================

export interface getMyProfile_GetMyProfile_user {
  __typename: "User";
  id: number;
  fullName: string | null;
  firstName: string;
  lastName: string;
  email: string;
  nationality: Nationality;
  gender: Gender;
  age: number;
  isAbroad: boolean;
  abroadAddress: string | null;
  addressList: Address | null;
  addressItem: string | null;
  medicalRecordsCount: number | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface getMyProfile_GetMyProfile {
  __typename: "GetMyProfileResponse";
  ok: boolean;
  error: string | null;
  user: getMyProfile_GetMyProfile_user | null;
}

export interface getMyProfile {
  GetMyProfile: getMyProfile_GetMyProfile;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateMyProfile
// ====================================================

export interface updateMyProfile_UpdateMyProfile_user {
  __typename: "User";
  id: number;
  fullName: string | null;
  firstName: string;
  lastName: string;
  email: string;
  nationality: Nationality;
  gender: Gender;
  age: number;
  isAbroad: boolean;
  abroadAddress: string | null;
  addressList: Address | null;
  addressItem: string | null;
  medicalRecordsCount: number | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface updateMyProfile_UpdateMyProfile {
  __typename: "UpdateMyProfileResponse";
  ok: boolean;
  error: string | null;
  user: updateMyProfile_UpdateMyProfile_user | null;
}

export interface updateMyProfile {
  UpdateMyProfile: updateMyProfile_UpdateMyProfile;
}

export interface updateMyProfileVariables {
  firstName: string;
  lastName: string;
  age: number;
  password?: string | null;
  gender: Gender;
  isAbroad: boolean;
  abroadAddress?: string | null;
  addressList?: Address | null;
  addressItem?: string | null;
  nationality?: Nationality | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createConfirm
// ====================================================

export interface createConfirm_CreateConfirm {
  __typename: "CreateConfirmResponse";
  ok: boolean;
  error: string | null;
  confirmRecordId: number | null;
}

export interface createConfirm {
  CreateConfirm: createConfirm_CreateConfirm;
}

export interface createConfirmVariables {
  medicalRecordId: number;
  res_amount: RES_AMOUNT;
  res_way: RES_WAY;
  TO_MORNING?: boolean | null;
  TO_LUNCH?: boolean | null;
  TO_DINNER?: boolean | null;
  TO_SLEEP?: boolean | null;
  CAUTION_SLEEP?: boolean | null;
  CAUTION_STOMACAHCHE?: boolean | null;
  CAUTION_RASH?: boolean | null;
  CAUTION_DIZZY?: boolean | null;
  CAUTION_DIARRHEA?: boolean | null;
  CAUTION_BLOODPRESSURE?: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMyMedicalRecords
// ====================================================

export interface getMyMedicalRecords_GetMyMedicalRecords_medicalRecords_confirm {
  __typename: "ConfirmRecord";
  id: number;
  createdAt: string;
}

export interface getMyMedicalRecords_GetMyMedicalRecords_medicalRecords {
  __typename: "MedicalRecord";
  id: number;
  lang: Language;
  status: Status;
  allergy: Allergy;
  pregnant: Pregnant;
  chronicDiseases: ChronicDiseases;
  confirmId: number | null;
  createdAt: string;
  updatedAt: string | null;
  /**
   * Cold - 감기
   */
  cold_cough: boolean | null;
  cold_headache: boolean | null;
  cold_runnyNose: boolean | null;
  cold_soreThroat: boolean | null;
  cold_fever: boolean | null;
  cold_bodyache: boolean | null;
  /**
   * Hangover - 숙취
   */
  hangover_headache: boolean | null;
  hangover_diarrhea: boolean | null;
  hangover_vomit: boolean | null;
  hangover_nausea: boolean | null;
  hangover_heartburn: boolean | null;
  /**
   * Stomachache - 복통
   */
  stomachache_diarrhead: boolean | null;
  stomachache_periodCramps: boolean | null;
  stomachache_indigestion: boolean | null;
  stomachache_constipation: boolean | null;
  stomachache_nausea: boolean | null;
  stomachache_heartburn: boolean | null;
  /**
   * Skin - 피부질환
   */
  skin_abrasion: boolean | null;
  skin_acne: boolean | null;
  skin_rash: boolean | null;
  skin_eczema: boolean | null;
  skin_blister: boolean | null;
  skin_athletesfoot: boolean | null;
  /**
   * Female - 여성질환
   */
  female_periodCramp: boolean | null;
  female_pregnancyTest: boolean | null;
  female_oralBirthControl: boolean | null;
  female_postCoitalBirthControl: boolean | null;
  /**
   * Other - 응급처치
   */
  other_bandAid: boolean | null;
  other_bandage: boolean | null;
  other_disinfectant: boolean | null;
  other_salineSolution: boolean | null;
  other_artificialTears: boolean | null;
  confirm: getMyMedicalRecords_GetMyMedicalRecords_medicalRecords_confirm | null;
}

export interface getMyMedicalRecords_GetMyMedicalRecords {
  __typename: "GetMyMedicalRecordsResponse";
  ok: boolean;
  error: string | null;
  totalCount: number | null;
  medicalRecords: (getMyMedicalRecords_GetMyMedicalRecords_medicalRecords | null)[] | null;
}

export interface getMyMedicalRecords {
  GetMyMedicalRecords: getMyMedicalRecords_GetMyMedicalRecords;
}

export interface getMyMedicalRecordsVariables {
  first?: number | null;
  offset?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createMedicalRecord
// ====================================================

export interface createMedicalRecord_CreateMedicalRecord {
  __typename: "CreateMedicalRecordResponse";
  ok: boolean | null;
  error: string | null;
  medicalRecordId: number | null;
  lang: Language | null;
}

export interface createMedicalRecord {
  CreateMedicalRecord: createMedicalRecord_CreateMedicalRecord;
}

export interface createMedicalRecordVariables {
  lang: Language;
  status: Status;
  allergy: Allergy;
  pregnant: Pregnant;
  chronicDiseases: ChronicDiseases;
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
  other_bandAid?: boolean | null;
  other_bandage?: boolean | null;
  other_disinfectant?: boolean | null;
  other_salineSolution?: boolean | null;
  other_artificialTears?: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: emailSignIn
// ====================================================

export interface emailSignIn_EmailSignIn {
  __typename: "EmailSignInResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface emailSignIn {
  EmailSignIn: emailSignIn_EmailSignIn;
}

export interface emailSignInVariables {
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: emailSignUp
// ====================================================

export interface emailSignUp_EmailSignUp {
  __typename: "EmailSignUpResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface emailSignUp {
  EmailSignUp: emailSignUp_EmailSignUp;
}

export interface emailSignUpVariables {
  firstName: string;
  lastName: string;
  gender: Gender;
  age: number;
  nationality: Nationality;
  isAbroad: boolean;
  abroadAddress?: string | null;
  addressList?: Address | null;
  addressItem?: string | null;
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ItemUser
// ====================================================

export interface ItemUser {
  __typename: "User";
  id: number;
  fullName: string | null;
  firstName: string;
  lastName: string;
  email: string;
  nationality: Nationality;
  gender: Gender;
  age: number;
  isAbroad: boolean;
  abroadAddress: string | null;
  addressList: Address | null;
  addressItem: string | null;
  medicalRecordsCount: number | null;
  createdAt: string;
  updatedAt: string | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ItemMedicalRecord
// ====================================================

export interface ItemMedicalRecord {
  __typename: "MedicalRecord";
  id: number;
  lang: Language;
  status: Status;
  allergy: Allergy;
  pregnant: Pregnant;
  chronicDiseases: ChronicDiseases;
  confirmId: number | null;
  createdAt: string;
  updatedAt: string | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ItemConfirm
// ====================================================

export interface ItemConfirm {
  __typename: "ConfirmRecord";
  id: number;
  createdAt: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ItemCold
// ====================================================

export interface ItemCold {
  __typename: "MedicalRecord";
  /**
   * Cold - 감기
   */
  cold_cough: boolean | null;
  cold_headache: boolean | null;
  cold_runnyNose: boolean | null;
  cold_soreThroat: boolean | null;
  cold_fever: boolean | null;
  cold_bodyache: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ItemHangover
// ====================================================

export interface ItemHangover {
  __typename: "MedicalRecord";
  /**
   * Hangover - 숙취
   */
  hangover_headache: boolean | null;
  hangover_diarrhea: boolean | null;
  hangover_vomit: boolean | null;
  hangover_nausea: boolean | null;
  hangover_heartburn: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ItemStomachache
// ====================================================

export interface ItemStomachache {
  __typename: "MedicalRecord";
  /**
   * Stomachache - 복통
   */
  stomachache_diarrhead: boolean | null;
  stomachache_periodCramps: boolean | null;
  stomachache_indigestion: boolean | null;
  stomachache_constipation: boolean | null;
  stomachache_nausea: boolean | null;
  stomachache_heartburn: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ItemSkin
// ====================================================

export interface ItemSkin {
  __typename: "MedicalRecord";
  /**
   * Skin - 피부질환
   */
  skin_abrasion: boolean | null;
  skin_acne: boolean | null;
  skin_rash: boolean | null;
  skin_eczema: boolean | null;
  skin_blister: boolean | null;
  skin_athletesfoot: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ItemFemale
// ====================================================

export interface ItemFemale {
  __typename: "MedicalRecord";
  /**
   * Female - 여성질환
   */
  female_periodCramp: boolean | null;
  female_pregnancyTest: boolean | null;
  female_oralBirthControl: boolean | null;
  female_postCoitalBirthControl: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ItemOther
// ====================================================

export interface ItemOther {
  __typename: "MedicalRecord";
  /**
   * Other - 응급처치
   */
  other_bandAid: boolean | null;
  other_bandage: boolean | null;
  other_disinfectant: boolean | null;
  other_salineSolution: boolean | null;
  other_artificialTears: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Address {
  BUSAN = "BUSAN",
  CHUNGBUK = "CHUNGBUK",
  CHUNGNAM = "CHUNGNAM",
  DAEGU = "DAEGU",
  DAEJEON = "DAEJEON",
  GANGWON = "GANGWON",
  GWANGJU = "GWANGJU",
  GYEONGBUK = "GYEONGBUK",
  GYEONGGI = "GYEONGGI",
  GYEONGNAM = "GYEONGNAM",
  INCHEON = "INCHEON",
  JEJU = "JEJU",
  JEONBUK = "JEONBUK",
  JEONNAM = "JEONNAM",
  SEJONG = "SEJONG",
  SEOUL = "SEOUL",
  ULSAN = "ULSAN",
}

export enum Allergy {
  ALLERGY_ANTIBIOTIC = "ALLERGY_ANTIBIOTIC",
  ALLERGY_LACTOSE = "ALLERGY_LACTOSE",
  ALLERGY_PAINKILLER = "ALLERGY_PAINKILLER",
  NULL = "NULL",
}

export enum ChronicDiseases {
  CHRONIC_KIDNEY = "CHRONIC_KIDNEY",
  CHRONIC_LIVER = "CHRONIC_LIVER",
  NULL = "NULL",
}

export enum Gender {
  M = "M",
  W = "W",
}

export enum Language {
  CA = "CA",
  CH = "CH",
  EN = "EN",
  ES = "ES",
  FR = "FR",
  HO = "HO",
  JA = "JA",
  KO = "KO",
  ME = "ME",
  MO = "MO",
  RU = "RU",
  TA = "TA",
  TH = "TH",
  US = "US",
  VI = "VI",
}

export enum Nationality {
  CA = "CA",
  CH = "CH",
  EN = "EN",
  ES = "ES",
  FR = "FR",
  HO = "HO",
  JA = "JA",
  KO = "KO",
  ME = "ME",
  MO = "MO",
  RU = "RU",
  TA = "TA",
  TH = "TH",
  US = "US",
  VI = "VI",
}

export enum Pregnant {
  NULL = "NULL",
  PREGNANT_TRUE = "PREGNANT_TRUE",
}

export enum RES_AMOUNT {
  D3 = "D3",
  D5 = "D5",
  D7 = "D7",
}

export enum RES_WAY {
  AFTER_EAT = "AFTER_EAT",
  AGO_EAT = "AGO_EAT",
  NO_EAT = "NO_EAT",
}

export enum Status {
  COLD = "COLD",
  FEMALE = "FEMALE",
  HANGOVER = "HANGOVER",
  OTHER = "OTHER",
  SKIN = "SKIN",
  STOMACHACHE = "STOMACHACHE",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
