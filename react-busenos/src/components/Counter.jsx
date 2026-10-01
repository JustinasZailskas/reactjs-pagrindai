import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    function addThree() {
        setCount((prev) => prev + 3);
    }
    function addThreeBePrev() {
        setCount(count+3);
    }

    return (
        <section>
            <h2>Skailiukas</h2>
            <p>Skaicius: {count}</p>
            <button onClick={() => setCount((prev) => prev + 1)}>Padidinti</button>
            <button onClick={() => setCount((prev) => prev - 1)}>Pamazinti</button>
            <button onClick={() => setCount(0)}>Nustatyti is naujo</button>
            <button onClick={addThree}>Padidinti per 3</button>
            <button onClick={addThreeBePrev}>Padidint per 3 be prev</button>
        </section>
    )

}