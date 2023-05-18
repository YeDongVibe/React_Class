//Route를 사용이 a href사용 불가. 그래서아래와 같이 Link를 import해서 사용해야함.
import { Link } from "react-router-dom";

const RouteNav = () => {
    return(
        <nav>
            <ul>
                {/* 클릭하면 각 페이지로 이동하도록 만들기 */}
                <li><Link to = '/' role = "button">Home</ Link></li>
                <li><Link to = '/Page1/🍋' role = "button">RoutePage1</ Link></li>
                <li><Link to = '/Page2?item=🍑&item2=🍒' role = "button">RoutePage2</ Link></li>
            </ul>
        </nav>
    );
}
export default RouteNav;