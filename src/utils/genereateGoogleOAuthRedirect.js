// /* global window */
// /* global document */
function generateGoogleOAuthRedirect({ googleRedirectUrl, googleClientId }) {
  const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';

  const options = {
    redirect_uri: googleRedirectUrl,
    client_id: googleClientId,
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ].join(' '),
  };

  const qs = new URLSearchParams(options);

  const url = `${rootUrl}?${qs.toString()}`;
  return url;
  // const dualScreenLeft = window.screenLeft ?? window.screenX;
  // const dualScreenTop = window.screenTop ?? window.screenY;

  // const width = window.innerWidth
  //   ?? document.documentElement.clientWidth
  //   ?? window.screen.width;

  // const height = window.innerHeight
  //   ?? document.documentElement.clientHeight
  //   ?? window.screen.height;

  // const systemZoom = width / window.screen.availWidth;

  // const left = (width - 500) / 2 / systemZoom + dualScreenLeft;
  // const top = (height - 550) / 2 / systemZoom + dualScreenTop;

  // const newWindow = window?.open(url, 'Auth',
  // `width=${500 / systemZoom},height=${550 / systemZoom
  // },top=${top},left=${left}`);

  // return newWindow?.focus();
}

export default generateGoogleOAuthRedirect;
