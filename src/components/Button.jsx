import React from "react";

const Button = ({ children, handleSubmit, isValid }) => {

    console.log(isValid);

    const handleSuccess = () => {
        return !isValid;
    }


    return (
        <button
            className="button-shadow ease-in-out w-[100%] delay-75 rounded-lg bg-dark-slate-grey px-6 py-3 text-center text-sm font-semibold tracking-wide text-white duration-500"
            type="submit"
            onClick={handleSubmit}
            onSubmit={handleSuccess}
        >
            {children}
        </button>
    );
};

export default Button;
