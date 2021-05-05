


export const getLocalItem = (item) => {
    if (typeof localStorage !== 'undefined') {
        return localStorage.getItem(item);
    }
    return null;
}
export const setLocalItem = (item, value) => {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem(item, value);
    }
}

export const removeLocalItem = (item) => {
    if (typeof localStorage !== 'undefined') {
        localStorage.removeItem(item);
    }
}