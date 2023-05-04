const TaccidentNav2 = ({ c2, csel1, csel2, setCsel2, selData, setSelData }) => {

    //두번째 Nav바 만들기(중분류)
    const cTag2 = c2.filter((item) => (item[0] === csel1));
    console.log(cTag2);

    const ccTag2 = cTag2.map((item) =>
        <li key={item}>
            <button onClick={() => setCsel2(item)}>{item[1]}</button>
        </li>
    );

    // let cdata = {};
    // cdata = Object.map((item) => 
    //     <div className="grid" {selData}></div>
    // );


    return (
        <article>
            <header>
                <nav>
                    <ul>
                        <li><strong>🚔사고유형 : 중분류</strong></li>
                    </ul>
                    <ul>
                        <div className="cc">
                            {ccTag2}
                        </div>
                    </ul>
                    <ul>
                        <div className="cc">
                            {/*{cdata}*/}
                        </div>
                    </ul>
                </nav>
            </header>
        </article>
    );

}

export default TaccidentNav2;