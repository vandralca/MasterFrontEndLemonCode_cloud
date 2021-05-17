import React from "react";
import { CartItemComponent } from "./cart-item.component";
import { PictureInfoVm } from "models/vm";

export interface CartItemProps {
    item: PictureInfoVm,
    readOnly: boolean,
}

export const CartItem: React.FC<CartItemProps> = ({ item, readOnly }) => {

    return (
        <CartItemComponent item={item} readOnly={readOnly} />
    );
};