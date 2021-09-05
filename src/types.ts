import { createSSRApp } from 'vue'
import { App } from 'vue'
export type UserModule = (ctx: ViteSSGContext) => void
// export type UserModule = (ctx: App) => void