import React from "react";
import Button from "../components/button";

const Success = ({ isValid }) => {
    return (
        <section className="m-auto flex h-screen w-[375px] flex-col justify-between px-5 py-10 font-Roboto xl:h-auto xl:w-[390px] xl:rounded-3xl xl:bg-white xl:p-10">
            <div className="mt-32 xl:mt-0">
                <img
                    src="../assets/images/icon-success.svg"
                    alt="icon success"
                    className="xl:w-[50px]"
                />
                <div className="mt-10 text-dark-slate-grey xl:mt-8">
                    <h3 className="text-[42px] font-bold leading-none tracking-tight xl:text-[40px]">
                        Thanks for subscribing!
                    </h3>
                    <p className="mt-5 leading-normal tracking-tight xl:text-sm">
                        A confirmation email has been sent to{" "}
                        <b>ash@loremcompany.com</b>. Please open it and click
                        the button inside to confirm your subscription.
                    </p>
                </div>
            </div>
            <div className="xl:mt-8">
                <Button isValid={isValid}>Dismiss message</Button>
            </div>
        </section>
    );
};

export default Success;
