import conf from '../config/conf'
import { Client, Databases, Storage, ID, Query } from 'appwrite'

export class Service {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client.setEndpoint(conf.appwriteUrl)
        this.client.setProject(conf.appwriteProjectID);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client);
    }

    async createPost({title, content, featuredImage, userID, status, slug}) {
        try {
            return this.databases.createDocument( conf.appwriteDatabaseID, conf.appwriteCollectionID, slug, {
                title,
                content,
                featuredImage,
                userID,
                status
            })
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug,{title, content, featuredImage, userID, status}) {
        try {
            return this.databases.updateDocument(conf.appwriteDatabaseID, conf.appwriteCollectionID, slug, {
                title,
                content,
                featuredImage,
                status
            })
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseID, conf.appwriteCollectionID, slug)
            return true;
        }
        catch(error) {
            throw error;
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseID, conf.appwriteCollectionID, slug) 
        } catch (error) {
            throw error;
        }
    }
}

