export type Locale = {
  CONTACT_US: string;
  DENOUNCEMENT: string;
  GDPR: string;
};

type LocaleMap = {
  [localeName: string]: Locale;
};

const locales: LocaleMap = {
  "pt-BR": {
    CONTACT_US: "Ouvidoria",
    DENOUNCEMENT: "Denúncia",
    GDPR: "LGPD",
  },
  "en-US": {
    CONTACT_US: "Contact Us",
    DENOUNCEMENT: "Denouncement",
    GDPR: "GDPR",
  },
};

export default Object.freeze(locales);
