var sendSuccessResponse = function(res,data){
    var response = {}
    response.data = data;
    response.code = 200;
    res.status(200);
    res.send(response);
}

var sendFailureResponse = function(res, status, error, errorCode){
    var response = {}
    response.data = {};
    response.data.error = error;
    response.code = errorCode;
    res.status(status);
    res.send(response);
}

module.exports = {
    sendSuccessResponse : sendSuccessResponse,
    sendFailureResponse : sendFailureResponse
}