import { useState } from "react";

const MyClockTime1 = () => {
    /*변수 = 시간 함수*/
    //let myTime = new Date().toLocaleTimeString();
    let t = new Date().toLocaleTimeString();
    let myDate = new Date().toLocaleDateString();
    /*let myDate = new Date().toDateString(); : 영어로 표시*/
    let cnt = 0;
    const [myTime, setMyTime] = useState(t);
    //sett


    return (
        <footer>
            <hgroup>
                {/*변수를 쓸 때 {변수명} 이렇게 쓰기*/}
                <h1>{myTime}</h1>
                <h2>{myDate}</h2>
            </hgroup>
        </footer>

    );

}
export default MyClockTime1;