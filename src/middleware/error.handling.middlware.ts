import express from "express";

//handle email or usename duplicates
const handleDuplicateKeyError = (err: any, res: express.Response) => {
  const field = Object.keys(err.keyValue);
  const code = 409;
  // An account with that
  const error = `${field} already exists.`;
  res.status(code).send({ messages: error, fields: field });
};
//handle field formatting, empty fields, and mismatched passwords
const handleValidationError = (err: any, res: express.Response) => {
  let errors = Object.values(err.errors).map((el: any) => el.message);
  let fields = Object.values(err.errors).map((el: any) => el.path);
  let code = 400;
  if (errors.length > 1) {
    const formattedErrors = errors.join("");
    res.status(code).send({ messages: formattedErrors, fields: fields });
  } else {
    res.status(code).send({ messages: errors, fields: fields });
  }
};
//error controller function
export const errorHandling = (
  err: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    if (err.name === "ValidationError")
      return (err = handleValidationError(err, res));
    if (err.code && err.code == 11000)
      return (err = handleDuplicateKeyError(err, res));
    res.status(500).send("An unknown error occurred.");
  } catch (err) {
    res.status(500).send("An unknown error occurred.");
  }
};
// export default errorHandling;
