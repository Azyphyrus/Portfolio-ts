import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: "\n          @import \"flowbite/dist/flowbite.css\";\n          @import \"flowbite\";\n        "
            }
        }
    },
    optimizeDeps: {
        esbuildOptions: {
            target: 'es2020'
        }
    },
    esbuild: {
        logOverride: { 'this-is-undefined-in-esm': 'silent' }
    }
});
