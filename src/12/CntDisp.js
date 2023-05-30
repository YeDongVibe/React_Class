import { Link } from "react-router-dom";
//useRecoilValue : 변경할 필요가 없을 때 즉 읽기만 할때 사용.
import { useRecoilValue } from "recoil";
import {CntAtoms} from "./CntAtoms";

const CntDisp = () => {
    const cnt = useRecoilValue(CntAtoms);
    return (
        <article>
            <h2>
                입력값 : {cnt} //  입력값 2배 : 
            </h2>
            <footer>
                <Link to="/" >입력페이지로 고고링</ Link>
            </footer>
        </article>
    );
}
export default CntDisp;