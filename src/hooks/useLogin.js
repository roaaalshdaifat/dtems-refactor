import { useRef, useState } from "react";
import { isValidEmail } from "../utils/email";

export function useLogin(lang = "en", t) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [focused, setFocused] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const timerRef = useRef(null);

  const emailErr =
    emailTouched && email && !isValidEmail(email) ? t.errInvalidEmail : undefined;

  const submit = (e) => {
    e.preventDefault();

    if (loading) return;

    setError("");
    setEmailTouched(true);

    if (!email || !password) {
      setError(t.errFillAll);
      return;
    }

    if (!isValidEmail(email)) {
      setError(t.errInvalidEmail);
      return;
    }

    setLoading(true);

    timerRef.current = setTimeout(() => {
      setLoading(false);
      setError(t.errInvalidCreds);
    }, 2000);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    showPwd,
    setShowPwd,
    focused,
    setFocused,
    loading,
    error,
    setError,
    rememberMe,
    setRememberMe,
    emailTouched,
    setEmailTouched,
    emailErr,
    submit,
  };
}