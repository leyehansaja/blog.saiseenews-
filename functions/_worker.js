export async function onRequest(context) {
  const url = new URL(context.request.url);
  console.log('Requested URL:', url.toString());
  
  if (url.pathname === '/') {
    console.log('Serving index.html');
    return context.env.ASSETS.fetch(context.request);
  } else {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbzalX7tNObq2fEdug7HQxeuy26sUiUtDHmWU1zvmWjYLhl_b_UgleSb-GH9vqyic4p5/exec';
    const newUrl = new URL(scriptUrl);
    newUrl.searchParams.set('path', url.pathname);
    console.log('Redirecting to:', newUrl.toString());
    return fetch(newUrl);
  }
}
