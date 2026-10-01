import { useState } from "react";

export default function EmailInput() {
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    function evaluateEmail() {
        const value = email.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value === "") {
            setErrorMessage("Iveskite el. pasto adresa");
        } else if (!emailPattern.test(value)){
            setErrorMessage("netinkamas el. pasto adresas");
        } else {
            setErrorMessage("");
        }
        setIsChecked(true);
    }

    function handleChange(event) {
        setEmail(event.target.value);
        setErrorMessage("");
        setIsChecked(false);
    }

    return (
        <section>
            <h2>El. pasto tikrinimas</h2>
            <label htmlFor="email">El.pasto adresas</label>
            <input 
                id="email"
                type="email"
                value={email}
                onChange={handleChange}
                onBlur={evaluateEmail}
                
            />
            <p>{isChecked ? errorMessage || "El. pasto formatas tinkamas" : ""}</p>
        </section>
    )
}