"use strict";
exports.id = 994;
exports.ids = [994];
exports.modules = {

/***/ 36994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET": () => (/* binding */ handler),
/* harmony export */   "POST": () => (/* binding */ handler),
/* harmony export */   "handler": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88354);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19173);
/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2191);



const { GOOGLE_ID , GOOGLE_SECRET  } = process.env;
if (!GOOGLE_ID) {
    throw new Error("Google GOOGLE_ID");
}
if (!GOOGLE_SECRET) {
    throw new Error("Google GOOGLE_SECRET.");
}
const handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()({
    // Configure one or more authentication providers
    providers: [
        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
            profile (profile) {
                const { role ="user" , token ="" , picture , sub , email , name , ...params } = profile;
                return {
                    id: sub,
                    name,
                    role,
                    email,
                    image: picture,
                    token
                };
            },
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "Tu correo electronico"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Tu pass"
                }
            },
            async authorize (credentials) {
                const res = await fetch(`${"https://mug-tickets-server.vercel.app/api"}/panel/login`, {
                    method: "POST",
                    body: JSON.stringify(credentials),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const user = await res.json();
                return user.ok ? user : null;
            }
        })
    ],
    callbacks: {
        async jwt ({ token , user  }) {
            if (!user) {
                return {
                    ...token
                };
            }
            return {
                ...token,
                ...user
            };
        },
        async session ({ session , token  }) {
            session.user = token;
            return session;
        }
    },
    pages: {
        signIn: "/users/login"
    },
    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60,
        updateAge: 24 * 60 * 60
    },
    jwt: {
        maxAge: 24 * 60 * 60
    },
    secret: process.env.NEXTAUTH_SECRET
});



/***/ })

};
;