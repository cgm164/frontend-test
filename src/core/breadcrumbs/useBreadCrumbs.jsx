import React from "react";
import { useLocation } from "react-router-dom";
import { strToPath } from "../utils/strToPath";

const useBreadCrumbs = () => {
  const location = useLocation();
  const [breadCrumbs, setBreadCrumbs] = React.useState([]);

  React.useEffect(() => {
    if (location.state)
      setBreadCrumbs([
        {
          label: "Inicio",
          to: "/",
        },
        {
          label: location.state.model,
          to: strToPath(`/${location.state.brand}-${location.state.model}`),
          state: location.state
        },
      ]);
    else
      setBreadCrumbs([
        {
          label: "Inicio",
          to: "/",
        },
      ]);
  }, [location]);

  return breadCrumbs;
};

export default useBreadCrumbs;
