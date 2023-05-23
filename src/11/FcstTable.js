import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from './Fcst.module.css';


const FcstTable = ({ datas, codeData }) => {
    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;

    let year = dt.slice(0,4);
    let month = dt.slice(4,6);
    let day= dt.slice(6,8);

    console.log(datas)
    //const [Cdata, setCData] = useState();
    const [tags, setTags] = useState();

    // console.log("data",data);
    // console.log("category",category);
    // console.log("codeData",codeData);

    // const sslist = Cdata.map((item, idx) => {
    //     return (<tr key={item.fcstValue + item.fcstTime + idx}>

    //         <td className={style.std}>{codeData.filter((code) => code.항목값 === item.category)[0]["항목명"]}</td>

    //         <td className={style.std}>
    //             {item.fcstDate.slice(0, 4)}-{item.fcstDate.slice(4, 6)}-{item.fcstDate.slice(6, 8)}
    //         </td>

    //         <td className={style.std}>
    //             {item.fcstTime.slice(0, 2)} : {item.fcstTime.slice(2, 4)}
    //         </td>

    //         <td className={style.std}>
    //             {codeData.filter((code) => code.항목값 === item.category)[0]["단위"]}
    //         </td>
    //     </tr>
    //     )
    // }
    // );


    useEffect(() => {
        //setCData(datas.filter((item) => { return item.category === category }));
        //temp를 필터걸어서 밑에 temp.map해주기
        let temp = datas.map((i) =>
            <tr>
                <td>{i.category}</td>
                <td>{i.fcstDate}</td>
                <td>{i.fcstTime}</td>
                <td>{i.fcstValue}</td>
            </tr>
        )
        console.log(temp)
        setTags(temp);
    }, [datas]);




    return (
        <main>
            <article>
                <header>
                    <div className="grid">
                        <h1 className={style.short}>📣단기예보</h1>
                        <h3 className={style.dts}> {year}-{month}-{day} {area}</h3>

                    </div>
                    <select onChange={(e) => setTags(e.target.value)}>
                        {vilageCode.map((code) => (
                            <option value={code["항목값"]} key={code["항목값"]}>
                                {code["항목명"]}({code["항목값"]})
                            </option>
                        ))}
                    </select>
                </header>
                <table>
                    <thead>
                        <tr>
                            <th scope="col" className={style.slist}>항목명</th>
                            <th scope="col" className={style.slist}>예측일자</th>
                            <th scope="col" className={style.slist}>예측시간</th>
                            <th scope="col" className={style.slist}>예보 값</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {Cdata && sslist} */}
                        {tags}
                    </tbody>

                </table>
            </article>
        </main>
    );
}
export default FcstTable;