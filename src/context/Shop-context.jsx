import React from "react";
import { createContext, useState } from "react";
import { PRODUCTS } from "../product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
	let cart = {};
	for (let i = 1; i < PRODUCTS.length + 1; i++) {
		cart[i] = 0;
	}
	return cart;
};

function ShopContextProvider(props) {
	const [cartItems, setcartItems] = useState(getDefaultCart());

	const addToCart = (itemId) => {
		setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
	};

	const removeFromCart = (itemId) => {
		setcartItems((previous) => ({
			...previous,
			[itemId]: previous[itemId] - 1,
		}));
	};

	const updateCartItemInput = (newAmount, itemId) => {
		setcartItems((prev) => ({ ...prev, [itemId]: newAmount }));
	};

	const getTotalcartAmount = () => {
		let totalAmount = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
				totalAmount += cartItems[item] * itemInfo.price;
			}
		}
		return totalAmount;
	};

	const contextValue = {
		cartItems,
		addToCart,
		removeFromCart,
		updateCartItemInput,
		getTotalcartAmount,
	};

	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	);
}

export default ShopContextProvider;
