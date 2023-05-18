import { useRef, useState, useEffect } from "react";
import style from './Fcst.module.css'

const FcstMain = () => {



    return(
        <main className="container">
            <form>
                <header>
                    <h1>📊단기예보 선택👆🏼</h1>
                </header>

                <div className="grid">
                    <div>
                        <input type="text" id="txt1" name="txt1" readOnly />
                    </div>
                    <div className="bt1Div">
                    <button>📢초단기예보</button> 
                    </div>
                    <div className="bt2Div">
                    <button>📣단기예보</button> 
                    </div>
                </div>
            </form>
        </main>

    );
   
}
export default FcstMain;