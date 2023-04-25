import './Boxes.css';

const BoxRows1 = ({ mv }) => {
    //const BoxRows = (probs) => { //내가 속성값을 만들어 그 속성값에 해당하는 데이터 전달.
    //const mvlist = [...probs.mv]; // ... : 배열을 나열. // probs.변수명 : 어떠한 값을 컴포넌트에 전달.

    const showMv = (row) => {
        console.log(row);
    }


    let trTags = [];
    for (let row of mv) { //배열 순환
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten);

        let icon ;
        let inten = parseInt(row.rankInten)
        if (inten === 0) icon = '⏺';
        else if (inten < 0) icon = '🔼';
        else icon = '🔽';


        trTags.push(
            //onclick 이벤트를 추가.
            <tr className = 'mytr' key = {row.movieCd} onClick={()=>showMv(row)}>
                <td>{row.rank}</td>
                <td>{row.movieNm}</td>
                <td>{parseInt(row.salesAmt).toLocaleString()}</td>
                <td>{icon}{Math.abs(inten)}</td>
                {/* inten ==0 ? '':{Math.abs(inten)  : 0이면 아무것도 표시 안하고 나머진는 숫자 표시*/}
            </tr>
        );
        console.log(trTags)
    }

    return (
        <>
        <tbody>{trTags}</tbody>
        <tfoot>
            <td colSpan={4}>결과출력</td>
        </tfoot>
        
        </>
    );

}

export default BoxRows1;