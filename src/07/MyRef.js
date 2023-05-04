//컴포넌트 변수 : 랜더링 한번 일어나더라도 화면에 반영이 되지 않음.
//State 변수 : 화면이 바뀔 때 마다 랜더링이 계속 발생함.
//Ref 변수 : 값이 바뀌지만 랜더링은 일어나지 않음. 하지만 재랜더링이 일어나는 시점에서는 화면에 반영됨.

import { useState, useRef, useEffect } from "react";

const MyRef = () => {

    const txtref = useRef();

    const itemArr = useRef([]); // 배열을 초기값으로 잡음.
    const [itemTag, setItemTag] = useState();

    useEffect(() => {
        txtref.current.focus(); //focus : 값을 입력하는 곳에 입력받도록 유도(?) 함.
    }, []);

    const addItem = (e) => {
        e.preventDefault();
        itemArr.current = [...itemArr.current, txtref.current.value];
        console.log("addItem = ", txtref.current.value,itemArr.current);
    };

    const resetItem = (e) => {
        e.preventDefault();
        console.log("resetItem = ", itemArr.currnet);
    };

    return (
        <main className = "container">
            <article>
                <header>
                    <form>
                        <div className = "grid">
                            <label htmlFor = "txt1">과일🍎 / 채소🥦 입력</label>
                            <input ref = {txtref} type = "text" id = "txt1" name = "txt1" required />
                        </div>
                        <div>
                            <button onClick={(e) => addItem(e)}>등록</button>
                            <button onClick={(e) => resetItem(e)}>취소</button>
                        </div>
                    </form>
                </header>
                <div className="grid">
                    {itemTag}
                </div>
            </article>
        </main>
    );
}

export default MyRef;