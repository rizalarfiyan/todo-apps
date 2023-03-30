/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  readonly VITE_ACTIVITY_GROUP: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
