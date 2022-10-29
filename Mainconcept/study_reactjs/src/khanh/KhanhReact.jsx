import ComponentAndProps from "./t4-component-and-props/ComponentAndProps";
import HelloWorld from "./t1-helloworld/HelloWorld";
import IntroducingJSX from "./t2-introducingJSX/IntroducingJSX";
import HieuSauState from "./t5-state-and-lifecycle-methods/HieuSauState";
import HandlingEvent from "./t6-handling-event/HandlingEvent";
import './khanh-style.css'
import RenderingElement from "./t3-rendering-element/RenderingElement";
import StateAndLifecycle from "./t5-state-and-lifecycle/StateAndLifecycle";
import ConditionalRendering from "./t7-conditional-rendering/ConditionalRendering";
import ListsAndKeys from "./t8-lists-and-keys/ListAndKeys";
import Form from "./t9-forms/Foms";

function KhanhReact(props) {
    return (
        <div>
            hello Khánh
            <HieuSauState />
            <HandlingEvent />
            <hr />
            <HelloWorld />
            <hr />
            <IntroducingJSX />
            <hr />
            <RenderingElement />
            <hr />
            <ComponentAndProps />
            <hr />
            <StateAndLifecycle />
            <hr />
            <HandlingEvent />
            <hr />
            <ConditionalRendering />
            <hr />
            <ListsAndKeys />
            <hr />
            <Form />
        </div>
    )
}
export default KhanhReact;