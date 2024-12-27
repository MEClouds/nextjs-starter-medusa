"use client"

import { createI18nClient } from "next-international/client"

export const { useI18n, useScopedI18n, I18nProviderClient } = createI18nClient({
  us: () => import("./en"),
  sa: () => import("./ar"),
})
