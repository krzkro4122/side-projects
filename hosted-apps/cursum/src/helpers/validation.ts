import { Email, FirstName, LastName, Password, Token } from "./types";

export function validateEmail(email: Email) {
    // TODO - email validation
    return !!email;
}

export function validateFirstName(firstName: FirstName) {
    // TODO - firstName validation
    return !!firstName;
}

export function validateLastName(lastName: LastName) {
    // TODO - lastName validation
    return !!lastName;
}

export function validatePassword(password: Password) {
    // TODO - password validation
    return !!password;
}

export function validateToken(token: Token) {
    // TODO - password validation
    return !!token;
}