import { useState } from "react";

const MyRef = () => {
    let cnt1 = 1;

    const [cnt2, setCnt2] = useState(1);

    const showCnt = () => {
        console.log('cnt1 = ',cnt1);
    }

    const showCnt1 = () => {
        cnt1++;
        showCnt();
    }

    const showCnt2 = () => {
        setCnt2(cnt2 +1);
        showCnt();
    }
    return (
        <main className="container">
            <article>
                <header>
                    <div className="grid">
                        <div><h1>컴포넌트 변수 : {cnt1}</h1></div>
                        <div><h1>State 변수 : {cnt2}</h1></div>
                    </div>
                </header>
                <div className="grid">
                    <button onClick={() => showCnt1()}> 컴포넌트 변수</button>
                    <button onClick={() => showCnt2()}> State 변수</button>
                </div>
            </article>
        </main>
    );
}

export default MyRef;