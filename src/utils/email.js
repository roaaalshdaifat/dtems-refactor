const TAKEN_EMAILS = new Set([
  "test@dtems.edu",
  "student@school.com",
  "pending@dtems.edu",
  "notverified@test.com",
]);

const KNOWN_TLDS = new Set([
  "com", "net", "org", "edu", "gov", "mil", "int", "io", "co", "app", "dev",
  "ai", "tech", "online", "site", "web", "store", "shop", "info", "biz",
  "name", "pro", "mobi", "tv", "cc", "me", "us", "ca", "uk", "au", "de",
  "fr", "es", "it", "nl", "se", "no", "dk", "fi", "pl", "ru", "jp", "cn",
  "in", "br", "mx", "ar", "za", "ng", "ke", "gh", "eg", "sa", "ae", "jo",
  "ps", "iq", "sy", "lb", "kw", "bh", "qa", "om", "ye", "ly", "tn", "ma",
  "dz", "sd", "so", "et", "pk", "bd", "lk", "np", "af", "ir", "tr", "id",
  "my", "ph", "sg", "th", "vn",
]);

const KNOWN_DOMAINS = new Set([
  "gmail", "yahoo", "hotmail", "outlook", "live", "icloud", "me", "mac",
  "proton", "protonmail", "aol", "msn", "yandex", "zoho", "gmx", "mail",
  "fastmail", "tutanota", "hey", "pm", "inbox", "posteo", "runbox",
  "maktoob", "eim",
]);

export function isValidEmail(v) {
  if (!v) return false;

  const lower = String(v).toLowerCase().trim();

  if (!/^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/.test(lower)) {
    return false;
  }

  const atIdx = lower.indexOf("@");
  const local = lower.slice(0, atIdx);
  const domain = lower.slice(atIdx + 1);

  if (
    local.startsWith(".") ||
    local.endsWith(".") ||
    /\.\./. test(local)
  ) {
    return false;
  }

  if (local.length < 1 || local.length > 64) {
    return false;
  }

  const parts = domain.split(".");

  if (
    parts.length < 2 ||
    /\.\./. test(domain) ||
    domain.startsWith("-") ||
    domain.endsWith("-")
  ) {
    return false;
  }

  const tld = parts[parts.length - 1];

  if (!KNOWN_TLDS.has(tld)) {
    return false;
  }

  const sld = parts[parts.length - 2];

  if (sld.length < 2 || sld.startsWith("-") || sld.endsWith("-")) {
    return false;
  }

  if (sld.length >= 8 && !/[aeiou]/.test(sld) && !KNOWN_DOMAINS.has(sld)) {
    return false;
  }

  return true;
}

export function emailStatus(v) {
  if (!isValidEmail(v)) return "invalid";
  if (TAKEN_EMAILS.has(String(v).toLowerCase())) return "taken";
  return "available";
}