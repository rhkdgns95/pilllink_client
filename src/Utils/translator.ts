import { TranslatedKorean } from "./translated/translatedKorean";
import { TranslatedEngland } from "./translated/translatedEngland";
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
import { TranslatedUSA } from "./translated/translatedUSA";
import { TranslatedCanada } from "./translated/translatedCanada";
import { TranslatedMexico } from "./translated/translatedMexico";
import { TranslatedTaiwan } from "./translated/translatedTaiwan";
import { TranslatedHongkong } from "./translated/translatedHongkong";

const countries: Array<ICountry> = [
    // country - 1
    { ...TranslatedKorean },
    // 미국 예정. (v)
    { ...TranslatedUSA },
    { ...TranslatedChina },
    { ...TranslatedJapan },
    // 캐나다 예정. (v)
    { ...TranslatedCanada },
    { ...TranslatedEngland },
    { ...TranslatedFrance },
    { ...TranslatedSpain },
    // 멕시코 예정 (v)
    { ...TranslatedMexico },
    // 대만 예정 (v)
    { ...TranslatedTaiwan },
    // 홍콩 예정 (v)
    { ...TranslatedHongkong },
    { ...TranslatedRussia },
    { ...TranslatedThai },
    { ...TranslatedVietnam },
    { ...TranslatedMongol },

    // 이탈리아, 포르투갈 생략.
    // { ...TranslatedItaly },
    // { ...TranslatedPortugal }
];
export default countries;