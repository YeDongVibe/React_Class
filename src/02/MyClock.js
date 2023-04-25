//import MyClockTime from "./MyClockTime";
import MyClockTime1 from "./MyClockTime1";
import MyClockImg from "./MyClockImg";
//import MyClockDate from "./MyClockDate";
import './MyClock.css';

const MyClock = () => {

    return (
        <main className='container'>
            <article data-theme="dark">
                <MyClockImg />
                {/* <MyClockDate/> */}
                {/* <MyClockTime /> */}
                <MyClockTime1 />
            </article>
        </main>
    );

}
export default MyClock;