import axios from "axios";

const API_URI = process.env.VUE_APP_API_URI;

class AuthService {
    async signup() {
        try {
            const response = await axios.get(`${API_URI}/auth/signup`)
            return response.data;

        } catch (error) {
            console.log(error);
        }
    }
}

export default new AuthService();