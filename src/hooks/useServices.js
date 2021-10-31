import { useEffect, useState } from "react";

const useService = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("https://frightful-demon-22619.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return {
    service,
  };
};
export default useService;
