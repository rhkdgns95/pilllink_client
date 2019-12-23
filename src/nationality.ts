import { PATH_IMG_NA } from "./Routes/App/AppProvider";

// 5가지 추가됨.
// 미국, 캐나다, 멕시코, 대만, 홍콩
type TCode = "KO" | "EN" | "CH" | "JA" | "FR" | "ES" | "RU" | "MO" | "VI"| "TH" | "US" | "CA" | "ME" | "TA" | "HO";
export interface INationality {
    code: TCode;
    name: string;
    flag: string;
}

export const Nationality:Array<INationality> = [
    {
        code: "KO",
        name: "Korea",
        flag: PATH_IMG_NA + "/na_ko.jpg",
    },
    {
        code: "EN",
        name: "England",
        flag: PATH_IMG_NA + "/na_en.png"
    },
    {
        code: "CH",
        name: "China",
        flag: PATH_IMG_NA + "/na_ch.jpg"
    },
    {
        code: "JA",
        name: "Japan",
        flag: PATH_IMG_NA + "/na_ja.png"
    },
    {
        code: "FR",
        name: "France",
        flag: PATH_IMG_NA + "/na_fr.jpg"
    },
    {
        code: "ES",
        name: "Spain",
        flag: PATH_IMG_NA + "/na_es.jpg",
    },
    {
        code: "RU",
        name: "Russia",
        flag: PATH_IMG_NA + "/na_ru.png"
    },
    {
        code: "MO",
        name: "Mongolia",
        flag: PATH_IMG_NA + "/na_mo.png"
    },
    {
        code: "VI",
        name: "Vietnam",
        flag: PATH_IMG_NA + "/na_vi.jpg"
    },
    {
        code: "TH",
        name: "Thailand",
        flag: PATH_IMG_NA + "/na_th.png"
    },
    // 추가됨. 5 국가
    {
        code: "US",
        name: "U.S.A",
        flag: PATH_IMG_NA + "/na_us.jpg"
    },
    {
        code: "CA",
        name: "Canada",
        flag: PATH_IMG_NA + "/na_ca.jpg"
    },
    {
        code: "ME",
        name: "Mexico",
        flag: PATH_IMG_NA + "/na_me.png"
    },
    {
        code: "TA",
        name: "Taiwan",
        flag: PATH_IMG_NA + "/na_ta.png"
    },
    {
        code: "HO",
        name: "Hongkong",
        flag: PATH_IMG_NA + "/na_ho.png"
    },
];