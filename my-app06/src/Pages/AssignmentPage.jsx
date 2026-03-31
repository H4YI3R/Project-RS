import { useState } from "react"; // React에서 상태 관리를 위한 useState 훅 import

// 개별 영상 카드 컴포넌트
function VideoCard({ title, channel, views }) { // props로 제목, 채널명, 조회수를 받음
    const [likes, setLikes] = useState(0); // 좋아요 수 상태 (초기값 0)
    const [clicks, setClicks] = useState(0); // 카드 클릭 수 상태 (초기값 0)

    // 카드 전체를 클릭했을 때 실행되는 함수
    const handleCardClick = () => {
        setClicks(clicks + 1); // 클릭 수를 1 증가
    };

    // 좋아요 버튼 클릭 시 실행되는 함수
    const handleLikeClick = (event) => {
        event.stopPropagation(); // 이벤트 버블링 방지 (카드 클릭 이벤트 실행 막기)
        setLikes(likes + 1); // 좋아요 수를 1 증가
    };

    return (
        <div
            onClick={handleCardClick} // 카드 전체 클릭 시 handleCardClick 실행
            style={{
                border: "1px solid #ccc", // 카드 테두리 스타일
                borderRadius: "12px", // 모서리 둥글게
                padding: "16px", // 내부 여백
                marginBottom: "12px", // 카드 간 간격
                cursor: "pointer", // 마우스 커서를 포인터로 변경
            }}
        >
            <h3>{title}</h3> {/* 영상 제목 출력 */}
            <p>채널: {channel}</p> {/* 채널명 출력 */}
            <p>조회수: {views}</p> {/* 조회수 출력 */}
            <p>클릭 수: {clicks}</p> {/* 현재 클릭 수 출력 */}
            <p>좋아요 수: {likes}</p> {/* 현재 좋아요 수 출력 */}
            <button onClick={handleLikeClick}> 좋아요</button> {/* 좋아요 버튼 클릭 시 handleLikeClick 실행 */}
        </div>
    );
}

// 영상 리스트 컴포넌트
function VideoList({ videos }) { // videos 배열을 props로 받음
    return (
        <div>
            {videos.map((video) => ( // videos 배열을 순회하면서 각 영상마다 카드 생성
                <VideoCard
                    key={video.id} // React에서 리스트 렌더링 시 필요한 고유 key
                    title={video.title} // 영상 제목 전달
                    channel={video.channel} // 채널명 전달
                    views={video.views} // 조회수 전달
                />
            ))}
        </div>
    );
}

// 메인 페이지 컴포넌트
function AssignmentPage() {
    const [filter, setFilter] = useState("전체"); // 현재 선택된 필터 상태 (초기값: 전체)

    // 영상 데이터 배열
    const videos = [
        {
            id: 1,
            title: "리액트 기초 강의",
            channel: "코딩채널",
            views: "10만",
            category: "공부",
        },
        {
            id: 2,
            title: "자바스크립트 완벽 정리",
            channel: "개발자TV",
            views: "25만",
            category: "자바스크립트",
        },
        {
            id: 3,
            title: "프론트엔드 취업 로드맵",
            channel: "코딩랩",
            views: "5만",
            category: "취업",
        },
        {
            id: 4,
            title: "React props 쉽게 이해하기",
            channel: "리액트쌤",
            views: "8만",
            category: "공부",
        },
    ];

    // 선택된 필터에 따라 영상 목록을 필터링
    const filteredVideos =
        filter === "전체" // 만약 필터가 "전체"라면
            ? videos // 전체 영상 그대로 사용
            : videos.filter((video) => video.category === filter); // 아니면 해당 카테고리만 필터링

    return (
        <div style={{ padding: "20px" }}> {/* 전체 페이지 여백 */}
            <h1> 추천 영상</h1> {/* 페이지 제목 */}

            <div style={{ marginBottom: "20px" }}> {/* 버튼 그룹 여백 */}
                <button onClick={() => setFilter("전체")}>전체</button> {/* 전체 필터 버튼 */}
                <button onClick={() => setFilter("공부")} style={{ marginLeft: "8px" }}>
                    공부
                </button> {/* 공부 필터 버튼 */}
                <button onClick={() => setFilter("자바스크립트")} style={{ marginLeft: "8px" }}>
                    자바스크립트
                </button> {/* 자바스크립트 필터 버튼 */}
                <button onClick={() => setFilter("취업")} style={{ marginLeft: "8px" }}>
                    취업
                </button> {/* 취업 필터 버튼 */}
            </div>

            <p>현재 필터: {filter}</p> {/* 현재 선택된 필터 표시 */}

            <VideoList videos={filteredVideos} /> {/* 필터링된 영상 리스트 렌더링 */}
        </div>
    );
}

export default AssignmentPage;