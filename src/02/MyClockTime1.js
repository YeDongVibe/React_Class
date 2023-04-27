//1. useState 함수를 사용하기 위해 import
import { useState } from "react";
import './MyClock.css';
import style from './MyClockTime.module.css'

const MyClockTime1 = () => {
    /*변수 = 시간 함수*/
    //let myTime = new Date().toLocaleTimeString();
    let t = new Date().toLocaleTimeString();
    let myDate = new Date().toLocaleDateString();
    /*let myDate = new Date().toDateString(); : 영어로 표시*/
   // let cnt = 0;

   //2.state 변수 선언 : usestate를 통해 배열을 가져온다 [상태 값을 저장한 변수, 갱신할때 사용하는 함수명]
    const [myTime, setMyTime] = useState(t);
   
    //로컬시간을 출력하기 위해서 함수형태를 이용하여 표현.
    //1초에 한번씩 state변수 변경
    setInterval(() => setMyTime(new Date().toLocaleTimeString()), 1000);


    return (
        <footer>
            <hgroup>
                {/*변수를 쓸 때 {변수명} 이렇게 쓰기*/}
                <h1>{myTime}</h1>
                <h2 id={style.maah2}>{myDate}</h2>
            </hgroup>
        </footer>

    );

}
export default MyClockTime1;
