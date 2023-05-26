import Code from './getcode.json';
import { useState, useEffect } from 'react';

//const CodeList = (probs) => {
//probs는 object로 넘어감.{속성:값}의 형태로.
//console.log("probs",probs);
//probs.sell은 probs의 값을 가져옴.
//console.log("probs값",probs.sell);
//------------------------------------------------------------------------------------------------------------------------------
const CodeList = ({ sell }) => {
    //{sell}이라고 넘기는 이유는 object이기에 그 형태를 넘어오는 것을 보기 위해 이렇게 넘김.
    // console.log("{sell}",sell);
    // console.log("code",Code);
    //--------------------------------------------------------------------------------------------------------------------------
    //return이 생략되어 사용함.
    //let temp = Code.filter((i)=> return);
    let temp = Code.filter((i) => i["예보구분"] === sell);
    console.log("filter", temp);

    let opTags = temp.map((i) =>
        <option value={i["항목값"]} key={i["항목값"]}>{i["항목명"]}({i["항목값"]})</option>
        //강수확률 = i항목명, (POP) = i항목값

    );


    return (
        <>
            <select id="sel2" name="sel2" defaultValue={""}>
                <option value="">선택하시오리오리 꿱꿱🐤</option>
                {opTags}
            </select>
        </>
    );
}
export default CodeList;