// uploadCloud.js
const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;
const cloud_name = import.meta.env.VITE_CLOUD_NAME;

const uploadImageCloud = async (file) => {
    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("upload_preset", upload_preset);
    uploadData.append("cloud_name", cloud_name);

    try {
        const res = await fetch(
            `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
            {
                method: "POST",
                body: uploadData,
            }
        );

        if (!res.ok) {
            throw new Error("Failed to upload image to Cloudinary");
        }

        const data = await res.json();
        console.log("Image uploaded successfully:", data);
        return data;
    } catch (error) {
        console.error("Error during image upload:", error);
    }
};

export default uploadImageCloud;
