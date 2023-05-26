import { BrowserRouter, Routes, Route } from "react-router-dom";

import Ultra from "./Ultra";
import Vilige from "./Vilige";
import FcstMain from "./FcstMain";
import FcstNav from "./FcstNav";


const Fcst = () => {

    return (
        <BrowserRouter>
            <main className="container">
                <FcstNav />
                <Routes>
                    <Route path="/" element={<FcstMain />} />
                    <Route path="/ultra/:dt/:area/:x/:y" element={<Ultra />} />
                    <Route path="/Vilige/:dt/:area/:x/:y" element={<Vilige />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}
export default Fcst;
