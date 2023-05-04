import style from "./Ta.module.css";

const TaccidentNav2 = ({ c2, csel1, csel2, setCsel2, selData, setSelData }) => {

    //두번째 Nav바 만들기(중분류)
    const cTag2 = c2.filter((item) => (item[0] === csel1));
    //console.log(cTag2);

    const ccTag2 = cTag2.map((item) =>
        <li key={item}>
            <button className = {style.bt2} onClick={() => setCsel2(item)}>{item[1]}</button>
        </li>
    );


    return (
        <article>
            <h2>🚔사고유형 : 중분류</h2>
            <nav>
                <ul>
                    <div className={style.cc2}>
                        {ccTag2}
                    </div>
                </ul>
            </nav>
        </article>
    );

}

export default TaccidentNav2;