import { ApiError } from '../../types/ApiError.js';

export const generateError = (
    code: string,
    msgid: string,
    method: string
): ApiError => {
    let desc;

    switch (code) {
        case '700101':
            desc = 'Invalid Server Response';
            break;
        case '700102':
            desc = 'Invalid Request Body';
            break;
        case '700103':
            desc = 'Authentication Error';
            break;
        default:
            code = '700999';
            desc = 'Unknown yoyoApi Error';
    }

    return {
        code,
        time: new Date().getTime(),
        msgid,
        method,
        desc,
        data: {},
    };
};
