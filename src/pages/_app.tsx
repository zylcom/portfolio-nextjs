import type { AppProps } from "next/app";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { Hover, HoverContext } from "@/context/hoverContext";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [hover, setHover] = useState<Hover>({
    isHovered: false,
    message: "",
    scaleSize: 4,
  });

  useEffect(() => {
    function handleRouteChange() {
      setHover({ isHovered: false, message: "" });
    }

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <ReactLenis root />
      <HoverContext.Provider value={{ hover, setHover }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </HoverContext.Provider>
    </>
  );
}
