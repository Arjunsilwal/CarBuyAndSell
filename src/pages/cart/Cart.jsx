import React, { useContext } from "react";
import { PRODUCTS } from "../../product";
import { ShopContext } from "../../context/Shop-context";
import CartItem from "./CartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
	const { cartItems, getTotalcartAmount } = useContext(ShopContext);
	const totalAmount = getTotalcartAmount();
	const navigate = useNavigate();

	return (
		<div className="cart">
			<div>
				<h1>Your Cart Item</h1>
			</div>
			<div className="cart">
				{PRODUCTS.map((product) => {
					if (cartItems[product.id] !== 0) {
						return <CartItem data={product} />;
					}
				})}
			</div>
			{totalAmount > 0 ? (
				<div className="checkout">
					<p>Subtotal: ${totalAmount}</p>
					<button onClick={() => navigate("/")}>Continue Shopping</button>
					<button>Checkout</button>
				</div>
			) : (
				<h1>Your cart is Empty</h1>
			)}
		</div>
	);
}

export default Cart;
