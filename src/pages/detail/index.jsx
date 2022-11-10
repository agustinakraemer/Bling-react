import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Card from "../../components/card";

const Detail =() =>{
    const {params} = useParams ();
    const {state} = useLocation();
    console.warn('params', params,'state', state);

    return(
        <div className="detail">
            <Card item={state} />
        </div>
    )
       
}

export default Detail;