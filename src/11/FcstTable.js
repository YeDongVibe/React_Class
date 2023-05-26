import { useState, useEffect, useRef } from "react"
import { useParams } from "react-router-dom";
import code from "./getcode.json"
import style from './Fcst.module.css'

const FcstTable = ({ items, gubun}) => {
    //useState변수 :변수값이 변경되면 재랜더링, 컴포넌트에서만 변경가능

    const area = useParams().area;
    const dt = useParams().dt;
    
    let year = dt.slice(0,4);
    let month = dt.slice(4,6);
    let day= dt.slice(6,8);


    const [trTags, setTrTags] = useState();
    const [opTags, setOpTags] = useState();
    const sel = useRef();
    useEffect(() => {
        let tempcd = code.filter((i) => i["예보구분"] === gubun);
        // console.log("code", code);
        tempcd = tempcd.map((i) =>
            <option key={i["항목값"]} value={i["항목값"]}>{i["항목명"]}({i["항목값"]})</option>
        );
        setOpTags(tempcd);


    }, [gubun]);


    const showItem = (e) => {
        e.preventDefault();

        if (items === undefined) return;
        let temp = items.filter((i) => i.category === sel.current.value);
        let tempcd = code.filter((i) => i["예보구분"] === gubun && i["항목값"] === sel.current.value);
        tempcd = tempcd[0]
        let skyobj = { "1": "🌞", "3": "⛅", "4": "☁" }
        let ptyobj = { "0": "❌", "1": "☔", "2": "☔/🌨", "3": "🌨", "5": "💧", "6": "빗방울날림", "7": "눈날림" }
        temp = temp.map((i, idx) =>
            <tr key={i.category + idx}>
                <td className = {style.std}>{tempcd["항목명"]}</td>
                <td className = {style.std}>{i.fcstDate.slice(0, 4)}-{i.fcstDate.slice(4, 6)}-{i.fcstDate.slice(6, 8)}</td>
                <td className = {style.std}> {i.fcstTime.slice(0, 2)} : {i.fcstTime.slice(2, 4)}</td>
                <td className = {style.std}>
                    {(i.category === "SKY") ? skyobj[i.fcstValue]
                        : (i.category === "PTY") ? ptyobj[i.fcstValue] :
                            i.fcstValue + tempcd["단위"]}

                </td>

            </tr>

        );

        setTrTags(temp);

    }
    return (
        <main className="container">
            <article>
                <header>
                    <form>
                        <div className="grid">
                            <h2 className = {style.short}> 📢기상청 {gubun} </h2>
                            <h3 className= {style.dts}> {year}-{month}-{day} {area}</h3>
                            </div>
                            <div>
                                <select ref={sel} id="sel" name="sel" onChange={showItem}>
                                    <option val="">고르시오</option>
                                    {opTags}
                                </select>
                            </div>

                    </form>
                </header>
                <table>
                    <thead>
                        <tr>
                            <th scope="col" className = {style.slist}>자료구분 코드</th>
                            <th scope="col" className = {style.slist}>예측일자</th>
                            <th scope="col" className = {style.slist}>예측시간</th>
                            <th scope="col" className = {style.slist}>예보 값</th>

                        </tr>
                        {items && trTags}
                    </thead>
                </table>
            </article>
        </main>



    );
}
export default FcstTable;