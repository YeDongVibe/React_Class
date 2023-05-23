import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import codeData from './getcode.json';
import FcstTable from './FcstTable';
import style from './Fcst.module.css'



const UltraSrtFcst = () => {
    const [data, setDate] = useState();
    const [category, setCategory] = useState();

    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;

    let year = dt.slice(0,4);
    let month = dt.slice(4,6);
    let day= dt.slice(6,8);



    const ultraCode = codeData.filter((data) => data["예보구분"] === "초단기예보");

    const getData = () => {
        let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=VVOmSStfN2wJSHEf%2BdtpJXmiBOUek6SBLCa3ue%2BfX1qCYUMmwRU13VFK6bcrNTm6XpOMTYs1Z77cRmRno%2BYqkg%3D%3D&numOfRows=60&pageNo=1&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}&dataType=json`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => setDate(data.response.body.items.item))
            .catch((e) => console.log(e));

    };


    useEffect(() => {
        getData();
         // eslint-disable-next-line
    }, []);


    return (
        <main>
            <article>
                <header>
                    <div className="grid">
                    <h1 className = {style.short}>📢초단기예보</h1>
                    <h3 className= {style.dts}> {year}-{month}-{day} {area}</h3>
                    </div>
                    <select onChange={(e) => setCategory(e.target.value)}>
                        {ultraCode.map((code) => (
                            <option value={code["항목값"]} key={code["항목값"]}>
                                {code["항목명"]}({code["항목값"]})
                            </option>
                        ))}
                    </select>
                </header>
                {data && <FcstTable data={data} category={category} codeData={ultraCode} />}
            </article>
        </main>

    );
}
export default UltraSrtFcst;