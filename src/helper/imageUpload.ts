export const cloudinary = require('cloudinary').v2;
import { CLOUDINARY_API_SECRET, CLOUDINARY_USER_NAME, CLOUDINARY_API_KEY } from "../config/index";

cloudinary.config({
   cloud_name: CLOUDINARY_USER_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
});

module.exports = { cloudinary };