export const throttle = (cb, delay = 1000) => {
    let shouldWait = false;
    let waitArgs;

    const timmerFunc = () => {
        if (waitArgs === null) {
            shouldWait = false;
        } else {
            cb(...waitArgs);
            waitArgs = null;
            setTimeout(timmerFunc, delay)
        }
    }

    return (...args) => {

        if (shouldWait) {
            waitArgs = args;
            return;
        };
        cb(...args);
        shouldWait = true;
        setTimeout(timmerFunc, delay)
    }
}