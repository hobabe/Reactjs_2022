import CheckReadOnly from "./CheckReadOnly";
import Calculator from "./LiftingStateUp";
import PropsAreReadOnly from "./PropsAreReadOnly";


export default function OurReactSpace() {
    var child = { age: 6 }

    return (
        <div>
            <h2>Welcome Our's React Space</h2>

            {/*How we can check pure function */}
            <PropsAreReadOnly user={child} />
            <hr />
            <CheckReadOnly user={child} />
            <hr />
            <Calculator />
        </div>
    )
}