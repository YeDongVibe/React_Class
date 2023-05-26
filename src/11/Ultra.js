import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import FcstTable from "./FcstTable";

const Ultra = () => {
    //useState변수 :변수값이 변경되면 재랜더링, 컴포넌트에서만 변경가능
    const [items, setItems] = useState();

    const dt = useParams().dt;
    const x = useParams().x;
    const y = useParams().y;


    useEffect(() => {

        let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?`;
        url = url + `serviceKey=VVOmSStfN2wJSHEf%2BdtpJXmiBOUek6SBLCa3ue%2BfX1qCYUMmwRU13VFK6bcrNTm6XpOMTYs1Z77cRmRno%2BYqkg%3D%3D`;
        url = url + `&numOfRows=100&pageNo=1`;
        url = url + `&base_date=${dt}`;
        url = url + `&base_time=0600`;
        url = url + `&nx=${x}&ny=${y}`;
        url = url + `&dataType=json`;
        console.log(url);

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setItems(data.response.body.items.item))
            .catch((err) => console.log(err));
            // eslint-disable-next-line
    }, []);



    return (
        <>
            {items && <FcstTable items = {items} gubun = '초단기예보' />}
        </>
    );
}
export default Ultra;