import { HomePage, LogInPage } from "./pages";
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
    }
];

export { routes };
