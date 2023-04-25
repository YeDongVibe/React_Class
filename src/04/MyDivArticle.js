//전체적으로 css 적용
//import "./MyDiv.css";

//component에 css 적용 : 스타일 이름(className)주기
import style from "./MyDiv.module.css";

//State변수 사용 1단계
import { useState } from "react";


//probs함수를 사용하여 나타내기.
//const MyDivArticle = (probs) => {

// 매게 변수를 probs 사용하지 않고 오브젝트에 매개변수명을 넣어서 사용.
const MyDivArticle = ({ aname }) => {
    //const aname = probs.aname;

    let n = (aname === undefined) ? '0' : aname.slice(-1);
    /* 삼항 연산자 : aname을 n으로 선언하여 끝부분을 잘라내고 0 삽입*/

    //let cnt = 0; {/*click 이벤트를 위한 cnt 변수 삽입*/}

    //State변수 사용 2단계
    //구조를 분해해 값을 받음.
    const [cnt, setCnt] = useState(0);

    //Click 이벤트 처리
    const likeBt = (n) => {
        //cnt = cnt + 1; {/*onclick 이벤트에서 cnt값을 증가*/}
        //State변수 사용 2단계
        setCnt(cnt + 100);

        console.log(cnt);
    }

    return (

        <article>
            <header><h1 className={style.mah1}>{aname || 'MyDiv0'}</h1></header> {/*Falsy 연산자 : 아무것도 없을 때 이렇게 쓰면 MyDiv0로 표시된다. */}
            <ul className={style.maul}>
                <li className={style.mali}>{n === '0' ? 'MyDiv0' : 'MyDiv' + n}1</li> {/* 삼항연산자로 이용 */}
                <li className={style.mali}>{'MyDiv' + n}2</li>
                {/* <li>{aname || 'MyDiv0' + '1'}</li> {aname}1 이라고 써도 무관. */}
                {/* <li>{'MyDiv' + n}2</li> */}
            </ul>
            {/* thruthy : 조건이 참일 때 아래의 내용을 실행*/}
            {n === '1' &&
                <footer>
                    <h2><span onClick={() => likeBt(1)}>💜</span>  {cnt} </h2>
                </footer>
            }
        </article >
    );
}

export default MyDivArticle;