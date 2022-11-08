import apiService from "../services/apiService";

export const getPersonalProject = async (pageNo, perPageItem) => {
    try {
        const res = await apiService.get('/api/project', { projectType: 'personal', pageNo, perPageItem, token: process.env.NEXT_PUBLIC_API_TOKEN });
        if (res.status !== 200) {
            res.data = {
                projects: [],
                totalItem: 0,
            };
        } else {
            res.data = JSON.parse(res.data);
        }
        return res.data;
    } catch (e) {
        console.log(e.message);
    }
}

export const getContributionProject = async (pageNo, perPageItem) => {
    try {
        const res = await apiService.get('/api/project', { projectType: 'contribute', pageNo, perPageItem, token: process.env.NEXT_PUBLIC_API_TOKEN });
        if (res.status !== 200) {
            res.data = {
                projects: [],
                totalItem: 0,
            };
        } else {
            res.data = JSON.parse(res.data);
        }
        return res.data;
    } catch (e) {
        console.log(e.message);
    }
}
