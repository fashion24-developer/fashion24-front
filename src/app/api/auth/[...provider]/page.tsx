import ProviderToken from './_components/ProviderToken';

export default async function CallBack({
  params,
}: {
  params: { provider: string };
}) {
  const provider = params.provider[0];

  return (
    <>
      <ProviderToken provider={provider} />
    </>
  );
}
