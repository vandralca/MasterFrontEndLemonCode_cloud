import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import * as classes from './shopping-cart.style';
import { MainContext } from "contexts/main.context";
import { CartItem } from "pods/cart-item/cart-item.container";
import { switchRouting } from "core/routing";

export const ShoppingCartComponent : React.FC = () => {
    const { cartElements, clearCart } = React.useContext(MainContext);
    const history = useHistory();

    const checkOut = () => {
        history.push(`${switchRouting.checkout}`);
    }

    return (
        <div className={classes.root}>
            <span className={classes.verticalLine}></span>
            <div>
                <div className={classes.caption}>
                    <ShoppingCartIcon fontSize="large" />
                    <span className={classes.title}>Cart</span>
                    <div className={classes.purchaseOrder}>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<ExitToAppIcon />}
                            size="small"
                            disabled={cartElements.length == 0}
                            onClick={() => checkOut()}
                        >
                            Purchase Order
                        </Button>
                    </div>
                </div>

                <div className={classes.imageList}>
                    {cartElements.length > 0
                        ? cartElements.map(cat =>
                            <CartItem key={cat.id} item={cat} readOnly={false} />)
                        : <span>Your cart is empty</span>
                    }

                </div>
                <div className={classes.clearCart}>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        disabled={cartElements.length == 0}
                        onClick={() => clearCart()}
                    >
                        Clear Cart
                    </Button>
                </div>
            </div>
        </div>
    );
};