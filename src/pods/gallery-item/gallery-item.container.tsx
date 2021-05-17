import React from "react";
import { GalleryItemComponent } from "./gallery-item.component";
import { PictureInfoVm } from "models/vm";

export interface GalleryItemProps {
    item: PictureInfoVm,
}

export const GalleryItem : React.FC<GalleryItemProps> = ({ item }) => {

    return (
        <GalleryItemComponent item={item} />
    );
};