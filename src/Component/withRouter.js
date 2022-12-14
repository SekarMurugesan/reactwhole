import React from "react";
import { useNavigate,useParams,useLocation } from "react-router-dom";

export const withRouter = (Component) => {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
          <Component
            {...props}
            router={{ location, navigate, params }}
          />
        );
      }
    
      return ComponentWithRouterProp;
    
};