// import CodeList from "./CodeList";
import { useState, useEffect } from "react";
import { CodeAtom } from "./CodeAtom";
import { useRecoilState } from "recoil";

const CodeGubun = () => {
    //useState는 변수임. 재 랜더링이 일어날 때 변화하는 변수를 만들어 함수화 시킴.
    //아래의 형식의 표현이 원칙임. 
    const [sel, SetSel] = useRecoilState(CodeAtom);

    //selItem이라는 함수를 만들어서 onChange 혹은 onClick이라는 이벤트가 발생했을 때의 동작을 실행하ㅁ
    const selItem = (e) => {
        SetSel(e.target.value);
        //console.log("sel",sel);
    }

    //useEffect는 함수임. 값이 변화할때마다(이벤트가 발생할 때마다) 변화함.
    useEffect(() => {

    }, [sel]);

    return (
        <main className="container">
            <article>
                <form>
                    
                    <div className="container">
                        <div>
                            {/* select는 option을 가짐 */}
                            <select id="sel" name="sel" onChange={selItem}>
                                <option value="">선택하시구리구리 너구리🙉</option>
                                <option value="단기예보">단기예보</option>
                                <option value="초단기예보">초단기예보</option>
                            </select>
                        </div>

                        <div>
                            {/* 내용을 따로 Component화 하여 꽂기*/}
                            {/* 속성값:sell, 값=sel */}
                            {/* {sel == '' ? <h1>값을 선택하시라우</h1> : <CodeList sell={sel} />} */}
                        </div>
                    </div >

                </form>
            </article>
        </main>
    );
}
export default CodeGubun;