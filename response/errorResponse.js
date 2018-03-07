
const makeError = function(code,error){
    console.log(code);
    console.log(error);
    console.log(this);
    this.code = code;
    this.error = error;
    console.log(this);
    return this;
}

module.exports = {
    makeError: makeError
}