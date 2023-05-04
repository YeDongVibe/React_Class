//컴포넌트 변수 : 랜더링 한번 일어나더라도 화면에 반영이 되지 않음.
//State 변수 : 화면이 바뀔 때 마다 랜더링이 계속 발생함.
//Ref 변수 : 값이 바뀌지만 랜더링은 일어나지 않음. 하지만 재랜더링이 일어나는 시점에서는 화면에 반영됨.

import { useState, useRef } from "react";

const MyRefBasic = () => {
    let cnt1 = 1;

    const [cnt2, setCnt2] = useState(1);
    const cnt3 = useRef(1);

    const showCnt = () => {
        console.log('cnt1 = ', cnt1, 'cnt2 = ', cnt2, 'cnt3 = ', cnt3);
    }

    const showCnt1 = () => {
        cnt1++;
        showCnt();
    }

    const showCnt2 = () => {
        setCnt2(cnt2 +1);
        showCnt();
    }

    const showCnt3 = () => {
        cnt3.current = cnt3.current + 1;
        showCnt();
    }

    return (
        <main className="container">
            <article>
                <header>
                    <div className="grid">
                        <div><h1>컴포넌트 변수 : {cnt1}</h1></div>
                        <div><h1>State 변수 : {cnt2}</h1></div>
                        <div><h1>Ref 변수 : {cnt2}</h1></div>
                    </div>
                </header>
                <div className="grid">
                    <button onClick={() => showCnt1()}> 컴포넌트 변수</button>
                    <button onClick={() => showCnt2()}> State 변수</button>
                    <button onClick={() => showCnt3()}> Ref 변수</button>
                </div>
            </article>
        </main>
    );
}

export default MyRefBasic;