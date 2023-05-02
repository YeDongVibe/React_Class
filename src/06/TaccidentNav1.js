const TaccidentNav1 = ({ c1, csel1, setCsel1 }) => {

    //첫번째 Nav바 만들기(대분류)
    const cTag = c1.map((item) =>
        <li key = {item}>
            <button onClick={() => setCsel1(item)}>{item}</button>
        </li>
    );



    return (
        <article>

            <nav>
                <ul>
                    <li><strong>🚔사고유형 : 대분류</strong></li>
                </ul>
                <ul>
                    {cTag}
                </ul>
            </nav>

        </article>
    );
}

export default TaccidentNav1;