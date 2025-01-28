import Startpage from "../components/Startpage";
import Lifecycle from "../components/lifeCycle";
import SwitchComp from "../components/SwitchComp";
import Statable from "../components/statable";
import RenderingList from "../components/rendering_list";
import FormPage from "../components/forms";
import ParentComponent from "../components/parentComponent";
import FilterComponent from "../components/FilterComponent";
import Tictac from "../components/Tictac";
import UseIdForm from "../components/useIdForm";
import { Suspense } from "react";
import ContextRender from "../components/ContextRender";
import ErrorBoundary from "../components/ErrorDemo";
import SuspenseReact from "../components/SuspenseReact";
import ReactFragmentExample from "../components/ReactfragmentExample";
import ForwardRefExample from "../components/Forwardref";
import Modalpage from "../components/Modalpage";
import Dashboard from "../components/Dashboard";
import RefComponent from "../components/RefComponent";
import ParentCustomElement from "../components/ParentCustomElement";
export const routeItems = [
    { path: '', element: <Startpage /> },
    { path: '/lifecycle', element: <Lifecycle /> },
    { path: '/switch', element: <SwitchComp /> },
    { path: '/statable', element: <Statable /> },
    { path: '/renderinglist', element: <RenderingList /> },
    { path: '/formpage', element: <FormPage /> },
    { path: '/parentcomponent', element: <ParentComponent /> },
    { path: '/filtercomponent', element: <FilterComponent /> },
    { path: '/tictactoe', element: <Tictac /> },
    { path: '/useidform', element: <UseIdForm /> },
    { path: '/suspense', element: <Suspense /> },
    { path: '/contextpage', element: <ContextRender /> },
    {
        path: '/errorboundarypage',
        element: (
            <ErrorBoundary fallback={<p>Error occurred</p>}>
                <SuspenseReact />
            </ErrorBoundary>
        ),
    },
    { path: '/reactfragment', element: <ReactFragmentExample /> },
    { path: '/forwardref', element: <ForwardRefExample /> },
    { path: '/portal', element: <Modalpage value={'welcome'} /> },
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/useref', element: <RefComponent /> },
    { path: '/customelement', element: <ParentCustomElement /> },
];