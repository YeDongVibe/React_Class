import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
//useRecoilState : 값이 변동 될때 . 즉 읽고 쓰기를 진행할 때 사용.
import { useRecoilState } from "recoil";
import { CntAtoms } from "./CntAtoms";

const CntInput = () => {
    const [cnt, SetCnt] = useRecoilState(CntAtoms);
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

    return (
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
            <footer>
                <Link to="/CntDisp" role="link">출력페이지로 고고링</ Link>
            </footer>
        </article>
    );


}
export default CntInput;