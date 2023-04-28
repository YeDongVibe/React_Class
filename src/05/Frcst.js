//배열 : [~,~,~]
//배열의 자료추가 : push
//오브젝트 : {키1 : 값1, 키2 : 값2}
//오브젝트의 자료 추가 : 오브젝트 이름[키] = [넣고싶은 값] => 이렇게 하면 {키1 : 넣고싶은값, 키2 : 값2} 이렇게 바뀜


import data from './dataFrcst.json'
import style from './Frcst.module.css'
import { useState } from 'react';

const Frcst = () => {

    const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];//배열로 구성하였기에 map,filter을 활용해 돌릴 수 있음.
    dtKey.map((item) => console.log('dt', data[item]));
    const cnKey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];
    cnKey.map((item) => console.log('cn', data[item]));
    //console.log(data);

    let dtcn = {}; //dt랑 cn이랑 합치기
    dtKey.map((item, idx) => dtcn[data[item]] = data[cnKey[idx]]); //객체 생성. //idx : 위치값(0,1,2,3)
    //console.log(dtcn);

    //상세정보
    //state 변수 2단계 : 변수선언
    const [bodyTag, setBodyTag] = useState(''); //usestate를 사용하기 위해 변수 선언
    const [selDt, setselDT] = useState();
    const detail = (k) => {
        //state 변수 3단계 : 값 변경
        let btem = dtcn[k].split(','); //문자 배열 ',' 기준으로 나누기
        setselDT(k);
        btem = btem.map((item) => item.split(':'));
        btem = btem.map((item) =>
            <div key={item[0]}>
                <span className={style.sp1}>{item[0]}</span>
                {item[1].trim() === '낮음' ? <span className={style.sp21}>{item[1]} 😍</span>
                    : item[1].trim() === '보통' ? <span className={style.sp22}>{item[1]} 😉</span>
                        : <span className={style.sp23}>{item[1]} 🤬</span>}
            </div>);
//state 변수 3단계 : 값 변경
setBodyTag(btem);

console.log(btem);
    }


let dtTag = [];
dtTag = Object.keys(dtcn).map((item, idx) => //map으로 만들어진 결과는 배열.
    <div role='button' key={'dt' + idx} className={selDt === item ? style.bt1 : style.bt} onClick={() => detail(item)}> {item} </div >
);

return (

    <main className='container'>
        <article className={style.art}>
            <header>
                <h1>Cho!! 미세먼지 주우간 예보 🕵️‍♀️</h1>
                <div className='grid'>
                    {dtTag}
                </div>
            </header>
            <div className='grid'>
                {bodyTag}
            </div>
        </article>
    </main>
);

}
export default Frcst;