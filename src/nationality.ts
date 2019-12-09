type TCode = "KO" | "EN" | "US" | "CH";
interface INationality {
    code: TCode;
    name: string;
}

export const Nationality:Array<INationality> = [
    {
        code: "KO",
        name: "Korea"
    },
    {
        code: "US",
        name: "United States of America"
    },
    {
        code: "EN",
        name: "England"
    },
    {
        code: "CH",
        name: "China"
    }
]