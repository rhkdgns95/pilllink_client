import { PATH_IMG_NA } from "./Routes/App/AppProvider";

type TCode = "KO" | "EN" | "US" | "CH";
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
        code: "US",
        name: "United States of America",
        flag: PATH_IMG_NA + "/na_us.svg"
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
    }
];