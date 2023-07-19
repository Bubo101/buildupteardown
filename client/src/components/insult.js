import React, { useState } from "react";
import "../styles/insultComp.css"

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
    <div className="container">
        <div className="button">
        <button className="button" onClick={fetchInsult}>Insult Me!</button>
        </div>
        <div className="box">
            <p className="insult">{insult}</p>
        </div>
    </div>
);
}

export default InsultGenerator;
