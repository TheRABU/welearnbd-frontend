import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.VITE_CLOUDINARY_API_KEY,
  api_secret: import.meta.env.VITE_CLOUDINARY_API_SECRET,
});

const uploadImageToCloudinaryFrontend = async (file) => {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${
        cloudinary.config().cloud_name
      }/weLearnBD/frontend/users/image`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    return data.secure_url; // URL of the uploaded image
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export default uploadImageToCloudinaryFrontend;
