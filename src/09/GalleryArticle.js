import style from './Gallery.module.css';

const GalleryArticle = ({item}) => {
let tag = item.galSearchKeyword.split(',');
tag = tag.map((i) => <div className={style.dd} key={tag + i}>{i}</div>)

    return (
        <article>
            <header>
                <h3>{item.galTitle}</h3>
                <span>{item.alPhotographyLocation}</span>
            </header>
            <div>
                <img src={item.galWebImageUrl}/>
            </div>
            <footer>
                {tag}
            </footer>
        </article>
    )

}

export default GalleryArticle;