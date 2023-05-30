import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CntDisp from "./CntDisp";
import CntInput from "./CntInput";



const Cnt = () => {

    return (
        <BrowserRouter>
            <main className="container">
                <RecoilRoot>
                    <Routes>
                        <Route path="/" element={<CntInput />} />
                        <Route path="/CntDisp" element={<CntDisp />} />
                    </Routes>
                </RecoilRoot>
            </main>
        </BrowserRouter>

    );
}
export default Cnt;