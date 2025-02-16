import { defineConfig } from "tsup";
import { minify } from "terser";
import fs from "fs/promises";
//alternatif tanımlama
//import { promises as fs } from "fs";

export default defineConfig([
    {
        entry: { "orak-util-ts": "src/index.ts" },
        format: ["cjs", "esm", "iife"],
        globalName: "OrakUtilTs",
        dts: true,
        minify: false, // `tsup`'un minify işlemini kapatıyoruz
        clean: true,
        outDir: "dist",
        async onSuccess() {
            const files = [
                "dist/orak-util-ts.global.js",
                "dist/orak-util-ts.cjs",
                "dist/orak-util-ts.js",
            ];

            for (const file of files) {
                try {
                    let code = await fs.readFile(file, "utf8");

                    // Terser ile minify işlemi yapıyoruz
                    let result = await minify(code, {
                        compress: true,
                        mangle: {
                            keep_classnames: true, // Sınıf isimlerini koru
                            keep_fnames: true, // Fonksiyon isimlerini koru
                        },
                    });

                    // Minify edilmiş dosyayı yazıyoruz
                    await fs.writeFile(file, result.code, "utf8");
                    console.log(`✅ ${file} minify edildi.`);
                } catch (error) {
                    console.error(`❌ Minify işlemi başarısız: ${file}`, error);
                }
            }
        },
    },
]);