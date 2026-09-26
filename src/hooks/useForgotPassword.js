import { useState, useRef } from "react";
import { isValidEmail } from "../utils/email";

const PWD_FNS = [
  (p) => p.length >= 8,
  (p) => /[A-Z]/.test(p),
  (p) => /[^A-Za-z0-9]/.test(p),
];

const allRulesMet = (p) => PWD_FNS.every((fn) => fn(p));

export function useForgotPassword(t) {
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpErr, setOtpErr] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [showConf, setShowConf] = useState(false);
  const [focused, setFocused] = useState(null);
  const [resetLoading, setResetLoading] = useState(false);

  const emailErr =
    emailTouched && email && !isValidEmail(email) ? t.errInvalidEmail : undefined;

  const pwdReady = allRulesMet(password);
  const confirmMismatch = !!confirm && password !== confirm;

  return {
    step, setStep, email, setEmail, emailTouched, setEmailTouched,
    emailLoading, setEmailLoading, emailErr, otp, setOtp, otpErr, setOtpErr,
    otpLoading, setOtpLoading, password, setPassword, confirm, setConfirm,
    showPwd, setShowPwd, showConf, setShowConf, focused, setFocused,
    resetLoading, setResetLoading, pwdReady, confirmMismatch,
  };
}