import React from "react";
import Link from '@material-ui/core/Link';
import { IconButton } from "@material-ui/core";
import PetsIcon from '@material-ui/icons/Pets';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import * as classes from './image-gallery.styles';
import { MainContext } from "contexts/main.context";
import { GalleryItem } from "pods/gallery-item";
import { SplitScreenContext } from "contexts";

export const ImageGalleryComponent : React.FC = () => {
    const { galleryElements, setAnimalFamily } = React.useContext(MainContext);
    const splitScreenContext = React.useContext(SplitScreenContext);

    return (
        <div className={classes.root}>
            <div className={classes.headerGroup}>
                <div className={classes.linkGroup}>
                    <PetsIcon fontSize="large" />
                    <div className={classes.link}><Link href="#" onClick={_e => { setAnimalFamily("kitties") }}>Kitties</Link></div>
                    <div className={classes.link}><Link href="#" onClick={_e => { setAnimalFamily("puppies") }}>Puppies</Link></div>
                </div>
                <div className={classes.expandButtonsGroup}>
                    {(!splitScreenContext.isLayoutRightSideVisible)
                        ? <IconButton onClick={splitScreenContext.setLayoutAsDefault} ><ChevronLeftIcon fontSize="large" /></IconButton>
                        : <></>}

                    {(splitScreenContext.isLayoutRightSideVisible)
                        ? <IconButton onClick={splitScreenContext.setLayoutAsHideRightSide} ><ChevronRightIcon fontSize="large" /></IconButton>
                        : <></>}
                </div>
            </div>

            <div className={classes.imageList}>
                {galleryElements.map(item =>
                    <GalleryItem key={item.id} item={item} />
                )}
            </div>
        </div>
    );
};