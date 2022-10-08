import Parents1Component from "./Parents1Component";
import Parents2Component from "./Parents2Component";

function HieuSauState(props) {
    return (
        <div>
            <h4>Đây là trang hiểu sâu hơn về State</h4>
            <p>--------------------------------</p>
            <Parents1Component />
            <hr />
            <Parents2Component />

        </div>
    )
}
export default HieuSauState;