import { fetch } from "./interceptor";

const apiService = {};

apiService.get = (url, params, headers) => {
    return fetch({
        url,
        method: 'get',
        headers,
        params,
    });
};

apiService.post = (url, body, headers) => {
    return fetch({
        url,
        method: 'post',
        headers,
        body
    });
};

apiService.put = (url, body, headers) => {
    return fetch({
        url,
        method: 'put',
        headers,
        body
    });
};

apiService.patch = (url, body, params, headers) => {
    return fetch({
        url,
        method: 'patch',
        headers,
        body,
        params,
    });
};

apiService.delete = (url, params, headers) => {
    return fetch({
        url,
        method: 'delete',
        headers,
        params,
    })

}

export default apiService;