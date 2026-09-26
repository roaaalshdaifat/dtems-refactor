import { I18N } from "../i18n/translations";
import Button from "../components/common/Button/Button";
import TextInput from "../components/common/TextInput/TextInput";
import PasswordInput from "../components/common/PasswordInput/PasswordInput";
import FormField from "../components/common/FormField/FormField";
import Checkbox from "../components/common/Checkbox/Checkbox";
import BackButton from "../components/common/BackButton/BackButton";
import { useRegistration } from "../hooks/useRegistration";
import "./Registration.css";

export default function Registration({ onNavigate, lang = "en" }) {
  const t = I18N[lang];
  const reg = useRegistration(t);

  const handleBackClick = () => {
    onNavigate("login");
  };

  return (
    <div className="dt-page-registration">
      <div className="dt-reg-container">
        <BackButton onClick={handleBackClick}>{t.regBackLogin}</BackButton>

        <div className="dt-reg-content">
          <h1 className="dt-reg-title">{t.regTitle}</h1>
          <p className="dt-reg-subtitle">{t.regSubtitle}</p>

          <form className="dt-reg-form">
            {/* Personal Info Section */}
            <div className="dt-reg-section">
              <h2 className="dt-reg-section-title">{t.regSec1}</h2>
              <div className="dt-reg-grid-2">
                <FormField label={t.regFirstName} required>
                  <TextInput
                    value={reg.f.firstName}
                    onChange={(v) => reg.setField("firstName", v)}
                    placeholder="John"
                  />
                </FormField>
                <FormField label={t.regLastName} required>
                  <TextInput
                    value={reg.f.lastName}
                    onChange={(v) => reg.setField("lastName", v)}
                    placeholder="Doe"
                  />
                </FormField>
              </div>
              <FormField label={t.regMiddleName} optional>
                <TextInput
                  value={reg.f.middleName}
                  onChange={(v) => reg.setField("middleName", v)}
                  placeholder="Middle"
                />
              </FormField>
            </div>

            {/* Academic Info Section */}
            <div className="dt-reg-section">
              <h2 className="dt-reg-section-title">{t.regSec2}</h2>
              <FormField label={t.regLevel} required error={reg.errors.level}>
                <select
                  value={reg.f.level}
                  onChange={(e) => reg.setField("level", e.target.value)}
                  className="dt-select"
                >
                  <option value="">{t.regLevelPh}</option>
                  <option value="primary">Primary</option>
                  <option value="secondary">Secondary</option>
                  <option value="diploma">Diploma</option>
                  <option value="bachelor">Bachelor</option>
                </select>
              </FormField>
              <FormField label={t.regInstitution} required error={reg.errors.institution}>
                <TextInput
                  value={reg.f.institution}
                  onChange={(v) => reg.setField("institution", v)}
                  placeholder={t.regInstitutionPh}
                />
              </FormField>
            </div>

            {/* Contact Section */}
            <div className="dt-reg-section">
              <h2 className="dt-reg-section-title">{t.regSec3}</h2>
              <FormField label={t.regStudentEmail} required error={reg.errors.email}>
                <TextInput
                  type="email"
                  value={reg.f.email}
                  onChange={(v) => reg.setField("email", v)}
                  placeholder="student@email.com"
                />
              </FormField>
              <FormField label={t.regParentEmail} optional error={reg.errors.parentEmail}>
                <TextInput
                  type="email"
                  value={reg.f.parentEmail}
                  onChange={(v) => reg.setField("parentEmail", v)}
                  placeholder="parent@email.com"
                />
              </FormField>
              <div className="dt-reg-grid-2">
                <FormField label="Country Code" required>
                  <select
                    value={reg.f.countryCode}
                    onChange={(e) => reg.setField("countryCode", e.target.value)}
                    className="dt-select"
                  >
                    <option value="+962">+962 Jordan</option>
                    <option value="+966">+966 Saudi Arabia</option>
                    <option value="+971">+971 UAE</option>
                  </select>
                </FormField>
                <FormField label={t.regPhone} required error={reg.errors.phone}>
                  <TextInput
                    type="tel"
                    value={reg.f.phone}
                    onChange={(v) => reg.setField("phone", v)}
                    placeholder="798123456"
                    inputMode="numeric"
                  />
                </FormField>
              </div>
            </div>

            {/* Security Section */}
            <div className="dt-reg-section">
              <h2 className="dt-reg-section-title">{t.regSec4}</h2>
              <FormField label={t.regPwd} required error={reg.errors.password}>
                <PasswordInput
                  value={reg.f.password}
                  onChange={(v) => reg.setField("password", v)}
                  show={reg.showPwd}
                  onToggle={() => reg.setShowPwd(!reg.showPwd)}
                />
              </FormField>
              <FormField label={t.regConfirmPwd} required error={reg.errors.confirm}>
                <PasswordInput
                  value={reg.f.confirm}
                  onChange={(v) => reg.setField("confirm", v)}
                  show={reg.showConf}
                  onToggle={() => reg.setShowConf(!reg.showConf)}
                />
              </FormField>
            </div>

            {/* Terms Section */}
            <div className="dt-reg-terms">
              <Checkbox
                checked={reg.f.terms}
                onChange={() => reg.setField("terms", !reg.f.terms)}
                error={reg.errors.terms}
                label={
                  <span>
                    {t.regTerms1} <strong>{t.regTermsService}</strong> {t.regAnd}{" "}
                    <strong>{t.regPrivacy}</strong>
                  </span>
                }
              />
            </div>

            <Button type="submit" loading={reg.loading}>
              {reg.loading ? t.regCreatingBtn : t.regCreateBtn}
            </Button>

            <p className="dt-reg-footer">
              {t.regHaveAccount} <a href="#">{t.regSignIn}</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}