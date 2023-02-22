import React, { useState } from "react";

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
    <div>
        <button onClick={fetchCompliment}>Compliment me</button>
        {compliment && <p>{compliment}</p>}
    </div>
    );
}

export default ComplimentGenerator;