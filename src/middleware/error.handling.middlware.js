"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandling = void 0;
//handle email or usename duplicates
var handleDuplicateKeyError = function (err, res) {
    var field = Object.keys(err.keyValue);
    var code = 409;
    // An account with that
    var error = field + " already exists.";
    res.status(code).send({ messages: error, fields: field });
};
//handle field formatting, empty fields, and mismatched passwords
var handleValidationError = function (err, res) {
    var errors = Object.values(err.errors).map(function (el) { return el.message; });
    var fields = Object.values(err.errors).map(function (el) { return el.path; });
    var code = 400;
    if (errors.length > 1) {
        var formattedErrors = errors.join("");
        res.status(code).send({ messages: formattedErrors, fields: fields });
    }
    else {
        res.status(code).send({ messages: errors, fields: fields });
    }
};
//error controller function
var errorHandling = function (err, req, res, next) {
    try {
        if (err.name === "ValidationError")
            return (err = handleValidationError(err, res));
        if (err.code && err.code == 11000)
            return (err = handleDuplicateKeyError(err, res));
        res.status(500).send("An unknown error occurred.");
    }
    catch (err) {
        res.status(500).send("An unknown error occurred.");
    }
};
exports.errorHandling = errorHandling;
// export default errorHandling;
