import Parents1Component from "./Parents1Component";
import Parents2Component from "./Parents2Component";
import React from "react";
class HieuSauState extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("day la hieu sau", this);
    return (
      <div>
        <h4>Đây là trang hiểu sâu hơn về State</h4>
        <p>--------------------------------</p>
        <Parents1Component />
        <hr />
        <Parents2Component />
      </div>
    );
  }
}
export default HieuSauState;
