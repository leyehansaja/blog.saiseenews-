export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Jika path bukan root, arahkan ke Google Apps Script
    if (url.pathname !== '/') {
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbwFh8x2TSx53_GvqMWWtIlpIb22MzMuXbtRC_xgEdfeuZ9XAI0k_pAWzLojU8RXl_nZUg/exec';
      const newUrl = new URL(scriptUrl);
      newUrl.searchParams.set('path', url.pathname);
      return fetch(newUrl);
    }
    
    // Jika root, lanjutkan ke aset statis (index.html)
    return env.ASSETS.fetch(request);
  }
};
