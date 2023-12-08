import { useGlobalContext } from "./PlantContext";
import { NavLink } from "react-router-dom";

export default function PlantsDescription() {
  const { isLoading, plants } = useGlobalContext();
  if (isLoading) {
    return <div className="loading">Loading....</div>;
  } else {
    const plantsWithImages = plants.filter((plant) => plant.default_image);
    return (
      <>
        {}
        <section>
          <div className="grid grid-4-col">
            
            {plantsWithImages
              ? plantsWithImages.map((currPlant) => {
                  const { id, common_name, scientific_name, cycle, watering } = currPlant;
                  

                  return (
                    <NavLink to={`plants/${id}`} key={id}>
                      <div className="card">
                        <div className="card-info">
                          <h2>
                            {common_name}
                          </h2>
                          <h2>
                            {scientific_name}
                          </h2>
                          <img
                            src={currPlant.default_image.medium_url}
                            alt="#"
                          />
                          <h2>
                            {cycle}
                          </h2>
                          <h2>
                            {watering}
                          </h2>
                        </div>
                      </div>
                    </NavLink>
                  );
                })
              : ""}
          </div>
        </section>
      </>
    );
  }
}
