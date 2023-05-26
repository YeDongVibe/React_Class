import { useRef, useState, useEffect } from "react";

import { Link } from 'react-router-dom';
import xy from  './getxy.json';

const FcstMain = () => {

    //state 변수 만들기
    const [dt, setDt] = useState();
    //const [code, setCode] = useState();
    const [area, setArea] = useState();
    const [x, setX] = useState();
    const [y, setY] = useState();

    const txt1 = useRef();
    const sel1 = useRef();

    //date가 변경되었을 때
    useEffect(() => {
    }, [dt]);

    //날짜 가져오기
    const getDt = () => {
        let tdt = txt1.current.value.replaceAll('-', '');

        setDt(tdt);
    };

    //지역 선택창 만들기
    const ops = xy.map((item) =>
        <option value={item["행정구역코드"]} key={item["행정구역코드"]}>{item["1단계"]}</option>
    );


    //지역 변경 시 데이터 가져오기
    const getSel = () => {
        let temp = xy.filter((item) => item["행정구역코드"] === parseInt(sel1.current.value))[0];
        setArea(temp["1단계"]);
        setX(temp["격자 X"]);
        setY(temp["격자 Y"]);
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
                            <input ref={txt1} type="date" id="dt" name="dt" onChange={() => getDt()} />
                        </div>
                        <div>
                            <select ref={sel1} id='local' name="local" onChange={() => getSel()}>
                                <option value=''>선택</option>
                                {ops}
                            </select>
                        </div>
                    </div>
                    <div className="grid">
                        <Link to={`/Ultra/${dt}/${area}/${x}/${y}`} role='button'>📢초단기예보</Link>
                        <Link to={`/Vilige/${dt}/${area}/${x}/${y}`} role='button'>📣단기예보</Link>
                    </div>
                </form>
            </article>
        </main>

    );
}
export default FcstMain;