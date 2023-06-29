import { useState } from "react";
import Main from "./pages/main";
import Success from "./pages/success";




function App() {

    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(null);

    const handleInputChange = ({ target }) => {
        setEmail(target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailValue = email;

        if (emailValue === "" || !emailValue.includes("@") || !emailValue.includes(".com")) {
            setIsValid(false);
            console.log("Please enter a valid email");
            return;
        }

        setIsValid(true);
    };




    return (
        <div className="flex h-screen flex-col justify-center xl:items-center mx-auto xl:bg-charcoal-grey">
            {
                !isValid ?
                <Main email={email} handleInputChange={handleInputChange} handleSubmit={handleSubmit} isValid={isValid}/>
                : <Success isValid={isValid}/> 
            }
            
        </div>
    );
}

export default App;
