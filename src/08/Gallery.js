//한국 관광 공사
// https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=VVOmSStfN2wJSHEf%2BdtpJXmiBOUek6SBLCa3ue%2BfX1qCYUMmwRU13VFK6bcrNTm6XpOMTYs1Z77cRmRno%2BYqkg%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ec%98%81%eb%8f%84&_type=json

import style from './Gallery.module.css';
import GalleryView from './GalleryView';
import { useState, useEffect, useRef } from 'react';

const Gallery = () => {

    //let TempTag = itemArr.current.map(())
    const [data, setData] = useState();

    const getData = (kw) => {


        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=VVOmSStfN2wJSHEf%2BdtpJXmiBOUek6SBLCa3ue%2BfX1qCYUMmwRU13VFK6bcrNTm6XpOMTYs1Z77cRmRno%2BYqkg%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${kw}&_type=json`;
        console.log("url = ", url);

        fetch(url)
            .then((resp) => resp.json())
            //.then((data) => console.log('data', data.response.body.items.item))
            .then((data) => setData(data.response.body.items.item))
            .catch((err) => console.log("err = ", err));


    }



    //키워드 input
    const txt1 = useRef();

    //컴포넌트가 처음 랜더링되면 
    useEffect(() => {
        txt1.current.focus();
    }, []);

    //data가 바뀔때 마다 실행
    useEffect(() => {
        console.log("data", data);
    }, [data]);

    //확인버튼
    const show = (e) => {
        e.preventDefault();
        if (txt1.current.value === '') return;
        let kw = encodeURI(txt1.current.value);
        console.log(txt1.current.value, kw);

        getData(kw);
    }

    //취소버튼
    const showClear = (e) => {
        e.preventDefault();
    }

    return (
        <main className='container'>
            <article>
                <header>
                    <h2>📷한국관광공사_관광사진 정보📸</h2>
                    <form>
                        <div className="grid">
                            <input ref={txt1} type="text" id="txt" name="txt" placeholder="키워드를 입력하세요!" required />
                            <div className="grid">
                                <button onClick={(e) => show(e)}>확인</button>
                                <button onClick={(e) => showClear(e)}>취소</button>
                            </div>
                        </div>
                    </form>
                </header>
            </article>
            {data && <GalleryView data={data} />}
        </main>
    );

}
export default Gallery;