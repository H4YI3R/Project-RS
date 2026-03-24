function Hello() {
  return (
      <h1>안녕하세요 React</h1>
  )
}
function User({ name }) {
  return (
      <h2>안녕하세요 {name}님</h2>
  )
}
function Product({ name, price }) {
  return (
      <div>
        <h3>상품: {name}</h3>
        <p>가격: {price}</p>
      </div>
  );
}
function ProfileCard({name, age, job}) {
  return (
      <div>
        <h3>이름: {name}</h3>
        <p>나이: {age}</p>
        <p>직업: {job}</p>
      </div>
  );
}
function Button({text}) {
  return (
      <button>{text}</button>
  );
}
function Box({children}) {
  return (
      <div>{children}</div>
  );
}
function Fruitlist({fruits}) {
  return (
      <ul>
        {fruits.map((fruit, index) => (<li key={index}>{fruit}</li>))}
      </ul>
  );
}
function App() {
  const fruits = ["사과", "바나나", "포도"]

  return (
      <div>
        <h1>4주차 실습</h1>
        <hr />
        <h2>실습 1</h2>
        <Hello />
        <hr />
        <h2>실습 2</h2>
        <User name="민지" />
        <User name="철수" />
        <hr />
        <h2>실습 3</h2>
        <Product name="노트북" price="100만원" />
        <Product name="키보드" price="5만원" />
        <hr />
        <h2>실습 4</h2>
        <ProfileCard name="김민지" age="20" job="학생" />
        <hr />
        <h2>실습 5</h2>
        <Button text="로그인" />
        <Button text="회원가입" />
        <Button text="삭제" />
        <hr />
        <h2>실습 6</h2>
        <Box>
          <h1>안녕하세요</h1>
          <h2>안녕하세요!!!</h2>
        </Box>
        <hr />
        <h2>실습 7</h2>
        <Fruitlist fruits={fruits} />
      </div>
  )
}
export default App;