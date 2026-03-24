function Hello() {
  return <h1>안녕하세요 React</h1>;
}

function User({ name }) {
  return <h2>안녕하세요 {name}님</h2>;
}

function Product({ name, price }) {
  return (
      <div>
        <h3>상품: {name}</h3>
        <p>가격: {price}</p>
      </div>
  );
}

function ProfileCard({ name, age, job }) {
  return (
      <div>
        <h3>이름: {name}</h3>
        <p>나이: {age}</p>
        <p>직업: {job}</p>
      </div>
  );
}

function Button({ text }) {
  return (
      <button style={{ backgroundColor: "green", color: "white" }}>
        {text}
      </button>
  );
}

function Box({ children }) {
  return <div>{children}</div>;
}

function FruitList({ fruits }) {
  return (
      <ul>
        {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
        ))}
      </ul>
  );
}

function Book({ title, author, price }) {
  return (
      <div>
        <h2>이 책의 제목은 {title}입니다.</h2>
        <p>이 책의 저자는 {author}님 입니다.</p>
        <p>이 책은 {price}원 입니다.</p>
      </div>
  );
}

function GreetingCard({ name, message }) {
  return (
      <div>
        <h3>{name}님께</h3>
        <p>{message}</p>
      </div>
  );
}

function VideoCard({ title, channel, views }) {
  return (
      <div>
        <h3>{title}</h3>
        <p>{channel}</p>
        <p>{views}</p>
      </div>
  );
}

function VideoList({ videos }) {
  return (
      <div>
        {videos.map((video, index) => (
            <VideoCard
                key={index}
                title={video.title}
                channel={video.channel}
                views={video.views}
            />
        ))}
      </div>
  );
}

function App() {
  const fruits = ["사과", "바나나", "포도"];

  const videos = [
    { title: "리액트 기초 강의", channel: "코딩채널", views: "10만" },
    { title: "자바스크립트 기초 강의", channel: "코딩랩", views: "20만" },
  ];

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
        <FruitList fruits={fruits} />

        <hr />
        <h2>과제 1</h2>
        <Book title="파이썬" author="김길동" price={30000} />
        <Book title="데이터베이스" author="홍길동" price={15000} />
        <Book title="자바" author="최길동" price={40000} />

        <hr />
        <h2>과제 2</h2>
        <GreetingCard name="민지" message="생축" />
        <GreetingCard name="철수" message="아자스" />
        <GreetingCard name="길동" message=":D" />

        <hr />
        <h2>과제 3</h2>
        <Button text="로그인" />
        <Button text="회원가입" />
        <Button text="삭제" />

        <hr />
        <h2>과제 4</h2>
        <h1>📺 추천 영상</h1>
        <VideoList videos={videos} />
      </div>
  );
}

export default App;