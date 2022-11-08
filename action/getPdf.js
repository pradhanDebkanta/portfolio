import apiService from "../services/apiService";

export const getPdf = async url => {
    try {
        const res = await apiService.get('/api/get-pdf', { url, token: process.env.NEXT_PUBLIC_API_TOKEN })
        return res.data;
    } catch (e) {
        console.log(e.message);
    }
} 