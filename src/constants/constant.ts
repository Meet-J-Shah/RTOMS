const CONSTANTS = {
  RESPONSE_CODES: {
    SUCCESS: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
  },

  RESPONSE_MESSAGES: {
    SUCCESS: "Success",
    BAD_REQUEST: "Bad Request",
    UNAUTHORIZED: "Unauthorized",
    FORBIDDEN: "Forbidden",
    NOT_FOUND: "Not Found",
    INTERNAL_SERVER_ERROR: "Internal Server Error",
    FAILED_VALIDATION: "validation failed",
    USER_RESPONSES: {
      SIGN_SUCESS: "Signin successfully",
      REGISTER_SUCESS: "New user registered successfully",
      USER_LIST: "List of all users having role [user]",
      RESET_PASSWORD_SUCESS: "Password changed sucessfully.. ",
      FORGET_PASSWORD_SUCESS: "SEND mail to user sucessfully..",
      ADMIN_LIST: "List of all users having role [user] or [admin]",

      USER_FETCH1: "User with Id:- ",
      //${userId}
      USER_FETCH2: " Sucessfully fetched",

      USER_UPDATE1: "User with Id :- ",
      USER_UPDATE2: " Sucessfully Updated.. Updated User is :- ",

      USER_DELETE1: "User with Id:- ",
      //${userId}
      USER_DELETE2:
        " Sucessfully Deleted ..List of all users after Deletation :- ",
    },
  },

  ERROR_MESSAGES: {
    VALIDATION_ERROR: "Validation error",
    UNAUTHORIZED_ACCESS: "Access is denied due to invalid credentials",
    RESOURCE_NOT_FOUND: "The requested resource was not found",
    SERVER_ERROR: "An unexpected error occurred on the server",
    DEFAULT_ERROR: "Something broke!",
    NO_ERROR_DATA: "Error data not provided",
    USER_ERRORS: {
      FAILED_VALIDATION: "Email or Password or both are not found",
      PWD_CHANGED_RECENTLY:
        "You can't change password two times via forgot password in span 48 hours",
      NOT_FOUND: "No User Founded with given Credentials",
      PWD_NOT_MATCHED: "Password is not matched with database",
      USER_EXISTS: "User already exist with given credentials!",
      NOT_FOUND_LIST: "No user in the System!!",
      NOT_FETCH_USER: "Error fetching user",
      NOT_FETCH_USERS: "Error fetching users",
      NOT_DELETE: "Error deleting user",
      NOT_UPDATE: "Error updating user",
    },
    TOKEN_ERRORS: {
      MISSING_TOKEN: "Token is Missing",
      NOT_BEARER: "Token type is not bearer or (not valid Token Format)",
      INVALID_TOKEN:
        "Invalid Token (Invalid username or password..!) or Expired Token",
      USER_NOT_FOUND: "User not found in database",
      NOT_ADMIN: `User doesn't exist in database or Its role is not admin`,
    },
  },

  VALIDATION_MESSAGES: {
    VALIDATE_ID: {
      "number.base": `Id must be a type of number`,
      "any.required": `Id is a required field`,
      "number.empty": `Id must contain value`,
      "number.max": `Id must be less than or equal to {{#limit}}`,
      "number.min": `Id must be greater than or equal to {{#limit}}`,
    },
    VALIDTAE_PWD: {
      "string.base": `Password should be a type of string`,
      "string.empty": `Password must contain value`,
      "string.pattern.base": `Password must have Minimum 8 and maximum 15 characters, at least one uppercase letter, one lowercase letter, one number and one special character:`,
      "any.required": `Password is a required field`,
    },
    VALIDATE_EMAIL: {
      "string.base": `Email should be a type of string`,
      "string.empty": `Email must contain value`,
      "any.required": `Email is a required field`,
      "string.email": `Enter Proer Email Address`,
    },
    VALIDATE_ROLE: {
      "string.base": `Role should be a type of string`,
      "string.empty": `Role must contain value`,
      "any.required": `Role is a required field`,
      "any.invalid": `Role must have value be one of [admin, user]`,
      "string.pattern.base": `Role must have Value user or admin`,
    },

    INVALID_EMAIL: "Email is not valid",
    INVALID_PASSWORD: "Password is not valid",
    INVALID_NAME: "Name is not valid",
    INVALID_PHONE: "Phone is not valid",
    INVALID_ADDRESS: "Address is not valid",
    INVALID_CITY: "City is not valid",
    INVALID_STATE: "State is not valid",
    INVALID_COUNTRY: "Country is not valid",
    INVALID_ZIP: "Zip is not valid",
    INVALID_ROLE: "Role is not valid",
    INVALID_STATUS: "Status is not valid",
    INVALID_ID: "Id is not valid",
    INVALID_USER_ID: "User Id is not valid",
    INVALID_CATEGORY_ID: "Category Id is not valid",
    INVALID_PRODUCT_ID: "Product Id is not valid",
    INVALID_ORDER_ID: "Order Id is not valid",
    INVALID_ORDER_STATUS: "Order Status is not valid",
    INVALID_ORDER_DATE: "Order Date is not valid",
    INVALID_ORDER_AMOUNT: "Order Amount is not valid",
    INVALID_ORDER_QUANTITY: "Order Quantity is not valid",
    INVALID_ORDER_PRODUCT: "Order Product is not valid",
    INVALID_ORDER_USER: "Order User is not valid",
    INVALID_ORDER_ADDRESS: "Order Address is not valid",
    INVALID_ORDER_PAYMENT: "Order Payment is not valid",
    INVALID_ORDER_PAYMENT_TYPE: "Order Payment Type is not valid",
    INVALID_ORDER_PAYMENT_STATUS: "Order Payment Status is not valid",
    INVALID_ORDER_PAYMENT_DATE: "Order Payment Date is not valid",
    INVALID_ORDER_PAYMENT_AMOUNT: "Order Payment Amount is not valid",
    INVALID_ORDER_PAYMENT_USER: "Order Payment User is not valid",
    INVALID_ORDER_PAYMENT_ADDRESS: "Order Payment Address is not valid",
    INVALID_ORDER_PAYMENT_PRODUCT: "Order Payment Product is not valid",
    INVALID_ORDER_PAYMENT_QUANTITY: "Order Payment Quantity is not valid",
    INVALID_ORDER_PAYMENT_MODE: "Order Payment Mode is not valid",
    INVALID_ORDER_PAYMENT_CARD: "Order Payment Card is not valid",
    INVALID_ORDER_PAYMENT_CARD_NUMBER: "Order Payment Card Number is not valid",
    INVALID_ORDER_PAYMENT_CARD_EXPIRY: "Order Payment Card Expiry is not valid",
    INVALID_ORDER_PAYMENT_CARD_CVV: "Order Payment Card CVV is not valid",
    INVALID_ORDER_PAYMENT_CARD_TYPE: "Order Payment Card Type is not valid",
    INVALID_ORDER_PAYMENT_CARD_HOLDER: "Order Payment Card Holder is not valid",
  },

  LOG_MESSAGES: {
    DB_CONNECTION: "Connection has been established successfully.",
  },
};

export default CONSTANTS;
