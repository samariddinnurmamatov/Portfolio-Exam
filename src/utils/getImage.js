import { IMAGE_URL } from "../const";

export const getImage = (photo) => {
  return IMAGE_URL + photo._id + "." + photo.name.split(".")[1];
};
