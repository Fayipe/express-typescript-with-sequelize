const cloudinary = require('cloudinary').v2;
import { CLOUDINARY_API_SECRET, CLOUDINARY_USER_NAME, CLOUDINARY_API_KEY } from "../config";

cloudinary.config({
    CLOUDINARY_USER_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET,
});

module.exports = cloudinary;