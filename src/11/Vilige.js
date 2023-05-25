import { useState, useEffect } from "react"
import FcstTable from "./FcstTable";

const Vilige = () => {
    //useStateq변수 :변수값이 변경되면 재랜더링, 컴포넌트에서만 변경가능
    const [items, setItems] = useState();


    useEffect(() => {

        let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?';
        url = url + "serviceKey=VVOmSStfN2wJSHEf%2BdtpJXmiBOUek6SBLCa3ue%2BfX1qCYUMmwRU13VFK6bcrNTm6XpOMTYs1Z77cRmRno%2BYqkg%3D%3D";
        url = url + "&numOfRows=900&pageNo=1";
        url = url + "&base_date=20230524";
        url = url + "&base_time=0500";
        url = url + "&nx=55&ny=127";
        url = url + "&dataType=json"
        console.log(url);

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setItems(data.response.body.items.item))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {items && <FcstTable items = {items} gubun = '단기예보' />}
        </>
    );
}
export default Vilige;