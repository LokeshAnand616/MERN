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
import MemoDemo from "../components/MemoDemo";
import Reducer from "../components/Reducer";
import ReactUseState from "../components/ReactUseState";
import ReactUseEffect from "../components/ReactUseEffect";
import ReactUseTransition from "../components/ReactUseTransition";
import Counter from "../components/customHook";
import UseImperativeHandle from "../components/ImperativeHandle";
import AxiosDemo from "../components/AxiosDemo";
import DisplayImage from "../components/DisplayImage";
export const linkItems = [
    {to:'', lable:'Startpage'},
    {to:'/lifecycle',lable:'Lifecycle'},
    {to:'/switch', lable:'Switch'},
    {to:'statable',lable:'Statable'},
    {to:'renderingList',lable:'RenderingList'},
    {to:'/formpage',lable:'Formpage'},
    {to:'parentcomponent',lable:'ParentComponent'},
    {to:'filtercomponent',lable:'FilterComponent'},
    {to:'/tictactoe',lable:'TicTacToe'},
    {to:'/useidform',lable:'UseIdForm'},
    {to:'/suspense',lable:'Suspense'},
    {to:'/contextpage',lable:'Page'},
    {to:'/errorboundarypage',lable:'Errorpage'},
    {to:'/forwardref',lable:'Forwardref'},
    {to:'/portal',lable:'CreatePortal'},
    {to:'/useref',lable:'Useref'},
    {to:'/dashboard',lable:'Dashboard'},
    {to:'/customelement',lable:'CustomElement'},
    {to:'/memodemo',lable:'UseMemo'},
    {to:'/reducer',lable:'Reducer'},
    {to:'/reactusestate',lable:'UseState'},
    {to:'/reactuseeffect',lable:'UseEffect'},
    {to:'/reactusetransition',lable:'UseTransition'},
    {to:'/customhook',lable:'CustomHook'},
    {to:'/useimperativehandle',lable:'UseImperativeHandle'},
    {to:'axiosdemo',lable:'AxiosDemo'},
    {to:'/displayimage', lable:'DisplayImage'}
];

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
    {path:'/memodemo',element:<MemoDemo/>},
    {path:'/reducer',element:<Reducer/>},
    {path:'/reactusestate',element:<ReactUseState/>},
    {path:'/reactuseeffect',element:<ReactUseEffect/>},
    {path:'/reactusetransition',element:<ReactUseTransition/>},
    {path:'/customhook',element:<Counter/>},
    {path:'/useimperativehandle',element:<UseImperativeHandle/>},
    {path:'axiosdemo',element:<AxiosDemo/>},
    {path:'/displayimage', element:<DisplayImage/>}
];