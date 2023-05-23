import { useEffect, useState } from "react";
import style from './Fcst.module.css'



const FcstTable = ({data,category,codeData}) => {

    const [Cdata, setCData] = useState();

    console.log("data",data);
    console.log("category",category);
    console.log("codeData",codeData);



    useEffect(() => {
        setCData(data.filter((item) => {return item.category === category}));
    }, [category, data]);

    


    return (
        <table>
            <thead>
                <tr>
                    <th scope="col" className = {style.slist}>항목명</th>
                    <th scope="col" className = {style.slist}>예측일자</th>
                    <th scope="col" className = {style.slist}>예측시간</th>
                    <th scope="col" className = {style.slist}>예보 값</th>
                </tr>
            </thead>
            <tbody>
            {Cdata && Cdata.map((item,idx) => {return (<tr key={item.fcstValue + item.fcstTime + idx}>
            <td className = {style.std}>{codeData.filter((code) => code.항목값 === item.category)[0]["항목명"]}</td> 

            <td className = {style.std}>
                {item.fcstDate.slice(0,4)}-{item.fcstDate.slice(4,6)}-{item.fcstDate.slice(6,8)}
            </td>

            <td className = {style.std}>
                {item.fcstTime.slice(0,2)} : {item.fcstTime.slice(2,4)}
            </td>

            <td className = {style.std}>
                {codeData.filter((code) => code.항목값 === item.category)[0]["단위"]}
            </td>           
            </tr>
            )}
            )}
            </tbody>

        </table>
    );
}
export default FcstTable;