import { useState } from "react";
import "./App.css";

function CalendarApp() {
  const today = new Date();

  // 현재 달 상태 관리
  const [currentDate, setCurrentDate] = useState(today);
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  // 달력 요일
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  // 이번 달 날짜 계산
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const dates = [];

  for (let i = 0; i < firstDay; i++) {
    dates.push(null);
  }
  for (let d = 1; d <= lastDate; d++) {
    dates.push(d);
  }
  while (dates.length % 7 !== 0) {
    dates.push(null);
  }

  // 주 단위로 나누기
  const weeks = [];
  for (let i = 0; i < dates.length; i += 7) {
    weeks.push(dates.slice(i, i + 7));
  }

  // 선택 날짜 관리
  const [selectedDate, setSelectedDate] = useState(today);
  const formatDate = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };
  const isSameDate = (a, b) => formatDate(a) === formatDate(b);

  const handleDateClick = (day) => {
    if (!day) return;
    setSelectedDate(new Date(year, month, day));
  };

  // 이전/다음 달 이동
  const changeMonth = (offset) => {
    setCurrentDate(new Date(year, month + offset, 1));
  };

  // 일정 관리
  const [input, setInput] = useState("");
  const [events, setEvents] = useState([]);
  const selectedDateKey = formatDate(selectedDate);

  const addEvent = () => {
    if (!input.trim()) return;
    const newEvent = {
      id: Date.now(),
      date: selectedDateKey,
      text: input,
      done: false,
    };
    setEvents([...events, newEvent]);
    setInput("");
  };

  const groupedEvents = events.reduce((groups, event) => {
    if (!groups[event.date]) {
      groups[event.date] = [];
    }
    groups[event.date].push(event);
    return groups;
  }, {});

  const hasEvent = (day) => {
    if (!day) return false;
    const key = formatDate(new Date(year, month, day));
    return events.some((event) => event.date === key);
  };

  const toggleDone = (id) => {
    setEvents(
        events.map((event) =>
            event.id === id ? { ...event, done: !event.done } : event
        )
    );
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
      <div className="app">
        <h1 className="title">홍길동의 일정관리 앱</h1>

        <div className="calendar-header">
          <button onClick={() => changeMonth(-1)}>◀</button>
          <h2>
            {year}년 {month + 1}월
          </h2>
          <button onClick={() => changeMonth(1)}>▶</button>
        </div>

        <div className="layout">
          <section className="left-panel">
            <table className="calendar-table">
              <thead>
              <tr>
                {days.map((day) => (
                    <th key={day}>{day}</th>
                ))}
              </tr>
              </thead>
              <tbody>
              {weeks.map((week, weekIndex) => (
                  <tr key={weekIndex}>
                    {week.map((day, dayIndex) => {
                      const cellDate = day ? new Date(year, month, day) : null;
                      const isToday = cellDate && isSameDate(cellDate, today);
                      const isSelected =
                          cellDate && isSameDate(cellDate, selectedDate);

                      return (
                          <td
                              key={dayIndex}
                              onClick={() => handleDateClick(day)}
                              className={`${day ? "clickable" : ""} ${
                                  isToday ? "today" : ""
                              } ${isSelected ? "selected" : ""}`}
                          >
                            {day && <span>{day}</span>}
                            {hasEvent(day) && <div className="event-dot" />}
                          </td>
                      );
                    })}
                  </tr>
              ))}
              </tbody>
            </table>
          </section>

          <section className="right-panel">
            <h2>등록 된 일정</h2>

            {events.length === 0 ? (
                <p className="empty">등록 된 일정이 없습니다.</p>
            ) : (
                Object.entries(groupedEvents).map(([date, dateEvents]) => (
                    <div key={date} className="date-group">
                      <h3 className="date-title">{date}</h3>
                      <ul className="event-list">
                        {dateEvents.map((event) => (
                            <li key={event.id} className="event-item">
                              <div className="event-content">
                                <p className={event.done ? "done-text" : ""}>
                                  {event.text}
                                </p>
                              </div>
                              <button
                                  className={
                                    event.done ? "check-btn checked" : "check-btn"
                                  }
                                  onClick={() => toggleDone(event.id)}
                              >
                                {event.done ? "✓" : ""}
                              </button>
                              <button
                                  className="delete-btn"
                                  onClick={() => deleteEvent(event.id)}
                              >
                                삭제
                              </button>
                            </li>
                        ))}
                      </ul>
                    </div>
                ))
            )}
          </section>
        </div>

        <div className="input-box">
          <h3>선택 날짜: {selectedDateKey}</h3>
          <div className="input-row">
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") addEvent();
                }}
                placeholder="일정을 입력하세요."
            />
            <button onClick={addEvent}>추가</button>
            <button onClick={() => setInput("")}>리셋</button>
          </div>
        </div>
      </div>
  );
}

export default CalendarApp;
