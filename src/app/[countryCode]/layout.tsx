import { getBaseURL } from "@lib/util/env"
import { I18nProviderClient } from "locales/client"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function RootLayout(props: {
  params: Promise<{ countryCode: string }>
  children: React.ReactNode
}) {
  const { countryCode } = await props.params
  return (
    <I18nProviderClient locale={countryCode}>
      <html lang="en" data-mode="light">
        <body>
          <main className="relative">{props.children}</main>
        </body>
      </html>
    </I18nProviderClient>
  )
}
