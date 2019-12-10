import React from "react";
import styled from "../../Styles/typed-components";
import { useHistoryContext, PaginationSettings } from "../../Routes/History/HistoryProvider";

const Container = styled.div`

`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 550px;
    margin: 0 auto;
    & > button {
        margin: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        &:disabled {
            opacity: 0;
            pointer-events: none;
            cursor: default;
        }
    }
`;
const Page = styled.button`
    background-color: transparent;
    font-size: 12px;
    color: #a59f9f;
    transition: .2s;
    cursor: pointer;
    &.active {
        cursor: default;
        color: white;
        background-color: #34af77;
    }
    &:hover {
        color: white;
        background-color: #34af77;
    }
`;
const Arrow = styled.button`
    position: relative;
    background-color: inherit;
    border: 1px solid #dfdfdf;
    & > svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        fill: #8a8787;
    }
`;
const GoPrev = styled(Arrow)`

`;
const GoNext = styled(Arrow)`

`;
const GoFirst = styled(Arrow)`
    & > svg {
        transform: translate(-50%, -50%) rotateZ(-180deg);
    }
`;
const GoLast = styled(Arrow)`

`;

const getLastpage = (max: number, pageCount: number) => {
    if((max % pageCount) === 0) {
        return max / pageCount;
    } else {
        return max / pageCount + 1;
    }
};

const Pagination = () => {
    const { pagination, max } = useHistoryContext();
    const { cursor, screen, onClickDBArrow, onClickArrow, onChangeCursor, hasFirst, hasPrev, hasLast, hasNext } = pagination;
    const { pageCount, tableCount } = PaginationSettings;
    const startPageNumber: number = screen * pageCount - (pageCount - 1);
    
    
    let pages: Array<number> = [];
    
    for(var i = 0; i < pageCount; i++) {
        
        const screenTableCnt = pageCount * tableCount * (screen - 1);
        const currentScreenTableCnt = (i + 1) * tableCount;
        if(max === screenTableCnt) {
            break;
        }
        pages.push(startPageNumber + i);
        if(max <= screenTableCnt + currentScreenTableCnt) {
            break;
        }
    }
    console.log("PAGES:" ,pages);
    
    return (
        <Container>
            <Wrapper>
                <GoFirst disabled={!hasFirst} onClick={e => {
                    onClickDBArrow(1);
                }}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z"/></svg></GoFirst>
                <GoPrev disabled={!hasPrev} onClick={ e => {
                    onClickArrow(screen - 1);
                }} ><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg></GoPrev>
                {
                    pages.map((page, key) => <Page className={page === cursor ? "active" : ""} key={key} onClick={e => onChangeCursor(page)}>{page}</Page>)
                }
                <GoNext disabled={!hasNext} onClick={e => {
                    onClickArrow(screen + 1);
                }}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></GoNext>
                <GoLast disabled={!hasLast} onClick={e => {
                    onClickDBArrow(0);
                }}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z"/></svg></GoLast>
            </Wrapper>
        </Container>
    );
};

export default Pagination;