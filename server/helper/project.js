
export function pagination(pageNo, itemPerPage, arr) {
    let items = [];
    if ((pageNo * itemPerPage) <= arr.length) {
        items = arr.slice((pageNo - 1) * itemPerPage, pageNo * itemPerPage);
    } else {
        items = arr.slice((pageNo - 1) * itemPerPage, arr.length);
    }
    return items;

}
