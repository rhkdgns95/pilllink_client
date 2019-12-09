import { TranslatedKorean } from "./translated/translatedKorean";
import { TranslatedEnglish } from "./translated/translatedEnglish";

const countries: Array<ICountry> = [
    // country - 1
    { ...TranslatedKorean },
    { ...TranslatedEnglish }
];
export default countries;