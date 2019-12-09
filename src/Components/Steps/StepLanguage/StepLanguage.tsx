import React, { ReactNode } from "react";
import styled from "../../../Styles/typed-components";
import RadioButton from "../../RadioButton";
import { useHomeContext } from "../../../Routes/Home/HomeProvider";
import languages from "../../../languages";
import translator from "../../../Utils/translator";

const Container = styled.div`
    
`;
const Wrapper = styled.div`
    width: 100%;
    @media(max-width: 500px) {
        & > .radio-box {
            justify-content: space-around;
            & > div {
                margin: 5px 15px;
            }
        }
    }
`;
const RadioBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    & > div {
        margin: 5px 50px;
    }
`;
interface IProps {
    stepTitle: any;
}

const StepLanguage: React.FC<IProps> = ({
    stepTitle
}) => {
    const { lang } = useHomeContext();

    return (
        <Container>
            <Wrapper>
                { stepTitle }
                <RadioBox className={"radio-box"}>
                    {
                        translator.map((country, key) => 
                            <RadioButton 
                                key={key}
                                id={"lang_"+ key}
                                group={"lang"}
                                name={country.name}
                                value={country.value}
                                imgPath={country.imgPath}
                                onChange={lang.onChange}
                                defaultChecked={country.value === lang.value}
                            />
                        )
                        // languages.map((language, key) => 
                        //     <RadioButton 
                        //         key={key}
                        //         group={"lang"}
                        //         text={language.text}
                        //         name={language.name}
                        //         imgPath={language.imgPath}
                        //         onChange={lang.onChange}
                        //         defaultChecked={lang.value === language.name}
                        //     />
                        // )
                    }
                </RadioBox>
                
            </Wrapper>
        </Container>
    )
}

export default StepLanguage;