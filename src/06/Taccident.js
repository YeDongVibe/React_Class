import dataT from "./dataTaccident.json";
import TaccidentNav1 from "./TaccidentNav1";

const Taccident = () => {

    const dt = dataT.data;
    //console.log(dt); // =console.log(['data']);

    let c1 = dt.map((item) => item.사고유형_대분류);
    //let c1 = dt.map((item) => item["사고유형_대분류"]); //"사고유형_대분류"를 뽑는 방법.
    // eslint-disable-next-line 
    c1 = [...new Set(c1)]; //중복 데이터 제거 후 배열로 변경 // 원래 Set 사용시 {}로 표시하는데 [... ~ Set ~]으로 사용시 배열로 변경됨.

    let setc = dt.map((item) => [item["사고유형_대분류"], item["사고유형_중분류"]]); //대분류, 중분류 세트로 하나씩 배열로 만들기
    console.log('setc', setc);

    //위의 setc를 구현하기 위한 원론적인 방법.
    // let temp = [];
    // const c2 = [];
    // for(let item of dataT) {
    //     temp.push(item.사고유형_대분류);
    //     temp.push(item.사고유형_중분류);
    //     c2.push(temp);
    // }




    return (
        <main className='container'>
            <article>
                <header>
                    <TaccidentNav1 c1 = {c1} />
                </header>
            </article>
        </main>
    );
}

export default Taccident;