import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>DevOps Full Stack Project</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
