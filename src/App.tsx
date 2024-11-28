import { useState } from "react";

function App() {
    const [hello] = useState("Hello World");

    return (
        <>
            <h1>{hello}</h1>
        </>
    );
}

export default App;
