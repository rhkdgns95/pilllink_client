import { Seoul } from "./address/Seoul";
import { Busan } from "./address/Busan";
import { Daegu } from "./address/Daegu";
import { Incheon } from "./address/Incheon";
import { Gwangju } from "./address/Gwangju";
import { Daejeon } from "./address/Daejeon";
import { Ulsan } from "./address/Ulsan";
import { Sejong } from "./address/Sejong";
import { Gyeonggi } from "./address/Gyeonggi";
import { Gangwon } from "./address/Gangwon";
import { Chungbuk } from "./address/Chungbuk";
import { Chungnam } from "./address/Chungnam";
import { Jeonbuk } from "./address/Jeonbuk";
import { Jeonnam } from "./address/Jeonnam";
import { Gyeongbuk } from "./address/Gyeongbuk";
import { Gyeongnam } from "./address/Gyeongnam";
import { Jeju } from "./address/Jeju";

export const AddressKOR: Array<IAddress> = [
    // 서울
    { ...Seoul },
    // 부산
    { ...Busan },
    // 대구
    { ...Daegu },
    // 인천
    { ...Incheon },
    // 광주
    { ...Gwangju },
    // 대전
    { ...Daejeon },
    // 울산
    { ...Ulsan },
    // 세종
    { ...Sejong },
    // 경기
    { ...Gyeonggi },
    // 강원도
    { ...Gangwon },
    // 충북
    { ...Chungbuk },
    // 충남
    { ...Chungnam },
    // 전북
    { ...Jeonbuk },
    // 전남
    { ...Jeonnam },
    // 경북
    { ...Gyeongbuk },
    // 경남
    { ...Gyeongnam },
    // 제주
    { ...Jeju }
];
