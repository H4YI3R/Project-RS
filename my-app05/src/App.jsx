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

function App() {
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
      </div>
  )
}
export default App;