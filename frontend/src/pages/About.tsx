export const About = () => {
    return (

        <section className="about">
            {/* WHO WE ARE */}
            <div className="about-head">
                <div className="about-left">
                    <h2>Who We Are</h2>
                </div>
                <div className="about-right">
                    <p>
                        GreenRent is the world's largest shared electric vehicle company.
                        We are on a mission to build a future where transportation is shared,
                        affordable and carbon-free.
                    </p>
                </div>
            </div>

            <div className="about-image">
                <img src="about1.jpg" alt="About GreenRent" />
            </div>

            {/* WHAT WE DO */}
            <div className="about-head align-top">
                <div className="about-image">
                    <img src="about2.jpg" alt="What We Do" />
                </div>
                <div className="about-right-text">
                    <h2>What We Do</h2>
                    <p>
                        We provide convenient and reliable short-term rentals of electric bikes and scooters at
                        an affordable price in more than 280 cities in nearly 30 countries on five continents.
                    </p>
                </div>
            </div>
        </section>

    )
}