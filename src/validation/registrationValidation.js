import { isValidEmail, emailStatus } from "../utils/email";
import { isNonEmpty, isValidPhoneLength } from "./utils";

export function validateRegistrationForm(form, t, options = {}) {
  const {
    pwdReady = true,
    confirmMismatch = false,
    requiredDigits = 9,
  } = options;

  const errors = {};

  if (!isNonEmpty(form.firstName)) errors.firstName = t.errRequired;
  if (!isNonEmpty(form.lastName)) errors.lastName = t.errRequired;
  if (!form.level) errors.level = t.errSelectLevel;
  if (!isNonEmpty(form.institution)) errors.institution = t.errInstitutionReq;

  if (!isNonEmpty(form.email)) {
    errors.email = t.errEmailReq;
  } else if (emailStatus(form.email) === "invalid") {
    errors.email = t.errInvalidEmail;
  } else if (emailStatus(form.email) === "taken") {
    errors.email = t.errEmailTaken;
  }

  if (form.parentEmail && !isValidEmail(form.parentEmail)) {
    errors.parentEmail = t.errParentEmail;
  }

  if (!isNonEmpty(form.phone)) {
    errors.phone = t.errPhoneReq;
  } else if (!isValidPhoneLength(form.phone, requiredDigits)) {
    errors.phone = (t.errPhoneDigits || "{n} digits required")
      .replace("{n}", String(requiredDigits))
      .replace("{code}", form.countryCode || "");
  }

  if (!form.password) {
    errors.password = t.errPwdReq;
  } else if (!pwdReady) {
    errors.password = t.errPwdRules;
  }

  if (!form.confirm) {
    errors.confirm = t.errConfirmReq;
  } else if (confirmMismatch) {
    errors.confirm = t.errConfirmMismatch;
  }

  if (!form.terms) {
    errors.terms = t.errTerms;
  }

  return errors;
}