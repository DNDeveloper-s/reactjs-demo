import storage from "../../firebase.config";
import {ref, uploadBytes} from "firebase/storage";

export const uploadImage = async (file: any) => {
    try {
        const folderRef = ref(storage, file.name);
        const snapshot = await uploadBytes(folderRef, file);
        console.log('File Uploaded', snapshot);
        return snapshot.metadata.fullPath;
    } catch (e: any) {
        throw new Error(e.message);
    }
};
