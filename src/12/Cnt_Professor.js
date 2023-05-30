import { useState, useEffect, useRef } from "react";


const Cnt_Professor = () => {
    //const [n, SetN]  : [변수명, set변수명] : set변수명을 통해 변경함.
    //초기값을 0으로 default시킴
    const [n, SetN] = useState(0);

    const downN = (e) => {
        e.preventDefault();
        //state값을 변경할때는 무조건 set변수명을 통해 기술해야함.
        if(n -1 <= 0) {
            setN(0);}
        else {setN(n - 1);}
    }
    const upN = (e) => {
        e.preventDefault();
        if (n + 1 > 100) {
            setN(100);
        }
        else {setN(n + 1);}
    }
    useEffect (() => {
        //상태값이 변경될때마다 발생.
        console.log("n",n);
    },[n])

    return (
        <main className="container">
            <article>
                <form className="grid">
                    <div>
                        <button onClick={downN}>🔻</button>
                    </div>
                    <div>
                        <input type="text" id="txt1" name="txt1" readOnly value={n}></input>
                        {/* value = {n}은 값을 표출시키기 위해 적음 */}
                    </div>
                    <div>
                        <button onClick={(e) => upN(e)}>🔺</button>
                    </div>
                </form>
                <article>
                    <h2>
                        입력값 : {n} //  입력값 2배 : {n * 2}
                    </h2>
                </article>
            </article>
        </main>
    );
}
export default Cnt_Professor;