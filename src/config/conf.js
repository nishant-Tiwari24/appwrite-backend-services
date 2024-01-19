export const confiq = () => {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL);
    appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID);
    appwriteCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID);
    appwriteBucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID);
}
