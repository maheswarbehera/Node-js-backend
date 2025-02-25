class ApiError extends Error {
    constructor(
        statusCode,
        message = "something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.status = false
        this.errors = errors

        if(stack) {
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

// const sendErrorResponse = (res, error) => {
//     return res.status(error.statusCode).json({
//         statusCode: error.statusCode,
//         status: error.status,
//         message: error.message,
//         data: error.data,
//         errors: error.errors,
//     });
// };

// ex
// if (!username && !email) {
//     const error = new ApiError(400, "Either username or email is required");
//     return sendErrorResponse(res, error);
// }

const sendErrorResponse = (res, statusCode,name, message, errors = []) => {
    const error = new ApiError(statusCode, name ,message, errors);
    return res.status(error.statusCode).json({
        statusCode: error.statusCode,
        status: error.status,
        name: error.name,
        message: error.message,
        data: error.data,
        errors: error.errors,
    });
};
// ex
// if (!username && !email) {
//     return sendErrorResponse(res, 400, "Either username or email is required");
// }
export {ApiError, sendErrorResponse}