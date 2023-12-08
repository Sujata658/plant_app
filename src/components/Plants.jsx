import { useGlobalContext } from "./PlantContext";
// import {NavLink} from "react-router-dom";

export default function Plants() {
  const { isLoading, plants, isError } = useGlobalContext();

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  } else if (isError.show) {
    return (
      <div className="error">
        Sorry, some error occurred. Please try again later.
      </div>
    );
  } else {
    const plantsWithImages = plants.filter((plant) => plant.default_image);

    return (
      <div style={{margin: '30px'}}>
        <div className="plants-container">
          <h2 className="title-phrase" style={{ textAlign: 'center' }}>
            Our Plants
          </h2>
          <div className="cards">
            {plantsWithImages.map((plant) => (
              <div className="card_cover" key={plant.id}>
                {/* <NavLink to={`/plants/${plant.common_name}`}> */}
                  <div className="card">
                    <div className="card_image">
                      <img
                        src={plant.default_image.medium_url}
                        alt={plant.common_name}
                        className="card_image"
                      />
                    </div>
                    <h4>{plant.common_name}</h4>
                  </div>
                {/* </NavLink> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}