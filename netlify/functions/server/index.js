var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// empty-module:~/db/appUsers/appUsers.client
var require_appUsers = __commonJS({
  "empty-module:~/db/appUsers/appUsers.client"(exports, module2) {
    init_react();
    module2.exports = {};
  }
});

// empty-module:~/db/dataPoints.client
var require_dataPoints = __commonJS({
  "empty-module:~/db/dataPoints.client"(exports, module2) {
    init_react();
    module2.exports = {};
  }
});

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});
init_react();
var import_netlify = require("@remix-run/netlify");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var React2 = __toESM(require("react"));
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());

// app/utils/createEmotionCache.ts
init_react();
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/theme/index.ts
init_react();
var import_material = require("@mui/material");

// app/theme/colors.ts
init_react();
var COLORS = {
  PRIMARY: "#663399",
  SECONDARY: "#ff69b4",
  ERROR: "#ff2f00",
  WARNING: "#FFA500",
  INFO: "#00E7FF",
  SUCCESS: "#00FF7E",
  BACKGROUND: {
    DEFAULT: "#0F0F15",
    PAPER: "#070319"
  }
};

// app/theme/index.ts
var theme = (0, import_material.createTheme)({
  palette: {
    mode: "dark",
    primary: {
      main: COLORS.PRIMARY
    },
    secondary: {
      main: COLORS.SECONDARY
    },
    error: {
      main: COLORS.ERROR
    },
    warning: {
      main: COLORS.WARNING
    },
    info: {
      main: COLORS.INFO
    },
    success: {
      main: COLORS.SUCCESS
    },
    background: {
      default: COLORS.BACKGROUND.DEFAULT,
      paper: COLORS.BACKGROUND.PAPER
    }
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiButton: {
      defaultProps: {
        variant: "outlined"
      },
      styleOverrides: {
        root: {
          whiteSpace: "nowrap"
        }
      }
    }
  }
});

// app/entry.server.tsx
var import_CssBaseline = __toESM(require("@mui/material/CssBaseline"));
var import_styles = require("@mui/material/styles");
var import_react = require("@emotion/react");
var import_create_instance = __toESM(require("@emotion/server/create-instance"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = (0, import_create_instance.default)(cache);
  const MuiRemixServer = () => /* @__PURE__ */ React2.createElement(import_react.CacheProvider, {
    value: cache
  }, /* @__PURE__ */ React2.createElement(import_styles.ThemeProvider, {
    theme
  }, /* @__PURE__ */ React2.createElement(import_CssBaseline.default, null), /* @__PURE__ */ React2.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  })));
  const html = (0, import_server.renderToString)(/* @__PURE__ */ React2.createElement(MuiRemixServer, null));
  const { styles } = extractCriticalToChunks(html);
  let stylesHTML = "";
  styles.forEach(({ key, ids, css }) => {
    const emotionKey = `${key} ${ids.join(" ")}`;
    const newStyleTag = `<style data-emotion="${emotionKey}">${css}</style>`;
    stylesHTML = `${stylesHTML}${newStyleTag}`;
  });
  const markup = html.replace(/<meta(\s)*name="emotion-insertion-point"(\s)*content="emotion-insertion-point"(\s)*\/>/, `<meta name="emotion-insertion-point" content="emotion-insertion-point"/>${stylesHTML}`);
  responseHeaders.set("Content-Type", "text/html");
  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/root/projects/andreation/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App2,
  links: () => links,
  loader: () => loader
});
init_react();
var React4 = __toESM(require("react"));
var import_remix7 = __toESM(require_remix());

// app/styles/global.css
var global_default = "/build/_assets/global-UYUZRDWE.css";

// app/state/AuthProvider.tsx
init_react();
var import_auth = require("firebase/auth");
var import_react3 = require("react");
var import_remix3 = __toESM(require_remix());

// app/components/LogoutForm.tsx
init_react();
var import_react2 = require("react");
var import_remix2 = __toESM(require_remix());
var LogoutForm = (0, import_react2.forwardRef)((props, ref) => /* @__PURE__ */ React.createElement(import_remix2.Form, __spreadValues({
  ref,
  action: "/logout",
  method: "post"
}, props)));

// app/state/AuthProvider.tsx
var import_appUsers = __toESM(require_appUsers());
var AuthContext = (0, import_react3.createContext)(null);
function AuthProvider({
  children,
  user: userProp,
  userToken: userTokenProp
}) {
  const [searchParams] = (0, import_remix3.useSearchParams)();
  const [user, setUser] = (0, import_react3.useState)(userProp);
  const logoutFormRef = (0, import_react3.useRef)(null);
  const [userToken, setUserToken] = (0, import_react3.useState)(userTokenProp || "");
  const userTokenForm = (0, import_react3.useRef)(null);
  const fetcher = (0, import_remix3.useFetcher)();
  (0, import_react3.useEffect)(() => {
    setUser(userProp);
  }, [userProp]);
  const { pathname } = (0, import_remix3.useLocation)();
  const redirectTo = pathname.includes("/sign/") ? "/floor-plans" : pathname;
  function sendUserToken() {
    if (!userTokenForm.current)
      return;
    const formData = new FormData(userTokenForm.current);
    fetcher.submit(formData, { method: "post", action: "/update-session" });
  }
  (0, import_react3.useEffect)(() => {
    const auth3 = (0, import_auth.getAuth)();
    return auth3.onIdTokenChanged(async (userFromChange) => {
      if (userFromChange === null && user !== null) {
        setUser(null);
        if (!logoutFormRef.current)
          return;
        logoutFormRef.current.submit();
      } else if (userFromChange) {
        const token = await userFromChange.getIdToken();
        if (token !== userToken) {
          setUser(userFromChange);
          setUserToken(token);
          await (0, import_appUsers.addAppUser)(userFromChange.uid);
          sendUserToken();
        }
      }
    });
  }, [user]);
  (0, import_react3.useEffect)(() => {
    const handle = setInterval(async () => {
      const auth3 = (0, import_auth.getAuth)();
      const user2 = auth3.currentUser;
      if (user2)
        await user2.getIdToken(true);
    }, 10 * 60 * 1e3);
    return () => clearInterval(handle);
  }, []);
  return /* @__PURE__ */ React.createElement(AuthContext.Provider, {
    value: user
  }, /* @__PURE__ */ React.createElement(LogoutForm, {
    ref: logoutFormRef
  }), /* @__PURE__ */ React.createElement(import_remix3.Form, {
    method: "post",
    ref: userTokenForm,
    action: "/update-session"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_method",
    value: "put"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "userToken",
    value: userToken
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: searchParams.get("redirectTo") ?? redirectTo
  })), children);
}
var useAuth = () => {
  return (0, import_react3.useContext)(AuthContext);
};

// app/components/AppBar.tsx
init_react();
var import_Box2 = __toESM(require("@mui/material/Box"));
var import_AppBar = __toESM(require("@mui/material/AppBar"));
var import_Toolbar = __toESM(require("@mui/material/Toolbar"));

// app/components/AuthControls.tsx
init_react();
var import_Box = __toESM(require("@mui/material/Box"));
var import_Button2 = __toESM(require("@mui/material/Button"));
var import_remix4 = __toESM(require_remix());

// app/components/SignOutButton.tsx
init_react();
var import_react4 = __toESM(require("react"));

// app/firebase/auth.ts
init_react();

// app/firebase/firebase.ts
init_react();
var import_app = require("firebase/app");
var import_auth2 = require("firebase/auth");
var import_analytics = require("firebase/analytics");
var import_firestore = require("firebase/firestore");
var app;
var auth;
var db;
var analytics;
if (!(0, import_app.getApps)().length) {
  const firebaseConfig = {
    apiKey: "AIzaSyDQFSyWieK9-E6Lz8aSSzsXkheMTJzdTv8",
    authDomain: "andreations-1.firebaseapp.com",
    projectId: "andreations-1",
    storageBucket: "andreations-1.appspot.com",
    messagingSenderId: "401267718733",
    appId: "1:401267718733:web:329cae131bcf327a6d7a04",
    measurementId: "G-WZN6XWJQ6D"
  };
  app = (0, import_app.initializeApp)(firebaseConfig);
  auth = (0, import_auth2.getAuth)();
  db = (0, import_firestore.getFirestore)();
  if (typeof document !== "undefined") {
    analytics = (0, import_analytics.getAnalytics)();
  }
  if (true) {
    (0, import_firestore.connectFirestoreEmulator)(db, "localhost", 8080);
    (0, import_auth2.connectAuthEmulator)(auth, "http://localhost:9099");
  }
}

// app/firebase/auth.ts
var import_auth3 = require("firebase/auth");
async function emailAndPasswordSignUp({
  email,
  password
}) {
  const auth3 = (0, import_auth2.getAuth)();
  const userCredential = await (0, import_auth3.createUserWithEmailAndPassword)(auth3, email, password);
  const user = userCredential.user;
  return user;
}
async function emailAndPasswordSignIn({
  email,
  password
}) {
  const auth3 = (0, import_auth2.getAuth)();
  const userCredential = await (0, import_auth3.signInWithEmailAndPassword)(auth3, email, password);
  const user = userCredential.user;
  return user;
}
function signOut() {
  const auth3 = (0, import_auth2.getAuth)();
  auth3.signOut().then(function() {
  }).catch(function(error) {
  });
}

// app/components/SignOutButton.tsx
var import_Button = __toESM(require("@mui/material/Button"));
var SignOutButton = (props) => /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement(import_Button.default, __spreadValues({
  onClick: () => signOut()
}, props), "sign out"));

// app/components/AuthControls.tsx
function SignInUp() {
  const user = useAuth();
  return user === null ? /* @__PURE__ */ React.createElement(import_Box.default, null, /* @__PURE__ */ React.createElement(import_Button2.default, {
    component: import_remix4.Link,
    to: "/sign/in"
  }, "sign in"), /* @__PURE__ */ React.createElement(import_Button2.default, {
    sx: { marginLeft: 2 },
    component: import_remix4.Link,
    to: "/sign/up",
    color: "secondary"
  }, "sign up")) : /* @__PURE__ */ React.createElement(import_Box.default, null, /* @__PURE__ */ React.createElement(LogoutForm, null, /* @__PURE__ */ React.createElement(SignOutButton, {
    type: "submit",
    color: "secondary"
  }, "sign out")));
}

// app/components/AppBar.tsx
var import_Typography = __toESM(require("@mui/material/Typography"));
var import_remix5 = __toESM(require_remix());
var import_material2 = require("@mui/material");
function AppBar() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_AppBar.default, null, /* @__PURE__ */ React.createElement(import_Toolbar.default, {
    sx: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/",
    style: { textDecoration: "none" }
  }, /* @__PURE__ */ React.createElement(import_material2.Stack, {
    direction: "row"
  }, /* @__PURE__ */ React.createElement(import_Typography.default, {
    variant: "h4",
    noWrap: true,
    sx: (theme2) => ({
      background: `linear-gradient(to right, ${theme2.palette.primary.main}, ${theme2.palette.secondary.main})`,
      backgroundClip: "text",
      textFillColor: "transparent"
    })
  }, "Andreations"))), /* @__PURE__ */ React.createElement(SignInUp, null))), /* @__PURE__ */ React.createElement(import_Box2.default, {
    sx: { marginBottom: "64px" }
  }));
}

// app/utils/session.server.ts
init_react();
var import_remix6 = __toESM(require_remix());

// app/firebase/firebaseAdmin.server.ts
init_react();
var import_app2 = require("firebase-admin/app");
var import_auth5 = require("firebase-admin/auth");
var import_firestore2 = require("firebase-admin/firestore");
var app2;
var auth2;
var db2;
if (!(0, import_app2.getApps)().length) {
  if (true) {
    process.env.FIRESTORE_EMULATOR_HOST = "localhost:8080";
    process.env.FIREBASE_AUTH_EMULATOR_HOST = "localhost:9099";
  }
  const encodedKey = process.env.FIREBASE_PRIVATE_KEY_BASE64 || "";
  const decodedKey = Buffer.from(encodedKey, "base64").toString("utf8");
  app2 = (0, import_app2.initializeApp)({
    credential: (0, import_app2.cert)({
      privateKey: decodedKey,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      projectId: process.env.FIREBASE_PROJECT_ID
    }),
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
  });
  auth2 = (0, import_auth5.getAuth)();
  db2 = (0, import_firestore2.getFirestore)();
}

// app/utils/session.server.ts
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}
var storage = (0, import_remix6.createCookieSessionStorage)({
  cookie: {
    name: "cs_session",
    secure: true,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true
  }
});
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserToken(request) {
  let session = await getUserSession(request);
  let userToken = session.get("userToken");
  if (!userToken || typeof userToken !== "string")
    return null;
  return userToken;
}
async function getAuthUser(request) {
  let userToken = await getUserToken(request);
  if (typeof userToken !== "string") {
    return null;
  }
  try {
    const authedUser = await (0, import_auth5.getAuth)().verifyIdToken(userToken);
    return authedUser;
  } catch (e) {
    console.log("getAuthUser error", e);
    return null;
  }
}
async function getUserId(request) {
  try {
    let authUser = await getAuthUser(request);
    return (authUser == null ? void 0 : authUser.uid) || null;
  } catch (error) {
    console.log("getUserId error", error);
    return null;
  }
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = await getUserId(request);
  if (!userId || typeof userId !== "string") {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_remix6.redirect)(`/sign/in?${searchParams}`);
  }
  return userId;
}
async function logout(request) {
  let session = await getUserSession(request);
  return (0, import_remix6.redirect)("/sign/in", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}
async function createUserSession(userToken, redirectTo) {
  let session = await storage.getSession();
  session.set("userToken", userToken);
  return (0, import_remix6.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}

// app/components/AppPaper.tsx
init_react();
var import_Stack = __toESM(require("@mui/material/Stack"));
var import_Paper = __toESM(require("@mui/material/Paper"));
function AppPaper({
  children,
  leftColor = "primary",
  rightColor = "secondary",
  sx = {}
}) {
  return /* @__PURE__ */ React.createElement(import_Stack.default, {
    component: import_Paper.default,
    spacing: 2,
    sx: (theme2) => __spreadValues({
      padding: 4,
      position: "relative",
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      border: "solid 5px transparent",
      borderRadius: "1em",
      "&:before ": {
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1,
        margin: "-5px",
        borderRadius: "inherit",
        background: `linear-gradient(to right, ${theme2.palette[leftColor].main}, ${theme2.palette[rightColor].main})`
      }
    }, sx)
  }, children);
}

// route:/root/projects/andreation/app/root.tsx
var import_react6 = require("@emotion/react");
var import_material3 = require("@mui/material");
var import_react7 = require("react");

// app/theme/ClientStyleContext.ts
init_react();
var import_react5 = require("react");
var ClientStyleContext_default = (0, import_react5.createContext)({
  reset: () => {
  }
});

// route:/root/projects/andreation/app/root.tsx
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css"
    },
    {
      rel: "stylesheet",
      href: global_default
    }
  ];
}
var Document = (0, import_react6.withEmotionCache)(({ children, title }, emotionCache) => {
  const clientStyleData = (0, import_react7.useContext)(ClientStyleContext_default);
  (0, import_material3.unstable_useEnhancedEffect)(() => {
    emotionCache.sheet.container = document.head;
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    });
    clientStyleData.reset();
  }, []);
  return /* @__PURE__ */ React4.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React4.createElement("head", null, /* @__PURE__ */ React4.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React4.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React4.createElement("meta", {
    name: "theme-color",
    content: theme.palette.primary.main
  }), title ? /* @__PURE__ */ React4.createElement("title", null, title) : null, /* @__PURE__ */ React4.createElement(import_remix7.Meta, null), /* @__PURE__ */ React4.createElement(import_remix7.Links, null), /* @__PURE__ */ React4.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  }), /* @__PURE__ */ React4.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap",
    rel: "stylesheet"
  }), /* @__PURE__ */ React4.createElement("meta", {
    name: "emotion-insertion-point",
    content: "emotion-insertion-point"
  })), /* @__PURE__ */ React4.createElement("body", null, children, /* @__PURE__ */ React4.createElement(import_remix7.ScrollRestoration, null), /* @__PURE__ */ React4.createElement(import_remix7.Scripts, null), /* @__PURE__ */ React4.createElement(import_remix7.LiveReload, null)));
});
var loader = async ({ request }) => {
  const user = await getAuthUser(request);
  const userToken = await getUserToken(request);
  const data = {
    user,
    userToken
  };
  return data;
};
function Providers({
  user,
  children,
  userToken
}) {
  return /* @__PURE__ */ React4.createElement(AuthProvider, {
    user,
    userToken
  }, children);
}
function App2() {
  const { user, userToken } = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ React4.createElement(Document, null, /* @__PURE__ */ React4.createElement(Providers, {
    user,
    userToken
  }, /* @__PURE__ */ React4.createElement(AppBar, null), /* @__PURE__ */ React4.createElement(import_remix7.Outlet, null)));
}
function RootError({
  docTitle = "Oops!",
  title = "Something went wrong. \u{1F625}",
  message = "Please try again later."
}) {
  return /* @__PURE__ */ React4.createElement(Document, {
    title: docTitle
  }, /* @__PURE__ */ React4.createElement(import_material3.Stack, {
    justifyContent: "center",
    alignItems: "center",
    sx: { height: "100vh", padding: 5 }
  }, /* @__PURE__ */ React4.createElement(AppPaper, {
    leftColor: "error",
    rightColor: "warning"
  }, /* @__PURE__ */ React4.createElement(import_material3.Typography, {
    variant: "h1",
    textAlign: "center"
  }, title), /* @__PURE__ */ React4.createElement(import_material3.Typography, null, message))));
}
function CatchBoundary() {
  const caught = (0, import_remix7.useCatch)();
  const title = `${caught.status} ${caught.statusText}`;
  return /* @__PURE__ */ React4.createElement(RootError, {
    docTitle: title,
    title,
    message: "Well this is embarsing. \u{1F605} Have you tried turning it off and back on again?"
  });
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React4.createElement(RootError, {
    message: error.message
  });
}

// route:/root/projects/andreation/app/routes/floor-plans/$floorPlanId.edit.tsx
var floorPlanId_edit_exports = {};
__export(floorPlanId_edit_exports, {
  action: () => action,
  default: () => EditPlan,
  loader: () => loader2
});
init_react();
var import_remix9 = __toESM(require_remix());
var import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/components/EditFloorPlan.tsx
init_react();
var import_remix8 = __toESM(require_remix());
var import_material4 = require("@mui/material");
function EditFloorPlan({
  isCreate,
  errors,
  owner,
  title = "",
  description = "",
  cost = "",
  githubOwner = "",
  githubRepo = "",
  setupTime = "",
  tags = ""
}) {
  return /* @__PURE__ */ React.createElement(import_material4.Stack, {
    spacing: 2,
    sx: { p: 4 }
  }, /* @__PURE__ */ React.createElement(import_remix8.Form, {
    method: "post",
    onSubmit: () => {
      (0, import_analytics.logEvent)(analytics, isCreate ? "create" : "edit");
    }
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "owner",
    value: owner
  }), /* @__PURE__ */ React.createElement(import_material4.Stack, {
    spacing: 2,
    alignItems: "stretch",
    sx: {
      width: "100%",
      maxWidth: "500px",
      margin: "60px auto"
    }
  }, /* @__PURE__ */ React.createElement(import_material4.Box, null, /* @__PURE__ */ React.createElement(import_material4.TextField, {
    error: errors == null ? void 0 : errors.githubOwner,
    id: "githubOwner",
    label: "Github Owner",
    helperText: (errors == null ? void 0 : errors.githubOwner) ? "Github Owner is required" : "Which Github Organization owns this project?",
    variant: "filled",
    name: "githubOwner",
    fullWidth: true,
    defaultValue: githubOwner
  })), /* @__PURE__ */ React.createElement(import_material4.Box, null, /* @__PURE__ */ React.createElement(import_material4.TextField, {
    error: errors == null ? void 0 : errors.githubRepo,
    id: "githubRepo",
    label: "Github Repo",
    helperText: (errors == null ? void 0 : errors.githubRepo) ? "githubRepo is required" : "What is the name of the Github Repo?",
    variant: "filled",
    name: "githubRepo",
    fullWidth: true,
    defaultValue: githubRepo
  })), /* @__PURE__ */ React.createElement(import_material4.Box, null, /* @__PURE__ */ React.createElement(import_material4.TextField, {
    error: errors == null ? void 0 : errors.title,
    id: "title",
    label: "Title",
    helperText: (errors == null ? void 0 : errors.title) ? "Title is required" : "Display name for the project || Repo Name",
    variant: "filled",
    name: "title",
    fullWidth: true,
    defaultValue: title
  })), /* @__PURE__ */ React.createElement(import_material4.Box, null, /* @__PURE__ */ React.createElement(import_material4.TextField, {
    error: errors == null ? void 0 : errors.description,
    id: "description",
    label: "Description",
    helperText: (errors == null ? void 0 : errors.description) ? "Description is required" : "What makes this repo so great?",
    variant: "filled",
    name: "description",
    fullWidth: true,
    defaultValue: description,
    multiline: true,
    rows: 4
  })), /* @__PURE__ */ React.createElement(import_material4.Box, null, /* @__PURE__ */ React.createElement(import_material4.FormControl, {
    fullWidth: true,
    variant: "filled",
    error: errors == null ? void 0 : errors.cost
  }, /* @__PURE__ */ React.createElement(import_material4.InputLabel, {
    id: "select-label-cost"
  }, "Cost"), /* @__PURE__ */ React.createElement(import_material4.Select, {
    labelId: "select-label-cost",
    id: "cost",
    label: "Cost",
    name: "cost",
    defaultValue: cost
  }, /* @__PURE__ */ React.createElement(import_material4.MenuItem, {
    value: "free"
  }, "Free"), /* @__PURE__ */ React.createElement(import_material4.MenuItem, {
    value: "$"
  }, "$"), /* @__PURE__ */ React.createElement(import_material4.MenuItem, {
    value: "$$"
  }, "$$"), /* @__PURE__ */ React.createElement(import_material4.MenuItem, {
    value: "$$$"
  }, "$$$")), /* @__PURE__ */ React.createElement(import_material4.FormHelperText, null, (errors == null ? void 0 : errors.cost) ? "Cost is required" : "How much does this plan cost to run when starting?"))), /* @__PURE__ */ React.createElement(import_material4.Box, null, /* @__PURE__ */ React.createElement(import_material4.FormControl, {
    fullWidth: true,
    variant: "filled",
    error: errors == null ? void 0 : errors.setupTime
  }, /* @__PURE__ */ React.createElement(import_material4.InputLabel, {
    id: "select-label-setupTime"
  }, "Setup Time"), /* @__PURE__ */ React.createElement(import_material4.Select, {
    labelId: "select-label-setupTime",
    id: "setupTime",
    label: "Setup Time",
    name: "setupTime",
    defaultValue: setupTime
  }, /* @__PURE__ */ React.createElement(import_material4.MenuItem, {
    value: "5min"
  }, "5min"), /* @__PURE__ */ React.createElement(import_material4.MenuItem, {
    value: "30min"
  }, "30min"), /* @__PURE__ */ React.createElement(import_material4.MenuItem, {
    value: "1hr"
  }, "1hr"), /* @__PURE__ */ React.createElement(import_material4.MenuItem, {
    value: "2hr"
  }, "2hr"), /* @__PURE__ */ React.createElement(import_material4.MenuItem, {
    value: "5hr"
  }, "5hr"), /* @__PURE__ */ React.createElement(import_material4.MenuItem, {
    value: "1day"
  }, "1day"), /* @__PURE__ */ React.createElement(import_material4.MenuItem, {
    value: "1week"
  }, "1week")), /* @__PURE__ */ React.createElement(import_material4.FormHelperText, null, (errors == null ? void 0 : errors.setupTime) ? "Setup Time is required" : "How long does it take to setup?"))), /* @__PURE__ */ React.createElement(import_material4.Box, null, /* @__PURE__ */ React.createElement(import_material4.TextField, {
    error: errors == null ? void 0 : errors.tags,
    id: "tags",
    label: "Tags",
    helperText: (errors == null ? void 0 : errors.tags) ? "tags is required" : "What are some search terms for this repo?",
    variant: "filled",
    name: "tags",
    fullWidth: true,
    defaultValue: tags
  })), /* @__PURE__ */ React.createElement(import_material4.Box, null, /* @__PURE__ */ React.createElement(import_material4.Button, {
    type: "submit",
    variant: "contained",
    fullWidth: true
  }, isCreate ? "Create Floor Plan" : "Update Floor Plan")))));
}

// app/db/floorPlans.server.ts
init_react();
var BLOG_POSTS_COLLECTION = "floorPlans";
var getCollectionRef = () => (0, import_firestore2.getFirestore)().collection(BLOG_POSTS_COLLECTION);
var getDocReference = (floorPlanId) => getCollectionRef().doc(floorPlanId);
var getQuery = () => getCollectionRef();
async function getFilteredFloorPlans({
  queryString,
  userId
}) {
  let queryRef = getQuery();
  if (userId) {
    queryRef = queryRef.where("owner", "==", userId);
  }
  if (queryString) {
    queryRef = queryRef.where("queryList", "array-contains-any", queryString.split(" ").filter((word) => word.length > 1).slice(0, 9).map((word) => word.toLowerCase()));
  }
  const querySnapshot = await queryRef.get();
  return querySnapshot.docs.map((doc) => __spreadValues({ id: doc.id }, doc.data()));
}
async function getFloorPlan(floorPlanId) {
  const docRef = getDocReference(floorPlanId);
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    return __spreadValues({ id: docRef.id }, docSnap == null ? void 0 : docSnap.data()) || null;
  } else {
    console.log("No such document!");
    return null;
  }
}
async function addFloorPlan(floorPlan) {
  try {
    const queryList = [
      ...floorPlan.title.split(" ").filter((word) => word.length > 1).map((word) => word.toLowerCase()),
      ...floorPlan.tags.filter((word) => word.length > 1).map((word) => word.toLowerCase())
    ];
    floorPlan.queryList = queryList;
    const docRef = await getCollectionRef().add(floorPlan);
    const newFloorPlan = await getFloorPlan(docRef.id);
    if (!newFloorPlan) {
      throw new Error("Failed to get new data point");
    }
    return newFloorPlan;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}
async function setFloorPlan(floorPlanId, floorPlan) {
  try {
    const queryList = [
      ...floorPlan.title.split(" ").filter((word) => word.length > 1).map((word) => word.toLowerCase()),
      ...floorPlan.tags.filter((word) => word.length > 1).map((word) => word.toLowerCase())
    ];
    floorPlan.queryList = queryList;
    await getDocReference(floorPlanId).set(floorPlan);
    const docRef = await getDocReference(floorPlanId);
    const newFloorPlan = await getFloorPlan(docRef.id);
    if (!newFloorPlan) {
      throw new Error("Failed to get new data point");
    }
    return newFloorPlan;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}

// route:/root/projects/andreation/app/routes/floor-plans/$floorPlanId.edit.tsx
var loader2 = async ({
  request,
  params
}) => {
  const userId = await requireUserId(request);
  (0, import_tiny_invariant.default)(params.floorPlanId, "expected params.slug");
  const floorPlan = await getFloorPlan(params.floorPlanId);
  (0, import_tiny_invariant.default)(floorPlan, "expected floorPlan");
  return __spreadProps(__spreadValues({}, floorPlan), { userId });
};
var action = async ({ request, params }) => {
  var _a;
  const formData = await request.formData();
  const floorPlanId = params.floorPlanId;
  const owner = formData.get("owner");
  const title = formData.get("title");
  const description = formData.get("description");
  const cost = formData.get("cost");
  const githubOwner = formData.get("githubOwner");
  const githubRepo = formData.get("githubRepo");
  const setupTime = formData.get("setupTime");
  const tags = ((_a = String(formData.get("tags"))) == null ? void 0 : _a.split(",").map((word) => word.trim())) || [];
  const errors = {};
  if (!owner)
    errors.owner = true;
  if (!title)
    errors.title = true;
  if (!description)
    errors.description = true;
  if (!cost)
    errors.cost = true;
  if (!githubOwner)
    errors.githubOwner = true;
  if (!githubRepo)
    errors.githubRepo = true;
  if (!setupTime)
    errors.setupTime = true;
  if (Object.keys(errors).length) {
    return errors;
  }
  (0, import_tiny_invariant.default)(typeof floorPlanId === "string");
  (0, import_tiny_invariant.default)(typeof owner === "string");
  (0, import_tiny_invariant.default)(typeof title === "string");
  (0, import_tiny_invariant.default)(typeof description === "string");
  (0, import_tiny_invariant.default)(typeof cost === "string");
  (0, import_tiny_invariant.default)(typeof githubOwner === "string");
  (0, import_tiny_invariant.default)(typeof githubRepo === "string");
  (0, import_tiny_invariant.default)(typeof setupTime === "string");
  (0, import_tiny_invariant.default)(typeof tags === "object");
  await setFloorPlan(floorPlanId, {
    owner,
    title,
    description,
    cost,
    githubOwner,
    githubRepo,
    setupTime,
    tags
  });
  return (0, import_remix9.redirect)("/floor-plans");
};
function EditPlan() {
  const {
    userId,
    title,
    description,
    cost,
    githubOwner,
    githubRepo,
    setupTime,
    tags
  } = (0, import_remix9.useLoaderData)();
  const errors = (0, import_remix9.useActionData)();
  return /* @__PURE__ */ React.createElement(EditFloorPlan, {
    isCreate: false,
    errors,
    owner: userId,
    title,
    description,
    cost,
    githubOwner,
    githubRepo,
    setupTime,
    tags: tags.join(", ")
  });
}

// route:/root/projects/andreation/app/routes/blog/$blogPostId.edit.tsx
var blogPostId_edit_exports = {};
__export(blogPostId_edit_exports, {
  action: () => action2,
  default: () => NewPost,
  loader: () => loader3
});
init_react();
var import_remix11 = __toESM(require_remix());
var import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// app/db/blogPosts.server.ts
init_react();
var BLOG_POSTS_COLLECTION2 = "blogPosts";
var getCollectionRef2 = () => (0, import_firestore2.getFirestore)().collection(BLOG_POSTS_COLLECTION2);
var getDocReference2 = (blogPostId) => getCollectionRef2().doc(blogPostId);
var getQuery2 = () => getCollectionRef2();
async function getAllBlogPosts() {
  const queryRef = getQuery2();
  const querySnapshot = await queryRef.get();
  return querySnapshot.docs.map((doc) => __spreadValues({ id: doc.id }, doc.data()));
}
async function getBlogPost(blogPostId) {
  const docRef = getDocReference2(blogPostId);
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    return __spreadValues({ id: docRef.id }, docSnap == null ? void 0 : docSnap.data()) || null;
  } else {
    console.log("No such document!");
    return null;
  }
}
async function addBlogPost(blogPost) {
  try {
    const docRef = await getDocReference2(blogPost.slug).set(blogPost);
    const newBlogPost = await getBlogPost(blogPost.slug);
    if (!newBlogPost) {
      throw new Error("Failed to get new data point");
    }
    return newBlogPost;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}

// app/db/appUsers/appUsers.server.ts
init_react();

// app/db/appUsers/types.ts
init_react();
var APP_USERS_COLLECTION = "appUsers";

// app/db/appUsers/appUsers.server.ts
var getCollectionRef3 = () => (0, import_firestore2.getFirestore)().collection(APP_USERS_COLLECTION);
var getDocReference3 = (appUserId) => getCollectionRef3().doc(appUserId);
async function getAppUser(appUserId) {
  const docRef = getDocReference3(appUserId);
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    return (docSnap == null ? void 0 : docSnap.data()) || null;
  } else {
    console.log("No such document!");
    return null;
  }
}

// route:/root/projects/andreation/app/routes/blog/$blogPostId.edit.tsx
var import_react9 = require("react");

// app/components/EditPost.tsx
init_react();
var import_remix10 = __toESM(require_remix());
var import_react8 = __toESM(require("@monaco-editor/react"));
var import_material5 = require("@mui/material");

// app/components/DateTimePicker.tsx
init_react();
var import_TextField = __toESM(require("@mui/material/TextField"));
var import_AdapterDateFns = __toESM(require("@mui/lab/AdapterDateFns"));
var import_LocalizationProvider = __toESM(require("@mui/lab/LocalizationProvider"));
var import_DateTimePicker = __toESM(require("@mui/lab/DateTimePicker"));
function DateTimePicker(_a) {
  var _b = _a, { date, setDate } = _b, textFieldProps = __objRest(_b, ["date", "setDate"]);
  return /* @__PURE__ */ React.createElement(import_LocalizationProvider.default, {
    dateAdapter: import_AdapterDateFns.default
  }, /* @__PURE__ */ React.createElement(import_DateTimePicker.default, {
    renderInput: (props) => /* @__PURE__ */ React.createElement(import_TextField.default, __spreadValues(__spreadValues({
      fullWidth: true
    }, props), textFieldProps)),
    label: "DateTimePicker",
    value: date,
    onChange: (newDate) => {
      setDate(newDate);
    }
  }));
}

// app/components/EditPost.tsx
function EditPost({
  errors,
  authorId,
  isPublished,
  setIsPublished,
  date,
  setDate,
  markdown,
  handleEditorChange,
  title = "",
  description = "",
  slug = "",
  imageUrl = "",
  imageAlt = "",
  tags = ""
}) {
  return /* @__PURE__ */ React.createElement(import_material5.Stack, {
    spacing: 2,
    sx: { p: 4 }
  }, /* @__PURE__ */ React.createElement(import_remix10.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "authorId",
    value: authorId
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "isPublished",
    value: isPublished.toString()
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "markdown",
    value: markdown
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "publishDate",
    value: date == null ? void 0 : date.getTime().toString()
  }), /* @__PURE__ */ React.createElement(import_material5.Stack, {
    direction: { xs: "column", md: "row" },
    spacing: 2,
    sx: { p: 4 }
  }, /* @__PURE__ */ React.createElement(import_material5.Stack, {
    spacing: 2,
    alignItems: "stretch",
    sx: {
      width: "100%",
      minWidth: { md: "320px" },
      flex: { md: "0 0 320px" }
    }
  }, /* @__PURE__ */ React.createElement(import_material5.Box, null, /* @__PURE__ */ React.createElement(import_material5.FormControlLabel, {
    control: /* @__PURE__ */ React.createElement(import_material5.Switch, {
      checked: isPublished,
      onChange: (event) => setIsPublished(event.target.checked),
      inputProps: { "aria-label": "controlled" }
    }),
    label: isPublished ? "Is Published" : "Not Published"
  })), /* @__PURE__ */ React.createElement(import_material5.Box, null, /* @__PURE__ */ React.createElement(DateTimePicker, {
    date,
    setDate,
    variant: "filled"
  })), /* @__PURE__ */ React.createElement(import_material5.Box, null, /* @__PURE__ */ React.createElement(import_material5.TextField, {
    error: errors == null ? void 0 : errors.title,
    id: "title",
    label: "Title",
    helperText: (errors == null ? void 0 : errors.title) ? "Title is required" : null,
    variant: "filled",
    name: "title",
    fullWidth: true,
    defaultValue: title
  })), /* @__PURE__ */ React.createElement(import_material5.Box, null, /* @__PURE__ */ React.createElement(import_material5.TextField, {
    error: errors == null ? void 0 : errors.description,
    id: "description",
    label: "Description",
    helperText: (errors == null ? void 0 : errors.description) ? "Description is required" : null,
    variant: "filled",
    name: "description",
    fullWidth: true,
    defaultValue: description
  })), /* @__PURE__ */ React.createElement(import_material5.Box, null, /* @__PURE__ */ React.createElement(import_material5.TextField, {
    error: errors == null ? void 0 : errors.slug,
    id: "slug",
    label: "Slug",
    helperText: (errors == null ? void 0 : errors.slug) ? "Slug is required" : null,
    variant: "filled",
    name: "slug",
    fullWidth: true,
    defaultValue: slug
  })), /* @__PURE__ */ React.createElement(import_material5.Box, null, /* @__PURE__ */ React.createElement(import_material5.TextField, {
    error: errors == null ? void 0 : errors.imageUrl,
    id: "imageUrl",
    label: "Image Url",
    helperText: (errors == null ? void 0 : errors.imageUrl) ? "imageUrl is required" : null,
    variant: "filled",
    name: "imageUrl",
    fullWidth: true,
    defaultValue: imageUrl
  })), /* @__PURE__ */ React.createElement(import_material5.Box, null, /* @__PURE__ */ React.createElement(import_material5.TextField, {
    error: errors == null ? void 0 : errors.imageAlt,
    id: "imageAlt",
    label: "Image Alt Text",
    helperText: (errors == null ? void 0 : errors.imageAlt) ? "imageAlt is required" : null,
    variant: "filled",
    name: "imageAlt",
    fullWidth: true,
    defaultValue: imageAlt
  })), /* @__PURE__ */ React.createElement(import_material5.Box, null, /* @__PURE__ */ React.createElement(import_material5.TextField, {
    error: errors == null ? void 0 : errors.tags,
    id: "tags",
    label: "Tags",
    helperText: (errors == null ? void 0 : errors.tags) ? "tags is required" : null,
    variant: "filled",
    name: "tags",
    fullWidth: true,
    defaultValue: tags
  }))), /* @__PURE__ */ React.createElement(import_material5.Stack, {
    spacing: 2,
    direction: { xs: "column", md: "column-reverse" },
    justifyContent: "flex-end",
    sx: { flex: "1 1" }
  }, /* @__PURE__ */ React.createElement(import_material5.Box, {
    sx: { flex: "1 1", minHeight: "500px" }
  }, /* @__PURE__ */ React.createElement(import_react8.default, {
    height: "80vh",
    defaultLanguage: "markdown",
    onChange: handleEditorChange,
    theme: "vs-dark",
    defaultValue: markdown
  })), /* @__PURE__ */ React.createElement(import_material5.Stack, {
    direction: "row",
    spacing: 2,
    justifyContent: "flex-end"
  }, /* @__PURE__ */ React.createElement(import_material5.Button, {
    component: import_remix10.Link,
    to: `/blog/${slug}`,
    target: "_blank",
    color: "secondary"
  }, "Preview"), /* @__PURE__ */ React.createElement(import_material5.Button, {
    type: "submit",
    variant: "contained"
  }, "Create Post"))))));
}

// route:/root/projects/andreation/app/routes/blog/$blogPostId.edit.tsx
var loader3 = async ({
  request,
  params
}) => {
  const userId = await requireUserId(request);
  let isAuthor = false;
  if (userId) {
    const appUser = await getAppUser(userId);
    if (!(appUser == null ? void 0 : appUser.permissions.includes("author"))) {
      return (0, import_remix11.redirect)("/blog");
    }
  }
  (0, import_tiny_invariant2.default)(params.blogPostId, "expected params.slug");
  const blogPost = await getBlogPost(params.blogPostId);
  (0, import_tiny_invariant2.default)(blogPost, "expected blogPost");
  return __spreadProps(__spreadValues({}, blogPost), { isAuthor });
};
var action2 = async ({ request }) => {
  var _a;
  const formData = await request.formData();
  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");
  const description = formData.get("description");
  const authorId = formData.get("authorId");
  const imageUrl = formData.get("imageUrl");
  const imageAlt = formData.get("imageAlt");
  const tags = ((_a = String(formData.get("tags"))) == null ? void 0 : _a.split(",")) || [];
  const isPublished = formData.get("isPublished") === "true";
  const publishDate = parseInt(formData.get("publishDate") || "0", 10);
  const errors = {};
  if (!title)
    errors.title = true;
  if (!slug)
    errors.slug = true;
  if (!markdown)
    errors.markdown = true;
  if (!description)
    errors.description = true;
  if (!imageUrl)
    errors.description = true;
  if (!imageAlt)
    errors.description = true;
  if (!tags)
    errors.description = true;
  if (Object.keys(errors).length) {
    return errors;
  }
  (0, import_tiny_invariant2.default)(typeof title === "string");
  (0, import_tiny_invariant2.default)(typeof slug === "string");
  (0, import_tiny_invariant2.default)(typeof markdown === "string");
  (0, import_tiny_invariant2.default)(typeof description === "string");
  (0, import_tiny_invariant2.default)(typeof authorId === "string");
  (0, import_tiny_invariant2.default)(typeof isPublished === "boolean");
  (0, import_tiny_invariant2.default)(typeof publishDate === "number");
  (0, import_tiny_invariant2.default)(typeof imageUrl === "string");
  (0, import_tiny_invariant2.default)(typeof imageAlt === "string");
  (0, import_tiny_invariant2.default)(typeof tags === "object");
  await addBlogPost({
    authorId,
    title,
    slug,
    markdown,
    isPublished,
    publishDate,
    description,
    imageUrl,
    imageAlt,
    tags
  });
  return (0, import_remix11.redirect)("/blog");
};
function NewPost() {
  const {
    authorId,
    isPublished: initIsPublished,
    title,
    slug,
    markdown: initMarkdown,
    publishDate,
    description,
    imageUrl,
    imageAlt,
    tags
  } = (0, import_remix11.useLoaderData)();
  const [date, setDate] = (0, import_react9.useState)(new Date(publishDate));
  const [markdown, setMarkdown] = (0, import_react9.useState)(initMarkdown);
  const [isPublished, setIsPublished] = (0, import_react9.useState)(initIsPublished);
  const errors = (0, import_remix11.useActionData)();
  function handleEditorChange(value) {
    setMarkdown(value);
  }
  return /* @__PURE__ */ React.createElement(EditPost, {
    errors,
    authorId,
    isPublished,
    setIsPublished,
    date,
    setDate,
    markdown,
    handleEditorChange,
    title,
    description,
    slug,
    imageUrl,
    imageAlt,
    tags: (tags == null ? void 0 : tags.join(", ")) || ""
  });
}

// route:/root/projects/andreation/app/routes/floor-plans/create.tsx
var create_exports = {};
__export(create_exports, {
  action: () => action3,
  default: () => NewPlan,
  loader: () => loader4
});
init_react();
var import_remix12 = __toESM(require_remix());
var import_tiny_invariant3 = __toESM(require("tiny-invariant"));
var loader4 = async ({
  request,
  params
}) => {
  const userId = await requireUserId(request);
  const data = {
    userId
  };
  return data;
};
var action3 = async ({ request }) => {
  var _a;
  const formData = await request.formData();
  const owner = formData.get("owner");
  const title = formData.get("title");
  const description = formData.get("description");
  const cost = formData.get("cost");
  const githubOwner = formData.get("githubOwner");
  const githubRepo = formData.get("githubRepo");
  const setupTime = formData.get("setupTime");
  const tags = ((_a = String(formData.get("tags"))) == null ? void 0 : _a.split(",").map((word) => word.trim())) || [];
  const errors = {};
  if (!owner)
    errors.owner = true;
  if (!title)
    errors.title = true;
  if (!description)
    errors.description = true;
  if (!cost)
    errors.cost = true;
  if (!githubOwner)
    errors.githubOwner = true;
  if (!githubRepo)
    errors.githubRepo = true;
  if (!setupTime)
    errors.setupTime = true;
  if (Object.keys(errors).length) {
    return errors;
  }
  (0, import_tiny_invariant3.default)(typeof owner === "string");
  (0, import_tiny_invariant3.default)(typeof title === "string");
  (0, import_tiny_invariant3.default)(typeof description === "string");
  (0, import_tiny_invariant3.default)(typeof cost === "string");
  (0, import_tiny_invariant3.default)(typeof githubOwner === "string");
  (0, import_tiny_invariant3.default)(typeof githubRepo === "string");
  (0, import_tiny_invariant3.default)(typeof setupTime === "string");
  (0, import_tiny_invariant3.default)(typeof tags === "object");
  await addFloorPlan({
    owner,
    title,
    description,
    cost,
    githubOwner,
    githubRepo,
    setupTime,
    tags
  });
  return (0, import_remix12.redirect)("/floor-plans");
};
function NewPlan() {
  const { userId } = (0, import_remix12.useLoaderData)();
  const errors = (0, import_remix12.useActionData)();
  return /* @__PURE__ */ React.createElement(EditFloorPlan, {
    isCreate: true,
    errors,
    owner: userId
  });
}

// route:/root/projects/andreation/app/routes/floor-plans/index.tsx
var floor_plans_exports = {};
__export(floor_plans_exports, {
  default: () => Blog,
  loader: () => loader5
});
init_react();
var import_Search = __toESM(require("@mui/icons-material/Search"));
var import_material7 = require("@mui/material");
var import_remix14 = __toESM(require_remix());

// app/components/FloorPlanCard.tsx
init_react();
var import_material6 = require("@mui/material");
var import_remix13 = __toESM(require_remix());
var import_AccessTime = __toESM(require("@mui/icons-material/AccessTime"));
function FloorPlanCard({
  title,
  description,
  cost,
  githubOwner,
  githubRepo,
  setupTime,
  tags,
  id,
  userId,
  owner
}) {
  return /* @__PURE__ */ React.createElement(import_material6.Card, {
    sx: { margin: "20px auto" }
  }, /* @__PURE__ */ React.createElement(import_material6.CardContent, null, /* @__PURE__ */ React.createElement(import_material6.Stack, {
    direction: "row",
    justifyContent: "space-between"
  }, /* @__PURE__ */ React.createElement(import_material6.Typography, {
    gutterBottom: true,
    variant: "h5",
    component: "div",
    color: "secondary"
  }, title), /* @__PURE__ */ React.createElement(import_material6.Stack, {
    direction: "row",
    spacing: 1,
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_material6.Typography, {
    variant: "h5",
    color: "text.secondary"
  }, /* @__PURE__ */ React.createElement(import_AccessTime.default, {
    fontSize: "inherit"
  })), /* @__PURE__ */ React.createElement(import_material6.Typography, {
    variant: "h6",
    color: "text.secondary"
  }, setupTime), /* @__PURE__ */ React.createElement(import_material6.Typography, {
    variant: "h6",
    color: "primary"
  }, cost))), /* @__PURE__ */ React.createElement(import_material6.Typography, {
    variant: "body2",
    color: "text.secondary"
  }, description)), /* @__PURE__ */ React.createElement(import_material6.CardActions, {
    sx: {
      justifyContent: "flex-end"
    }
  }, /* @__PURE__ */ React.createElement(import_material6.Stack, {
    direction: { xs: "column", md: "row" },
    alignItems: { xs: "stretch", md: "center" },
    justifyContent: "flex-end",
    spacing: 2,
    sx: {
      width: "100%"
    }
  }, owner === userId ? /* @__PURE__ */ React.createElement(import_material6.Button, {
    component: import_remix13.Link,
    to: `/floor-plans/${id}/edit`,
    size: "large"
  }, "edit") : null, /* @__PURE__ */ React.createElement(import_material6.Button, {
    component: import_material6.Link,
    href: `https://github.com/${githubOwner}/${githubRepo}#readme`,
    target: "_blank",
    size: "large"
  }, "Get Started"))));
}

// route:/root/projects/andreation/app/routes/floor-plans/index.tsx
var loader5 = async ({
  request
}) => {
  const userId = await getUserId(request);
  const url = new URL(request.url);
  const showMine = url.searchParams.get("show-mine") === "on";
  const queryString = url.searchParams.get("query-string");
  const floorPlans = await getFilteredFloorPlans({
    userId: showMine ? userId : null,
    queryString: queryString || null
  });
  return { floorPlans, userId };
};
function Blog() {
  const { floorPlans, userId } = (0, import_remix14.useLoaderData)();
  return /* @__PURE__ */ React.createElement(import_material7.Stack, {
    alignItems: "stretch",
    justifyContent: "space-between",
    spacing: 4,
    sx: {
      maxWidth: "900px",
      margin: "120px auto",
      width: "80%"
    }
  }, /* @__PURE__ */ React.createElement(AppPaper, null, /* @__PURE__ */ React.createElement(import_material7.Typography, {
    variant: "h4",
    textAlign: "center"
  }, "Search to find a floor plan to get your app off the ground."), /* @__PURE__ */ React.createElement(import_material7.Divider, null, /* @__PURE__ */ React.createElement(import_material7.Typography, {
    variant: "h5",
    textAlign: "center",
    color: "text.secondary"
  }, "OR")), /* @__PURE__ */ React.createElement(import_material7.Button, {
    component: import_remix14.Link,
    to: "/floor-plans/create",
    size: "large"
  }, "Add A Floor Plan To Share")), /* @__PURE__ */ React.createElement(import_material7.Stack, {
    component: import_remix14.Form,
    direction: { xs: "column", md: "row" },
    alignItems: { xs: "stretch", md: "center" },
    spacing: 2,
    sx: {
      margin: "20px 0"
    }
  }, /* @__PURE__ */ React.createElement(import_material7.TextField, {
    id: "query-string",
    label: "Search for Floor Plan",
    name: "query-string",
    InputProps: {
      startAdornment: /* @__PURE__ */ React.createElement(import_material7.InputAdornment, {
        position: "start"
      }, /* @__PURE__ */ React.createElement(import_Search.default, null))
    },
    variant: "outlined",
    sx: {
      flex: "1"
    }
  }), /* @__PURE__ */ React.createElement(import_material7.FormGroup, null, /* @__PURE__ */ React.createElement(import_material7.FormControlLabel, {
    control: /* @__PURE__ */ React.createElement(import_material7.Switch, {
      name: "show-mine"
    }),
    label: "Show My Floor Plans"
  })), /* @__PURE__ */ React.createElement(import_material7.Button, {
    variant: "outlined",
    type: "submit"
  }, "Filter")), /* @__PURE__ */ React.createElement(import_material7.Stack, {
    spacing: 2
  }, floorPlans.map((floorPlan) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_material7.Box, {
    key: floorPlan.id,
    sx: {
      flex: { xs: "0 0 80%", md: "0 0 40%", lg: "0 0 30%" },
      margin: 2
    }
  }, /* @__PURE__ */ React.createElement(FloorPlanCard, {
    title: floorPlan.title,
    description: floorPlan.description,
    cost: floorPlan.cost,
    setupTime: floorPlan.setupTime,
    owner: floorPlan.owner,
    githubOwner: floorPlan.githubOwner,
    githubRepo: floorPlan.githubRepo,
    tags: floorPlan.tags,
    id: floorPlan.id,
    userId
  })), /* @__PURE__ */ React.createElement(import_material7.Divider, null)))));
}

// route:/root/projects/andreation/app/routes/blog/$blogPostId.tsx
var blogPostId_exports = {};
__export(blogPostId_exports, {
  default: () => PostSlug,
  loader: () => loader6
});
init_react();
var import_remix15 = __toESM(require_remix());
var import_tiny_invariant4 = __toESM(require("tiny-invariant"));
var import_client = require("mdx-bundler/client");
var import_react10 = require("react");
var import_material9 = require("@mui/material");

// app/components/CodeBlock.tsx
init_react();
var import_material8 = require("@mui/material");
var import_system = require("@mui/system");
var import_prism_react_renderer = __toESM(require("prism-react-renderer"));
var import_dracula = __toESM(require("prism-react-renderer/themes/dracula"));
var Line = (0, import_system.styled)("div")({
  display: "table-row"
});
var LineNo = (0, import_system.styled)("span")({
  display: "table-cell",
  textAlign: "right",
  paddingRight: "1em",
  userSelect: "none",
  opacity: "0.5"
});
var LineContent = (0, import_system.styled)("span")({
  display: "table-cell",
  fontFamily: "'Fira Code', monospace"
});
var CodeBlock = ({ children }) => {
  return /* @__PURE__ */ React.createElement(import_prism_react_renderer.default, __spreadProps(__spreadValues({}, import_prism_react_renderer.defaultProps), {
    code: children,
    language: "jsx",
    theme: import_dracula.default
  }), ({ className, style, tokens, getLineProps, getTokenProps }) => /* @__PURE__ */ React.createElement(import_material8.Paper, {
    className,
    sx: __spreadProps(__spreadValues({}, style), {
      padding: 2,
      margin: 2,
      bgcolor: "background.paper"
    })
  }, tokens.map((line, i) => /* @__PURE__ */ React.createElement(Line, __spreadValues({
    key: i
  }, getLineProps({ line, key: i })), /* @__PURE__ */ React.createElement(LineNo, null, i + 1), /* @__PURE__ */ React.createElement(LineContent, null, line.map((token, key) => {
    const _a = getTokenProps({ token, key }), { children: children2 } = _a, props = __objRest(_a, ["children"]);
    const sanitizedChildren = children2.replace(/\s/g, "&nbsp;");
    return /* @__PURE__ */ React.createElement("span", __spreadProps(__spreadValues({
      key
    }, props), {
      dangerouslySetInnerHTML: {
        __html: sanitizedChildren
      }
    }));
  }))))));
};

// route:/root/projects/andreation/app/routes/blog/$blogPostId.tsx
var import_Edit = __toESM(require("@mui/icons-material/Edit"));

// app/utils/mdx.server.ts
init_react();
var import_mdx_bundler = require("mdx-bundler");
async function getMdx(source) {
  const result = await (0, import_mdx_bundler.bundleMDX)({
    source
  });
  return result;
}

// route:/root/projects/andreation/app/routes/blog/$blogPostId.tsx
var loader6 = async ({
  request,
  params
}) => {
  const userId = await getUserId(request);
  let isAuthor = false;
  if (userId) {
    const appUser = await getAppUser(userId);
    if (appUser == null ? void 0 : appUser.permissions.includes("author")) {
      isAuthor = true;
    }
  }
  (0, import_tiny_invariant4.default)(params.blogPostId, "expected params.slug");
  const blogPost = await getBlogPost(params.blogPostId);
  (0, import_tiny_invariant4.default)(blogPost, "expected blogPost");
  const { code, frontmatter } = await getMdx(blogPost.markdown);
  return __spreadProps(__spreadValues({}, blogPost), { code, isAuthor });
};
var H1 = (props) => /* @__PURE__ */ React.createElement(import_material9.Typography, __spreadValues({
  variant: "h1",
  color: "primary",
  sx: { marginBottom: 3 }
}, props));
var H2 = (props) => /* @__PURE__ */ React.createElement(import_material9.Typography, __spreadValues({
  variant: "h2",
  color: "secondary",
  sx: { marginBottom: 3 }
}, props));
var H3 = (props) => /* @__PURE__ */ React.createElement(import_material9.Typography, __spreadValues({
  variant: "h3",
  color: "secondary",
  sx: { marginBottom: 3 }
}, props));
var H4 = (props) => /* @__PURE__ */ React.createElement(import_material9.Typography, __spreadValues({
  variant: "h4",
  color: "secondary",
  sx: { marginBottom: 3 }
}, props));
var H5 = (props) => /* @__PURE__ */ React.createElement(import_material9.Typography, __spreadValues({
  variant: "h5",
  sx: { marginBottom: 3 }
}, props));
var H6 = (props) => /* @__PURE__ */ React.createElement(import_material9.Typography, __spreadValues({
  variant: "h6",
  sx: { marginBottom: 3 }
}, props));
var P = (props) => /* @__PURE__ */ React.createElement(import_material9.Typography, __spreadValues({
  variant: "body",
  component: "p"
}, props));
var Blockquote = (props) => /* @__PURE__ */ React.createElement(import_material9.Typography, __spreadValues({
  variant: "h6",
  component: import_material9.Paper,
  sx: {
    padding: 2,
    margin: 2,
    borderLeft: ({ palette }) => `2px solid${palette.primary.main}`
  }
}, props));
var Pre = (props) => /* @__PURE__ */ React.createElement("div", __spreadValues({}, props));
var Code = (props) => /* @__PURE__ */ React.createElement(CodeBlock, __spreadValues({}, props));
var A = (props) => /* @__PURE__ */ React.createElement(import_material9.Link, __spreadValues({}, props));
function PostSlug() {
  const { isAuthor, code, imageUrl, imageAlt } = (0, import_remix15.useLoaderData)();
  const Component = (0, import_react10.useMemo)(() => (0, import_client.getMDXComponent)(code), [code]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_material9.Box, {
    component: import_material9.Paper,
    sx: {
      margin: "178px auto 0px",
      maxWidth: "900px",
      position: "relative",
      padding: 3,
      bgcolor: "background.default",
      minHeight: "100vh",
      borderRadius: "4px"
    }
  }, /* @__PURE__ */ React.createElement(import_material9.Box, {
    component: import_material9.Paper,
    sx: {
      background: `url(${imageUrl}) no-repeat center center`,
      height: "320px",
      width: "100%"
    }
  }), isAuthor ? /* @__PURE__ */ React.createElement(import_material9.Fab, {
    color: "secondary",
    "aria-label": "edit",
    component: import_remix15.Link,
    to: "edit",
    sx: { position: "absolute", top: 20, right: 20 }
  }, /* @__PURE__ */ React.createElement(import_Edit.default, null)) : null, Component ? /* @__PURE__ */ React.createElement(Component, {
    components: {
      h1: H1,
      h2: H2,
      h3: H3,
      h4: H4,
      h5: H5,
      h6: H6,
      p: P,
      blockquote: Blockquote,
      pre: Pre,
      code: Code,
      a: A
    }
  }) : null));
}

// route:/root/projects/andreation/app/routes/sign.$authType.tsx
var sign_authType_exports = {};
__export(sign_authType_exports, {
  AUTH_TYPES: () => AUTH_TYPES,
  default: () => Login,
  loader: () => loader7,
  meta: () => meta
});
init_react();
var import_Stack2 = __toESM(require("@mui/material/Stack"));
var import_Paper2 = __toESM(require("@mui/material/Paper"));
var import_Button3 = __toESM(require("@mui/material/Button"));
var import_TextField2 = __toESM(require("@mui/material/TextField"));
var import_ToggleButton = __toESM(require("@mui/material/ToggleButton"));
var import_ToggleButtonGroup = __toESM(require("@mui/material/ToggleButtonGroup"));
var import_remix16 = __toESM(require_remix());
var import_react11 = require("react");
var import_material10 = require("@mui/material");
var meta = () => {
  return {
    title: "Floor Plan | Sign In",
    description: "Sign in to start your own code journey!"
  };
};
var AUTH_TYPES = {
  SIGN_IN: "Sign In",
  SIGN_UP: "Sign Up"
};
var loader7 = async ({ request, params }) => {
  const data = {
    authType: params.authType === "in" ? AUTH_TYPES.SIGN_IN : AUTH_TYPES.SIGN_UP
  };
  return data;
};
function validateEmail(email) {
  if (typeof email !== "string" || email.match(/.+@.+\..+/) === null) {
    return `Emails must look like example@example.com`;
  }
}
function validatePassword(password) {
  if (typeof password !== "string" || password.length <= 6) {
    return `Passwords must be at least 6 characters long`;
  }
}
function Login() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const { authType: initAuthType } = (0, import_remix16.useLoaderData)();
  const [actionData, setActionData] = (0, import_react11.useState)({});
  const [authType, setAuthType] = (0, import_react11.useState)(initAuthType);
  const handleAuthType = (event, newAuthType) => {
    if (!newAuthType)
      return;
    setAuthType(newAuthType);
  };
  (0, import_react11.useEffect)(() => {
    if (initAuthType !== authType) {
      setAuthType(initAuthType);
    }
  }, [initAuthType]);
  async function handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    const form = new FormData(target);
    const authType2 = form.get("authType");
    const email = form.get("email");
    const password = form.get("password");
    if (typeof authType2 !== "string" || typeof email !== "string" || typeof password !== "string") {
      return setActionData({
        formError: `Form not submitted correctly.`
      });
    }
    const fields = { authType: authType2, email, password };
    const fieldErrors = {
      email: validateEmail(email),
      password: validatePassword(password)
    };
    if (Object.values(fieldErrors).some(Boolean))
      return setActionData({ fieldErrors, fields });
    switch (authType2) {
      case AUTH_TYPES.SIGN_IN: {
        try {
          const user = await emailAndPasswordSignIn({ email, password });
          if (!user || !user.email) {
            return setActionData({
              fields,
              formError: `Email/Password combination is incorrect`
            });
          }
          return;
        } catch (error) {
          return setActionData({
            fields,
            formError: `Email/Password combination is incorrect`
          });
        }
      }
      case AUTH_TYPES.SIGN_UP: {
        try {
          const user = await emailAndPasswordSignUp({ email, password });
          return;
        } catch (error) {
          return setActionData({
            fields,
            formError: `Something went wrong trying to create a new user.`
          });
        }
      }
      default: {
        return setActionData({
          fields,
          formError: `Login type invalid`
        });
      }
    }
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_Stack2.default, {
    sx: {
      maxWidth: "500px",
      margin: "200px auto"
    }
  }, /* @__PURE__ */ React.createElement(AppPaper, null, /* @__PURE__ */ React.createElement(import_material10.Typography, {
    variant: "h1",
    textAlign: "center"
  }, authType), /* @__PURE__ */ React.createElement(import_remix16.Form, {
    method: "post",
    onSubmit: handleSubmit,
    "aria-describedby": (actionData == null ? void 0 : actionData.formError) ? "form-error-message" : void 0
  }, /* @__PURE__ */ React.createElement(import_Stack2.default, {
    component: import_Paper2.default,
    spacing: 2
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "authType",
    value: authType
  }), /* @__PURE__ */ React.createElement(import_ToggleButtonGroup.default, {
    value: authType,
    exclusive: true,
    onChange: handleAuthType,
    "aria-label": "Sign In or Sign Up",
    color: "secondary",
    fullWidth: true
  }, /* @__PURE__ */ React.createElement(import_ToggleButton.default, {
    value: AUTH_TYPES.SIGN_IN,
    "aria-label": AUTH_TYPES.SIGN_IN,
    color: "primary"
  }, "Sign In"), /* @__PURE__ */ React.createElement(import_ToggleButton.default, {
    value: AUTH_TYPES.SIGN_UP,
    "aria-label": AUTH_TYPES.SIGN_UP
  }, "Sign Up")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_TextField2.default, {
    label: "Email",
    variant: "filled",
    fullWidth: true,
    color: authType === AUTH_TYPES.SIGN_IN ? "primary" : "secondary",
    id: "email-input",
    name: "email",
    defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.email,
    "aria-invalid": Boolean((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.email),
    "aria-describedby": ((_c = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c.email) ? "email-error" : void 0
  }), ((_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.email) ? /* @__PURE__ */ React.createElement(import_material10.Typography, {
    color: "error",
    variant: "caption",
    role: "alert",
    id: "email-error"
  }, actionData == null ? void 0 : actionData.fieldErrors.email) : null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_TextField2.default, {
    label: "Password",
    variant: "filled",
    fullWidth: true,
    color: authType === AUTH_TYPES.SIGN_IN ? "primary" : "secondary",
    id: "password-input",
    name: "password",
    defaultValue: (_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.password,
    type: "password",
    "aria-invalid": Boolean((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.password) || void 0,
    "aria-describedby": ((_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.password) ? "password-error" : void 0
  }), ((_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.password) ? /* @__PURE__ */ React.createElement(import_material10.Typography, {
    color: "error",
    variant: "caption",
    role: "alert",
    id: "password-error"
  }, actionData == null ? void 0 : actionData.fieldErrors.password) : null), /* @__PURE__ */ React.createElement("div", {
    id: "form-error-message"
  }, (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ React.createElement(import_material10.Typography, {
    color: "error",
    variant: "caption",
    role: "alert",
    id: "form-error"
  }, actionData == null ? void 0 : actionData.formError) : null), /* @__PURE__ */ React.createElement(import_Button3.default, {
    type: "submit",
    variant: "contained",
    size: "large",
    color: AUTH_TYPES.SIGN_IN === authType ? "primary" : "secondary"
  }, authType))))));
}

// route:/root/projects/andreation/app/routes/update-session.tsx
var update_session_exports = {};
__export(update_session_exports, {
  action: () => action4
});
init_react();
var action4 = async ({ request, params }) => {
  switch (request.method) {
    case "POST":
      const form = await request.formData();
      const redirectTo = form.get("redirectTo");
      const userToken = form.get("userToken");
      if (!userToken) {
        throw new Response("Could not update session. Please try again.", {
          status: 404
        });
      }
      return await createUserSession(userToken, redirectTo);
    default:
      console.log("REQUEST NOT HANDLED");
  }
};

// route:/root/projects/andreation/app/routes/blog/index.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog2,
  loader: () => loader8
});
init_react();
var import_material12 = require("@mui/material");
var import_remix18 = __toESM(require_remix());

// app/components/BlogCard.tsx
init_react();
var import_Card = __toESM(require("@mui/material/Card"));
var import_CardContent = __toESM(require("@mui/material/CardContent"));
var import_CardMedia = __toESM(require("@mui/material/CardMedia"));
var import_Typography2 = __toESM(require("@mui/material/Typography"));
var import_material11 = require("@mui/material");
var import_remix17 = __toESM(require_remix());
function BlogCard({
  title,
  description,
  url,
  imageUrl,
  imageAlt
}) {
  return /* @__PURE__ */ React.createElement(AppPaper, {
    sx: { padding: 0 }
  }, /* @__PURE__ */ React.createElement(import_Card.default, {
    sx: { borderRadius: "10px", overflow: "hidden" }
  }, /* @__PURE__ */ React.createElement(import_material11.CardActionArea, {
    component: import_remix17.Link,
    to: url
  }, /* @__PURE__ */ React.createElement(import_CardMedia.default, {
    component: "img",
    height: "140",
    image: imageUrl,
    alt: imageAlt
  }), /* @__PURE__ */ React.createElement(import_CardContent.default, null, /* @__PURE__ */ React.createElement(import_Typography2.default, {
    gutterBottom: true,
    variant: "h5",
    component: "div"
  }, title), /* @__PURE__ */ React.createElement(import_Typography2.default, {
    variant: "body2",
    color: "text.secondary"
  }, description)))));
}

// route:/root/projects/andreation/app/routes/blog/index.tsx
var loader8 = async ({
  request,
  params
}) => {
  const userId = await getUserId(request);
  let isAuthor = false;
  if (userId) {
    const appUser = await getAppUser(userId);
    if (appUser == null ? void 0 : appUser.permissions.includes("author")) {
      isAuthor = true;
    }
  }
  const posts = await getAllBlogPosts();
  return { posts, isAuthor };
};
function Blog2() {
  const { posts, isAuthor } = (0, import_remix18.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_material12.Stack, {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    sx: {
      maxWidth: "1200px",
      margin: "0 auto",
      width: "80%"
    }
  }, /* @__PURE__ */ React.createElement(import_material12.Typography, {
    variant: "h1",
    textAlign: "center"
  }, "Blog"), isAuthor ? /* @__PURE__ */ React.createElement(import_material12.Button, {
    component: import_remix18.Link,
    to: "/blog/new"
  }, "Add Blog Post") : null), /* @__PURE__ */ React.createElement(import_material12.Stack, {
    direction: { xs: "column", md: "row" },
    sx: {
      flexWrap: "wrap",
      maxWidth: "1200px",
      margin: "0 auto",
      width: "80%"
    },
    justifyContent: "space-around"
  }, posts.map((post) => /* @__PURE__ */ React.createElement(import_material12.Box, {
    key: post.id,
    sx: {
      flex: { xs: "0 0 80%", md: "0 0 40%", lg: "0 0 30%" },
      margin: 2
    }
  }, /* @__PURE__ */ React.createElement(BlogCard, {
    title: post.title,
    description: post.description,
    imageUrl: post.imageUrl,
    imageAlt: post.imageAlt,
    url: `/blog/${post.slug}`
  })))));
}

// route:/root/projects/andreation/app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  action: () => action5,
  default: () => DashBoard,
  loader: () => loader9
});
init_react();
var import_remix20 = __toESM(require_remix());
var import_Button4 = __toESM(require("@mui/material/Button"));
var import_Box3 = __toESM(require("@mui/material/Box"));
var import_Stack3 = __toESM(require("@mui/material/Stack"));
var import_Paper3 = __toESM(require("@mui/material/Paper"));

// app/db/dataPoints.server.ts
init_react();
var DATA_POINTS_COLLECTION = "dataPoints";
var getCollectionRef4 = () => (0, import_firestore2.getFirestore)().collection(DATA_POINTS_COLLECTION);
var getDocReference4 = (dataPointId) => getCollectionRef4().doc(dataPointId);
var getQuery3 = (userId) => getCollectionRef4().where("userId", "==", userId);
async function getAllDataPoints(userId) {
  const queryRef = getQuery3(userId);
  const querySnapshot = await queryRef.get();
  return querySnapshot.docs.map((doc) => __spreadValues({ id: doc.id }, doc.data()));
}
async function getDataPoint(dataPointId) {
  const docRef = getDocReference4(dataPointId);
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    return (docSnap == null ? void 0 : docSnap.data()) || null;
  } else {
    console.log("No such document!");
    return null;
  }
}
async function addDataPoint(dataPoint) {
  try {
    const docRef = await getCollectionRef4().add(dataPoint);
    const newDataPoint = await getDataPoint(docRef.id);
    if (!newDataPoint) {
      throw new Error("Failed to get new data point");
    }
    return newDataPoint;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}

// route:/root/projects/andreation/app/routes/dashboard.tsx
var import_dataPoints2 = __toESM(require_dataPoints());
var import_material13 = require("@mui/material");
var import_react13 = require("react");

// app/hooks/useFirebaseLoaderData.ts
init_react();
var import_react12 = require("react");
var import_remix19 = __toESM(require_remix());
function useFirebaseLoaderData(clientUpdater) {
  const loaderData = (0, import_remix19.useLoaderData)();
  const [data, setData] = (0, import_react12.useState)(loaderData);
  function updater(data2) {
    setData(data2);
  }
  (0, import_react12.useEffect)(() => clientUpdater(updater), [loaderData]);
  return data;
}

// route:/root/projects/andreation/app/routes/dashboard.tsx
var loader9 = async ({ request, params }) => {
  const userId = await requireUserId(request);
  const data = {
    dataPoints: await getAllDataPoints(userId)
  };
  return data;
};
var action5 = async ({ request, params }) => {
  const userId = await requireUserId(request);
  const form = await request.formData();
  const point = Number(form.get("point"));
  const timestamp = Number(form.get("timestamp"));
  if (!point || !timestamp) {
    throw new Response("Could not add this data point. Please try again.", {
      status: 404
    });
  }
  return await addDataPoint({
    userId,
    point,
    timestamp
  });
};
function DashBoard() {
  const user = (0, import_react13.useContext)(AuthContext);
  const userId = user == null ? void 0 : user.uid;
  const { dataPoints } = useFirebaseLoaderData((updater) => (0, import_dataPoints2.getAllDataPointsLive)(userId, (dataPoints2) => updater({ dataPoints: dataPoints2 })));
  return /* @__PURE__ */ React.createElement(import_Stack3.default, {
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_Stack3.default, {
    component: import_Paper3.default,
    elevation: 3,
    direction: "row",
    sx: { height: "120px", padding: "12px", margin: "12px", width: "80%" },
    justifyContent: "space-around",
    alignItems: "flex-end"
  }, dataPoints.length ? dataPoints.sort((a, b) => a.timestamp - b.timestamp).map(({ point }, i) => /* @__PURE__ */ React.createElement(import_Box3.default, {
    component: import_Paper3.default,
    key: i,
    sx: {
      height: `${point * 10}px`,
      bgcolor: "primary.main",
      width: `calc(100% / ${dataPoints.length} - 10px)`,
      minWidth: "5px"
    }
  })) : /* @__PURE__ */ React.createElement(import_material13.Typography, {
    variant: "h3"
  }, "Add some data!")), /* @__PURE__ */ React.createElement(import_Box3.default, null, /* @__PURE__ */ React.createElement(import_remix20.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "point",
    value: Math.floor(Math.random() * 10) + 1
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "timestamp",
    value: Date.now()
  }), /* @__PURE__ */ React.createElement(import_Button4.default, {
    type: "submit",
    variant: "contained"
  }, "add data"))));
}

// route:/root/projects/andreation/app/routes/blog/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action6,
  default: () => NewPost2,
  loader: () => loader10
});
init_react();
var import_remix21 = __toESM(require_remix());
var import_tiny_invariant5 = __toESM(require("tiny-invariant"));
var import_react14 = require("react");
var loader10 = async ({
  request,
  params
}) => {
  const userId = await requireUserId(request);
  const appUser = await getAppUser(userId);
  if (!(appUser == null ? void 0 : appUser.permissions.includes("author"))) {
    return (0, import_remix21.redirect)("/blog");
  }
  const data = {
    authorId: userId
  };
  return data;
};
var action6 = async ({ request }) => {
  var _a;
  const formData = await request.formData();
  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");
  const description = formData.get("description");
  const authorId = formData.get("authorId");
  const imageUrl = formData.get("imageUrl");
  const imageAlt = formData.get("imageAlt");
  const tags = ((_a = String(formData.get("tags"))) == null ? void 0 : _a.split(",")) || [];
  const isPublished = formData.get("isPublished") === "true";
  const publishDate = parseInt(formData.get("publishDate") || "0", 10);
  const errors = {};
  if (!title)
    errors.title = true;
  if (!slug)
    errors.slug = true;
  if (!markdown)
    errors.markdown = true;
  if (!description)
    errors.description = true;
  if (!imageUrl)
    errors.imageUrl = true;
  if (!imageAlt)
    errors.imageAlt = true;
  if (!tags)
    errors.tags = true;
  if (Object.keys(errors).length) {
    return errors;
  }
  (0, import_tiny_invariant5.default)(typeof title === "string");
  (0, import_tiny_invariant5.default)(typeof slug === "string");
  (0, import_tiny_invariant5.default)(typeof markdown === "string");
  (0, import_tiny_invariant5.default)(typeof description === "string");
  (0, import_tiny_invariant5.default)(typeof authorId === "string");
  (0, import_tiny_invariant5.default)(typeof imageUrl === "string");
  (0, import_tiny_invariant5.default)(typeof imageAlt === "string");
  (0, import_tiny_invariant5.default)(typeof tags === "object");
  (0, import_tiny_invariant5.default)(typeof isPublished === "boolean");
  (0, import_tiny_invariant5.default)(typeof publishDate === "number");
  await addBlogPost({
    authorId,
    title,
    slug,
    markdown,
    isPublished,
    publishDate,
    description,
    imageUrl,
    imageAlt,
    tags
  });
  return (0, import_remix21.redirect)("/blog");
};
function NewPost2() {
  const [date, setDate] = (0, import_react14.useState)(new Date());
  const [markdown, setMarkdown] = (0, import_react14.useState)("");
  const [isPublished, setIsPublished] = (0, import_react14.useState)(true);
  const { authorId } = (0, import_remix21.useLoaderData)();
  const errors = (0, import_remix21.useActionData)();
  function handleEditorChange(value) {
    setMarkdown(value);
  }
  return /* @__PURE__ */ React.createElement(EditPost, {
    errors,
    authorId,
    isPublished,
    setIsPublished,
    date,
    setDate,
    markdown,
    handleEditorChange
  });
}

// mdx:/root/projects/andreation/app/routes/blog/a.mdx
var a_exports = {};
__export(a_exports, {
  attributes: () => attributes,
  default: () => a_default,
  filename: () => filename,
  headers: () => headers,
  links: () => links2,
  meta: () => meta2
});
init_react();
var import_react15 = __toESM(require("react"));
var attributes = {
  "meta": "test a",
  "title": "test a",
  "description": "test a"
};
function MDXContent(props = {}) {
  const _components = Object.assign({
    h1: "h1"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, /* @__PURE__ */ import_react15.default.createElement(_components.h1, null, "What A!"));
  return MDXLayout ? /* @__PURE__ */ import_react15.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var a_default = MDXContent;
var filename = "a.mdx";
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta2 = typeof attributes !== "undefined" && attributes.meta;
var links2 = void 0;

// mdx:/root/projects/andreation/app/routes/blog/b.mdx
var b_exports = {};
__export(b_exports, {
  attributes: () => attributes2,
  default: () => b_default,
  filename: () => filename2,
  headers: () => headers2,
  links: () => links3,
  meta: () => meta3
});
init_react();
var import_react16 = __toESM(require("react"));
var attributes2 = {
  "meta": "test b",
  "title": "test b",
  "description": "test b"
};
function MDXContent2(props = {}) {
  const _components = Object.assign({
    h1: "h1"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react16.default.createElement(import_react16.default.Fragment, null, /* @__PURE__ */ import_react16.default.createElement(_components.h1, null, "What B!"));
  return MDXLayout ? /* @__PURE__ */ import_react16.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var b_default = MDXContent2;
var filename2 = "b.mdx";
var headers2 = typeof attributes2 !== "undefined" && attributes2.headers;
var meta3 = typeof attributes2 !== "undefined" && attributes2.meta;
var links3 = void 0;

// mdx:/root/projects/andreation/app/routes/blog/c.mdx
var c_exports = {};
__export(c_exports, {
  attributes: () => attributes3,
  default: () => c_default,
  filename: () => filename3,
  headers: () => headers3,
  links: () => links4,
  meta: () => meta4
});
init_react();
var import_react17 = __toESM(require("react"));
var attributes3 = {
  "meta": "test c",
  "title": "test c",
  "description": "test c"
};
function MDXContent3(props = {}) {
  const _components = Object.assign({
    h1: "h1"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, /* @__PURE__ */ import_react17.default.createElement(_components.h1, null, "What C!"));
  return MDXLayout ? /* @__PURE__ */ import_react17.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var c_default = MDXContent3;
var filename3 = "c.mdx";
var headers3 = typeof attributes3 !== "undefined" && attributes3.headers;
var meta4 = typeof attributes3 !== "undefined" && attributes3.meta;
var links4 = void 0;

// route:/root/projects/andreation/app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action7,
  loader: () => loader11
});
init_react();
var import_remix22 = __toESM(require_remix());
var action7 = async ({ request }) => {
  return logout(request);
};
var loader11 = async () => {
  return (0, import_remix22.redirect)("/");
};

// route:/root/projects/andreation/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  meta: () => meta5
});
init_react();
var import_material14 = require("@mui/material");
var import_remix23 = __toESM(require_remix());
var meta5 = () => {
  return {
    title: "Floor Plan: Copy/Pasta/Twerk",
    description: "Codes Sagas a place to learn a million and one ways to code."
  };
};
function Index() {
  return /* @__PURE__ */ React.createElement(import_material14.Stack, {
    sx: {
      maxWidth: "700px",
      margin: "80px auto",
      width: "80%"
    }
  }, /* @__PURE__ */ React.createElement(AppPaper, null, /* @__PURE__ */ React.createElement(import_material14.Typography, {
    variant: "h3"
  }, "floor plan"), /* @__PURE__ */ React.createElement(import_material14.Typography, {
    variant: "h4"
  }, "/\u02C8fl\xF4(\u0259)r \u02CCplan/"), /* @__PURE__ */ React.createElement(import_material14.Typography, {
    variant: "h6"
  }, "noun "), /* @__PURE__ */ React.createElement(import_material14.Typography, {
    variant: "h4"
  }, "A place to share and discover app stacks so that you can start bringing your ideas to life."), /* @__PURE__ */ React.createElement(import_material14.Stack, {
    direction: { xs: "column", md: "row" },
    spacing: 2,
    justifyContent: "center"
  }, /* @__PURE__ */ React.createElement(import_material14.Button, {
    variant: "outlined",
    color: "primary",
    size: "large",
    component: import_remix23.Link,
    to: "/floor-plans/create"
  }, "Create a floor plan"), /* @__PURE__ */ React.createElement(import_material14.Button, {
    variant: "contained",
    color: "primary",
    size: "large",
    component: import_remix23.Link,
    to: "/floor-plans/"
  }, "Search floor plans"))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "5cc6f6f0", "entry": { "module": "/build/entry.client-AU7WEF7E.js", "imports": ["/build/_shared/chunk-LLF7XETT.js", "/build/_shared/chunk-A5HKWQJE.js", "/build/_shared/chunk-MKR6GTDX.js", "/build/_shared/chunk-5HASPQVD.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-IDKNSLHG.js", "imports": ["/build/_shared/chunk-R5XRPBIJ.js", "/build/_shared/chunk-QKYJV5QJ.js", "/build/_shared/chunk-OB77UXMN.js", "/build/_shared/chunk-ZMN742BG.js", "/build/_shared/chunk-6TY2GM2B.js", "/build/_shared/chunk-TCBR65ER.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/blog/$blogPostId": { "id": "routes/blog/$blogPostId", "parentId": "root", "path": "blog/:blogPostId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$blogPostId-GIO7EMBU.js", "imports": ["/build/_shared/chunk-5TFZNGDG.js", "/build/_shared/chunk-PEKYXKPJ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/$blogPostId.edit": { "id": "routes/blog/$blogPostId.edit", "parentId": "root", "path": "blog/:blogPostId/edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$blogPostId.edit-6JF5OAYI.js", "imports": ["/build/_shared/chunk-YUGK6MDI.js", "/build/_shared/chunk-5TFZNGDG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/a": { "id": "routes/blog/a", "parentId": "root", "path": "blog/a", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/a-FPVNYWSL.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/b": { "id": "routes/blog/b", "parentId": "root", "path": "blog/b", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/b-CZ2VPFPO.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/c": { "id": "routes/blog/c", "parentId": "root", "path": "blog/c", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/c-4AS4APBH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "root", "path": "blog", "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-EB5IKYN3.js", "imports": ["/build/_shared/chunk-5TFZNGDG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/new": { "id": "routes/blog/new", "parentId": "root", "path": "blog/new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/new-CBFYHVXG.js", "imports": ["/build/_shared/chunk-YUGK6MDI.js", "/build/_shared/chunk-5TFZNGDG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-6F4X5GCZ.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/floor-plans/$floorPlanId.edit": { "id": "routes/floor-plans/$floorPlanId.edit", "parentId": "root", "path": "floor-plans/:floorPlanId/edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/floor-plans/$floorPlanId.edit-VWLVXGVL.js", "imports": ["/build/_shared/chunk-KZIARDLH.js", "/build/_shared/chunk-IP3WXQ4D.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/floor-plans/create": { "id": "routes/floor-plans/create", "parentId": "root", "path": "floor-plans/create", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/floor-plans/create-EO6LAR4S.js", "imports": ["/build/_shared/chunk-KZIARDLH.js", "/build/_shared/chunk-IP3WXQ4D.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/floor-plans/index": { "id": "routes/floor-plans/index", "parentId": "root", "path": "floor-plans", "index": true, "caseSensitive": void 0, "module": "/build/routes/floor-plans/index-VYDNIL33.js", "imports": ["/build/_shared/chunk-IP3WXQ4D.js", "/build/_shared/chunk-PEKYXKPJ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-2YOYMDV6.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-BZPDPOCT.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/sign.$authType": { "id": "routes/sign.$authType", "parentId": "root", "path": "sign/:authType", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/sign.$authType-HJD2UBRK.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/update-session": { "id": "routes/update-session", "parentId": "root", "path": "update-session", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/update-session-TBY6MTDX.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-5CC6F6F0.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/floor-plans/$floorPlanId.edit": {
    id: "routes/floor-plans/$floorPlanId.edit",
    parentId: "root",
    path: "floor-plans/:floorPlanId/edit",
    index: void 0,
    caseSensitive: void 0,
    module: floorPlanId_edit_exports
  },
  "routes/blog/$blogPostId.edit": {
    id: "routes/blog/$blogPostId.edit",
    parentId: "root",
    path: "blog/:blogPostId/edit",
    index: void 0,
    caseSensitive: void 0,
    module: blogPostId_edit_exports
  },
  "routes/floor-plans/create": {
    id: "routes/floor-plans/create",
    parentId: "root",
    path: "floor-plans/create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports
  },
  "routes/floor-plans/index": {
    id: "routes/floor-plans/index",
    parentId: "root",
    path: "floor-plans",
    index: true,
    caseSensitive: void 0,
    module: floor_plans_exports
  },
  "routes/blog/$blogPostId": {
    id: "routes/blog/$blogPostId",
    parentId: "root",
    path: "blog/:blogPostId",
    index: void 0,
    caseSensitive: void 0,
    module: blogPostId_exports
  },
  "routes/sign.$authType": {
    id: "routes/sign.$authType",
    parentId: "root",
    path: "sign/:authType",
    index: void 0,
    caseSensitive: void 0,
    module: sign_authType_exports
  },
  "routes/update-session": {
    id: "routes/update-session",
    parentId: "root",
    path: "update-session",
    index: void 0,
    caseSensitive: void 0,
    module: update_session_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "root",
    path: "blog",
    index: true,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/blog/new": {
    id: "routes/blog/new",
    parentId: "root",
    path: "blog/new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/blog/a": {
    id: "routes/blog/a",
    parentId: "root",
    path: "blog/a",
    index: void 0,
    caseSensitive: void 0,
    module: a_exports
  },
  "routes/blog/b": {
    id: "routes/blog/b",
    parentId: "root",
    path: "blog/b",
    index: void 0,
    caseSensitive: void 0,
    module: b_exports
  },
  "routes/blog/c": {
    id: "routes/blog/c",
    parentId: "root",
    path: "blog/c",
    index: void 0,
    caseSensitive: void 0,
    module: c_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString;
  let netlifyGraphToken;
  if (event.authlifyToken != null) {
    netlifyGraphToken = event.authlifyToken;
  }
  const authHeader = event.headers["authorization"];
  const graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  if (authHeader != null && /Bearer /gi.test(authHeader)) {
    rawAuthorizationString = authHeader.split(" ")[1];
  }
  const loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  Object.keys(loadContext).forEach((key) => {
    if (loadContext[key] == null) {
      delete loadContext[key];
    }
  });
  return loadContext;
}
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "development"
});
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICJlbXB0eS1tb2R1bGU6fi9kYi9hcHBVc2Vycy9hcHBVc2Vycy5jbGllbnQiLCAiZW1wdHktbW9kdWxlOn4vZGIvZGF0YVBvaW50cy5jbGllbnQiLCAiLi4vLi4vLi4vc2VydmVyLmpzIiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uLy4uLy4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgIi4uLy4uLy4uL2FwcC91dGlscy9jcmVhdGVFbW90aW9uQ2FjaGUudHMiLCAiLi4vLi4vLi4vYXBwL3RoZW1lL2luZGV4LnRzIiwgIi4uLy4uLy4uL2FwcC90aGVtZS9jb2xvcnMudHMiLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvYW5kcmVhdGlvbi9hcHAvcm9vdC50c3giLCAiLi4vLi4vLi4vYXBwL3N0YXRlL0F1dGhQcm92aWRlci50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvTG9nb3V0Rm9ybS50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQXBwQmFyLnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9BdXRoQ29udHJvbHMudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL1NpZ25PdXRCdXR0b24udHN4IiwgIi4uLy4uLy4uL2FwcC9maXJlYmFzZS9hdXRoLnRzIiwgIi4uLy4uLy4uL2FwcC9maXJlYmFzZS9maXJlYmFzZS50cyIsICIuLi8uLi8uLi9hcHAvdXRpbHMvc2Vzc2lvbi5zZXJ2ZXIudHMiLCAiLi4vLi4vLi4vYXBwL2ZpcmViYXNlL2ZpcmViYXNlQWRtaW4uc2VydmVyLnRzIiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0FwcFBhcGVyLnRzeCIsICIuLi8uLi8uLi9hcHAvdGhlbWUvQ2xpZW50U3R5bGVDb250ZXh0LnRzIiwgInJvdXRlOi9yb290L3Byb2plY3RzL2FuZHJlYXRpb24vYXBwL3JvdXRlcy9mbG9vci1wbGFucy8kZmxvb3JQbGFuSWQuZWRpdC50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvRWRpdEZsb29yUGxhbi50c3giLCAiLi4vLi4vLi4vYXBwL2RiL2Zsb29yUGxhbnMuc2VydmVyLnRzIiwgInJvdXRlOi9yb290L3Byb2plY3RzL2FuZHJlYXRpb24vYXBwL3JvdXRlcy9ibG9nLyRibG9nUG9zdElkLmVkaXQudHN4IiwgIi4uLy4uLy4uL2FwcC9kYi9ibG9nUG9zdHMuc2VydmVyLnRzIiwgIi4uLy4uLy4uL2FwcC9kYi9hcHBVc2Vycy9hcHBVc2Vycy5zZXJ2ZXIudHMiLCAiLi4vLi4vLi4vYXBwL2RiL2FwcFVzZXJzL3R5cGVzLnRzIiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0VkaXRQb3N0LnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9EYXRlVGltZVBpY2tlci50c3giLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvYW5kcmVhdGlvbi9hcHAvcm91dGVzL2Zsb29yLXBsYW5zL2NyZWF0ZS50c3giLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvYW5kcmVhdGlvbi9hcHAvcm91dGVzL2Zsb29yLXBsYW5zL2luZGV4LnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9GbG9vclBsYW5DYXJkLnRzeCIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9hbmRyZWF0aW9uL2FwcC9yb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQ29kZUJsb2NrLnRzeCIsICIuLi8uLi8uLi9hcHAvdXRpbHMvbWR4LnNlcnZlci50cyIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9hbmRyZWF0aW9uL2FwcC9yb3V0ZXMvc2lnbi4kYXV0aFR5cGUudHN4IiwgInJvdXRlOi9yb290L3Byb2plY3RzL2FuZHJlYXRpb24vYXBwL3JvdXRlcy91cGRhdGUtc2Vzc2lvbi50c3giLCAicm91dGU6L3Jvb3QvcHJvamVjdHMvYW5kcmVhdGlvbi9hcHAvcm91dGVzL2Jsb2cvaW5kZXgudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0Jsb2dDYXJkLnRzeCIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9hbmRyZWF0aW9uL2FwcC9yb3V0ZXMvZGFzaGJvYXJkLnRzeCIsICIuLi8uLi8uLi9hcHAvZGIvZGF0YVBvaW50cy5zZXJ2ZXIudHMiLCAiLi4vLi4vLi4vYXBwL2hvb2tzL3VzZUZpcmViYXNlTG9hZGVyRGF0YS50cyIsICJyb3V0ZTovcm9vdC9wcm9qZWN0cy9hbmRyZWF0aW9uL2FwcC9yb3V0ZXMvYmxvZy9uZXcudHN4IiwgIm1keDovcm9vdC9wcm9qZWN0cy9hbmRyZWF0aW9uL2FwcC9yb3V0ZXMvYmxvZy9hLm1keCIsICJtZHg6L3Jvb3QvcHJvamVjdHMvYW5kcmVhdGlvbi9hcHAvcm91dGVzL2Jsb2cvYi5tZHgiLCAibWR4Oi9yb290L3Byb2plY3RzL2FuZHJlYXRpb24vYXBwL3JvdXRlcy9ibG9nL2MubWR4IiwgInJvdXRlOi9yb290L3Byb2plY3RzL2FuZHJlYXRpb24vYXBwL3JvdXRlcy9sb2dvdXQudHN4IiwgInJvdXRlOi9yb290L3Byb2plY3RzL2FuZHJlYXRpb24vYXBwL3JvdXRlcy9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCAibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCAiaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9uZXRsaWZ5XCI7XG5pbXBvcnQgKiBhcyBidWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XG5cbi8qXG4gKiBSZXR1cm5zIGEgY29udGV4dCBvYmplY3Qgd2l0aCBhdCBtb3N0IDMga2V5czpcbiAqICAtIGBuZXRsaWZ5R3JhcGhUb2tlbmA6IHJhdyBhdXRoZW50aWNhdGlvbiB0b2tlbiB0byB1c2Ugd2l0aCBOZXRsaWZ5IEdyYXBoXG4gKiAgLSBgY2xpZW50TmV0bGlmeUdyYXBoQWNjZXNzVG9rZW5gOiBGb3IgdXNlIHdpdGggSldUcyBnZW5lcmF0ZWQgYnlcbiAqICAgIGBuZXRsaWZ5LWdyYXBoLWF1dGhgLlxuICogIC0gYG5ldGxpZnlHcmFwaFNpZ25hdHVyZWA6IGEgc2lnbmF0dXJlIGZvciBzdWJzY3JpcHRpb24gZXZlbnRzLiBXaWxsIGJlXG4gKiAgICBwcmVzZW50IGlmIGEgc2VjcmV0IGlzIHNldC5cbiAqL1xuZnVuY3Rpb24gZ2V0TG9hZENvbnRleHQoZXZlbnQsIGNvbnRleHQpIHtcbiAgbGV0IHJhd0F1dGhvcml6YXRpb25TdHJpbmc7XG4gIGxldCBuZXRsaWZ5R3JhcGhUb2tlbjtcblxuICBpZiAoZXZlbnQuYXV0aGxpZnlUb2tlbiAhPSBudWxsKSB7XG4gICAgbmV0bGlmeUdyYXBoVG9rZW4gPSBldmVudC5hdXRobGlmeVRva2VuO1xuICB9XG5cbiAgY29uc3QgYXV0aEhlYWRlciA9IGV2ZW50LmhlYWRlcnNbXCJhdXRob3JpemF0aW9uXCJdO1xuICBjb25zdCBncmFwaFNpZ25hdHVyZUhlYWRlciA9IGV2ZW50LmhlYWRlcnNbXCJ4LW5ldGxpZnktZ3JhcGgtc2lnbmF0dXJlXCJdO1xuXG4gIGlmIChhdXRoSGVhZGVyICE9IG51bGwgJiYgL0JlYXJlciAvZ2kudGVzdChhdXRoSGVhZGVyKSkge1xuICAgIHJhd0F1dGhvcml6YXRpb25TdHJpbmcgPSBhdXRoSGVhZGVyLnNwbGl0KFwiIFwiKVsxXTtcbiAgfVxuXG4gIGNvbnN0IGxvYWRDb250ZXh0ID0ge1xuICAgIGNsaWVudE5ldGxpZnlHcmFwaEFjY2Vzc1Rva2VuOiByYXdBdXRob3JpemF0aW9uU3RyaW5nLFxuICAgIG5ldGxpZnlHcmFwaFRva2VuOiBuZXRsaWZ5R3JhcGhUb2tlbixcbiAgICBuZXRsaWZ5R3JhcGhTaWduYXR1cmU6IGdyYXBoU2lnbmF0dXJlSGVhZGVyXG4gIH07XG5cbiAgLy8gUmVtb3ZlIGtleXMgd2l0aCB1bmRlZmluZWQgdmFsdWVzXG4gIE9iamVjdC5rZXlzKGxvYWRDb250ZXh0KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKGxvYWRDb250ZXh0W2tleV0gPT0gbnVsbCkge1xuICAgICAgZGVsZXRlIGxvYWRDb250ZXh0W2tleV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbG9hZENvbnRleHQ7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICBidWlsZCxcbiAgZ2V0TG9hZENvbnRleHQsXG4gIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WXG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9hbmRyZWF0aW9uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9yb290L3Byb2plY3RzL2FuZHJlYXRpb24vYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9yb290L3Byb2plY3RzL2FuZHJlYXRpb24vYXBwL3JvdXRlcy9mbG9vci1wbGFucy8kZmxvb3JQbGFuSWQuZWRpdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvYW5kcmVhdGlvbi9hcHAvcm91dGVzL2Jsb2cvJGJsb2dQb3N0SWQuZWRpdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvYW5kcmVhdGlvbi9hcHAvcm91dGVzL2Zsb29yLXBsYW5zL2NyZWF0ZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvYW5kcmVhdGlvbi9hcHAvcm91dGVzL2Zsb29yLXBsYW5zL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvcm9vdC9wcm9qZWN0cy9hbmRyZWF0aW9uL2FwcC9yb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvYW5kcmVhdGlvbi9hcHAvcm91dGVzL3NpZ24uJGF1dGhUeXBlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvcm9vdC9wcm9qZWN0cy9hbmRyZWF0aW9uL2FwcC9yb3V0ZXMvdXBkYXRlLXNlc3Npb24udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9yb290L3Byb2plY3RzL2FuZHJlYXRpb24vYXBwL3JvdXRlcy9ibG9nL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCIvcm9vdC9wcm9qZWN0cy9hbmRyZWF0aW9uL2FwcC9yb3V0ZXMvZGFzaGJvYXJkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvYW5kcmVhdGlvbi9hcHAvcm91dGVzL2Jsb2cvbmV3LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMSBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvYW5kcmVhdGlvbi9hcHAvcm91dGVzL2Jsb2cvYS5tZHhcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIi9yb290L3Byb2plY3RzL2FuZHJlYXRpb24vYXBwL3JvdXRlcy9ibG9nL2IubWR4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEzIGZyb20gXCIvcm9vdC9wcm9qZWN0cy9hbmRyZWF0aW9uL2FwcC9yb3V0ZXMvYmxvZy9jLm1keFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNCBmcm9tIFwiL3Jvb3QvcHJvamVjdHMvYW5kcmVhdGlvbi9hcHAvcm91dGVzL2xvZ291dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTUgZnJvbSBcIi9yb290L3Byb2plY3RzL2FuZHJlYXRpb24vYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2Zsb29yLXBsYW5zLyRmbG9vclBsYW5JZC5lZGl0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9mbG9vci1wbGFucy8kZmxvb3JQbGFuSWQuZWRpdFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJmbG9vci1wbGFucy86Zmxvb3JQbGFuSWQvZWRpdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC5lZGl0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nLyRibG9nUG9zdElkLmVkaXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy86YmxvZ1Bvc3RJZC9lZGl0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9mbG9vci1wbGFucy9jcmVhdGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Zsb29yLXBsYW5zL2NyZWF0ZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJmbG9vci1wbGFucy9jcmVhdGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2Zsb29yLXBsYW5zL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9mbG9vci1wbGFucy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJmbG9vci1wbGFuc1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvJGJsb2dQb3N0SWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2cvJGJsb2dQb3N0SWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy86YmxvZ1Bvc3RJZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvc2lnbi4kYXV0aFR5cGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NpZ24uJGF1dGhUeXBlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNpZ24vOmF1dGhUeXBlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy91cGRhdGUtc2Vzc2lvblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdXBkYXRlLXNlc3Npb25cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwidXBkYXRlLXNlc3Npb25cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2cvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZ1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL2Rhc2hib2FyZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZGFzaGJvYXJkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImRhc2hib2FyZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9uZXdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2cvbmV3XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImJsb2cvbmV3XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9hXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL2FcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy9hXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTExXG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9iXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL2JcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy9iXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEyXG4gICAgfSxcbiAgXCJyb3V0ZXMvYmxvZy9jXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ibG9nL2NcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy9jXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEzXG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9nb3V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9nb3V0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE0XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNVxuICAgIH1cbiAgfTsiLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHsgY3JlYXRlRW1vdGlvbkNhY2hlIH0gZnJvbSBcIn4vdXRpbHMvY3JlYXRlRW1vdGlvbkNhY2hlXCI7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gXCJ+L3RoZW1lXCI7XG5cbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZVwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xuaW1wb3J0IHsgQ2FjaGVQcm92aWRlciB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIgZnJvbSBcIkBlbW90aW9uL3NlcnZlci9jcmVhdGUtaW5zdGFuY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBjYWNoZSA9IGNyZWF0ZUVtb3Rpb25DYWNoZSgpO1xuICBjb25zdCB7IGV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzIH0gPSBjcmVhdGVFbW90aW9uU2VydmVyKGNhY2hlKTtcblxuICBjb25zdCBNdWlSZW1peFNlcnZlciA9ICgpID0+IChcbiAgICA8Q2FjaGVQcm92aWRlciB2YWx1ZT17Y2FjaGV9PlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgey8qIENzc0Jhc2VsaW5lIGtpY2tzdGFydCBhbiBlbGVnYW50LCBjb25zaXN0ZW50LCBhbmQgc2ltcGxlIGJhc2VsaW5lIHRvIGJ1aWxkIHVwb24uICovfVxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L0NhY2hlUHJvdmlkZXI+XG4gICk7XG5cbiAgLy8gUmVuZGVyIHRoZSBjb21wb25lbnQgdG8gYSBzdHJpbmcuXG4gIGNvbnN0IGh0bWwgPSByZW5kZXJUb1N0cmluZyg8TXVpUmVtaXhTZXJ2ZXIgLz4pO1xuXG4gIC8vIEdyYWIgdGhlIENTUyBmcm9tIGVtb3Rpb25cbiAgY29uc3QgeyBzdHlsZXMgfSA9IGV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzKGh0bWwpO1xuXG4gIGxldCBzdHlsZXNIVE1MID0gXCJcIjtcblxuICBzdHlsZXMuZm9yRWFjaCgoeyBrZXksIGlkcywgY3NzIH0pID0+IHtcbiAgICBjb25zdCBlbW90aW9uS2V5ID0gYCR7a2V5fSAke2lkcy5qb2luKFwiIFwiKX1gO1xuICAgIGNvbnN0IG5ld1N0eWxlVGFnID0gYDxzdHlsZSBkYXRhLWVtb3Rpb249XCIke2Vtb3Rpb25LZXl9XCI+JHtjc3N9PC9zdHlsZT5gO1xuICAgIHN0eWxlc0hUTUwgPSBgJHtzdHlsZXNIVE1MfSR7bmV3U3R5bGVUYWd9YDtcbiAgfSk7XG5cbiAgLy8gQWRkIHRoZSBlbW90aW9uIHN0eWxlIHRhZ3MgYWZ0ZXIgdGhlIGluc2VydGlvbiBwb2ludCBtZXRhIHRhZ1xuICBjb25zdCBtYXJrdXAgPSBodG1sLnJlcGxhY2UoXG4gICAgLzxtZXRhKFxccykqbmFtZT1cImVtb3Rpb24taW5zZXJ0aW9uLXBvaW50XCIoXFxzKSpjb250ZW50PVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIihcXHMpKlxcLz4vLFxuICAgIGA8bWV0YSBuYW1lPVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIiBjb250ZW50PVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIi8+JHtzdHlsZXNIVE1MfWBcbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoYDwhRE9DVFlQRSBodG1sPiR7bWFya3VwfWAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbW90aW9uQ2FjaGUoKSB7XG4gIHJldHVybiBjcmVhdGVDYWNoZSh7IGtleTogJ2NzcycgfSk7XG59IiwgImltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IENPTE9SUyB9IGZyb20gXCJ+L3RoZW1lL2NvbG9yc1wiO1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBtb2RlOiBcImRhcmtcIixcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiBDT0xPUlMuUFJJTUFSWSxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogQ09MT1JTLlNFQ09OREFSWSxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBtYWluOiBDT0xPUlMuRVJST1IsXG4gICAgfSxcbiAgICB3YXJuaW5nOiB7XG4gICAgICBtYWluOiBDT0xPUlMuV0FSTklORyxcbiAgICB9LFxuICAgIGluZm86IHtcbiAgICAgIG1haW46IENPTE9SUy5JTkZPLFxuICAgIH0sXG4gICAgc3VjY2Vzczoge1xuICAgICAgbWFpbjogQ09MT1JTLlNVQ0NFU1MsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICBkZWZhdWx0OiBDT0xPUlMuQkFDS0dST1VORC5ERUZBVUxULFxuICAgICAgcGFwZXI6IENPTE9SUy5CQUNLR1JPVU5ELlBBUEVSLFxuICAgIH0sXG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICAvLyBOYW1lIG9mIHRoZSBjb21wb25lbnQgXHUyNjlCXHVGRTBGXG4gICAgTXVpQnV0dG9uQmFzZToge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIC8vIFRoZSBkZWZhdWx0IHByb3BzIHRvIGNoYW5nZVxuICAgICAgICBkaXNhYmxlUmlwcGxlOiB0cnVlLCAvLyBObyBtb3JlIHJpcHBsZSwgb24gdGhlIHdob2xlIGFwcGxpY2F0aW9uIFx1RDgzRFx1RENBMyFcbiAgICAgICAgLy8gdmFyaWFudDogXCJvdXRsaW5lZFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aUJ1dHRvbjoge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIC8vIFRoZSBkZWZhdWx0IHByb3BzIHRvIGNoYW5nZVxuICAgICAgICB2YXJpYW50OiBcIm91dGxpbmVkXCIsXG4gICAgICB9LFxuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7IiwgImV4cG9ydCBjb25zdCBDT0xPUlMgPSB7XG4gIFBSSU1BUlk6IFwiIzY2MzM5OVwiLFxuICBTRUNPTkRBUlk6IFwiI2ZmNjliNFwiLFxuICAvLyBFUlJPUjogXCIjRkYwMDQ3XCIsXG4gIEVSUk9SOiBcIiNmZjJmMDBcIixcbiAgV0FSTklORzogXCIjRkZBNTAwXCIsXG4gIElORk86IFwiIzAwRTdGRlwiLFxuICBTVUNDRVNTOiBcIiMwMEZGN0VcIixcbiAgQkFDS0dST1VORDoge1xuICAgIERFRkFVTFQ6IFwiIzBGMEYxNVwiLFxuICAgIC8vIFBBUEVSOiBcIiMzMDU3RTFcIixcbiAgICBQQVBFUjogXCIjMDcwMzE5XCIsXG4gIH0sXG59O1xuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgT3V0bGV0LFxuICB1c2VDYXRjaCxcbiAgTWV0YSxcbiAgU2NyaXB0cyxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgZ2xvYmFsU3R5bGVzVXJsIGZyb20gXCJ+L3N0eWxlcy9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwifi9zdGF0ZS9BdXRoUHJvdmlkZXJcIjtcbmltcG9ydCB7IEFwcEJhciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvQXBwQmFyXCI7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gXCIuL3RoZW1lXCI7XG5pbXBvcnQgeyBBdXRoVXNlciwgZ2V0QXV0aFVzZXIsIGdldFVzZXJUb2tlbiB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQgeyBBcHBQYXBlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvQXBwUGFwZXJcIjtcbmltcG9ydCB7IHdpdGhFbW90aW9uQ2FjaGUgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCB7XG4gIFN0YWNrLFxuICBUeXBvZ3JhcGh5LFxuICB1bnN0YWJsZV91c2VFbmhhbmNlZEVmZmVjdCBhcyB1c2VFbmhhbmNlZEVmZmVjdCxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDbGllbnRTdHlsZUNvbnRleHQgZnJvbSBcIn4vdGhlbWUvQ2xpZW50U3R5bGVDb250ZXh0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgaHJlZjogXCJodHRwczovL3VucGtnLmNvbS9tb2Rlcm4tY3NzLXJlc2V0QDEuNC4wL2Rpc3QvcmVzZXQubWluLmNzc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgIGhyZWY6IGdsb2JhbFN0eWxlc1VybCxcbiAgICB9LFxuICBdO1xufVxuXG5pbnRlcmZhY2UgRG9jdW1lbnRQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHRpdGxlPzogc3RyaW5nO1xufVxuXG5jb25zdCBEb2N1bWVudCA9IHdpdGhFbW90aW9uQ2FjaGUoXG4gICh7IGNoaWxkcmVuLCB0aXRsZSB9OiBEb2N1bWVudFByb3BzLCBlbW90aW9uQ2FjaGUpID0+IHtcbiAgICBjb25zdCBjbGllbnRTdHlsZURhdGEgPSB1c2VDb250ZXh0KENsaWVudFN0eWxlQ29udGV4dCk7XG5cbiAgICAvLyBPbmx5IGV4ZWN1dGVkIG9uIGNsaWVudFxuICAgIHVzZUVuaGFuY2VkRWZmZWN0KCgpID0+IHtcbiAgICAgIC8vIHJlLWxpbmsgc2hlZXQgY29udGFpbmVyXG4gICAgICBlbW90aW9uQ2FjaGUuc2hlZXQuY29udGFpbmVyID0gZG9jdW1lbnQuaGVhZDtcbiAgICAgIC8vIHJlLWluamVjdCB0YWdzXG4gICAgICBjb25zdCB0YWdzID0gZW1vdGlvbkNhY2hlLnNoZWV0LnRhZ3M7XG4gICAgICBlbW90aW9uQ2FjaGUuc2hlZXQuZmx1c2goKTtcbiAgICAgIHRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgICAgICAoZW1vdGlvbkNhY2hlLnNoZWV0IGFzIGFueSkuX2luc2VydFRhZyh0YWcpO1xuICAgICAgfSk7XG4gICAgICAvLyByZXNldCBjYWNoZSB0byByZWFwcGx5IGdsb2JhbCBzdHlsZXNcbiAgICAgIGNsaWVudFN0eWxlRGF0YS5yZXNldCgpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD17dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59IC8+XG4gICAgICAgICAge3RpdGxlID8gPHRpdGxlPnt0aXRsZX08L3RpdGxlPiA6IG51bGx9XG4gICAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgICA8TGlua3MgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCw3MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK0NvZGU6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIlxuICAgICAgICAgICAgY29udGVudD1cImVtb3Rpb24taW5zZXJ0aW9uLXBvaW50XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2hlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgKTtcbiAgfVxuKTtcblxudHlwZSBMb2FkZXJEYXRhID0geyB1c2VyOiBBdXRoVXNlciB8IG51bGw7IHVzZXJUb2tlbjogc3RyaW5nIHwgbnVsbCB9O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0QXV0aFVzZXIocmVxdWVzdCk7XG4gIGNvbnN0IHVzZXJUb2tlbiA9IGF3YWl0IGdldFVzZXJUb2tlbihyZXF1ZXN0KTtcblxuICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0ge1xuICAgIHVzZXIsXG4gICAgdXNlclRva2VuLFxuICB9O1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmZ1bmN0aW9uIFByb3ZpZGVycyh7XG4gIHVzZXIsXG4gIGNoaWxkcmVuLFxuICB1c2VyVG9rZW4sXG59OiB7XG4gIHVzZXI6IEF1dGhVc2VyIHwgbnVsbDtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgdXNlclRva2VuOiBzdHJpbmcgfCBudWxsO1xufSkge1xuICByZXR1cm4gKFxuICAgIDxBdXRoUHJvdmlkZXIgdXNlcj17dXNlcn0gdXNlclRva2VuPXt1c2VyVG9rZW59PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IHsgdXNlciwgdXNlclRva2VuIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQ+XG4gICAgICA8UHJvdmlkZXJzIHVzZXI9e3VzZXJ9IHVzZXJUb2tlbj17dXNlclRva2VufT5cbiAgICAgICAgPEFwcEJhciAvPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L1Byb3ZpZGVycz5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG5mdW5jdGlvbiBSb290RXJyb3Ioe1xuICBkb2NUaXRsZSA9IFwiT29wcyFcIixcbiAgdGl0bGUgPSBcIlNvbWV0aGluZyB3ZW50IHdyb25nLiBcdUQ4M0RcdURFMjVcIixcbiAgbWVzc2FnZSA9IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQgdGl0bGU9e2RvY1RpdGxlfT5cbiAgICAgICAgPFN0YWNrXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9XG4gICAgICAgICAgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn1cbiAgICAgICAgICBzeD17eyBoZWlnaHQ6IFwiMTAwdmhcIiwgcGFkZGluZzogNSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEFwcFBhcGVyIGxlZnRDb2xvcj1cImVycm9yXCIgcmlnaHRDb2xvcj1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeT57bWVzc2FnZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9BcHBQYXBlcj5cbiAgICAgICAgPC9TdGFjaz5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKTtcbiAgY29uc3QgdGl0bGUgPSBgJHtjYXVnaHQuc3RhdHVzfSAke2NhdWdodC5zdGF0dXNUZXh0fWA7XG4gIHJldHVybiAoXG4gICAgPFJvb3RFcnJvclxuICAgICAgZG9jVGl0bGU9e3RpdGxlfVxuICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgbWVzc2FnZT17XG4gICAgICAgIFwiV2VsbCB0aGlzIGlzIGVtYmFyc2luZy4gXHVEODNEXHVERTA1IEhhdmUgeW91IHRyaWVkIHR1cm5pbmcgaXQgb2ZmIGFuZCBiYWNrIG9uIGFnYWluP1wiXG4gICAgICB9XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG4gIHJldHVybiA8Um9vdEVycm9yIG1lc3NhZ2U9e2Vycm9yLm1lc3NhZ2V9IC8+O1xufVxuIiwgImltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCB1c2VGZXRjaGVyLCB1c2VMb2NhdGlvbiwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBMb2dvdXRGb3JtIH0gZnJvbSBcIn4vY29tcG9uZW50cy9Mb2dvdXRGb3JtXCI7XG5pbXBvcnQgeyBhZGRBcHBVc2VyIH0gZnJvbSBcIn4vZGIvYXBwVXNlcnMvYXBwVXNlcnMuY2xpZW50XCI7XG5pbXBvcnQgdHlwZSB7IEF1dGhVc2VyIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBdXRoVXNlciB8IG51bGw+KG51bGwpO1xuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHtcbiAgY2hpbGRyZW4sXG4gIHVzZXI6IHVzZXJQcm9wLFxuICB1c2VyVG9rZW46IHVzZXJUb2tlblByb3AsXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHVzZXI6IEF1dGhVc2VyIHwgbnVsbDtcbiAgdXNlclRva2VuOiBzdHJpbmcgfCBudWxsO1xufSkge1xuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxBdXRoVXNlciB8IG51bGw+KHVzZXJQcm9wKTtcbiAgY29uc3QgbG9nb3V0Rm9ybVJlZiA9IHVzZVJlZjxIVE1MRm9ybUVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBbdXNlclRva2VuLCBzZXRVc2VyVG9rZW5dID0gdXNlU3RhdGU8c3RyaW5nPih1c2VyVG9rZW5Qcm9wIHx8IFwiXCIpO1xuICBjb25zdCB1c2VyVG9rZW5Gb3JtID0gdXNlUmVmPEhUTUxGb3JtRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VXNlcih1c2VyUHJvcCk7XG4gIH0sIFt1c2VyUHJvcF0pO1xuXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IHJlZGlyZWN0VG8gPSBwYXRobmFtZS5pbmNsdWRlcyhcIi9zaWduL1wiKSA/IFwiL2Zsb29yLXBsYW5zXCIgOiBwYXRobmFtZTtcblxuICBmdW5jdGlvbiBzZW5kVXNlclRva2VuKCkge1xuICAgIGlmICghdXNlclRva2VuRm9ybS5jdXJyZW50KSByZXR1cm47XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodXNlclRva2VuRm9ybS5jdXJyZW50KTtcbiAgICBmZXRjaGVyLnN1Ym1pdChmb3JtRGF0YSwge21ldGhvZDogXCJwb3N0XCIsIGFjdGlvbjpcIi91cGRhdGUtc2Vzc2lvblwifSlcbiAgfVxuXG4gIC8vIGxpc3RlbiBmb3IgdG9rZW4gY2hhbmdlc1xuICAvLyBjYWxsIHNldFVzZXIgYW5kIHdyaXRlIG5ldyB0b2tlbiBhcyBhIGNvb2tpZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XG4gICAgcmV0dXJuIGF1dGgub25JZFRva2VuQ2hhbmdlZChhc3luYyAodXNlckZyb21DaGFuZ2UpID0+IHtcbiAgICAgIGlmICh1c2VyRnJvbUNoYW5nZSA9PT0gbnVsbCAmJiB1c2VyICE9PSBudWxsKSB7XG4gICAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICAgIGlmICghbG9nb3V0Rm9ybVJlZi5jdXJyZW50KSByZXR1cm47XG4gICAgICAgIGxvZ291dEZvcm1SZWYuY3VycmVudC5zdWJtaXQoKTtcbiAgICAgIH0gZWxzZSBpZiAodXNlckZyb21DaGFuZ2UpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCB1c2VyRnJvbUNoYW5nZS5nZXRJZFRva2VuKCk7XG4gICAgICAgIGlmICh0b2tlbiAhPT0gdXNlclRva2VuKSB7XG4gICAgICAgICAgc2V0VXNlcih1c2VyRnJvbUNoYW5nZSk7XG4gICAgICAgICAgc2V0VXNlclRva2VuKHRva2VuKTtcbiAgICAgICAgICBhd2FpdCBhZGRBcHBVc2VyKHVzZXJGcm9tQ2hhbmdlLnVpZCk7XG4gICAgICAgICAgc2VuZFVzZXJUb2tlbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFt1c2VyXSk7XG5cbiAgLy8gZm9yY2UgcmVmcmVzaCB0aGUgdG9rZW4gZXZlcnkgMTAgbWludXRlc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZSA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XG4gICAgICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcbiAgICAgIGlmICh1c2VyKSBhd2FpdCB1c2VyLmdldElkVG9rZW4odHJ1ZSk7XG4gICAgfSwgMTAgKiA2MCAqIDEwMDApO1xuXG4gICAgLy8gY2xlYW4gdXAgc2V0SW50ZXJ2YWxcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChoYW5kbGUpO1xuICB9LCBbXSk7XG5cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3VzZXJ9PlxuICAgICAgPExvZ291dEZvcm0gcmVmPXtsb2dvdXRGb3JtUmVmfSAvPlxuICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiIHJlZj17dXNlclRva2VuRm9ybX0gYWN0aW9uPVwiL3VwZGF0ZS1zZXNzaW9uXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9tZXRob2RcIiB2YWx1ZT1cInB1dFwiIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInVzZXJUb2tlblwiIHZhbHVlPXt1c2VyVG9rZW59IC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgIG5hbWU9XCJyZWRpcmVjdFRvXCJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoUGFyYW1zLmdldChcInJlZGlyZWN0VG9cIikgPz8gcmVkaXJlY3RUb31cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xufTtcbiIsICJpbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBGb3JtUHJvcHMgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGNvbnN0IExvZ291dEZvcm0gPSBmb3J3YXJkUmVmPEhUTUxGb3JtRWxlbWVudCwgRm9ybVByb3BzPihcbiAgKHByb3BzLCByZWYpID0+IDxGb3JtIHJlZj17cmVmfSBhY3Rpb249XCIvbG9nb3V0XCIgbWV0aG9kPVwicG9zdFwiIHsuLi5wcm9wc30gLz5cbik7XG4iLCAiaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXBwQmFyXCI7XG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCI7XG5pbXBvcnQgQXV0aENvbnRyb2xzIGZyb20gXCJ+L2NvbXBvbmVudHMvQXV0aENvbnRyb2xzXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBTdGFjayB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBBcHBCYXIoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNdWlBcHBCYXI+XG4gICAgICAgIDxUb29sYmFyXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8TGluayB0bz1cIi9cIiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XG4gICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXtcInJvd1wifT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDRcIlxuICAgICAgICAgICAgICAgIG5vV3JhcFxuICAgICAgICAgICAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufSwgJHt0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWlufSlgLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENsaXA6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgdGV4dEZpbGxDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQW5kcmVhdGlvbnNcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPEF1dGhDb250cm9scyAvPlxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICA8L011aUFwcEJhcj5cbiAgICAgIDxCb3ggc3g9e3sgbWFyZ2luQm90dG9tOiBcIjY0cHhcIiB9fSAvPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCJ+L3N0YXRlL0F1dGhQcm92aWRlclwiO1xuaW1wb3J0IHsgU2lnbk91dEJ1dHRvbiB9IGZyb20gXCJ+L2NvbXBvbmVudHMvU2lnbk91dEJ1dHRvblwiO1xuaW1wb3J0IHsgTG9nb3V0Rm9ybSB9IGZyb20gXCJ+L2NvbXBvbmVudHMvTG9nb3V0Rm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW5VcCgpIHtcbiAgY29uc3QgdXNlciA9IHVzZUF1dGgoKTtcbiAgcmV0dXJuIHVzZXIgPT09IG51bGwgPyAoXG4gICAgPEJveD5cbiAgICAgIDxCdXR0b24gY29tcG9uZW50PXtMaW5rfSB0bz1cIi9zaWduL2luXCI+XG4gICAgICAgIHNpZ24gaW5cbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBzeD17eyBtYXJnaW5MZWZ0OiAyIH19XG4gICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgdG89XCIvc2lnbi91cFwiXG4gICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgID5cbiAgICAgICAgc2lnbiB1cFxuICAgICAgPC9CdXR0b24+XG4gICAgPC9Cb3g+XG4gICkgOiAoXG4gICAgPEJveD5cbiAgICAgIDxMb2dvdXRGb3JtPlxuICAgICAgICA8U2lnbk91dEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY29sb3I9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICBzaWduIG91dFxuICAgICAgICA8L1NpZ25PdXRCdXR0b24+XG4gICAgICA8L0xvZ291dEZvcm0+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBzaWduT3V0IH0gZnJvbSBcIi4uL2ZpcmViYXNlL2F1dGhcIjtcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2lnbk91dEJ1dHRvbiA9IChwcm9wcykgPT4gKFxyXG4gIDw+XHJcbiAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0gey4uLnByb3BzfT5zaWduIG91dDwvQnV0dG9uPlxyXG4gIDwvPlxyXG4pO1xyXG5cclxuIiwgImltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQge1xyXG4gIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4gIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQsXHJcbiAgb25JZFRva2VuQ2hhbmdlZCxcclxufSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgdHlwZSB7IFVzZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVtYWlsQW5kUGFzc3dvcmRTaWduVXAoe1xyXG4gIGVtYWlsLFxyXG4gIHBhc3N3b3JkLFxyXG59KTogUHJvbWlzZTxVc2VyPiB7XHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuICBjb25zdCB1c2VyQ3JlZGVudGlhbCA9IGF3YWl0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChcclxuICAgIGF1dGgsXHJcbiAgICBlbWFpbCxcclxuICAgIHBhc3N3b3JkXHJcbiAgKTtcclxuICBjb25zdCB1c2VyID0gdXNlckNyZWRlbnRpYWwudXNlcjtcclxuICByZXR1cm4gdXNlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVtYWlsQW5kUGFzc3dvcmRTaWduSW4oe1xyXG4gIGVtYWlsLFxyXG4gIHBhc3N3b3JkLFxyXG59KTogUHJvbWlzZTxVc2VyPiB7XHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuXHJcbiAgY29uc3QgdXNlckNyZWRlbnRpYWwgPSBhd2FpdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChcclxuICAgIGF1dGgsXHJcbiAgICBlbWFpbCxcclxuICAgIHBhc3N3b3JkXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgdXNlciA9IHVzZXJDcmVkZW50aWFsLnVzZXI7XHJcbiAgcmV0dXJuIHVzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWduT3V0KCkge1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcblxyXG4gIGF1dGhcclxuICAgIC5zaWduT3V0KClcclxuICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gU2lnbi1vdXQgc3VjY2Vzc2Z1bC5cclxuICAgICAgLy8gY29uc29sZS5sb2coXCJzaWduZWQgb3V0IVwiKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIC8vIEFuIGVycm9yIGhhcHBlbmVkLlxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVBdXRoU3RhdGVDaGFuZ2VkKGNiKSB7XHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuXHJcbiAgcmV0dXJuIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgY2IgJiYgdHlwZW9mIGNiID09PSBcImZ1bmN0aW9uXCIgJiYgY2IodXNlcik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVJZFRva2VuQ2hhbmdlZChjYikge1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcblxyXG4gIHJldHVybiBvbklkVG9rZW5DaGFuZ2VkKGF1dGgsIGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICBjYiAmJiB0eXBlb2YgY2IgPT09IFwiZnVuY3Rpb25cIiAmJiBjYih1c2VyKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRVc2VyKCl7XHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuXHJcbiAgcmV0dXJuIGF1dGguY3VycmVudFVzZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmlnZ2VyVG9rZW5SZWZyZXNoKCl7XHJcbiAgY29uc3QgdXNlciA9IGdldEN1cnJlbnRVc2VyKCk7XHJcbiAgaWYgKHVzZXIpIGF3YWl0IHVzZXIuZ2V0SWRUb2tlbih0cnVlKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgZ2V0QXBwcywgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgY29ubmVjdEF1dGhFbXVsYXRvciwgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IGdldEFuYWx5dGljcywgbG9nRXZlbnQgfSBmcm9tIFwiZmlyZWJhc2UvYW5hbHl0aWNzXCI7XHJcbmltcG9ydCB7IGNvbm5lY3RGaXJlc3RvcmVFbXVsYXRvciwgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5cclxubGV0IGFwcCwgYXV0aCwgZGIsIGFuYWx5dGljcztcclxuXHJcbmlmICghZ2V0QXBwcygpLmxlbmd0aCkge1xyXG4gIGNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeURRRlN5V2llSzktRTZMejhhU1N6c1hraGVNVEp6ZFR2OFwiLFxyXG4gICAgYXV0aERvbWFpbjogXCJhbmRyZWF0aW9ucy0xLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcImFuZHJlYXRpb25zLTFcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiYW5kcmVhdGlvbnMtMS5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNDAxMjY3NzE4NzMzXCIsXHJcbiAgICBhcHBJZDogXCIxOjQwMTI2NzcxODczMzp3ZWI6MzI5Y2FlMTMxYmNmMzI3YTZkN2EwNFwiLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLVdaTjZYV0pRNkRcIixcclxuICB9O1xyXG4gIGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG4gIGF1dGggPSBnZXRBdXRoKCk7XHJcbiAgZGIgPSBnZXRGaXJlc3RvcmUoKTtcclxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBhbmFseXRpY3MgPSBnZXRBbmFseXRpY3MoKTtcclxuICB9XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcclxuICAgIGNvbm5lY3RGaXJlc3RvcmVFbXVsYXRvcihkYiwgXCJsb2NhbGhvc3RcIiwgODA4MCk7XHJcbiAgICBjb25uZWN0QXV0aEVtdWxhdG9yKGF1dGgsIFwiaHR0cDovL2xvY2FsaG9zdDo5MDk5XCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBhcHAsXHJcbiAgYXV0aCxcclxuICBkYixcclxuICBhbmFseXRpY3MsXHJcbiAgZ2V0QXV0aCxcclxuICBnZXRGaXJlc3RvcmUsXHJcbiAgZ2V0QW5hbHl0aWNzLFxyXG4gIGxvZ0V2ZW50LFxyXG59O1xyXG4iLCAiaW1wb3J0IHsgRGVjb2RlZElkVG9rZW4gfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vbGliL2F1dGgvdG9rZW4tdmVyaWZpZXJcIjtcbmltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIGVtYWlsQW5kUGFzc3dvcmRTaWduSW4sXG4gIGVtYWlsQW5kUGFzc3dvcmRTaWduVXAsXG59IGZyb20gXCJ+L2ZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwifi9maXJlYmFzZS9maXJlYmFzZUFkbWluLnNlcnZlclwiO1xuXG50eXBlIExvZ2luRm9ybSA9IHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIEF1dGhVc2VyID0gRGVjb2RlZElkVG9rZW4gfCBVc2VyO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIoeyBlbWFpbCwgcGFzc3dvcmQgfTogTG9naW5Gb3JtKSB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBlbWFpbEFuZFBhc3N3b3JkU2lnblVwKHsgZW1haWw6IGVtYWlsLCBwYXNzd29yZCB9KTtcbiAgcmV0dXJuIHVzZXI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbih7IGVtYWlsLCBwYXNzd29yZCB9OiBMb2dpbkZvcm0pOiBQcm9taXNlPFVzZXI+IHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGVtYWlsQW5kUGFzc3dvcmRTaWduSW4oeyBlbWFpbDogZW1haWwsIHBhc3N3b3JkIH0pO1xuICByZXR1cm4gdXNlcjtcbn1cblxubGV0IHNlc3Npb25TZWNyZXQgPSBwcm9jZXNzLmVudi5TRVNTSU9OX1NFQ1JFVDtcbmlmICghc2Vzc2lvblNlY3JldCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJTRVNTSU9OX1NFQ1JFVCBtdXN0IGJlIHNldFwiKTtcbn1cblxubGV0IHN0b3JhZ2UgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XG4gIGNvb2tpZToge1xuICAgIG5hbWU6IFwiY3Nfc2Vzc2lvblwiLFxuICAgIHNlY3VyZTogdHJ1ZSxcbiAgICBzZWNyZXRzOiBbc2Vzc2lvblNlY3JldF0sXG4gICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgcGF0aDogXCIvXCIsXG4gICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlclNlc3Npb24ocmVxdWVzdDogUmVxdWVzdCkge1xuICByZXR1cm4gc3RvcmFnZS5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlclRva2VuKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgbGV0IHNlc3Npb24gPSBhd2FpdCBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0KTtcbiAgbGV0IHVzZXJUb2tlbiA9IHNlc3Npb24uZ2V0KFwidXNlclRva2VuXCIpO1xuICBpZiAoIXVzZXJUb2tlbiB8fCB0eXBlb2YgdXNlclRva2VuICE9PSBcInN0cmluZ1wiKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHVzZXJUb2tlbjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF1dGhVc2VyKHJlcXVlc3Q6IFJlcXVlc3QpOiBQcm9taXNlPEF1dGhVc2VyIHwgbnVsbD4ge1xuICBsZXQgdXNlclRva2VuID0gYXdhaXQgZ2V0VXNlclRva2VuKHJlcXVlc3QpO1xuICBpZiAodHlwZW9mIHVzZXJUb2tlbiAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBhdXRoZWRVc2VyID0gYXdhaXQgZ2V0QXV0aCgpLnZlcmlmeUlkVG9rZW4odXNlclRva2VuKTtcbiAgICByZXR1cm4gYXV0aGVkVXNlcjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiZ2V0QXV0aFVzZXIgZXJyb3JcIiwgZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJJZChyZXF1ZXN0OiBSZXF1ZXN0KTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gIHRyeSB7XG4gICAgbGV0IGF1dGhVc2VyID0gYXdhaXQgZ2V0QXV0aFVzZXIocmVxdWVzdCk7XG4gICAgcmV0dXJuIGF1dGhVc2VyPy51aWQgfHwgbnVsbDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcImdldFVzZXJJZCBlcnJvclwiLCBlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVVc2VySWQoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlZGlyZWN0VG86IHN0cmluZyA9IG5ldyBVUkwocmVxdWVzdC51cmwpLnBhdGhuYW1lXG4pIHtcbiAgbGV0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcbiAgaWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gXCJzdHJpbmdcIikge1xuICAgIGxldCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKFtbXCJyZWRpcmVjdFRvXCIsIHJlZGlyZWN0VG9dXSk7XG4gICAgdGhyb3cgcmVkaXJlY3QoYC9zaWduL2luPyR7c2VhcmNoUGFyYW1zfWApO1xuICB9XG4gIHJldHVybiB1c2VySWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dvdXQocmVxdWVzdDogUmVxdWVzdCkge1xuICBsZXQgc2Vzc2lvbiA9IGF3YWl0IGdldFVzZXJTZXNzaW9uKHJlcXVlc3QpO1xuXG4gIHJldHVybiByZWRpcmVjdChcIi9zaWduL2luXCIsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgc3RvcmFnZS5kZXN0cm95U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXJUb2tlbjogc3RyaW5nLCByZWRpcmVjdFRvOiBzdHJpbmcpIHtcbiAgbGV0IHNlc3Npb24gPSBhd2FpdCBzdG9yYWdlLmdldFNlc3Npb24oKTtcbiAgc2Vzc2lvbi5zZXQoXCJ1c2VyVG9rZW5cIiwgdXNlclRva2VuKTtcbiAgcmV0dXJuIHJlZGlyZWN0KHJlZGlyZWN0VG8sIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgc3RvcmFnZS5jb21taXRTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IGluaXRpYWxpemVBcHAsIGNlcnQsIGdldEFwcHMsIEFwcCB9IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9hcHBcIjtcbmltcG9ydCB7IEF1dGgsIGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vYXV0aFwiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlLCBGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vZmlyZXN0b3JlXCI7XG5cbmxldCBhcHA6IEFwcCwgYXV0aDogQXV0aCwgZGI6IEZpcmVzdG9yZTtcbmlmICghZ2V0QXBwcygpLmxlbmd0aCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIHByb2Nlc3MuZW52LkZJUkVTVE9SRV9FTVVMQVRPUl9IT1NUID0gXCJsb2NhbGhvc3Q6ODA4MFwiO1xuICAgIHByb2Nlc3MuZW52LkZJUkVCQVNFX0FVVEhfRU1VTEFUT1JfSE9TVCA9IFwibG9jYWxob3N0OjkwOTlcIjtcbiAgfVxuICBjb25zdCBlbmNvZGVkS2V5ID0gcHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJJVkFURV9LRVlfQkFTRTY0IHx8IFwiXCI7XG4gIGNvbnN0IGRlY29kZWRLZXkgPSBCdWZmZXIuZnJvbShlbmNvZGVkS2V5LCBcImJhc2U2NFwiKS50b1N0cmluZyhcInV0ZjhcIik7XG4gIGFwcCA9IGluaXRpYWxpemVBcHAoe1xuICAgIGNyZWRlbnRpYWw6IGNlcnQoe1xuICAgICAgcHJpdmF0ZUtleTogZGVjb2RlZEtleSxcbiAgICAgIGNsaWVudEVtYWlsOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9DTElFTlRfRU1BSUwsXG4gICAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BST0pFQ1RfSUQsXG4gICAgfSksXG4gICAgZGF0YWJhc2VVUkw6IGBodHRwczovLyR7cHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJPSkVDVF9JRH0uZmlyZWJhc2Vpby5jb21gLFxuICB9KTtcbiAgYXV0aCA9IGdldEF1dGgoKTtcbiAgZGIgPSBnZXRGaXJlc3RvcmUoKTtcbn1cblxuZXhwb3J0IHsgYXBwLCBhdXRoLCBnZXRBdXRoLCBkYiwgZ2V0RmlyZXN0b3JlIH07XG4iLCAiaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvUGFwZXJcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgbGVmdENvbG9yPzogc3RyaW5nO1xuICByaWdodENvbG9yPzogc3RyaW5nO1xuICBzeD86IG9iamVjdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBBcHBQYXBlcih7XG4gIGNoaWxkcmVuLFxuICBsZWZ0Q29sb3IgPSBcInByaW1hcnlcIixcbiAgcmlnaHRDb2xvciA9IFwic2Vjb25kYXJ5XCIsXG4gIHN4ID0ge30sXG59KSB7XG4gIHJldHVybiAoXG4gICAgPFN0YWNrXG4gICAgICBjb21wb25lbnQ9e1BhcGVyfVxuICAgICAgc3BhY2luZz17Mn1cbiAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgIHBhZGRpbmc6IDQsXG5cbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICAgICAgYmFja2dyb3VuZENsaXA6IFwicGFkZGluZy1ib3hcIixcbiAgICAgICAgYm9yZGVyOiBcInNvbGlkIDVweCB0cmFuc3BhcmVudFwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMWVtXCIsXG5cbiAgICAgICAgXCImOmJlZm9yZSBcIjoge1xuICAgICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICB6SW5kZXg6IC0xLFxuICAgICAgICAgIG1hcmdpbjogXCItNXB4XCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcImluaGVyaXRcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke3RoZW1lLnBhbGV0dGVbbGVmdENvbG9yXS5tYWlufSwgJHt0aGVtZS5wYWxldHRlW3JpZ2h0Q29sb3JdLm1haW59KWAsXG4gICAgICAgIH0sXG4gICAgICAgIC4uLnN4LFxuICAgICAgfSl9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU3RhY2s+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBDbGllbnRTdHlsZUNvbnRleHREYXRhIHtcbiAgcmVzZXQ6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRleHQ8Q2xpZW50U3R5bGVDb250ZXh0RGF0YT4oe1xuICByZXNldDogKCkgPT4ge30sXG59KTsiLCAiaW1wb3J0IHsgcmVkaXJlY3QsIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhLCB1c2VBY3Rpb25EYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuaW1wb3J0IHsgcmVxdWlyZVVzZXJJZCB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRBcHBVc2VyIH0gZnJvbSBcIn4vZGIvYXBwVXNlcnMvYXBwVXNlcnMuc2VydmVyXCI7XG5pbXBvcnQgeyBFZGl0Rmxvb3JQbGFuIH0gZnJvbSBcIn4vY29tcG9uZW50cy9FZGl0Rmxvb3JQbGFuXCI7XG5pbXBvcnQge1xuICBGbG9vclBsYW5XaXRoSWQsXG4gIGdldEZsb29yUGxhbixcbiAgc2V0Rmxvb3JQbGFuLFxufSBmcm9tIFwifi9kYi9mbG9vclBsYW5zLnNlcnZlclwiO1xuXG5pbnRlcmZhY2UgTG9hZGVyRGF0YSBleHRlbmRzIEZsb29yUGxhbldpdGhJZCB7XG4gIHVzZXJJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG4gIHJlcXVlc3QsXG4gIHBhcmFtcyxcbn0pOiBQcm9taXNlPExvYWRlckRhdGEgfCBSZXNwb25zZT4gPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuICBpbnZhcmlhbnQocGFyYW1zLmZsb29yUGxhbklkLCBcImV4cGVjdGVkIHBhcmFtcy5zbHVnXCIpO1xuICBjb25zdCBmbG9vclBsYW4gPSBhd2FpdCBnZXRGbG9vclBsYW4ocGFyYW1zLmZsb29yUGxhbklkKTtcbiAgaW52YXJpYW50KGZsb29yUGxhbiwgXCJleHBlY3RlZCBmbG9vclBsYW5cIik7XG4gIHJldHVybiB7IC4uLmZsb29yUGxhbiwgdXNlcklkIH07XG59O1xuXG50eXBlIFBsYW5FcnJvciA9IHtcbiAgb3duZXI/OiBib29sZWFuO1xuICB0aXRsZT86IGJvb2xlYW47XG4gIGRlc2NyaXB0aW9uPzogYm9vbGVhbjtcbiAgY29zdD86IGJvb2xlYW47XG4gIC8vIFRPRE8/OiB3aGVuIHdlIGhhdmUgdXNlcnMgdGhlbiBsZXRzIGRvIHRoaXNcbiAgLy8gcG9wdWxhcml0eT86IHtcbiAgLy8gICByYXRpbmc/OiBudW1iZXI7XG4gIC8vICAgY291bnQ/OiBudW1iZXI7XG4gIC8vIH07XG4gIGdpdGh1Yk93bmVyPzogYm9vbGVhbjtcbiAgZ2l0aHViUmVwbz86IGJvb2xlYW47XG4gIHNldHVwVGltZT86IGJvb2xlYW47XG4gIHRhZ3M/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgZmxvb3JQbGFuSWQgPSBwYXJhbXMuZmxvb3JQbGFuSWQ7XG4gIGNvbnN0IG93bmVyID0gZm9ybURhdGEuZ2V0KFwib3duZXJcIik7XG4gIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IGNvc3QgPSBmb3JtRGF0YS5nZXQoXCJjb3N0XCIpO1xuICBjb25zdCBnaXRodWJPd25lciA9IGZvcm1EYXRhLmdldChcImdpdGh1Yk93bmVyXCIpO1xuICBjb25zdCBnaXRodWJSZXBvID0gZm9ybURhdGEuZ2V0KFwiZ2l0aHViUmVwb1wiKTtcbiAgY29uc3Qgc2V0dXBUaW1lID0gZm9ybURhdGEuZ2V0KFwic2V0dXBUaW1lXCIpO1xuICBjb25zdCB0YWdzID1cbiAgICBTdHJpbmcoZm9ybURhdGEuZ2V0KFwidGFnc1wiKSlcbiAgICAgID8uc3BsaXQoXCIsXCIpXG4gICAgICAubWFwKCh3b3JkKSA9PiB3b3JkLnRyaW0oKSkgfHwgW107XG5cbiAgY29uc3QgZXJyb3JzOiBQbGFuRXJyb3IgPSB7fTtcbiAgaWYgKCFvd25lcikgZXJyb3JzLm93bmVyID0gdHJ1ZTtcbiAgaWYgKCF0aXRsZSkgZXJyb3JzLnRpdGxlID0gdHJ1ZTtcbiAgaWYgKCFkZXNjcmlwdGlvbikgZXJyb3JzLmRlc2NyaXB0aW9uID0gdHJ1ZTtcbiAgaWYgKCFjb3N0KSBlcnJvcnMuY29zdCA9IHRydWU7XG4gIGlmICghZ2l0aHViT3duZXIpIGVycm9ycy5naXRodWJPd25lciA9IHRydWU7XG4gIGlmICghZ2l0aHViUmVwbykgZXJyb3JzLmdpdGh1YlJlcG8gPSB0cnVlO1xuICBpZiAoIXNldHVwVGltZSkgZXJyb3JzLnNldHVwVGltZSA9IHRydWU7XG5cbiAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIGludmFyaWFudCh0eXBlb2YgZmxvb3JQbGFuSWQgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIG93bmVyID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiB0aXRsZSA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgZGVzY3JpcHRpb24gPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGNvc3QgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGdpdGh1Yk93bmVyID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBnaXRodWJSZXBvID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBzZXR1cFRpbWUgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIHRhZ3MgPT09IFwib2JqZWN0XCIpO1xuXG4gIGF3YWl0IHNldEZsb29yUGxhbihmbG9vclBsYW5JZCwge1xuICAgIG93bmVyLFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGNvc3QsXG4gICAgZ2l0aHViT3duZXIsXG4gICAgZ2l0aHViUmVwbyxcbiAgICBzZXR1cFRpbWUsXG4gICAgdGFncyxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2Zsb29yLXBsYW5zXCIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdFBsYW4oKSB7XG4gIGNvbnN0IHtcbiAgICB1c2VySWQsXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgY29zdCxcbiAgICBnaXRodWJPd25lcixcbiAgICBnaXRodWJSZXBvLFxuICAgIHNldHVwVGltZSxcbiAgICB0YWdzLFxuICB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuICBjb25zdCBlcnJvcnMgPSB1c2VBY3Rpb25EYXRhKCk7XG4gIHJldHVybiAoXG4gICAgPEVkaXRGbG9vclBsYW5cbiAgICAgIGlzQ3JlYXRlPXtmYWxzZX1cbiAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgb3duZXI9e3VzZXJJZH1cbiAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgIGNvc3Q9e2Nvc3R9XG4gICAgICBnaXRodWJPd25lcj17Z2l0aHViT3duZXJ9XG4gICAgICBnaXRodWJSZXBvPXtnaXRodWJSZXBvfVxuICAgICAgc2V0dXBUaW1lPXtzZXR1cFRpbWV9XG4gICAgICB0YWdzPXt0YWdzLmpvaW4oXCIsIFwiKX1cbiAgICAvPlxuICApO1xufVxuIiwgImltcG9ydCB7IEZvcm0gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIFRleHRGaWVsZCxcbiAgU3RhY2ssXG4gIEJ1dHRvbixcbiAgQm94LFxuICBJbnB1dExhYmVsLFxuICBTZWxlY3QsXG4gIE1lbnVJdGVtLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUhlbHBlclRleHQsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBsb2dFdmVudCwgYW5hbHl0aWNzIH0gZnJvbSBcIn4vZmlyZWJhc2UvZmlyZWJhc2VcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXNDcmVhdGU6IGJvb2xlYW47XG4gIGVycm9ycztcbiAgb3duZXI6IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBjb3N0Pzogc3RyaW5nO1xuICBnaXRodWJPd25lcj86IHN0cmluZztcbiAgZ2l0aHViUmVwbz86IHN0cmluZztcbiAgc2V0dXBUaW1lPzogc3RyaW5nO1xuICB0YWdzPzogc3RyaW5nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIEVkaXRGbG9vclBsYW4oe1xuICBpc0NyZWF0ZSxcbiAgZXJyb3JzLFxuICBvd25lcixcbiAgdGl0bGUgPSBcIlwiLFxuICBkZXNjcmlwdGlvbiA9IFwiXCIsXG4gIGNvc3QgPSBcIlwiLFxuICBnaXRodWJPd25lciA9IFwiXCIsXG4gIGdpdGh1YlJlcG8gPSBcIlwiLFxuICBzZXR1cFRpbWUgPSBcIlwiLFxuICB0YWdzID0gXCJcIixcbn06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFN0YWNrIHNwYWNpbmc9ezJ9IHN4PXt7IHA6IDQgfX0+XG4gICAgICA8Rm9ybVxuICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgb25TdWJtaXQ9eygpID0+IHtcbiAgICAgICAgICBsb2dFdmVudChhbmFseXRpY3MsIGlzQ3JlYXRlID8gXCJjcmVhdGVcIiA6IFwiZWRpdFwiKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwib3duZXJcIiB2YWx1ZT17b3duZXJ9IC8+XG5cbiAgICAgICAgPFN0YWNrXG4gICAgICAgICAgc3BhY2luZz17Mn1cbiAgICAgICAgICBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIG1heFdpZHRoOiBcIjUwMHB4XCIsXG4gICAgICAgICAgICBtYXJnaW46IFwiNjBweCBhdXRvXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LmdpdGh1Yk93bmVyfVxuICAgICAgICAgICAgICBpZD1cImdpdGh1Yk93bmVyXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJHaXRodWIgT3duZXJcIlxuICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcbiAgICAgICAgICAgICAgICBlcnJvcnM/LmdpdGh1Yk93bmVyXG4gICAgICAgICAgICAgICAgICA/IFwiR2l0aHViIE93bmVyIGlzIHJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgIDogXCJXaGljaCBHaXRodWIgT3JnYW5pemF0aW9uIG93bnMgdGhpcyBwcm9qZWN0P1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJnaXRodWJPd25lclwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2dpdGh1Yk93bmVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy5naXRodWJSZXBvfVxuICAgICAgICAgICAgICBpZD1cImdpdGh1YlJlcG9cIlxuICAgICAgICAgICAgICBsYWJlbD1cIkdpdGh1YiBSZXBvXCJcbiAgICAgICAgICAgICAgaGVscGVyVGV4dD17XG4gICAgICAgICAgICAgICAgZXJyb3JzPy5naXRodWJSZXBvXG4gICAgICAgICAgICAgICAgICA/IFwiZ2l0aHViUmVwbyBpcyByZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICA6IFwiV2hhdCBpcyB0aGUgbmFtZSBvZiB0aGUgR2l0aHViIFJlcG8/XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgbmFtZT1cImdpdGh1YlJlcG9cIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtnaXRodWJSZXBvfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy50aXRsZX1cbiAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiVGl0bGVcIlxuICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcbiAgICAgICAgICAgICAgICBlcnJvcnM/LnRpdGxlXG4gICAgICAgICAgICAgICAgICA/IFwiVGl0bGUgaXMgcmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgOiBcIkRpc3BsYXkgbmFtZSBmb3IgdGhlIHByb2plY3QgfHwgUmVwbyBOYW1lXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIGhlbHBlclRleHQ9e1xuICAgICAgICAgICAgICAgIGVycm9ycz8uZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgID8gXCJEZXNjcmlwdGlvbiBpcyByZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICA6IFwiV2hhdCBtYWtlcyB0aGlzIHJlcG8gc28gZ3JlYXQ/XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIG11bHRpbGluZVxuICAgICAgICAgICAgICByb3dzPXs0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aCB2YXJpYW50PVwiZmlsbGVkXCIgZXJyb3I9e2Vycm9ycz8uY29zdH0+XG4gICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwic2VsZWN0LWxhYmVsLWNvc3RcIj5Db3N0PC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgbGFiZWxJZD1cInNlbGVjdC1sYWJlbC1jb3N0XCJcbiAgICAgICAgICAgICAgICBpZD1cImNvc3RcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29zdFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvc3RcIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y29zdH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17XCJmcmVlXCJ9PkZyZWU8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17XCIkXCJ9PiQ8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17XCIkJFwifT4kJDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtcIiQkJFwifT4kJCQ8L01lbnVJdGVtPlxuICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0PlxuICAgICAgICAgICAgICAgIHtlcnJvcnM/LmNvc3RcbiAgICAgICAgICAgICAgICAgID8gXCJDb3N0IGlzIHJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgIDogXCJIb3cgbXVjaCBkb2VzIHRoaXMgcGxhbiBjb3N0IHRvIHJ1biB3aGVuIHN0YXJ0aW5nP1wifVxuICAgICAgICAgICAgICA8L0Zvcm1IZWxwZXJUZXh0PlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIHZhcmlhbnQ9XCJmaWxsZWRcIiBlcnJvcj17ZXJyb3JzPy5zZXR1cFRpbWV9PlxuICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInNlbGVjdC1sYWJlbC1zZXR1cFRpbWVcIj5TZXR1cCBUaW1lPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgbGFiZWxJZD1cInNlbGVjdC1sYWJlbC1zZXR1cFRpbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwic2V0dXBUaW1lXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlNldHVwIFRpbWVcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJzZXR1cFRpbWVcIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2V0dXBUaW1lfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtcIjVtaW5cIn0+NW1pbjwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtcIjMwbWluXCJ9PjMwbWluPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e1wiMWhyXCJ9PjFocjwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtcIjJoclwifT4yaHI8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17XCI1aHJcIn0+NWhyPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e1wiMWRheVwifT4xZGF5PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e1wiMXdlZWtcIn0+MXdlZWs8L01lbnVJdGVtPlxuICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0PlxuICAgICAgICAgICAgICAgIHtlcnJvcnM/LnNldHVwVGltZVxuICAgICAgICAgICAgICAgICAgPyBcIlNldHVwIFRpbWUgaXMgcmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgOiBcIkhvdyBsb25nIGRvZXMgaXQgdGFrZSB0byBzZXR1cD9cIn1cbiAgICAgICAgICAgICAgPC9Gb3JtSGVscGVyVGV4dD5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycz8udGFnc31cbiAgICAgICAgICAgICAgaWQ9XCJ0YWdzXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJUYWdzXCJcbiAgICAgICAgICAgICAgaGVscGVyVGV4dD17XG4gICAgICAgICAgICAgICAgZXJyb3JzPy50YWdzXG4gICAgICAgICAgICAgICAgICA/IFwidGFncyBpcyByZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICA6IFwiV2hhdCBhcmUgc29tZSBzZWFyY2ggdGVybXMgZm9yIHRoaXMgcmVwbz9cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICBuYW1lPVwidGFnc1wiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RhZ3N9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwiY29udGFpbmVkXCIgZnVsbFdpZHRoPlxuICAgICAgICAgICAgICB7aXNDcmVhdGUgPyBcIkNyZWF0ZSBGbG9vciBQbGFuXCIgOiBcIlVwZGF0ZSBGbG9vciBQbGFuXCJ9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvRm9ybT5cbiAgICA8L1N0YWNrPlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHtcbiAgQ29sbGVjdGlvblJlZmVyZW5jZSxcbiAgRG9jdW1lbnRSZWZlcmVuY2UsXG4gIFF1ZXJ5LFxufSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwifi9maXJlYmFzZS9maXJlYmFzZUFkbWluLnNlcnZlclwiO1xuXG5jb25zdCBCTE9HX1BPU1RTX0NPTExFQ1RJT04gPSBcImZsb29yUGxhbnNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBGbG9vclBsYW4ge1xuICBvd25lcjogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjb3N0OiBzdHJpbmc7XG4gIC8vIFRPRE86IHdoZW4gd2UgaGF2ZSB1c2VycyB0aGVuIGxldHMgZG8gdGhpc1xuICAvLyBwb3B1bGFyaXR5OiB7XG4gIC8vICAgcmF0aW5nOiBudW1iZXI7XG4gIC8vICAgY291bnQ6IG51bWJlcjtcbiAgLy8gfTtcbiAgZ2l0aHViT3duZXI6IHN0cmluZztcbiAgZ2l0aHViUmVwbzogc3RyaW5nO1xuICBzZXR1cFRpbWU6IHN0cmluZztcbiAgdGFnczogc3RyaW5nW107XG4gIHF1ZXJ5TGlzdD86IHN0cmluZ1tdO1xufVxuZXhwb3J0IGludGVyZmFjZSBGbG9vclBsYW5XaXRoSWQgZXh0ZW5kcyBGbG9vclBsYW4ge1xuICBpZDogc3RyaW5nO1xufVxuXG5jb25zdCBnZXRDb2xsZWN0aW9uUmVmID0gKCkgPT5cbiAgZ2V0RmlyZXN0b3JlKCkuY29sbGVjdGlvbihcbiAgICBCTE9HX1BPU1RTX0NPTExFQ1RJT05cbiAgKSBhcyBDb2xsZWN0aW9uUmVmZXJlbmNlPEZsb29yUGxhbj47XG5cbmNvbnN0IGdldERvY1JlZmVyZW5jZSA9IChmbG9vclBsYW5JZCkgPT5cbiAgZ2V0Q29sbGVjdGlvblJlZigpLmRvYyhmbG9vclBsYW5JZCkgYXMgRG9jdW1lbnRSZWZlcmVuY2U8Rmxvb3JQbGFuPjtcblxuY29uc3QgZ2V0UXVlcnkgPSAoKSA9PiBnZXRDb2xsZWN0aW9uUmVmKCkgYXMgUXVlcnk8Rmxvb3JQbGFuPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEZsb29yUGxhbnMoKTogUHJvbWlzZTxGbG9vclBsYW5XaXRoSWRbXT4ge1xuICBjb25zdCBxdWVyeVJlZiA9IGdldFF1ZXJ5KCk7XG4gIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBxdWVyeVJlZi5nZXQoKTtcbiAgcmV0dXJuIHF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGaWx0ZXJlZEZsb29yUGxhbnMoe1xuICBxdWVyeVN0cmluZyxcbiAgdXNlcklkLFxufToge1xuICBxdWVyeVN0cmluZzogc3RyaW5nIHwgbnVsbDtcbiAgdXNlcklkOiBzdHJpbmcgfCBudWxsO1xufSk6IFByb21pc2U8Rmxvb3JQbGFuV2l0aElkW10+IHtcbiAgbGV0IHF1ZXJ5UmVmID0gZ2V0UXVlcnkoKTtcbiAgaWYgKHVzZXJJZCkge1xuICAgIHF1ZXJ5UmVmID0gcXVlcnlSZWYud2hlcmUoXCJvd25lclwiLCBcIj09XCIsIHVzZXJJZCkgYXMgUXVlcnk8Rmxvb3JQbGFuPjtcbiAgfVxuICBpZiAocXVlcnlTdHJpbmcpIHtcbiAgICBxdWVyeVJlZiA9IHF1ZXJ5UmVmLndoZXJlKFxuICAgICAgXCJxdWVyeUxpc3RcIixcbiAgICAgIFwiYXJyYXktY29udGFpbnMtYW55XCIsXG4gICAgICBxdWVyeVN0cmluZ1xuICAgICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAgIC5maWx0ZXIoKHdvcmQpID0+IHdvcmQubGVuZ3RoID4gMSlcbiAgICAgICAgLnNsaWNlKDAsIDkpXG4gICAgICAgIC5tYXAoKHdvcmQpID0+IHdvcmQudG9Mb3dlckNhc2UoKSlcbiAgICApIGFzIFF1ZXJ5PEZsb29yUGxhbj47XG4gIH1cbiAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IHF1ZXJ5UmVmLmdldCgpO1xuICByZXR1cm4gcXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZsb29yUGxhbihcbiAgZmxvb3JQbGFuSWRcbik6IFByb21pc2U8Rmxvb3JQbGFuV2l0aElkIHwgbnVsbD4ge1xuICBjb25zdCBkb2NSZWYgPSBnZXREb2NSZWZlcmVuY2UoZmxvb3JQbGFuSWQpO1xuICBjb25zdCBkb2NTbmFwID0gYXdhaXQgZG9jUmVmLmdldCgpO1xuICBpZiAoZG9jU25hcC5leGlzdHMpIHtcbiAgICByZXR1cm4geyBpZDogZG9jUmVmLmlkLCAuLi4oZG9jU25hcD8uZGF0YSgpIGFzIEZsb29yUGxhbikgfSB8fCBudWxsO1xuICB9IGVsc2Uge1xuICAgIC8vIGRvYy5kYXRhKCkgd2lsbCBiZSB1bmRlZmluZWQgaW4gdGhpcyBjYXNlXG4gICAgY29uc29sZS5sb2coXCJObyBzdWNoIGRvY3VtZW50IVwiKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkRmxvb3JQbGFuKGZsb29yUGxhbjogRmxvb3JQbGFuKTogUHJvbWlzZTxGbG9vclBsYW4+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBxdWVyeUxpc3QgPSBbXG4gICAgICAuLi5mbG9vclBsYW4udGl0bGUuc3BsaXQoXCIgXCIpLmZpbHRlcigod29yZCkgPT4gd29yZC5sZW5ndGggPiAxKS5tYXAoKHdvcmQpID0+IHdvcmQudG9Mb3dlckNhc2UoKSksXG4gICAgICAuLi5mbG9vclBsYW4udGFncy5maWx0ZXIoKHdvcmQpID0+IHdvcmQubGVuZ3RoID4gMSkubWFwKCh3b3JkKSA9PiB3b3JkLnRvTG93ZXJDYXNlKCkpLFxuICAgIF07XG4gICAgZmxvb3JQbGFuLnF1ZXJ5TGlzdCA9IHF1ZXJ5TGlzdDtcbiAgICBjb25zdCBkb2NSZWYgPSBhd2FpdCBnZXRDb2xsZWN0aW9uUmVmKCkuYWRkKGZsb29yUGxhbik7XG5cbiAgICBjb25zdCBuZXdGbG9vclBsYW4gPSBhd2FpdCBnZXRGbG9vclBsYW4oZG9jUmVmLmlkKTtcbiAgICBpZiAoIW5ld0Zsb29yUGxhbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBuZXcgZGF0YSBwb2ludFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0Zsb29yUGxhbjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZG9jdW1lbnQ6IFwiLCBlKTtcbiAgICB0aHJvdyBlO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRGbG9vclBsYW4oXG4gIGZsb29yUGxhbklkOiBzdHJpbmcsXG4gIGZsb29yUGxhbjogRmxvb3JQbGFuXG4pOiBQcm9taXNlPEZsb29yUGxhbj4ge1xuICB0cnkge1xuICAgIGNvbnN0IHF1ZXJ5TGlzdCA9IFtcbiAgICAgIC4uLmZsb29yUGxhbi50aXRsZS5zcGxpdChcIiBcIikuZmlsdGVyKCh3b3JkKSA9PiB3b3JkLmxlbmd0aCA+IDEpLm1hcCgod29yZCkgPT4gd29yZC50b0xvd2VyQ2FzZSgpKSxcbiAgICAgIC4uLmZsb29yUGxhbi50YWdzLmZpbHRlcigod29yZCkgPT4gd29yZC5sZW5ndGggPiAxKS5tYXAoKHdvcmQpID0+IHdvcmQudG9Mb3dlckNhc2UoKSksXG4gICAgXTtcbiAgICBmbG9vclBsYW4ucXVlcnlMaXN0ID0gcXVlcnlMaXN0O1xuICAgIGF3YWl0IGdldERvY1JlZmVyZW5jZShmbG9vclBsYW5JZCkuc2V0KGZsb29yUGxhbik7XG4gICAgY29uc3QgZG9jUmVmID0gYXdhaXQgZ2V0RG9jUmVmZXJlbmNlKGZsb29yUGxhbklkKTtcblxuICAgIGNvbnN0IG5ld0Zsb29yUGxhbiA9IGF3YWl0IGdldEZsb29yUGxhbihkb2NSZWYuaWQpO1xuICAgIGlmICghbmV3Rmxvb3JQbGFuKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IG5ldyBkYXRhIHBvaW50XCIpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3Rmxvb3JQbGFuO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBkb2N1bWVudDogXCIsIGUpO1xuICAgIHRocm93IGU7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyByZWRpcmVjdCwgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEsIHVzZUFjdGlvbkRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5pbXBvcnQge1xuICBhZGRCbG9nUG9zdCxcbiAgQmxvZ1Bvc3RXaXRoSWQsXG4gIGdldEJsb2dQb3N0LFxufSBmcm9tIFwifi9kYi9ibG9nUG9zdHMuc2VydmVyXCI7XG5pbXBvcnQgeyByZXF1aXJlVXNlcklkIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldEFwcFVzZXIgfSBmcm9tIFwifi9kYi9hcHBVc2Vycy9hcHBVc2Vycy5zZXJ2ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBFZGl0UG9zdCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvRWRpdFBvc3RcIjtcblxuaW50ZXJmYWNlIExvYWRlckRhdGEgZXh0ZW5kcyBCbG9nUG9zdFdpdGhJZCB7XG4gIGlzQXV0aG9yOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG4gIHJlcXVlc3QsXG4gIHBhcmFtcyxcbn0pOiBQcm9taXNlPExvYWRlckRhdGEgfCBSZXNwb25zZT4gPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuICBsZXQgaXNBdXRob3IgPSBmYWxzZTtcbiAgaWYgKHVzZXJJZCkge1xuICAgIGNvbnN0IGFwcFVzZXIgPSBhd2FpdCBnZXRBcHBVc2VyKHVzZXJJZCk7XG4gICAgaWYgKCFhcHBVc2VyPy5wZXJtaXNzaW9ucy5pbmNsdWRlcyhcImF1dGhvclwiKSkge1xuICAgICAgcmV0dXJuIHJlZGlyZWN0KFwiL2Jsb2dcIik7XG4gICAgfVxuICB9XG4gIGludmFyaWFudChwYXJhbXMuYmxvZ1Bvc3RJZCwgXCJleHBlY3RlZCBwYXJhbXMuc2x1Z1wiKTtcbiAgY29uc3QgYmxvZ1Bvc3QgPSBhd2FpdCBnZXRCbG9nUG9zdChwYXJhbXMuYmxvZ1Bvc3RJZCk7XG4gIGludmFyaWFudChibG9nUG9zdCwgXCJleHBlY3RlZCBibG9nUG9zdFwiKTtcbiAgcmV0dXJuIHsgLi4uYmxvZ1Bvc3QsIGlzQXV0aG9yIH07XG59O1xuXG50eXBlIFBvc3RFcnJvciA9IHtcbiAgdGl0bGU/OiBib29sZWFuO1xuICBzbHVnPzogYm9vbGVhbjtcbiAgbWFya2Rvd24/OiBib29sZWFuO1xuICBkZXNjcmlwdGlvbj86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcblxuICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpO1xuICBjb25zdCBzbHVnID0gZm9ybURhdGEuZ2V0KFwic2x1Z1wiKTtcbiAgY29uc3QgbWFya2Rvd24gPSBmb3JtRGF0YS5nZXQoXCJtYXJrZG93blwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKTtcbiAgY29uc3QgYXV0aG9ySWQgPSBmb3JtRGF0YS5nZXQoXCJhdXRob3JJZFwiKTtcbiAgY29uc3QgaW1hZ2VVcmwgPSBmb3JtRGF0YS5nZXQoXCJpbWFnZVVybFwiKTtcbiAgY29uc3QgaW1hZ2VBbHQgPSBmb3JtRGF0YS5nZXQoXCJpbWFnZUFsdFwiKTtcbiAgY29uc3QgdGFncyA9IFN0cmluZyhmb3JtRGF0YS5nZXQoXCJ0YWdzXCIpKT8uc3BsaXQoXCIsXCIpIHx8IFtdO1xuICBjb25zdCBpc1B1Ymxpc2hlZCA9IGZvcm1EYXRhLmdldChcImlzUHVibGlzaGVkXCIpID09PSBcInRydWVcIjtcbiAgY29uc3QgcHVibGlzaERhdGUgPSBwYXJzZUludChcbiAgICAoZm9ybURhdGEuZ2V0KFwicHVibGlzaERhdGVcIikgYXMgc3RyaW5nKSB8fCBcIjBcIixcbiAgICAxMFxuICApO1xuXG4gIGNvbnN0IGVycm9yczogUG9zdEVycm9yID0ge307XG4gIGlmICghdGl0bGUpIGVycm9ycy50aXRsZSA9IHRydWU7XG4gIGlmICghc2x1ZykgZXJyb3JzLnNsdWcgPSB0cnVlO1xuICBpZiAoIW1hcmtkb3duKSBlcnJvcnMubWFya2Rvd24gPSB0cnVlO1xuICBpZiAoIWRlc2NyaXB0aW9uKSBlcnJvcnMuZGVzY3JpcHRpb24gPSB0cnVlO1xuICBpZiAoIWltYWdlVXJsKSBlcnJvcnMuZGVzY3JpcHRpb24gPSB0cnVlO1xuICBpZiAoIWltYWdlQWx0KSBlcnJvcnMuZGVzY3JpcHRpb24gPSB0cnVlO1xuICBpZiAoIXRhZ3MpIGVycm9ycy5kZXNjcmlwdGlvbiA9IHRydWU7XG5cbiAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIGludmFyaWFudCh0eXBlb2YgdGl0bGUgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIHNsdWcgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIG1hcmtkb3duID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBkZXNjcmlwdGlvbiA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgYXV0aG9ySWQgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGlzUHVibGlzaGVkID09PSBcImJvb2xlYW5cIik7XG4gIGludmFyaWFudCh0eXBlb2YgcHVibGlzaERhdGUgPT09IFwibnVtYmVyXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGltYWdlVXJsID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBpbWFnZUFsdCA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgdGFncyA9PT0gXCJvYmplY3RcIik7XG5cbiAgYXdhaXQgYWRkQmxvZ1Bvc3Qoe1xuICAgIGF1dGhvcklkLFxuICAgIHRpdGxlLFxuICAgIHNsdWcsXG4gICAgbWFya2Rvd24sXG4gICAgaXNQdWJsaXNoZWQsXG4gICAgcHVibGlzaERhdGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgaW1hZ2VVcmwsXG4gICAgaW1hZ2VBbHQsXG4gICAgdGFncyxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2Jsb2dcIik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdQb3N0KCkge1xuICBjb25zdCB7XG4gICAgYXV0aG9ySWQsXG4gICAgaXNQdWJsaXNoZWQ6IGluaXRJc1B1Ymxpc2hlZCxcbiAgICB0aXRsZSxcbiAgICBzbHVnLFxuICAgIG1hcmtkb3duOiBpbml0TWFya2Rvd24sXG4gICAgcHVibGlzaERhdGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgaW1hZ2VVcmwsXG4gICAgaW1hZ2VBbHQsXG4gICAgdGFncyxcbiAgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGU8RGF0ZSB8IG51bGw+KG5ldyBEYXRlKHB1Ymxpc2hEYXRlKSk7XG4gIGNvbnN0IFttYXJrZG93biwgc2V0TWFya2Rvd25dID0gdXNlU3RhdGU8c3RyaW5nPihpbml0TWFya2Rvd24pO1xuICBjb25zdCBbaXNQdWJsaXNoZWQsIHNldElzUHVibGlzaGVkXSA9IHVzZVN0YXRlKGluaXRJc1B1Ymxpc2hlZCk7XG4gIGNvbnN0IGVycm9ycyA9IHVzZUFjdGlvbkRhdGEoKTtcbiAgZnVuY3Rpb24gaGFuZGxlRWRpdG9yQ2hhbmdlKHZhbHVlKSB7XG4gICAgc2V0TWFya2Rvd24odmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RWRpdFBvc3RcbiAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgYXV0aG9ySWQ9e2F1dGhvcklkfVxuICAgICAgaXNQdWJsaXNoZWQ9e2lzUHVibGlzaGVkfVxuICAgICAgc2V0SXNQdWJsaXNoZWQ9e3NldElzUHVibGlzaGVkfVxuICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgIHNldERhdGU9e3NldERhdGV9XG4gICAgICBtYXJrZG93bj17bWFya2Rvd259XG4gICAgICBoYW5kbGVFZGl0b3JDaGFuZ2U9e2hhbmRsZUVkaXRvckNoYW5nZX1cbiAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgIHNsdWc9e3NsdWd9XG4gICAgICBpbWFnZVVybD17aW1hZ2VVcmx9XG4gICAgICBpbWFnZUFsdD17aW1hZ2VBbHR9XG4gICAgICB0YWdzPXt0YWdzPy5qb2luKFwiLCBcIikgfHwgXCJcIn1cbiAgICAvPlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHtcbiAgQ29sbGVjdGlvblJlZmVyZW5jZSxcbiAgRG9jdW1lbnRSZWZlcmVuY2UsXG4gIFF1ZXJ5LFxufSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwifi9maXJlYmFzZS9maXJlYmFzZUFkbWluLnNlcnZlclwiO1xuXG5jb25zdCBCTE9HX1BPU1RTX0NPTExFQ1RJT04gPSBcImJsb2dQb3N0c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJsb2dQb3N0IHtcbiAgYXV0aG9ySWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgc2x1Zzogc3RyaW5nO1xuICBtYXJrZG93bjogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpc1B1Ymxpc2hlZDogYm9vbGVhbjtcbiAgcHVibGlzaERhdGU6IG51bWJlcjtcbiAgaW1hZ2VVcmw6IHN0cmluZztcbiAgaW1hZ2VBbHQ6IHN0cmluZztcbiAgdGFnczogc3RyaW5nW107XG59XG5leHBvcnQgaW50ZXJmYWNlIEJsb2dQb3N0V2l0aElkIGV4dGVuZHMgQmxvZ1Bvc3Qge1xuICBpZDogc3RyaW5nO1xufVxuXG5jb25zdCBnZXRDb2xsZWN0aW9uUmVmID0gKCkgPT5cbiAgZ2V0RmlyZXN0b3JlKCkuY29sbGVjdGlvbihcbiAgICBCTE9HX1BPU1RTX0NPTExFQ1RJT05cbiAgKSBhcyBDb2xsZWN0aW9uUmVmZXJlbmNlPEJsb2dQb3N0PjtcblxuY29uc3QgZ2V0RG9jUmVmZXJlbmNlID0gKGJsb2dQb3N0SWQpID0+XG4gIGdldENvbGxlY3Rpb25SZWYoKS5kb2MoYmxvZ1Bvc3RJZCkgYXMgRG9jdW1lbnRSZWZlcmVuY2U8QmxvZ1Bvc3Q+O1xuXG5jb25zdCBnZXRRdWVyeSA9ICgpID0+IGdldENvbGxlY3Rpb25SZWYoKSBhcyBRdWVyeTxCbG9nUG9zdD47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxCbG9nUG9zdHMoKTogUHJvbWlzZTxCbG9nUG9zdFdpdGhJZFtdPiB7XG4gIGNvbnN0IHF1ZXJ5UmVmID0gZ2V0UXVlcnkoKTtcbiAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IHF1ZXJ5UmVmLmdldCgpO1xuICByZXR1cm4gcXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJsb2dQb3N0KGJsb2dQb3N0SWQpOiBQcm9taXNlPEJsb2dQb3N0V2l0aElkIHwgbnVsbD4ge1xuICBjb25zdCBkb2NSZWYgPSBnZXREb2NSZWZlcmVuY2UoYmxvZ1Bvc3RJZCk7XG4gIGNvbnN0IGRvY1NuYXAgPSBhd2FpdCBkb2NSZWYuZ2V0KCk7XG4gIGlmIChkb2NTbmFwLmV4aXN0cykge1xuICAgIHJldHVybiB7IGlkOiBkb2NSZWYuaWQsIC4uLmRvY1NuYXA/LmRhdGEoKSBhcyBCbG9nUG9zdCB9IHx8IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgLy8gZG9jLmRhdGEoKSB3aWxsIGJlIHVuZGVmaW5lZCBpbiB0aGlzIGNhc2VcbiAgICBjb25zb2xlLmxvZyhcIk5vIHN1Y2ggZG9jdW1lbnQhXCIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRCbG9nUG9zdChibG9nUG9zdDogQmxvZ1Bvc3QpOiBQcm9taXNlPEJsb2dQb3N0PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZG9jUmVmID0gYXdhaXQgZ2V0RG9jUmVmZXJlbmNlKGJsb2dQb3N0LnNsdWcpLnNldChibG9nUG9zdCk7XG5cbiAgICBjb25zdCBuZXdCbG9nUG9zdCA9IGF3YWl0IGdldEJsb2dQb3N0KGJsb2dQb3N0LnNsdWcpO1xuICAgIGlmICghbmV3QmxvZ1Bvc3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgbmV3IGRhdGEgcG9pbnRcIik7XG4gICAgfVxuICAgIHJldHVybiBuZXdCbG9nUG9zdDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZG9jdW1lbnQ6IFwiLCBlKTtcbiAgICB0aHJvdyBlO1xuICB9XG59XG4iLCAiaW1wb3J0IHR5cGUge1xuICBDb2xsZWN0aW9uUmVmZXJlbmNlLFxuICBEb2N1bWVudFJlZmVyZW5jZSxcbiAgUXVlcnksXG59IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJ+L2ZpcmViYXNlL2ZpcmViYXNlQWRtaW4uc2VydmVyXCI7XG5pbXBvcnQgeyBBcHBVc2VyLCBBcHBVc2VyV2l0aElkLCBBUFBfVVNFUlNfQ09MTEVDVElPTiB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IGdldENvbGxlY3Rpb25SZWYgPSAoKSA9PlxuICBnZXRGaXJlc3RvcmUoKS5jb2xsZWN0aW9uKFxuICAgIEFQUF9VU0VSU19DT0xMRUNUSU9OXG4gICkgYXMgQ29sbGVjdGlvblJlZmVyZW5jZTxBcHBVc2VyPjtcblxuY29uc3QgZ2V0RG9jUmVmZXJlbmNlID0gKGFwcFVzZXJJZCkgPT5cbiAgZ2V0Q29sbGVjdGlvblJlZigpLmRvYyhhcHBVc2VySWQpIGFzIERvY3VtZW50UmVmZXJlbmNlPEFwcFVzZXI+O1xuXG5jb25zdCBnZXRRdWVyeSA9ICh1c2VySWQpID0+XG4gIGdldENvbGxlY3Rpb25SZWYoKS53aGVyZShcInVzZXJJZFwiLCBcIj09XCIsIHVzZXJJZCkgYXMgUXVlcnk8QXBwVXNlcj47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxBcHBVc2Vycyh1c2VySWQpOiBQcm9taXNlPEFwcFVzZXJXaXRoSWRbXT4ge1xuICBjb25zdCBxdWVyeVJlZiA9IGdldFF1ZXJ5KHVzZXJJZCk7XG4gIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBxdWVyeVJlZi5nZXQoKTtcbiAgcmV0dXJuIHF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBcHBVc2VyKGFwcFVzZXJJZCk6IFByb21pc2U8QXBwVXNlciB8IG51bGw+IHtcbiAgY29uc3QgZG9jUmVmID0gZ2V0RG9jUmVmZXJlbmNlKGFwcFVzZXJJZCk7XG4gIGNvbnN0IGRvY1NuYXAgPSBhd2FpdCBkb2NSZWYuZ2V0KCk7XG4gIGlmIChkb2NTbmFwLmV4aXN0cykge1xuICAgIHJldHVybiBkb2NTbmFwPy5kYXRhKCkgfHwgbnVsbDtcbiAgfSBlbHNlIHtcbiAgICAvLyBkb2MuZGF0YSgpIHdpbGwgYmUgdW5kZWZpbmVkIGluIHRoaXMgY2FzZVxuICAgIGNvbnNvbGUubG9nKFwiTm8gc3VjaCBkb2N1bWVudCFcIik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEFwcFVzZXIoXG4gIGFwcFVzZXJJZDogc3RyaW5nXG4pOiBQcm9taXNlPEFwcFVzZXI+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBleGlzdGluZ0FwcFVzZXIgPSBhd2FpdCBnZXRBcHBVc2VyKGFwcFVzZXJJZCk7XG4gICAgaWYgKGV4aXN0aW5nQXBwVXNlcikge1xuICAgICAgcmV0dXJuIGV4aXN0aW5nQXBwVXNlcjtcbiAgICB9XG4gICAgYXdhaXQgZ2V0RG9jUmVmZXJlbmNlKGFwcFVzZXJJZCkuc2V0KHtwZXJtaXNzaW9uczogW119KTtcblxuICAgIGNvbnN0IG5ld0FwcFVzZXIgPSBhd2FpdCBnZXRBcHBVc2VyKGFwcFVzZXJJZCk7XG4gICAgaWYgKCFuZXdBcHBVc2VyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IG5ldyBkYXRhIHBvaW50XCIpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3QXBwVXNlcjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZG9jdW1lbnQ6IFwiLCBlKTtcbiAgICB0aHJvdyBlO1xuICB9XG59XG4iLCAiZXhwb3J0IGludGVyZmFjZSBBcHBVc2VyIHtcbiAgcGVybWlzc2lvbnM6IHN0cmluZ1tdO1xufVxuZXhwb3J0IGludGVyZmFjZSBBcHBVc2VyV2l0aElkIGV4dGVuZHMgQXBwVXNlciB7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBBUFBfVVNFUlNfQ09MTEVDVElPTiA9IFwiYXBwVXNlcnNcIjsiLCAiaW1wb3J0IHsgRm9ybSwgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IEVkaXRvciBmcm9tIFwiQG1vbmFjby1lZGl0b3IvcmVhY3RcIjtcbmltcG9ydCB7XG4gIEZvcm1Db250cm9sTGFiZWwsXG4gIFRleHRGaWVsZCxcbiAgU3dpdGNoLFxuICBTdGFjayxcbiAgQnV0dG9uLFxuICBCb3gsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBEYXRlVGltZVBpY2tlciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvRGF0ZVRpbWVQaWNrZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEVkaXRQb3N0KHtcbiAgZXJyb3JzLFxuICBhdXRob3JJZCxcbiAgaXNQdWJsaXNoZWQsXG4gIHNldElzUHVibGlzaGVkLFxuICBkYXRlLFxuICBzZXREYXRlLFxuICBtYXJrZG93bixcbiAgaGFuZGxlRWRpdG9yQ2hhbmdlLFxuICB0aXRsZSA9IFwiXCIsXG4gIGRlc2NyaXB0aW9uID0gXCJcIixcbiAgc2x1ZyA9IFwiXCIsXG4gIGltYWdlVXJsID0gXCJcIixcbiAgaW1hZ2VBbHQgPSBcIlwiLFxuICB0YWdzID0gXCJcIixcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8U3RhY2sgc3BhY2luZz17Mn0gc3g9e3sgcDogNCB9fT5cbiAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiYXV0aG9ySWRcIiB2YWx1ZT17YXV0aG9ySWR9IC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgIG5hbWU9XCJpc1B1Ymxpc2hlZFwiXG4gICAgICAgICAgdmFsdWU9e2lzUHVibGlzaGVkLnRvU3RyaW5nKCl9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIm1hcmtkb3duXCIgdmFsdWU9e21hcmtkb3dufSAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICBuYW1lPVwicHVibGlzaERhdGVcIlxuICAgICAgICAgIHZhbHVlPXtkYXRlPy5nZXRUaW1lKCkudG9TdHJpbmcoKX1cbiAgICAgICAgLz5cbiAgICAgICAgPFN0YWNrXG4gICAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fVxuICAgICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgICAgc3g9e3sgcDogNCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cInN0cmV0Y2hcIlxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICBtaW5XaWR0aDogeyBtZDogXCIzMjBweFwiIH0sXG4gICAgICAgICAgICAgIGZsZXg6IHsgbWQ6IFwiMCAwIDMyMHB4XCIgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17aXNQdWJsaXNoZWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldElzUHVibGlzaGVkKGV2ZW50LnRhcmdldC5jaGVja2VkKX1cbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBcImFyaWEtbGFiZWxcIjogXCJjb250cm9sbGVkXCIgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtpc1B1Ymxpc2hlZCA/IFwiSXMgUHVibGlzaGVkXCIgOiBcIk5vdCBQdWJsaXNoZWRcIn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPERhdGVUaW1lUGlja2VyIGRhdGU9e2RhdGV9IHNldERhdGU9e3NldERhdGV9IHZhcmlhbnQ9XCJmaWxsZWRcIiAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycz8udGl0bGV9XG4gICAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUaXRsZVwiXG4gICAgICAgICAgICAgICAgaGVscGVyVGV4dD17ZXJyb3JzPy50aXRsZSA/IFwiVGl0bGUgaXMgcmVxdWlyZWRcIiA6IG51bGx9XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycz8uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgaGVscGVyVGV4dD17XG4gICAgICAgICAgICAgICAgICBlcnJvcnM/LmRlc2NyaXB0aW9uID8gXCJEZXNjcmlwdGlvbiBpcyByZXF1aXJlZFwiIDogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy5zbHVnfVxuICAgICAgICAgICAgICAgIGlkPVwic2x1Z1wiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJTbHVnXCJcbiAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnM/LnNsdWcgPyBcIlNsdWcgaXMgcmVxdWlyZWRcIiA6IG51bGx9XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInNsdWdcIlxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2x1Z31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LmltYWdlVXJsfVxuICAgICAgICAgICAgICAgIGlkPVwiaW1hZ2VVcmxcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSW1hZ2UgVXJsXCJcbiAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnM/LmltYWdlVXJsID8gXCJpbWFnZVVybCBpcyByZXF1aXJlZFwiIDogbnVsbH1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VVcmxcIlxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aW1hZ2VVcmx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy5pbWFnZUFsdH1cbiAgICAgICAgICAgICAgICBpZD1cImltYWdlQWx0XCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkltYWdlIEFsdCBUZXh0XCJcbiAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnM/LmltYWdlQWx0ID8gXCJpbWFnZUFsdCBpcyByZXF1aXJlZFwiIDogbnVsbH1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VBbHRcIlxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aW1hZ2VBbHR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy50YWdzfVxuICAgICAgICAgICAgICAgIGlkPVwidGFnc1wiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUYWdzXCJcbiAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnM/LnRhZ3MgPyBcInRhZ3MgaXMgcmVxdWlyZWRcIiA6IG51bGx9XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInRhZ3NcIlxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGFnc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBtZDogXCJjb2x1bW4tcmV2ZXJzZVwiIH19XG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCJcbiAgICAgICAgICAgIHN4PXt7IGZsZXg6IFwiMSAxXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94IHN4PXt7IGZsZXg6IFwiMSAxXCIsIG1pbkhlaWdodDogXCI1MDBweFwiIH19PlxuICAgICAgICAgICAgICA8RWRpdG9yXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiODB2aFwiXG4gICAgICAgICAgICAgICAgZGVmYXVsdExhbmd1YWdlPVwibWFya2Rvd25cIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVFZGl0b3JDaGFuZ2V9XG4gICAgICAgICAgICAgICAgdGhlbWU9XCJ2cy1kYXJrXCJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e21hcmtkb3dufVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIHsvKiBsYWJlbD1cIk1hcmtkb3duXCJcbiAgICAgICAgICAgIC8vIGhlbHBlclRleHQ9e2Vycm9ycz8ubWFya2Rvd24gPyA8ZW0+TWFya2Rvd24gaXMgcmVxdWlyZWQ8L2VtPiA6IG51bGx9ICovfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXtcInJvd1wifSBzcGFjaW5nPXsyfSBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgICAgICAgICAgdG89e2AvYmxvZy8ke3NsdWd9YH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFByZXZpZXdcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJjb250YWluZWRcIj5cbiAgICAgICAgICAgICAgICBDcmVhdGUgUG9zdFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvRm9ybT5cbiAgICA8L1N0YWNrPlxuICApO1xufVxuIiwgImltcG9ydCBUZXh0RmllbGQsIHtCYXNlVGV4dEZpZWxkUHJvcHN9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcbmltcG9ydCBBZGFwdGVyRGF0ZUZucyBmcm9tICdAbXVpL2xhYi9BZGFwdGVyRGF0ZUZucyc7XG5pbXBvcnQgTG9jYWxpemF0aW9uUHJvdmlkZXIgZnJvbSAnQG11aS9sYWIvTG9jYWxpemF0aW9uUHJvdmlkZXInO1xuaW1wb3J0IE1VSURhdGVUaW1lUGlja2VyIGZyb20gJ0BtdWkvbGFiL0RhdGVUaW1lUGlja2VyJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgQmFzZVRleHRGaWVsZFByb3BzIHtcbiAgZGF0ZTogRGF0ZSB8IG51bGw7XG4gIHNldERhdGU6IChuZXdEYXRlOiBEYXRlIHwgbnVsbCkgPT4gdm9pZFxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBEYXRlVGltZVBpY2tlcih7ZGF0ZSwgc2V0RGF0ZSwgLi4udGV4dEZpZWxkUHJvcHN9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRhdGVGbnN9PlxuICAgICAgPE1VSURhdGVUaW1lUGlja2VyXG4gICAgICAgIHJlbmRlcklucHV0PXsocHJvcHMpID0+IDxUZXh0RmllbGQgZnVsbFdpZHRoIHsuLi5wcm9wc30gey4uLnRleHRGaWVsZFByb3BzfS8+fVxuICAgICAgICBsYWJlbD1cIkRhdGVUaW1lUGlja2VyXCJcbiAgICAgICAgdmFsdWU9e2RhdGV9XG4gICAgICAgIG9uQ2hhbmdlPXsobmV3RGF0ZSkgPT4ge1xuICAgICAgICAgIHNldERhdGUobmV3RGF0ZSk7XG4gICAgICAgIH19XG4gICAgICAgIFxuICAgICAgLz5cbiAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxuICApO1xufSIsICJpbXBvcnQgeyByZWRpcmVjdCwgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEsIHVzZUFjdGlvbkRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5pbXBvcnQgeyByZXF1aXJlVXNlcklkIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcbmltcG9ydCB7IEVkaXRGbG9vclBsYW4gfSBmcm9tIFwifi9jb21wb25lbnRzL0VkaXRGbG9vclBsYW5cIjtcbmltcG9ydCB7IGFkZEZsb29yUGxhbiB9IGZyb20gXCJ+L2RiL2Zsb29yUGxhbnMuc2VydmVyXCI7XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHsgdXNlcklkOiBzdHJpbmcgfTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe1xuICByZXF1ZXN0LFxuICBwYXJhbXMsXG59KTogUHJvbWlzZTxMb2FkZXJEYXRhIHwgUmVzcG9uc2U+ID0+IHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgcmVxdWlyZVVzZXJJZChyZXF1ZXN0KTtcblxuICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0ge1xuICAgIHVzZXJJZCxcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cbnR5cGUgUGxhbkVycm9yID0ge1xuICBvd25lcj86IGJvb2xlYW47XG4gIHRpdGxlPzogYm9vbGVhbjtcbiAgZGVzY3JpcHRpb24/OiBib29sZWFuO1xuICBjb3N0PzogYm9vbGVhbjtcbiAgLy8gVE9ETz86IHdoZW4gd2UgaGF2ZSB1c2VycyB0aGVuIGxldHMgZG8gdGhpc1xuICAvLyBwb3B1bGFyaXR5Pzoge1xuICAvLyAgIHJhdGluZz86IG51bWJlcjtcbiAgLy8gICBjb3VudD86IG51bWJlcjtcbiAgLy8gfTtcbiAgZ2l0aHViT3duZXI/OiBib29sZWFuO1xuICBnaXRodWJSZXBvPzogYm9vbGVhbjtcbiAgc2V0dXBUaW1lPzogYm9vbGVhbjtcbiAgdGFncz86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcblxuICBjb25zdCBvd25lciA9IGZvcm1EYXRhLmdldChcIm93bmVyXCIpO1xuICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpO1xuICBjb25zdCBjb3N0ID0gZm9ybURhdGEuZ2V0KFwiY29zdFwiKTtcbiAgY29uc3QgZ2l0aHViT3duZXIgPSBmb3JtRGF0YS5nZXQoXCJnaXRodWJPd25lclwiKTtcbiAgY29uc3QgZ2l0aHViUmVwbyA9IGZvcm1EYXRhLmdldChcImdpdGh1YlJlcG9cIik7XG4gIGNvbnN0IHNldHVwVGltZSA9IGZvcm1EYXRhLmdldChcInNldHVwVGltZVwiKTtcbiAgY29uc3QgdGFncyA9XG4gICAgU3RyaW5nKGZvcm1EYXRhLmdldChcInRhZ3NcIikpXG4gICAgICA/LnNwbGl0KFwiLFwiKVxuICAgICAgLm1hcCgod29yZCkgPT4gd29yZC50cmltKCkpIHx8IFtdO1xuXG4gIGNvbnN0IGVycm9yczogUGxhbkVycm9yID0ge307XG4gIGlmICghb3duZXIpIGVycm9ycy5vd25lciA9IHRydWU7XG4gIGlmICghdGl0bGUpIGVycm9ycy50aXRsZSA9IHRydWU7XG4gIGlmICghZGVzY3JpcHRpb24pIGVycm9ycy5kZXNjcmlwdGlvbiA9IHRydWU7XG4gIGlmICghY29zdCkgZXJyb3JzLmNvc3QgPSB0cnVlO1xuICBpZiAoIWdpdGh1Yk93bmVyKSBlcnJvcnMuZ2l0aHViT3duZXIgPSB0cnVlO1xuICBpZiAoIWdpdGh1YlJlcG8pIGVycm9ycy5naXRodWJSZXBvID0gdHJ1ZTtcbiAgaWYgKCFzZXR1cFRpbWUpIGVycm9ycy5zZXR1cFRpbWUgPSB0cnVlO1xuXG4gIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCkge1xuICAgIHJldHVybiBlcnJvcnM7XG4gIH1cblxuICBpbnZhcmlhbnQodHlwZW9mIG93bmVyID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiB0aXRsZSA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgZGVzY3JpcHRpb24gPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGNvc3QgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGdpdGh1Yk93bmVyID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBnaXRodWJSZXBvID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBzZXR1cFRpbWUgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIHRhZ3MgPT09IFwib2JqZWN0XCIpO1xuXG4gIGF3YWl0IGFkZEZsb29yUGxhbih7XG4gICAgb3duZXIsXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgY29zdCxcbiAgICBnaXRodWJPd25lcixcbiAgICBnaXRodWJSZXBvLFxuICAgIHNldHVwVGltZSxcbiAgICB0YWdzLFxuICB9KTtcblxuICByZXR1cm4gcmVkaXJlY3QoXCIvZmxvb3ItcGxhbnNcIik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdQbGFuKCkge1xuICBjb25zdCB7IHVzZXJJZCB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuICBjb25zdCBlcnJvcnMgPSB1c2VBY3Rpb25EYXRhKCk7XG4gIHJldHVybiA8RWRpdEZsb29yUGxhbiBpc0NyZWF0ZSBlcnJvcnM9e2Vycm9yc30gb3duZXI9e3VzZXJJZH0gLz47XG59XG4iLCAiaW1wb3J0IFNlYXJjaEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoXCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgRGl2aWRlcixcbiAgRm9ybUNvbnRyb2xMYWJlbCxcbiAgRm9ybUdyb3VwLFxuICBJbnB1dEFkb3JubWVudCxcbiAgU3RhY2ssXG4gIFN3aXRjaCxcbiAgVGV4dEZpZWxkLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgTGluaywgdXNlTG9hZGVyRGF0YSwgTG9hZGVyRnVuY3Rpb24sIEZvcm0gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IEFwcFBhcGVyIH0gZnJvbSBcIn4vY29tcG9uZW50cy9BcHBQYXBlclwiO1xuaW1wb3J0IHsgRmxvb3JQbGFuQ2FyZCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvRmxvb3JQbGFuQ2FyZFwiO1xuaW1wb3J0IHtcbiAgRmxvb3JQbGFuV2l0aElkLFxuICBnZXRGaWx0ZXJlZEZsb29yUGxhbnMsXG59IGZyb20gXCJ+L2RiL2Zsb29yUGxhbnMuc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRVc2VySWQgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuXG5pbnRlcmZhY2UgTG9hZGVyRGF0YSB7XG4gIGZsb29yUGxhbnM6IEZsb29yUGxhbldpdGhJZFtdO1xuICB1c2VySWQ6IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtcbiAgcmVxdWVzdCxcbn0pOiBQcm9taXNlPExvYWRlckRhdGEgfCBSZXNwb25zZT4gPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICBjb25zdCBzaG93TWluZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwic2hvdy1taW5lXCIpID09PSBcIm9uXCI7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJxdWVyeS1zdHJpbmdcIik7XG4gIGNvbnN0IGZsb29yUGxhbnMgPSBhd2FpdCBnZXRGaWx0ZXJlZEZsb29yUGxhbnMoe1xuICAgIHVzZXJJZDogc2hvd01pbmUgPyB1c2VySWQgOiBudWxsLFxuICAgIHF1ZXJ5U3RyaW5nOiBxdWVyeVN0cmluZyB8fCBudWxsLFxuICB9KTtcbiAgcmV0dXJuIHsgZmxvb3JQbGFucywgdXNlcklkIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICBjb25zdCB7IGZsb29yUGxhbnMsIHVzZXJJZCB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuICByZXR1cm4gKFxuICAgIDxTdGFja1xuICAgICAgYWxpZ25JdGVtcz17XCJzdHJldGNoXCJ9XG4gICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgc3BhY2luZz17NH1cbiAgICAgIHN4PXt7XG4gICAgICAgIG1heFdpZHRoOiBcIjkwMHB4XCIsXG4gICAgICAgIG1hcmdpbjogXCIxMjBweCBhdXRvXCIsXG4gICAgICAgIHdpZHRoOiBcIjgwJVwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8QXBwUGFwZXI+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIFNlYXJjaCB0byBmaW5kIGEgZmxvb3IgcGxhbiB0byBnZXQgeW91ciBhcHAgb2ZmIHRoZSBncm91bmQuXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPERpdmlkZXI+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgdGV4dEFsaWduPVwiY2VudGVyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgT1JcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvRGl2aWRlcj5cbiAgICAgICAgPEJ1dHRvbiBjb21wb25lbnQ9e0xpbmt9IHRvPVwiL2Zsb29yLXBsYW5zL2NyZWF0ZVwiIHNpemU9e1wibGFyZ2VcIn0+XG4gICAgICAgICAgQWRkIEEgRmxvb3IgUGxhbiBUbyBTaGFyZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQXBwUGFwZXI+XG4gICAgICA8U3RhY2tcbiAgICAgICAgY29tcG9uZW50PXtGb3JtfVxuICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19XG4gICAgICAgIGFsaWduSXRlbXM9e3sgeHM6IFwic3RyZXRjaFwiLCBtZDogXCJjZW50ZXJcIiB9fVxuICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICBzeD17e1xuICAgICAgICAgIG1hcmdpbjogXCIyMHB4IDBcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGlkPVwicXVlcnktc3RyaW5nXCJcbiAgICAgICAgICBsYWJlbD1cIlNlYXJjaCBmb3IgRmxvb3IgUGxhblwiXG4gICAgICAgICAgbmFtZT1cInF1ZXJ5LXN0cmluZ1wiXG4gICAgICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ6IChcbiAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxuICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGZsZXg6IFwiMVwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgIGNvbnRyb2w9ezxTd2l0Y2ggbmFtZT1cInNob3ctbWluZVwiIC8+fVxuICAgICAgICAgICAgbGFiZWw9XCJTaG93IE15IEZsb29yIFBsYW5zXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgRmlsdGVyXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9TdGFjaz5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAge2Zsb29yUGxhbnMubWFwKChmbG9vclBsYW4pID0+IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBrZXk9e2Zsb29yUGxhbi5pZH1cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBmbGV4OiB7IHhzOiBcIjAgMCA4MCVcIiwgbWQ6IFwiMCAwIDQwJVwiLCBsZzogXCIwIDAgMzAlXCIgfSxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGbG9vclBsYW5DYXJkXG4gICAgICAgICAgICAgICAgdGl0bGU9e2Zsb29yUGxhbi50aXRsZX1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17Zmxvb3JQbGFuLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIGNvc3Q9e2Zsb29yUGxhbi5jb3N0fVxuICAgICAgICAgICAgICAgIHNldHVwVGltZT17Zmxvb3JQbGFuLnNldHVwVGltZX1cbiAgICAgICAgICAgICAgICBvd25lcj17Zmxvb3JQbGFuLm93bmVyfVxuICAgICAgICAgICAgICAgIGdpdGh1Yk93bmVyPXtmbG9vclBsYW4uZ2l0aHViT3duZXJ9XG4gICAgICAgICAgICAgICAgZ2l0aHViUmVwbz17Zmxvb3JQbGFuLmdpdGh1YlJlcG99XG4gICAgICAgICAgICAgICAgdGFncz17Zmxvb3JQbGFuLnRhZ3N9XG4gICAgICAgICAgICAgICAgaWQ9e2Zsb29yUGxhbi5pZH1cbiAgICAgICAgICAgICAgICB1c2VySWQ9e3VzZXJJZH1cblxuICAgICAgICAgICAgICAgIC8vIHBvcHVsYXJpdHk9e3tcbiAgICAgICAgICAgICAgICAvLyAgIHJhdGluZzogNC41LFxuICAgICAgICAgICAgICAgIC8vICAgY291bnQ6IDMsXG4gICAgICAgICAgICAgICAgLy8gfX1cbiAgICAgICAgICAgICAgICAvLyB1cmw9e1xuICAgICAgICAgICAgICAgIC8vICAgXCJodHRwczovL2dpdGh1Yi5jb20vZmxvb3JwbGFuL2Zsb29ycGxhbiN3ZWxjb21lLXRvLWZsb29ycGxhblwiXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApKX1cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9TdGFjaz5cbiAgKTtcbn1cbiIsICJpbXBvcnQge1xuICBCdXR0b24sXG4gIFR5cG9ncmFwaHksXG4gIExpbmssXG4gIENhcmQsXG4gIENhcmRBY3Rpb25zLFxuICBDYXJkQ29udGVudCxcbiAgU3RhY2ssXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBTdGFySWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TdGFyXCI7XG5pbXBvcnQgU3RhckJvcmRlckljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU3RhckJvcmRlclwiO1xuaW1wb3J0IFN0YXJIYWxmSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TdGFySGFsZlwiO1xuaW1wb3J0IE1vbmV0aXphdGlvbk9uSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Nb25ldGl6YXRpb25PblwiO1xuaW1wb3J0IEFjY2Vzc1RpbWVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0FjY2Vzc1RpbWVcIjtcbmludGVyZmFjZSBGbG9vclBsYW5DYXJkUHJvcHMge1xuICBvd25lcjogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjb3N0OiBzdHJpbmc7XG4gIC8vIFRPRE86IHdoZW4gd2UgaGF2ZSB1c2VycyB0aGVuIGxldHMgZG8gdGhpc1xuICAvLyBwb3B1bGFyaXR5OiB7XG4gIC8vICAgcmF0aW5nOiBudW1iZXI7XG4gIC8vICAgY291bnQ6IG51bWJlcjtcbiAgLy8gfTtcbiAgZ2l0aHViT3duZXI6IHN0cmluZztcbiAgZ2l0aHViUmVwbzogc3RyaW5nO1xuICBzZXR1cFRpbWU6IHN0cmluZztcbiAgdGFnczogc3RyaW5nW107XG4gIGlkOiBzdHJpbmc7XG4gIHVzZXJJZDogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZsb29yUGxhbkNhcmQoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGNvc3QsXG4gIGdpdGh1Yk93bmVyLFxuICBnaXRodWJSZXBvLFxuICBzZXR1cFRpbWUsXG4gIHRhZ3MsXG4gIGlkLFxuICB1c2VySWQsXG4gIG93bmVyLFxufTogRmxvb3JQbGFuQ2FyZFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPENhcmQgc3g9e3sgbWFyZ2luOiBcIjIwcHggYXV0b1wiIH19PlxuICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXtcInJvd1wifSBqdXN0aWZ5Q29udGVudD17XCJzcGFjZS1iZXR3ZWVuXCJ9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17XCJyb3dcIn0gc3BhY2luZz17MX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICA8QWNjZXNzVGltZUljb24gZm9udFNpemU9XCJpbmhlcml0XCIgLz5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAge3NldHVwVGltZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICB7LyogPE1vbmV0aXphdGlvbk9uSWNvbiBmb250U2l6ZT1cImluaGVyaXRcIi8+ICovfVxuICAgICAgICAgICAgICB7Y29zdH1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPENhcmRBY3Rpb25zXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgey8qIDxTdGFjayBkaXJlY3Rpb249e1wicm93XCJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBzcGFjaW5nPXsyfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIlxuICAgICAgICAgICAgY29tcG9uZW50PXtTdGFja31cbiAgICAgICAgICAgIGRpcmVjdGlvbj17XCJyb3dcIn1cbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtuZXcgQXJyYXkocGFyc2VJbnQocG9wdWxhcml0eS5yYXRpbmcudG9TdHJpbmcoKSwgMTApKVxuICAgICAgICAgICAgICAuZmlsbChudWxsKVxuICAgICAgICAgICAgICAubWFwKCh2YWwsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgIDxTdGFySWNvbiBrZXk9e2lkeH0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICB7cG9wdWxhcml0eS5yYXRpbmcgJSAxID4gMCA/IDxTdGFySGFsZkljb24gLz4gOiBudWxsfVxuICAgICAgICAgICAge25ldyBBcnJheSg1IC0gTWF0aC5jZWlsKHBvcHVsYXJpdHkucmF0aW5nKSlcbiAgICAgICAgICAgICAgLmZpbGwobnVsbClcbiAgICAgICAgICAgICAgLm1hcCgodmFsLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICA8U3RhckJvcmRlckljb24ga2V5PXtpZHh9IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAoe3BvcHVsYXJpdHkuY291bnR9KVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9TdGFjaz4gKi99XG4gICAgICAgIDxTdGFja1xuICAgICAgICAgIGRpcmVjdGlvbj17eyB4czogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX1cbiAgICAgICAgICBhbGlnbkl0ZW1zPXt7IHhzOiBcInN0cmV0Y2hcIiwgbWQ6IFwiY2VudGVyXCIgfX1cbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCJcbiAgICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtvd25lciA9PT0gdXNlcklkID8gKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1JvdXRlckxpbmt9XG4gICAgICAgICAgICAgIHRvPXtgL2Zsb29yLXBsYW5zLyR7aWR9L2VkaXRgfVxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBlZGl0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7Z2l0aHViT3duZXJ9LyR7Z2l0aHViUmVwb30jcmVhZG1lYH1cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEdldCBTdGFydGVkXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0NhcmRBY3Rpb25zPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5pbXBvcnQgeyBnZXRNRFhDb21wb25lbnQgfSBmcm9tIFwibWR4LWJ1bmRsZXIvY2xpZW50XCI7XG5pbXBvcnQgeyBCbG9nUG9zdFdpdGhJZCwgZ2V0QmxvZ1Bvc3QgfSBmcm9tIFwifi9kYi9ibG9nUG9zdHMuc2VydmVyXCI7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGYWIsIExpbmssIFBhcGVyLCBUeXBvZ3JhcGh5LCBCb3ggfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgQ29kZUJsb2NrIH0gZnJvbSBcIn4vY29tcG9uZW50cy9Db2RlQmxvY2tcIjtcbmltcG9ydCB7IGdldEFwcFVzZXIgfSBmcm9tIFwifi9kYi9hcHBVc2Vycy9hcHBVc2Vycy5zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFVzZXJJZCB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQgRWRpdEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRWRpdFwiO1xuaW1wb3J0IHsgZ2V0TWR4IH0gZnJvbSBcIn4vdXRpbHMvbWR4LnNlcnZlclwiO1xuXG5pbnRlcmZhY2UgTG9hZGVyRGF0YSBleHRlbmRzIEJsb2dQb3N0V2l0aElkIHtcbiAgY29kZTogc3RyaW5nO1xuICBpc0F1dGhvcjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe1xuICByZXF1ZXN0LFxuICBwYXJhbXMsXG59KTogUHJvbWlzZTxMb2FkZXJEYXRhPiA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcbiAgbGV0IGlzQXV0aG9yID0gZmFsc2U7XG4gIGlmICh1c2VySWQpIHtcbiAgICBjb25zdCBhcHBVc2VyID0gYXdhaXQgZ2V0QXBwVXNlcih1c2VySWQpO1xuICAgIGlmIChhcHBVc2VyPy5wZXJtaXNzaW9ucy5pbmNsdWRlcyhcImF1dGhvclwiKSkge1xuICAgICAgaXNBdXRob3IgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBpbnZhcmlhbnQocGFyYW1zLmJsb2dQb3N0SWQsIFwiZXhwZWN0ZWQgcGFyYW1zLnNsdWdcIik7XG4gIGNvbnN0IGJsb2dQb3N0ID0gYXdhaXQgZ2V0QmxvZ1Bvc3QocGFyYW1zLmJsb2dQb3N0SWQpO1xuICBpbnZhcmlhbnQoYmxvZ1Bvc3QsIFwiZXhwZWN0ZWQgYmxvZ1Bvc3RcIik7XG4gIGNvbnN0IHsgY29kZSwgZnJvbnRtYXR0ZXIgfSA9IGF3YWl0IGdldE1keChibG9nUG9zdC5tYXJrZG93bik7XG4gIHJldHVybiB7IC4uLmJsb2dQb3N0LCBjb2RlLCBpc0F1dGhvciB9O1xufTtcblxuY29uc3QgSDEgPSAocHJvcHMpID0+IChcbiAgPFR5cG9ncmFwaHlcbiAgICB2YXJpYW50PVwiaDFcIlxuICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgc3g9e3sgbWFyZ2luQm90dG9tOiAzIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcbmNvbnN0IEgyID0gKHByb3BzKSA9PiAoXG4gIDxUeXBvZ3JhcGh5XG4gICAgdmFyaWFudD1cImgyXCJcbiAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgc3g9e3sgbWFyZ2luQm90dG9tOiAzIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcbmNvbnN0IEgzID0gKHByb3BzKSA9PiAoXG4gIDxUeXBvZ3JhcGh5XG4gICAgdmFyaWFudD1cImgzXCJcbiAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgc3g9e3sgbWFyZ2luQm90dG9tOiAzIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcbmNvbnN0IEg0ID0gKHByb3BzKSA9PiAoXG4gIDxUeXBvZ3JhcGh5XG4gICAgdmFyaWFudD1cImg0XCJcbiAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgc3g9e3sgbWFyZ2luQm90dG9tOiAzIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcbmNvbnN0IEg1ID0gKHByb3BzKSA9PiAoXG4gIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIHN4PXt7IG1hcmdpbkJvdHRvbTogMyB9fSB7Li4ucHJvcHN9IC8+XG4pO1xuY29uc3QgSDYgPSAocHJvcHMpID0+IChcbiAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgc3g9e3sgbWFyZ2luQm90dG9tOiAzIH19IHsuLi5wcm9wc30gLz5cbik7XG5jb25zdCBQID0gKHByb3BzKSA9PiA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keVwiIGNvbXBvbmVudD1cInBcIiB7Li4ucHJvcHN9IC8+O1xuY29uc3QgQmxvY2txdW90ZSA9IChwcm9wcykgPT4gKFxuICA8VHlwb2dyYXBoeVxuICAgIHZhcmlhbnQ9XCJoNlwiXG4gICAgY29tcG9uZW50PXtQYXBlcn1cbiAgICBzeD17e1xuICAgICAgcGFkZGluZzogMixcbiAgICAgIG1hcmdpbjogMixcbiAgICAgIGJvcmRlckxlZnQ6ICh7IHBhbGV0dGUgfSkgPT4gYDJweCBzb2xpZCR7cGFsZXR0ZS5wcmltYXJ5Lm1haW59YCxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5jb25zdCBQcmUgPSAocHJvcHMpID0+IDxkaXYgey4uLnByb3BzfSAvPjtcbmNvbnN0IENvZGUgPSAocHJvcHMpID0+IDxDb2RlQmxvY2sgey4uLnByb3BzfSAvPjtcbmNvbnN0IEEgPSAocHJvcHMpID0+IDxMaW5rIHsuLi5wcm9wc30gLz47XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RTbHVnKCkge1xuICBjb25zdCB7IGlzQXV0aG9yLCBjb2RlLCBpbWFnZVVybCwgaW1hZ2VBbHQgfSA9IHVzZUxvYWRlckRhdGEoKTtcblxuICBjb25zdCBDb21wb25lbnQgPSB1c2VNZW1vKCgpID0+IGdldE1EWENvbXBvbmVudChjb2RlKSwgW2NvZGVdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveFxuICAgICAgICBjb21wb25lbnQ9e1BhcGVyfVxuICAgICAgICBzeD17e1xuICAgICAgICAgIG1hcmdpbjogXCIxNzhweCBhdXRvIDBweFwiLFxuICAgICAgICAgIG1heFdpZHRoOiBcIjkwMHB4XCIsXG4gICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICBwYWRkaW5nOiAzLFxuICAgICAgICAgIGJnY29sb3I6IFwiYmFja2dyb3VuZC5kZWZhdWx0XCIsXG4gICAgICAgICAgbWluSGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgY29tcG9uZW50PXtQYXBlcn1cbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYHVybCgke2ltYWdlVXJsfSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXJgLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjMyMHB4XCIsXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAge2lzQXV0aG9yID8gKFxuICAgICAgICAgIDxGYWJcbiAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJlZGl0XCJcbiAgICAgICAgICAgIGNvbXBvbmVudD17Um91dGVyTGlua31cbiAgICAgICAgICAgIHRvPVwiZWRpdFwiXG4gICAgICAgICAgICBzeD17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB0b3A6IDIwLCByaWdodDogMjAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RWRpdEljb24gLz5cbiAgICAgICAgICA8L0ZhYj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHtDb21wb25lbnQgPyAoXG4gICAgICAgICAgPENvbXBvbmVudFxuICAgICAgICAgICAgY29tcG9uZW50cz17e1xuICAgICAgICAgICAgICBoMTogSDEsXG4gICAgICAgICAgICAgIGgyOiBIMixcbiAgICAgICAgICAgICAgaDM6IEgzLFxuICAgICAgICAgICAgICBoNDogSDQsXG4gICAgICAgICAgICAgIGg1OiBINSxcbiAgICAgICAgICAgICAgaDY6IEg2LFxuICAgICAgICAgICAgICBwOiBQLFxuICAgICAgICAgICAgICBibG9ja3F1b3RlOiBCbG9ja3F1b3RlLFxuICAgICAgICAgICAgICBwcmU6IFByZSxcbiAgICAgICAgICAgICAgY29kZTogQ29kZSxcbiAgICAgICAgICAgICAgYTogQSxcblxuICAgICAgICAgICAgICAvLyBlbTogKHByb3BzKSA9PiA8aSBzdHlsZT17eyBjb2xvcjogXCJnb2xkZW5yb2RcIiB9fSB7Li4ucHJvcHN9IC8+LFxuICAgICAgICAgICAgICAvLyB3cmFwcGVyOiAoeyBjb21wb25lbnRzLCAuLi5yZXN0IH0pID0+IDxtYWluIHsuLi5yZXN0fSAvPixcbiAgICAgICAgICAgICAgLy8gUGxhbmV0OiAoKSA9PiBcIk5lcHR1bmVcIixcbiAgICAgICAgICAgICAgLy8gdGhlbWU6IHtcbiAgICAgICAgICAgICAgLy8gICB0ZXh0OiAocHJvcHMpID0+IDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcImdyZXlcIiB9fSB7Li4ucHJvcHN9IC8+LFxuICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IFBhcGVyLCBCb3ggfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcIkBtdWkvc3lzdGVtXCI7XG5pbXBvcnQgSGlnaGxpZ2h0LCB7IGRlZmF1bHRQcm9wcyB9IGZyb20gXCJwcmlzbS1yZWFjdC1yZW5kZXJlclwiO1xuaW1wb3J0IGRyYWN1bGEgZnJvbSBcInByaXNtLXJlYWN0LXJlbmRlcmVyL3RoZW1lcy9kcmFjdWxhXCI7XG5cbmNvbnN0IExpbmUgPSBzdHlsZWQoXCJkaXZcIikoe1xuICBkaXNwbGF5OiBcInRhYmxlLXJvd1wiLFxufSk7XG5cbmNvbnN0IExpbmVObyA9IHN0eWxlZChcInNwYW5cIikoe1xuICBkaXNwbGF5OiBcInRhYmxlLWNlbGxcIixcbiAgdGV4dEFsaWduOiBcInJpZ2h0XCIsXG4gIHBhZGRpbmdSaWdodDogXCIxZW1cIixcbiAgdXNlclNlbGVjdDogXCJub25lXCIsXG4gIG9wYWNpdHk6IFwiMC41XCIsXG59KTtcblxuY29uc3QgTGluZUNvbnRlbnQgPSBzdHlsZWQoXCJzcGFuXCIpKHtcbiAgZGlzcGxheTogXCJ0YWJsZS1jZWxsXCIsXG4gIGZvbnRGYW1pbHk6IFwiJ0ZpcmEgQ29kZScsIG1vbm9zcGFjZVwiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBDb2RlQmxvY2sgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEhpZ2hsaWdodCB7Li4uZGVmYXVsdFByb3BzfSBjb2RlPXtjaGlsZHJlbn0gbGFuZ3VhZ2U9XCJqc3hcIiB0aGVtZT17ZHJhY3VsYX0+XG4gICAgICB7KHsgY2xhc3NOYW1lLCBzdHlsZSwgdG9rZW5zLCBnZXRMaW5lUHJvcHMsIGdldFRva2VuUHJvcHMgfSkgPT4gKFxuICAgICAgICA8UGFwZXJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgICAgICBwYWRkaW5nOiAyLFxuICAgICAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICAgICAgYmdjb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0b2tlbnMubWFwKChsaW5lLCBpKSA9PiAoXG4gICAgICAgICAgICA8TGluZSBrZXk9e2l9IHsuLi5nZXRMaW5lUHJvcHMoeyBsaW5lLCBrZXk6IGkgfSl9PlxuICAgICAgICAgICAgICA8TGluZU5vPntpICsgMX08L0xpbmVObz5cbiAgICAgICAgICAgICAgPExpbmVDb250ZW50PlxuICAgICAgICAgICAgICAgIHtsaW5lLm1hcCgodG9rZW4sIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IGdldFRva2VuUHJvcHMoeyB0b2tlbiwga2V5IH0pO1xuICAgICAgICAgICAgICAgICAgY29uc3Qgc2FuaXRpemVkQ2hpbGRyZW4gPSBjaGlsZHJlbi5yZXBsYWNlKC9cXHMvZywgXCImbmJzcDtcIik7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBzYW5pdGl6ZWRDaGlsZHJlbixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9MaW5lQ29udGVudD5cbiAgICAgICAgICAgIDwvTGluZT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgICl9XG4gICAgPC9IaWdobGlnaHQ+XG4gICk7XG59O1xuIiwgImltcG9ydCB7IGJ1bmRsZU1EWCB9IGZyb20gXCJtZHgtYnVuZGxlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWR4KHNvdXJjZTogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGJ1bmRsZU1EWCh7XG4gICAgc291cmNlLFxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0iLCAiaW1wb3J0IFN0YWNrIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0YWNrXCI7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvUGFwZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub2dnbGVCdXR0b25cIjtcbmltcG9ydCBUb2dnbGVCdXR0b25Hcm91cCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub2dnbGVCdXR0b25Hcm91cFwiO1xuaW1wb3J0IHsgRm9ybSwgTG9hZGVyRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBBcHBQYXBlciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvQXBwUGFwZXJcIjtcbmltcG9ydCB7XG4gIGVtYWlsQW5kUGFzc3dvcmRTaWduSW4sXG4gIGVtYWlsQW5kUGFzc3dvcmRTaWduVXAsXG59IGZyb20gXCJ+L2ZpcmViYXNlL2F1dGhcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJGbG9vciBQbGFuIHwgU2lnbiBJblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNpZ24gaW4gdG8gc3RhcnQgeW91ciBvd24gY29kZSBqb3VybmV5IVwiLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IEFVVEhfVFlQRVMgPSB7XG4gIFNJR05fSU46IFwiU2lnbiBJblwiLFxuICBTSUdOX1VQOiBcIlNpZ24gVXBcIixcbn07XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHsgYXV0aFR5cGU6IHN0cmluZyB9O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XG4gIC8vIFRPRE86IGlmIGEgdXNlciB0aGVuIHJlZGlyZWN0IHRvIC9kYXNoYm9hcmRcbiAgY29uc3QgZGF0YTogTG9hZGVyRGF0YSA9IHtcbiAgICBhdXRoVHlwZTpcbiAgICAgIHBhcmFtcy5hdXRoVHlwZSA9PT0gXCJpblwiID8gQVVUSF9UWVBFUy5TSUdOX0lOIDogQVVUSF9UWVBFUy5TSUdOX1VQLFxuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbDogdW5rbm93bikge1xuICBpZiAodHlwZW9mIGVtYWlsICE9PSBcInN0cmluZ1wiIHx8IGVtYWlsLm1hdGNoKC8uK0AuK1xcLi4rLykgPT09IG51bGwpIHtcbiAgICByZXR1cm4gYEVtYWlscyBtdXN0IGxvb2sgbGlrZSBleGFtcGxlQGV4YW1wbGUuY29tYDtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkOiB1bmtub3duKSB7XG4gIGlmICh0eXBlb2YgcGFzc3dvcmQgIT09IFwic3RyaW5nXCIgfHwgcGFzc3dvcmQubGVuZ3RoIDw9IDYpIHtcbiAgICByZXR1cm4gYFBhc3N3b3JkcyBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBsb25nYDtcbiAgfVxufVxuXG50eXBlIEZvcm1EYXRhID0ge1xuICBmb3JtRXJyb3I/OiBzdHJpbmc7XG4gIGZpZWxkRXJyb3JzPzoge1xuICAgIGVtYWlsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgcGFzc3dvcmQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgfTtcbiAgZmllbGRzPzoge1xuICAgIGF1dGhUeXBlOiBzdHJpbmc7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IHsgYXV0aFR5cGU6IGluaXRBdXRoVHlwZSB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuICBjb25zdCBbYWN0aW9uRGF0YSwgc2V0QWN0aW9uRGF0YV0gPSB1c2VTdGF0ZTxGb3JtRGF0YT4oe30pO1xuICBjb25zdCBbYXV0aFR5cGUsIHNldEF1dGhUeXBlXSA9IHVzZVN0YXRlKGluaXRBdXRoVHlwZSk7XG5cbiAgY29uc3QgaGFuZGxlQXV0aFR5cGUgPSAoZXZlbnQsIG5ld0F1dGhUeXBlKSA9PiB7XG4gICAgaWYgKCFuZXdBdXRoVHlwZSkgcmV0dXJuO1xuICAgIHNldEF1dGhUeXBlKG5ld0F1dGhUeXBlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbml0QXV0aFR5cGUgIT09IGF1dGhUeXBlKSB7XG4gICAgICBzZXRBdXRoVHlwZShpbml0QXV0aFR5cGUpO1xuICAgIH1cbiAgfSwgW2luaXRBdXRoVHlwZV0pO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChcbiAgICBldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD5cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEZvcm1FbGVtZW50O1xuICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEodGFyZ2V0KTtcbiAgICBjb25zdCBhdXRoVHlwZSA9IGZvcm0uZ2V0KFwiYXV0aFR5cGVcIik7XG4gICAgY29uc3QgZW1haWwgPSBmb3JtLmdldChcImVtYWlsXCIpO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gZm9ybS5nZXQoXCJwYXNzd29yZFwiKTtcblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBhdXRoVHlwZSAhPT0gXCJzdHJpbmdcIiB8fFxuICAgICAgdHlwZW9mIGVtYWlsICE9PSBcInN0cmluZ1wiIHx8XG4gICAgICB0eXBlb2YgcGFzc3dvcmQgIT09IFwic3RyaW5nXCJcbiAgICApIHtcbiAgICAgIHJldHVybiBzZXRBY3Rpb25EYXRhKHtcbiAgICAgICAgZm9ybUVycm9yOiBgRm9ybSBub3Qgc3VibWl0dGVkIGNvcnJlY3RseS5gLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZmllbGRzID0geyBhdXRoVHlwZSwgZW1haWwsIHBhc3N3b3JkIH07XG4gICAgY29uc3QgZmllbGRFcnJvcnMgPSB7XG4gICAgICBlbWFpbDogdmFsaWRhdGVFbWFpbChlbWFpbCksXG4gICAgICBwYXNzd29yZDogdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZCksXG4gICAgfTtcbiAgICBpZiAoT2JqZWN0LnZhbHVlcyhmaWVsZEVycm9ycykuc29tZShCb29sZWFuKSlcbiAgICAgIHJldHVybiBzZXRBY3Rpb25EYXRhKHsgZmllbGRFcnJvcnMsIGZpZWxkcyB9KTtcblxuICAgIHN3aXRjaCAoYXV0aFR5cGUpIHtcbiAgICAgIGNhc2UgQVVUSF9UWVBFUy5TSUdOX0lOOiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGVtYWlsQW5kUGFzc3dvcmRTaWduSW4oeyBlbWFpbCwgcGFzc3dvcmQgfSk7XG4gICAgICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyLmVtYWlsKSB7XG4gICAgICAgICAgICByZXR1cm4gc2V0QWN0aW9uRGF0YSh7XG4gICAgICAgICAgICAgIGZpZWxkcyxcbiAgICAgICAgICAgICAgZm9ybUVycm9yOiBgRW1haWwvUGFzc3dvcmQgY29tYmluYXRpb24gaXMgaW5jb3JyZWN0YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIHNldEFjdGlvbkRhdGEoe1xuICAgICAgICAgICAgZmllbGRzLFxuICAgICAgICAgICAgZm9ybUVycm9yOiBgRW1haWwvUGFzc3dvcmQgY29tYmluYXRpb24gaXMgaW5jb3JyZWN0YCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2FzZSBBVVRIX1RZUEVTLlNJR05fVVA6IHtcbiAgICAgICAgLy8gaWYgKHVzZXJFeGlzdHMpIHtcbiAgICAgICAgLy8gICByZXR1cm4gc2V0QWN0aW9uRGF0YSh7XG4gICAgICAgIC8vICAgICBmaWVsZHMsXG4gICAgICAgIC8vICAgICBmb3JtRXJyb3I6IGBVc2VyIHdpdGggZW1haWwgJHtlbWFpbH0gYWxyZWFkeSBleGlzdHNgLFxuICAgICAgICAvLyAgIH0pO1xuICAgICAgICAvLyB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGVtYWlsQW5kUGFzc3dvcmRTaWduVXAoeyBlbWFpbCwgcGFzc3dvcmQgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBzZXRBY3Rpb25EYXRhKHtcbiAgICAgICAgICAgIGZpZWxkcyxcbiAgICAgICAgICAgIGZvcm1FcnJvcjogYFNvbWV0aGluZyB3ZW50IHdyb25nIHRyeWluZyB0byBjcmVhdGUgYSBuZXcgdXNlci5gLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHJldHVybiBzZXRBY3Rpb25EYXRhKHtcbiAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgZm9ybUVycm9yOiBgTG9naW4gdHlwZSBpbnZhbGlkYCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTdGFja1xuICAgICAgICBzeD17e1xuICAgICAgICAgIG1heFdpZHRoOiBcIjUwMHB4XCIsXG4gICAgICAgICAgbWFyZ2luOiBcIjIwMHB4IGF1dG9cIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEFwcFBhcGVyPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiIHRleHRBbGlnbj17XCJjZW50ZXJcIn0+XG4gICAgICAgICAgICB7YXV0aFR5cGV9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtcbiAgICAgICAgICAgICAgYWN0aW9uRGF0YT8uZm9ybUVycm9yID8gXCJmb3JtLWVycm9yLW1lc3NhZ2VcIiA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTdGFjayBjb21wb25lbnQ9e1BhcGVyfSBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiYXV0aFR5cGVcIiB2YWx1ZT17YXV0aFR5cGV9IC8+XG4gICAgICAgICAgICAgIDxUb2dnbGVCdXR0b25Hcm91cFxuICAgICAgICAgICAgICAgIHZhbHVlPXthdXRoVHlwZX1cbiAgICAgICAgICAgICAgICBleGNsdXNpdmVcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQXV0aFR5cGV9XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNpZ24gSW4gb3IgU2lnbiBVcFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRvZ2dsZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgdmFsdWU9e0FVVEhfVFlQRVMuU0lHTl9JTn1cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e0FVVEhfVFlQRVMuU0lHTl9JTn1cbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgICAgICAgIDwvVG9nZ2xlQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxUb2dnbGVCdXR0b25cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtBVVRIX1RZUEVTLlNJR05fVVB9XG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtBVVRIX1RZUEVTLlNJR05fVVB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgICAgICAgIDwvVG9nZ2xlQnV0dG9uPlxuICAgICAgICAgICAgICA8L1RvZ2dsZUJ1dHRvbkdyb3VwPlxuXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgY29sb3I9e1xuICAgICAgICAgICAgICAgICAgICBhdXRoVHlwZSA9PT0gQVVUSF9UWVBFUy5TSUdOX0lOID8gXCJwcmltYXJ5XCIgOiBcInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZD1cImVtYWlsLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8uZW1haWx9XG4gICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9e0Jvb2xlYW4oYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LmVtYWlsKX1cbiAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uZW1haWwgPyBcImVtYWlsLWVycm9yXCIgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8uZW1haWwgPyAoXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImVycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNhcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICByb2xlPVwiYWxlcnRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsLWVycm9yXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICBjb2xvcj17XG4gICAgICAgICAgICAgICAgICAgIGF1dGhUeXBlID09PSBBVVRIX1RZUEVTLlNJR05fSU4gPyBcInByaW1hcnlcIiA6IFwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmQtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8uZmllbGRzPy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9e1xuICAgICAgICAgICAgICAgICAgICBCb29sZWFuKGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5wYXNzd29yZCkgfHwgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInBhc3N3b3JkLWVycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnBhc3N3b3JkID8gKFxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJlcnJvclwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjYXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImFsZXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZC1lcnJvclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJmb3JtLWVycm9yLW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZm9ybUVycm9yID8gKFxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJlcnJvclwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjYXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImFsZXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmb3JtLWVycm9yXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZvcm1FcnJvcn1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgIGNvbG9yPXtcbiAgICAgICAgICAgICAgICAgIEFVVEhfVFlQRVMuU0lHTl9JTiA9PT0gYXV0aFR5cGUgPyBcInByaW1hcnlcIiA6IFwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YXV0aFR5cGV9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvQXBwUGFwZXI+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGNyZWF0ZVVzZXJTZXNzaW9uIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICBzd2l0Y2ggKHJlcXVlc3QubWV0aG9kKSB7XG4gICAgY2FzZSBcIlBPU1RcIjpcbiAgICAgIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gICAgICBcbiAgICAgIGNvbnN0IHJlZGlyZWN0VG8gPSBmb3JtLmdldChcInJlZGlyZWN0VG9cIikgYXMgc3RyaW5nO1xuICAgICAgY29uc3QgdXNlclRva2VuID0gZm9ybS5nZXQoXCJ1c2VyVG9rZW5cIikgYXMgc3RyaW5nO1xuICAgICAgaWYgKCF1c2VyVG9rZW4pIHtcbiAgICAgICAgdGhyb3cgbmV3IFJlc3BvbnNlKFwiQ291bGQgbm90IHVwZGF0ZSBzZXNzaW9uLiBQbGVhc2UgdHJ5IGFnYWluLlwiLCB7XG4gICAgICAgICAgc3RhdHVzOiA0MDQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGF3YWl0IGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXJUb2tlbiwgcmVkaXJlY3RUbyk7XG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbnNvbGUubG9nKFwiUkVRVUVTVCBOT1QgSEFORExFRFwiKTtcbiAgfVxufTtcbiIsICJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgTGluaywgdXNlTG9hZGVyRGF0YSwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IEJsb2dDYXJkIH0gZnJvbSBcIn4vY29tcG9uZW50cy9CbG9nQ2FyZFwiO1xuaW1wb3J0IHsgZ2V0QXBwVXNlciB9IGZyb20gXCJ+L2RiL2FwcFVzZXJzL2FwcFVzZXJzLnNlcnZlclwiO1xuaW1wb3J0IHsgQmxvZ1Bvc3RXaXRoSWQsIGdldEFsbEJsb2dQb3N0cyB9IGZyb20gXCJ+L2RiL2Jsb2dQb3N0cy5zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFVzZXJJZCB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5cbmludGVyZmFjZSBMb2FkZXJEYXRhIHtcbiAgcG9zdHM6IEJsb2dQb3N0V2l0aElkW107XG4gIGlzQXV0aG9yOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG4gIHJlcXVlc3QsXG4gIHBhcmFtcyxcbn0pOiBQcm9taXNlPExvYWRlckRhdGEgfCBSZXNwb25zZT4gPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG4gIGxldCBpc0F1dGhvciA9IGZhbHNlO1xuICBpZiAodXNlcklkKSB7XG4gICAgY29uc3QgYXBwVXNlciA9IGF3YWl0IGdldEFwcFVzZXIodXNlcklkKTtcbiAgICBpZiAoYXBwVXNlcj8ucGVybWlzc2lvbnMuaW5jbHVkZXMoXCJhdXRob3JcIikpIHtcbiAgICAgIGlzQXV0aG9yID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRBbGxCbG9nUG9zdHMoKTtcbiAgcmV0dXJuIHsgcG9zdHMsIGlzQXV0aG9yIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICBjb25zdCB7IHBvc3RzLCBpc0F1dGhvciB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U3RhY2tcbiAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn1cbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBtYXhXaWR0aDogXCIxMjAwcHhcIixcbiAgICAgICAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4gICAgICAgICAgd2lkdGg6IFwiODAlXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIEJsb2dcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICB7aXNBdXRob3IgPyAoXG4gICAgICAgICAgPEJ1dHRvbiBjb21wb25lbnQ9e0xpbmt9IHRvPVwiL2Jsb2cvbmV3XCI+XG4gICAgICAgICAgICBBZGQgQmxvZyBQb3N0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9TdGFjaz5cbiAgICAgIDxTdGFja1xuICAgICAgICBkaXJlY3Rpb249e3sgeHM6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICAgICAgICAgIG1heFdpZHRoOiBcIjEyMDBweFwiLFxuICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcbiAgICAgICAgICB3aWR0aDogXCI4MCVcIixcbiAgICAgICAgfX1cbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIlxuICAgICAgPlxuICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAga2V5PXtwb3N0LmlkfVxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZmxleDogeyB4czogXCIwIDAgODAlXCIsIG1kOiBcIjAgMCA0MCVcIiwgbGc6IFwiMCAwIDMwJVwiIH0sXG4gICAgICAgICAgICAgIG1hcmdpbjogMixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJsb2dDYXJkXG4gICAgICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgaW1hZ2VVcmw9e3Bvc3QuaW1hZ2VVcmx9XG4gICAgICAgICAgICAgIGltYWdlQWx0PXtwb3N0LmltYWdlQWx0fVxuICAgICAgICAgICAgICB1cmw9e2AvYmxvZy8ke3Bvc3Quc2x1Z31gfVxuICAgICAgICAgICAgICAvLyBpbWFnZVVybD17cG9zdC5pbWFnZVVybCB8fCBcIlwifVxuICAgICAgICAgICAgICAvLyBpbWFnZUFsdD17cG9zdC5pbWFnZUFsdCB8fCBcIlwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKSl9XG4gICAgICA8L1N0YWNrPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCBDYXJkIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRcIjtcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudFwiO1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkTWVkaWFcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZEFjdGlvbkFyZWEsIENhcmRBY3Rpb25zIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IEFwcFBhcGVyIH0gZnJvbSBcIi4vQXBwUGFwZXJcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGltYWdlVXJsOiBzdHJpbmc7XG4gIGltYWdlQWx0OiBzdHJpbmc7XG59XG5leHBvcnQgZnVuY3Rpb24gQmxvZ0NhcmQoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIHVybCxcbiAgaW1hZ2VVcmwsXG4gIGltYWdlQWx0LFxufTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8QXBwUGFwZXIgc3g9e3sgcGFkZGluZzogMCB9fT5cbiAgICAgIDxDYXJkIHN4PXt7IGJvcmRlclJhZGl1czogXCIxMHB4XCIsIG92ZXJmbG93OiBcImhpZGRlblwiIH19PlxuICAgICAgICA8Q2FyZEFjdGlvbkFyZWEgY29tcG9uZW50PXtMaW5rfSB0bz17dXJsfT5cbiAgICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTQwXCJcbiAgICAgICAgICAgIGltYWdlPXtpbWFnZVVybH1cbiAgICAgICAgICAgIGFsdD17aW1hZ2VBbHR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XG4gICAgICAgIHsvKiBUT0RPOiBpbXBsZW1lbnQgc2hhcmUgYWN0aW9uIGJ1dHRvbnMgKi99XG4gICAgICAgIHsvKiA8Q2FyZEFjdGlvbnM+XG4gICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgIFNoYXJlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZEFjdGlvbnM+ICovfVxuICAgICAgPC9DYXJkPlxuICAgIDwvQXBwUGFwZXI+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIEZvcm0sIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XHJcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvUGFwZXJcIjtcclxuaW1wb3J0IHsgcmVxdWlyZVVzZXJJZCB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XHJcbmltcG9ydCB7XHJcbiAgYWRkRGF0YVBvaW50LFxyXG4gIERhdGFQb2ludCxcclxuICBnZXRBbGxEYXRhUG9pbnRzLFxyXG59IGZyb20gXCJ+L2RiL2RhdGFQb2ludHMuc2VydmVyXCI7XHJcbmltcG9ydCB7IERhdGFQb2ludFdpdGhJZCwgZ2V0QWxsRGF0YVBvaW50c0xpdmUgfSBmcm9tIFwifi9kYi9kYXRhUG9pbnRzLmNsaWVudFwiO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gXCJ+L3N0YXRlL0F1dGhQcm92aWRlclwiO1xyXG5pbXBvcnQgeyB1c2VGaXJlYmFzZUxvYWRlckRhdGEgfSBmcm9tIFwifi9ob29rcy91c2VGaXJlYmFzZUxvYWRlckRhdGFcIjtcclxuXHJcbnR5cGUgTG9hZGVyRGF0YSA9IHsgZGF0YVBvaW50czogRGF0YVBvaW50V2l0aElkW10gfTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xyXG5cclxuICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0ge1xyXG4gICAgZGF0YVBvaW50czogYXdhaXQgZ2V0QWxsRGF0YVBvaW50cyh1c2VySWQpLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdCk7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBjb25zdCBwb2ludCA9IE51bWJlcihmb3JtLmdldChcInBvaW50XCIpKTtcclxuICBjb25zdCB0aW1lc3RhbXAgPSBOdW1iZXIoZm9ybS5nZXQoXCJ0aW1lc3RhbXBcIikpO1xyXG4gIGlmICghcG9pbnQgfHwgIXRpbWVzdGFtcCkge1xyXG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKFwiQ291bGQgbm90IGFkZCB0aGlzIGRhdGEgcG9pbnQuIFBsZWFzZSB0cnkgYWdhaW4uXCIsIHtcclxuICAgICAgc3RhdHVzOiA0MDQsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIGF3YWl0IGFkZERhdGFQb2ludCh7XHJcbiAgICB1c2VySWQsXHJcbiAgICBwb2ludCxcclxuICAgIHRpbWVzdGFtcCxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hCb2FyZCgpIHtcclxuICBjb25zdCB1c2VyID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgY29uc3QgdXNlcklkID0gdXNlcj8udWlkO1xyXG4gIGNvbnN0IHsgZGF0YVBvaW50cyB9ID0gdXNlRmlyZWJhc2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCh1cGRhdGVyKSA9PlxyXG4gICAgZ2V0QWxsRGF0YVBvaW50c0xpdmUodXNlcklkLCAoZGF0YVBvaW50cykgPT4gdXBkYXRlcih7IGRhdGFQb2ludHMgfSkpXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdGFjayBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT5cclxuICAgICAgPFN0YWNrXHJcbiAgICAgICAgY29tcG9uZW50PXtQYXBlcn1cclxuICAgICAgICBlbGV2YXRpb249ezN9XHJcbiAgICAgICAgZGlyZWN0aW9uPXtcInJvd1wifVxyXG4gICAgICAgIHN4PXt7IGhlaWdodDogXCIxMjBweFwiLCBwYWRkaW5nOiBcIjEycHhcIiwgbWFyZ2luOiBcIjEycHhcIiwgd2lkdGg6IFwiODAlXCIgfX1cclxuICAgICAgICBqdXN0aWZ5Q29udGVudD17XCJzcGFjZS1hcm91bmRcIn1cclxuICAgICAgICBhbGlnbkl0ZW1zPXtcImZsZXgtZW5kXCJ9XHJcbiAgICAgID5cclxuICAgICAgICB7ZGF0YVBvaW50cy5sZW5ndGggPyAoXHJcbiAgICAgICAgICBkYXRhUG9pbnRzXHJcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnRpbWVzdGFtcCAtIGIudGltZXN0YW1wKVxyXG4gICAgICAgICAgICAubWFwKCh7IHBvaW50IH0sIGkpID0+IChcclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1BhcGVyfVxyXG4gICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtwb2ludCAqIDEwfXB4YCxcclxuICAgICAgICAgICAgICAgICAgYmdjb2xvcjogXCJwcmltYXJ5Lm1haW5cIixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IGBjYWxjKDEwMCUgLyAke2RhdGFQb2ludHMubGVuZ3RofSAtIDEwcHgpYCxcclxuICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID48L0JveD5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCI+QWRkIHNvbWUgZGF0YSE8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9TdGFjaz5cclxuXHJcbiAgICAgIDxCb3g+XHJcbiAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICBuYW1lPVwicG9pbnRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ0aW1lc3RhbXBcIiB2YWx1ZT17RGF0ZS5ub3coKX0gLz5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJjb250YWluZWRcIj5cclxuICAgICAgICAgICAgYWRkIGRhdGFcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L1N0YWNrPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB0eXBlIHtcbiAgQ29sbGVjdGlvblJlZmVyZW5jZSxcbiAgRG9jdW1lbnRSZWZlcmVuY2UsXG4gIFF1ZXJ5LFxufSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwifi9maXJlYmFzZS9maXJlYmFzZUFkbWluLnNlcnZlclwiO1xuXG5jb25zdCBEQVRBX1BPSU5UU19DT0xMRUNUSU9OID0gXCJkYXRhUG9pbnRzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVBvaW50IHtcbiAgdXNlcklkOiBzdHJpbmc7XG4gIHBvaW50OiBudW1iZXI7XG4gIHRpbWVzdGFtcDogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBEYXRhUG9pbnRXaXRoSWQgZXh0ZW5kcyBEYXRhUG9pbnQge1xuICBpZDogc3RyaW5nO1xufVxuXG5jb25zdCBnZXRDb2xsZWN0aW9uUmVmID0gKCkgPT5cbiAgZ2V0RmlyZXN0b3JlKCkuY29sbGVjdGlvbihcbiAgICBEQVRBX1BPSU5UU19DT0xMRUNUSU9OXG4gICkgYXMgQ29sbGVjdGlvblJlZmVyZW5jZTxEYXRhUG9pbnQ+O1xuXG5jb25zdCBnZXREb2NSZWZlcmVuY2UgPSAoZGF0YVBvaW50SWQpID0+XG4gIGdldENvbGxlY3Rpb25SZWYoKS5kb2MoZGF0YVBvaW50SWQpIGFzIERvY3VtZW50UmVmZXJlbmNlPERhdGFQb2ludD47XG5cbmNvbnN0IGdldFF1ZXJ5ID0gKHVzZXJJZCkgPT5cbiAgZ2V0Q29sbGVjdGlvblJlZigpLndoZXJlKFwidXNlcklkXCIsIFwiPT1cIiwgdXNlcklkKSBhcyBRdWVyeTxEYXRhUG9pbnQ+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsRGF0YVBvaW50cyh1c2VySWQpOiBQcm9taXNlPERhdGFQb2ludFdpdGhJZFtdPiB7XG4gIGNvbnN0IHF1ZXJ5UmVmID0gZ2V0UXVlcnkodXNlcklkKTtcbiAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IHF1ZXJ5UmVmLmdldCgpO1xuICByZXR1cm4gcXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGFQb2ludChkYXRhUG9pbnRJZCk6IFByb21pc2U8RGF0YVBvaW50IHwgbnVsbD4ge1xuICBjb25zdCBkb2NSZWYgPSBnZXREb2NSZWZlcmVuY2UoZGF0YVBvaW50SWQpO1xuICBjb25zdCBkb2NTbmFwID0gYXdhaXQgZG9jUmVmLmdldCgpO1xuICBpZiAoZG9jU25hcC5leGlzdHMpIHtcbiAgICByZXR1cm4gZG9jU25hcD8uZGF0YSgpIHx8IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgLy8gZG9jLmRhdGEoKSB3aWxsIGJlIHVuZGVmaW5lZCBpbiB0aGlzIGNhc2VcbiAgICBjb25zb2xlLmxvZyhcIk5vIHN1Y2ggZG9jdW1lbnQhXCIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGREYXRhUG9pbnQoZGF0YVBvaW50OiBEYXRhUG9pbnQpOiBQcm9taXNlPERhdGFQb2ludD4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRvY1JlZiA9IGF3YWl0IGdldENvbGxlY3Rpb25SZWYoKS5hZGQoZGF0YVBvaW50KTtcblxuICAgIGNvbnN0IG5ld0RhdGFQb2ludCA9IGF3YWl0IGdldERhdGFQb2ludChkb2NSZWYuaWQpO1xuICAgIGlmICghbmV3RGF0YVBvaW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IG5ldyBkYXRhIHBvaW50XCIpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3RGF0YVBvaW50O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBkb2N1bWVudDogXCIsIGUpO1xuICAgIHRocm93IGU7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCB0eXBlIFVzZUVmZmVjdFVuc3ViY3JpYmVyID0gKCkgPT4gdm9pZDtcbmV4cG9ydCBmdW5jdGlvbiB1c2VGaXJlYmFzZUxvYWRlckRhdGE8VD4oXG4gIGNsaWVudFVwZGF0ZXI6IChcbiAgICB1cGRhdGVyOiAoZGF0YTogVCkgPT4gdm9pZFxuICApID0+IFVzZUVmZmVjdFVuc3ViY3JpYmVyXG4pOiBUIHtcbiAgLy8gZ2V0IHRoZSBkYXRhIGZvcm0gdGhlIHNldmVyIHZpYSBmaXJlYmFzZSBhZG1pblxuICBjb25zdCBsb2FkZXJEYXRhID0gdXNlTG9hZGVyRGF0YTxUPigpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxUPihsb2FkZXJEYXRhKTtcblxuICAvLyB3aGVuIHRoZSBjbGllbnQgZ2V0cyBhbiB1cGRhdGUgYWxsb3dcbiAgLy8gdGhlIGNsaWVudCB0byB1cGRhdGUgdGhlIGRhdGFcbiAgZnVuY3Rpb24gdXBkYXRlcihkYXRhOiBUKSB7XG4gICAgc2V0RGF0YShkYXRhKTtcbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4gY2xpZW50VXBkYXRlcih1cGRhdGVyKSwgW2xvYWRlckRhdGFdKTtcbiAgcmV0dXJuIGRhdGE7XG59IiwgImltcG9ydCB7XG4gIHJlZGlyZWN0LFxuICBMb2FkZXJGdW5jdGlvbixcbiAgdXNlTG9hZGVyRGF0YSxcbiAgdXNlQWN0aW9uRGF0YSxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuaW1wb3J0IHsgYWRkQmxvZ1Bvc3QgfSBmcm9tIFwifi9kYi9ibG9nUG9zdHMuc2VydmVyXCI7XG5pbXBvcnQgeyByZXF1aXJlVXNlcklkIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldEFwcFVzZXIgfSBmcm9tIFwifi9kYi9hcHBVc2Vycy9hcHBVc2Vycy5zZXJ2ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBFZGl0UG9zdCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvRWRpdFBvc3RcIjtcblxudHlwZSBMb2FkZXJEYXRhID0geyBhdXRob3JJZDogc3RyaW5nIH07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtcbiAgcmVxdWVzdCxcbiAgcGFyYW1zLFxufSk6IFByb21pc2U8TG9hZGVyRGF0YSB8IFJlc3BvbnNlPiA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdCk7XG4gIGNvbnN0IGFwcFVzZXIgPSBhd2FpdCBnZXRBcHBVc2VyKHVzZXJJZCk7XG4gIGlmICghYXBwVXNlcj8ucGVybWlzc2lvbnMuaW5jbHVkZXMoXCJhdXRob3JcIikpIHtcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvYmxvZ1wiKTtcbiAgfVxuICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0ge1xuICAgIGF1dGhvcklkOiB1c2VySWQsXG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG50eXBlIFBvc3RFcnJvciA9IHtcbiAgdGl0bGU/OiBib29sZWFuO1xuICBzbHVnPzogYm9vbGVhbjtcbiAgbWFya2Rvd24/OiBib29sZWFuO1xuICBkZXNjcmlwdGlvbj86IGJvb2xlYW47XG4gIGltYWdlVXJsPzogYm9vbGVhbjtcbiAgaW1hZ2VBbHQ/OiBib29sZWFuO1xuICB0YWdzPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuXG4gIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIik7XG4gIGNvbnN0IHNsdWcgPSBmb3JtRGF0YS5nZXQoXCJzbHVnXCIpO1xuICBjb25zdCBtYXJrZG93biA9IGZvcm1EYXRhLmdldChcIm1hcmtkb3duXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpO1xuICBjb25zdCBhdXRob3JJZCA9IGZvcm1EYXRhLmdldChcImF1dGhvcklkXCIpO1xuICBjb25zdCBpbWFnZVVybCA9IGZvcm1EYXRhLmdldChcImltYWdlVXJsXCIpO1xuICBjb25zdCBpbWFnZUFsdCA9IGZvcm1EYXRhLmdldChcImltYWdlQWx0XCIpO1xuICBjb25zdCB0YWdzID0gU3RyaW5nKGZvcm1EYXRhLmdldChcInRhZ3NcIikpPy5zcGxpdChcIixcIikgfHwgW107XG4gIGNvbnN0IGlzUHVibGlzaGVkID0gZm9ybURhdGEuZ2V0KFwiaXNQdWJsaXNoZWRcIikgPT09IFwidHJ1ZVwiO1xuICBjb25zdCBwdWJsaXNoRGF0ZSA9IHBhcnNlSW50KFxuICAgIChmb3JtRGF0YS5nZXQoXCJwdWJsaXNoRGF0ZVwiKSBhcyBzdHJpbmcpIHx8IFwiMFwiLFxuICAgIDEwXG4gICk7XG5cbiAgY29uc3QgZXJyb3JzOiBQb3N0RXJyb3IgPSB7fTtcbiAgaWYgKCF0aXRsZSkgZXJyb3JzLnRpdGxlID0gdHJ1ZTtcbiAgaWYgKCFzbHVnKSBlcnJvcnMuc2x1ZyA9IHRydWU7XG4gIGlmICghbWFya2Rvd24pIGVycm9ycy5tYXJrZG93biA9IHRydWU7XG4gIGlmICghZGVzY3JpcHRpb24pIGVycm9ycy5kZXNjcmlwdGlvbiA9IHRydWU7XG4gIGlmICghaW1hZ2VVcmwpIGVycm9ycy5pbWFnZVVybCA9IHRydWU7XG4gIGlmICghaW1hZ2VBbHQpIGVycm9ycy5pbWFnZUFsdCA9IHRydWU7XG4gIGlmICghdGFncykgZXJyb3JzLnRhZ3MgPSB0cnVlO1xuXG4gIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCkge1xuICAgIHJldHVybiBlcnJvcnM7XG4gIH1cblxuICBpbnZhcmlhbnQodHlwZW9mIHRpdGxlID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBzbHVnID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBtYXJrZG93biA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgZGVzY3JpcHRpb24gPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGF1dGhvcklkID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBpbWFnZVVybCA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgaW1hZ2VBbHQgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIHRhZ3MgPT09IFwib2JqZWN0XCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGlzUHVibGlzaGVkID09PSBcImJvb2xlYW5cIik7XG4gIGludmFyaWFudCh0eXBlb2YgcHVibGlzaERhdGUgPT09IFwibnVtYmVyXCIpO1xuXG4gIGF3YWl0IGFkZEJsb2dQb3N0KHtcbiAgICBhdXRob3JJZCxcbiAgICB0aXRsZSxcbiAgICBzbHVnLFxuICAgIG1hcmtkb3duLFxuICAgIGlzUHVibGlzaGVkLFxuICAgIHB1Ymxpc2hEYXRlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGltYWdlVXJsLFxuICAgIGltYWdlQWx0LFxuICAgIHRhZ3MsXG4gIH0pO1xuXG4gIHJldHVybiByZWRpcmVjdChcIi9ibG9nXCIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3UG9zdCgpIHtcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGU8RGF0ZSB8IG51bGw+KG5ldyBEYXRlKCkpO1xuICBjb25zdCBbbWFya2Rvd24sIHNldE1hcmtkb3duXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtpc1B1Ymxpc2hlZCwgc2V0SXNQdWJsaXNoZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHsgYXV0aG9ySWQgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcbiAgY29uc3QgZXJyb3JzID0gdXNlQWN0aW9uRGF0YSgpO1xuICBmdW5jdGlvbiBoYW5kbGVFZGl0b3JDaGFuZ2UodmFsdWUpIHtcbiAgICBzZXRNYXJrZG93bih2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8RWRpdFBvc3RcbiAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgYXV0aG9ySWQ9e2F1dGhvcklkfVxuICAgICAgaXNQdWJsaXNoZWQ9e2lzUHVibGlzaGVkfVxuICAgICAgc2V0SXNQdWJsaXNoZWQ9e3NldElzUHVibGlzaGVkfVxuICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgIHNldERhdGU9e3NldERhdGV9XG4gICAgICBtYXJrZG93bj17bWFya2Rvd259XG4gICAgICBoYW5kbGVFZGl0b3JDaGFuZ2U9e2hhbmRsZUVkaXRvckNoYW5nZX1cbiAgICAvPlxuICApO1xufVxuIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJtZXRhXCI6IFwidGVzdCBhXCIsXG4gIFwidGl0bGVcIjogXCJ0ZXN0IGFcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcInRlc3QgYVwiXG59O1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgaDE6IFwiaDFcIlxuICB9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjxfY29tcG9uZW50cy5oMT57XCJXaGF0IEEhXCJ9PC9fY29tcG9uZW50cy5oMT48Lz47XG4gIHJldHVybiBNRFhMYXlvdXQgPyA8TURYTGF5b3V0IHsuLi5wcm9wc30+e19jb250ZW50fTwvTURYTGF5b3V0PiA6IF9jb250ZW50O1xufVxuZXhwb3J0IGRlZmF1bHQgTURYQ29udGVudDtcblxuXG5leHBvcnQgY29uc3QgZmlsZW5hbWUgPSBcImEubWR4XCI7XG5leHBvcnQgY29uc3QgaGVhZGVycyA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMuaGVhZGVycztcbmV4cG9ydCBjb25zdCBtZXRhID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5tZXRhO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibWV0YVwiOiBcInRlc3QgYlwiLFxuICBcInRpdGxlXCI6IFwidGVzdCBiXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJ0ZXN0IGJcIlxufTtcbmZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCBfY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGgxOiBcImgxXCJcbiAgfSwgcHJvcHMuY29tcG9uZW50cyksIHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0gX2NvbXBvbmVudHM7XG4gIGNvbnN0IF9jb250ZW50ID0gPD48X2NvbXBvbmVudHMuaDE+e1wiV2hhdCBCIVwifTwvX2NvbXBvbmVudHMuaDE+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJiLm1keFwiO1xuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLmhlYWRlcnM7XG5leHBvcnQgY29uc3QgbWV0YSA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMubWV0YTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAiLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm1ldGFcIjogXCJ0ZXN0IGNcIixcbiAgXCJ0aXRsZVwiOiBcInRlc3QgY1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwidGVzdCBjXCJcbn07XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBoMTogXCJoMVwiXG4gIH0sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PF9jb21wb25lbnRzLmgxPntcIldoYXQgQyFcIn08L19jb21wb25lbnRzLmgxPjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwiYy5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgImltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIHJldHVybiBsb2dvdXQocmVxdWVzdCk7XG59O1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiByZWRpcmVjdChcIi9cIik7XG59OyIsICJpbXBvcnQgeyBCdXR0b24sIFN0YWNrLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBBcHBQYXBlciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvQXBwUGFwZXJcIjtcbmltcG9ydCB7IEZsb29yUGxhbkNhcmQgfSBmcm9tIFwifi9jb21wb25lbnRzL0Zsb29yUGxhbkNhcmRcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJGbG9vciBQbGFuOiBDb3B5L1Bhc3RhL1R3ZXJrXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29kZXMgU2FnYXMgYSBwbGFjZSB0byBsZWFybiBhIG1pbGxpb24gYW5kIG9uZSB3YXlzIHRvIGNvZGUuXCIsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8U3RhY2tcbiAgICAgIHN4PXt7XG4gICAgICAgIG1heFdpZHRoOiBcIjcwMHB4XCIsXG4gICAgICAgIG1hcmdpbjogXCI4MHB4IGF1dG9cIixcbiAgICAgICAgd2lkdGg6IFwiODAlXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxBcHBQYXBlcj5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCI+Zmxvb3IgcGxhbjwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+L1x1MDJDOGZsXHUwMEY0KFx1MDI1OSlyIFx1MDJDQ3BsYW4vPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5ub3VuIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgQSBwbGFjZSB0byBzaGFyZSBhbmQgZGlzY292ZXIgYXBwIHN0YWNrcyBzbyB0aGF0IHlvdSBjYW4gc3RhcnRcbiAgICAgICAgICBicmluZ2luZyB5b3VyIGlkZWFzIHRvIGxpZmUuXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFN0YWNrXG4gICAgICAgICAgZGlyZWN0aW9uPXt7IHhzOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fVxuICAgICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxuICAgICAgICAgICAgdG89XCIvZmxvb3ItcGxhbnMvY3JlYXRlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBDcmVhdGUgYSBmbG9vciBwbGFuXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgICAgIHRvPVwiL2Zsb29yLXBsYW5zL1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2VhcmNoIGZsb29yIHBsYW5zXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0FwcFBhcGVyPlxuXG4gICAgICB7LyogPEZsb29yUGxhbkNhcmRcbiAgICAgICAgdGl0bGU9e1wiUmVtaXggd2l0aCBGaXJlYmFzZSBvbiBOZXRsaWZ5XCJ9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtcbiAgICAgICAgICBcIkEgUmVhY3QgYXBwIHdyaXR0ZW4gd2l0aCBSZW1peCBhbmQgRmlyZWJhc2UgZGVwbG95ZWQgb24gTmV0bGlmeS4gSXQgdXNlcyBUeXBlc2NyaXB0IGFuZCBoYXMgYWxsIHRoZSBidWlsZGluZyBibG9ja3MgdG8gZ2V0IHlvdXIgYXBwIG9mZiB0aGUgZ3JvdW5kLlwiXG4gICAgICAgIH1cbiAgICAgICAgY29zdD17XCJGUkVFXCJ9XG4gICAgICAgIHBvcHVsYXJpdHk9e3tcbiAgICAgICAgICByYXRpbmc6IDQuNSxcbiAgICAgICAgICBjb3VudDogMyxcbiAgICAgICAgfX1cbiAgICAgICAgdXJsPXtcImh0dHBzOi8vZ2l0aHViLmNvbS9mbG9vcnBsYW4vZmxvb3JwbGFuI3dlbGNvbWUtdG8tZmxvb3JwbGFuXCJ9XG4gICAgICAgIHNldHVwVGltZT17XCIxaHJcIn1cbiAgICAgIC8+ICovfVxuICAgIDwvU3RhY2s+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonNWNjNmY2ZjAnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LUFVN1dFRjdFLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1MTEY3WEVUVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUE1SEtXUUpFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTUtSNkdURFguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01SEFTUFFWRC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtSURLTlNMSEcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVI1WFJQQklKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUUtZSlY1UUouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PQjc3VVhNTi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVpNTjc0MkJHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNlRZMkdNMkIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1UQ0JSNjVFUi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZCc6eydpZCc6J3JvdXRlcy9ibG9nLyRibG9nUG9zdElkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cvOmJsb2dQb3N0SWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC1HSU83RU1CVS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNVRGWk5HREcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QRUtZWEtQSi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nLyRibG9nUG9zdElkLmVkaXQnOnsnaWQnOidyb3V0ZXMvYmxvZy8kYmxvZ1Bvc3RJZC5lZGl0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cvOmJsb2dQb3N0SWQvZWRpdCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nLyRibG9nUG9zdElkLmVkaXQtNkpGNU9BWUkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVlVR0s2TURJLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNVRGWk5HREcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nL2EnOnsnaWQnOidyb3V0ZXMvYmxvZy9hJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cvYScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nL2EtRlBWTllXU0wuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nL2InOnsnaWQnOidyb3V0ZXMvYmxvZy9iJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cvYicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nL2ItQ1oyVlBGUE8uanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nL2MnOnsnaWQnOidyb3V0ZXMvYmxvZy9jJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jsb2cvYycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nL2MtNEFTNEFQQkguanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nL2luZGV4Jzp7J2lkJzoncm91dGVzL2Jsb2cvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYmxvZycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9pbmRleC1FQjVJS1lOMy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNVRGWk5HREcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYmxvZy9uZXcnOnsnaWQnOidyb3V0ZXMvYmxvZy9uZXcnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYmxvZy9uZXcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYmxvZy9uZXctQ0JGWUhWWEcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVlVR0s2TURJLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNVRGWk5HREcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9kYXNoYm9hcmQnOnsnaWQnOidyb3V0ZXMvZGFzaGJvYXJkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Rhc2hib2FyZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kYXNoYm9hcmQtNkY0WDVHQ1ouanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZmxvb3ItcGxhbnMvJGZsb29yUGxhbklkLmVkaXQnOnsnaWQnOidyb3V0ZXMvZmxvb3ItcGxhbnMvJGZsb29yUGxhbklkLmVkaXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZmxvb3ItcGxhbnMvOmZsb29yUGxhbklkL2VkaXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZmxvb3ItcGxhbnMvJGZsb29yUGxhbklkLmVkaXQtVldMVlhHVkwuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUtaSUFSRExILmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSVAzV1hRNEQuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9mbG9vci1wbGFucy9jcmVhdGUnOnsnaWQnOidyb3V0ZXMvZmxvb3ItcGxhbnMvY3JlYXRlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Zsb29yLXBsYW5zL2NyZWF0ZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9mbG9vci1wbGFucy9jcmVhdGUtRU82TEFSNFMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUtaSUFSRExILmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSVAzV1hRNEQuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9mbG9vci1wbGFucy9pbmRleCc6eydpZCc6J3JvdXRlcy9mbG9vci1wbGFucy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidmbG9vci1wbGFucycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZmxvb3ItcGxhbnMvaW5kZXgtVllETklMMzMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUlQM1dYUTRELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUEVLWVhLUEouanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtMllPWU1EVjYuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dvdXQnOnsnaWQnOidyb3V0ZXMvbG9nb3V0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvZ291dCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2dvdXQtQlpQRFBPQ1QuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2lnbi4kYXV0aFR5cGUnOnsnaWQnOidyb3V0ZXMvc2lnbi4kYXV0aFR5cGUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2lnbi86YXV0aFR5cGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2lnbi4kYXV0aFR5cGUtSEpEMlVCUksuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3VwZGF0ZS1zZXNzaW9uJzp7J2lkJzoncm91dGVzL3VwZGF0ZS1zZXNzaW9uJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3VwZGF0ZS1zZXNzaW9uJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3VwZGF0ZS1zZXNzaW9uLVRCWTZNVERYLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtNUNDNkY2RjAuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBR2pDLEFBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxnQkFBZ0IsUUFBUTtBQUk1QixXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLHdCQUF3QjtBQUFBLE1BQ3JELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFHMUMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxVQUFVO0FBQUEsTUFDdkMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsb0JBQW9CO0FBQUEsTUFDakQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ3RPbEM7QUFBQTtBQUFBO0FBQUEsWUFBTyxVQUFVO0FBQUE7QUFBQTs7O0FDQWpCO0FBQUE7QUFBQTtBQUFBLFlBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ0FqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXFDOzs7QUNBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUF1QjtBQUN2QixvQkFBK0I7QUFDL0IsbUJBQTRCOzs7QUNGNUI7QUFBQSxtQkFBd0I7QUFFakIsOEJBQThCO0FBQ25DLFNBQU8sMEJBQVksRUFBRSxLQUFLO0FBQUE7OztBQ0g1QjtBQUFBLHNCQUE0Qjs7O0FDQTVCO0FBQU8sSUFBTSxTQUFTO0FBQUEsRUFDcEIsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBRVgsT0FBTztBQUFBLEVBQ1AsU0FBUztBQUFBLEVBQ1QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLEVBQ1QsWUFBWTtBQUFBLElBQ1YsU0FBUztBQUFBLElBRVQsT0FBTztBQUFBO0FBQUE7OztBRFJKLElBQU0sUUFBUSxpQ0FBWTtBQUFBLEVBQy9CLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNQLE1BQU0sT0FBTztBQUFBO0FBQUEsSUFFZixXQUFXO0FBQUEsTUFDVCxNQUFNLE9BQU87QUFBQTtBQUFBLElBRWYsT0FBTztBQUFBLE1BQ0wsTUFBTSxPQUFPO0FBQUE7QUFBQSxJQUVmLFNBQVM7QUFBQSxNQUNQLE1BQU0sT0FBTztBQUFBO0FBQUEsSUFFZixNQUFNO0FBQUEsTUFDSixNQUFNLE9BQU87QUFBQTtBQUFBLElBRWYsU0FBUztBQUFBLE1BQ1AsTUFBTSxPQUFPO0FBQUE7QUFBQSxJQUVmLFlBQVk7QUFBQSxNQUNWLFNBQVMsT0FBTyxXQUFXO0FBQUEsTUFDM0IsT0FBTyxPQUFPLFdBQVc7QUFBQTtBQUFBO0FBQUEsRUFHN0IsWUFBWTtBQUFBLElBRVYsZUFBZTtBQUFBLE1BQ2IsY0FBYztBQUFBLFFBRVosZUFBZTtBQUFBO0FBQUE7QUFBQSxJQUluQixXQUFXO0FBQUEsTUFDVCxjQUFjO0FBQUEsUUFFWixTQUFTO0FBQUE7QUFBQSxNQUVYLGdCQUFnQjtBQUFBLFFBQ2QsTUFBTTtBQUFBLFVBQ0osWUFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBRnJDdEIseUJBQXdCO0FBQ3hCLG9CQUE4QjtBQUM5QixtQkFBOEI7QUFDOUIsNkJBQWdDO0FBRWpCLHVCQUNiLFNBQ0Esb0JBQ0EsaUJBQ0EsY0FDQTtBQUNBLFFBQU0sUUFBUTtBQUNkLFFBQU0sRUFBRSw0QkFBNEIsb0NBQW9CO0FBRXhELFFBQU0saUJBQWlCLE1BQ3JCLHFDQUFDLDRCQUFEO0FBQUEsSUFBZSxPQUFPO0FBQUEsS0FDcEIscUNBQUMsNkJBQUQ7QUFBQSxJQUFlO0FBQUEsS0FFYixxQ0FBQyw0QkFBRCxPQUNBLHFDQUFDLDBCQUFEO0FBQUEsSUFBYSxTQUFTO0FBQUEsSUFBYyxLQUFLLFFBQVE7QUFBQTtBQU12RCxRQUFNLE9BQU8sa0NBQWUscUNBQUMsZ0JBQUQ7QUFHNUIsUUFBTSxFQUFFLFdBQVcsd0JBQXdCO0FBRTNDLE1BQUksYUFBYTtBQUVqQixTQUFPLFFBQVEsQ0FBQyxFQUFFLEtBQUssS0FBSyxVQUFVO0FBQ3BDLFVBQU0sYUFBYSxHQUFHLE9BQU8sSUFBSSxLQUFLO0FBQ3RDLFVBQU0sY0FBYyx3QkFBd0IsZUFBZTtBQUMzRCxpQkFBYSxHQUFHLGFBQWE7QUFBQTtBQUkvQixRQUFNLFNBQVMsS0FBSyxRQUNsQiwwRkFDQSwyRUFBMkU7QUFHN0Usa0JBQWdCLElBQUksZ0JBQWdCO0FBRXBDLFNBQU8sSUFBSSxTQUFTLGtCQUFrQixVQUFVO0FBQUEsSUFDOUMsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBO0FBQUE7OztBSXhEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUF1QjtBQUN2QixvQkFVTzs7Ozs7O0FDWFA7QUFBQSxrQkFBd0I7QUFDeEIsb0JBQXVFO0FBQ3ZFLG9CQUErRDs7O0FDRi9EO0FBQUEsb0JBQTJCO0FBQzNCLG9CQUFnQztBQUV6QixJQUFNLGFBQWEsOEJBQ3hCLENBQUMsT0FBTyxRQUFRLG9DQUFDLG9CQUFEO0FBQUEsRUFBTTtBQUFBLEVBQVUsUUFBTztBQUFBLEVBQVUsUUFBTztBQUFBLEdBQVc7OztBREFyRSxzQkFBMkI7QUFHcEIsSUFBTSxjQUFjLGlDQUErQjtBQUVuRCxzQkFBc0I7QUFBQSxFQUMzQjtBQUFBLEVBQ0EsTUFBTTtBQUFBLEVBQ04sV0FBVztBQUFBLEdBS1Y7QUFDRCxRQUFNLENBQUMsZ0JBQWdCO0FBQ3ZCLFFBQU0sQ0FBQyxNQUFNLFdBQVcsNEJBQTBCO0FBQ2xELFFBQU0sZ0JBQWdCLDBCQUF3QjtBQUM5QyxRQUFNLENBQUMsV0FBVyxnQkFBZ0IsNEJBQWlCLGlCQUFpQjtBQUNwRSxRQUFNLGdCQUFnQiwwQkFBK0I7QUFDckQsUUFBTSxVQUFVO0FBRWhCLCtCQUFVLE1BQU07QUFDZCxZQUFRO0FBQUEsS0FDUCxDQUFDO0FBRUosUUFBTSxFQUFFLGFBQWE7QUFDckIsUUFBTSxhQUFhLFNBQVMsU0FBUyxZQUFZLGlCQUFpQjtBQUVsRSwyQkFBeUI7QUFDdkIsUUFBSSxDQUFDLGNBQWM7QUFBUztBQUM1QixVQUFNLFdBQVcsSUFBSSxTQUFTLGNBQWM7QUFDNUMsWUFBUSxPQUFPLFVBQVUsRUFBQyxRQUFRLFFBQVEsUUFBTztBQUFBO0FBS25ELCtCQUFVLE1BQU07QUFDZCxVQUFNLFFBQU87QUFDYixXQUFPLE1BQUssaUJBQWlCLE9BQU8sbUJBQW1CO0FBQ3JELFVBQUksbUJBQW1CLFFBQVEsU0FBUyxNQUFNO0FBQzVDLGdCQUFRO0FBQ1IsWUFBSSxDQUFDLGNBQWM7QUFBUztBQUM1QixzQkFBYyxRQUFRO0FBQUEsaUJBQ2IsZ0JBQWdCO0FBQ3pCLGNBQU0sUUFBUSxNQUFNLGVBQWU7QUFDbkMsWUFBSSxVQUFVLFdBQVc7QUFDdkIsa0JBQVE7QUFDUix1QkFBYTtBQUNiLGdCQUFNLGdDQUFXLGVBQWU7QUFDaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlMLENBQUM7QUFHSiwrQkFBVSxNQUFNO0FBQ2QsVUFBTSxTQUFTLFlBQVksWUFBWTtBQUNyQyxZQUFNLFFBQU87QUFDYixZQUFNLFFBQU8sTUFBSztBQUNsQixVQUFJO0FBQU0sY0FBTSxNQUFLLFdBQVc7QUFBQSxPQUMvQixLQUFLLEtBQUs7QUFHYixXQUFPLE1BQU0sY0FBYztBQUFBLEtBQzFCO0FBSUgsU0FDRSxvQ0FBQyxZQUFZLFVBQWI7QUFBQSxJQUFzQixPQUFPO0FBQUEsS0FDM0Isb0NBQUMsWUFBRDtBQUFBLElBQVksS0FBSztBQUFBLE1BQ2pCLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxRQUFPO0FBQUEsSUFBTyxLQUFLO0FBQUEsSUFBZSxRQUFPO0FBQUEsS0FDN0Msb0NBQUMsU0FBRDtBQUFBLElBQU8sTUFBSztBQUFBLElBQVMsTUFBSztBQUFBLElBQVUsT0FBTTtBQUFBLE1BQzFDLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLE1BQUs7QUFBQSxJQUFTLE1BQUs7QUFBQSxJQUFZLE9BQU87QUFBQSxNQUM3QyxvQ0FBQyxTQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxPQUFPLGFBQWEsSUFBSSxpQkFBaUI7QUFBQSxPQUc1QztBQUFBO0FBS0EsSUFBTSxVQUFVLE1BQU07QUFDM0IsU0FBTyw4QkFBVztBQUFBOzs7QUUzRnBCO0FBQUEsa0JBQWdCO0FBQ2hCLG9CQUFzQjtBQUN0QixxQkFBb0I7OztBQ0ZwQjtBQUFBLGlCQUFnQjtBQUNoQixxQkFBbUI7QUFDbkIsb0JBQXFCOzs7QUNGckI7QUFBQSxvQkFBa0I7OztBQ0FsQjs7O0FDQUE7QUFBQSxpQkFBdUM7QUFDdkMsbUJBQTZDO0FBQzdDLHVCQUF1QztBQUN2Qyx1QkFBdUQ7QUFFdkQsSUFBSTtBQUFKLElBQVM7QUFBVCxJQUFlO0FBQWYsSUFBbUI7QUFFbkIsSUFBSSxDQUFDLDBCQUFVLFFBQVE7QUFDckIsUUFBTSxpQkFBaUI7QUFBQSxJQUNyQixRQUFRO0FBQUEsSUFDUixZQUFZO0FBQUEsSUFDWixXQUFXO0FBQUEsSUFDWCxlQUFlO0FBQUEsSUFDZixtQkFBbUI7QUFBQSxJQUNuQixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUE7QUFFakIsUUFBTSw4QkFBYztBQUNwQixTQUFPO0FBQ1AsT0FBSztBQUNMLE1BQUksT0FBTyxhQUFhLGFBQWE7QUFDbkMsZ0JBQVk7QUFBQTtBQUVkLE1BQUksTUFBd0M7QUFDMUMsbURBQXlCLElBQUksYUFBYTtBQUMxQywwQ0FBb0IsTUFBTTtBQUFBO0FBQUE7OztBRHhCOUIsbUJBS087QUFHUCxzQ0FBNkM7QUFBQSxFQUMzQztBQUFBLEVBQ0E7QUFBQSxHQUNnQjtBQUNoQixRQUFNLFFBQU87QUFDYixRQUFNLGlCQUFpQixNQUFNLGlEQUMzQixPQUNBLE9BQ0E7QUFFRixRQUFNLE9BQU8sZUFBZTtBQUM1QixTQUFPO0FBQUE7QUFHVCxzQ0FBNkM7QUFBQSxFQUMzQztBQUFBLEVBQ0E7QUFBQSxHQUNnQjtBQUNoQixRQUFNLFFBQU87QUFFYixRQUFNLGlCQUFpQixNQUFNLDZDQUMzQixPQUNBLE9BQ0E7QUFHRixRQUFNLE9BQU8sZUFBZTtBQUM1QixTQUFPO0FBQUE7QUFHRixtQkFBbUI7QUFDeEIsUUFBTSxRQUFPO0FBRWIsUUFDRyxVQUNBLEtBQUssV0FBWTtBQUFBLEtBSWpCLE1BQU0sU0FBVSxPQUFPO0FBQUE7QUFBQTs7O0FEN0M1QixvQkFBbUI7QUFFWixJQUFNLGdCQUFnQixDQUFDLFVBQzVCLDBGQUNFLG9EQUFDLHVCQUFEO0FBQUEsRUFBUSxTQUFTLE1BQU07QUFBQSxHQUFlLFFBQU87OztBREFsQyxvQkFBb0I7QUFDakMsUUFBTSxPQUFPO0FBQ2IsU0FBTyxTQUFTLE9BQ2Qsb0NBQUMsb0JBQUQsTUFDRSxvQ0FBQyx3QkFBRDtBQUFBLElBQVEsV0FBVztBQUFBLElBQU0sSUFBRztBQUFBLEtBQVcsWUFHdkMsb0NBQUMsd0JBQUQ7QUFBQSxJQUNFLElBQUksRUFBRSxZQUFZO0FBQUEsSUFDbEIsV0FBVztBQUFBLElBQ1gsSUFBRztBQUFBLElBQ0gsT0FBTTtBQUFBLEtBQ1AsY0FLSCxvQ0FBQyxvQkFBRCxNQUNFLG9DQUFDLFlBQUQsTUFDRSxvQ0FBQyxlQUFEO0FBQUEsSUFBZSxNQUFLO0FBQUEsSUFBUyxPQUFNO0FBQUEsS0FBWTtBQUFBOzs7QUR0QnZELHdCQUF1QjtBQUN2QixvQkFBcUI7QUFDckIsdUJBQXNCO0FBRWYsa0JBQWtCO0FBQ3ZCLFNBQ0UsMERBQ0Usb0NBQUMsdUJBQUQsTUFDRSxvQ0FBQyx3QkFBRDtBQUFBLElBQ0UsSUFBSTtBQUFBLE1BQ0YsU0FBUztBQUFBLE1BQ1QsZ0JBQWdCO0FBQUE7QUFBQSxLQUdsQixvQ0FBQyxvQkFBRDtBQUFBLElBQU0sSUFBRztBQUFBLElBQUksT0FBTyxFQUFFLGdCQUFnQjtBQUFBLEtBQ3BDLG9DQUFDLHdCQUFEO0FBQUEsSUFBTyxXQUFXO0FBQUEsS0FDaEIsb0NBQUMsMkJBQUQ7QUFBQSxJQUNFLFNBQVE7QUFBQSxJQUNSLFFBQU07QUFBQSxJQUNOLElBQUksQ0FBQyxXQUFXO0FBQUEsTUFDZCxZQUFZLDZCQUE2QixPQUFNLFFBQVEsUUFBUSxTQUFTLE9BQU0sUUFBUSxVQUFVO0FBQUEsTUFDaEcsZ0JBQWdCO0FBQUEsTUFDaEIsZUFBZTtBQUFBO0FBQUEsS0FFbEIsa0JBT0wsb0NBQUMsVUFBRCxTQUdKLG9DQUFDLHFCQUFEO0FBQUEsSUFBSyxJQUFJLEVBQUUsY0FBYztBQUFBO0FBQUE7OztBS3RDL0I7QUFFQSxvQkFBcUQ7OztBQ0ZyRDtBQUFBLGtCQUFrRDtBQUNsRCxtQkFBOEI7QUFDOUIsd0JBQXdDO0FBRXhDLElBQUk7QUFBSixJQUFjO0FBQWQsSUFBMEI7QUFDMUIsSUFBSSxDQUFDLDJCQUFVLFFBQVE7QUFDckIsTUFBSSxNQUF3QztBQUMxQyxZQUFRLElBQUksMEJBQTBCO0FBQ3RDLFlBQVEsSUFBSSw4QkFBOEI7QUFBQTtBQUU1QyxRQUFNLGFBQWEsUUFBUSxJQUFJLCtCQUErQjtBQUM5RCxRQUFNLGFBQWEsT0FBTyxLQUFLLFlBQVksVUFBVSxTQUFTO0FBQzlELFNBQU0sK0JBQWM7QUFBQSxJQUNsQixZQUFZLHNCQUFLO0FBQUEsTUFDZixZQUFZO0FBQUEsTUFDWixhQUFhLFFBQVEsSUFBSTtBQUFBLE1BQ3pCLFdBQVcsUUFBUSxJQUFJO0FBQUE7QUFBQSxJQUV6QixhQUFhLFdBQVcsUUFBUSxJQUFJO0FBQUE7QUFFdEMsVUFBTztBQUNQLFFBQUs7QUFBQTs7O0FES1AsSUFBSSxnQkFBZ0IsUUFBUSxJQUFJO0FBQ2hDLElBQUksQ0FBQyxlQUFlO0FBQ2xCLFFBQU0sSUFBSSxNQUFNO0FBQUE7QUFHbEIsSUFBSSxVQUFVLDhDQUEyQjtBQUFBLEVBQ3ZDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFNBQVMsQ0FBQztBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUSxLQUFLLEtBQUssS0FBSztBQUFBLElBQ3ZCLFVBQVU7QUFBQTtBQUFBO0FBSVAsd0JBQXdCLFNBQWtCO0FBQy9DLFNBQU8sUUFBUSxXQUFXLFFBQVEsUUFBUSxJQUFJO0FBQUE7QUFHaEQsNEJBQW1DLFNBQWtCO0FBQ25ELE1BQUksVUFBVSxNQUFNLGVBQWU7QUFDbkMsTUFBSSxZQUFZLFFBQVEsSUFBSTtBQUM1QixNQUFJLENBQUMsYUFBYSxPQUFPLGNBQWM7QUFBVSxXQUFPO0FBQ3hELFNBQU87QUFBQTtBQUdULDJCQUFrQyxTQUE0QztBQUM1RSxNQUFJLFlBQVksTUFBTSxhQUFhO0FBQ25DLE1BQUksT0FBTyxjQUFjLFVBQVU7QUFDakMsV0FBTztBQUFBO0FBR1QsTUFBSTtBQUNGLFVBQU0sYUFBYSxNQUFNLDRCQUFVLGNBQWM7QUFDakQsV0FBTztBQUFBLFdBQ0EsR0FBUDtBQUNBLFlBQVEsSUFBSSxxQkFBcUI7QUFDakMsV0FBTztBQUFBO0FBQUE7QUFJWCx5QkFBZ0MsU0FBMEM7QUFDeEUsTUFBSTtBQUNGLFFBQUksV0FBVyxNQUFNLFlBQVk7QUFDakMsV0FBTyxzQ0FBVSxRQUFPO0FBQUEsV0FDakIsT0FBUDtBQUNBLFlBQVEsSUFBSSxtQkFBbUI7QUFDL0IsV0FBTztBQUFBO0FBQUE7QUFJWCw2QkFDRSxTQUNBLGFBQXFCLElBQUksSUFBSSxRQUFRLEtBQUssVUFDMUM7QUFDQSxNQUFJLFNBQVMsTUFBTSxVQUFVO0FBQzdCLE1BQUksQ0FBQyxVQUFVLE9BQU8sV0FBVyxVQUFVO0FBQ3pDLFFBQUksZUFBZSxJQUFJLGdCQUFnQixDQUFDLENBQUMsY0FBYztBQUN2RCxVQUFNLDRCQUFTLFlBQVk7QUFBQTtBQUU3QixTQUFPO0FBQUE7QUFHVCxzQkFBNkIsU0FBa0I7QUFDN0MsTUFBSSxVQUFVLE1BQU0sZUFBZTtBQUVuQyxTQUFPLDRCQUFTLFlBQVk7QUFBQSxJQUMxQixTQUFTO0FBQUEsTUFDUCxjQUFjLE1BQU0sUUFBUSxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBS2pELGlDQUF3QyxXQUFtQixZQUFvQjtBQUM3RSxNQUFJLFVBQVUsTUFBTSxRQUFRO0FBQzVCLFVBQVEsSUFBSSxhQUFhO0FBQ3pCLFNBQU8sNEJBQVMsWUFBWTtBQUFBLElBQzFCLFNBQVM7QUFBQSxNQUNQLGNBQWMsTUFBTSxRQUFRLGNBQWM7QUFBQTtBQUFBO0FBQUE7OztBRTFHaEQ7QUFBQSxtQkFBa0I7QUFDbEIsbUJBQWtCO0FBUVgsa0JBQWtCO0FBQUEsRUFDdkI7QUFBQSxFQUNBLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLEtBQUs7QUFBQSxHQUNKO0FBQ0QsU0FDRSxvQ0FBQyxzQkFBRDtBQUFBLElBQ0UsV0FBVztBQUFBLElBQ1gsU0FBUztBQUFBLElBQ1QsSUFBSSxDQUFDLFdBQVc7QUFBQSxNQUNkLFNBQVM7QUFBQSxNQUVULFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLGdCQUFnQjtBQUFBLE1BQ2hCLFFBQVE7QUFBQSxNQUNSLGNBQWM7QUFBQSxNQUVkLGFBQWE7QUFBQSxRQUNYLFNBQVM7QUFBQSxRQUNULFVBQVU7QUFBQSxRQUNWLEtBQUs7QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQLFFBQVE7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFlBQVksNkJBQTZCLE9BQU0sUUFBUSxXQUFXLFNBQVMsT0FBTSxRQUFRLFlBQVk7QUFBQTtBQUFBLE9BRXBHO0FBQUEsS0FHSjtBQUFBOzs7QVZ6QlAsb0JBQWlDO0FBQ2pDLHVCQUlPO0FBQ1Asb0JBQTJCOzs7QVd4QjNCO0FBQUEsb0JBQThCO0FBTTlCLElBQU8sNkJBQVEsaUNBQXNDO0FBQUEsRUFDbkQsT0FBTyxNQUFNO0FBQUE7QUFBQTs7O0FYb0JSLGlCQUFpQjtBQUN0QixTQUFPO0FBQUEsSUFDTDtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBO0FBQUEsSUFFUjtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQVVaLElBQU0sV0FBVyxvQ0FDZixDQUFDLEVBQUUsVUFBVSxTQUF3QixpQkFBaUI7QUFDcEQsUUFBTSxrQkFBa0IsOEJBQVc7QUFHbkMsbURBQWtCLE1BQU07QUFFdEIsaUJBQWEsTUFBTSxZQUFZLFNBQVM7QUFFeEMsVUFBTSxPQUFPLGFBQWEsTUFBTTtBQUNoQyxpQkFBYSxNQUFNO0FBQ25CLFNBQUssUUFBUSxDQUFDLFFBQVE7QUFFcEIsTUFBQyxhQUFhLE1BQWMsV0FBVztBQUFBO0FBR3pDLG9CQUFnQjtBQUFBLEtBRWY7QUFFSCxTQUNFLHFDQUFDLFFBQUQ7QUFBQSxJQUFNLE1BQUs7QUFBQSxLQUNULHFDQUFDLFFBQUQsTUFDRSxxQ0FBQyxRQUFEO0FBQUEsSUFBTSxTQUFRO0FBQUEsTUFDZCxxQ0FBQyxRQUFEO0FBQUEsSUFBTSxNQUFLO0FBQUEsSUFBVyxTQUFRO0FBQUEsTUFDOUIscUNBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLElBQWMsU0FBUyxNQUFNLFFBQVEsUUFBUTtBQUFBLE1BQ3ZELFFBQVEscUNBQUMsU0FBRCxNQUFRLFNBQWlCLE1BQ2xDLHFDQUFDLG9CQUFELE9BQ0EscUNBQUMscUJBQUQsT0FDQSxxQ0FBQyxRQUFEO0FBQUEsSUFDRSxLQUFJO0FBQUEsSUFDSixNQUFLO0FBQUEsTUFFUCxxQ0FBQyxRQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxLQUFJO0FBQUEsTUFFTixxQ0FBQyxRQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxTQUFRO0FBQUEsT0FHWixxQ0FBQyxRQUFELE1BQ0csVUFDRCxxQ0FBQyxpQ0FBRCxPQUNBLHFDQUFDLHVCQUFELE9BQzJDLHFDQUFDLDBCQUFEO0FBQUE7QUFTOUMsSUFBTSxTQUF5QixPQUFPLEVBQUUsY0FBYztBQUMzRCxRQUFNLE9BQU8sTUFBTSxZQUFZO0FBQy9CLFFBQU0sWUFBWSxNQUFNLGFBQWE7QUFFckMsUUFBTSxPQUFtQjtBQUFBLElBQ3ZCO0FBQUEsSUFDQTtBQUFBO0FBRUYsU0FBTztBQUFBO0FBR1QsbUJBQW1CO0FBQUEsRUFDakI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEdBS0M7QUFDRCxTQUNFLHFDQUFDLGNBQUQ7QUFBQSxJQUFjO0FBQUEsSUFBWTtBQUFBLEtBQ3ZCO0FBQUE7QUFLUSxnQkFBZTtBQUM1QixRQUFNLEVBQUUsTUFBTSxjQUFjO0FBRTVCLFNBQ0UscUNBQUMsVUFBRCxNQUNFLHFDQUFDLFdBQUQ7QUFBQSxJQUFXO0FBQUEsSUFBWTtBQUFBLEtBQ3JCLHFDQUFDLFFBQUQsT0FDQSxxQ0FBQyxzQkFBRDtBQUFBO0FBTVIsbUJBQW1CO0FBQUEsRUFDakIsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsVUFBVTtBQUFBLEdBQ1Q7QUFDRCxTQUNFLHFDQUFDLFVBQUQ7QUFBQSxJQUFVLE9BQU87QUFBQSxLQUNiLHFDQUFDLHdCQUFEO0FBQUEsSUFDRSxnQkFBZ0I7QUFBQSxJQUNoQixZQUFZO0FBQUEsSUFDWixJQUFJLEVBQUUsUUFBUSxTQUFTLFNBQVM7QUFBQSxLQUVoQyxxQ0FBQyxVQUFEO0FBQUEsSUFBVSxXQUFVO0FBQUEsSUFBUSxZQUFXO0FBQUEsS0FDckMscUNBQUMsNkJBQUQ7QUFBQSxJQUFZLFNBQVE7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNoQyxRQUVILHFDQUFDLDZCQUFELE1BQWE7QUFBQTtBQU9sQix5QkFBeUI7QUFDOUIsUUFBTSxTQUFTO0FBQ2YsUUFBTSxRQUFRLEdBQUcsT0FBTyxVQUFVLE9BQU87QUFDekMsU0FDRSxxQ0FBQyxXQUFEO0FBQUEsSUFDRSxVQUFVO0FBQUEsSUFDVjtBQUFBLElBQ0EsU0FDRTtBQUFBO0FBQUE7QUFNRCx1QkFBdUIsRUFBRSxTQUEyQjtBQUN6RCxVQUFRLE1BQU07QUFFZCxTQUFPLHFDQUFDLFdBQUQ7QUFBQSxJQUFXLFNBQVMsTUFBTTtBQUFBO0FBQUE7OztBWXBMbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBdUU7QUFFdkUsNEJBQXNCOzs7QUNGdEI7QUFBQSxvQkFBcUI7QUFDckIsdUJBVU87QUFlQSx1QkFBdUI7QUFBQSxFQUM1QjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQSxRQUFRO0FBQUEsRUFDUixjQUFjO0FBQUEsRUFDZCxPQUFPO0FBQUEsRUFDUCxjQUFjO0FBQUEsRUFDZCxhQUFhO0FBQUEsRUFDYixZQUFZO0FBQUEsRUFDWixPQUFPO0FBQUEsR0FDQztBQUNSLFNBQ0Usb0NBQUMsd0JBQUQ7QUFBQSxJQUFPLFNBQVM7QUFBQSxJQUFHLElBQUksRUFBRSxHQUFHO0FBQUEsS0FDMUIsb0NBQUMsb0JBQUQ7QUFBQSxJQUNFLFFBQU87QUFBQSxJQUNQLFVBQVUsTUFBTTtBQUNkLHFDQUFTLFdBQVcsV0FBVyxXQUFXO0FBQUE7QUFBQSxLQUc1QyxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxNQUFLO0FBQUEsSUFBUyxNQUFLO0FBQUEsSUFBUSxPQUFPO0FBQUEsTUFFekMsb0NBQUMsd0JBQUQ7QUFBQSxJQUNFLFNBQVM7QUFBQSxJQUNULFlBQVc7QUFBQSxJQUNYLElBQUk7QUFBQSxNQUNGLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQTtBQUFBLEtBR1Ysb0NBQUMsc0JBQUQsTUFDRSxvQ0FBQyw0QkFBRDtBQUFBLElBQ0UsT0FBTyxpQ0FBUTtBQUFBLElBQ2YsSUFBRztBQUFBLElBQ0gsT0FBTTtBQUFBLElBQ04sWUFDRSxrQ0FBUSxlQUNKLDZCQUNBO0FBQUEsSUFFTixTQUFRO0FBQUEsSUFDUixNQUFLO0FBQUEsSUFDTCxXQUFTO0FBQUEsSUFDVCxjQUFjO0FBQUEsT0FHbEIsb0NBQUMsc0JBQUQsTUFDRSxvQ0FBQyw0QkFBRDtBQUFBLElBQ0UsT0FBTyxpQ0FBUTtBQUFBLElBQ2YsSUFBRztBQUFBLElBQ0gsT0FBTTtBQUFBLElBQ04sWUFDRSxrQ0FBUSxjQUNKLDJCQUNBO0FBQUEsSUFFTixTQUFRO0FBQUEsSUFDUixNQUFLO0FBQUEsSUFDTCxXQUFTO0FBQUEsSUFDVCxjQUFjO0FBQUEsT0FHbEIsb0NBQUMsc0JBQUQsTUFDRSxvQ0FBQyw0QkFBRDtBQUFBLElBQ0UsT0FBTyxpQ0FBUTtBQUFBLElBQ2YsSUFBRztBQUFBLElBQ0gsT0FBTTtBQUFBLElBQ04sWUFDRSxrQ0FBUSxTQUNKLHNCQUNBO0FBQUEsSUFFTixTQUFRO0FBQUEsSUFDUixNQUFLO0FBQUEsSUFDTCxXQUFTO0FBQUEsSUFDVCxjQUFjO0FBQUEsT0FHbEIsb0NBQUMsc0JBQUQsTUFDRSxvQ0FBQyw0QkFBRDtBQUFBLElBQ0UsT0FBTyxpQ0FBUTtBQUFBLElBQ2YsSUFBRztBQUFBLElBQ0gsT0FBTTtBQUFBLElBQ04sWUFDRSxrQ0FBUSxlQUNKLDRCQUNBO0FBQUEsSUFFTixTQUFRO0FBQUEsSUFDUixNQUFLO0FBQUEsSUFDTCxXQUFTO0FBQUEsSUFDVCxjQUFjO0FBQUEsSUFDZCxXQUFTO0FBQUEsSUFDVCxNQUFNO0FBQUEsT0FHVixvQ0FBQyxzQkFBRCxNQUNFLG9DQUFDLDhCQUFEO0FBQUEsSUFBYSxXQUFTO0FBQUEsSUFBQyxTQUFRO0FBQUEsSUFBUyxPQUFPLGlDQUFRO0FBQUEsS0FDckQsb0NBQUMsNkJBQUQ7QUFBQSxJQUFZLElBQUc7QUFBQSxLQUFvQixTQUNuQyxvQ0FBQyx5QkFBRDtBQUFBLElBQ0UsU0FBUTtBQUFBLElBQ1IsSUFBRztBQUFBLElBQ0gsT0FBTTtBQUFBLElBQ04sTUFBSztBQUFBLElBQ0wsY0FBYztBQUFBLEtBRWQsb0NBQUMsMkJBQUQ7QUFBQSxJQUFVLE9BQU87QUFBQSxLQUFRLFNBQ3pCLG9DQUFDLDJCQUFEO0FBQUEsSUFBVSxPQUFPO0FBQUEsS0FBSyxNQUN0QixvQ0FBQywyQkFBRDtBQUFBLElBQVUsT0FBTztBQUFBLEtBQU0sT0FDdkIsb0NBQUMsMkJBQUQ7QUFBQSxJQUFVLE9BQU87QUFBQSxLQUFPLFNBRTFCLG9DQUFDLGlDQUFELE1BQ0csa0NBQVEsUUFDTCxxQkFDQSx5REFLVixvQ0FBQyxzQkFBRCxNQUNFLG9DQUFDLDhCQUFEO0FBQUEsSUFBYSxXQUFTO0FBQUEsSUFBQyxTQUFRO0FBQUEsSUFBUyxPQUFPLGlDQUFRO0FBQUEsS0FDckQsb0NBQUMsNkJBQUQ7QUFBQSxJQUFZLElBQUc7QUFBQSxLQUF5QixlQUN4QyxvQ0FBQyx5QkFBRDtBQUFBLElBQ0UsU0FBUTtBQUFBLElBQ1IsSUFBRztBQUFBLElBQ0gsT0FBTTtBQUFBLElBQ04sTUFBSztBQUFBLElBQ0wsY0FBYztBQUFBLEtBRWQsb0NBQUMsMkJBQUQ7QUFBQSxJQUFVLE9BQU87QUFBQSxLQUFRLFNBQ3pCLG9DQUFDLDJCQUFEO0FBQUEsSUFBVSxPQUFPO0FBQUEsS0FBUyxVQUMxQixvQ0FBQywyQkFBRDtBQUFBLElBQVUsT0FBTztBQUFBLEtBQU8sUUFDeEIsb0NBQUMsMkJBQUQ7QUFBQSxJQUFVLE9BQU87QUFBQSxLQUFPLFFBQ3hCLG9DQUFDLDJCQUFEO0FBQUEsSUFBVSxPQUFPO0FBQUEsS0FBTyxRQUN4QixvQ0FBQywyQkFBRDtBQUFBLElBQVUsT0FBTztBQUFBLEtBQVEsU0FDekIsb0NBQUMsMkJBQUQ7QUFBQSxJQUFVLE9BQU87QUFBQSxLQUFTLFdBRTVCLG9DQUFDLGlDQUFELE1BQ0csa0NBQVEsYUFDTCwyQkFDQSxzQ0FJVixvQ0FBQyxzQkFBRCxNQUNFLG9DQUFDLDRCQUFEO0FBQUEsSUFDRSxPQUFPLGlDQUFRO0FBQUEsSUFDZixJQUFHO0FBQUEsSUFDSCxPQUFNO0FBQUEsSUFDTixZQUNFLGtDQUFRLFFBQ0oscUJBQ0E7QUFBQSxJQUVOLFNBQVE7QUFBQSxJQUNSLE1BQUs7QUFBQSxJQUNMLFdBQVM7QUFBQSxJQUNULGNBQWM7QUFBQSxPQUdsQixvQ0FBQyxzQkFBRCxNQUNFLG9DQUFDLHlCQUFEO0FBQUEsSUFBUSxNQUFLO0FBQUEsSUFBUyxTQUFRO0FBQUEsSUFBWSxXQUFTO0FBQUEsS0FDaEQsV0FBVyxzQkFBc0I7QUFBQTs7O0FDN0xoRDtBQU9BLElBQU0sd0JBQXdCO0FBc0I5QixJQUFNLG1CQUFtQixNQUN2QixzQ0FBZSxXQUNiO0FBR0osSUFBTSxrQkFBa0IsQ0FBQyxnQkFDdkIsbUJBQW1CLElBQUk7QUFFekIsSUFBTSxXQUFXLE1BQU07QUFRdkIscUNBQTRDO0FBQUEsRUFDMUM7QUFBQSxFQUNBO0FBQUEsR0FJNkI7QUFDN0IsTUFBSSxXQUFXO0FBQ2YsTUFBSSxRQUFRO0FBQ1YsZUFBVyxTQUFTLE1BQU0sU0FBUyxNQUFNO0FBQUE7QUFFM0MsTUFBSSxhQUFhO0FBQ2YsZUFBVyxTQUFTLE1BQ2xCLGFBQ0Esc0JBQ0EsWUFDRyxNQUFNLEtBQ04sT0FBTyxDQUFDLFNBQVMsS0FBSyxTQUFTLEdBQy9CLE1BQU0sR0FBRyxHQUNULElBQUksQ0FBQyxTQUFTLEtBQUs7QUFBQTtBQUcxQixRQUFNLGdCQUFnQixNQUFNLFNBQVM7QUFDckMsU0FBTyxjQUFjLEtBQUssSUFBSSxDQUFDLFFBQVMsaUJBQUUsSUFBSSxJQUFJLE1BQU8sSUFBSTtBQUFBO0FBRy9ELDRCQUNFLGFBQ2lDO0FBQ2pDLFFBQU0sU0FBUyxnQkFBZ0I7QUFDL0IsUUFBTSxVQUFVLE1BQU0sT0FBTztBQUM3QixNQUFJLFFBQVEsUUFBUTtBQUNsQixXQUFPLGlCQUFFLElBQUksT0FBTyxNQUFRLG1DQUFTLFdBQTBCO0FBQUEsU0FDMUQ7QUFFTCxZQUFRLElBQUk7QUFDWixXQUFPO0FBQUE7QUFBQTtBQUlYLDRCQUFtQyxXQUEwQztBQUMzRSxNQUFJO0FBQ0YsVUFBTSxZQUFZO0FBQUEsTUFDaEIsR0FBRyxVQUFVLE1BQU0sTUFBTSxLQUFLLE9BQU8sQ0FBQyxTQUFTLEtBQUssU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEtBQUs7QUFBQSxNQUNuRixHQUFHLFVBQVUsS0FBSyxPQUFPLENBQUMsU0FBUyxLQUFLLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLO0FBQUE7QUFFekUsY0FBVSxZQUFZO0FBQ3RCLFVBQU0sU0FBUyxNQUFNLG1CQUFtQixJQUFJO0FBRTVDLFVBQU0sZUFBZSxNQUFNLGFBQWEsT0FBTztBQUMvQyxRQUFJLENBQUMsY0FBYztBQUNqQixZQUFNLElBQUksTUFBTTtBQUFBO0FBRWxCLFdBQU87QUFBQSxXQUNBLEdBQVA7QUFDQSxZQUFRLE1BQU0sMkJBQTJCO0FBQ3pDLFVBQU07QUFBQTtBQUFBO0FBSVYsNEJBQ0UsYUFDQSxXQUNvQjtBQUNwQixNQUFJO0FBQ0YsVUFBTSxZQUFZO0FBQUEsTUFDaEIsR0FBRyxVQUFVLE1BQU0sTUFBTSxLQUFLLE9BQU8sQ0FBQyxTQUFTLEtBQUssU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEtBQUs7QUFBQSxNQUNuRixHQUFHLFVBQVUsS0FBSyxPQUFPLENBQUMsU0FBUyxLQUFLLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLO0FBQUE7QUFFekUsY0FBVSxZQUFZO0FBQ3RCLFVBQU0sZ0JBQWdCLGFBQWEsSUFBSTtBQUN2QyxVQUFNLFNBQVMsTUFBTSxnQkFBZ0I7QUFFckMsVUFBTSxlQUFlLE1BQU0sYUFBYSxPQUFPO0FBQy9DLFFBQUksQ0FBQyxjQUFjO0FBQ2pCLFlBQU0sSUFBSSxNQUFNO0FBQUE7QUFFbEIsV0FBTztBQUFBLFdBQ0EsR0FBUDtBQUNBLFlBQVEsTUFBTSwyQkFBMkI7QUFDekMsVUFBTTtBQUFBO0FBQUE7OztBRjdHSCxJQUFNLFVBQXlCLE9BQU87QUFBQSxFQUMzQztBQUFBLEVBQ0E7QUFBQSxNQUNvQztBQUNwQyxRQUFNLFNBQVMsTUFBTSxjQUFjO0FBQ25DLHFDQUFVLE9BQU8sYUFBYTtBQUM5QixRQUFNLFlBQVksTUFBTSxhQUFhLE9BQU87QUFDNUMscUNBQVUsV0FBVztBQUNyQixTQUFPLGlDQUFLLFlBQUwsRUFBZ0I7QUFBQTtBQW1CbEIsSUFBTSxTQUF5QixPQUFPLEVBQUUsU0FBUyxhQUFhO0FBM0NyRTtBQTRDRSxRQUFNLFdBQVcsTUFBTSxRQUFRO0FBQy9CLFFBQU0sY0FBYyxPQUFPO0FBQzNCLFFBQU0sUUFBUSxTQUFTLElBQUk7QUFDM0IsUUFBTSxRQUFRLFNBQVMsSUFBSTtBQUMzQixRQUFNLGNBQWMsU0FBUyxJQUFJO0FBQ2pDLFFBQU0sT0FBTyxTQUFTLElBQUk7QUFDMUIsUUFBTSxjQUFjLFNBQVMsSUFBSTtBQUNqQyxRQUFNLGFBQWEsU0FBUyxJQUFJO0FBQ2hDLFFBQU0sWUFBWSxTQUFTLElBQUk7QUFDL0IsUUFBTSxPQUNKLGNBQU8sU0FBUyxJQUFJLGFBQXBCLG1CQUNJLE1BQU0sS0FDUCxJQUFJLENBQUMsU0FBUyxLQUFLLFlBQVc7QUFFbkMsUUFBTSxTQUFvQjtBQUMxQixNQUFJLENBQUM7QUFBTyxXQUFPLFFBQVE7QUFDM0IsTUFBSSxDQUFDO0FBQU8sV0FBTyxRQUFRO0FBQzNCLE1BQUksQ0FBQztBQUFhLFdBQU8sY0FBYztBQUN2QyxNQUFJLENBQUM7QUFBTSxXQUFPLE9BQU87QUFDekIsTUFBSSxDQUFDO0FBQWEsV0FBTyxjQUFjO0FBQ3ZDLE1BQUksQ0FBQztBQUFZLFdBQU8sYUFBYTtBQUNyQyxNQUFJLENBQUM7QUFBVyxXQUFPLFlBQVk7QUFFbkMsTUFBSSxPQUFPLEtBQUssUUFBUSxRQUFRO0FBQzlCLFdBQU87QUFBQTtBQUdULHFDQUFVLE9BQU8sZ0JBQWdCO0FBQ2pDLHFDQUFVLE9BQU8sVUFBVTtBQUMzQixxQ0FBVSxPQUFPLFVBQVU7QUFDM0IscUNBQVUsT0FBTyxnQkFBZ0I7QUFDakMscUNBQVUsT0FBTyxTQUFTO0FBQzFCLHFDQUFVLE9BQU8sZ0JBQWdCO0FBQ2pDLHFDQUFVLE9BQU8sZUFBZTtBQUNoQyxxQ0FBVSxPQUFPLGNBQWM7QUFDL0IscUNBQVUsT0FBTyxTQUFTO0FBRTFCLFFBQU0sYUFBYSxhQUFhO0FBQUEsSUFDOUI7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUE7QUFHRixTQUFPLDRCQUFTO0FBQUE7QUFHSCxvQkFBb0I7QUFDakMsUUFBTTtBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsTUFDRTtBQUNKLFFBQU0sU0FBUztBQUNmLFNBQ0Usb0NBQUMsZUFBRDtBQUFBLElBQ0UsVUFBVTtBQUFBLElBQ1Y7QUFBQSxJQUNBLE9BQU87QUFBQSxJQUNQO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBLE1BQU0sS0FBSyxLQUFLO0FBQUE7QUFBQTs7O0FHdEh0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF1RTtBQUV2RSw2QkFBc0I7OztBQ0Z0QjtBQU9BLElBQU0seUJBQXdCO0FBa0I5QixJQUFNLG9CQUFtQixNQUN2QixzQ0FBZSxXQUNiO0FBR0osSUFBTSxtQkFBa0IsQ0FBQyxlQUN2QixvQkFBbUIsSUFBSTtBQUV6QixJQUFNLFlBQVcsTUFBTTtBQUV2QixpQ0FBbUU7QUFDakUsUUFBTSxXQUFXO0FBQ2pCLFFBQU0sZ0JBQWdCLE1BQU0sU0FBUztBQUNyQyxTQUFPLGNBQWMsS0FBSyxJQUFJLENBQUMsUUFBUyxpQkFBRSxJQUFJLElBQUksTUFBTyxJQUFJO0FBQUE7QUFHL0QsMkJBQWtDLFlBQTRDO0FBQzVFLFFBQU0sU0FBUyxpQkFBZ0I7QUFDL0IsUUFBTSxVQUFVLE1BQU0sT0FBTztBQUM3QixNQUFJLFFBQVEsUUFBUTtBQUNsQixXQUFPLGlCQUFFLElBQUksT0FBTyxNQUFPLG1DQUFTLFdBQXdCO0FBQUEsU0FDdkQ7QUFFTCxZQUFRLElBQUk7QUFDWixXQUFPO0FBQUE7QUFBQTtBQUlYLDJCQUFrQyxVQUF1QztBQUN2RSxNQUFJO0FBQ0YsVUFBTSxTQUFTLE1BQU0saUJBQWdCLFNBQVMsTUFBTSxJQUFJO0FBRXhELFVBQU0sY0FBYyxNQUFNLFlBQVksU0FBUztBQUMvQyxRQUFJLENBQUMsYUFBYTtBQUNoQixZQUFNLElBQUksTUFBTTtBQUFBO0FBRWxCLFdBQU87QUFBQSxXQUNBLEdBQVA7QUFDQSxZQUFRLE1BQU0sMkJBQTJCO0FBQ3pDLFVBQU07QUFBQTtBQUFBOzs7QUNoRVY7OztBQ0FBO0FBT08sSUFBTSx1QkFBdUI7OztBRENwQyxJQUFNLG9CQUFtQixNQUN2QixzQ0FBZSxXQUNiO0FBR0osSUFBTSxtQkFBa0IsQ0FBQyxjQUN2QixvQkFBbUIsSUFBSTtBQVd6QiwwQkFBaUMsV0FBb0M7QUFDbkUsUUFBTSxTQUFTLGlCQUFnQjtBQUMvQixRQUFNLFVBQVUsTUFBTSxPQUFPO0FBQzdCLE1BQUksUUFBUSxRQUFRO0FBQ2xCLFdBQU8sb0NBQVMsV0FBVTtBQUFBLFNBQ3JCO0FBRUwsWUFBUSxJQUFJO0FBQ1osV0FBTztBQUFBO0FBQUE7OztBRnZCWCxvQkFBeUI7OztBSVZ6QjtBQUFBLHFCQUEyQjtBQUMzQixvQkFBbUI7QUFDbkIsdUJBT087OztBQ1RQO0FBQUEsdUJBQTRDO0FBQzVDLDRCQUEyQjtBQUMzQixrQ0FBaUM7QUFDakMsNEJBQThCO0FBUXZCLHdCQUF3QixJQUEyQztBQUEzQyxlQUFDLFFBQU0sWUFBUCxJQUFtQiwyQkFBbkIsSUFBbUIsQ0FBbEIsUUFBTTtBQUNwQyxTQUNFLG9DQUFDLHFDQUFEO0FBQUEsSUFBc0IsYUFBYTtBQUFBLEtBQ2pDLG9DQUFDLCtCQUFEO0FBQUEsSUFDRSxhQUFhLENBQUMsVUFBVSxvQ0FBQywwQkFBRDtBQUFBLE1BQVcsV0FBUztBQUFBLE9BQUssUUFBVztBQUFBLElBQzVELE9BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLFVBQVUsQ0FBQyxZQUFZO0FBQ3JCLGNBQVE7QUFBQTtBQUFBO0FBQUE7OztBRFBYLGtCQUFrQjtBQUFBLEVBQ3ZCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0EsUUFBUTtBQUFBLEVBQ1IsY0FBYztBQUFBLEVBQ2QsT0FBTztBQUFBLEVBQ1AsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLEdBQ047QUFDRCxTQUNFLG9DQUFDLHdCQUFEO0FBQUEsSUFBTyxTQUFTO0FBQUEsSUFBRyxJQUFJLEVBQUUsR0FBRztBQUFBLEtBQzFCLG9DQUFDLHFCQUFEO0FBQUEsSUFBTSxRQUFPO0FBQUEsS0FDWCxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxNQUFLO0FBQUEsSUFBUyxNQUFLO0FBQUEsSUFBVyxPQUFPO0FBQUEsTUFDNUMsb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsT0FBTyxZQUFZO0FBQUEsTUFFckIsb0NBQUMsU0FBRDtBQUFBLElBQU8sTUFBSztBQUFBLElBQVMsTUFBSztBQUFBLElBQVcsT0FBTztBQUFBLE1BQzVDLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLE9BQU8sNkJBQU0sVUFBVTtBQUFBLE1BRXpCLG9DQUFDLHdCQUFEO0FBQUEsSUFDRSxXQUFXLEVBQUUsSUFBSSxVQUFVLElBQUk7QUFBQSxJQUMvQixTQUFTO0FBQUEsSUFDVCxJQUFJLEVBQUUsR0FBRztBQUFBLEtBRVQsb0NBQUMsd0JBQUQ7QUFBQSxJQUNFLFNBQVM7QUFBQSxJQUNULFlBQVc7QUFBQSxJQUNYLElBQUk7QUFBQSxNQUNGLE9BQU87QUFBQSxNQUNQLFVBQVUsRUFBRSxJQUFJO0FBQUEsTUFDaEIsTUFBTSxFQUFFLElBQUk7QUFBQTtBQUFBLEtBR2Qsb0NBQUMsc0JBQUQsTUFDRSxvQ0FBQyxtQ0FBRDtBQUFBLElBQ0UsU0FDRSxvQ0FBQyx5QkFBRDtBQUFBLE1BQ0UsU0FBUztBQUFBLE1BQ1QsVUFBVSxDQUFDLFVBQVUsZUFBZSxNQUFNLE9BQU87QUFBQSxNQUNqRCxZQUFZLEVBQUUsY0FBYztBQUFBO0FBQUEsSUFHaEMsT0FBTyxjQUFjLGlCQUFpQjtBQUFBLE9BRzFDLG9DQUFDLHNCQUFELE1BQ0Usb0NBQUMsZ0JBQUQ7QUFBQSxJQUFnQjtBQUFBLElBQVk7QUFBQSxJQUFrQixTQUFRO0FBQUEsT0FFeEQsb0NBQUMsc0JBQUQsTUFDRSxvQ0FBQyw0QkFBRDtBQUFBLElBQ0UsT0FBTyxpQ0FBUTtBQUFBLElBQ2YsSUFBRztBQUFBLElBQ0gsT0FBTTtBQUFBLElBQ04sWUFBWSxrQ0FBUSxTQUFRLHNCQUFzQjtBQUFBLElBQ2xELFNBQVE7QUFBQSxJQUNSLE1BQUs7QUFBQSxJQUNMLFdBQVM7QUFBQSxJQUNULGNBQWM7QUFBQSxPQUdsQixvQ0FBQyxzQkFBRCxNQUNFLG9DQUFDLDRCQUFEO0FBQUEsSUFDRSxPQUFPLGlDQUFRO0FBQUEsSUFDZixJQUFHO0FBQUEsSUFDSCxPQUFNO0FBQUEsSUFDTixZQUNFLGtDQUFRLGVBQWMsNEJBQTRCO0FBQUEsSUFFcEQsU0FBUTtBQUFBLElBQ1IsTUFBSztBQUFBLElBQ0wsV0FBUztBQUFBLElBQ1QsY0FBYztBQUFBLE9BR2xCLG9DQUFDLHNCQUFELE1BQ0Usb0NBQUMsNEJBQUQ7QUFBQSxJQUNFLE9BQU8saUNBQVE7QUFBQSxJQUNmLElBQUc7QUFBQSxJQUNILE9BQU07QUFBQSxJQUNOLFlBQVksa0NBQVEsUUFBTyxxQkFBcUI7QUFBQSxJQUNoRCxTQUFRO0FBQUEsSUFDUixNQUFLO0FBQUEsSUFDTCxXQUFTO0FBQUEsSUFDVCxjQUFjO0FBQUEsT0FHbEIsb0NBQUMsc0JBQUQsTUFDRSxvQ0FBQyw0QkFBRDtBQUFBLElBQ0UsT0FBTyxpQ0FBUTtBQUFBLElBQ2YsSUFBRztBQUFBLElBQ0gsT0FBTTtBQUFBLElBQ04sWUFBWSxrQ0FBUSxZQUFXLHlCQUF5QjtBQUFBLElBQ3hELFNBQVE7QUFBQSxJQUNSLE1BQUs7QUFBQSxJQUNMLFdBQVM7QUFBQSxJQUNULGNBQWM7QUFBQSxPQUdsQixvQ0FBQyxzQkFBRCxNQUNFLG9DQUFDLDRCQUFEO0FBQUEsSUFDRSxPQUFPLGlDQUFRO0FBQUEsSUFDZixJQUFHO0FBQUEsSUFDSCxPQUFNO0FBQUEsSUFDTixZQUFZLGtDQUFRLFlBQVcseUJBQXlCO0FBQUEsSUFDeEQsU0FBUTtBQUFBLElBQ1IsTUFBSztBQUFBLElBQ0wsV0FBUztBQUFBLElBQ1QsY0FBYztBQUFBLE9BR2xCLG9DQUFDLHNCQUFELE1BQ0Usb0NBQUMsNEJBQUQ7QUFBQSxJQUNFLE9BQU8saUNBQVE7QUFBQSxJQUNmLElBQUc7QUFBQSxJQUNILE9BQU07QUFBQSxJQUNOLFlBQVksa0NBQVEsUUFBTyxxQkFBcUI7QUFBQSxJQUNoRCxTQUFRO0FBQUEsSUFDUixNQUFLO0FBQUEsSUFDTCxXQUFTO0FBQUEsSUFDVCxjQUFjO0FBQUEsUUFJcEIsb0NBQUMsd0JBQUQ7QUFBQSxJQUNFLFNBQVM7QUFBQSxJQUNULFdBQVcsRUFBRSxJQUFJLFVBQVUsSUFBSTtBQUFBLElBQy9CLGdCQUFlO0FBQUEsSUFDZixJQUFJLEVBQUUsTUFBTTtBQUFBLEtBRVosb0NBQUMsc0JBQUQ7QUFBQSxJQUFLLElBQUksRUFBRSxNQUFNLE9BQU8sV0FBVztBQUFBLEtBQ2pDLG9DQUFDLHVCQUFEO0FBQUEsSUFDRSxRQUFPO0FBQUEsSUFDUCxpQkFBZ0I7QUFBQSxJQUNoQixVQUFVO0FBQUEsSUFDVixPQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsT0FNbEIsb0NBQUMsd0JBQUQ7QUFBQSxJQUFPLFdBQVc7QUFBQSxJQUFPLFNBQVM7QUFBQSxJQUFHLGdCQUFlO0FBQUEsS0FDbEQsb0NBQUMseUJBQUQ7QUFBQSxJQUNFLFdBQVc7QUFBQSxJQUNYLElBQUksU0FBUztBQUFBLElBQ2IsUUFBTztBQUFBLElBQ1AsT0FBTTtBQUFBLEtBQ1AsWUFHRCxvQ0FBQyx5QkFBRDtBQUFBLElBQVEsTUFBSztBQUFBLElBQVMsU0FBUTtBQUFBLEtBQVk7QUFBQTs7O0FKN0pqRCxJQUFNLFVBQXlCLE9BQU87QUFBQSxFQUMzQztBQUFBLEVBQ0E7QUFBQSxNQUNvQztBQUNwQyxRQUFNLFNBQVMsTUFBTSxjQUFjO0FBQ25DLE1BQUksV0FBVztBQUNmLE1BQUksUUFBUTtBQUNWLFVBQU0sVUFBVSxNQUFNLFdBQVc7QUFDakMsUUFBSSxDQUFDLG9DQUFTLFlBQVksU0FBUyxZQUFXO0FBQzVDLGFBQU8sNkJBQVM7QUFBQTtBQUFBO0FBR3BCLHNDQUFVLE9BQU8sWUFBWTtBQUM3QixRQUFNLFdBQVcsTUFBTSxZQUFZLE9BQU87QUFDMUMsc0NBQVUsVUFBVTtBQUNwQixTQUFPLGlDQUFLLFdBQUwsRUFBZTtBQUFBO0FBVWpCLElBQU0sVUFBeUIsT0FBTyxFQUFFLGNBQWM7QUExQzdEO0FBMkNFLFFBQU0sV0FBVyxNQUFNLFFBQVE7QUFFL0IsUUFBTSxRQUFRLFNBQVMsSUFBSTtBQUMzQixRQUFNLE9BQU8sU0FBUyxJQUFJO0FBQzFCLFFBQU0sV0FBVyxTQUFTLElBQUk7QUFDOUIsUUFBTSxjQUFjLFNBQVMsSUFBSTtBQUNqQyxRQUFNLFdBQVcsU0FBUyxJQUFJO0FBQzlCLFFBQU0sV0FBVyxTQUFTLElBQUk7QUFDOUIsUUFBTSxXQUFXLFNBQVMsSUFBSTtBQUM5QixRQUFNLE9BQU8sY0FBTyxTQUFTLElBQUksYUFBcEIsbUJBQThCLE1BQU0sU0FBUTtBQUN6RCxRQUFNLGNBQWMsU0FBUyxJQUFJLG1CQUFtQjtBQUNwRCxRQUFNLGNBQWMsU0FDakIsU0FBUyxJQUFJLGtCQUE2QixLQUMzQztBQUdGLFFBQU0sU0FBb0I7QUFDMUIsTUFBSSxDQUFDO0FBQU8sV0FBTyxRQUFRO0FBQzNCLE1BQUksQ0FBQztBQUFNLFdBQU8sT0FBTztBQUN6QixNQUFJLENBQUM7QUFBVSxXQUFPLFdBQVc7QUFDakMsTUFBSSxDQUFDO0FBQWEsV0FBTyxjQUFjO0FBQ3ZDLE1BQUksQ0FBQztBQUFVLFdBQU8sY0FBYztBQUNwQyxNQUFJLENBQUM7QUFBVSxXQUFPLGNBQWM7QUFDcEMsTUFBSSxDQUFDO0FBQU0sV0FBTyxjQUFjO0FBRWhDLE1BQUksT0FBTyxLQUFLLFFBQVEsUUFBUTtBQUM5QixXQUFPO0FBQUE7QUFHVCxzQ0FBVSxPQUFPLFVBQVU7QUFDM0Isc0NBQVUsT0FBTyxTQUFTO0FBQzFCLHNDQUFVLE9BQU8sYUFBYTtBQUM5QixzQ0FBVSxPQUFPLGdCQUFnQjtBQUNqQyxzQ0FBVSxPQUFPLGFBQWE7QUFDOUIsc0NBQVUsT0FBTyxnQkFBZ0I7QUFDakMsc0NBQVUsT0FBTyxnQkFBZ0I7QUFDakMsc0NBQVUsT0FBTyxhQUFhO0FBQzlCLHNDQUFVLE9BQU8sYUFBYTtBQUM5QixzQ0FBVSxPQUFPLFNBQVM7QUFFMUIsUUFBTSxZQUFZO0FBQUEsSUFDaEI7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQTtBQUdGLFNBQU8sNkJBQVM7QUFBQTtBQUdILG1CQUFtQjtBQUNoQyxRQUFNO0FBQUEsSUFDSjtBQUFBLElBQ0EsYUFBYTtBQUFBLElBQ2I7QUFBQSxJQUNBO0FBQUEsSUFDQSxVQUFVO0FBQUEsSUFDVjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxNQUNFO0FBQ0osUUFBTSxDQUFDLE1BQU0sV0FBVyw0QkFBc0IsSUFBSSxLQUFLO0FBQ3ZELFFBQU0sQ0FBQyxVQUFVLGVBQWUsNEJBQWlCO0FBQ2pELFFBQU0sQ0FBQyxhQUFhLGtCQUFrQiw0QkFBUztBQUMvQyxRQUFNLFNBQVM7QUFDZiw4QkFBNEIsT0FBTztBQUNqQyxnQkFBWTtBQUFBO0FBR2QsU0FDRSxvQ0FBQyxVQUFEO0FBQUEsSUFDRTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0EsTUFBTSw4QkFBTSxLQUFLLFVBQVM7QUFBQTtBQUFBOzs7QU12SWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXVFO0FBRXZFLDZCQUFzQjtBQU9mLElBQU0sVUFBeUIsT0FBTztBQUFBLEVBQzNDO0FBQUEsRUFDQTtBQUFBLE1BQ29DO0FBQ3BDLFFBQU0sU0FBUyxNQUFNLGNBQWM7QUFFbkMsUUFBTSxPQUFtQjtBQUFBLElBQ3ZCO0FBQUE7QUFHRixTQUFPO0FBQUE7QUFtQkYsSUFBTSxVQUF5QixPQUFPLEVBQUUsY0FBYztBQXRDN0Q7QUF1Q0UsUUFBTSxXQUFXLE1BQU0sUUFBUTtBQUUvQixRQUFNLFFBQVEsU0FBUyxJQUFJO0FBQzNCLFFBQU0sUUFBUSxTQUFTLElBQUk7QUFDM0IsUUFBTSxjQUFjLFNBQVMsSUFBSTtBQUNqQyxRQUFNLE9BQU8sU0FBUyxJQUFJO0FBQzFCLFFBQU0sY0FBYyxTQUFTLElBQUk7QUFDakMsUUFBTSxhQUFhLFNBQVMsSUFBSTtBQUNoQyxRQUFNLFlBQVksU0FBUyxJQUFJO0FBQy9CLFFBQU0sT0FDSixjQUFPLFNBQVMsSUFBSSxhQUFwQixtQkFDSSxNQUFNLEtBQ1AsSUFBSSxDQUFDLFNBQVMsS0FBSyxZQUFXO0FBRW5DLFFBQU0sU0FBb0I7QUFDMUIsTUFBSSxDQUFDO0FBQU8sV0FBTyxRQUFRO0FBQzNCLE1BQUksQ0FBQztBQUFPLFdBQU8sUUFBUTtBQUMzQixNQUFJLENBQUM7QUFBYSxXQUFPLGNBQWM7QUFDdkMsTUFBSSxDQUFDO0FBQU0sV0FBTyxPQUFPO0FBQ3pCLE1BQUksQ0FBQztBQUFhLFdBQU8sY0FBYztBQUN2QyxNQUFJLENBQUM7QUFBWSxXQUFPLGFBQWE7QUFDckMsTUFBSSxDQUFDO0FBQVcsV0FBTyxZQUFZO0FBRW5DLE1BQUksT0FBTyxLQUFLLFFBQVEsUUFBUTtBQUM5QixXQUFPO0FBQUE7QUFHVCxzQ0FBVSxPQUFPLFVBQVU7QUFDM0Isc0NBQVUsT0FBTyxVQUFVO0FBQzNCLHNDQUFVLE9BQU8sZ0JBQWdCO0FBQ2pDLHNDQUFVLE9BQU8sU0FBUztBQUMxQixzQ0FBVSxPQUFPLGdCQUFnQjtBQUNqQyxzQ0FBVSxPQUFPLGVBQWU7QUFDaEMsc0NBQVUsT0FBTyxjQUFjO0FBQy9CLHNDQUFVLE9BQU8sU0FBUztBQUUxQixRQUFNLGFBQWE7QUFBQSxJQUNqQjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQTtBQUdGLFNBQU8sNkJBQVM7QUFBQTtBQUdILG1CQUFtQjtBQUNoQyxRQUFNLEVBQUUsV0FBVztBQUNuQixRQUFNLFNBQVM7QUFDZixTQUFPLG9DQUFDLGVBQUQ7QUFBQSxJQUFlLFVBQVE7QUFBQSxJQUFDO0FBQUEsSUFBZ0IsT0FBTztBQUFBO0FBQUE7OztBQzVGeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQXVCO0FBQ3ZCLHVCQVdPO0FBQ1AscUJBQTBEOzs7QUNiMUQ7QUFBQSx1QkFRTztBQUNQLHFCQUFtQztBQUtuQyx3QkFBMkI7QUFtQnBCLHVCQUF1QjtBQUFBLEVBQzVCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsR0FDcUI7QUFDckIsU0FDRSxvQ0FBQyx1QkFBRDtBQUFBLElBQU0sSUFBSSxFQUFFLFFBQVE7QUFBQSxLQUNsQixvQ0FBQyw4QkFBRCxNQUNFLG9DQUFDLHdCQUFEO0FBQUEsSUFBTyxXQUFXO0FBQUEsSUFBTyxnQkFBZ0I7QUFBQSxLQUN2QyxvQ0FBQyw2QkFBRDtBQUFBLElBQ0UsY0FBWTtBQUFBLElBQ1osU0FBUTtBQUFBLElBQ1IsV0FBVTtBQUFBLElBQ1YsT0FBTTtBQUFBLEtBRUwsUUFFSCxvQ0FBQyx3QkFBRDtBQUFBLElBQU8sV0FBVztBQUFBLElBQU8sU0FBUztBQUFBLElBQUcsWUFBVztBQUFBLEtBQzlDLG9DQUFDLDZCQUFEO0FBQUEsSUFBWSxTQUFRO0FBQUEsSUFBSyxPQUFNO0FBQUEsS0FDN0Isb0NBQUMsMkJBQUQ7QUFBQSxJQUFnQixVQUFTO0FBQUEsT0FFM0Isb0NBQUMsNkJBQUQ7QUFBQSxJQUFZLFNBQVE7QUFBQSxJQUFLLE9BQU07QUFBQSxLQUM1QixZQUVILG9DQUFDLDZCQUFEO0FBQUEsSUFBWSxTQUFRO0FBQUEsSUFBSyxPQUFNO0FBQUEsS0FFNUIsU0FJUCxvQ0FBQyw2QkFBRDtBQUFBLElBQVksU0FBUTtBQUFBLElBQVEsT0FBTTtBQUFBLEtBQy9CLGVBR0wsb0NBQUMsOEJBQUQ7QUFBQSxJQUNFLElBQUk7QUFBQSxNQUNGLGdCQUFnQjtBQUFBO0FBQUEsS0EyQmxCLG9DQUFDLHdCQUFEO0FBQUEsSUFDRSxXQUFXLEVBQUUsSUFBSSxVQUFVLElBQUk7QUFBQSxJQUMvQixZQUFZLEVBQUUsSUFBSSxXQUFXLElBQUk7QUFBQSxJQUNqQyxnQkFBZTtBQUFBLElBQ2YsU0FBUztBQUFBLElBQ1QsSUFBSTtBQUFBLE1BQ0YsT0FBTztBQUFBO0FBQUEsS0FHUixVQUFVLFNBQ1Qsb0NBQUMseUJBQUQ7QUFBQSxJQUNFLFdBQVc7QUFBQSxJQUNYLElBQUksZ0JBQWdCO0FBQUEsSUFDcEIsTUFBSztBQUFBLEtBQ04sVUFHQyxNQUNKLG9DQUFDLHlCQUFEO0FBQUEsSUFDRSxXQUFXO0FBQUEsSUFDWCxNQUFNLHNCQUFzQixlQUFlO0FBQUEsSUFDM0MsUUFBTztBQUFBLElBQ1AsTUFBSztBQUFBLEtBQ047QUFBQTs7O0FEbkdKLElBQU0sVUFBeUIsT0FBTztBQUFBLEVBQzNDO0FBQUEsTUFDb0M7QUFDcEMsUUFBTSxTQUFTLE1BQU0sVUFBVTtBQUMvQixRQUFNLE1BQU0sSUFBSSxJQUFJLFFBQVE7QUFDNUIsUUFBTSxXQUFXLElBQUksYUFBYSxJQUFJLGlCQUFpQjtBQUN2RCxRQUFNLGNBQWMsSUFBSSxhQUFhLElBQUk7QUFDekMsUUFBTSxhQUFhLE1BQU0sc0JBQXNCO0FBQUEsSUFDN0MsUUFBUSxXQUFXLFNBQVM7QUFBQSxJQUM1QixhQUFhLGVBQWU7QUFBQTtBQUU5QixTQUFPLEVBQUUsWUFBWTtBQUFBO0FBR1IsZ0JBQWdCO0FBQzdCLFFBQU0sRUFBRSxZQUFZLFdBQVc7QUFDL0IsU0FDRSxvQ0FBQyx3QkFBRDtBQUFBLElBQ0UsWUFBWTtBQUFBLElBQ1osZ0JBQWU7QUFBQSxJQUNmLFNBQVM7QUFBQSxJQUNULElBQUk7QUFBQSxNQUNGLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQTtBQUFBLEtBR1Qsb0NBQUMsVUFBRCxNQUNFLG9DQUFDLDZCQUFEO0FBQUEsSUFBWSxTQUFRO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBUyxnRUFHNUMsb0NBQUMsMEJBQUQsTUFDRSxvQ0FBQyw2QkFBRDtBQUFBLElBQVksU0FBUTtBQUFBLElBQUssV0FBVTtBQUFBLElBQVMsT0FBTTtBQUFBLEtBQWlCLFFBSXJFLG9DQUFDLHlCQUFEO0FBQUEsSUFBUSxXQUFXO0FBQUEsSUFBTSxJQUFHO0FBQUEsSUFBc0IsTUFBTTtBQUFBLEtBQVMsK0JBSW5FLG9DQUFDLHdCQUFEO0FBQUEsSUFDRSxXQUFXO0FBQUEsSUFDWCxXQUFXLEVBQUUsSUFBSSxVQUFVLElBQUk7QUFBQSxJQUMvQixZQUFZLEVBQUUsSUFBSSxXQUFXLElBQUk7QUFBQSxJQUNqQyxTQUFTO0FBQUEsSUFDVCxJQUFJO0FBQUEsTUFDRixRQUFRO0FBQUE7QUFBQSxLQUdWLG9DQUFDLDRCQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxPQUFNO0FBQUEsSUFDTixNQUFLO0FBQUEsSUFDTCxZQUFZO0FBQUEsTUFDVixnQkFDRSxvQ0FBQyxpQ0FBRDtBQUFBLFFBQWdCLFVBQVM7QUFBQSxTQUN2QixvQ0FBQyx1QkFBRDtBQUFBO0FBQUEsSUFJTixTQUFRO0FBQUEsSUFDUixJQUFJO0FBQUEsTUFDRixNQUFNO0FBQUE7QUFBQSxNQUdWLG9DQUFDLDRCQUFELE1BQ0Usb0NBQUMsbUNBQUQ7QUFBQSxJQUNFLFNBQVMsb0NBQUMseUJBQUQ7QUFBQSxNQUFRLE1BQUs7QUFBQTtBQUFBLElBQ3RCLE9BQU07QUFBQSxPQUdWLG9DQUFDLHlCQUFEO0FBQUEsSUFBUSxTQUFRO0FBQUEsSUFBVyxNQUFLO0FBQUEsS0FBUyxZQUkzQyxvQ0FBQyx3QkFBRDtBQUFBLElBQU8sU0FBUztBQUFBLEtBQ2IsV0FBVyxJQUFJLENBQUMsY0FDZiwwREFDRSxvQ0FBQyxzQkFBRDtBQUFBLElBQ0UsS0FBSyxVQUFVO0FBQUEsSUFDZixJQUFJO0FBQUEsTUFDRixNQUFNLEVBQUUsSUFBSSxXQUFXLElBQUksV0FBVyxJQUFJO0FBQUEsTUFDMUMsUUFBUTtBQUFBO0FBQUEsS0FHVixvQ0FBQyxlQUFEO0FBQUEsSUFDRSxPQUFPLFVBQVU7QUFBQSxJQUNqQixhQUFhLFVBQVU7QUFBQSxJQUN2QixNQUFNLFVBQVU7QUFBQSxJQUNoQixXQUFXLFVBQVU7QUFBQSxJQUNyQixPQUFPLFVBQVU7QUFBQSxJQUNqQixhQUFhLFVBQVU7QUFBQSxJQUN2QixZQUFZLFVBQVU7QUFBQSxJQUN0QixNQUFNLFVBQVU7QUFBQSxJQUNoQixJQUFJLFVBQVU7QUFBQSxJQUNkO0FBQUEsT0FXSixvQ0FBQywwQkFBRDtBQUFBOzs7QUVySVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWtEO0FBRWxELDZCQUFzQjtBQUN0QixvQkFBZ0M7QUFFaEMscUJBQXdCO0FBQ3hCLHVCQUFrRDs7O0FDTmxEO0FBQUEsdUJBQTJCO0FBQzNCLG9CQUF1QjtBQUN2QixrQ0FBd0M7QUFDeEMscUJBQW9CO0FBRXBCLElBQU0sT0FBTywwQkFBTyxPQUFPO0FBQUEsRUFDekIsU0FBUztBQUFBO0FBR1gsSUFBTSxTQUFTLDBCQUFPLFFBQVE7QUFBQSxFQUM1QixTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxjQUFjO0FBQUEsRUFDZCxZQUFZO0FBQUEsRUFDWixTQUFTO0FBQUE7QUFHWCxJQUFNLGNBQWMsMEJBQU8sUUFBUTtBQUFBLEVBQ2pDLFNBQVM7QUFBQSxFQUNULFlBQVk7QUFBQTtBQUdQLElBQU0sWUFBWSxDQUFDLEVBQUUsZUFBZTtBQUN6QyxTQUNFLG9DQUFDLHFDQUFELGlDQUFlLDJDQUFmO0FBQUEsSUFBNkIsTUFBTTtBQUFBLElBQVUsVUFBUztBQUFBLElBQU0sT0FBTztBQUFBLE1BQ2hFLENBQUMsRUFBRSxXQUFXLE9BQU8sUUFBUSxjQUFjLG9CQUMxQyxvQ0FBQyx3QkFBRDtBQUFBLElBQ0U7QUFBQSxJQUNBLElBQUksaUNBQ0MsUUFERDtBQUFBLE1BRUYsU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBO0FBQUEsS0FHVixPQUFPLElBQUksQ0FBQyxNQUFNLE1BQ2pCLG9DQUFDLE1BQUQ7QUFBQSxJQUFNLEtBQUs7QUFBQSxLQUFPLGFBQWEsRUFBRSxNQUFNLEtBQUssT0FDMUMsb0NBQUMsUUFBRCxNQUFTLElBQUksSUFDYixvQ0FBQyxhQUFELE1BQ0csS0FBSyxJQUFJLENBQUMsT0FBTyxRQUFRO0FBQ3hCLFVBQStCLG1CQUFjLEVBQUUsT0FBTyxRQUE5QywwQkFBdUIsSUFBVixrQkFBVSxJQUFWLENBQWI7QUFDUixVQUFNLG9CQUFvQixVQUFTLFFBQVEsT0FBTztBQUNsRCxXQUNFLG9DQUFDLFFBQUQ7QUFBQSxNQUNFO0FBQUEsT0FDSSxRQUZOO0FBQUEsTUFHRSx5QkFBeUI7QUFBQSxRQUN2QixRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBRHJDaEMsa0JBQXFCOzs7QUVWckI7QUFBQSx5QkFBMEI7QUFFMUIsc0JBQTZCLFFBQWdCO0FBQzNDLFFBQU0sU0FBUyxNQUFNLGtDQUFVO0FBQUEsSUFDN0I7QUFBQTtBQUVGLFNBQU87QUFBQTs7O0FGWUYsSUFBTSxVQUF5QixPQUFPO0FBQUEsRUFDM0M7QUFBQSxFQUNBO0FBQUEsTUFDeUI7QUFDekIsUUFBTSxTQUFTLE1BQU0sVUFBVTtBQUMvQixNQUFJLFdBQVc7QUFDZixNQUFJLFFBQVE7QUFDVixVQUFNLFVBQVUsTUFBTSxXQUFXO0FBQ2pDLFFBQUksbUNBQVMsWUFBWSxTQUFTLFdBQVc7QUFDM0MsaUJBQVc7QUFBQTtBQUFBO0FBR2Ysc0NBQVUsT0FBTyxZQUFZO0FBQzdCLFFBQU0sV0FBVyxNQUFNLFlBQVksT0FBTztBQUMxQyxzQ0FBVSxVQUFVO0FBQ3BCLFFBQU0sRUFBRSxNQUFNLGdCQUFnQixNQUFNLE9BQU8sU0FBUztBQUNwRCxTQUFPLGlDQUFLLFdBQUwsRUFBZSxNQUFNO0FBQUE7QUFHOUIsSUFBTSxLQUFLLENBQUMsVUFDVixvQ0FBQyw2QkFBRDtBQUFBLEVBQ0UsU0FBUTtBQUFBLEVBQ1IsT0FBTTtBQUFBLEVBQ04sSUFBSSxFQUFFLGNBQWM7QUFBQSxHQUNoQjtBQUdSLElBQU0sS0FBSyxDQUFDLFVBQ1Ysb0NBQUMsNkJBQUQ7QUFBQSxFQUNFLFNBQVE7QUFBQSxFQUNSLE9BQU07QUFBQSxFQUNOLElBQUksRUFBRSxjQUFjO0FBQUEsR0FDaEI7QUFHUixJQUFNLEtBQUssQ0FBQyxVQUNWLG9DQUFDLDZCQUFEO0FBQUEsRUFDRSxTQUFRO0FBQUEsRUFDUixPQUFNO0FBQUEsRUFDTixJQUFJLEVBQUUsY0FBYztBQUFBLEdBQ2hCO0FBR1IsSUFBTSxLQUFLLENBQUMsVUFDVixvQ0FBQyw2QkFBRDtBQUFBLEVBQ0UsU0FBUTtBQUFBLEVBQ1IsT0FBTTtBQUFBLEVBQ04sSUFBSSxFQUFFLGNBQWM7QUFBQSxHQUNoQjtBQUdSLElBQU0sS0FBSyxDQUFDLFVBQ1Ysb0NBQUMsNkJBQUQ7QUFBQSxFQUFZLFNBQVE7QUFBQSxFQUFLLElBQUksRUFBRSxjQUFjO0FBQUEsR0FBUztBQUV4RCxJQUFNLEtBQUssQ0FBQyxVQUNWLG9DQUFDLDZCQUFEO0FBQUEsRUFBWSxTQUFRO0FBQUEsRUFBSyxJQUFJLEVBQUUsY0FBYztBQUFBLEdBQVM7QUFFeEQsSUFBTSxJQUFJLENBQUMsVUFBVSxvQ0FBQyw2QkFBRDtBQUFBLEVBQVksU0FBUTtBQUFBLEVBQU8sV0FBVTtBQUFBLEdBQVE7QUFDbEUsSUFBTSxhQUFhLENBQUMsVUFDbEIsb0NBQUMsNkJBQUQ7QUFBQSxFQUNFLFNBQVE7QUFBQSxFQUNSLFdBQVc7QUFBQSxFQUNYLElBQUk7QUFBQSxJQUNGLFNBQVM7QUFBQSxJQUNULFFBQVE7QUFBQSxJQUNSLFlBQVksQ0FBQyxFQUFFLGNBQWMsWUFBWSxRQUFRLFFBQVE7QUFBQTtBQUFBLEdBRXZEO0FBR1IsSUFBTSxNQUFNLENBQUMsVUFBVSxvQ0FBQyxPQUFELG1CQUFTO0FBQ2hDLElBQU0sT0FBTyxDQUFDLFVBQVUsb0NBQUMsV0FBRCxtQkFBZTtBQUN2QyxJQUFNLElBQUksQ0FBQyxVQUFVLG9DQUFDLHVCQUFELG1CQUFVO0FBRWhCLG9CQUFvQjtBQUNqQyxRQUFNLEVBQUUsVUFBVSxNQUFNLFVBQVUsYUFBYTtBQUUvQyxRQUFNLFlBQVksNEJBQVEsTUFBTSxtQ0FBZ0IsT0FBTyxDQUFDO0FBQ3hELFNBQ0UsMERBQ0Usb0NBQUMsc0JBQUQ7QUFBQSxJQUNFLFdBQVc7QUFBQSxJQUNYLElBQUk7QUFBQSxNQUNGLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULFdBQVc7QUFBQSxNQUNYLGNBQWM7QUFBQTtBQUFBLEtBR2hCLG9DQUFDLHNCQUFEO0FBQUEsSUFDRSxXQUFXO0FBQUEsSUFDWCxJQUFJO0FBQUEsTUFDRixZQUFZLE9BQU87QUFBQSxNQUNuQixRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUE7QUFBQSxNQUdWLFdBQ0Msb0NBQUMsc0JBQUQ7QUFBQSxJQUNFLE9BQU07QUFBQSxJQUNOLGNBQVc7QUFBQSxJQUNYLFdBQVc7QUFBQSxJQUNYLElBQUc7QUFBQSxJQUNILElBQUksRUFBRSxVQUFVLFlBQVksS0FBSyxJQUFJLE9BQU87QUFBQSxLQUU1QyxvQ0FBQyxxQkFBRCxTQUVBLE1BQ0gsWUFDQyxvQ0FBQyxXQUFEO0FBQUEsSUFDRSxZQUFZO0FBQUEsTUFDVixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixJQUFJO0FBQUEsTUFDSixHQUFHO0FBQUEsTUFDSCxZQUFZO0FBQUEsTUFDWixLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixHQUFHO0FBQUE7QUFBQSxPQVVMO0FBQUE7OztBR3hKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWtCO0FBQ2xCLG9CQUFrQjtBQUNsQixxQkFBbUI7QUFDbkIsd0JBQXNCO0FBQ3RCLDBCQUF5QjtBQUN6QiwrQkFBOEI7QUFDOUIscUJBQWtFO0FBQ2xFLHFCQUFvQztBQUNwQyx3QkFBMkI7QUFPcEIsSUFBTSxPQUFxQixNQUFNO0FBQ3RDLFNBQU87QUFBQSxJQUNMLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQTtBQUFBO0FBSVYsSUFBTSxhQUFhO0FBQUEsRUFDeEIsU0FBUztBQUFBLEVBQ1QsU0FBUztBQUFBO0FBS0osSUFBTSxVQUF5QixPQUFPLEVBQUUsU0FBUyxhQUFhO0FBRW5FLFFBQU0sT0FBbUI7QUFBQSxJQUN2QixVQUNFLE9BQU8sYUFBYSxPQUFPLFdBQVcsVUFBVSxXQUFXO0FBQUE7QUFHL0QsU0FBTztBQUFBO0FBR1QsdUJBQXVCLE9BQWdCO0FBQ3JDLE1BQUksT0FBTyxVQUFVLFlBQVksTUFBTSxNQUFNLGlCQUFpQixNQUFNO0FBQ2xFLFdBQU87QUFBQTtBQUFBO0FBSVgsMEJBQTBCLFVBQW1CO0FBQzNDLE1BQUksT0FBTyxhQUFhLFlBQVksU0FBUyxVQUFVLEdBQUc7QUFDeEQsV0FBTztBQUFBO0FBQUE7QUFpQkksaUJBQWlCO0FBaEVoQztBQWlFRSxRQUFNLEVBQUUsVUFBVSxpQkFBaUI7QUFDbkMsUUFBTSxDQUFDLFlBQVksaUJBQWlCLDZCQUFtQjtBQUN2RCxRQUFNLENBQUMsVUFBVSxlQUFlLDZCQUFTO0FBRXpDLFFBQU0saUJBQWlCLENBQUMsT0FBTyxnQkFBZ0I7QUFDN0MsUUFBSSxDQUFDO0FBQWE7QUFDbEIsZ0JBQVk7QUFBQTtBQUdkLGdDQUFVLE1BQU07QUFDZCxRQUFJLGlCQUFpQixVQUFVO0FBQzdCLGtCQUFZO0FBQUE7QUFBQSxLQUViLENBQUM7QUFFSiw4QkFDRSxPQUNlO0FBQ2YsVUFBTTtBQUNOLFVBQU0sU0FBUyxNQUFNO0FBQ3JCLFVBQU0sT0FBTyxJQUFJLFNBQVM7QUFDMUIsVUFBTSxZQUFXLEtBQUssSUFBSTtBQUMxQixVQUFNLFFBQVEsS0FBSyxJQUFJO0FBQ3ZCLFVBQU0sV0FBVyxLQUFLLElBQUk7QUFFMUIsUUFDRSxPQUFPLGNBQWEsWUFDcEIsT0FBTyxVQUFVLFlBQ2pCLE9BQU8sYUFBYSxVQUNwQjtBQUNBLGFBQU8sY0FBYztBQUFBLFFBQ25CLFdBQVc7QUFBQTtBQUFBO0FBSWYsVUFBTSxTQUFTLEVBQUUscUJBQVUsT0FBTztBQUNsQyxVQUFNLGNBQWM7QUFBQSxNQUNsQixPQUFPLGNBQWM7QUFBQSxNQUNyQixVQUFVLGlCQUFpQjtBQUFBO0FBRTdCLFFBQUksT0FBTyxPQUFPLGFBQWEsS0FBSztBQUNsQyxhQUFPLGNBQWMsRUFBRSxhQUFhO0FBRXRDLFlBQVE7QUFBQSxXQUNELFdBQVcsU0FBUztBQUN2QixZQUFJO0FBQ0YsZ0JBQU0sT0FBTyxNQUFNLHVCQUF1QixFQUFFLE9BQU87QUFDbkQsY0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLE9BQU87QUFDeEIsbUJBQU8sY0FBYztBQUFBLGNBQ25CO0FBQUEsY0FDQSxXQUFXO0FBQUE7QUFBQTtBQUdmO0FBQUEsaUJBQ08sT0FBUDtBQUNBLGlCQUFPLGNBQWM7QUFBQSxZQUNuQjtBQUFBLFlBQ0EsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSVosV0FBVyxTQUFTO0FBT3ZCLFlBQUk7QUFDRixnQkFBTSxPQUFPLE1BQU0sdUJBQXVCLEVBQUUsT0FBTztBQUNuRDtBQUFBLGlCQUNPLE9BQVA7QUFDQSxpQkFBTyxjQUFjO0FBQUEsWUFDbkI7QUFBQSxZQUNBLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUlSO0FBQ1AsZUFBTyxjQUFjO0FBQUEsVUFDbkI7QUFBQSxVQUNBLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtuQixTQUNFLDBEQUNFLG9DQUFDLHVCQUFEO0FBQUEsSUFDRSxJQUFJO0FBQUEsTUFDRixVQUFVO0FBQUEsTUFDVixRQUFRO0FBQUE7QUFBQSxLQUdWLG9DQUFDLFVBQUQsTUFDRSxvQ0FBQyw4QkFBRDtBQUFBLElBQVksU0FBUTtBQUFBLElBQUssV0FBVztBQUFBLEtBQ2pDLFdBRUgsb0NBQUMscUJBQUQ7QUFBQSxJQUNFLFFBQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLG9CQUNFLDBDQUFZLGFBQVksdUJBQXVCO0FBQUEsS0FHakQsb0NBQUMsdUJBQUQ7QUFBQSxJQUFPLFdBQVc7QUFBQSxJQUFPLFNBQVM7QUFBQSxLQUNoQyxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxNQUFLO0FBQUEsSUFBUyxNQUFLO0FBQUEsSUFBVyxPQUFPO0FBQUEsTUFDNUMsb0NBQUMsa0NBQUQ7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFdBQVM7QUFBQSxJQUNULFVBQVU7QUFBQSxJQUNWLGNBQVc7QUFBQSxJQUNYLE9BQU07QUFBQSxJQUNOLFdBQVM7QUFBQSxLQUVULG9DQUFDLDZCQUFEO0FBQUEsSUFDRSxPQUFPLFdBQVc7QUFBQSxJQUNsQixjQUFZLFdBQVc7QUFBQSxJQUN2QixPQUFNO0FBQUEsS0FDUCxZQUdELG9DQUFDLDZCQUFEO0FBQUEsSUFDRSxPQUFPLFdBQVc7QUFBQSxJQUNsQixjQUFZLFdBQVc7QUFBQSxLQUN4QixhQUtILG9DQUFDLE9BQUQsTUFDRSxvQ0FBQywyQkFBRDtBQUFBLElBQ0UsT0FBTTtBQUFBLElBQ04sU0FBUTtBQUFBLElBQ1IsV0FBUztBQUFBLElBQ1QsT0FDRSxhQUFhLFdBQVcsVUFBVSxZQUFZO0FBQUEsSUFFaEQsSUFBRztBQUFBLElBQ0gsTUFBSztBQUFBLElBQ0wsY0FBYywrQ0FBWSxXQUFaLG1CQUFvQjtBQUFBLElBQ2xDLGdCQUFjLFFBQVEsK0NBQVksZ0JBQVosbUJBQXlCO0FBQUEsSUFDL0Msb0JBQ0UsZ0RBQVksZ0JBQVosbUJBQXlCLFNBQVEsZ0JBQWdCO0FBQUEsTUFHcEQsZ0RBQVksZ0JBQVosbUJBQXlCLFNBQ3hCLG9DQUFDLDhCQUFEO0FBQUEsSUFDRSxPQUFNO0FBQUEsSUFDTixTQUFRO0FBQUEsSUFDUixNQUFLO0FBQUEsSUFDTCxJQUFHO0FBQUEsS0FFRix5Q0FBWSxZQUFZLFNBRXpCLE9BRU4sb0NBQUMsT0FBRCxNQUNFLG9DQUFDLDJCQUFEO0FBQUEsSUFDRSxPQUFNO0FBQUEsSUFDTixTQUFRO0FBQUEsSUFDUixXQUFTO0FBQUEsSUFDVCxPQUNFLGFBQWEsV0FBVyxVQUFVLFlBQVk7QUFBQSxJQUVoRCxJQUFHO0FBQUEsSUFDSCxNQUFLO0FBQUEsSUFDTCxjQUFjLCtDQUFZLFdBQVosbUJBQW9CO0FBQUEsSUFDbEMsTUFBSztBQUFBLElBQ0wsZ0JBQ0UsUUFBUSwrQ0FBWSxnQkFBWixtQkFBeUIsYUFBYTtBQUFBLElBRWhELG9CQUNFLGdEQUFZLGdCQUFaLG1CQUF5QixZQUNyQixtQkFDQTtBQUFBLE1BSVAsZ0RBQVksZ0JBQVosbUJBQXlCLFlBQ3hCLG9DQUFDLDhCQUFEO0FBQUEsSUFDRSxPQUFNO0FBQUEsSUFDTixTQUFRO0FBQUEsSUFDUixNQUFLO0FBQUEsSUFDTCxJQUFHO0FBQUEsS0FFRix5Q0FBWSxZQUFZLFlBRXpCLE9BRU4sb0NBQUMsT0FBRDtBQUFBLElBQUssSUFBRztBQUFBLEtBQ0wsMENBQVksYUFDWCxvQ0FBQyw4QkFBRDtBQUFBLElBQ0UsT0FBTTtBQUFBLElBQ04sU0FBUTtBQUFBLElBQ1IsTUFBSztBQUFBLElBQ0wsSUFBRztBQUFBLEtBRUYseUNBQVksYUFFYixPQUVOLG9DQUFDLHdCQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxTQUFRO0FBQUEsSUFDUixNQUFLO0FBQUEsSUFDTCxPQUNFLFdBQVcsWUFBWSxXQUFXLFlBQVk7QUFBQSxLQUcvQztBQUFBOzs7QUNuUmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHTyxJQUFNLFVBQXlCLE9BQU8sRUFBRSxTQUFTLGFBQWE7QUFDbkUsVUFBUSxRQUFRO0FBQUEsU0FDVDtBQUNILFlBQU0sT0FBTyxNQUFNLFFBQVE7QUFFM0IsWUFBTSxhQUFhLEtBQUssSUFBSTtBQUM1QixZQUFNLFlBQVksS0FBSyxJQUFJO0FBQzNCLFVBQUksQ0FBQyxXQUFXO0FBQ2QsY0FBTSxJQUFJLFNBQVMsK0NBQStDO0FBQUEsVUFDaEUsUUFBUTtBQUFBO0FBQUE7QUFHWixhQUFPLE1BQU0sa0JBQWtCLFdBQVc7QUFBQTtBQUUxQyxjQUFRLElBQUk7QUFBQTtBQUFBOzs7QUNqQmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUErQztBQUMvQyxxQkFBb0Q7OztBQ0RwRDtBQUFBLGtCQUFpQjtBQUNqQix5QkFBd0I7QUFDeEIsdUJBQXNCO0FBQ3RCLHlCQUF1QjtBQUN2Qix3QkFBb0Q7QUFFcEQscUJBQXFCO0FBU2Qsa0JBQWtCO0FBQUEsRUFDdkI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsR0FDUTtBQUNSLFNBQ0Usb0NBQUMsVUFBRDtBQUFBLElBQVUsSUFBSSxFQUFFLFNBQVM7QUFBQSxLQUN2QixvQ0FBQyxxQkFBRDtBQUFBLElBQU0sSUFBSSxFQUFFLGNBQWMsUUFBUSxVQUFVO0FBQUEsS0FDMUMsb0NBQUMsa0NBQUQ7QUFBQSxJQUFnQixXQUFXO0FBQUEsSUFBTSxJQUFJO0FBQUEsS0FDbkMsb0NBQUMsMEJBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFFBQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLEtBQUs7QUFBQSxNQUVQLG9DQUFDLDRCQUFELE1BQ0Usb0NBQUMsNEJBQUQ7QUFBQSxJQUFZLGNBQVk7QUFBQSxJQUFDLFNBQVE7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUM3QyxRQUVILG9DQUFDLDRCQUFEO0FBQUEsSUFBWSxTQUFRO0FBQUEsSUFBUSxPQUFNO0FBQUEsS0FDL0I7QUFBQTs7O0FEekJSLElBQU0sVUFBeUIsT0FBTztBQUFBLEVBQzNDO0FBQUEsRUFDQTtBQUFBLE1BQ29DO0FBQ3BDLFFBQU0sU0FBUyxNQUFNLFVBQVU7QUFDL0IsTUFBSSxXQUFXO0FBQ2YsTUFBSSxRQUFRO0FBQ1YsVUFBTSxVQUFVLE1BQU0sV0FBVztBQUNqQyxRQUFJLG1DQUFTLFlBQVksU0FBUyxXQUFXO0FBQzNDLGlCQUFXO0FBQUE7QUFBQTtBQUdmLFFBQU0sUUFBUSxNQUFNO0FBQ3BCLFNBQU8sRUFBRSxPQUFPO0FBQUE7QUFHSCxpQkFBZ0I7QUFDN0IsUUFBTSxFQUFFLE9BQU8sYUFBYTtBQUM1QixTQUNFLDBEQUNFLG9DQUFDLHlCQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixZQUFZO0FBQUEsSUFDWixnQkFBZTtBQUFBLElBQ2YsSUFBSTtBQUFBLE1BQ0YsVUFBVTtBQUFBLE1BQ1YsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBO0FBQUEsS0FHVCxvQ0FBQyw4QkFBRDtBQUFBLElBQVksU0FBUTtBQUFBLElBQUssV0FBVTtBQUFBLEtBQVMsU0FHM0MsV0FDQyxvQ0FBQywwQkFBRDtBQUFBLElBQVEsV0FBVztBQUFBLElBQU0sSUFBRztBQUFBLEtBQVksbUJBR3RDLE9BRU4sb0NBQUMseUJBQUQ7QUFBQSxJQUNFLFdBQVcsRUFBRSxJQUFJLFVBQVUsSUFBSTtBQUFBLElBQy9CLElBQUk7QUFBQSxNQUNGLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQTtBQUFBLElBRVQsZ0JBQWU7QUFBQSxLQUVkLE1BQU0sSUFBSSxDQUFDLFNBQ1Ysb0NBQUMsdUJBQUQ7QUFBQSxJQUNFLEtBQUssS0FBSztBQUFBLElBQ1YsSUFBSTtBQUFBLE1BQ0YsTUFBTSxFQUFFLElBQUksV0FBVyxJQUFJLFdBQVcsSUFBSTtBQUFBLE1BQzFDLFFBQVE7QUFBQTtBQUFBLEtBR1Ysb0NBQUMsVUFBRDtBQUFBLElBQ0UsT0FBTyxLQUFLO0FBQUEsSUFDWixhQUFhLEtBQUs7QUFBQSxJQUNsQixVQUFVLEtBQUs7QUFBQSxJQUNmLFVBQVUsS0FBSztBQUFBLElBQ2YsS0FBSyxTQUFTLEtBQUs7QUFBQTtBQUFBOzs7QUUxRWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQW9FO0FBQ3BFLHFCQUFtQjtBQUNuQixrQkFBZ0I7QUFDaEIsb0JBQWtCO0FBQ2xCLG9CQUFrQjs7O0FDSmxCO0FBT0EsSUFBTSx5QkFBeUI7QUFXL0IsSUFBTSxvQkFBbUIsTUFDdkIsc0NBQWUsV0FDYjtBQUdKLElBQU0sbUJBQWtCLENBQUMsZ0JBQ3ZCLG9CQUFtQixJQUFJO0FBRXpCLElBQU0sWUFBVyxDQUFDLFdBQ2hCLG9CQUFtQixNQUFNLFVBQVUsTUFBTTtBQUUzQyxnQ0FBdUMsUUFBb0M7QUFDekUsUUFBTSxXQUFXLFVBQVM7QUFDMUIsUUFBTSxnQkFBZ0IsTUFBTSxTQUFTO0FBQ3JDLFNBQU8sY0FBYyxLQUFLLElBQUksQ0FBQyxRQUFTLGlCQUFFLElBQUksSUFBSSxNQUFPLElBQUk7QUFBQTtBQUcvRCw0QkFBbUMsYUFBd0M7QUFDekUsUUFBTSxTQUFTLGlCQUFnQjtBQUMvQixRQUFNLFVBQVUsTUFBTSxPQUFPO0FBQzdCLE1BQUksUUFBUSxRQUFRO0FBQ2xCLFdBQU8sb0NBQVMsV0FBVTtBQUFBLFNBQ3JCO0FBRUwsWUFBUSxJQUFJO0FBQ1osV0FBTztBQUFBO0FBQUE7QUFJWCw0QkFBbUMsV0FBMEM7QUFDM0UsTUFBSTtBQUNGLFVBQU0sU0FBUyxNQUFNLG9CQUFtQixJQUFJO0FBRTVDLFVBQU0sZUFBZSxNQUFNLGFBQWEsT0FBTztBQUMvQyxRQUFJLENBQUMsY0FBYztBQUNqQixZQUFNLElBQUksTUFBTTtBQUFBO0FBRWxCLFdBQU87QUFBQSxXQUNBLEdBQVA7QUFDQSxZQUFRLE1BQU0sMkJBQTJCO0FBQ3pDLFVBQU07QUFBQTtBQUFBOzs7QUQvQ1YseUJBQXNEO0FBQ3RELHdCQUEyQjtBQUMzQixxQkFBMkI7OztBRWIzQjtBQUFBLHFCQUFvQztBQUNwQyxxQkFBOEI7QUFHdkIsK0JBQ0wsZUFHRztBQUVILFFBQU0sYUFBYTtBQUNuQixRQUFNLENBQUMsTUFBTSxXQUFXLDZCQUFZO0FBSXBDLG1CQUFpQixPQUFTO0FBQ3hCLFlBQVE7QUFBQTtBQUVWLGdDQUFVLE1BQU0sY0FBYyxVQUFVLENBQUM7QUFDekMsU0FBTztBQUFBOzs7QUZBRixJQUFNLFVBQXlCLE9BQU8sRUFBRSxTQUFTLGFBQWE7QUFDbkUsUUFBTSxTQUFTLE1BQU0sY0FBYztBQUVuQyxRQUFNLE9BQW1CO0FBQUEsSUFDdkIsWUFBWSxNQUFNLGlCQUFpQjtBQUFBO0FBR3JDLFNBQU87QUFBQTtBQUdGLElBQU0sVUFBeUIsT0FBTyxFQUFFLFNBQVMsYUFBYTtBQUNuRSxRQUFNLFNBQVMsTUFBTSxjQUFjO0FBQ25DLFFBQU0sT0FBTyxNQUFNLFFBQVE7QUFDM0IsUUFBTSxRQUFRLE9BQU8sS0FBSyxJQUFJO0FBQzlCLFFBQU0sWUFBWSxPQUFPLEtBQUssSUFBSTtBQUNsQyxNQUFJLENBQUMsU0FBUyxDQUFDLFdBQVc7QUFDeEIsVUFBTSxJQUFJLFNBQVMsb0RBQW9EO0FBQUEsTUFDckUsUUFBUTtBQUFBO0FBQUE7QUFHWixTQUFPLE1BQU0sYUFBYTtBQUFBLElBQ3hCO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQTtBQUFBO0FBSVcscUJBQXFCO0FBQ2xDLFFBQU0sT0FBTywrQkFBVztBQUN4QixRQUFNLFNBQVMsNkJBQU07QUFDckIsUUFBTSxFQUFFLGVBQWUsc0JBQWtDLENBQUMsWUFDeEQsNkNBQXFCLFFBQVEsQ0FBQyxnQkFBZSxRQUFRLEVBQUU7QUFHekQsU0FDRSxvQ0FBQyx1QkFBRDtBQUFBLElBQU8sWUFBWTtBQUFBLEtBQ2pCLG9DQUFDLHVCQUFEO0FBQUEsSUFDRSxXQUFXO0FBQUEsSUFDWCxXQUFXO0FBQUEsSUFDWCxXQUFXO0FBQUEsSUFDWCxJQUFJLEVBQUUsUUFBUSxTQUFTLFNBQVMsUUFBUSxRQUFRLFFBQVEsT0FBTztBQUFBLElBQy9ELGdCQUFnQjtBQUFBLElBQ2hCLFlBQVk7QUFBQSxLQUVYLFdBQVcsU0FDVixXQUNHLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRSxZQUFZLEVBQUUsV0FDL0IsSUFBSSxDQUFDLEVBQUUsU0FBUyxNQUNmLG9DQUFDLHFCQUFEO0FBQUEsSUFDRSxXQUFXO0FBQUEsSUFDWCxLQUFLO0FBQUEsSUFDTCxJQUFJO0FBQUEsTUFDRixRQUFRLEdBQUcsUUFBUTtBQUFBLE1BQ25CLFNBQVM7QUFBQSxNQUNULE9BQU8sZUFBZSxXQUFXO0FBQUEsTUFDakMsVUFBVTtBQUFBO0FBQUEsUUFLbEIsb0NBQUMsOEJBQUQ7QUFBQSxJQUFZLFNBQVE7QUFBQSxLQUFLLG9CQUk3QixvQ0FBQyxxQkFBRCxNQUNFLG9DQUFDLHFCQUFEO0FBQUEsSUFBTSxRQUFPO0FBQUEsS0FDWCxvQ0FBQyxTQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxPQUFPLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTTtBQUFBLE1BRTFDLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLE1BQUs7QUFBQSxJQUFTLE1BQUs7QUFBQSxJQUFZLE9BQU8sS0FBSztBQUFBLE1BQ2xELG9DQUFDLHdCQUFEO0FBQUEsSUFBUSxNQUFLO0FBQUEsSUFBUyxTQUFRO0FBQUEsS0FBWTtBQUFBOzs7QUczRnBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBS087QUFFUCw2QkFBc0I7QUFJdEIscUJBQXlCO0FBS2xCLElBQU0sV0FBeUIsT0FBTztBQUFBLEVBQzNDO0FBQUEsRUFDQTtBQUFBLE1BQ29DO0FBQ3BDLFFBQU0sU0FBUyxNQUFNLGNBQWM7QUFDbkMsUUFBTSxVQUFVLE1BQU0sV0FBVztBQUNqQyxNQUFJLENBQUMsb0NBQVMsWUFBWSxTQUFTLFlBQVc7QUFDNUMsV0FBTyw2QkFBUztBQUFBO0FBRWxCLFFBQU0sT0FBbUI7QUFBQSxJQUN2QixVQUFVO0FBQUE7QUFHWixTQUFPO0FBQUE7QUFhRixJQUFNLFVBQXlCLE9BQU8sRUFBRSxjQUFjO0FBMUM3RDtBQTJDRSxRQUFNLFdBQVcsTUFBTSxRQUFRO0FBRS9CLFFBQU0sUUFBUSxTQUFTLElBQUk7QUFDM0IsUUFBTSxPQUFPLFNBQVMsSUFBSTtBQUMxQixRQUFNLFdBQVcsU0FBUyxJQUFJO0FBQzlCLFFBQU0sY0FBYyxTQUFTLElBQUk7QUFDakMsUUFBTSxXQUFXLFNBQVMsSUFBSTtBQUM5QixRQUFNLFdBQVcsU0FBUyxJQUFJO0FBQzlCLFFBQU0sV0FBVyxTQUFTLElBQUk7QUFDOUIsUUFBTSxPQUFPLGNBQU8sU0FBUyxJQUFJLGFBQXBCLG1CQUE4QixNQUFNLFNBQVE7QUFDekQsUUFBTSxjQUFjLFNBQVMsSUFBSSxtQkFBbUI7QUFDcEQsUUFBTSxjQUFjLFNBQ2pCLFNBQVMsSUFBSSxrQkFBNkIsS0FDM0M7QUFHRixRQUFNLFNBQW9CO0FBQzFCLE1BQUksQ0FBQztBQUFPLFdBQU8sUUFBUTtBQUMzQixNQUFJLENBQUM7QUFBTSxXQUFPLE9BQU87QUFDekIsTUFBSSxDQUFDO0FBQVUsV0FBTyxXQUFXO0FBQ2pDLE1BQUksQ0FBQztBQUFhLFdBQU8sY0FBYztBQUN2QyxNQUFJLENBQUM7QUFBVSxXQUFPLFdBQVc7QUFDakMsTUFBSSxDQUFDO0FBQVUsV0FBTyxXQUFXO0FBQ2pDLE1BQUksQ0FBQztBQUFNLFdBQU8sT0FBTztBQUV6QixNQUFJLE9BQU8sS0FBSyxRQUFRLFFBQVE7QUFDOUIsV0FBTztBQUFBO0FBR1Qsc0NBQVUsT0FBTyxVQUFVO0FBQzNCLHNDQUFVLE9BQU8sU0FBUztBQUMxQixzQ0FBVSxPQUFPLGFBQWE7QUFDOUIsc0NBQVUsT0FBTyxnQkFBZ0I7QUFDakMsc0NBQVUsT0FBTyxhQUFhO0FBQzlCLHNDQUFVLE9BQU8sYUFBYTtBQUM5QixzQ0FBVSxPQUFPLGFBQWE7QUFDOUIsc0NBQVUsT0FBTyxTQUFTO0FBQzFCLHNDQUFVLE9BQU8sZ0JBQWdCO0FBQ2pDLHNDQUFVLE9BQU8sZ0JBQWdCO0FBRWpDLFFBQU0sWUFBWTtBQUFBLElBQ2hCO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUE7QUFHRixTQUFPLDZCQUFTO0FBQUE7QUFHSCxvQkFBbUI7QUFDaEMsUUFBTSxDQUFDLE1BQU0sV0FBVyw2QkFBc0IsSUFBSTtBQUNsRCxRQUFNLENBQUMsVUFBVSxlQUFlLDZCQUFpQjtBQUNqRCxRQUFNLENBQUMsYUFBYSxrQkFBa0IsNkJBQVM7QUFDL0MsUUFBTSxFQUFFLGFBQWE7QUFDckIsUUFBTSxTQUFTO0FBQ2YsOEJBQTRCLE9BQU87QUFDakMsZ0JBQVk7QUFBQTtBQUVkLFNBQ0Usb0NBQUMsVUFBRDtBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUE7QUFBQTs7O0FDckhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEscUJBQWtCO0FBQ1gsSUFBTSxhQUFhO0FBQUEsRUFDeEIsUUFBUTtBQUFBLEVBQ1IsU0FBUztBQUFBLEVBQ1QsZUFBZTtBQUFBO0FBRWpCLG9CQUFvQixRQUFRLElBQUk7QUFDOUIsUUFBTSxjQUFjLE9BQU8sT0FBTztBQUFBLElBQ2hDLElBQUk7QUFBQSxLQUNILE1BQU0sYUFBYSxFQUFDLFNBQVMsY0FBYTtBQUM3QyxRQUFNLFdBQVcsNEZBQUUscURBQUMsWUFBWSxJQUFiLE1BQWlCO0FBQ3BDLFNBQU8sWUFBWSxxREFBQyxXQUFELG1CQUFlLFFBQVEsWUFBd0I7QUFBQTtBQUVwRSxJQUFPLFlBQVE7QUFHUixJQUFNLFdBQVc7QUFDakIsSUFBTSxVQUFVLE9BQU8sZUFBZSxlQUFlLFdBQVc7QUFDaEUsSUFBTSxRQUFPLE9BQU8sZUFBZSxlQUFlLFdBQVc7QUFDN0QsSUFBTSxTQUFROzs7QUNyQnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEscUJBQWtCO0FBQ1gsSUFBTSxjQUFhO0FBQUEsRUFDeEIsUUFBUTtBQUFBLEVBQ1IsU0FBUztBQUFBLEVBQ1QsZUFBZTtBQUFBO0FBRWpCLHFCQUFvQixRQUFRLElBQUk7QUFDOUIsUUFBTSxjQUFjLE9BQU8sT0FBTztBQUFBLElBQ2hDLElBQUk7QUFBQSxLQUNILE1BQU0sYUFBYSxFQUFDLFNBQVMsY0FBYTtBQUM3QyxRQUFNLFdBQVcsNEZBQUUscURBQUMsWUFBWSxJQUFiLE1BQWlCO0FBQ3BDLFNBQU8sWUFBWSxxREFBQyxXQUFELG1CQUFlLFFBQVEsWUFBd0I7QUFBQTtBQUVwRSxJQUFPLFlBQVE7QUFHUixJQUFNLFlBQVc7QUFDakIsSUFBTSxXQUFVLE9BQU8sZ0JBQWUsZUFBZSxZQUFXO0FBQ2hFLElBQU0sUUFBTyxPQUFPLGdCQUFlLGVBQWUsWUFBVztBQUM3RCxJQUFNLFNBQVE7OztBQ3JCckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxxQkFBa0I7QUFDWCxJQUFNLGNBQWE7QUFBQSxFQUN4QixRQUFRO0FBQUEsRUFDUixTQUFTO0FBQUEsRUFDVCxlQUFlO0FBQUE7QUFFakIscUJBQW9CLFFBQVEsSUFBSTtBQUM5QixRQUFNLGNBQWMsT0FBTyxPQUFPO0FBQUEsSUFDaEMsSUFBSTtBQUFBLEtBQ0gsTUFBTSxhQUFhLEVBQUMsU0FBUyxjQUFhO0FBQzdDLFFBQU0sV0FBVyw0RkFBRSxxREFBQyxZQUFZLElBQWIsTUFBaUI7QUFDcEMsU0FBTyxZQUFZLHFEQUFDLFdBQUQsbUJBQWUsUUFBUSxZQUF3QjtBQUFBO0FBRXBFLElBQU8sWUFBUTtBQUdSLElBQU0sWUFBVztBQUNqQixJQUFNLFdBQVUsT0FBTyxnQkFBZSxlQUFlLFlBQVc7QUFDaEUsSUFBTSxRQUFPLE9BQU8sZ0JBQWUsZUFBZSxZQUFXO0FBQzdELElBQU0sU0FBUTs7O0FDckJyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxxQkFBeUI7QUFHbEIsSUFBSSxVQUF5QixPQUFPLEVBQUUsY0FBYztBQUN6RCxTQUFPLE9BQU87QUFBQTtBQUdULElBQUksV0FBeUIsWUFBWTtBQUM5QyxTQUFPLDZCQUFTO0FBQUE7OztBQ1RsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBMEM7QUFFMUMscUJBQXFCO0FBSWQsSUFBTSxRQUFxQixNQUFNO0FBQ3RDLFNBQU87QUFBQSxJQUNMLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQTtBQUFBO0FBSUYsaUJBQWlCO0FBQzlCLFNBQ0Usb0NBQUMseUJBQUQ7QUFBQSxJQUNFLElBQUk7QUFBQSxNQUNGLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQTtBQUFBLEtBR1Qsb0NBQUMsVUFBRCxNQUNFLG9DQUFDLDhCQUFEO0FBQUEsSUFBWSxTQUFRO0FBQUEsS0FBSyxlQUN6QixvQ0FBQyw4QkFBRDtBQUFBLElBQVksU0FBUTtBQUFBLEtBQUssdUNBQ3pCLG9DQUFDLDhCQUFEO0FBQUEsSUFBWSxTQUFRO0FBQUEsS0FBSyxVQUN6QixvQ0FBQyw4QkFBRDtBQUFBLElBQVksU0FBUTtBQUFBLEtBQUssZ0dBSXpCLG9DQUFDLHlCQUFEO0FBQUEsSUFDRSxXQUFXLEVBQUUsSUFBSSxVQUFVLElBQUk7QUFBQSxJQUMvQixTQUFTO0FBQUEsSUFDVCxnQkFBZTtBQUFBLEtBRWYsb0NBQUMsMEJBQUQ7QUFBQSxJQUNFLFNBQVE7QUFBQSxJQUNSLE9BQU07QUFBQSxJQUNOLE1BQUs7QUFBQSxJQUNMLFdBQVc7QUFBQSxJQUNYLElBQUc7QUFBQSxLQUNKLHdCQUdELG9DQUFDLDBCQUFEO0FBQUEsSUFDRSxTQUFRO0FBQUEsSUFDUixPQUFNO0FBQUEsSUFDTixNQUFLO0FBQUEsSUFDTCxXQUFXO0FBQUEsSUFDWCxJQUFHO0FBQUEsS0FDSjtBQUFBOzs7QUNsRFg7QUFBQSxJQUFPLDBCQUFRLEVBQUMsV0FBVSxZQUFXLFNBQVEsRUFBQyxVQUFTLG1DQUFrQyxXQUFVLENBQUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsdUNBQXFDLFVBQVMsRUFBQyxRQUFPLEVBQUMsTUFBSyxRQUFPLFlBQVcsUUFBVSxRQUFPLElBQUcsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsMkJBQTBCLFdBQVUsQ0FBQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxNQUFLLG9CQUFtQixNQUFLLG9CQUFtQixRQUFNLDJCQUEwQixFQUFDLE1BQUssMkJBQTBCLFlBQVcsUUFBTyxRQUFPLG9CQUFtQixTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyw4Q0FBNkMsV0FBVSxDQUFDLG9DQUFtQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxnQ0FBK0IsRUFBQyxNQUFLLGdDQUErQixZQUFXLFFBQU8sUUFBTyx5QkFBd0IsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsbURBQWtELFdBQVUsQ0FBQyxvQ0FBbUMscUNBQW9DLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8saUJBQWdCLEVBQUMsTUFBSyxpQkFBZ0IsWUFBVyxRQUFPLFFBQU8sVUFBUyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxvQ0FBbUMsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8saUJBQWdCLEVBQUMsTUFBSyxpQkFBZ0IsWUFBVyxRQUFPLFFBQU8sVUFBUyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxvQ0FBbUMsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8saUJBQWdCLEVBQUMsTUFBSyxpQkFBZ0IsWUFBVyxRQUFPLFFBQU8sVUFBUyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxvQ0FBbUMsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8scUJBQW9CLEVBQUMsTUFBSyxxQkFBb0IsWUFBVyxRQUFPLFFBQU8sUUFBTyxTQUFRLE1BQUssaUJBQWdCLFFBQVUsVUFBUyx3Q0FBdUMsV0FBVSxDQUFDLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLG1CQUFrQixFQUFDLE1BQUssbUJBQWtCLFlBQVcsUUFBTyxRQUFPLFlBQVcsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsc0NBQXFDLFdBQVUsQ0FBQyxvQ0FBbUMscUNBQW9DLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sb0JBQW1CLEVBQUMsTUFBSyxvQkFBbUIsWUFBVyxRQUFPLFFBQU8sYUFBWSxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyx1Q0FBc0MsV0FBVSxRQUFVLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sd0NBQXVDLEVBQUMsTUFBSyx3Q0FBdUMsWUFBVyxRQUFPLFFBQU8saUNBQWdDLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLDJEQUEwRCxXQUFVLENBQUMsb0NBQW1DLHFDQUFvQyxhQUFZLE1BQUssYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLDZCQUE0QixFQUFDLE1BQUssNkJBQTRCLFlBQVcsUUFBTyxRQUFPLHNCQUFxQixTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxnREFBK0MsV0FBVSxDQUFDLG9DQUFtQyxxQ0FBb0MsYUFBWSxNQUFLLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyw0QkFBMkIsRUFBQyxNQUFLLDRCQUEyQixZQUFXLFFBQU8sUUFBTyxlQUFjLFNBQVEsTUFBSyxpQkFBZ0IsUUFBVSxVQUFTLCtDQUE4QyxXQUFVLENBQUMsb0NBQW1DLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGdCQUFlLEVBQUMsTUFBSyxnQkFBZSxZQUFXLFFBQU8sUUFBTyxRQUFVLFNBQVEsTUFBSyxpQkFBZ0IsUUFBVSxVQUFTLG1DQUFrQyxXQUFVLFFBQVUsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxpQkFBZ0IsRUFBQyxNQUFLLGlCQUFnQixZQUFXLFFBQU8sUUFBTyxVQUFTLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLG9DQUFtQyxXQUFVLFFBQVUsYUFBWSxNQUFLLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyx5QkFBd0IsRUFBQyxNQUFLLHlCQUF3QixZQUFXLFFBQU8sUUFBTyxrQkFBaUIsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsNENBQTJDLFdBQVUsUUFBVSxhQUFZLE9BQU0sYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLHlCQUF3QixFQUFDLE1BQUsseUJBQXdCLFlBQVcsUUFBTyxRQUFPLGtCQUFpQixTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyw0Q0FBMkMsV0FBVSxRQUFVLGFBQVksTUFBSyxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFdBQVEsT0FBTTs7O0E3Q21CcHpLLElBQU0sUUFBUSxFQUFFLFFBQVE7QUFDeEIsSUFBTSxTQUFTO0FBQUEsRUFDcEIsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWix3Q0FBd0M7QUFBQSxJQUNwQyxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGdDQUFnQztBQUFBLElBQzVCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosNkJBQTZCO0FBQUEsSUFDekIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWiw0QkFBNEI7QUFBQSxJQUN4QixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLDJCQUEyQjtBQUFBLElBQ3ZCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVoseUJBQXlCO0FBQUEsSUFDckIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWix5QkFBeUI7QUFBQSxJQUNyQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLHFCQUFxQjtBQUFBLElBQ2pCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosb0JBQW9CO0FBQUEsSUFDaEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixtQkFBbUI7QUFBQSxJQUNmLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosaUJBQWlCO0FBQUEsSUFDYixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGlCQUFpQjtBQUFBLElBQ2IsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixpQkFBaUI7QUFBQSxJQUNiLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosaUJBQWlCO0FBQUEsSUFDYixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGdCQUFnQjtBQUFBLElBQ1osSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUE7OztBRHhJZCx3QkFBd0IsT0FBTyxTQUFTO0FBQ3RDLE1BQUk7QUFDSixNQUFJO0FBRUosTUFBSSxNQUFNLGlCQUFpQixNQUFNO0FBQy9CLHdCQUFvQixNQUFNO0FBQUE7QUFHNUIsUUFBTSxhQUFhLE1BQU0sUUFBUTtBQUNqQyxRQUFNLHVCQUF1QixNQUFNLFFBQVE7QUFFM0MsTUFBSSxjQUFjLFFBQVEsWUFBWSxLQUFLLGFBQWE7QUFDdEQsNkJBQXlCLFdBQVcsTUFBTSxLQUFLO0FBQUE7QUFHakQsUUFBTSxjQUFjO0FBQUEsSUFDbEIsK0JBQStCO0FBQUEsSUFDL0I7QUFBQSxJQUNBLHVCQUF1QjtBQUFBO0FBSXpCLFNBQU8sS0FBSyxhQUFhLFFBQVEsU0FBTztBQUN0QyxRQUFJLFlBQVksUUFBUSxNQUFNO0FBQzVCLGFBQU8sWUFBWTtBQUFBO0FBQUE7QUFJdkIsU0FBTztBQUFBO0FBR0YsSUFBTSxVQUFVLHlDQUFxQjtBQUFBLEVBQzFDO0FBQUEsRUFDQTtBQUFBLEVBQ0EsTUFBTTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
