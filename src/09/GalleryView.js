import GalleryArticle from "./GalleryArticle";
import style from './Gallery.module.css';

const GalleryView = ({ content }) => {
    const tags = [];
    //2등분하기
    for (let i = 0; i < content.length; i = i + 2) {
        tags.push(
            <div className="grid" key = {'div' + i}>
                <GalleryArticle item={content[i]} />
                {/* <article>
                    <header>
                        {content[i].getTitle}
                    </header>
                </article> */}
                {i + 1 < content.length && <GalleryArticle item = {content[i+1]}/>
                    // <article>
                    //     <header>
                    //         {content[i + 1].getTitle}
                    //     </header>
                    // </article>
                }
            </div>
        )
    }





    return (
        <>
            {tags}
        </>
    )
}
export default GalleryView;