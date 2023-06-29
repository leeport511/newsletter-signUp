import React from "react";
import Button from "../components/button";

const Success = ({ isValid}) => {
    return (
        <section className="font-Roboto px-5 py-10 h-screen flex flex-col justify-between w-[375px] m-auto xl:bg-white xl:rounded-3xl xl:w-[390px] xl:p-10 xl:h-auto">
            <div className="mt-32 xl:mt-0">
                <img
                    src="../assets/images/icon-success.svg"
                    alt="icon success"
                    className='xl:w-[50px]'
                />
                <div className="text-dark-slate-grey mt-10 xl:mt-8">
                  <h3 className="text-[42px] leading-none tracking-tight font-bold xl:text-[40px]">Thanks for subscribing!</h3>
                  <p className="mt-5 leading-normal tracking-tight xl:text-sm">
                      A confirmation email has been sent to {" "}
                      <b>ash@loremcompany.com</b>. Please open it and click the
                      button inside to confirm your subscription.
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
