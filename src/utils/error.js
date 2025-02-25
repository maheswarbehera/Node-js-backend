import { ApiError } from "./ApiError.js";
// const sendErrorResponse = (res, error) => {
//     return res.status(error.statusCode).json({
//         statusCode: error.statusCode,
//         success: error.success,
//         message: error.message,
//         data: error.data,
//         errors: error.errors,
//     });
// };

const sendErrorResponse = (res, statusCode, message, errors = []) => {
    const error = new ApiError(statusCode, message, errors);
    return res.status(error.statusCode).json({
        statusCode: error.statusCode,
        success: error.success,
        message: error.message,
        data: error.data,
        errors: error.errors,
    });
};
export default sendErrorResponse