import { isValidEmail } from "../utils/email";

export function validateLoginForm({ email, password }, t) {
  const errors = {};

  if (!email || !String(email).trim()) {
    errors.email = t.errEmailReq;
  } else if (!isValidEmail(email)) {
    errors.email = t.errInvalidEmail;
  }

  if (!password) {
    errors.password = t.errFillAll;
  }

  return errors;
}