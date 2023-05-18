import { useLocation } from "react-router-dom";
import qs from 'query-string';

const RoutePage2 = () => {
    //search는 useLocation에서 정보를 받아옴.
    const loc = useLocation().search;
    console.log("loc = ",loc);
    //loc = ?item=%F0%9F%8D%91&item2=%F0%9F%8D%92 이기에 여기에 해당하는 아이템을 qs가 가져옴.
    
    //useLocation()을 사용하지 않으면 아래의 코드처럼 하나하나 나누어 배열화하여 적용해야함.(문자열 나누기)
    // let loc2 = loc.replace('?','');
    // loc2 = loc2.split('&');
    // loc2 = loc2.map((i) => i.split('='));
    // console.log("loc2 = ", loc2);

    const item = qs.parse(loc).item;
    const item2 = qs.parse(loc).item2;
    console.log("item = ",item);
    console.log("item = ",item2);

    return(
        <article>
            <header>
                <h1>RoutePage2</h1>
            </header>
        </article>
    );
}
export default RoutePage2;