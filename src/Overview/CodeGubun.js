const CodeGubun = () => {
    
    //selItem이라는 함수를 만들어서 onChange 혹은 onClick이라는 이벤트가 발생했을 때의 동작을 실행하ㅁ
    const selItem = (e) => {
        console.log(e.target.value);
    }

    return (
        <>

            <form>
                {/* select는 option을 가짐 */}
                <select id="sel" name="sel" onChange={selItem}>
                    <option value="">선택하시구리구리 너구리🙉</option>
                    <option value="초단기예보">초단기예보</option>
                    <option value="단기예보">단기예보</option>
                </select>
            </form>

        </>
    );
}
export default CodeGubun;