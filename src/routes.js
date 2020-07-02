import {
    DogsPage,
    HomePage,
    LogInPage,
    OverviewPage,
    WeightPage
} from "./pages";
import { Layout } from "./layouts";

const userIsLoggedIn = () => {
    return true;
};

const routes = [
    {
        name: "/",
        component: HomePage,
        onlyIf: {
            guard: userIsLoggedIn,
            redirect: "/login"
        },
        layout: Layout
    },
    {
        name: "login",
        component: LogInPage,
        layout: Layout
    },
    {
        name: "/overview",
        component: OverviewPage,
        onlyIf: {
            guard: userIsLoggedIn,
            redirect: "/login"
        },
        layout: Layout
    },
    {
        name: "/weight",
        component: WeightPage,
        onlyIf: {
            guard: userIsLoggedIn,
            redirect: "/login"
        },
        layout: Layout
    },
    {
        name: "/dogs",
        component: DogsPage,
        onlyIf: {
            guard: userIsLoggedIn,
            redirect: "/login"
        },
        layout: Layout
    }
];

export { routes };
