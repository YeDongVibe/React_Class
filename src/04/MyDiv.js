import MyDivArticle from "./MyDivArticle";

const MyDiv = () => {

    return (
        <main className="container">
            <MyDivArticle aname = 'My Div0'/>   {/* aname이라는 속성을 가진 MyDivArticle */}
            <MyDivArticle aname = 'My Div1'/>
            <MyDivArticle aname = 'My Div2'/>
        </main>
    );
}

export default MyDiv;