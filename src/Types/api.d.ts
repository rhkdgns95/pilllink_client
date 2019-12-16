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
  address: string;
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

export interface updateMyProfile_UpdateMyProfile {
  __typename: "UpdateMyProfileResponse";
  ok: boolean;
  error: string | null;
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
  address: string;
  isAbroad: boolean;
  nationality?: Nationality | null;
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
  cold_snot: boolean | null;
  cold_throat: boolean | null;
  cold_fever: boolean | null;
  cold_muscle: boolean | null;
  /**
   * Colic - 복통
   */
  colic_diarrhead: boolean | null;
  colic_periodCramps: boolean | null;
  colic_indigestion: boolean | null;
  colic_constipation: boolean | null;
  colic_sickness: boolean | null;
  colic_heartburn: boolean | null;
  /**
   * Female - 여성질환
   */
  female_tmp: boolean | null;
  /**
   * Hangover - 숙취
   */
  hangover_headache: boolean | null;
  hangover_diarrhea: boolean | null;
  hangover_throwup: boolean | null;
  hangover_sickness: boolean | null;
  hangover_heartburn: boolean | null;
  /**
   * Headache - 두통
   */
  headache_headache: boolean | null;
  headache_migraine: boolean | null;
  /**
   * Skin - 피부질환
   */
  skin_abrasion: boolean | null;
  skin_acne: boolean | null;
  skin_hives: boolean | null;
  skin_eczema: boolean | null;
  skin_blister: boolean | null;
  skin_athletesfoot: boolean | null;
  /**
   * Other - 기타
   */
  other_tmp: boolean | null;
  /**
   * Toothache - 구강질환
   */
  toothache_needle: boolean | null;
  toothache_stomatitis: boolean | null;
  toothache_drylips: boolean | null;
  toothache_badbreath: boolean | null;
  toothache_gum: boolean | null;
  toothache_drymouth: boolean | null;
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
  cold_snot?: boolean | null;
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
  email: string;
  password: string;
  address: string;
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
  address: string;
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
  cold_snot: boolean | null;
  cold_throat: boolean | null;
  cold_fever: boolean | null;
  cold_muscle: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ItemColic
// ====================================================

export interface ItemColic {
  __typename: "MedicalRecord";
  /**
   * Colic - 복통
   */
  colic_diarrhead: boolean | null;
  colic_periodCramps: boolean | null;
  colic_indigestion: boolean | null;
  colic_constipation: boolean | null;
  colic_sickness: boolean | null;
  colic_heartburn: boolean | null;
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
  female_tmp: boolean | null;
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
  hangover_throwup: boolean | null;
  hangover_sickness: boolean | null;
  hangover_heartburn: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ItemHeadache
// ====================================================

export interface ItemHeadache {
  __typename: "MedicalRecord";
  /**
   * Headache - 두통
   */
  headache_headache: boolean | null;
  headache_migraine: boolean | null;
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
  skin_hives: boolean | null;
  skin_eczema: boolean | null;
  skin_blister: boolean | null;
  skin_athletesfoot: boolean | null;
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
   * Other - 기타
   */
  other_tmp: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ItemToothache
// ====================================================

export interface ItemToothache {
  __typename: "MedicalRecord";
  /**
   * Toothache - 구강질환
   */
  toothache_needle: boolean | null;
  toothache_stomatitis: boolean | null;
  toothache_drylips: boolean | null;
  toothache_badbreath: boolean | null;
  toothache_gum: boolean | null;
  toothache_drymouth: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

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
  CH = "CH",
  EN = "EN",
  KO = "KO",
  US = "US",
}

export enum Nationality {
  CH = "CH",
  EN = "EN",
  KO = "KO",
  US = "US",
}

export enum Pregnant {
  NULL = "NULL",
  PREGNANT_TRUE = "PREGNANT_TRUE",
}

export enum Status {
  COLD = "COLD",
  COLIC = "COLIC",
  FEMALE = "FEMALE",
  HANGOVER = "HANGOVER",
  HEADACHE = "HEADACHE",
  OTHER = "OTHER",
  SKIN = "SKIN",
  TOOTHACHE = "TOOTHACHE",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
