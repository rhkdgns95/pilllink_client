import React from "react";
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
const FeedbackPresenter = () => (
    <Container className={"container"}>
        <Navbar
            title={"PillLink"}
            subTitle={"Show your symptoms to pharmacy and hospital"}
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

export default FeedbackPresenter;