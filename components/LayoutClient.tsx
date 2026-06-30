"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { CookieBanner, useConsent } from "@/components/CookieBanner";
import { MetaToast } from "@/components/MetaToast";
import { MetaBanner } from "@/components/MetaBanner";

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const { consented, ready, accept, reject } = useConsent();
  const pathname = usePathname();
  const locale = pathname.startsWith("/es") ? "es" : "en";

  return (
    <>
      {ready && consented === true && (
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BDVRRFT95N"
          strategy="afterInteractive"
        />
      )}
      {ready && consented === true && (
        <Script id="gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BDVRRFT95N', { cookie_flags: 'samesite=none;secure' });
          `}
        </Script>
      )}

      <MetaBanner locale={locale} />
      <div id="main-content" tabIndex={-1}>
        {children}
      </div>

      <CookieBanner
        locale={locale}
        visible={ready && consented === null}
        onAccept={accept}
        onReject={reject}
      />
      <MetaToast locale={locale} />
    </>
  );
}
