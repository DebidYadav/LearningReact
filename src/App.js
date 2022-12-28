import React from "react";
import ReactDOM from "react-dom/client";
import CardComponent from "./CardComponent.js";

title = "Food Piper";

const HeadingComponent = () =>(
    <div id="title" className="title_class" tabIndex="1">
        <h2>{title}</h2>
    </div>
);

const data =[{
    img : "https://thumbs.dreamstime.com/z/pizza-slice-5957584.jpg",
    name: "Pizza 47",
    cusine: "Pizza, Italian",
    stars: 4.5,
    id: "ghdj",
},
{
    img : "https://thumbs.dreamstime.com/z/pizza-slice-5957584.jpg",
    name: "Pizza 47",
    cusine: "Pizza, Italian",
    stars: 3,
    id: "jgjfu",
},
{
    img : "https://thumbs.dreamstime.com/z/pizza-slice-5957584.jpg",
    name: "Pizza 47",
    cusine: "Pizza, Italian",
    stars: 3.5,
    id: "uuydtyx",
}
];

const CardContainer = () =>{
    const cards = data.map((restaurant) => {
        return <CardComponent restaurant={restaurant} key={restaurant.id}/>
    });
    return cards;
};

const BodyComponent = () =>(
    <div className="card-container">
        <CardContainer/>
    </div>
);

const AppLayout = () =>(
    <>
        <HeadingComponent/>
        <BodyComponent/>
    </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
