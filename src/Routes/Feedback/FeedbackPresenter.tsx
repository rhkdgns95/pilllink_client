import React from "react";
import { useFeedbackContext } from "./FeedbackProvider";
import styled from "../../Styles/typed-components";
import Navbar from "../../Components/Navbar";
import StepTitle from "../../Components/StepTitle";
import { PATH_IMG_BG, useAppContext, PATH_IMG_ACTION } from "../App/AppProvider";
import FeedItem from "../../Components/FeedItem";
import FeedButton from "../../Components/FeedButton";
import countries from "../../Utils/translator";

const Container = styled.div`

`;

const Wrapper = styled.div`
    @media(max-width: 910px) {
        .feed-bg {
            display: none;
        }
        
        .feed-group {
            max-width: none;
        }
    }
    @media(max-width: 510px) {
        .feed-content{ 
            height: auto;
            flex-flow: column;
            justify-content: center;
            padding: 0 5px;
            .feed-group {
                height: auto;
                padding: 20px 7px;
                margin: 0 auto;
                margin-top: 10px;
                margin-bottom: 5px;
                &:last-child { 
                }    
            }    
        }
    }
`;
const Row = styled.div`
    width: 100%;
`;
const Cell = styled.div`
    position: relative;
    width: 100%;
`;
const Bg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;
const Img = styled.img`
    display: block;
    width: 100%;
    display: block;
`;
const Content = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 342px;
`;
const Group = styled.div`   
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    width: 100%;
    max-width: 250px;
    border: .5px solid #dfdfdf;
    border-radius: 10px;    
    height: 308px;
    background-color: #fff;
    box-shadow: 0 0.5px 10px rgba(0,50,100,.2);
    margin-right: 12px; 
    &:nth-of-type(1) {
        height: auto;
        min-height: 308px;
    }
`;
interface IFeedBox {
    space: number;
    height?: number;
}
const FeedBox = styled.div<IFeedBox>`
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    padding: 0 5px;
    width: 100%;
    & > div {
        width: ${props => props.space}%;
        margin-bottom: 3px;
        ${props => props.height && "height:" + props.height + "px"};
    }
`;
const SubmitBtn = styled.input`
    width: 98%;
    cursor: pointer;
    padding: 10px;
    display: block;
    // margin: 0 auto;
    border-radius: 3px;
    margin-top: 10px;
    background-color: #e2925a;
    color: white;
    margin-left: auto;
    max-width: 125px;
    transition: .2s;
    &:hover {
        box-shadow: 0 1px 2px rgba(0,0,0,0.34);
    }
    &:disabled {
        
    }
    @media(max-width: 510px) {
        width: 94%;
        margin: 22px auto;
        max-width: none;
    }
`;
const TranslateButtonBox = styled.div`
    
`;
const TranslateButton = styled.span`
    position: absolute;
    z-index: 3;
    background-color: white;
    color: white;
    top: -110px;
    right: 0;
    width: 15px;
    height: 15px;
    padding: 15px;
    border-radius: 50%;
    border: 1px solid black;
    user-select: none;
    cursor: pointer;
    transform: translate(-50%, -50%) rotate(180deg);
    &:active,
    &:hover {
        img {
            
            transform: translate(-50%, -50%) rotate(0deg);
        }
    }
    @media(max-width: 510px) {
        padding: 11.5px;
        top: -83px;
        right: 0px;
        img {
            width: 16px;
            height: 16px;
        }
    }
`;
const TranslateIcon = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    transform: translate(-50%, -50%) rotate(180deg);
    transition: transform .2s;
`;
const Menu = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
`;
const MenuCell = styled.div`
    @media(max-width: 510px) {
        display: flex;
        white-space: nowrap;
        padding: 0 7px;
        &.menu-item-cell {
            & button {
                padding: 8px 22.4px;
                & svg {
                    padding: 8px;
                }
            }
        }
        &:not(.menu-item-cell) {
            & button {
                padding: 3.5px 8px;
                padding-left: 12px;
                & svg {
                    padding-left: 9px;
                    padding-right: 6px;
                }
            }
        }
    }
`;
const AddButton = styled.button`
    padding: 5.5px 10px;
    color: white;
    cursor: pointer;
    background-color: #e4b633;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    & svg {
        padding-left: 13px;
        fill: white;
    }
`;
const MenuItem = styled.button`
    padding: 10px 30px;
    position: relative;
    color: white;
    background-color: #83bea3;
    &:not(.active) {
        cursor: pointer;
    }
    & svg {
        cursor: pointer;
        top: 0;
        right: 0;
        position: absolute;
        padding: 6px;
        fill: white;
        // border: 1px solid red;
    }
    &::after, &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50%;
        height: 0px;
        opacity: 0;
        background-color: #32a771;
        // transition: .2s;
    }
    &::after {
        left: auto;
        right: 0;
    }
    &.active {
        background-color: #32a771;
        color: white;
        &::after, &::before {
            height: 3px;
            opacity: 1;
        }
    }
    
    
`;

const MenuText = styled.div`
    font-size: 12px;
    margin-bottom: 5px;
    color: #ecff2f;
    font-weight: bold;
    &.active {
        color: white;
    }
`;

const FeedbackPresenter = () => {
    const { isProgress } = useAppContext();
    const { isConfirm, handleCurrentIndex, handleChangeCount, count, currentIndex, formFeedback, onCreateConfirm, loadingCreateConfirm, isTranslated, onToggleTranslate, lang } = useFeedbackContext();
    // const currentConfirm: IConfirm = TmpConfirmProps.find(item => item.value === "KO") || TmpConfirmProps[0];
    const currentLang: TLanguage | "NULL" = isTranslated ? lang : "KO";
    const currentCountry: ICountry = countries.find(country => country.value === currentLang) || countries[0];
    const currentConfirm: Array<IConfirmData> = currentCountry!.confirms!;

    const currentFeedback: IUseFeedback = formFeedback[currentIndex];
    // const isSetConfirm: boolean = recordTime.value.length > 0 && recordCaution.value.length > 0;
    /**
     *  isSetConfirm 컨펌가능한지 여부
     * 
     *  복약횟수, 주의사항에서 주의사항은 생략가능하므로 제거했다.
     */
    // const isSetConfirm: boolean = recordTime.value.length > 0;
    
    return (
        <Container className={"container"}>
            <Navbar
                title={"PilLink"}
                subTitle={"Show your symptoms to a pharmacy or hospital"}
            />
            <Wrapper className={"row"}>
                <Row>
                    <StepTitle 
                        title={"Feedback"}
                        subTitle={"Please, follow your pharmacist`s instruction"}
                    />
                    <Menu>
                        <MenuCell className={"menu-item-cell"}>
                            {
                                formFeedback.map((item, key) => 
                                    {
                                        if(key < count) { 
                                            return (
                                            <MenuItem className={currentIndex === key ? "active" : ""} key={key} onClick={e => handleCurrentIndex(key)}>
                                                { item.recordTime.value.length > 0 ? <MenuText className={"active"}>작성완료</MenuText> : <MenuText>작성중</MenuText> }
                                                 복용량 {key + 1}
                                                {
                                                    key !== 0 && count === key+1  && <svg onClick={e => {handleChangeCount(count - 1); e.stopPropagation();}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                                                }
                                            </MenuItem>
                                            )
                                        }
                                    }
                                )
                            }
                        </MenuCell>
                        <MenuCell>
                            { count < 3 && <AddButton onClick={e => handleChangeCount(count + 1)}>추가 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg> </AddButton> }
                        </MenuCell>
                    </Menu>
                    <Cell>
                        {
                            // 한국어가 아닌경우만 번역기능 보이기.
                            lang !== "KO" && (
                                <TranslateButtonBox className={""}>         
                                    <TranslateButton className={""} onClick={onToggleTranslate}>
                                        <TranslateIcon src={PATH_IMG_ACTION + "/translator.svg"}/>
                                    </TranslateButton>
                                </TranslateButtonBox>
                            )
                        }
                        
                        <Bg className={"feed-bg"}>
                            <Img src={PATH_IMG_BG + "/feedback.jpg"}></Img>
                        </Bg>
                        <Content className={"feed-content"}>
                            <Group className={"feed-group"}>
                            <FeedItem 
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg>}
                                    title={currentConfirm[0].name}
                                    buttonGroup={
                                        <FeedBox space={32}>
                                            {
                                                currentConfirm[0].details.map((item, key) => 
                                                    <FeedButton
                                                        id={key}
                                                        key={key}
                                                        type={"radio"}
                                                        name={"onetime"}
                                                        text={item.name}
                                                        value={item.value}
                                                        checked={currentFeedback && currentFeedback.recordPerOneTime.value === item.value}
                                                        onChange={currentFeedback && currentFeedback.recordPerOneTime.onChange}
                                                    />
                                                )
                                            }
                                        </FeedBox>
                                    }
                                />
                                <FeedItem 
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg>}
                                    title={currentConfirm[1].name}
                                    buttonGroup={
                                        <FeedBox space={32}>
                                            {
                                                currentConfirm[1].details.map((item, key) => 
                                                    <FeedButton
                                                        id={key}
                                                        key={key}
                                                        type={"radio"}
                                                        name={"days"}
                                                        text={item.name}
                                                        value={item.value}
                                                        checked={currentFeedback && currentFeedback.recordAmount.value === item.value}
                                                        onChange={currentFeedback && currentFeedback.recordAmount.onChange}
                                                    />
                                                )
                                            }
                                        </FeedBox>
                                    }
                                />
                                <FeedItem 
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg>}
                                    title={currentConfirm[2].name}
                                    buttonGroup={
                                        <FeedBox space={49}>
                                            {
                                                currentConfirm[2].details.map((item, key) => 
                                                    <FeedButton 
                                                        id={key}
                                                        key={key}
                                                        type={"checkbox"}
                                                        name={"time"}
                                                        text={item.name}
                                                        value={item.value}
                                                        checked={currentFeedback &&currentFeedback.recordTime.value.find(currentItem => currentItem === item.value) ? true : false}
                                                        onChange={currentFeedback &&currentFeedback.recordTime.onChange}
                                                    />
                                                )
                                            }
                                        </FeedBox>
                                    }
                                />
                                
                            </Group>
                            <Group className={"feed-group"}>
                                <FeedItem 
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg>}
                                    title={currentConfirm[3].name}
                                    buttonGroup={
                                        <FeedBox space={49}>
                                            {
                                                currentConfirm[3].details.map((item, key) => 
                                                    <FeedButton
                                                        id={key}
                                                        key={key}
                                                        name={"eated"}
                                                        type={"radio"}
                                                        text={item.name}
                                                        value={item.value}
                                                        checked={currentFeedback && currentFeedback.recordWay.value === item.value}
                                                        onChange={currentFeedback && currentFeedback.recordWay.onChange}
                                                        width={currentConfirm[3].details.length === key + 1 }
                                                    />
                                                )
                                            }
                                        </FeedBox>
                                    }
                                />
                                <FeedItem 
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg>}
                                    title={currentConfirm[4].name}
                                    buttonGroup={
                                        <FeedBox space={49} height={32}>
                                            {
                                                currentConfirm[4].details.map((item, key) => 
                                                    <FeedButton 
                                                        id={key}
                                                        key={key}
                                                        type={"checkbox"}
                                                        name={"caution"}
                                                        text={item.name}
                                                        value={item.value}
                                                        checked={currentFeedback && currentFeedback.recordCaution.value.find(currentItem => currentItem === item.value) ? true : false}
                                                        onChange={currentFeedback && currentFeedback.recordCaution.onChange}
                                                    />
                                                )
                                            }
                                        {/* { isSetConfirm && <SubmitBtn disabled={(isProgress || loadingCreateConfirm ) ? true : false} type={"button"} value={"Confirm"} onClick={onCreateConfirm}/>} */}
                                        </FeedBox>
                                    }
                                />
                            </Group>
                        </Content>
                    </Cell>
                    { isConfirm && <SubmitBtn disabled={(isProgress || loadingCreateConfirm ) ? true : false} type={"button"} value={"Submit"} onClick={onCreateConfirm}/> }
                </Row>
            </Wrapper>
        </Container>
    );
}
export default FeedbackPresenter;


/**
 * 
 * import React from "react";
import { useFeedbackContext } from "./FeedbackProvider";
import styled from "../../Styles/typed-components";
import Navbar from "../../Components/Navbar";
import StepTitle from "../../Components/StepTitle";
import { PATH_IMG_BG } from "../App/AppProvider";
import FeedItem from "../../Components/FeedItem";
import FeedButton from "../../Components/FeedButton";

const Container = styled.div`

`;

const Wrapper = styled.div`
    @media(max-width: 910px) {
        .feed-bg {
            display: none;
        }
        
        .feed-group {
            max-width: none;
        }
    }
    @media(max-width: 510px) {
        .feed-content{ 
            height: auto;
            flex-flow: column;
            justify-content: center;
            padding: 0 10px;
            .feed-group {
                height: auto;
                margin-top: 20px;
                padding: 10px 15px;
                &:last-child { 
                }    
            }    
        }
    }
`;
const Row = styled.div`
    width: 100%;
`;
const Cell = styled.div`
    position: relative;
    width: 100%;
`;
const Bg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;
const Img = styled.img`
    display: block;
    width: 100%;
    display: block;
`;
const Content = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 342px;
`;
const Group = styled.div`
    width: 100%;
    max-width: 250px;
    border: .5px solid #dfdfdf;
    border-radius: 10px;    
    height: 308px;
    background-color: #fff;
    box-shadow: 0 0.5px 10px rgba(0,50,100,.2);
    margin-right: 12px; 
`;
interface IFeedBox {
    space: number;
    height?: number;
}
const FeedBox = styled.div<IFeedBox>`
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    padding: 0 5px;
    width: 100%;
    & > div {
        width: ${props => props.space}%;
        margin-bottom: 3px;
        ${props => props.height && "height:" + props.height + "px"};
    }
`;
const SubmitBtn = styled.input`
    width: 98%;
    cursor: pointer;
    padding: 10px;
    display: block;
    margin: 0 auto;
    border-radius: 6px;
    margin-top: 20px;
    background-color: #91b7be;
    color: white;
`;

interface IConfirmProps {
    name: string;
    value: string;
}
interface IConfirmData extends IConfirmProps {
    details: Array<IConfirmProps>
};
interface IConfirm extends IConfirmProps {
    data: Array<IConfirmData>
};
const TmpConfirmProps: Array<IConfirm> = [
    {
        name: "_",
        value: "KO",
        data: [
            {
                name: "복욕량",
                value: "AMOUNT",
                details: [
                    {
                        name: "3일",
                        value: "3D"
                    },
                    {
                        name: "5일" ,
                        value: "5D"
                    },
                    {
                        name: "7일",
                        value: "7D"
                    }
                ]
            },
            {
                name: "복용간격",
                value: "TIME",
                details: [
                    {
                        name: "아침",
                        value: "TO_MORNING"
                    },
                    {
                        name: "점심" ,
                        value: "TO_LUNCH"
                    },
                    {
                        name: "저녁",
                        value: "TO_DINNER"
                    },
                    {
                        name: "취침전",
                        value: "TO_SLEEP"
                    }
                ]
            },
            {
                name: "복용방법",
                value: "WAY",
                details: [
                    {
                        name: "식전30분",
                        value: "AGO_EAT"
                    },
                    {
                        name: "식전즉시" ,
                        value: "AGO_IMMEDIATE_EAT"
                    },
                    {
                        name: "식후즉시",
                        value: "AFTER_IMMEDIATE_EAT"
                    },
                    {
                        name: "식후30분",
                        value: "AFTER_IMMEDIATE"
                    },
                    {
                        name: "공복",
                        value: "NO_EAT"
                    }
                ]
            },
            {
                name: "주의사항",
                value: "CAUTION",
                details: [
                    {
                        name: "졸음",
                        value: "CAUTION_SLEEP"
                    },
                    {
                        name: "복통",
                        value: "CAUTION_STOMACAHCHE"
                    },
                    {
                        name: "발진",
                        value: "CAUTION_RASH"
                    },
                    {
                        name: "어지러움",
                        value: "CAUTION_DIZZY"
                    },
                    {
                        name: "설사",
                        value: "CAUTION_DIARRHEA"
                    },
                    {
                        name: "혈압",
                        value: "CAUTION_BLOODPRESSURE"
                    }
                ]
            },
        ]
    }
]
const FeedbackPresenter = () => {
    const { recordAmount, recordTime, recordWay, recordCaution } = useFeedbackContext();
    const currentConfirm: IConfirm = TmpConfirmProps.find(item => item.value === "KO") || TmpConfirmProps[0];
    
    return (
        <Container className={"container"}>
            <Navbar
                title={"PilLink"}
                subTitle={"Show your symptoms to a pharmacy or hospital"}
            />
            <Wrapper className={"row"}>
                <Row>
                    <StepTitle 
                        title={"Feedback"}
                        subTitle={"Please, follow your pharmacist`s instruction"}
                    />
                    <Cell>
                        <Bg className={"feed-bg"}>
                            <Img src={PATH_IMG_BG + "/feedback.jpg"}></Img>
                        </Bg>
                        <Content className={"feed-content"}>
                            <Group className={"feed-group"}>
                                <FeedItem 
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg>}
                                    title={"복약량"}
                                    buttonGroup={
                                        <>
                                            <FeedBox space={32}>
                                                {
                                                    currentConfirm.data[0].details.map((item, key) => 
                                                        <FeedButton
                                                            id={key}
                                                            key={key}
                                                            type={"radio"}
                                                            name={"days"}
                                                            text={item.name}
                                                            value={item.value}
                                                            onChange={recordAmount.onChange}
                                                            defaultChecked={recordAmount.value === item.value}
                                                        />
                                                    )
                                                }
                                                <FeedButton 
                                                    text={"3days"}
                                                    type={"radio"}
                                                    name={"days"}
                                                    id={1}
                                                    defaultChecked={true}
                                                />
                                                <FeedButton 
                                                    text={"5days"}
                                                    type={"radio"}
                                                    name={"days"}
                                                    id={2}
                                                />
                                                <FeedButton 
                                                    text={"6days"}
                                                    type={"radio"}
                                                    name={"days"}
                                                    id={3}
                                                />
                                            </FeedBox>
                                        </>
                                    }
                                />
                                <FeedItem 
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg>}
                                    title={"복용간격"}
                                    buttonGroup={
                                        <>
                                            <FeedBox space={49}>
                                                <FeedButton 
                                                    text={"아침"}
                                                    type={"checkbox"}
                                                    name={"time"}
                                                    id={1}
                                                    defaultChecked={true}
                                                />
                                                <FeedButton 
                                                    text={"점심"}
                                                    type={"checkbox"}
                                                    name={"time"}
                                                    id={2}
                                                />
                                                <FeedButton 
                                                    text={"저녁"}
                                                    type={"checkbox"}
                                                    name={"time"}
                                                    id={3}
                                                />
                                                <FeedButton 
                                                    text={"취침전"}
                                                    type={"checkbox"}
                                                    name={"time"}
                                                    id={4}
                                                />
                                            </FeedBox>
                                        </>
                                    }
                                />
                                <FeedItem 
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg>}
                                    title={"복용방법"}
                                    buttonGroup={
                                        <>
                                            <FeedBox space={49}>
                                                <FeedButton 
                                                    text={"식전30분"}
                                                    type={"radio"}
                                                    name={"eated"}
                                                    id={1}
                                                    defaultChecked={true}
                                                />
                                                <FeedButton 
                                                    text={"식전즉시"}
                                                    type={"radio"}
                                                    name={"eated"}
                                                    id={2}
                                                />
                                                <FeedButton 
                                                    text={"식후즉시"}
                                                    type={"radio"}
                                                    name={"eated"}
                                                    id={3}
                                                />
                                                <FeedButton 
                                                    text={"식후30분"}
                                                    type={"radio"}
                                                    name={"eated"}
                                                    id={4}
                                                />
                                                <FeedButton 
                                                    text={"공복"}
                                                    type={"radio"}
                                                    name={"eated"}
                                                    id={5}
                                                    width={98}
                                                />
                                            </FeedBox>
                                        </>
                                    }
                                />
                            </Group>
                            <Group className={"feed-group"}>
                                <FeedItem 
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg>}
                                    title={"주의사항"}
                                    buttonGroup={
                                        <FeedBox space={48} height={40}>
                                        <FeedButton 
                                            text={"졸음"}
                                            type={"checkbox"}
                                            name={"caution"}
                                            id={1}
                                        />
                                        <FeedButton 
                                            text={"복통"}
                                            type={"checkbox"}
                                            name={"caution"}
                                            id={2}
                                        />
                                        <FeedButton 
                                            text={"발진"}
                                            type={"checkbox"}
                                            name={"caution"}
                                            id={3}
                                        />
                                        <FeedButton 
                                            text={"어지러움"}
                                            type={"checkbox"}
                                            name={"caution"}
                                            id={4}
                                        />
                                        <FeedButton 
                                            text={"설사"}
                                            type={"checkbox"}
                                            name={"caution"}
                                            id={5}
                                        />
                                        <FeedButton 
                                            text={"혈압"}
                                            type={"checkbox"}
                                            name={"caution"}
                                            id={6}
                                        />
                                        <SubmitBtn type={"button"} value={"Confirm"}/>
                                        </FeedBox>
                                    }
                                />
                            </Group>
                        </Content>
                    </Cell>
                </Row>
            </Wrapper>
        </Container>
    );
}
export default FeedbackPresenter;
 */