import { I18N } from "../i18n/translations";
import Button from "../components/common/Button/Button";
import TextInput from "../components/common/TextInput/TextInput";
import PasswordInput from "../components/common/PasswordInput/PasswordInput";
import FormField from "../components/common/FormField/FormField";
import BackButton from "../components/common/BackButton/BackButton";
import { useForgotPassword } from "../hooks/useForgotPassword";
import "./ForgotPassword.css";

export default function ForgotPassword({ onNavigate, lang = "en" }) {
  const t = I18N[lang];
  const fp = useForgotPassword(t);

  const handleBackClick = () => {
    onNavigate("login");
  };

  return (
    <div className="dt-page-forgot-password">
      <div className="dt-fp-container">
        <BackButton onClick={handleBackClick}>Back to Login</BackButton>

        <div className="dt-fp-content">
          {fp.step === "email" && (
            <>
              <h1 className="dt-fp-title">{t.fpTitle}</h1>
              <p className="dt-fp-subtitle">{t.fpSubtitle}</p>

              <form className="dt-fp-form">
                <FormField label="Email" required error={fp.emailErr}>
                  <TextInput
                    type="email"
                    value={fp.email}
                    onChange={fp.setEmail}
                    onBlur={() => fp.setEmailTouched(true)}
                    focused={fp.focused === "email"}
                    onFocus={() => fp.setFocused("email")}
                    placeholder="your@email.com"
                    autoComplete="email"
                  />
                </FormField>

                <Button
                  type="button"
                  loading={fp.emailLoading}
                  onClick={() => {
                    if (fp.email && !fp.emailErr) {
                      fp.setEmailLoading(true);
                      setTimeout(() => {
                        fp.setEmailLoading(false);
                        fp.setStep("otp");
                      }, 1500);
                    }
                  }}
                >
                  {fp.emailLoading ? t.fpSendingBtn : t.fpSendBtn}
                </Button>
              </form>
            </>
          )}

          {fp.step === "otp" && (
            <>
              <h1 className="dt-fp-title">{t.fpOtpTitle}</h1>
              <p className="dt-fp-subtitle">
                {t.fpOtpSubtitle} {fp.email}
              </p>

              <form className="dt-fp-form">
                {fp.otpErr && (
                  <div className="dt-error-box">{fp.otpErr}</div>
                )}

                <FormField label={t.otpLabel} required>
                  <TextInput
                    value={fp.otp}
                    onChange={fp.setOtp}
                    placeholder="000000"
                    inputMode="numeric"
                    maxLength="6"
                  />
                </FormField>

                <Button
                  type="button"
                  loading={fp.otpLoading}
                  onClick={() => {
                    if (fp.otp.length === 6) {
                      fp.setOtpLoading(true);
                      setTimeout(() => {
                        fp.setOtpLoading(false);
                        fp.setStep("password");
                      }, 1500);
                    }
                  }}
                >
                  {fp.otpLoading ? t.otpVerifyingBtn : t.otpVerifyBtn}
                </Button>

                <button
                  type="button"
                  className="dt-fp-change-email-btn"
                  onClick={() => fp.setStep("email")}
                >
                  {t.fpChangeEmail}
                </button>
              </form>
            </>
          )}

          {fp.step === "password" && (
            <>
              <h1 className="dt-fp-title">{t.fpNewPwdTitle}</h1>
              <p className="dt-fp-subtitle">{t.fpNewPwdSubtitle}</p>

              <form className="dt-fp-form">
                <FormField label={t.fpNewPwd} required>
                  <PasswordInput
                    value={fp.password}
                    onChange={fp.setPassword}
                    show={fp.showPwd}
                    onToggle={() => fp.setShowPwd(!fp.showPwd)}
                  />
                </FormField>

                <FormField label={t.fpConfirmPwd} required error={fp.confirmMismatch ? t.errConfirmMismatch : undefined}>
                  <PasswordInput
                    value={fp.confirm}
                    onChange={fp.setConfirm}
                    show={fp.showConf}
                    onToggle={() => fp.setShowConf(!fp.showConf)}
                  />
                </FormField>

                <Button
                  type="button"
                  loading={fp.resetLoading}
                  disabled={fp.resetLoading || !fp.pwdReady || fp.confirmMismatch}
                  onClick={() => {
                    if (fp.pwdReady && !fp.confirmMismatch) {
                      fp.setResetLoading(true);
                      setTimeout(() => {
                        fp.setResetLoading(false);
                        fp.setStep("success");
                      }, 1500);
                    }
                  }}
                >
                  {fp.resetLoading ? t.fpResettingBtn : t.fpResetBtn}
                </Button>
              </form>
            </>
          )}

          {fp.step === "success" && (
            <div className="dt-fp-success">
              <div className="dt-fp-success-icon">✓</div>
              <h1 className="dt-fp-title">{t.fpSuccessTitle}</h1>
              <p className="dt-fp-subtitle">{t.fpSuccessSubtitle}</p>
              <Button type="button" onClick={() => onNavigate("login")}>
                Return to Login
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}