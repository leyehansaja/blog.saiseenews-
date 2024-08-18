export async function onRequest(context) {
  const url = new URL(context.request.url);
  console.log('Requested URL:', url.toString());
  
  if (url.pathname === '/') {
    console.log('Serving index.html');
    return context.env.ASSETS.fetch(context.request);
  } else {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyRbl41R4G9FYnItniE_wxn-Nqz_EzGPRJk8-_cJlJnTJ8nKkJuJjxdXEoA151ekl-9vQ/exec';
    const newUrl = new URL(scriptUrl);
    newUrl.searchParams.set('path', url.pathname);
    console.log('Redirecting to:', newUrl.toString());
    const response = await fetch(newUrl);
    const html = await response.text();
    return new Response(html, {
      headers: { 'Content-Type': 'text/html' },
    });
  }
}
