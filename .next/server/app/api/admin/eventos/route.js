"use strict";
(() => {
var exports = {};
exports.id = 956;
exports.ids = [956];
exports.modules = {

/***/ 97783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 28530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 54426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 40252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 61390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "headerHooks": () => (/* binding */ headerHooks),
  "originalPathname": () => (/* binding */ originalPathname),
  "requestAsyncStorage": () => (/* binding */ requestAsyncStorage),
  "routeModule": () => (/* binding */ routeModule),
  "serverHooks": () => (/* binding */ serverHooks),
  "staticGenerationAsyncStorage": () => (/* binding */ staticGenerationAsyncStorage),
  "staticGenerationBailout": () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/admin/eventos/route.tsx
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  "GET": () => (GET),
  "POST": () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(76145);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(19532);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(83804);
// EXTERNAL MODULE: ./node_modules/next/dist/client/components/headers.js
var headers = __webpack_require__(904);
;// CONCATENATED MODULE: ./app/api/admin/eventos/route.tsx


async function POST(request) {
    const formData = await request.formData();
    const token = formData.get("token");
    const bodyData = {
        "creatorId": "64cd42cb68560e328c553fbf",
        "email": formData.get("email"),
        "eventType": formData.get("eventType"),
        "title": formData.get("title"),
        "description": formData.get("description"),
        "address": formData.get("location"),
        "dates": [
            {
                "date": `${formData.get("date")}T20:00:00.000Z`
            }
        ],
        "ticketsAvailableOnline": formData.get("availables"),
        "hasLimitedPlaces": formData.get("limitedPlaces") || false,
        "ticketPurchaseDeadline": `${formData.get("date")}T20:00:00.000Z`
    };
    const res = await fetch("https://mug-tickets-server.vercel.app/api/events/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-token": `${token}`
        },
        body: JSON.stringify(bodyData)
    });
    const data = await res.json();
    return next_response/* default.json */.Z.json(data);
}
async function GET(request, response) {
    const headersList = (0,headers.headers)();
    const token = headersList.get("Authorization");
    console.log(token);
    const res = await fetch("https://mug-tickets-server.vercel.app/api/admins/", {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "x-token": `${token}`
        }
    });
    const data = await res.json();
    return next_response/* default.json */.Z.json(data);
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fadmin%2Feventos%2Froute&name=app%2Fapi%2Fadmin%2Feventos%2Froute&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Feventos%2Froute.tsx&appDir=C%3A%5CDev%5Cmug%5Cclient%5Cmug-tickets-client%5Capp&appPaths=%2Fapi%2Fadmin%2Feventos%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const routeModule = new (module_default())({
    userland: route_namespaceObject,
    pathname: "/api/admin/eventos",
    resolvedPagePath: "C:\\Dev\\mug\\client\\mug-tickets-client\\app\\api\\admin\\eventos\\route.tsx",
    nextConfigOutput: undefined,
  })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/admin/eventos/route"

    

/***/ }),

/***/ 83804:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
// This file is for modularized imports for next/server to get fully-treeshaking.

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _response.NextResponse;
    }
}));
const _response = __webpack_require__(66843); //# sourceMappingURL=next-response.js.map


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [859,904,601,843], () => (__webpack_exec__(61390)));
module.exports = __webpack_exports__;

})();