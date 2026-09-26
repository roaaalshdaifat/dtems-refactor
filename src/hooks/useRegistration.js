import { useState, useRef } from "react";
import { isValidEmail, emailStatus } from "../utils/email";
import { phoneDigitsFor } from "../utils/phone";

const PWD_FNS = [
  (p) => p.length >= 8,
  (p) => /[A-Z]/.test(p),
  (p) => /[^A-Za-z0-9]/.test(p),
];

const allRulesMet = (p) => PWD_FNS.every((fn) => fn(p));

export function useRegistration(t) {
  const [step, setStep] = useState("form");
  const [f, setF] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    level: "",
    institution: "",
    email: "",
    parentEmail: "",
    countryCode: "+962",
    phone: "",
    password: "",
    confirm: "",
    terms: false,
  });

  const [showPwd, setShowPwd] = useState(false);
  const [showConf, setShowConf] = useState(false);
  const [focused, setFocused] = useState(null);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(new Set());
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpErr, setOtpErr] = useState("");

  const timerRef = useRef(null);

  const setField = (k, v) => {
    setF((x) => ({ ...x, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const touch = (k) => {
    setTouched((s) => {
      const n = new Set(s);
      n.add(k);
      return n;
    });
  };

  const pwdReady = allRulesMet(f.password);
  const currentEmailStatus = emailStatus(f.email);
  const parentEmailValid = !f.parentEmail || isValidEmail(f.parentEmail);
  const confirmMismatch = !!f.confirm && f.password !== f.confirm;
  const requiredDigits = phoneDigitsFor(f.countryCode);
  const phoneDigitsOnly = f.phone.replace(/\D/g, "");
  const phoneValid = phoneDigitsOnly.length === requiredDigits;

  return {
    step, setStep, f, setField, showPwd, setShowPwd, showConf, setShowConf,
    focused, setFocused, errors, setErrors, touched, setTouched, touch,
    loading, setLoading, otp, setOtp, otpLoading, setOtpLoading, otpErr, setOtpErr,
    pwdReady, currentEmailStatus, parentEmailValid, confirmMismatch,
    requiredDigits, phoneDigitsOnly, phoneValid,
    timerRef,
  };
}