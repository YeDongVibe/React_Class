const MyClockDate = () => {

    let myDate = new Date().toLocaleDateString();
    /*let myDate = new Date().toDateString(); : 영어로 표시*/

    return (
        <footer>
            <hgroup>
                {/*변수를 쓸 때 {변수명} 이렇게 쓰기*/}
                <h1>{myDate}</h1>
            </hgroup>
        </footer>

    );

}
export default MyClockDate;