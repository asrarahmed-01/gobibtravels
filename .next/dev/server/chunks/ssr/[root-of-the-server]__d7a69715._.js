module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/hooks.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppDispatch",
    ()=>useAppDispatch,
    "useAppSelector",
    ()=>useAppSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
;
const useAppDispatch = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
const useAppSelector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"];
}),
"[project]/src/app/Components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const navItems = [
    {
        name: 'Home',
        href: "/"
    },
    {
        name: 'About Us',
        href: "/about"
    },
    {
        name: 'Tours',
        href: "/tours"
    },
    {
        name: 'Attractions',
        href: "/attractions"
    },
    {
        name: 'Gallery',
        href: "/gallery"
    },
    {
        name: 'Offers',
        href: "/offers"
    },
    {
        name: 'Blogs',
        href: "/blogs"
    },
    {
        name: 'Contact Us',
        href: "/contact"
    }
];
const Navbar = ()=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.ui);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-blue-700/90 backdrop-blur-sm z-50 flex items-center justify-center py-3 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/Navbar.tsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold text-sm tracking-wider",
                            children: "Loading your adventure..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/Navbar.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Components/Navbar.tsx",
                    lineNumber: 28,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/Components/Navbar.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "bg-white shadow-md top-0 z-40 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "text-2xl font-bold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-400",
                                        children: "GOBIB"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/Navbar.tsx",
                                        lineNumber: 40,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Travels"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Components/Navbar.tsx",
                                lineNumber: 39,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(!isOpen),
                                className: " md:hidden focus:outline-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4 6h16M4 12h16M4 18h16"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/Navbar.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/Navbar.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Navbar.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `md:flex ${isOpen ? "block" : "hidden"} md:block`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:flex md:items-center md:space-x-8 ",
                                    children: navItems.map((item)=>{
                                        const isActive = pathname === item.href;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            className: `group relative block mt-4 md:mt-0 text-gray-700 font-medium transition-colors  ${isActive ? 'text-blue-600' : 'hover:text-blue-600'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative pb-2 inline-block ",
                                                children: [
                                                    item.name,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `absolute bottom-0 left-0 h-1 bg-blue-500 rounded-full transition-all duration-300 ease-in-out${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Navbar.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Components/Navbar.tsx",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, item.name, false, {
                                            fileName: "[project]/src/app/Components/Navbar.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/Navbar.tsx",
                                    lineNumber: 63,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Navbar.tsx",
                                lineNumber: 62,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/Navbar.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/Navbar.tsx",
                    lineNumber: 36,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/Components/Navbar.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Navbar;
}),
"[project]/src/lib/slices/uiSlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearError",
    ()=>clearError,
    "default",
    ()=>__TURBOPACK__default__export__,
    "setError",
    ()=>setError,
    "setLoading",
    ()=>setLoading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    isLoading: false,
    error: null
};
const uiSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'ui',
    initialState,
    reducers: {
        setLoading: (state, action)=>{
            state.isLoading = action.payload;
        },
        setError: (state, action)=>{
            state.error = action.payload;
        },
        clearError: (state)=>{
            state.error = null;
        }
    }
});
const { setLoading, setError, clearError } = uiSlice.actions;
const __TURBOPACK__default__export__ = uiSlice.reducer;
}),
"[project]/src/lib/slices/toursSlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearToursError",
    ()=>clearToursError,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fetchTours",
    ()=>fetchTours,
    "fetchToursFailure",
    ()=>fetchToursFailure,
    "fetchToursSuccess",
    ()=>fetchToursSuccess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    tours: [],
    loading: false,
    error: null
};
const fetchTours = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAction"])('tours/fetchTours');
const fetchToursSuccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAction"])('tours/fetchToursSuccess');
const fetchToursFailure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAction"])('tours/fetchToursFailure');
const toursSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'tours',
    initialState,
    reducers: {
        clearToursError: (state)=>{
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchTours, (state)=>{
            console.log('🛫 SLICE: fetchTours Triggered');
            state.loading = true;
            state.error = null;
        }).addCase(fetchToursSuccess, (state, action)=>{
            console.log('🛬 SLICE: fetchToursSuccess with', action.payload.length, 'tours');
            state.loading = false;
            state.tours = action.payload;
        }).addCase(fetchToursFailure, (state, action)=>{
            console.log('💥 SLICE: fetchToursFailure with error', action.payload);
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { clearToursError } = toursSlice.actions;
const __TURBOPACK__default__export__ = toursSlice.reducer;
}),
"[project]/src/lib/slices/homeSlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearHomeError",
    ()=>clearHomeError,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fetchHomeCards",
    ()=>fetchHomeCards,
    "fetchHomeCardsFailure",
    ()=>fetchHomeCardsFailure,
    "fetchHomeCardsSuccess",
    ()=>fetchHomeCardsSuccess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    homeCards: [],
    loading: false,
    error: null
};
const fetchHomeCards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAction"])('home/fetchHomeCards');
const fetchHomeCardsSuccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAction"])('home/fetchHomeCardsSuccess');
const fetchHomeCardsFailure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAction"])('home/fetchHomeCardsFailure');
const homeSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'home',
    initialState,
    reducers: {
        clearHomeError: (state)=>{
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder// Request
        .addCase(fetchHomeCards, (state)=>{
            state.loading = true;
            state.error = null;
        })// Success
        .addCase(fetchHomeCardsSuccess, (state, action)=>{
            state.loading = false;
            state.homeCards = action.payload;
        })// Failure
        .addCase(fetchHomeCardsFailure, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { clearHomeError } = homeSlice.actions;
const __TURBOPACK__default__export__ = homeSlice.reducer;
}),
"[project]/src/lib/slices/attractionsSlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearAttractionsError",
    ()=>clearAttractionsError,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fetchAttractions",
    ()=>fetchAttractions,
    "fetchAttractionsFailure",
    ()=>fetchAttractionsFailure,
    "fetchAttractionsSuccess",
    ()=>fetchAttractionsSuccess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    attractions: [],
    loading: false,
    error: null
};
const fetchAttractions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAction"])('attractions/fetchAttractions');
const fetchAttractionsSuccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAction"])('attractions/fetchAttractionsSuccess');
const fetchAttractionsFailure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAction"])('attractions/fetchAttractionsFailure');
const attractionsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'attractions',
    initialState,
    reducers: {
        clearAttractionsError: (state)=>{
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchAttractions, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchAttractionsSuccess, (state, action)=>{
            state.loading = false;
            state.attractions = action.payload;
        }).addCase(fetchAttractionsFailure, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { clearAttractionsError } = attractionsSlice.actions;
const __TURBOPACK__default__export__ = attractionsSlice.reducer;
}),
"[project]/src/lib/slices/blogsSlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearBlogsError",
    ()=>clearBlogsError,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fetchBlogs",
    ()=>fetchBlogs,
    "fetchBlogsFailure",
    ()=>fetchBlogsFailure,
    "fetchBlogsSuccess",
    ()=>fetchBlogsSuccess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    blogs: [],
    loading: false,
    error: null
};
const fetchBlogs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAction"])('blogs/fetchBlogs');
const fetchBlogsSuccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAction"])('blogs/fetchBlogsSuccess');
const fetchBlogsFailure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAction"])('blogs/fetchBlogsFailure');
const blogsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'blogs',
    initialState,
    reducers: {
        clearBlogsError: (state)=>{
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchBlogs, (state)=>{
            console.log('SLICE: fetchBlogs triggered');
            state.loading = true;
            state.error = null;
        }).addMatcher((action)=>action.type === 'blogs/fetchBlogsSuccess', (state, action)=>{
            console.log('SLICE: fetchBlogsSuccess →', action.payload.length, 'blogs');
            state.loading = false;
            state.blogs = [
                ...action.payload
            ];
        }).addMatcher((action)=>action.type === 'blogs/fetchBlogsFailure', (state, action)=>{
            console.log('SLICE: fetchBlogsFailure →', action.payload);
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { clearBlogsError } = blogsSlice.actions;
const __TURBOPACK__default__export__ = blogsSlice.reducer;
}),
"[project]/src/lib/slices/rootReducer.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux/dist/redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$uiSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/slices/uiSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$toursSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/slices/toursSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$homeSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/slices/homeSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$attractionsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/slices/attractionsSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$blogsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/slices/blogsSlice.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
const rootReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineReducers"])({
    ui: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$uiSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    tours: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$toursSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    home: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$homeSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    attractions: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$attractionsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    blogs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$blogsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
const __TURBOPACK__default__export__ = rootReducer;
}),
"[project]/src/lib/sagas/toursSaga.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "watchFetchTours",
    ()=>watchFetchTours
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$saga$2f$effects$2f$dist$2f$redux$2d$saga$2d$effects$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-saga/effects/dist/redux-saga-effects.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$effects$2f$dist$2f$redux$2d$saga$2d$core$2d$effects$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@redux-saga/core/effects/dist/redux-saga-core-effects.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$toursSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/slices/toursSlice.ts [app-ssr] (ecmascript)");
;
;
function* watchFetchTours() {
    yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$effects$2f$dist$2f$redux$2d$saga$2d$core$2d$effects$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["takeEvery"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$toursSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchTours"].type, fetchToursSaga);
}
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/src/lib/firebase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/firebase.ts
__turbopack_context__.s([
    "auth",
    ()=>auth,
    "db",
    ()=>db,
    "default",
    ()=>__TURBOPACK__default__export__,
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/node-esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/node-esm/index.node.esm.js [app-ssr] (ecmascript)");
;
;
;
;
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyDh4ZyhHO3iCxZtL27cO_MhVmHCimm9Z54"),
    authDomain: ("TURBOPACK compile-time value", "my-app-3d824.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "my-app-3d824"),
    storageBucket: ("TURBOPACK compile-time value", "my-app-3d824.appspot.com"),
    messagingSenderId: ("TURBOPACK compile-time value", "554463367728"),
    appId: ("TURBOPACK compile-time value", "1:554463367728:web:4cf26d1a811ef871bd13f5")
};
// Prevent re-initializing in Next.js
const app = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApps"])().length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApp"])();
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuth"])(app);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStorage"])(app);
const __TURBOPACK__default__export__ = app;
}),
"[project]/src/lib/sagas/blogsSaga.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "watchFetchBlogs",
    ()=>watchFetchBlogs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$saga$2f$effects$2f$dist$2f$redux$2d$saga$2d$effects$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-saga/effects/dist/redux-saga-effects.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$effects$2f$dist$2f$redux$2d$saga$2d$core$2d$effects$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@redux-saga/core/effects/dist/redux-saga-core-effects.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$blogsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/slices/blogsSlice.ts [app-ssr] (ecmascript)");
;
;
;
;
function* fetchBlogsSaga() {
    try {
        console.log('SAGA: fetchBlogsSaga STARTED!');
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'reviews'));
        const querySnapshot = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$effects$2f$dist$2f$redux$2d$saga$2d$core$2d$effects$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["call"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"], q);
        const blogsData = [];
        querySnapshot.forEach((doc)=>{
            const data = doc.data();
            blogsData.push({
                id: doc.id,
                name: data.name || 'Anonymous',
                role: data.role || 'Traveler',
                review: data.review || 'No review available',
                image: data.image || ''
            });
        });
        console.log('SAGA: Dispatching', blogsData.length, 'blogs');
        yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$effects$2f$dist$2f$redux$2d$saga$2d$core$2d$effects$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["put"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$blogsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBlogsSuccess"])(blogsData));
    } catch (error) {
        console.error('SAGA ERROR:', error);
        yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$effects$2f$dist$2f$redux$2d$saga$2d$core$2d$effects$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["put"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$blogsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBlogsFailure"])(error.message || 'Failed to load blogs'));
    }
}
function* watchFetchBlogs() {
    console.log('SAGA: Watching for fetchBlogs...');
    yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$effects$2f$dist$2f$redux$2d$saga$2d$core$2d$effects$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["takeEvery"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$blogsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBlogs"].type, fetchBlogsSaga);
}
const __TURBOPACK__default__export__ = watchFetchBlogs;
}),
"[project]/src/lib/sagas/attractionsSaga.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "watchFetchAttractions",
    ()=>watchFetchAttractions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$saga$2f$effects$2f$dist$2f$redux$2d$saga$2d$effects$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-saga/effects/dist/redux-saga-effects.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$effects$2f$dist$2f$redux$2d$saga$2d$core$2d$effects$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@redux-saga/core/effects/dist/redux-saga-core-effects.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$attractionsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/slices/attractionsSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$uiSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/slices/uiSlice.ts [app-ssr] (ecmascript)");
;
;
;
;
;
function* fetchAttractionsSaga() {
    try {
        console.log("🔥 SAGA: fetchAttractionsSaga STARTED");
        yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$effects$2f$dist$2f$redux$2d$saga$2d$core$2d$effects$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["put"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$uiSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setLoading"])(true));
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], "attractions"));
        const querySnapshot = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$effects$2f$dist$2f$redux$2d$saga$2d$core$2d$effects$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["call"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"], q);
        const attractions = [];
        querySnapshot.forEach((doc)=>{
            const data = doc.data();
            attractions.push({
                id: doc.id,
                name: data.name || "Untitled",
                title: data.title || "Untitled",
                description: data.description || "No description available",
                image: data.image || "",
                location: data.location || "Unknown",
                duration: data.duration || "N/A",
                price: data.price || "N/A",
                activity: data.activity || "N/A",
                age: data.age || "All ages"
            });
        });
        yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$effects$2f$dist$2f$redux$2d$saga$2d$core$2d$effects$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["put"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$attractionsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAttractionsSuccess"])(attractions));
    } catch (error) {
        yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$effects$2f$dist$2f$redux$2d$saga$2d$core$2d$effects$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["put"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$attractionsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAttractionsFailure"])(error.message || "Failed to load attractions"));
    }
    yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$effects$2f$dist$2f$redux$2d$saga$2d$core$2d$effects$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["put"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$uiSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setLoading"])(false));
}
function* watchFetchAttractions() {
    console.log("👀 SAGA: Watching fetchAttractions");
    yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$effects$2f$dist$2f$redux$2d$saga$2d$core$2d$effects$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["takeEvery"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$attractionsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAttractions"].type, fetchAttractionsSaga);
}
}),
"[project]/src/lib/sagas/rootSaga.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rootSaga
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$saga$2f$effects$2f$dist$2f$redux$2d$saga$2d$effects$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-saga/effects/dist/redux-saga-effects.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$effects$2f$dist$2f$redux$2d$saga$2d$core$2d$effects$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@redux-saga/core/effects/dist/redux-saga-core-effects.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sagas$2f$toursSaga$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sagas/toursSaga.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sagas$2f$blogsSaga$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sagas/blogsSaga.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sagas$2f$attractionsSaga$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sagas/attractionsSaga.ts [app-ssr] (ecmascript)");
;
;
;
;
function* rootSaga() {
    yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$effects$2f$dist$2f$redux$2d$saga$2d$core$2d$effects$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["all"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sagas$2f$toursSaga$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["watchFetchTours"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sagas$2f$blogsSaga$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["watchFetchBlogs"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sagas$2f$attractionsSaga$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["watchFetchAttractions"])()
    ]);
}
}),
"[project]/src/lib/store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "makeStore",
    ()=>makeStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$saga$2f$dist$2f$redux$2d$saga$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-saga/dist/redux-saga.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$redux$2d$saga$2d$core$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@redux-saga/core/dist/redux-saga-core.development.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$rootReducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/slices/rootReducer.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sagas$2f$rootSaga$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sagas/rootSaga.ts [app-ssr] (ecmascript)");
;
;
;
;
let sagaMiddleware;
const makeStore = ()=>{
    if (!sagaMiddleware) {
        sagaMiddleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$redux$2d$saga$2d$core$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])();
    }
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
        reducer: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slices$2f$rootReducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
                serializableCheck: false
            }).concat(sagaMiddleware)
    });
    if (!sagaMiddleware._sagaInjected) {
        sagaMiddleware.run(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sagas$2f$rootSaga$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
        sagaMiddleware._sagaInjected = true;
    }
    return store;
};
}),
"[project]/src/app/providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReduxProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ReduxProvider({ children }) {
    const storeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (!storeRef.current) {
        storeRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeStore"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: storeRef.current,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/providers.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d7a69715._.js.map