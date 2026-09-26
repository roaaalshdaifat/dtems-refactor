import { I18N } from "../i18n/translations";
import Button from "../components/common/Button/Button";
import "./Home.css";

export default function Home({ onNavigate, lang = "en" }) {
  const t = I18N[lang];

  return (
    <div className="dt-page-home">
      {/* Hero Section */}
      <div className="dt-hero">
        <div className="dt-hero-content">
          <h1 className="dt-hero-title">
            {t.heroTitle1} <span className="dt-accent">{t.heroThrough}</span>
            <br />
            {t.heroTitle2}
          </h1>
          <p className="dt-hero-description">{t.heroDesc}</p>
          <div className="dt-hero-buttons">
            <Button onClick={() => onNavigate("registration")}>
              {t.heroGetStarted}
            </Button>
            <button className="dt-hero-learn-btn">{t.heroLearnMore}</button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="dt-stats">
        <div className="dt-stats-grid">
          <div className="dt-stat-card">
            <div className="dt-stat-number">{t.stat1n}</div>
            <div className="dt-stat-label">{t.stat1l}</div>
          </div>
          <div className="dt-stat-card">
            <div className="dt-stat-number">{t.stat2n}</div>
            <div className="dt-stat-label">{t.stat2l}</div>
          </div>
          <div className="dt-stat-card">
            <div className="dt-stat-number">{t.stat3n}</div>
            <div className="dt-stat-label">{t.stat3l}</div>
          </div>
          <div className="dt-stat-card">
            <div className="dt-stat-number">{t.stat4n}</div>
            <div className="dt-stat-label">{t.stat4l}</div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="dt-about">
        <span className="dt-badge">{t.aboutBadge}</span>
        <h2 className="dt-section-title">{t.aboutTitle}</h2>
        <p className="dt-section-p">{t.aboutP1}</p>
        <p className="dt-section-p">{t.aboutP2}</p>
        <div className="dt-about-highlights">
          <div>{t.aboutFounded}: 2023</div>
          <div>{t.aboutCurriculum}: 200+</div>
          <div>{t.aboutCertified}: 50K+</div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="dt-cta">
        <h2 className="dt-cta-title">Ready to transform your education?</h2>
        <Button onClick={() => onNavigate("registration")}>
          {t.heroGetStarted}
        </Button>
      </div>
    </div>
  );
}