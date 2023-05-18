import { BrowserRouter, Routes, Route } from "react-router-dom";

import UltraSrtFcst from './UltraSrtFcst';
import VilageFcst from './VilageFcst';
import FcstMain from "./FcstMain";
import FcstNav from "./FcstNav";
// import FcstTable from './FcstTable'

const Fcst = () => {
    return (
        <BrowserRouter>
            <main className="container">
                <FcstNav />
                <Routes>
                    <Route path="/" element={<FcstMain />} />
                    <Route path="/ultra" element={<UltraSrtFcst />} />
                    <Route path="/vilage" element={<VilageFcst />} />
                </Routes>
            </main>
        </BrowserRouter>
    );

}
export default Fcst;