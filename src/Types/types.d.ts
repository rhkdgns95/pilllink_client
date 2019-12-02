interface ITheme {
    bgColor: string;
    redColor: string;
    blueColor: string;
}

interface IUseInputText {
    value: string;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>
}