import React from "react";
import ReactDOM from "react-dom/client";

title = "Food Piper";

const HeadingComponent = () =>(
    <div id="title" className="title_class" tabIndex="1">
        <h2>{title}</h2>
    </div>
);

const CardComponent = () =>(
    <div id="card" className="card">
        <img src ="https://thumbs.dreamstime.com/z/pizza-slice-5957584.jpg"></img>
        <h2>Pizza 47</h2>
        <h3>Pizza, Italian</h3>
        <h4>4.2 Stars</h4>
    </div>
);

const BodyComponent = () =>(
    <div className="card-container">
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
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
