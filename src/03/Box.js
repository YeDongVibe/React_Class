//import BoxRows from "./BoxRows";
import BoxRows1 from "./BoxRows1";
import './Boxes.css';

const Box = () => {

    let mvlist = [ //배열안에 object가 10개 있음
        {
            "rnum": "1",
            "rank": "1",
            "rankInten": "0",
            "rankOldAndNew": "OLD",
            "movieCd": "20231089",
            "movieNm": "존 윅 4",
            "openDt": "2023-04-12",
            "salesAmt": "416368610",
            "salesShare": "37.6",
            "salesInten": "-18390858",
            "salesChange": "-4.2",
            "salesAcc": "9595409959",
            "audiCnt": "41361",
            "audiInten": "-2051",
            "audiChange": "-4.7",
            "audiAcc": "915156",
            "scrnCnt": "1315",
            "showCnt": "3622"
        },
        {
            "rnum": "2",
            "rank": "2",
            "rankInten": "0",
            "rankOldAndNew": "OLD",
            "movieCd": "20226270",
            "movieNm": "스즈메의 문단속",
            "openDt": "2023-03-08",
            "salesAmt": "142284553",
            "salesShare": "12.9",
            "salesInten": "-15126729",
            "salesChange": "-9.6",
            "salesAcc": "48980254937",
            "audiCnt": "14449",
            "audiInten": "-1701",
            "audiChange": "-10.5",
            "audiAcc": "4760500",
            "scrnCnt": "785",
            "showCnt": "1888"
        },
        {
            "rnum": "3",
            "rank": "3",
            "rankInten": "1",
            "rankOldAndNew": "OLD",
            "movieCd": "20226489",
            "movieNm": "리바운드",
            "openDt": "2023-04-05",
            "salesAmt": "99027901",
            "salesShare": "8.9",
            "salesInten": "-5949430",
            "salesChange": "-5.7",
            "salesAcc": "5070911452",
            "audiCnt": "11303",
            "audiInten": "-374",
            "audiChange": "-3.2",
            "audiAcc": "527919",
            "scrnCnt": "619",
            "showCnt": "1254"
        },
        {
            "rnum": "4",
            "rank": "4",
            "rankInten": "-1",
            "rankOldAndNew": "OLD",
            "movieCd": "20225865",
            "movieNm": "옥수역귀신",
            "openDt": "2023-04-19",
            "salesAmt": "95791000",
            "salesShare": "8.7",
            "salesInten": "-39620800",
            "salesChange": "-29.3",
            "salesAcc": "235542800",
            "audiCnt": "9682",
            "audiInten": "-4450",
            "audiChange": "-31.5",
            "audiAcc": "24434",
            "scrnCnt": "271",
            "showCnt": "807"
        },
        {
            "rnum": "5",
            "rank": "5",
            "rankInten": "1",
            "rankOldAndNew": "OLD",
            "movieCd": "20200154",
            "movieNm": "킬링 로맨스",
            "openDt": "2023-04-14",
            "salesAmt": "66868080",
            "salesShare": "6.0",
            "salesInten": "517633",
            "salesChange": "0.8",
            "salesAcc": "964932624",
            "audiCnt": "7886",
            "audiInten": "417",
            "audiChange": "5.6",
            "audiAcc": "100751",
            "scrnCnt": "620",
            "showCnt": "1388"
        },
        {
            "rnum": "6",
            "rank": "6",
            "rankInten": "-1",
            "rankOldAndNew": "OLD",
            "movieCd": "20231244",
            "movieNm": "렌필드",
            "openDt": "2023-04-19",
            "salesAmt": "51027439",
            "salesShare": "4.6",
            "salesInten": "-40264318",
            "salesChange": "-44.1",
            "salesAcc": "195541196",
            "audiCnt": "5405",
            "audiInten": "-4420",
            "audiChange": "-45",
            "audiAcc": "21023",
            "scrnCnt": "531",
            "showCnt": "1476"
        },
        {
            "rnum": "7",
            "rank": "7",
            "rankInten": "0",
            "rankOldAndNew": "OLD",
            "movieCd": "20228555",
            "movieNm": "더 퍼스트 슬램덩크",
            "openDt": "2023-01-04",
            "salesAmt": "36111041",
            "salesShare": "3.3",
            "salesInten": "-3002777",
            "salesChange": "-7.7",
            "salesAcc": "47035293545",
            "audiCnt": "3469",
            "audiInten": "-252",
            "audiChange": "-6.8",
            "audiAcc": "4511807",
            "scrnCnt": "238",
            "showCnt": "336"
        },
        {
            "rnum": "8",
            "rank": "8",
            "rankInten": "0",
            "rankOldAndNew": "NEW",
            "movieCd": "20231004",
            "movieNm": "65",
            "openDt": "2023-04-20",
            "salesAmt": "20621567",
            "salesShare": "1.9",
            "salesInten": "20621567",
            "salesChange": "100",
            "salesAcc": "23091567",
            "audiCnt": "2145",
            "audiInten": "2145",
            "audiChange": "100",
            "audiAcc": "2392",
            "scrnCnt": "462",
            "showCnt": "756"
        },
        {
            "rnum": "9",
            "rank": "9",
            "rankInten": "0",
            "rankOldAndNew": "NEW",
            "movieCd": "20070202",
            "movieNm": "초속5센티미터",
            "openDt": "2007-06-21",
            "salesAmt": "17997600",
            "salesShare": "1.6",
            "salesInten": "17997600",
            "salesChange": "100",
            "salesAcc": "306147229",
            "audiCnt": "2016",
            "audiInten": "2016",
            "audiChange": "100",
            "audiAcc": "49859",
            "scrnCnt": "32",
            "showCnt": "32"
        },
        {
            "rnum": "10",
            "rank": "10",
            "rankInten": "-1",
            "rankOldAndNew": "OLD",
            "movieCd": "20100312",
            "movieNm": "인셉션",
            "openDt": "2010-07-21",
            "salesAmt": "29810500",
            "salesShare": "2.7",
            "salesInten": "-17119500",
            "salesChange": "-36.5",
            "salesAcc": "44938993940",
            "audiCnt": "1683",
            "audiInten": "-1095",
            "audiChange": "-39.4",
            "audiAcc": "6003108",
            "scrnCnt": "21",
            "showCnt": "64"
        }
    ]

    return (
        <main className="container">
            <article>
                <header><h1>일일박스오피스</h1></header>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">순위</th>
                            <th scope="col">영화명</th>
                            <th scope="col">매출액</th>
                            <th scope="col">증감</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* <BoxRows mv={mvlist} /> */}
                        <BoxRows1 mv={mvlist} />
                    </tbody>
                    <tfoot>
                    
                    </tfoot>
                </table>
            </article>
        </main>
    );

}

export default Box;