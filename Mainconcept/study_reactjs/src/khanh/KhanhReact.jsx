import ComponentAndProps from "./Component-and-props/ComponentAndProps";
import HelloWorld from "./HelloWorld";
import IntroducingJSX from "./IntroducingJSX";
import HieuSauState from "./t-5-state-and-lifecycle-methods/HieuSauState";
import HandlingEvent from "./t6-handling-event/HandlingEvent";

function KhanhReact(props) {
    return (
        <div>
            hello Khánh
            <HieuSauState />
            <HandlingEvent />
            <HelloWorld />
            <hr />
            <IntroducingJSX />
            <hr />
            <ComponentAndProps />
        </div>
    )
}
export default KhanhReact;