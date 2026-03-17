
function App() {
    const name = "조현준"
    const age = 25
    const major = "컴퓨터소프트웨어공학과"

  return(
      <div style={{border: "1px"}}>
          <h1 style={{color: "yellow"}}>프로필</h1>
          <h2>이름: {name}</h2>
          <p>나이: {age}</p>
          <p>전공: {major}</p>
          
          <h2>좋아하는 것</h2>
          <ul>
              <li>게임</li>
              <li>운동</li>
              <li>영화</li>
              <li>음악 감상</li>
          </ul>
      </div>
  );
}

export default App;