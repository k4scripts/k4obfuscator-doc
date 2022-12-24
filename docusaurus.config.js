// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "K4Obfuscator",
    tagline: "Free Lua Obfuscator!",
    url: "https://k4scripts.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "k4scripts", // Usually your GitHub org/user name.
    projectName: "k4obfuscator", // Usually your repo name.

    // Plugin that we are using
    plugins: ["docusaurus-plugin-sass"],

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"]
    },

    headTags: [
        {
            tagName: "link",
            attributes: {
                rel: "sitemap",
                type: "application/xml",
                href: "/sitemap.xml"
            }
        },
        {
            tagName: "meta",
            attributes: {
                name: "theme-color",
                content: "#50c878"
            }
        },
        {
            tagName: "meta",
            attributes: {
                name: "og:image",
                content: "https://k4scripts.xyz/static/k4logo.webp"
            }
        },
        {
            tagName: "meta",
            attributes: {
                name: "twitter:image",
                content: "https://k4scripts.xyz/static/k4logo.webp"
            }
        }
    ],

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/k4scripts/k4obfuscator-doc/tree/main"
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/k4scripts/k4obfuscator-doc/tree/main"
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.scss")
                },
                sitemap: {
                    changefreq: "weekly",
                    priority: 0.5,
                    ignorePatterns: [],
                    filename: "sitemap.xml"
                }
            })
        ]
    ],

    themes: [
        // ... Your other themes.
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                // ... Your options.
                // `hashed` is recommended as long-term-cache of index file is possible.
                hashed: true
                // For Docs using Chinese, The `language` is recommended to set to:
                // ```
                // language: ["en", "zh"],
                // ```
            }
        ]
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: "dark"
            },
            navbar: {
                title: "K4Obfuscator",
                logo: {
                    alt: "K4Scripts Logo",
                    src: "img/k4scripts.png"
                },
                items: [
                    {
                        type: "doc",
                        docId: "intro",
                        position: "left",
                        label: "Tutorial"
                    },
                    { to: "/blog", label: "Blog", position: "left" },
                    {
                        href: "https://github.com/k4scripts",
                        label: "GitHub",
                        position: "right"
                    }
                ]
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Tutorial",
                                to: "/docs/intro"
                            }
                        ]
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Discord",
                                href: "https://k4scripts.xyz/discord"
                            }
                        ]
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "Blog",
                                to: "/blog"
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/k4scripts"
                            }
                        ]
                    }
                ],
                copyright: `Copyright © ${new Date().getFullYear()} K4Scripts' Team.`
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ["lua"]
            }
        })
};

module.exports = config;
