class ApiError extends Error {
    constructor(
        statuscode,
        message= "something went wrong",
        error = [],
        statck = "" 
        
    ){
        super(message)
        this.statusCode = statusCode
        this.date = null
        this.message = message
        this.success = false;
        this.errors = this.errors

        if(stack){
            this.stack = statck
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}