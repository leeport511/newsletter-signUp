import React from "react";

const Main = () => (
    <>
        <section className="flex flex-col xl:flex-row-reverse xl:justify-center xl:items-start xl:p-4 xl:w-[880px] items-center font-Roboto bg-white rounded-2xl">
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
            <div className="px-6 py-12 tracking-normal text-dark-slate-grey xl:w-[58%] xl:flex xl:flex-col xl:py-12 xl:px-12">
                <h2 className="mb-6 text-4xl font-bold xl:text-5xl">Stay updated!</h2>
                <p className="mb-6 text-base font-medium leading-snug">
                    Join 60,000+ product managers receiving monthly updates on:
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
                        className="mb-2 text-xs font-bold tracking-tighter text-dark-slate-grey"
                    >
                        Email address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email@company.com"
                        autoComplete="off"
                        className="mb-6 rounded-lg border border-gray-300 px-6 py-3 focus:border-none"
                    />
                    <button
                        type="submit"
                        className="rounded-lg bg-dark-slate-grey px-6 py-3 text-sm font-semibold tracking-wide text-white"
                    >
                        Subscribe to monthly newsletter
                    </button>
                </form>
                <div className="text-center font-Roboto text-[11px] bg-white flex justify-center items-end mt-2">
                    Challenge by{" "}
                    <a
                        href="https://www.frontendmentor.io?ref=challenge"
                        target="_blank"
                        className="text-[#6D6F78]"
                    >
                        Frontend Mentor
                    </a>
                    . Coded by{" "}
                    <a href="#" className="text-[#6D6F78]">
                        Leonardo Portillo
                    </a>
                    .
                </div>
            </div>
        </section>
    </>
);

export default Main;
