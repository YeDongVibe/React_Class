import { atom } from "recoil";

//atom을 부르는 방법
export const CntAtoms = atom({
    //key값은 유일한 변수명으로 지정해야함. 즉 중복 불가. 전역변수이기에 구별되어야함.
    key : "CntAtoms",
    default : 0
});