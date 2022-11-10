import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <div>
            <div className="category_container flex">
                <ul className="flex">
                    <li><Link to={'/category/Games'}>Games</Link></li>
                    <li>Jewelery</li>
                    <li>Movies</li>
                    <li>Clothing</li>
                    <li>Shoes</li>
                    <li>Electronics</li>
                    <li>Books</li>
                    <li>Beauty</li>
                    <li>Sports</li>
                    <li>Health</li>
                    <li>Garden</li>
                    <li>Tools</li>
                    <li>Home</li>
                    <li>Computers</li>
                    <li>Outdoors</li>
                    <li>Baby</li>
                    <li>Automotive</li>
                </ul>
            </div>
        </div>
    )
}

export default Category;