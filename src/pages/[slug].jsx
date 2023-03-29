import { useRouter } from 'next/router';
export default function Page() {
  return <h1>Page</h1>;
}

export const getStaticPaths = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Carrendo</h1>;
  }
  return {
    paths: [{ params: { slug: 'pageNotFound' } }],
    fallback: false,
  };
};

export const getStaticProps = () => {
  return {
    props: {
      name: 'jordan',
    },
  };
};
