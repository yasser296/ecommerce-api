const messages = {
  en: {
    RESOURCE_NOT_FOUND: 'Resource not found',
    PATH_NOT_FOUND: 'Path not found',
    SERVER_ERROR: 'Server error',
    PARAMS_NOT_VALID: 'Invalid URL parameters',
    BODY_NOT_VALID: 'Invalid request body',
    UNSUPPORTED_LANGUAGE: 'Unsupported language'
  },
  fr: {
    RESOURCE_NOT_FOUND: 'Ressource introuvable',
    PATH_NOT_FOUND: 'Chemin introuvable',
    SERVER_ERROR: 'Erreur serveur',
    PARAMS_NOT_VALID: 'Paramètres URL invalides',
    BODY_NOT_VALID: 'Corps de requête invalide',
    UNSUPPORTED_LANGUAGE: 'Langue non supportée'
  }
};

function getMessage(lang, key) {
  return messages[lang]?.[key] || messages.en[key] || key;
}

module.exports = {
  getMessage
};