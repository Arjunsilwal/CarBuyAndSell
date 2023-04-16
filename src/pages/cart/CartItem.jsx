import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";

function CartItem(props) {
	const { id, productName, price, productImage } = props.data;
	const { cartItems, addToCart, removeFromCart, updateCartItemInput } =
		useContext(ShopContext);

	return (
		<div className="cartItem">
			<img src={productImage} />
			<div className="descripton">
				<p>
					<b>{productName}</b>
				</p>
				<p>${price}</p>
				<div className="countHandler">
					<button onClick={() => removeFromCart(id)}> - </button>
					<input
						value={cartItems[id]}
						onChange={(e) => {
							updateCartItemInput(Number(e.target.value), id);
						}}
					/>
					<button onClick={() => addToCart(id)}> + </button>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
