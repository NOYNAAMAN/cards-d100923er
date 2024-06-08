import { LOCAL_STORAGE_KEYS, getItemInLocalStorage, setItemInLocalStorage } from "./localStorageService";

const loginAttemptsKey = LOCAL_STORAGE_KEYS.INVALID_LOGIN_ATTEMPTS;

export const addFailedAttempt = (email) => {
    const attempts = getInvalidAttemptsItem();
    const currentTime = Date.now();
    const attempt = {
        email: email,
        time: currentTime
    };
    
    attempts.push(attempt);
    setItemInLocalStorage(loginAttemptsKey, JSON.stringify(attempts));
};

export const invalidAttemptsCounter = (email, lastHours) => {
    const attempts = getInvalidAttemptsItem();
    const currentTime = Date.now();

    return attempts.filter(a => a.email === email && currentTime - a.time <= lastHours * 60 * 60 * 1000).length;
};

export const isUserBlocked = (email) => {
    removeExpiredLoginAttempts(24);
    const MAX_ATTEMPTS = 3;
    if(invalidAttemptsCounter(email, 24) >= MAX_ATTEMPTS)
        return true;
    else
        return false;
}

export const getInvalidAttemptsItem = () => {
    const attempts = JSON.parse(getItemInLocalStorage(loginAttemptsKey, "[]"));
    return attempts;
};

export const removeExpiredLoginAttempts = (keepOnlyLastHours) => {
    const attempts = getInvalidAttemptsItem();
    const currentTime = Date.now();
    const filteredAttemptes = attempts.filter(a => currentTime - a.time <= keepOnlyLastHours * 60 * 60 * 1000);
    setItemInLocalStorage(loginAttemptsKey, JSON.stringify(filteredAttemptes))
}