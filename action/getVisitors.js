import apiService from "../services/apiService";
import Cookies from "js-cookie";

export const getVisitors = async (apiToken) => {
    try {
        const cookieToken = Cookies.get('token');
        // console.log(cookieToken, 'token');
        const response = await apiService.get('api/visitors', { token: apiToken }, {
            'x-token': cookieToken
        });
        // console.log('res', response.headers['x-token']);
        console.log(response?.data);

        if (response?.headers['x-token']) {
            Cookies.set('token', response.headers['x-token'], {
                expires: 365 * 2
            });
        }

        if (response.status >= 200 && response.status < 400) {
            return response.data;
        } else {
            return {};
        }
    } catch (err) {
        console.log(err.message);
    }
}