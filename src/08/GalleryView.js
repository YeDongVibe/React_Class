const GalleryView = ({ data }) => {

    const dTag = data.map((data, idx) => 
       
        <li key={"data" + idx} className="feed">
            <h3 className="title">{data.galTitle}</h3>
            <p className="location">{data.galPhotographyLocation}</p>
            <img src={data.galWebImageUrl}></img>
            <div className="cl">
                <p className="word">{data.galSearchKeyword}</p>
            </div>
        </li>
    );
    

    return (
        <article className="ma">
            <ul>
                <div key={data.id} className="view">
                    {dTag}
                </div>

            </ul>
        </article>
    )
}
export default GalleryView;