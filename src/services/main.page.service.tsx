import { PictureInfoModel } from "models/dto";
import { getKittiesImages, getPuppiesImages } from "api/image.provider";

export const getImages = (animalFamily: string) : Promise<PictureInfoModel[]> =>
{
    if (!animalFamily || animalFamily == "kitties") {
        return getKittiesImages();
    }
    else if (animalFamily == "puppies") {
        return getPuppiesImages();
    }
    else {
        return Promise.resolve([]);
    }
}
