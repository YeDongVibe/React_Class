
//probs함수를 사용하여 나타내기.
//const MyDivArticle = (probs) => {
// 매게 변수를 probs 사용하지 않고 오브젝트에 매개변수명을 넣어서 사용.
const MyDivArticle = ({ aname }) => {
    //const aname = probs.aname;

    let n = (aname === undefined) ? '0' : aname.slice(-1); {/* 삼항 연산자 : aname을 n으로 선언하여 끝부분을 잘라내고 0 삽입*/ }

    return (

        <article>
            <header><h1>{aname || 'MyDiv0'}</h1></header> {/*Falsy 연산자 : 아무것도 없을 때 이렇게 쓰면 MyDiv0로 표시된다. */}
            <ul>
                <li>{n === '0' ? 'MyDiv0' : 'MyDiv' + n }1</li> {/* 삼항연산자로 이용 */}
                <li>{'MyDiv' + n }2</li>
                {/* <li>{aname || 'MyDiv0' + '1'}</li> {aname}1 이라고 써도 무관. */}
                {/* <li>{'MyDiv' + n}2</li> */}
            </ul>
        </article>
    );
}

export default MyDivArticle;