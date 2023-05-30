function App() {
    return (
        <>
            <section className="flex w-[375px] flex-col font-Roboto">
                <div>
                    <img
                        src="../assets/images/illustration-sign-up-mobile.svg"
                        alt="mobile-image"
                    />
                </div>
                <div className="px-6 py-12">
                    <h2 className="text-4xl font-bold mb-6">Stay updated!</h2>
                    <p className="text-base mb-6">
                        Join 60,000+ product managers receiving monthly updates
                        on:
                    </p>
                    <div className="flex items-start text-base gap-x-3 mb-2">
                        <img
                            src="../assets/images/icon-list.svg"
                            alt="icon-list"
                        />
                        <p>Product discovery and building what matters</p>
                    </div>
                    <div className="flex items-start text-base gap-x-3 mb-2">
                        <img
                            src="../assets/images/icon-list.svg"
                            alt="icon-list"
                        />
                        <p>Measuring to ensure updates are a success</p>
                    </div>
                    <div className="flex items-start text-base gap-x-3 mb-2gi">
                        <img
                            src="../assets/images/icon-list.svg"
                            alt="icon-list"
                        />
                        <p>And much more!</p>
                    </div>
                    <form>
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email@company.com"
                        />
                        <button type="submit">
                            Subscribe to monthly newsletter
                        </button>
                    </form>
                </div>
            </section>
            <div className="text-center font-Roboto text-[11px]">
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
        </>
    );
}

export default App;
