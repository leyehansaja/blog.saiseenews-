export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Selalu mengembalikan index.html
    return env.ASSETS.fetch(`${url.origin}/index.html`);
  }
};
