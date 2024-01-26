import { ReactElement } from "react";
import CursorMask from "@/components/cursorMask";
import Footer from "./footer";
import { useMobile } from "@/hooks/useMobile";

export default function Layout({ children }: { children: ReactElement }) {
  const isMobile = useMobile();

  return (
    <>
      {!isMobile && <CursorMask />}
      {children}
      <Footer />
    </>
  );
}
