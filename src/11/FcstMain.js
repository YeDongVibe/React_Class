import { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import style from './Fcst.module.css'


import UltraSrtFcst from './UltraSrtFcst';
import VilageFcst from './VilageFcst';
import Fcst from "./Fcst";
// import FcstNav from "./FcstNav";
// import FcstTable from './FcstTable'

import xy from  './getxy.json';

const FcstMain = () => {
    //날짜 선택창 만들기
    const dt = useRef();

    useEffect(() => {
        let day = new Date();

    });

    const getDt = (day) => {
        day = dt.current.value();
    };

    //지역 선택창 만들기
    const ops = xy.map((item) => 
        <option value={item["행정구역코드"]} key={item["행정구역코드"]}>{item["1단계"]}</option>
    );

    //데이터 가져오기(x,y)
    const getData = () => {
        let codt = ["격자 X", "격자 Y"];
        let codtob = {};
        codt.map((item) => codtob[xy[item]])
        console.log("codt", codt);
    };



    return (
        <main className="container">
            <article>
                <form>
                    <header>
                        <h1>📊단기예보 선택👆🏼</h1>
                    </header>

                    <div className="grid">
                        <div>
                            <input ref = {dt} type = "date" id = "dt" name = "dt" onChange = {() => getDt()}/>
                        </div>
                        <div>
                            <select id = 'sel' name="sel">
                                <option value = ''>선택</option>
                                {ops}
                                </select>
                        </div>
                    </div>
                    <div className="grid">
                        <Link to='/ultra' role='button'>📢초단기예보</Link>
                        <Link to='/vilage' role='button'>📣단기예보</Link>
                    </div>
                </form>
            </article>
        </main>

    );

}
export default FcstMain;