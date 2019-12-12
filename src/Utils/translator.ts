import { TranslatedKorean } from "./translated/translatedKorean";
import { TranslatedEnglish } from "./translated/translatedEnglish";
import { TranslatedChina } from "./translated/translatedChina";
import { TranslatedFrance } from "./translated/translatedFrance";
import { TranslatedSpain } from "./translated/translatedSpain";
import { TranslatedItaly } from "./translated/translatedItaly";
import { TranslatedVietnam } from "./translated/translatedVietnam";
import { TranslatedPortugal } from "./translated/translatedPortugal";

const countries: Array<ICountry> = [
    // country - 1
    { ...TranslatedKorean },
    { ...TranslatedEnglish },
    { ...TranslatedChina },
    { ...TranslatedFrance },
    { ...TranslatedSpain },
    { ...TranslatedItaly },
    { ...TranslatedVietnam },
    { ...TranslatedPortugal }
];
export default countries;