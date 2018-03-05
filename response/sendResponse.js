var sendSuccessResponse = function(res,data){
    var response = {}
    response.data = data;
    res.status(200);
    res.send(response);
}

var sendFailureResponse = function(res, status, error){
    var response = {}
    response.error = error;
    res.status(status);
    res.send(response);
}

module.exports = {
    sendSuccessResponse : sendSuccessResponse,
    sendFailureResponse : sendFailureResponse
}