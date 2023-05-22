import { useParams } from "react-router-dom";

import codeData from './getcode.json';
import FcstTable from './FcstTable';
import { useEffect, useState } from "react";


const UltraSrtFcst = () => {
    const [data, setDate] = useState();

    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;



    const ultraCode = codeData.filter((data) => data["예보구분"] === "초단기예보");

    const getData = () => {
        let url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=VVOmSStfN2wJSHEf%2BdtpJXmiBOUek6SBLCa3ue%2BfX1qCYUMmwRU13VFK6bcrNTm6XpOMTYs1Z77cRmRno%2BYqkg%3D%3D&numOfRows=10&pageNo=1&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}&_type=json`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data.response.body.items.item))
            .catch((e) => console.log(e));

    };

    useEffect(() => {
        getData();
    }, []);


    return (
        <main>
            <article>
                <header>
                    <h2>{area} {dt} 📢초단기예보 </h2>
                </header>
                <FcstTable />
            </article>
        </main>

    );
}
export default UltraSrtFcst;