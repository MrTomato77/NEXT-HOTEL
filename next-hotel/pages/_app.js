import "@/styles/globals.css";
import PageLayout from "@/components/layout";

export default function App({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}
