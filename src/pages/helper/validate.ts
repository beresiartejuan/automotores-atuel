export const validate = (obj: Object) => {

    let isValid = true;


    const v = {
        has: (key: string) => {
            isValid = Object.keys(obj).includes(key) && isValid;
            return v;
        },
        value: (): boolean => {
            return isValid;
        }
    }

    return v;
}

export const has = (obj: Object, key: string) => {
    return Object.keys(obj).includes(key);
}