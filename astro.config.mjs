// @ts-check
import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
    site: "http://localhost:4321",
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    api: "modern-compiler",
                },
                scss: {
                    api: "modern-compiler",
                },
            },
        },
    },
    output: "server",
    adapter: vercel()
});
