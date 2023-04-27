// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
var pathSrc = path.resolve("/Users/admin/Desktop/wnxx", "src");
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue"],
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: "Icon"
        })
      ],
      dts: path.resolve(pathSrc, "auto-imports.d.ts")
    }),
    Components({
      resolvers: [
        IconsResolver({
          componentPrefix: "i",
          enabledCollections: ["ep"],
          alias: {
            "icon": "ep"
          }
        }),
        ElementPlusResolver()
      ],
      dts: path.resolve(pathSrc, "components.d.ts")
    }),
    Icons({
      autoInstall: true
    })
  ],
  resolve: {
    alias: {
      "@": pathSrc
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tIFwidW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZVwiO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGVcIjtcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzXCI7XG5pbXBvcnQgSWNvbnMgZnJvbSBcInVucGx1Z2luLWljb25zL3ZpdGVcIjtcbmltcG9ydCBJY29uc1Jlc29sdmVyIGZyb20gXCJ1bnBsdWdpbi1pY29ucy9yZXNvbHZlclwiO1xuXG5cbmNvbnN0IHBhdGhTcmMgPSBwYXRoLnJlc29sdmUoXCIvVXNlcnMvYWRtaW4vRGVza3RvcC93bnh4XCIsICdzcmMnKVxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIC8vIEF1dG8gaW1wb3J0IGZ1bmN0aW9ucyBmcm9tIFZ1ZSwgZS5nLiByZWYsIHJlYWN0aXZlLCB0b1JlZi4uLlxuICAgICAgLy8gXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1IFZ1ZSBcdTc2RjhcdTUxNzNcdTUxRkRcdTY1NzBcdUZGMENcdTU5ODJcdUZGMUFyZWYsIHJlYWN0aXZlLCB0b1JlZiBcdTdCNDlcbiAgICAgIGltcG9ydHM6IFsndnVlJ10sXG5cbiAgICAgIC8vIEF1dG8gaW1wb3J0IGZ1bmN0aW9ucyBmcm9tIEVsZW1lbnQgUGx1cywgZS5nLiBFbE1lc3NhZ2UsIEVsTWVzc2FnZUJveC4uLiAod2l0aCBzdHlsZSlcbiAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NSBFbGVtZW50IFBsdXMgXHU3NkY4XHU1MTczXHU1MUZEXHU2NTcwXHVGRjBDXHU1OTgyXHVGRjFBRWxNZXNzYWdlLCBFbE1lc3NhZ2VCb3guLi4gKFx1NUUyNlx1NjgzN1x1NUYwRilcbiAgICAgIHJlc29sdmVyczogW1xuICAgICAgICBFbGVtZW50UGx1c1Jlc29sdmVyKCksXG5cbiAgICAgICAgLy8gQXV0byBpbXBvcnQgaWNvbiBjb21wb25lbnRzXG4gICAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NVx1NTZGRVx1NjgwN1x1N0VDNFx1NEVGNlxuICAgICAgICBJY29uc1Jlc29sdmVyKHtcbiAgICAgICAgICBwcmVmaXg6ICdJY29uJyxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgZHRzOiBwYXRoLnJlc29sdmUocGF0aFNyYywgJ2F1dG8taW1wb3J0cy5kLnRzJyksXG4gICAgfSksXG5cbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW1xuICAgICAgICAvLyBBdXRvIHJlZ2lzdGVyIGljb24gY29tcG9uZW50c1xuICAgICAgICAvLyBcdTgxRUFcdTUyQThcdTZDRThcdTUxOENcdTU2RkVcdTY4MDdcdTdFQzRcdTRFRjZcbiAgICAgICAgSWNvbnNSZXNvbHZlcih7XG4gICAgICAgICAgY29tcG9uZW50UHJlZml4OiBcImlcIixcbiAgICAgICAgICBlbmFibGVkQ29sbGVjdGlvbnM6IFsnZXAnXSxcbiAgICAgICAgICBhbGlhczoge1xuICAgICAgICAgICAgJ2ljb24nOiBcImVwXCIsIC8vXHU5MTREXHU3RjZFXHU1MjJCXHU1NDBEXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICAgIC8vIEF1dG8gcmVnaXN0ZXIgRWxlbWVudCBQbHVzIGNvbXBvbmVudHNcbiAgICAgICAgLy8gXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1IEVsZW1lbnQgUGx1cyBcdTdFQzRcdTRFRjZcbiAgICAgICAgRWxlbWVudFBsdXNSZXNvbHZlcigpLFxuICAgICAgXSxcbiAgICAgIGR0czogcGF0aC5yZXNvbHZlKHBhdGhTcmMsICdjb21wb25lbnRzLmQudHMnKSxcbiAgICB9KSxcbiAgICBJY29ucyh7XG4gICAgICBhdXRvSW5zdGFsbDogdHJ1ZSxcbiAgICB9KSxcbiAgXSxcbiAgcmVzb2x2ZTogeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIGFsaWFzOiB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAnQCc6IHBhdGhTcmMsXG4gICAgfSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICB9LCAgXG4gICAgICAgICAgIFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBQ3BDLE9BQU8sV0FBVztBQUNsQixPQUFPLG1CQUFtQjtBQUcxQixJQUFNLFVBQVUsS0FBSyxRQUFRLDZCQUE2QixLQUFLO0FBRS9ELElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFdBQVc7QUFBQSxNQUdULFNBQVMsQ0FBQyxLQUFLO0FBQUEsTUFJZixXQUFXO0FBQUEsUUFDVCxvQkFBb0I7QUFBQSxRQUlwQixjQUFjO0FBQUEsVUFDWixRQUFRO0FBQUEsUUFDVixDQUFDO0FBQUEsTUFDSDtBQUFBLE1BQ0EsS0FBSyxLQUFLLFFBQVEsU0FBUyxtQkFBbUI7QUFBQSxJQUNoRCxDQUFDO0FBQUEsSUFFRCxXQUFXO0FBQUEsTUFDVCxXQUFXO0FBQUEsUUFHVCxjQUFjO0FBQUEsVUFDWixpQkFBaUI7QUFBQSxVQUNqQixvQkFBb0IsQ0FBQyxJQUFJO0FBQUEsVUFDekIsT0FBTztBQUFBLFlBQ0wsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxRQUNGLENBQUM7QUFBQSxRQUdELG9CQUFvQjtBQUFBLE1BQ3RCO0FBQUEsTUFDQSxLQUFLLEtBQUssUUFBUSxTQUFTLGlCQUFpQjtBQUFBLElBQzlDLENBQUM7QUFBQSxJQUNELE1BQU07QUFBQSxNQUNKLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsSUFDUDtBQUFBLEVBQ0Y7QUFFRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=