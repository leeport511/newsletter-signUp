import React, { useState } from "react";
import Button from "../components/button";

const Main = ({email, isValid, handleInputChange, handleSubmit}) => {
   

    return (
        <>
            <section className="flex flex-col items-center rounded-2xl bg-white font-Roboto xl:w-[880px] xl:flex-row-reverse xl:items-start xl:justify-center xl:p-4">
                <div className="flex flex-col">
                    <img
                        src="../assets/images/illustration-sign-up-mobile.svg"
                        alt="mobile-image"
                        className="inline-block xl:hidden"
                    />
                    <img
                        src="../assets/images/illustration-sign-up-desktop.svg"
                        alt="mobile-image"
                        className="hidden xl:inline-block"
                    />
                </div>
                <div className="px-6 py-12 tracking-normal text-dark-slate-grey xl:flex xl:w-[58%] xl:flex-col xl:px-12 xl:py-12">
                    <h2 className="mb-6 text-4xl font-bold xl:text-5xl">
                        Stay updated!
                    </h2>
                    <p className="mb-6 text-base font-medium leading-snug">
                        Join 60,000+ product managers receiving monthly updates
                        on:
                    </p>
                    <div className="mb-10 xl:mb-6">
                        <div className="mb-4 flex items-start gap-x-3 text-base font-medium leading-snug">
                            <img
                                src="../assets/images/icon-list.svg"
                                alt="icon-list"
                            />
                            <p>Product discovery and building what matters</p>
                        </div>
                        <div className="mb-4 flex items-start gap-x-3 text-base font-medium leading-snug">
                            <img
                                src="../assets/images/icon-list.svg"
                                alt="icon-list"
                            />
                            <p>Measuring to ensure updates are a success</p>
                        </div>
                        <div className="mb-4 flex items-start gap-x-3 text-base font-medium leading-snug">
                            <img
                                src="../assets/images/icon-list.svg"
                                alt="icon-list"
                            />
                            <p>And much more!</p>
                        </div>
                    </div>
                    <form className="flex flex-col">
                        <label
                            htmlFor="email"
                            className="relative mb-2 text-xs font-bold tracking-tighter text-dark-slate-grey"
                        >
                            Email address
                            {(isValid === false) ? (
                                <p className="absolute right-0 top-0 text-tomato">
                                    Valid email required
                                </p>
                            ) : null}
                        </label>

                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={handleInputChange}
                            placeholder="email@company.com"
                            autoComplete="off"
                            className={`mb-6 rounded-lg border border-gray-300 px-6 py-3 focus:outline ${
                                (isValid === false)
                                    ? "bg-tomato-transparent outline-tomato"
                                    : null
                            }`}
                        />
                        <Button handleSubmit={handleSubmit}>
                            Subscribe to monthly newsletter
                        </Button>
                    </form>
                    <div className="mt-7 flex items-end justify-center bg-white text-center font-Roboto text-[11px]">
                        Challenge by{" "}
                        <a
                            href="https://www.frontendmentor.io?ref=challenge"
                            target="_blank"
                            className="text-[#6D6F78]"
                        >
                            &nbsp;Frontend Mentor
                        </a>
                        . Coded by {"  "}
                        <a
                            href="https://www.linkedin.com/in/leonardo-portillo-8b94b615b/"
                            target="_blank"
                            className="text-[#6D6F78]"
                        >
                            &nbsp;Leonardo Portillo
                        </a>
                        .
                    </div>
                </div>
            </section>
        </>
    );
};

export default Main;
