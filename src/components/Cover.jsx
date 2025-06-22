function Cover() {
    return (
        <div
            className="cover relative w-full h-120 flex flex-col justify-center items-center text-white text-center p-8"
            style={{
                backgroundImage: ` url("/body-bg.png")`
            }}
        >
            <h1 className="z-10 font-baloo2 font-bold ">Welcome to <span className="text-[#9ac614] font-godber">FunFlix</span></h1>
            
            <p className="z-10 mt-4 font-inter">
                Here you can find all the Movies and TV Shows and their details, including genres, ratings, and more.
            </p>
            
            <div
                className="absolute w-full h-full"
                style={{
                    background: "rgb(0, 0, 0)", opacity: 0.5
                }}
            ></div>
            <div
                className="absolute w-full h-1/2 bottom-0"
                style={{
                    background: "linear-gradient(to top, rgb(56, 33, 81), transparent)"
                }}
            ></div>
        </div>
    );
}

export default Cover;