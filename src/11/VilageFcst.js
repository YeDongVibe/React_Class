import FcstTable from './FcstTable';
import { useParams } from "react-router-dom";

const VilageFcst = () => {
    return(
        <main>
            <article>
                <header>
                    <h1>vilage</h1>
                </header>
                <FcstTable />
            </article>
        </main>
    );
}
export default VilageFcst;