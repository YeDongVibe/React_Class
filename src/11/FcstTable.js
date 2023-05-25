import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from './Fcst.module.css';


const FcstTable = ({ datas, codeData }) => {
    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;

    let year = dt.slice(0, 4);
    let month = dt.slice(4, 6);
    let day = dt.slice(6, 8);

    console.log("datas", datas);
    console.log("codeData", codeData);

    const ultraCode = codeData.filter((datas) => datas["예보구분"] === "초단기예보");
    const vilageCode = codeData.filter((datas) => datas["예보구분"] === "단기예보");

    const [tags, setTags] = useState();




    useEffect(() => {

        //temp를 필터걸어서 밑에 temp.map해주기
        let temp = datas.map((i, idx) => 
            <tr>
                <td className = {style.std}>{i.category}</td>
                <td className = {style.std}>{i.fcstDate}</td>
                <td className = {style.std}>{i.fcstTime}</td>
                <td className = {style.std}>{i.fcstValue}</td>
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
                            <h1 className={style.short}>📣초단기예보</h1>
                            <h3 className={style.dts}> {year}-{month}-{day} {area}</h3>
                        </div>
                        <select onChange={(e) => setTags(e.target.value)}>
                        {ultraCode.map((code) => (
                            <option value={code["항목값"]} key={code["항목값"]}>
                                {code["항목명"]}({code["항목값"]})
                            </option>
                        ))}
                    </select>
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
                            {tags}
                        </tbody>

                    </table>
                </article>
            </main>
        );
    }
export default FcstTable;