import {useState} from 'react';
import data from "./data.json";

//Logic for searching restaurants
const searchRestaurant = (searchText) =>{
    return data.filter((res) =>
        res.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
};

const SearchBar=({setfilteredRestaurants})=>{
    const [searchText, setSearchText] = useState("");
    return(
        <div className="search">
            <form onSubmit={(e) => {
                e.preventDefault();
                const filteredRestaurants = searchRestaurant(searchText);
                console.log(filteredRestaurants);
                setfilteredRestaurants(filteredRestaurants);
            }}>
                <input id="restaurant" placeholder="restaurant" value={searchText}
                onChange={
                    (e)=>{
                        setSearchText(e.target.value);
                    }
                }
                >
                </input>
                <button>Search</button>
            </form>
        </div>
    );
};

export default SearchBar;