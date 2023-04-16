import React from "react";
import "./shop.css";
import { PRODUCTS } from "../../product";
import Product from "./Product";

function Shop() {
	return (
		<div className="shop">
			<div className="shopTitle">
				<h1>Car Shop</h1>
			</div>
			<div className="products">
				{PRODUCTS.map((product) => (
					<Product data={product} />
				))}
			</div>
		</div>
	);
}

export default Shop;
