export type ConsentChoice = "accepted" | "rejected" | "custom";

export type ConsentPreferences = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
};

export type ConsentRecord = {
  choice: ConsentChoice;
  preferences: ConsentPreferences;
  version: number;
  at: string;
};

export const COOKIE_CONSENT_KEY = "gradia_cookie_consent";
export const COOKIE_CONSENT_VERSION = 1;

export function getCookieConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<ConsentRecord>;
    if (
      !parsed ||
      (parsed.choice !== "accepted" &&
        parsed.choice !== "rejected" &&
        parsed.choice !== "custom") ||
      !parsed.preferences ||
      parsed.preferences.essential !== true ||
      typeof parsed.preferences.analytics !== "boolean" ||
      typeof parsed.preferences.marketing !== "boolean" ||
      parsed.version !== COOKIE_CONSENT_VERSION
    ) {
      return null;
    }

    return parsed as ConsentRecord;
  } catch {
    return null;
  }
}

export function saveCookieConsent(
  choice: ConsentChoice,
  preferences: ConsentPreferences
): ConsentRecord | null {
  if (typeof window === "undefined") return null;

  const payload: ConsentRecord = {
    choice,
    preferences,
    version: COOKIE_CONSENT_VERSION,
    at: new Date().toISOString(),
  };

  window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(payload));
  return payload;
}

export function hasCookieConsentFor(
  category: Exclude<keyof ConsentPreferences, "essential">
): boolean {
  const record = getCookieConsent();
  if (!record) return false;
  return record.preferences[category];
}

