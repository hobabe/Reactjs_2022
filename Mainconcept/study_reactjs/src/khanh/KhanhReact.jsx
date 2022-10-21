import HelloWorld from "./HelloWorld";
import HieuSauState from "./t-5-state-and-lifecycle-methods/HieuSauState";
import HandlingEvent from "./t6-handling-event/HandlingEvent";

function KhanhReact(props) {
    return (
        <div>
            hello Khánh
            <HieuSauState />
            <HandlingEvent />
            <HelloWorld />
        </div>
    )
}
export default KhanhReact;