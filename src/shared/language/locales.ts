export type Locale = object;
type LocaleMap = {
  [localeName: string]: Locale;
};

const locales: LocaleMap = {
  "pt-BR": {
    CONTACT_US: "Ouvidoria",
    DENOUNCEMENT: "Denúncia",
    GDPR: "LGPD",
  },
};

export default Object.freeze(locales);
