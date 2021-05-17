import { PictureInfoModel } from "models/dto/picture.info.model";
import { PictureInfoVm } from "./picture.info.vm";

export const mapPictureInfoModelToPictureInfoVm = (
  pictureInfo: PictureInfoModel
): PictureInfoVm => {
  return {
    ...pictureInfo,
    selected: false,
  };
};
