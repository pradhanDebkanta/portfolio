import apiService from "../services/apiService";

export const getPdf = async url => {
    try {
        const res = await apiService.get('/api/get-pdf', { url })
        return res.data;
    } catch (e) {
        console.log(e.message);
    }
} 