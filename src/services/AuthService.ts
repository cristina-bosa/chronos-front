import User from "@/types/User.type";
import axios from "axios";

const API_URI = process.env.VUE_APP_API_URI;

class AuthService {
    //register
    async signUp(user: User) {
        try {
            const response = await axios.post(`${API_URI}auth/signup`, user)
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    //login
    async signIn(user: User) {
        try {
            const response = await axios.post(`${API_URI}auth/signin`, user)
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

}

export default new AuthService();