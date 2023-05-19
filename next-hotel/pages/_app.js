import "@/styles/globals.css";
import PageLayout from "@/components/layout";

export default function App({ Component, pageProps, router }) {
  const excludedPaths = [
    "/login", 
    "/register",
  ];
  const excludePageLayout = excludedPaths.includes(router.pathname);

  if (excludePageLayout) {
    return <Component {...pageProps} />;
  }

  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}
