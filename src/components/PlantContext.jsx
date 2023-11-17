import React, { useEffect, useContext } from "react";

const API =
  "https://perenual.com/api/species-list?key=sk-ZDEM654b7990c7b5e2872&edible=1";

const PlantContext = React.createContext();

const PlantProvider = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [plants, setPlants] = React.useState([]);
  const [isError, setIsError] = React.useState({ show: false, msg: "" });

  const getPlants = async (API) => {
    try {
      const response = await fetch(API);
      const data = await response.json();

      if (response.status >= 200 && response.status <= 299) {
        setIsLoading(false);
        setPlants(data.data);
      } else {
        setIsLoading(false);
        setIsError(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPlants(API);
  }, []);

  return (
    <PlantContext.Provider value={{ isLoading, plants, isError }}>
      {children}
    </PlantContext.Provider>
  );
};

const useGlobalContext = () => useContext(PlantContext);

export { PlantContext, PlantProvider, useGlobalContext };
