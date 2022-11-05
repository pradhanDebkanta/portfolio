import apiService from "../services/apiService";

export const getVisitors = async () => {
    try {
        const res = await apiService.get('api/visitors', '', {
            Cookie: "name=debkanta;"
        });

        console.log('res', res?.headers);

    } catch (err) {
        console.log(err.message);
    }
}