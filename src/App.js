import React from "react";
import ReactDOM from "react-dom/client";
import CardComponent from "./CardComponent.js";
import data from "./data.json";
import * as constants from "./constants.js";
import SearchBar from "./SearchBar.js";
import { useState } from "react";


const HeadingComponent = () =>(
    <div id="title" className="title_class" tabIndex="1">
        <h2>{constants.title}</h2>
    </div>
);

const CardContainer = ({filteredRestaurants}) =>
    filteredRestaurants.map((restaurant) => (
        <CardComponent restaurant={restaurant} key={restaurant.id}/>
    )
);

const BodyComponent = () =>{
    const [filteredRestaurants, setfilteredRestaurants] = useState(data); 
return(
    <div className="card-container">
        <SearchBar setfilteredRestaurants={setfilteredRestaurants}/>
        <CardContainer filteredRestaurants={filteredRestaurants}/>
    </div>
    );
};

const AppLayout = () =>(
    <>
        <HeadingComponent/>
        <BodyComponent/>
    </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
