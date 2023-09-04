exports.id = 835;
exports.ids = [835];
exports.modules = {

/***/ 72142:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "event-card_card__XcYN3",
	"card_image": "event-card_card_image__4fKl8",
	"cardTitle": "event-card_cardTitle__h9D_Y",
	"cardBody": "event-card_cardBody__BZqrL",
	"date": "event-card_date__SOfNg",
	"description": "event-card_description__t4D7V"
};

module.exports.__checksum = "2d29d6b52993"


/***/ }),

/***/ 49001:
/***/ ((module) => {

// Exports
module.exports = {
	"cardsContainer": "events-lists_cardsContainer__UMeVK"
};

module.exports.__checksum = "2e3f7141218d"


/***/ }),

/***/ 58835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ EventsList)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(62208);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(42585);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./app/components/event-card/event-card.module.scss
var event_card_module = __webpack_require__(72142);
var event_card_module_default = /*#__PURE__*/__webpack_require__.n(event_card_module);
;// CONCATENATED MODULE: ./app/components/event-card/index.tsx




// title, timestamp, description, id, price
function EventCard({ showInfo  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/eventos/${showInfo.eventId}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (event_card_module_default()).card,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (event_card_module_default()).card_image,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: showInfo.image ?? "/images/flyer__test.jpg",
                        fill: true,
                        alt: showInfo.title,
                        loading: "lazy"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (event_card_module_default()).cardBody,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: (event_card_module_default()).cardTitle,
                            children: showInfo.title
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (event_card_module_default()).date,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (event_card_module_default()).day,
                                    children: "23/02/2023"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (event_card_module_default()).time,
                                    children: "23:00hs"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (event_card_module_default()).description,
                            children: "Lorem ipsum dolor sit."
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./app/components/events-list/events-lists.module.scss
var events_lists_module = __webpack_require__(49001);
var events_lists_module_default = /*#__PURE__*/__webpack_require__.n(events_lists_module);
;// CONCATENATED MODULE: ./app/components/events-list/index.tsx



// all events
function EventsList({ props =[]  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (events_lists_module_default()).cardsContainer,
        children: props.map((da)=>/*#__PURE__*/ jsx_runtime_.jsx(EventCard, {
                showInfo: da
            }))
    });
}


/***/ }),

/***/ 63881:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy  } = __webpack_require__(35985);
module.exports = createProxy("C:\\Dev\\mug\\client\\mug-tickets-client\\node_modules\\next\\dist\\client\\image.js");
 //# sourceMappingURL=image.js.map


/***/ }),

/***/ 42301:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy  } = __webpack_require__(35985);
module.exports = createProxy("C:\\Dev\\mug\\client\\mug-tickets-client\\node_modules\\next\\dist\\client\\link.js");
 //# sourceMappingURL=link.js.map


/***/ }),

/***/ 62208:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(63881);


/***/ }),

/***/ 42585:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(42301);


/***/ })

};
;