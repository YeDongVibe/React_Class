//import BoxRows from "./BoxRows";
import BoxRows1 from "./BoxRows1";
import './Boxes.css';
import style from './BoxRows.module.css'
import { useRef, useState, useEffect } from "react";

const Box = () => {

    const [mvlist, setMvlist] = useState();

    let cdt ;

    useEffect(() => {
        let yesterday = new Date(); //new Date()는 오늘 날짜로 세팅 된다.
        yesterday.setDate(yesterday.getDate() - 1); //오늘날짜에서 -1해서 어제 날짜로 변경.

        cdt = yesterday.getFullYear(); //년

        let month = yesterday.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        cdt = `${cdt}${month}`; //월

        let day = yesterday.getDate();
        day = day < 10 ? `0${day}` : day;
        cdt = `${cdt}${day}` ; //일
        dt1.current.value = `${yesterday.getFullYear()}-${month}-${day}`; //어제 날짜로 기본값 설정.
        getData(cdt);
    }, []);

    //날짜 입력창
    const dt1 = useRef();

    //fetch 함수(데이터 가져오기)
    const getData = (cdt) => {
        let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=';
        url +=cdt;
        console.log("url = ", url);

        fetch(url)
        .then((resp) => resp.json())
        .then((data) =>setMvlist(data.boxOfficeResult.dailyBoxOfficeList))
        .catch((err) => console.log(err));
    }
   
    //날짜 선택
    const getDt = (cdt) => {
        cdt = dt1.current.value.replaceAll('-',''); //****-**-**에서 - 뺴기
        
        getData(cdt);
        
    }

    
    
    //만약 셀 병합을 하고 싶으면 행은 : colspan으로 묶고, 열 : rowspan으로 묶기
    return (
        <main className="container">
            <article>
                <header><h1>일일박스오피스</h1></header>
                <input ref = {dt1} type = "date" id = "dt1" name = "dt1" onChange = {() => getDt()}/>
                
                
                <table>
                    <thead>{/* 시멘틱테크 */}
                        <tr>{/* tr: 행 // td : 열*/}
                            <th className = {style.th9}>순위</th>
                            <th className = {style.th9}>영화명</th>
                            <th className = {style.th9}>매출액</th>
                            <th className = {style.th9}>증감</th>
                        </tr>
                    </thead>
                        {/* <BoxRows mv={mvlist} /> */}
                        {mvlist && <BoxRows1 mv = {mvlist} />}
                </table>
            </article>
        </main>
    );

}

export default Box;