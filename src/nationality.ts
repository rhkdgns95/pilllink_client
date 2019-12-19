import { PATH_IMG_NA } from "./Routes/App/AppProvider";

type TCode = "KO" | "EN" | "CH" | "JA" | "FR" | "ES" | "RU" | "MO" | "VI"| "TH";
export interface INationality {
    code: TCode;
    name: string;
    flag: string;
}

export const Nationality:Array<INationality> = [
    {
        code: "KO",
        name: "Korea",
        flag: PATH_IMG_NA + "/na_ko.svg",
    },
    {
        code: "EN",
        name: "England",
        flag: PATH_IMG_NA + "/na_en.svg"
    },
    {
        code: "CH",
        name: "China",
        flag: PATH_IMG_NA + "/na_ch.svg"
    },
    {
        code: "JA",
        name: "Japan",
        flag: PATH_IMG_NA + "/na_ja.svg"
    },
    {
        code: "FR",
        name: "France",
        flag: PATH_IMG_NA + "/na_fr.svg"
    },
    {
        code: "ES",
        name: "Spain",
        flag: PATH_IMG_NA + "/na_es.svg",
    },
    {
        code: "RU",
        name: "Russia",
        flag: PATH_IMG_NA + "/na_ru.svg"
    },
    {
        code: "MO",
        name: "Mongolia",
        flag: PATH_IMG_NA + "/na_mo.svg"
    },
    {
        code: "VI",
        name: "Vietnam",
        flag: PATH_IMG_NA + "/na_vi.svg"
    },
    {
        code: "TH",
        name: "Thailand",
        flag: PATH_IMG_NA + "/na_th.svg"
    }
];