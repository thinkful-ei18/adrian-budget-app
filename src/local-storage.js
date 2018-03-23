export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};


// We want users to log back in when the page is refreshed!
export const saveAuthToken = authToken => {
    try {
        localStorage.setItem('authToken', authToken);
    } catch (e) {}
};

export const clearAuthToken = () => {
    console.log('Clearing AuthToken...');

    try {
        localStorage.removeItem('authToken');
    } catch (e) {}
};
