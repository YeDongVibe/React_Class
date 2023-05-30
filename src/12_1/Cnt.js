import { useState, useEffect} from "react";
import CntDisp from "./CntDisp";
import CntInput from "./CntInput";


const Cnt = () => {

    const [cnt, SetCnt] = useState(0);

    useEffect(() => {

    }, [cnt])

    

    return (
        <main className="container">
           <CntInput cnt = {cnt} SetCnt = {SetCnt}/>
            <CntDisp cnt = {cnt} />
        </main>
    );
}
export default Cnt;