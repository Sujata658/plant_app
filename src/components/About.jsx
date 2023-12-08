import image from "./images/aboutPlant.png";

export default function About() {
    return <>
        <div className="about-container">
            <div className="about-description">
                <h2 className="about-title">About Us</h2>
                <p className="about-text">
                    Welcome to our website! We are passionate about creating a positive and enriching online experience for our users. Our team is dedicated to providing valuable information and resources to enhance your journey in the world of plants.
                </p>
                <p className="about-text">
                    At PlantApp, we believe in the power of plants. Our commitment is to deliver a seamless and enjoyable user experience.
                </p>
            </div>

            <div className="about-image-container">

                <img src={image} alt="About Plant" className="about-image" />
            </div>
        </div>
    </>
}



