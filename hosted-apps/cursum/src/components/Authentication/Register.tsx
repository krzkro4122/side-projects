import { FormEvent, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  validatePassword,
  validateEmail,
  validateFirstName,
  validateLastName,
} from "helpers/validation";
import { Email, Password, FirstName, LastName } from "helpers/types";
import { AuthContext } from "./AuthProvider";
import { usePermit } from "./useAuth";

import "styles/Auth.css";

function register() {
  const [email, setEmail] = useState<Email>();
  const [password, setPassword] = useState<Password>();
  const [firstName, setFirstName] = useState<FirstName>();
  const [lastName, setLastName] = useState<LastName>();
  const [passwordRepeat, setPasswordRepeat] = useState<Password>();
  const [emailIsLegal, setEmialIsLegal] = useState<boolean>(true);
  const [firstNameIsLegal, setFirstNameIsLegal] = useState<boolean>(true);
  const [lastNameIsLegal, setLastNameIsLegal] = useState<boolean>(true);
  const [passwordIsLegal, setPasswordIsLegal] = useState<boolean>(true);
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const { registerAndSetUser } = useContext(AuthContext);

  useEffect(() => {
    setEmialIsLegal(validateEmail(email));
    setFirstNameIsLegal(validateFirstName(firstName));
    setLastNameIsLegal(validateLastName(lastName));
    setPasswordIsLegal(validatePassword(password));
    setPasswordsMatch(password === passwordRepeat);
  }, [email, password, passwordRepeat, firstName, lastName]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitted(true);

    if (!emailIsLegal || !passwordIsLegal || !passwordsMatch) {
      return;
    }

    registerAndSetUser({
      email,
      firstName,
      lastName,
      password,
    });
  }

  return usePermit(
    <div className="page">
      <div className="formContainer">
        <h1>Register 📝</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="E-mail"
              onChange={(event) => setEmail(event.target.value)}
              className={
                (!emailIsLegal && isSubmitted ? "invalid" : "") + " input"
              }
              autoFocus
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="First Name"
              onChange={(event) => setFirstName(event.target.value)}
              className={
                (!firstNameIsLegal && isSubmitted ? "invalid" : "") + " input"
              }
              autoFocus
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Last Name"
              onChange={(event) => setLastName(event.target.value)}
              className={
                (!lastNameIsLegal && isSubmitted ? "invalid" : "") + " input"
              }
              autoFocus
            />
          </label>
          <label>
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              className={
                (!passwordIsLegal && isSubmitted ? "invalid" : "") + " input"
              }
            />
          </label>
          <label>
            <input
              type="password"
              placeholder="Password (Repeat)"
              onChange={(event) => setPasswordRepeat(event.target.value)}
              className={
                (!passwordsMatch && isSubmitted ? "invalid" : "") + " input"
              }
            />
          </label>
          <div className="buttons">
            <button id="submit" className="button" type="submit">
              Sign up
            </button>
            <Link id="re-route" className="button" to="/cursum/login">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>,
    "/cursum/"
  );
}

export default register;
