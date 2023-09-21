const BannerHero = () => {
    return (
        <div className="hero min-h-full bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <img src="../../../public/assets/images/user.png" className="max-w-sm mt-24" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">One Step <br /> Closer To Your <br /><span className="text-blue-400">Dream Job</span></h1>
                    <p className="py-6 pr-40">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default BannerHero;