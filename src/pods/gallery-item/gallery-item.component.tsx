import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import * as classes from './gallery-item.styles';
import { PictureInfoVm } from "models/vm";
import { MainContext } from "contexts/main.context";

export interface GalleryItemProps {
    item: PictureInfoVm,
}

const useContext = () => {
    return React.useContext(MainContext);
};

export const GalleryItemComponent : React.FC<GalleryItemProps> = ({ item }) => {
    const { addItemToCartById, removeItemFromCartById } = useContext();
    const [itemValue, setItemValue] = React.useState(item);

    React.useEffect(() => {
        if (itemValue.selected) {
            addItemToCartById(itemValue.id);
        }
        else {
            removeItemFromCartById(itemValue.id);
        }
    }, [itemValue]);

    const setSelectedValue = (value: boolean) => {
        setItemValue({
            ...itemValue,
            selected: value
        });
    }

    return (
        <div className={classes.root}>
            <div>
                <img src={item.picUrl} className={classes.image}></img>
            </div>
            <div className={classes.title}>
                <span>{item.title}</span>
            </div>
            <div>
                <FormControlLabel
                    value="end"
                    control={<Checkbox color="primary"
                        checked={item.selected}
                        onChange={e => setSelectedValue(e.target.checked)} />}
                    label="Buy"
                    labelPlacement="end"
                />
            </div>
        </div>
    );
};