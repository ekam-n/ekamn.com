import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useParams, useLoaderData, useActionData, useMatches, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement } from "react";
import { motion } from "framer-motion";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const stylesheet = "/assets/app-BCgvngJT.css";
const links$1 = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}, {
  rel: "stylesheet",
  href: stylesheet
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links: links$1
}, Symbol.toStringTag, { value: "Module" }));
const links = [
  { href: "https://www.linkedin.com/in/ekam-n/", text: "LinkedIn" },
  { href: "https://github.com/ekam-n", text: "GitHub" },
  { href: "mailto:ekamnijjar@gmail.com", text: "Email" }
];
function Header() {
  return /* @__PURE__ */ jsxs("header", { className: "fixed top-0 left-0 w-full flex justify-between items-center px-8 py-3 md:py-4 bg-black/50 text-white z-50 backdrop-blur-md", children: [
    /* @__PURE__ */ jsx("div", { className: "text-base md:text-lg lg:text-xl cursor-pointer", children: "Ekam Nijjar" }),
    /* @__PURE__ */ jsx("nav", { className: "flex space-x-4 md:space-x-6", children: links.map(({ href, text }) => /* @__PURE__ */ jsx(
      "a",
      {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-sm md:text-base lg:text-lg hover:underline",
        children: text
      },
      href
    )) })
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsx("div", { className: "bg-black flex flex-col items-center pt-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-b from-black to-[#5301B7] to-99% rounded-3xl shadow-lg p-6 md:p-8 lg:p-12 text-white w-full mx-4", children: [
    /* @__PURE__ */ jsxs("h1", { className: "text-xl md:text-4xl lg:text-6xl font-semibold mb-6 text-left", children: [
      "I love to ",
      /* @__PURE__ */ jsx("span", { className: "text-[#DF62F8]", children: "design & develop" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "experiences and applications" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg lg:text-xl text-left", children: "Especially videogames!" }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-start mt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "w-3 md:w-4 h-3 md:h-4 bg-green-500 rounded-full" }),
      /* @__PURE__ */ jsx("span", { className: "text-xs md:text-sm lg:text-base font-medium", children: "Available To Work" })
    ] }) })
  ] }) });
}
function Education() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-[#5301B7] rounded-3xl shadow-lg p-6 md:p-8 text-white", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-semibold mb-4", children: "Education" }),
    /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl lg:text-2xl mb-1", children: "Simon Fraser University" }),
    /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base lg:text-lg mb-4", children: "I'm majoring in Interactive Arts & Technology, minoring in Computer Science, and completing multiple concentrations." }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: [
      "BSc",
      "Interactive Arts & Technology",
      "Computer Science",
      "Game Design",
      "Extended Reality",
      "AI",
      "Data Science"
    ].map((skill) => /* @__PURE__ */ jsx("span", { className: "bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base", children: skill }, skill)) })
  ] });
}
function Skills() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4 w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-[#5301B7] rounded-3xl shadow-lg p-6 md:p-8 text-white flex-1", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-semibold mb-4", children: "Design Skills" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base lg:text-lg mb-4", children: "I specialize in game design, level design, and UX/UI development. My skills include crafting engaging mechanics, user-centered design, and research." }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: [
        "Game Design",
        "Level Design",
        "Mechanic Design",
        "Combat Design",
        "UI Design",
        "UX Design",
        "Project Management",
        "User Research",
        "Playtesting",
        "Software Design"
      ].map((skill) => /* @__PURE__ */ jsx("span", { className: "bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base", children: skill }, skill)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-[#5301B7] rounded-3xl shadow-lg p-6 md:p-8 text-white flex-1", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-semibold mb-4", children: "Technical Skills" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base lg:text-lg mb-4", children: "My expertise includes programming in multiple languages, working with game engines, and building interactive applications." }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: [
        "Unity",
        "Unreal Engine",
        "Figma",
        "InDesign",
        "Photoshop",
        "Illustrator",
        "After Effects",
        "React",
        "Tailwind",
        "Java",
        "C++",
        "C#",
        "TypeScript"
      ].map((skill) => /* @__PURE__ */ jsx("span", { className: "bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base", children: skill }, skill)) })
    ] })
  ] });
}
function ProjectCard({ title, description, image, tags, link, bgColor = "#00085C" }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-center gap-4 h-full rounded-3xl shadow-lg p-6 md:p-8 text-white", style: { backgroundColor: bgColor }, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-md md:text-lg", children: "Project" }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-semibold mb-4", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base lg:text-lg text-white mt-2", children: description }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-4", children: tags.map((tag) => /* @__PURE__ */ jsx("span", { className: "bg-white/20 px-3 py-1 rounded-full text-xs md:text-sm", children: tag }, tag)) }),
      link && /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: link,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-block bg-[#9000FF] hover:bg-[#EC8DFF] transition-colors text-white px-4 py-2 rounded-lg text-sm md:text-base",
          children: "View Project"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ jsx("img", { src: image, alt: title, className: "w-full rounded-2xl object-cover" }) })
  ] });
}
function Snuggle() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    ProjectCard,
    {
      title: "Snuggle Sculptors",
      description: "Snuggle Sculptors is a build-a-bear simulation built in Java, where I used decorator and factory patterns to dynamically update the bear with graphics and sound integration.",
      image: "./images/projectImages/snuggleSculptors/snuggle1.png",
      tags: ["Software Design", "Java", "Illustrator"],
      link: "https://github.com/ekam-n/snuggle-sculptors"
    }
  ) });
}
function Volt() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    ProjectCard,
    {
      title: "Volt Legacy",
      description: "Volt Legacy is a challenging platformer where I implemented physics, game logic, graphics, sound, and UI in Processing.",
      image: "./images/projectImages/voltLegacy/volt1.png",
      tags: ["Mechanic Design", "Combat Design", "Processing"],
      link: "https://github.com/ekam-n/snuggle-sculptors"
    }
  ) });
}
function Yellow() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    ProjectCard,
    {
      title: "YellowJacket Escape",
      description: "YellowJacket Escape is a top-down 2D dungeon crawler focused on strategic movement and survival, where players navigate hazards while avoiding or confronting YellowJacket enemies.",
      image: "./images/projectImages/yellowJacketEscape/yellow1.png",
      tags: ["Level Design", "Unity", "Playtesting"],
      link: "https://github.com/ekam-n/snuggle-sculptors"
    }
  ) });
}
function Demon() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    ProjectCard,
    {
      title: "Demon's Gate",
      description: "Demon's Gate is a roll-and-move tabletop game where I led the design of mechanics, player types, events, and items while organizing ideation, playtests, and asset creation.",
      image: "./images/projectImages/demonsGate/demon1.png",
      tags: ["Game Design", "Mechanic Design", "Level Design"],
      link: "https://github.com/ekam-n/snuggle-sculptors"
    }
  ) });
}
function ProjectCards() {
  return /* @__PURE__ */ jsxs("section", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
    /* @__PURE__ */ jsx(Yellow, {}),
    /* @__PURE__ */ jsx(Volt, {}),
    /* @__PURE__ */ jsx(Demon, {}),
    /* @__PURE__ */ jsx(Snuggle, {})
  ] });
}
const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: delay * 0.1 }
    // Delay based on index
  })
};
function HomeCards() {
  const sections = [
    { component: /* @__PURE__ */ jsx(Hero, {}), key: "hero" },
    { component: /* @__PURE__ */ jsx(Skills, {}), key: "skills" },
    { component: /* @__PURE__ */ jsx(Education, {}), key: "education" },
    { component: /* @__PURE__ */ jsx(ProjectCards, {}), key: "projects" }
  ];
  return /* @__PURE__ */ jsx("section", { className: "space-y-4", children: sections.map((section, index) => /* @__PURE__ */ jsx(
    motion.div,
    {
      variants: fadeInVariant,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.05 },
      custom: index,
      children: section.component
    },
    section.key
  )) });
}
function meta({}) {
  return [{
    title: "Ekam Nijjar"
  }, {
    name: "description",
    content: "Welcome to my portfolio website!"
  }];
}
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx("main", {
      className: "min-h-screen mb-4 bg-black px-4",
      children: /* @__PURE__ */ jsx(HomeCards, {})
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-u-M4TmH-.js", "imports": ["/assets/chunk-K6AXKMTT-DycbfBQN.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-B4ZiE8EP.js", "imports": ["/assets/chunk-K6AXKMTT-DycbfBQN.js", "/assets/with-props-BJdOiEPt.js"], "css": [] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/home-B3iN4F1q.js", "imports": ["/assets/with-props-BJdOiEPt.js", "/assets/chunk-K6AXKMTT-DycbfBQN.js"], "css": [] } }, "url": "/assets/manifest-5ddedc31.js", "version": "5ddedc31" };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  publicPath,
  routes
};
