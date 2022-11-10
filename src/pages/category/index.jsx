import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <div>
            <div className="category_container flex">
                <ul className="flex">
                    <h2>Categorías</h2>
                    <li><Link to={'/category/Games'}>Juegos</Link></li>
                    <li><Link to={'/category/Jewelery'}>Joyas</Link></li>
                    <li><Link to={'/category/Movies'}>Películas</Link></li>
                    <li><Link to={'/category/Clothing'}>Ropa</Link></li>
                    <li><Link to={'/category/Shoes'}>Zapatos</Link></li>
                    <li><Link to={'/category/Electronics'}>Electrónica</Link></li>
                    <li><Link to={'/category/Books'}>Libros</Link></li>
                    <li><Link to={'/category/Beauty'}>Belleza</Link></li>
                    <li><Link to={'/category/Sports'}>Deportes</Link></li>
                    <li><Link to={'/category/Health'}>Salud</Link></li>
                    <li><Link to={'/category/Garden'}>Jardín</Link></li>
                    <li><Link to={'/category/Tools'}>Herramientas</Link></li>
                    <li><Link to={'/category/Home'}>Hogar</Link></li>
                    <li><Link to={'/category/Computers'}>Computadoras</Link></li>
                    <li><Link to={'/category/Outdoors'}>Patio</Link></li>
                    <li><Link to={'/category/Baby'}>Bebé</Link></li>
                    <li><Link to={'/category/Automotive'}>Automoviles</Link></li>
                    <li><Link to={'/category/Industrial'}>Industrial</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Category;