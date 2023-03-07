import React, { useState } from "react";
import "../styles/insultComp.css"

function ComplimentGenerator() {
    const [compliment, setCompliment] = useState("");

    const fetchCompliment = async () => {
    const response = await fetch(
        "https://complimentr.com/api"
    );
    const data = await response.json();
    setCompliment(data.compliment);
    };

    return (
    <div className="container" >
        <button className="button" onClick={fetchCompliment}>Compliment Me Please, I need It</button>
        <div className="box">
            <p className="compliment">{compliment}</p>
        </div>
    </div>
    );
}

export default ComplimentGenerator;