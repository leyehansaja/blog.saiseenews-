export function onRequest(context) {
  const url = new URL(context.request.url);
  console.log('Requested URL:', url.toString());
  
  if (url.pathname !== '/' && !url.pathname.startsWith('/assets/')) {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbwFh8x2TSx53_GvqMWWtIlpIb22MzMuXbtRC_xgEdfeuZ9XAI0k_pAWzLojU8RXl_nZUg/exec';
    const newUrl = new URL(scriptUrl);
    newUrl.searchParams.set('path', url.pathname);
    console.log('Redirecting to:', newUrl.toString());
    return fetch(newUrl);
  }
  
  console.log('Serving index.html');
  return context.env.ASSETS.fetch(context.request);
}
