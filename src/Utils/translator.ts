import { TranslatedKorean } from "./translated/translatedKorean";
import { TranslatedEnglish } from "./translated/translatedEnglish";
import { TranslatedChina } from "./translated/translatedChina";
import { TranslatedFrance } from "./translated/translatedFrance";
import { TranslatedSpain } from "./translated/translatedSpain";
// import { TranslatedItaly } from "./translated/translatedItaly";
import { TranslatedVietnam } from "./translated/translatedVietnam";
// import { TranslatedPortugal } from "./translated/translatedPortugal";
import { TranslatedJapan } from "./translated/translatedJapan";
import { TranslatedRussia } from "./translated/translatedRussia";
import { TranslatedMongol } from "./translated/translatedMongol";
import { TranslatedThai } from "./translated/translatedThai";

const countries: Array<ICountry> = [
    // country - 1
    { ...TranslatedKorean },
    { ...TranslatedEnglish },
    { ...TranslatedChina },
    { ...TranslatedJapan },
    { ...TranslatedFrance },
    { ...TranslatedSpain },
    
    { ...TranslatedRussia },
    { ...TranslatedMongol },
    { ...TranslatedVietnam },
    { ...TranslatedThai }

    // 이탈리아, 포르투갈 생략.
    // { ...TranslatedItaly },
    // { ...TranslatedPortugal }
];
export default countries;