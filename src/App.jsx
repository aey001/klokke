import { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12 + minutes / 60;

  const hourDeg = hours * 30;
  const minuteDeg = minutes * 6;
  const secondDeg = seconds * 6;

  const digitalTime = time.toLocaleTimeString('nb-NO', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <main className="page">
      <section className="card">
        <div className="clock-face">
          <div className="hand hour" style={{ transform: `rotate(${hourDeg}deg)` }} />
          <div className="hand minute" style={{ transform: `rotate(${minuteDeg}deg)` }} />
          <div className="hand second" style={{ transform: `rotate(${secondDeg}deg)` }} />
          <div className="center-dot" />
        </div>
        <div className="time-labels">
          <p className="digital">{digitalTime}</p>
          <p className="subtitle">Stilig React-klokke</p>
        </div>
      </section>
    </main>
  );
}

export default App;
