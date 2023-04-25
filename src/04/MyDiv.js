import MyDivArticle from "./MyDivArticle";
import "./MyDiv.css"

const MyDiv = () => {

    return (
        <main className="container">
            <MyDivArticle />   {/* aname이라는 속성을 가진 MyDivArticle */}
            <MyDivArticle aname = 'MyDiv1'/>
            <MyDivArticle aname = 'MyDiv2'/>
        </main>
    );
}

export default MyDiv;