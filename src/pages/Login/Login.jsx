import { I18N } from "../i18n/translations";
import Button from "../components/common/Button/Button";
import TextInput from "../components/common/TextInput/TextInput";
import PasswordInput from "../components/common/PasswordInput/PasswordInput";
import FormField from "../components/common/FormField/FormField";
import Checkbox from "../components/common/Checkbox/Checkbox";
import BackButton from "../components/common/BackButton/BackButton";
import { useLogin } from "../hooks/useLogin";
import "./Login.css";

export default function Login({ onNavigate, lang = "en" }) {
  const t = I18N[lang];
  const loginState = useLogin(lang, t);

  const handleBackClick = () => {
    onNavigate("home");
  };

  return (
    <div className="dt-page-login">
      <div className="dt-login-container">
        <BackButton onClick={handleBackClick}>{t.loginBackHome}</BackButton>

        <div className="dt-login-content">
          <h1 className="dt-login-title">{t.loginTitle}</h1>
          <p className="dt-login-subtitle">{t.loginSubtitle}</p>

          <form className="dt-login-form" onSubmit={loginState.submit}>
            {loginState.error && (
              <div className="dt-error-box">{loginState.error}</div>
            )}

            <FormField
              label="Email"
              error={loginState.emailErr}
              required
            >
              <TextInput
                type="email"
                value={loginState.email}
                onChange={loginState.setEmail}
                onFocus={() => loginState.setFocused("email")}
                onBlur={() => {
                  loginState.setFocused(null);
                  loginState.setEmailTouched(true);
                }}
                focused={loginState.focused === "email"}
                hasErr={!!loginState.emailErr}
                placeholder="your@email.com"
                autoComplete="email"
              />
            </FormField>

            <FormField label="Password" required>
              <PasswordInput
                value={loginState.password}
                onChange={loginState.setPassword}
                show={loginState.showPwd}
                onToggle={() => loginState.setShowPwd(!loginState.showPwd)}
                onFocus={() => loginState.setFocused("password")}
                onBlur={() => loginState.setFocused(null)}
                focused={loginState.focused === "password"}
                placeholder="••••••••"
                autoComplete="current-password"
              />
            </FormField>

            <div className="dt-login-remember-forgot">
              <Checkbox
                checked={loginState.rememberMe}
                onChange={(e) => loginState.setRememberMe(!loginState.rememberMe)}
                label={t.loginRemember}
              />
              <a href="#" className="dt-forgot-link">
                {t.loginForgot}
              </a>
            </div>

            <Button
              type="submit"
              loading={loginState.loading}
              disabled={loginState.loading}
            >
              {loginState.loading ? t.loginBtnLoading : t.loginBtn}
            </Button>
          </form>

          <p className="dt-login-footer">
            {t.loginNoAccount} <a href="#">{t.loginRegister}</a>
          </p>
        </div>
      </div>
    </div>
  );
}