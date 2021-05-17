import { PictureInfoModel } from "models/dto";
import cat001 from "./assets/cat001.jpg";
import cat002 from "./assets/cat002.jpg";
import cat003 from "./assets/cat003.jpg";
import cat004 from "./assets/cat004.jpg";
import cat005 from "./assets/cat005.jpg";
import cat006 from "./assets/cat006.jpg";
import cat007 from "./assets/cat007.jpg";
import cat008 from "./assets/cat008.jpg";
import dog001 from "./assets/dog001.jpg";
import dog002 from "./assets/dog002.jpg";
import dog003 from "./assets/dog003.jpg";
import dog004 from "./assets/dog004.jpg";
import dog005 from "./assets/dog005.jpg";
import dog006 from "./assets/dog006.jpg";

export const getKittiesImages = (): Promise<PictureInfoModel[]> =>
{
    const data = [
        {
            id: "1",
            picUrl: cat001,
            title: "Gatito 1"
        },
        {
            id: "2",
            picUrl: cat002,
            title: "Gatito 2"
        },
        {
            id: "3",
            picUrl: cat003,
            title: "Gatito 3"
        },
        {
            id: "4",
            picUrl: cat004,
            title: "Gatito 4"
        },
        {
            id: "5",
            picUrl: cat005,
            title: "Gatito 5"
        },
        {
            id: "6",
            picUrl: cat006,
            title: "Gatito 6"
        },
        {
            id: "7",
            picUrl: cat007,
            title: "Gatito 7"
        },
        {
            id: "8",
            picUrl: cat008,
            title: "Gatito 8"
        },
    ];

    return Promise.resolve(data);
};

export const getPuppiesImages = (): Promise<PictureInfoModel[]> =>
{
    const data = [
        {
            id: "21",
            picUrl: dog001,
            title: "Perrito 1"
        },
        {
            id: "22",
            picUrl: dog002,
            title: "Perrito 2"
        },
        {
            id: "23",
            picUrl: dog003,
            title: "Perrito 3"
        },
        {
            id: "24",
            picUrl: dog004,
            title: "Perrito 4"
        },
        {
            id: "25",
            picUrl: dog005,
            title: "Perrito 5"
        },
        {
            id: "26",
            picUrl: dog006,
            title: "Perrito 6"
        },
    ];

    return Promise.resolve(data);
};