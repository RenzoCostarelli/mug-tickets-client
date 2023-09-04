"use strict";
exports.id = 816;
exports.ids = [816];
exports.modules = {

/***/ 16079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64085);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63370);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47447);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_base_Switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60572);
/* harmony import */ var _mui_base_Switch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_base_Switch__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 




function EventForm({ event  }) {
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();
    /*async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
     
        const formData = new FormData(event.currentTarget)
        const response = await fetch('/api/admin', {
          method: 'POST',
          body: formData,
        })
     
        // Handle response if necessary
        const data = await response.json()
        // ...
      }*/ const label = {
        slotProps: {
            input: {
                "aria-label": "Demo switch"
            }
        }
    };
    const blue = {
        500: "#007FFF"
    };
    const grey = {
        400: "#8c959f",
        500: "#6e7781",
        600: "#57606a"
    };
    const Root = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.styled)("span")(({ theme  })=>`
        font-size: 0;
        position: relative;
        display: inline-block;
        width: 40px;
        height: 24px;
        margin: 10px;
        cursor: pointer;
      
        &.${_mui_base_Switch__WEBPACK_IMPORTED_MODULE_3__.switchClasses.disabled} {
          opacity: 0.4;
          cursor: not-allowed;
        }
      
        & .${_mui_base_Switch__WEBPACK_IMPORTED_MODULE_3__.switchClasses.track} {
          background: ${theme.palette.mode === "dark" ? grey[600] : grey[400]};
          border-radius: 16px;
          display: block;
          height: 100%;
          width: 100%;
          position: absolute;
        }
      
        & .${_mui_base_Switch__WEBPACK_IMPORTED_MODULE_3__.switchClasses.thumb} {
          display: block;
          width: 16px;
          height: 16px;
          top: 4px;
          left: 4px;
          border-radius: 16px;
          background-color: #fff;
          position: relative;
          
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 120ms;
        }
      
        &.${_mui_base_Switch__WEBPACK_IMPORTED_MODULE_3__.switchClasses.focusVisible} .${_mui_base_Switch__WEBPACK_IMPORTED_MODULE_3__.switchClasses.thumb} {
          background-color: ${grey[500]};
          box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
        }
      
        &.${_mui_base_Switch__WEBPACK_IMPORTED_MODULE_3__.switchClasses.checked} {
          .${_mui_base_Switch__WEBPACK_IMPORTED_MODULE_3__.switchClasses.thumb} {
            left: 20px;
            top: 4px;
            background-color: #fff;
          }
      
          .${_mui_base_Switch__WEBPACK_IMPORTED_MODULE_3__.switchClasses.track} {
            background: ${blue[500]};
          }
        }
      
        & .${_mui_base_Switch__WEBPACK_IMPORTED_MODULE_3__.switchClasses.input} {
          cursor: inherit;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          opacity: 0;
          z-index: 1;
          margin: 0;
        }
        `);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
        component: "form",
        action: "/api/admin/eventos",
        method: "POST",
        sx: {
            backgroundColor: "white",
            px: 2,
            py: 4,
            textAlign: "center",
            borderRadius: 5
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Input, {
                type: "hidden",
                name: "email",
                value: session?.user.email || ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Input, {
                type: "hidden",
                name: "token",
                value: session?.user.token || ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Input, {
                type: "hidden",
                name: "eventId",
                value: event?.eventId || ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {
                id: "title",
                name: "title",
                label: "T\xedtulo de tu evento",
                value: event?.title || "",
                required: true,
                fullWidth: true,
                size: "small",
                margin: "normal"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                id: "description",
                name: "description",
                "aria-label": "minimum height",
                placeholder: "Minimum 3 rows",
                value: event?.description || ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {
                id: "location",
                name: "location",
                label: "Direcci\xf3n",
                required: true,
                fullWidth: true,
                size: "small",
                margin: "normal",
                value: event?.address || ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {
                type: "string",
                id: "eventType",
                name: "eventType",
                label: "Tipo de evento",
                required: true,
                fullWidth: true,
                size: "small",
                margin: "normal",
                value: event?.eventType || ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {
                type: "number",
                id: "availables",
                name: "availables",
                label: "Localidades",
                placeholder: "Entradas disponibles",
                required: true,
                fullWidth: true,
                size: "small",
                margin: "normal",
                value: event?.ticketsAvailableOnline || ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_base_Switch__WEBPACK_IMPORTED_MODULE_3__.Switch, {
                slots: {
                    root: Root
                },
                ...label,
                defaultChecked: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {
                id: "date",
                name: "date",
                type: "date",
                autoComplete: "true",
                required: true,
                fullWidth: true,
                size: "small",
                margin: "normal"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                variant: "contained",
                size: "large",
                fullWidth: true,
                type: "submit",
                children: "Guardar Evento"
            })
        ]
    });
}


/***/ }),

/***/ 81501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35985);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Dev\mug\client\mug-tickets-client\app\components\dashboard-event-form\index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (proxy.default);


/***/ })

};
;