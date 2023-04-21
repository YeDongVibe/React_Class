import './Boxes.css';

const BoxRows = ({ mv }) => {
    //const BoxRows = (probs) => { //내가 속성값을 만들어 그 속성값에 해당하는 데이터 전달.
    //const mvlist = [...probs.mv]; // ... : 배열을 나열. // probs.변수명 : 어떠한 값을 컴포넌트에 전달.


    let trTags = [];
    for (let row of mv) { //배열 순환
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten);

        let icon ;
        let inten = parseInt(row.rankInten)
        if (inten == 0) icon = '⏺';
        else if (inten < 0) icon = '🔼';
        else icon = '🔽';


        trTags.push(
            <tr className = 'mytr' key = {row.movieCd}>
                <td>{row.rank}</td>
                <td>{row.movieNm}</td>
                <td>{parseInt(row.salesAmt).toLocaleString()}</td>
                <td>{icon}{Math.abs(inten)}</td>
            </tr>
        );
        console.log(trTags)
    }

    return (
        <>
        {trTags}
        </>
    );

}

export default BoxRows;