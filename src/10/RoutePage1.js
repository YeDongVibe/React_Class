//라우트에서 정보를 넘기는(Main) 페이지에서 파라미터를 넘기기 위해 아래를 선언.
import { useParams } from "react-router-dom";

const RoutePage1 = () => {
    //fruit라는 변수를 useParams를 통해 넘어옴.
    const fruit = useParams().item;

    return(
        <article>
            <header>
                <h1>RoutePage1</h1>
            </header>
            {fruit}
        </article>
    );
}
export default RoutePage1;