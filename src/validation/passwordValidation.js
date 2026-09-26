export const PWD_RULES_KEYS = ["pwdRule1", "pwdRule2", "pwdRule3"];

export const PWD_FNS = [
  (p) => p.length >= 8,
  (p) => /[A-Z]/.test(p),
  (p) => /[^A-Za-z0-9]/.test(p),
];

export function allRulesMet(p) {
  return PWD_FNS.every((fn) => fn(p));
}

export function isStrongPassword(password = "") {
  return (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[^A-Za-z0-9]/.test(password)
  );
}

export function getPasswordValidationRules(password = "") {
  return [
    {
      key: "pwdRule1",
      ok: password.length >= 8,
    },
    {
      key: "pwdRule2",
      ok: /[A-Z]/.test(password),
    },
    {
      key: "pwdRule3",
      ok: /[^A-Za-z0-9]/.test(password),
    },
  ];
}