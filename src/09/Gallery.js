
import style from './Gallery.module.css';
import { useState, useEffect, useRef } from 'react';
import GalleryView from './GalleryView';
import GalleryArticle from './GalleryArticle';

//component거 처음 랜더링 되었을 때 useeffect 한번 실행.
//useref- current 속성을 가지고 focus맞춤. 

const Gallery = () => {
    //

    //state 변수 제어
    const [items, setItems] = useState();

    //input 제어
    const txt1 = useRef();

    //처음 한번 컴포넌트가 랜더링 되었을 때
    //dependency arr'[]'가 없으면 처음한번만 랜더링 진행 됨.
    useEffect(() => {
        txt1.current.focus();

    }, []);

    //컴포넌트 해당하는 state변수가 변경이 될 때 마다 실행 (itmes가 변경이 될 때마다 실행.)
    useEffect(() => {
        //console.log('items', items);

    }, [items]);

    //사용자정의함수show&showClear&getData

    const getData = (kw, num, no) => {
        //url 분리하기
        let apikey = 'VVOmSStfN2wJSHEf%2BdtpJXmiBOUek6SBLCa3ue%2BfX1qCYUMmwRU13VFK6bcrNTm6XpOMTYs1Z77cRmRno%2BYqkg%3D%3D';

        let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?';
        url = url + `serviceKey=${apikey}`;
        url = url + `&numOfRows=${num}`;
        url = url + `&pageNo=${no}`;
        url = url + `&MobileOS=ETC`;
        url = url + `&MobileApp=AppTest`;
        url = url + `&arrange=A`;
        url = url + `&keyword=${kw}`;
        url = url + `&_type=json`;

        console.log("url", url);

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setItems(data.response.body.items.item))
            .catch((err) => console.log("err = ", err));

    }

    const show = (e) => {
        e.preventDefault();
        //공백 체크
        if (txt1.current.value === ' ') {
            txt1.current.focus();
            alert('키워드를 입력하세요!')
            return;
        }

        //인코팅한 키워드 표시
        const kw = encodeURI(txt1.current.value);
        getData(kw, 10, 1);
    }



    const showClear = (e) => {
        e.preventDefault();

    }

   
    return (
        <main className="container">
            <form>
                <article>
                    <header>
                        <h1>📷한국관광공사_관광사진 정보📸</h1>
                    </header>
                    <div className="grid">
                        <div>
                            <input ref={txt1} type="text" id="txt1" name="txt1" placeholder="키워드를 입력하세요." required />
                        </div>
                        <div className="btDiv">
                            <button onClick={(e) => show(e)}>확인</button>
                            <button onClick={(e) => showClear(e)}>취소</button>
                        </div>
                    </div>

                </article>
            </form>
            {items && <GalleryView content={items} />}
        </main>
    );
}

export default Gallery;