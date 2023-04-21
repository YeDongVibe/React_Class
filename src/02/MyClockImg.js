import logo from '../logo.svg';

const MyClockImg = () => {

    return (
        <div>
            {/* 로고(이미지) 넣는 방법  */}
            {<img src={logo} className='App-logo' alt='logo' />}
        </div>
    );

}
export default MyClockImg;