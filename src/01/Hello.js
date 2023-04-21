//개인이 만드는 Component
//React Component의 기본구조.
//return문 안에 내가 아는 테그를 넣어 타이핑하면된다.(jsx문법을 따르도록)
//내가 만드는 component는 무조건 대문자로 시작!

import logo from '../logo.svg';

const Hello = () => {
    return (//반드시 return이 있어야함. 그리고 괄호 사이에는 부모 테그<div>가 무조건 한개만 있어야함. 자식 테그들은 여러개 기입 가능.
        <div> {/*프레그먼트 테그 : <></> : div테그를 여러개 사용 가능.*/}

            {/*Class를 지정해줄 때 반드시 ClassName = '~~' 이렇게 써야함*/}
            <div className='Container'>
                <article data-theme="dark">
                    {/* 로고(이미지) 넣는 방법  */}
                    {<img src={logo} alt='logo' />}

                    <footer>
                        <h1>Hello React!😁</h1>
                    </footer>
                </article>

            </div>

        </div>
    );
}

export default Hello; // 반드시 테그와 같은 이름의 내용을 내보내야함 : export default ~~;