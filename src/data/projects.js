/**
 * Projects data — add new projects here to have them appear on the Projects page automatically.
 * Each project object supports:
 *   title        {string}  — display name
 *   description  {string}  — short blurb shown on the card
 *   tags         {string[]}— tech/tools used
 *   liveUrl      {string}  — deployed URL  (optional — set "" to hide button)
 *   githubUrl    {string}  — GitHub link   (optional — set "" to hide button)
 *   type         {string}  — "project" | "opensource"
 *   highlight    {boolean} — show a featured badge
 */

export const projects = [
  {
    title: "mini-linkly - URL Shortener",
    description:
      "A full-stack URL shortening web app with click-analytics, custom aliases, and a live dashboard. Built to handle high-traffic redirect volumes with minimal latency.",
    tags: ["React", "Node.js", "PostgreSQL", "REST API"],
    liveUrl: "https://mini-linkly.onrender.com/",
    githubUrl: "https://github.com/AmosGloria/mini-linkly",
    type: "project",
    highlight: true,
  },
  {
    title: "GreenSight ",
    description:
      "GreenSight is an environmental awareness platform that surfaces sustainability insights through an intuitive, accessible interface.",
    tags: ["React", "Tailwind CSS", "API Integration", "Team Project"],
    liveUrl: "https://greensight-frontend.onrender.com/",
    githubUrl: "https://github.com/Terrestrial-Techies/GreenSight",
    type: "project",
    highlight: false,
  },
  {
    title: "Canvas- Share",
    description: `Canvas Share is a real-time collaborative whiteboard built with React, WebSockets, Yjs, and MongoDB for persistent room-based drawing sessions.
                  It supports live sketching, shape tools, object selection, movement, duplication, and cloud-synced collaboration.`,
    tags: ["Mongodb", "Websockets + YJS", "React", "Tailwindcss"],
    liveUrl:"https://canvas-share-yvn9.vercel.app/",
    githubUrl: "https://github.com/AmosGloria/canvas-share",
    type: "Project",
    highlight: true,
  }
];

export const contributions = [
  {
    title: "Memory-Map — README Documentation",
    description:
      "Contributed to Memory-Map, a Rust-powered, location-aware media archive that visualises memories on an interactive world map. My contribution focused on correcting technical inaccuracies, improving clarity, adding official tool links, and restructuring the README for new contributors.",
    highlights: [
      "Clarified supported media file types",
      "Corrected inaccurate feature descriptions",
      "Added official links to core tools and dependencies",
      "Fixed formatting issues (tables, code blocks, bullet lists)",
      "Corrected typos and improved overall wording",
      "Updated the GraphiQL usage documentation",
    ],
    tags: ["Rust", "Open Source", "Documentation", "GitHub"],
    prUrl: "https://github.com/nothingnesses/memory-map/pull/41",
    type: "opensource",
  },
];
