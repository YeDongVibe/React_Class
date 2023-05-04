import style from "./Ta.module.css";

const TaccidentDetail = ({ selData }) => {
    console.log('detail',  Object.keys(selData));

    const tagKey = ['사고건수', '사망자수', '중사자수', '경상자수','부상신고자수'];

    let tags = tagKey.map((k, idx) => 
        <div  className={style.grid} key = {'k' + idx}>{k} {selData[k]}</div>
    )

    // const ccTag3 = Object.keys(selData).map((item)=>{
    //     <li>
    //         {selData[item]};
    //     </li>
    // });

    return (
        <div className="grid">
            {tags}
        </div>
    );
}
export default TaccidentDetail;