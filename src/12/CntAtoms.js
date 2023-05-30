//전역 변수만 관리하기에 태그는 사용하면 안된다.

import { atom, selector } from "recoil";

//atom을 사용 방법
export const CntAtoms = atom({
    //key값은 유일한 변수명으로 지정해야함. 즉 중복 불가. 전역변수이기에 구별되어야함.
    key : "CntAtoms",
    default : 0
});

//selector 사용 방법
export const CntAtomsTwice = selector({

    key : "CntAtomsTwice",
    //get : ({get} => {~~})는 정해진 형식
    get : ({get}) => {
        const cntTwice = get(CntAtoms) * 2;
        return cntTwice;
        //return get(CntAtoms) * 2; : 이렇게 쓰는것과 동일한 내용임.
    } 
});