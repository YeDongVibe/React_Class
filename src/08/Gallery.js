//한국 관광 공사
// https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=VVOmSStfN2wJSHEf%2BdtpJXmiBOUek6SBLCa3ue%2BfX1qCYUMmwRU13VFK6bcrNTm6XpOMTYs1Z77cRmRno%2BYqkg%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ec%98%81%eb%8f%84&_type=json

import style from "./Gallery.module.css"

const Gallery = () => {
    return (
        <article>
            <header>
                <h1>📷한국관광공사_관광사진 정보📸</h1>
                <form>
                    <div className="grid">
                        <input type="text" id="txt1" name="txt1" required />
                        <div className="grid">
                            <button>확인</button>
                            <button>취소</button>
                        </div>
                    </div>
                </form>
            </header>
        </article>
    );

}
export default Gallery;