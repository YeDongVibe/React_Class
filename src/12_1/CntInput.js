import { useEffect, useRef } from "react";

const CntInput = ({cnt,SetCnt}) => {
    const txt1 = useRef();

    useEffect(() => {
        txt1.current.focus();

    })
    const plus = (e) => {
        e.preventDefault();
        SetCnt(cnt + 1);

    }

    const minus = (e) => {
        e.preventDefault();
        if (cnt <= 0) {
            return;
        }
        SetCnt(cnt - 1);
    }


    return(
        <article>
        <form className="grid">
            <div>
                <button onClick={(e) => minus(e)}>🔻</button>
            </div>
            <div>
                <input ref={txt1} type="text" id="txt1" name="txt1" readOnly value={cnt}></input>
            </div>
            <div>
                <button onClick={(e) => plus(e)}>🔺</button>
            </div>
        </form>
    </article>
    );
}
export default CntInput;