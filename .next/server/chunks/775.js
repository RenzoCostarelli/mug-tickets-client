exports.id = 775;
exports.ids = [775];
exports.modules = {

/***/ 68843:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 64085, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 11398))

/***/ }),

/***/ 44029:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 89222, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 78301, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 83751, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 54765, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5192, 23))

/***/ }),

/***/ 11398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CardInfo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64085);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63370);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sign_out_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32223);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const darkTheme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__.createTheme)({
    palette: {
        mode: "dark"
    }
});
function CardInfo() {
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();
    const avatarUrl = session?.user.image;
    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const open = Boolean(anchorEl);
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                id: "basic-button",
                "aria-controls": open ? "basic-menu" : undefined,
                "aria-haspopup": "true",
                "aria-expanded": open ? "true" : undefined,
                onClick: handleClick,
                children: "Perfil"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Menu, {
                id: "basic-menu",
                anchorEl: anchorEl,
                open: open,
                onClose: handleClose,
                MenuListProps: {
                    "aria-labelledby": "basic-button"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                        disabled: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                            direction: "row",
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                    style: {},
                                    component: "span",
                                    children: session?.user?.email
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Avatar, {
                                    sx: {
                                        width: 24,
                                        height: 24
                                    },
                                    src: avatarUrl,
                                    alt: session?.user?.name
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                        component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Link,
                        href: `/admin/`,
                        children: "Dashboard"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                        component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Link,
                        href: `/admin/eventos`,
                        children: "Eventos"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                        component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Link,
                        href: `/admin/validar`,
                        children: "Qr Scan"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sign_out_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 32223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SignOutButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64085);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63370);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function SignOutButton() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "outlined",
        fullWidth: true,
        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)(),
        children: "Sign out"
    });
}


/***/ }),

/***/ 99119:
/***/ ((module) => {

// Exports
module.exports = {
	"nav_bar": "nav-bar_nav_bar__wZYo3",
	"links": "nav-bar_links__8wd3n"
};

module.exports.__checksum = "30b4a619ff6e"


/***/ }),

/***/ 22476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AdminLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./app/components/admin-navbar/nav-bar.module.scss
var nav_bar_module = __webpack_require__(99119);
var nav_bar_module_default = /*#__PURE__*/__webpack_require__.n(nav_bar_module);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(94145);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(35985);
;// CONCATENATED MODULE: ./app/components/card-info/index.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Dev\mug\client\mug-tickets-client\app\components\card-info\index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
/* harmony default export */ const card_info = (proxy.default);

// EXTERNAL MODULE: ./app/api/auth/[...nextauth]/route.ts
var route = __webpack_require__(36994);
// EXTERNAL MODULE: ./node_modules/next-auth/index.js
var next_auth = __webpack_require__(88354);
;// CONCATENATED MODULE: ./app/components/admin-navbar/index.tsx






const dataSession = async ()=>{
    const session = await (0,next_auth.getServerSession)(route.handler);
    return session;
};
function AdminNavbar() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (nav_bar_module_default()).nav_bar,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(node.Avatar, {
                src: "https://res.cloudinary.com/dxvxzikri/image/upload/v1692558761/dzmlypgcmhpkb5x6seh4.jpg",
                alt: "MUG"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: (nav_bar_module_default()).main_navigation,
                children: dataSession().then((session)=>{
                    return session && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: `${(nav_bar_module_default()).links} ${(nav_bar_module_default()).user_links}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (nav_bar_module_default()).link,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(card_info, {})
                        })
                    });
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./app/styles/global.scss
var global = __webpack_require__(72522);
;// CONCATENATED MODULE: ./app/admin/layout.tsx



const metadata = {
    title: "Admin Mug Tickets"
};
function AdminLayout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(AdminNavbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: children
            })
        ]
    });
}


/***/ })

};
;