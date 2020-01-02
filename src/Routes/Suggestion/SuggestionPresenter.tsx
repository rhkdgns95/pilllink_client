import React, { useState, useEffect } from "react";
import styled from "../../Styles/typed-components";
import { useSuggestionContext, PaginationSettings } from "./SuggestionProvider";
import Navbar from "../../Components/Navbar";
import StepTitle from "../../Components/StepTitle";
import MyMenu from "../../Components/MyMenu";
import TableSuggestion from "../../Components/TableSuggestion/TableSuggestion";
import { TranslatedKorean } from "../../Utils/translated/translatedKorean";
import PaginationSuggestion from "../../Components/PaginationSuggestion";

const Container = styled.div`

`;
const Box= styled.div`

`;
const Wrapper = styled.div`
    display: block;
`;
const TableBox = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    @media(max-width: 510px) {
        & > div {
            width: 100%;
            margin-bottom: 0;
            td,
            th {
                padding: 10px 15px;
                font-size: 11px;
            }

        }
    }
`;
const Tmp = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    opacity: .2;
    width: fit-content;
    &::after {
        content: "";
        position: absolute;
        top: 145%;
        left: 50%;
        width: 100px;
        height: 1px;
        border-radius: 50%;
        background-color: black;
        transform: translate(-50%, -50%);
    }
    & > svg {
        margin-right: 10px;
        // opacity: .2;
        // position: absolute;
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%, -50%);
    }
`;
const TmpText = styled.span`
    position: relative;
    font-size: 17px;
`;
const PaginationBox = styled.div`
    margin-bottom: 20px;
`;

const SuggestionPresenter = () => {
    const { boards, max, pagination } = useSuggestionContext();
    const [isEffected, setIsEffected] = useState<boolean>(false);
    const { cursor } = pagination;
    const { tableCount } = PaginationSettings;
    
    const index: number = (cursor - 1) * tableCount;
    
    useEffect(() => {
        if(!isEffected) {
            setIsEffected(true);
        }
    }, []);
    
    return (
        <Container className={"container"}>
            <Box className={"box"}>
                <Navbar
                    title={"PilLink"}
                    subTitle={"Show your symptoms to a pharmacy or hospital"}
                />
                <Wrapper className={"row"}>
                    <StepTitle 
                        title={"My page"}
                        subTitle={"You can update your information and see your history"}
                    />
                    <MyMenu active={"suggestion"}/>
                    <TableBox className={isEffected ? "active step-container" : "step-container"}>
                        {
                            boards && boards.map((board, key) => 
                                <TableSuggestion 
                                    key={key}
                                    no={index + key + 1}
                                    text={board!.text}
                                    result={board!.result === null ? undefined : board!.result}
                                    selector={TranslatedKorean.boardSelectors.find(item => item.value === board!.selector)!.name}
                                    createdAt={board!.createdAt}
                                />
                            )
                        }
                        {
                            boards && boards.length <= 0  && (
                                <Tmp>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M7 16h10v1h-10v-1zm0-1h10v-1h-10v1zm15-13v22h-20v-22h3c1.229 0 2.18-1.084 3-2h8c.82.916 1.771 2 3 2h3zm-11 1c0 .552.448 1 1 1s1-.448 1-1-.448-1-1-1-1 .448-1 1zm9 1h-4l-2 2h-3.898l-2.102-2h-4v18h16v-18zm-13 9h10v-1h-10v1zm0-2h10v-1h-10v1z"/></svg>
                                    <TmpText>No Suggestion</TmpText>
                                </Tmp>
                            )
                        }
                    </TableBox>
                    <PaginationBox>
                        <PaginationSuggestion />
                    </PaginationBox>
                </Wrapper>
            </Box>
            
        </Container>
    )
};

export default SuggestionPresenter;