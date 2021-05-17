import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import PaymentIcon from '@material-ui/icons/Payment';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import * as classes from './checkout.page.styles';
import { AppContext } from "contexts/app.context";
import { CartItem } from "pods/cart-item/cart-item.container";
import { switchRouting } from "core/routing";

const useContext = () => {
    return React.useContext(AppContext);
};

export const CheckoutPage: React.FC = () => {
    const { cartElements, setCartElements } = useContext();
    const history = useHistory();

    const purchaseOrder = () => {
        alert('Congratulations, your payment has been received and your order will be sent shortly.');
        setCartElements([]);
        backToGallery();
    }

    const backToGallery = () => {
        history.push(`${switchRouting.gallery}`);
    }

    return (
        <div className={classes.root}>
            <div className={classes.caption}>
                <PaymentIcon fontSize="large" />
                <span className={classes.title}>Purchase order</span>
            </div>

            <div className={classes.subtitle}>
                This is your order
            </div>

            <div className={classes.imageList}>
                {cartElements.length > 0
                    ? cartElements.map(cat =>
                        <CartItem key={cat.id} item={cat} readOnly={true} />)
                    : <span>Your cart is empty</span>
                }

            </div>

            <div className={classes.goToCart}>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<PaymentIcon />}
                    size="small"
                    disabled={cartElements.length == 0}
                    onClick={() => purchaseOrder()}
                >
                    Pay and finish
                </Button>
            </div>

            <div className={classes.goToCart}>
                <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<ShoppingCartIcon />}
                    size="small"
                    onClick={() => backToGallery()}
                >
                    Back to Gallery
                </Button>
            </div>
        </div>
    );
};