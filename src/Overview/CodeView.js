import CodeGubun from "./CodeGubun";
import CodeList from "./CodeList";
//CodeGubun이라는 Component(함수)를 사용하기 위해 import함

import { RecoilRoot } from "recoil";

const CodeView = () => {
    return (
        <RecoilRoot>
            <main className="container">
                <h1>Code</h1>
                <CodeGubun />
                <CodeList />
            </main>
        </RecoilRoot>
    );
}
export default CodeView;
//CodeView라는 함수를 만들어서 사용했으니 이를 다른곳에서도 사용하기 위해 export함.