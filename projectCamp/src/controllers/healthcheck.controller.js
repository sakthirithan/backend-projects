import { ApiResponse } from '../utils/api-response.js';
import { ApiError } from '../utils/api-error.js';
import { asyncHandler } from "../utils/async-handler.js";

/**
 * @description Health check controller to check if the server is running fine. Try-catch overhead 
 * 
const healthCheck = async(req, res, next) => {
   try {
    const user = await getUserFromDB();
    res.status(200).json(
        new ApiResponse(200, "Server is running fine!", {status: "ok"}));
   } catch(error){
        next(error);
   }

};

*/

const healthCheck = asyncHandler(async(req, res, next) => {
     res.status(200).json(
          new ApiResponse(200, "Server is running fine!", {status: "ok"})
     )
});

export { healthCheck };