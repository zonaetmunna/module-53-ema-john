import React from 'react';
import { useHistory } from 'react-router';
import UseCart from '../../Hooks/UseCart';
import UseProduct from '../../Hooks/UseProduct';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products, setProducts] = UseProduct();
    const [cart, setCart] = UseCart(products);
    const history = useHistory()

    const handleRemove = (key) => {
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart)
        removeFromDb(key);
    }

    const handlePlaceOrder = () => {
        history.push("/placeOrder");
        setCart([])
        clearTheCart()

    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className="btn-regular" onClick={handlePlaceOrder}>Place Order</button>
                </Cart>
            </div>



        </div>
    );
};

export default OrderReview;