import React from "react";

const Button = ({ children, handleSubmit }) => {
    return (
        <>
            <button
                className="button-shadow w-[100%] rounded-lg bg-dark-slate-grey px-6 py-3 text-center text-sm font-semibold tracking-wide text-white delay-75 duration-500 ease-in-out"
                type="submit"
                onClick={handleSubmit}
            >
                {children}
            </button>
        </>
    );
};
git
export default Button;
