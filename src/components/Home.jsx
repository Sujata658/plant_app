import { useNavigate } from "react-router-dom";
import plantimage from "../plantimage.png";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main_div">
        <div className="home_first_col">
          <div className="sub-title">
          <h7>Welcome to our Botanic Oasis!</h7>
          </div>
          <div className="title-phrase">
          <h1>Explore nature's wonders in lush green realms</h1>
          </div>
          
          <p>Our plants paradise is a haven for plant enthusiasts, whether you're a seasoned gardener or just starting your botanical journey. Start your green adventure today!</p>
          <div className="button_items">
            <div className="button button_green" onClick={()=>{return navigate('/plants')}}>
                Explore Now
            </div>
            <div className="button button_red" onClick={()=>{return navigate('/about')}}>
                Learn More
            </div>
          </div>
        </div>
        <div className="home_second_col">
          <img src={plantimage} alt="plant"></img>
        </div>
      </div>
    </>
  );
}
