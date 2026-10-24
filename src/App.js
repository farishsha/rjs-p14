
import React, { useState, useEffect } from "react";

function App() {

    // TODO 1: Create a state variable
    const [message, setMessage] = useState("");

    // TODO 2: Use useEffect when component loads
    useEffect(() => {
        setMessage("Welcome! The page has loaded successfully.");
    }, []);

    return (
        <div>
            <h1>React useEffect Practical</h1>

            <p id="message">
                {message}
            </p>
        </div>
    );
}

export default App;
