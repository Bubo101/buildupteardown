import React, { useState } from "react";

function InsultGenerator() {
  const [insult, setInsult] = useState("");

  const fetchInsult = async () => {
    const response = await fetch(
      "https://crossorigin.me/https://evilinsult.com/generate_insult.php?lang=en&type=json"
    );
    const data = await response.json();
    console.log(data)
    setInsult(data.insult);
  };

  return (
    <div>
      <button onClick={fetchInsult}>Insult me</button>
      {insult && <p>{insult}</p>}
    </div>
  );
}

export default InsultGenerator;
