import style from "./Ta.module.css";

const TaccidentNav1 = ({ c1, csel1, setCsel1 }) => {

    //첫번째 Nav바 만들기(대분류)
    const cTag = c1.map((item) =>
        <li key={item}>
            <button className = {style.bt1} onClick={() => setCsel1(item)}>{item}</button>
        </li>
    );



    return (
        <article>
            <h2>🚔사고유형 : 대분류</h2>
            <nav>
                <ul>
                    <div className={style.cc2}>
                        {cTag}
                    </div>
                </ul>
            </nav>

        </article>
    );
}

export default TaccidentNav1;