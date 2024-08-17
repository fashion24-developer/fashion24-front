const OAuthCallbackPage = ({ provider }: { provider: string }) => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  //axios 인가 코드 전달

  return <div>Loading...</div>;
};

export default OAuthCallbackPage;
