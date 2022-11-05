import apiService from "../services/apiService";

export const getVisitors = async () => {
    try {
        const response = await apiService.get('api/visitors', '', {});
        console.log('res', response.data);
        if (response.status >= 200 && response.status < 400) {
            return response.data;
        } else {
            return {};
        }
    } catch (err) {
        console.log(err.message);
    }
}