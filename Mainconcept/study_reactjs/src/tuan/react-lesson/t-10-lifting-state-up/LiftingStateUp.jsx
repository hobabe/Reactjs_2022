function LiftingStateUp() {
  return (
    <div>
      <h3>This lesson have one thing to know, the parents will pass events to its child, and its child can use them to execute their parents's event!</h3>
      <h6>1. Product component (all events and states are lifting up to its parents</h6>
      <pre>
        <p>function Product(props) {"{"}</p>
        <p> {" return ("}</p>
        <p> {"  <div>"}</p>
        <p> {"    Product:<input name='name' value={props.product.productName}/>"}</p>
        <p className={"b-beige"}> {"    onChange={props.handles.productNameHandle}/>"}</p>
        <p> {"    Unit:<input name='unit' value={props.product.unit}"}</p>
        <p className={"b-beige"}> {"    onChange={props.handles.productUnitHandle}/>"}</p>
        <p> {"  </div>"}</p>
        <p> {" )"}</p>
        <p>{"}"}</p>
      </pre>
      <h6>2. ShopingPage component</h6>
      <pre>
        <p>class ShopingPage extends React.Component {"{"}</p>
        <p>{" constructor(props){ "}</p>
        <p>{"  super(props);"}</p>
        <p>{"  this.state = { product: {name: '', unit: ''}};"}</p>
        <p>{"  this.productNameHandle = this.productNameHandle.bind(this);"}</p>
        <p>{"  this.productUnitHandle = this.productUnitHandle.bind(this);"}</p>
        <p>{" } "}</p>
        <p> </p>
        <p className={"b-beige"}>{" productNameHandle (event){"}</p>
        <p>{"  const value = event.target.value;"}</p>
        <p>{"  const product = {"}</p>
        <p className={"b-beige"}>{"   name: this.state.product.name, "}</p>
        <p>{"   unit: value"}</p>
        <p>{"  };"}</p>
        <p> </p>
        <p>{"  this.setState({"}</p>
        <p>{"   product: product"}</p>
        <p>{"  });"}</p>
        <p>{" }"}</p>
        <p> </p>
        <p className={"b-beige"}>{" productUnitHandle (event){"}</p>
        <p>{"  const value = event.target.value;"}</p>
        <p>{"  const product = {"}</p>
        <p>{"   name: value, "}</p>
        <p className={"b-beige"}>{"   unit: this.state.product.unit"}</p>
        <p>{"  };"}</p>
        <p> </p>
        <p>{"  this.setState({"}</p>
        <p>{"   product: product"}</p>
        <p>{"  });"}</p>
        <p>{" }"}</p>
        <p> </p>
        <p>{" render(){ "}</p>
        <p className={"b-beige"}>{"  let handles = {"}</p>
        <p>{"   productNameHandle: this.productNameHandle,"}</p>
        <p>{"   productUnitHandle: this.productUnitHandle,"}</p>
        <p>{"  };"}</p>
        <p>{"  return ("}</p>
        <p>{"   <div>"}</p>
        <p>{"    <div>Product: {this.state.product.name} , unit: {this.state.product.unit}"}</p>
        <p>{"    <Product product={this.state.product}"}</p>
        <p className={"b-beige"}>{"     handles={handle: handles}/>"}</p>
        <p>{"   </div>"}</p>
        <p>{"  );"}</p>
        <p>{" }"}</p>
        <p>{"}"}</p>
      </pre>
    </div>
  );
}

export default LiftingStateUp;
