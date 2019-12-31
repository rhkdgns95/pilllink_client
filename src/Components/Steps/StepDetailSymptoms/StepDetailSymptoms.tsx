import React, { useEffect, useState } from "react";
import styled from "../../../Styles/typed-components";
import { useHomeContext } from "../../../Routes/Home/HomeProvider";
import countries from "../../../Utils/translator";
import Checkbox from "../../Checkbox";
import { PATH_IMG_DETAILS, PATH_IMG_BG, PATH_IMG_ACTION } from "../../../Routes/App/AppProvider";
import ResultItem from "../../ResultItem";
import { TranslatedKorean } from "../../../Utils/translated/translatedKorean";
const Container = styled.div`
    @media(max-width: 910px) {
        .group-checkbox {
            margin: 45px 0;
        }
        .result-box {
            margin: 45px 0;
            .img-box {
                display: none;
            }
            & > div {
                height: auto;
                justify-content: space-between;
                align-items: center;
                width: 70%;
                margin: 0 auto;
                .result-item {
                    &.active {
                        width: 125px;
                        height: 125px;
                        margin: 15px;
                    }
                }
            }
        }
    }
    
    @media(max-width: 510px) {
        .details-header {
            margin-top: 30px;
            margin-bottom: -22px;
            span {
                &:nth-of-type(1) {
                    
                    font-size: 13px;
                }
                &:nth-of-type(2) {
                    font-size: 10px;
                    margin-top: 32px;
                    margin-left: 7px;
                    justify-content: flex-start;
                    img {
                        margin-right: 7px; 
                    }
                }
            }
        }
        .group-checkbox {
            margin: 15px 0;
            margin-bottom: 50px;
            justify-content: flex-start;
            & > div {
                // margin: 10px 5px;
                margin: 30px 0;
                width: 33%;
            }
        }
        .result-box { 
            margin: 15px 0;
            margin-bottom: 60px;
            & > div {
                width: 100%;
                margin: 0 auto;
                justify-content: space-between;
                & > .result-item {
                    width: 95px;
                    height: 95px;
                    margin: 20px 3px;
                    position: relative;
                    &.active {
                        width: 95px;
                        height: 95px;
                        margin: 20px 12px;
                        position: relative;
                    }
                }
            }
        }
    }
`;
const Wrapper = styled.div`
    position: relative;
`;
const Tmp = styled.div`
    width: 100%;
    min-height: 300px;
`;
const DetailsGroup = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    margin: 80px 0;
    margin-bottom: 50px;
`;
const ResultBgBox = styled.div`
    position: relative;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const Img = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
`;
const ResultGroup = styled.div`
    display: flex;
    width: 60%;
    // padding: 20px;
    flex-flow: row wrap;
    height: 340px;
    justify-content: flex-end;
    align-items: center;    
    & div {
        &.result-item {
            &.active {
                width: 180px;
                height: 180px;
                margin: 15px;
            }
        }
    }
`;
const TranslateButtonBox = styled.div`
    &.active {
        &::before {
            content: "";
            position: fixed;
            display: block;
            left: 0;
            top: 0;
            width: 100%;
            height: 50%;
            background-color: rgba(0,10,0,0.42);
            z-index: 1;
        }
        &::after {
            content: "";
            position: absolute;
            width: 60px;
            height: 60px;
            top: 20px;
            right: 50px;
            transform: translate(50%, -50%);
            background-color: white;
            box-shadow: inset 0.5px 0.5px 4px 6px rgba(0,0,0,0.1), inset -0.5px -0.5px 4px 6px rgba(0,0,100,0.1);
            border-radius: 50%;
            z-index: 2;
        }
    }
`;
interface ITranslateButton {
    toggleText: string;
}
const TranslateButton = styled.span<ITranslateButton>`
    position: absolute;
    z-index: 3;
    background-color: white;
    color: white;
    top: 20px;
    right: 50px;
    transform: translate(50%, -50%);
    width: 15px;
    height: 15px;
    padding: 15px;
    border-radius: 50%;
    border: 1px solid black;
    user-select: none;
    img {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        transition: transform .2s;
        transform: translate(-50%, -50%) rotate(180deg);
    }
    
    &.active {
        &::after {
            content: "${props => props.toggleText}";
            position: absolute;
            top: 50%;
            display: inline-block;
            line-height: 18px;
            left: -250%;
            transform: translate(-50%, -50%);
            width: 110px;
            text-align: center;
            color: #e5fffb;
            font-size: 13px;
            text-shadow: 0 2px 4px rgba(0,0,0,.4);
        }
    }
    
    
    
`;
const TranslateIcon = styled.img`
    cursor: pointer;
    &:active,
    &:hover {
        transform: translate(-50%, -50%) rotate(0deg);
    }
`;
const DetailsHeader = styled.div`
    text-align: center;
    white-space: nowrap;
    max-width: 700px;
    margin: 0 auto;
    margin-bottom: -60px;
`;
const DetailsTitle = styled.span`
    margin: 0 auto;
    margin-bottom: 50px;
    color: #1bb761;
    font-weight: bold;
`;
const DetailsContent = styled.span`
    font-weight: bold;
    display: flex;
    // justify-content: center;
    align-items: center;
    padding: 10px 0;
    max-width: 300px;
    margin-top: 50px;
    font-size: 13px;
    
`;
const Icon = styled.img`
    margin-right: 10px;
    width: 13px;
`;

interface IProps {
    stepTitle: Array<any>;
}

const useInputChecked = (): IUseCheckbox => {
    const [details, setDetails] = useState<Array<ISymptomDetails>>([]);
    
    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { target: { value, checked }} = event;

        // 1. checked된 값을 찾아서 변경
        // 2. 변경된 데이터를 다시 setDetails하여 추가하도록 한다.
        const changedDetails: Array<ISymptomDetails> = details.map(item => {
            
            return {
                ...item,
                checked: item.value !== value ? item.checked : checked 
            };
        });
        setDetails([ ...changedDetails ]);
    };

    const onInit = (initSymptomDetails: Array<ISymptomDetails>) => {
        setDetails(initSymptomDetails);
    };

    return {
        details,
        onChange,
        onInit
    };
}

const StepDetailSymptoms: React.FC<IProps> = ({
    stepTitle
}) => { 
    const { symptom, lang, handleSubmitOk, submitOk, step, onCreateResultDetails, isModal, handleModal } = useHomeContext();
    const [ isEffected, setIsEffected ] = useState<Array<boolean>>([false, false]);
    const [ symptomDetails, setSymptomDetails ] = useState<ISymptom>();
    const [ symptomDetailsKorean, setSymptomDetailsKorean ] = useState<ISymptom>();
    const [ isTranslated, setIsTranslated ] = useState<boolean>(false);
    
    const country: ICountry | undefined = countries.find(country => country.value === lang.value) || countries[0];
    
    const currentDetails = useInputChecked();
    const [ title, setTitle ] = useState<string>("");
    let symptomName: ISymptom  | undefined;

    // GetDetailsScreen(symptom.value);
    
    /** 
     *  [1] handleDetails
     *  
     *  Step2에서 선택된 symptom값으로 
     *  해당하는 증상의 상세한 증상들을 가져온다.
     *  가장 초기에 실행된다.
     */
    const handleDetails = () => {
        let symptomDetails: ISymptom | undefined = undefined;
        const country: ICountry | undefined = countries.find(country => country.value === lang.value);
        if(country) {
            symptomDetails = country.symptoms.find(registeredSymptom => registeredSymptom.value === symptom.value);
            // console.log(symptomDetails);
            if(lang.value === "KO") {
                handleModal();
            }
            
        } 
        setSymptomDetails(symptomDetails);
    }

    /** 
     *  [2] handleCurrentDetails
     *  
     *  handleDetails를 통해 상세한 증상들을 가져왔다면,
     *  Step3에서 별도의 State를 다루도록 한다.
     *  왜냐? 해당 값은 Step2에 의존적으로 Step2의 값에따라서 변하게 되므로
     *  HomeProvider에서 관리하는게아니라, 현재 이 파일에서 State를 관리하도록 한다.
     *  최종적으로는 Feedback될 때, currentDetails의 details 객체가 인자로 들어감.
     */
    const handleCurrentDetails = (newDetails: ISymptom) => {
        currentDetails.onInit(newDetails.details.map(detail => {
            return {
                value: detail.value,
                checked: false
            }
        }));
        onCreateResultDetails({});
    };
    const handleSymptomDetailsKorean = () => {
        
        if(symptomDetails) {
            const value = symptomDetails!.value || "";
            const symptomKorean: ISymptom | undefined = TranslatedKorean.symptoms.find(symptom => symptom.value === value);
            
            if(symptomKorean) {
                let tmpSymptoms: ISymptom = {
                    name: "한국어",
                    value: "KO",
                    imgPath: "",
                    details: symptomDetails.details.map(detail => {
                        const { value } = detail;
                        const newName = symptomKorean.details.find(koDetail => koDetail.value === value) || detail;
                        return {
                            ...detail,
                            name: newName.name
                        };
                    })
                };
                setSymptomDetailsKorean(tmpSymptoms);
                setIsTranslated(!isTranslated);

                // console.log("Current Details: ", symptomDetails);
                // console.log("Korean Details: ", symptomKorean);
                // console.log("New Details: ", tmpSymptoms);
            }
            
        }
    };

    const onToggleTranslate = () => {
        console.log("onToggleTranslate");
        handleSymptomDetailsKorean();
    }
    /**
     * 
     * 
     */
    

    /**
     *  초기화 
     */
    useEffect(() => {
        if(!symptomDetails) {
            handleDetails();
        }
        // handleTitle("Pil+Link | " + symptom.value);
        if(currentDetails && !isEffected) {
            if(step === 2) {
                setIsEffected([true, false]);
            }
        }   
        let country = countries.find((item: any) => item.value === lang.value);
        symptomName = country ? country.symptoms.find((item: any) => item.value === symptom.value) : undefined;
        setTitle(symptomName ? symptomName.name : "");

    }, []);  
    
    useEffect(() => {
        setIsTranslated(false);
        if(step === 3) {
            setIsEffected([false, true]);
        } else if(step === 2) {
            setIsEffected([true, false]);
        }
    }, [step]);

    useEffect(() => {
        if(symptomDetails && currentDetails.details.length <= 0) {
            handleCurrentDetails(symptomDetails);
        }
    }, [symptomDetails]);
    
    /**
     *  currentDetails가 선택될 때마다 실행됨
     *  1. Feedback버튼을 클릭할 수 있는지, 
     *  2. 하나 이상선택되었는지,
     *  3. 추가로 filter대신에 find를 사용하여 하나라도 선택되었다면, 
     *     submitOk를 true값으로 변경.
     */
    useEffect(() => {
        if(currentDetails.details.length > 0) {
            // const checkedDetails: number = currentDetails.details.filter(detail => detail.checked === true).length;
            const checkedDetails: ISymptomDetails | undefined = currentDetails.details.find(detail => detail.checked === true);
            onCreateResultDetails(currentDetails.details);
            if(checkedDetails && !submitOk) {
                // feedback 가능.
                handleSubmitOk(true);
            } else if(!checkedDetails && submitOk){
                // feedback 불가능.
                handleSubmitOk(false);
            }
            // console.log("선택된것: ", checkedDetails);
        }
    }, [currentDetails.onChange]);

    return (
        <Container>
            <Wrapper>
                {
                    step === 2 && (
                        <Details 
                            isEffected={isEffected[0]} 
                            title={stepTitle[0]}
                            symptomDetails={symptomDetails}
                            currentDetails={currentDetails}
                            symptomName={title}
                            optionText={country.contents[0]}
                        />
                    )
                }
                {
                    step === 3 && (
                        <Result 
                            lang={lang.value}
                            isEffected={isEffected[1]}
                            title={stepTitle[1]}
                            currentDetails={currentDetails.details.filter(item => item.checked === true)}
                            symptomDetails={isTranslated ? symptomDetailsKorean : symptomDetails}
                            onToggleTranslate={onToggleTranslate}
                            isModal={isModal}
                            toggleText={country.contents[1]}
                        />
                    )
                }
            </Wrapper>
        </Container>
    );
}

interface IDetails {
    isEffected: boolean;
    title: string;
    symptomDetails?: ISymptom;
    currentDetails: IUseCheckbox;
    symptomName: string;
    optionText: string;
};
const Details: React.FC<IDetails> = ({
    isEffected,
    title,
    symptomDetails,
    currentDetails,
    symptomName,
    optionText
}) => (
    <>
        { title }
        <DetailsHeader className={"details-header"}>
            <DetailsTitle>{symptomName}</DetailsTitle>
            <DetailsContent>
                <Icon src={PATH_IMG_DETAILS + "/check.png"}/>
                { optionText }
            </DetailsContent>
        </DetailsHeader>
        <DetailsGroup className={isEffected ? "active step-container group-checkbox" : "group-checkbox step-container"}>
            {
                !symptomDetails ? <Tmp>Comming soon</Tmp> :
                symptomDetails.details.map((detail, key) => 
                    <Checkbox 
                        key={key}
                        id={key}
                        name={detail.name}
                        imgPath={detail.imgPath}
                        value={detail.value}
                        checked={ (currentDetails.details.length > 0 && currentDetails.details) ? currentDetails.details[key].checked : false}
                        onChange={currentDetails.onChange}
                    />
                )
            }
        </DetailsGroup>
    </>
);
interface IResult {
    title: string;
    isEffected: boolean;
    currentDetails: Array<ISymptomDetails>;
    symptomDetails?: ISymptom;
    onToggleTranslate: () => any;
    isModal: boolean;
    toggleText: string;
    lang: string;
}
const Result: React.FC<IResult> = ({
    title,
    isEffected,
    currentDetails,
    symptomDetails,
    onToggleTranslate,
    isModal,
    toggleText,
    lang
}) => (
    <>
        { title }
        <ResultBgBox className={"result-box"}>
            <Img className={"img-box"} src={PATH_IMG_BG + "/result.jpg"} />
            <ResultGroup className={isEffected ? "active step-container" : "step-container"}>
                {
                    symptomDetails && 
                    currentDetails.map((item, key) => (
                        <ResultItem 
                            key={key}
                            name={symptomDetails.details.find(detail => detail.value === item.value)!.name || ""}
                            imgPath={symptomDetails.details.find(detail => detail.value === item.value)!.imgPath || ""}
                            className={currentDetails.length <= 2 ? "result-item active" : "result-item"}
                            // imgPath={symptomDetails.details.find(detail => detail.value === item.value)!.imgPath || PATH_IMG_DETAILS + "/comming_soon.svg"}
                        />
                    )) 
                }
            </ResultGroup>
        </ResultBgBox>
        {
            // 한국어가 아닌 경우만 번역기 버튼 보이기.
            lang !== "KO" && (
                <TranslateButtonBox className={isModal ? "active" : ""}>
                    <TranslateButton className={isModal ? "active" : ""} toggleText={toggleText}>
                        <TranslateIcon src={PATH_IMG_ACTION + "/translator.svg"} onClick={onToggleTranslate}/>
                    </TranslateButton>
                </TranslateButtonBox>
            )
        }
        
    </>
);

export default StepDetailSymptoms;