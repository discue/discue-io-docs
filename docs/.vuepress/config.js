module.exports = {
  theme: 'api',
  title: 'discue.io docs',
  description: 'Documentation of messaging and queueing service discue.io: A secure and reliable messaging service built on open standards.',
  themeConfig: {
    repo: 'discue/docs',
    repoLabel: 'Contribute!',
    docsRepo: 'discue/docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page',
    lastUpdated: true, 
    sidebarGroupOrder: ["home", "0-getting-started", "1-overview", "2-api"],
    sidebar:
    {
      "0-getting-started":
        { "children": [], "title": "Getting Started", "to": "/0-getting-started/", "headers": [] },
      "1-overview": {
        "children": [], "title": "Overview", "to": "/1-overview/",
        "headers": [
          { "level": 2, "title": "Current Version", "slug": "current-version" },
          { "level": 2, "title": "Content Type", "slug": "content-type" },
          { "level": 2, "title": "Authentication", "slug": "authentication" },
          { "level": 2, "title": "HTTP Verbs", "slug": "http-verbs" },
          { "level": 2, "title": "Pagination", "slug": "pagination" },
          { "level": 2, "title": "Rate Limiting", "slug": "rate-limiting" }]
      },
      "2-api": {
        "children": [
          {
            "title": "authentication", "to": "/2-api/authentication.html",
            "headers":
              [
                { "level": 2, "title": "Login", "slug": "login" },
                { "level": 2, "title": "Signup", "slug": "signup" }
              ]
          },
          {
            "title": "Endpoints", "to": "/2-api/endpoints.html",
            "headers": [
              { "level": 2, "title": "Queues", "slug": "queues" },
              { "level": 2, "title": "queue listeners", "slug": "listeners" },
              { "level": 2, "title": "queue messages", "slug": "messages" },
            ]
          }],
      }, "home": { "title": "Hello, World.", "to": "/", "children": [] }
    }
  },

}
