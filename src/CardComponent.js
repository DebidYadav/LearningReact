const CardComponent = ({restaurant}) =>{
    const {img , name, cusine, stars} = restaurant;
    return(
        <div id="card" className="card">
            <img src ={img}></img>
            <h2>{name}</h2>
            <h3>{cusine}</h3>
            <h4>{stars}</h4>
        </div>
    )
};

export default CardComponent;