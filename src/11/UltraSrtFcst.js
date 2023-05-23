import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import codeData from './getcode.json';
import FcstTable from './FcstTable';
import style from './Fcst.module.css'



const UltraSrtFcst = () => {
    const [datas, setDates] = useState(); 

    //useparams로 넘어온 값들은 변수화 시켜 이용할 예정.
    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y; 

    let year = dt.slice(0,4);
    let month = dt.slice(4,6);
    let day= dt.slice(6,8);

    const ultraCode = codeData.filter((i) => i["예보구분"] === "초단기예보");


    useEffect(() => {
        let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=VVOmSStfN2wJSHEf%2BdtpJXmiBOUek6SBLCa3ue%2BfX1qCYUMmwRU13VFK6bcrNTm6XpOMTYs1Z77cRmRno%2BYqkg%3D%3D&numOfRows=60&pageNo=1&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}&dataType=json`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => setDates(data.response.body.items.item))
            .catch((e) => console.log(e));
    }, []);


    return (
        <>
       {datas && <FcstTable datas={datas} codeData={ultraCode} />}
       </>

    );
}
export default UltraSrtFcst;