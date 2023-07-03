import { useState } from "react";
import Main from "./components/Main";
import Success from "./components/Success";


function App() {
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(null);

    const handleInputChange = ({ target }) => {
        setEmail(target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailValue = email;

        if (
            emailValue === "" ||
            !emailValue.includes("@") ||
            !emailValue.includes(".com")
        ) {
            setIsValid(false);
            console.log("Please enter a valid email");
            return;
        }

        setIsValid(true);
    };

    return (
        <div className="mx-auto flex h-screen flex-col justify-center xl:items-center xl:bg-charcoal-grey">
            {!isValid ? (
                <Main
                    email={email}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    isValid={isValid}
                />
            ) : (
                <Success isValid={isValid} />
            )}
        </div>
    );
}

export default App;
