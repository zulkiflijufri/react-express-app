import React from "react";

const Home = React.lazy(() => import("./Pages/Home"));
const ProductList = React.lazy(() => import("./Product/List"));
const ProductSingle = React.lazy(() => import("./Product/Single"));
const ProductCreate = React.lazy(() => import("./Product/Create"));
const ProductUpdate = React.lazy(() => import("./Product/Update"));

const routes = [
    { path: "/product/single/:id", Component: ProductSingle },
    { path: "/product/create", Component: ProductCreate },
    { path: "/product/update/:id", Component: ProductUpdate },
    { path: "/product", Component: ProductList },
    { path: "/", Component: Home },
];

export default routes;
