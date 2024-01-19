import conf from '../config/conf'
import { Client, Account, ID } from 'appwrite'

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl);
        this.client.setProject(conf.appwriteProjectID);
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}) {
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount) {
                return this.login({email,password});
            }
            else {
                return userAccount;
            }
        }
        catch(error) {
            throw error;
        }
    }
    
    async login({email,password}) {
        try {
            let logAccount = await this.account.createEmailSession(email, password);
            return logAccount
        }
        catch(error) {
            throw error;
        }
    }

    async getCurrentUser() {
        if(this.account) {
            try {
                return await this.account.get();
            } catch (error) {
                throw error;
            }
        }
        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSession();
        } catch (error) {
            throw error;
        }
    }
}



const authService = new AuthService();

export default authService;