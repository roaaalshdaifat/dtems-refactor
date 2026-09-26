export function normalizeEmail(value = "") {
  return String(value).trim().toLowerCase();
}

export function isNonEmpty(value) {
  return String(value).trim().length > 0;
}

export function hasUppercase(value = "") {
  return /[A-Z]/.test(value);
}

export function hasSpecialChar(value = "") {
  return /[^A-Za-z0-9]/.test(value);
}

export function isValidPhoneLength(value = "", digits = 9) {
  const clean = String(value).replace(/\D/g, "");
  return clean.length === digits;
}

export function isStrongPassword(password = "") {
  return (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[^A-Za-z0-9]/.test(password)
  );
}