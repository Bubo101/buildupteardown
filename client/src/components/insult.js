import React, { useState } from "react";

function InsultGenerator() {
const [insult, setInsult] = useState("");

const fetchInsult = async () => {
    const response = await fetch(
        `https://insult.mattbas.org/api/insult.json`
    );
    const data = await response.json();
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
