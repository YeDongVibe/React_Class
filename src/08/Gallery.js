//한국 관광 공사
// https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=VVOmSStfN2wJSHEf%2BdtpJXmiBOUek6SBLCa3ue%2BfX1qCYUMmwRU13VFK6bcrNTm6XpOMTYs1Z77cRmRno%2BYqkg%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ec%98%81%eb%8f%84&_type=json

import style from './Gallery.module.css';
import { useState, useEffect, useRef } from 'react';

const Gallery = () => {

    //키워드 input
    const txt1 = useRef();

    //컴포넌트가 처음 랜더링되면 
    useEffect(() => {
        txt1.current.focus();
    }, []);

    //확인버튼
    const show = (e) => {
        e.preventDefault();
        if (txt1.current.value === '') return;
        let kw = encodeURI(txt1.current.value);
        console.log(txt1.current.value, kw);
    }

    //취소버튼
    const showClear = (e) => {
        e.preventDefault();
    }

    return (
        <article>
            <header>
                <h1>📷한국관광공사_관광사진 정보📸</h1>
                <form>
                    <div className="grid">
                        <input ref = {txt1} type="text" id="txt" name="txt" placeholder="키워드를 입력하세요!" required />
                        <div className="grid">
                            <button onClick={(e) => show()}>확인</button>
                            <button onClick={(e) => showClear()}>취소</button>
                        </div>
                    </div>
                </form>
            </header>
        </article>
    );

}
export default Gallery;