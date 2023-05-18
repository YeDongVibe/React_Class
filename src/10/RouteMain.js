//Route를 사용하기 위한 기본 세팅
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RouteNav from './RouteNav';
import RouteHome from './RouteHome';
import RoutePage1 from './RoutePage1';
import RoutePage2 from './RoutePage2';

import style from './Route.module.css';

const RouteMain = () => {
    return (
        // BrowserRouter : 라우팅 기능을 쓸거라고 선언함(Route를 사용하기 위해).무조건 기입해야 함.
        <BrowserRouter>
        <main className="container">
            {/* 4개의 컴포넌트 제작 */}
            <RouteNav />
            {/* Routes : Route되는 정보를 묶을 때 사용. */}
            <Routes>
                {/* url창에 path의 내용을 치면 해당 컴포넌트로 이동함. / :item을 기입하게 되면 item을 사용하면 페이지표시 */}
                <Route path="/" element={<RouteHome />} />
                <Route path="/Page1/:item" element={<RoutePage1 />} />
                <Route path="/Page2" element={<RoutePage2 />} />
            </Routes>
        </main>
        </BrowserRouter>

    );
}
export default RouteMain;