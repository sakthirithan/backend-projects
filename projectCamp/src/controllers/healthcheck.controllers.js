import { ApiResponse } from "../utils/api-response.js";
import {asyncHandler} from "../utils/async-handler.js";
/**
 * 
* @description Health check controller with try catch block to handle any unexpected errors.

const healthCheck = (req, res, next) => {
    try {
        res.status(200)
        .json(
            new ApiResponse(200,{message: "Server is running fine!"}));
        
    } catch (err) {
        next(err)
    }
};

*/

const healthCheck = asyncHandler(async (req, res) => {
    res.status(200).json(
        new ApiResponse(200, {message: "Server is running fine!"})
    )
});

export { healthCheck };