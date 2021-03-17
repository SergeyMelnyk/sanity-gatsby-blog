export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "605257d524551328c135784b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ba5pt7yd",
                  apiId: "e37db8c2-7703-48d8-88c4-fb70d1676654",
                },
                {
                  buildHookId: "605257d5349a6a2baacaddd9",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-prfgdu5z",
                  apiId: "0e72a3ff-7254-433d-b8bb-3e9eee41082d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/SergeyMelnyk/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-prfgdu5z.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
