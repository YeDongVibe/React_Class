import MyClockTime from "./MyClockTime";
import MyClockImg from "./MyClockImg";
//import MyClockDate from "./MyClockDate";
import './MyClock.css';

const MyClock = () => {

    return (
        <main className='container'>
            <article data-theme="dark">
                <MyClockImg />
                {/* <MyClockDate/> */}
                <MyClockTime />
            </article>
        </main>
    );

}
export default MyClock;