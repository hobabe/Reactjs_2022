function ConditionalRendering() {
  return (
    <div>
      <h3>1. Elements Variables</h3>
      <div className={"context-body"}>
        <p>We will use 2 components in Cart component</p>
        <h6>1. Payment component</h6>
        <pre>
          <p>function Payment(props) {"{"}</p>
          <p> {" return ("}</p>
          <p className={"b-beige"}> {'  <button onClick={props.onClick}>'}</p>
          <p> {"   Payment"}</p>
          <p> {"  </button>"}</p>
          <p>{"}"}</p>
        </pre>
        <h6>2. GotoShoping</h6>
        <pre>
          <p>function GotoShoping(props) {"{"}</p>
          <p> {" return ("}</p>
          <p className={"b-beige"}> {'  <button onClick={props.onClick}>'}</p>
          <p> {"   Clear"}</p>
          <p> {"  </button>"}</p>
          <p> {" )"}</p>
          <p>{"}"}</p>
        </pre>
        <h6>3. Cart component</h6>
        <pre>
          <p>class Cart extends React.component {"{"}</p>
          <p>{" constructor(props){ "}</p>
          <p>{"  super(props);"}</p>
          <p>{"  this.state = { productList: []};"}</p>
          <p>{"  this.gotoShoping = this.gotoShoping.bind(this);"}</p>
          <p>{"  this.paymentHandle = this.paymentHandle.bind(this);"}</p>
          <p>{" } "}</p>
          <p> </p>
          <p>{" clearHandle (){"}</p>
          <p>{"  this.setState(prevState => ({"}</p>
          <p>{"   productList: [{id: '123', name: 'hat'}]"}</p>
          <p>{"  }));"}</p>
          <p>{" }"}</p>
          <p> </p>
          <p>{" paymentHandle (){"}</p>
          <p>{"  console.log('You will be redirect to payment Gate!');"}</p>
          <p>{" }"}</p>
          <p> </p>
          <p>{" render(){ "}</p>
          <p>{"  const productCount = this.state.productList.length == 0;"}</p>
          <p>{"  let button;"}</p>
          <p>{"  if(productCount == 0) {"}</p>
          <p className={"b-beige"}>{"   button = <GotoShoping onClick={this.paymentHandle}/>"}</p>
          <p>{"  } else {"}</p>
          <p className={"b-beige"}>{"   button = <Payment onClick={this.paymentHandle}/>"}</p>
          <p>{"  }"}</p>
          <p>{"  "}</p>
          <p>{"  return ("}</p>
          <p>{"    <p>Your card has: {productCount}</p>"}</p>
          <p className={"b-beige"}>{"    {button}"}</p>
          <p>{"  )"}</p>
          <p>{" }"}</p>
          <p>{"}"}</p>
        </pre>
      </div>
      <hr />

      <h3>2. Inline If with Logical && Operator</h3>
      <div className={"context-body"}>
        <p>We can embed expressions in JSX by wrapping them in curly braces!</p>
        <h6>1. Multi-lines</h6>
        <pre>
          <p>function CheckCart(props) {"{"}</p>
          <p> {"return ("}</p>
          <p> {" <h3>Your card has:</h3>"}</p>
          <p className={"b-beige"}> {"  {props.products.lenght == 0 && >"}</p>
          <p className={"b-beige"}> {"    No products. "}</p>
          <p className={"b-beige"}> {"  }"}</p>
          <p>{")"}</p>
        </pre>
        <h6>2. Single line</h6>
        <pre>
          <p>{"render(){"}</p>
          <p>{" return ("}</p>
          <p>{" const step = 0;"}</p>
          <p className={"b-beige"}> {" <p>{step && <b>Steps: {count}</b></p>"}</p>
          <p>{" )"}</p>
          <p>{"}"}</p>
        </pre>
      </div>
      <hr />

      <h3>3. Inline If Else with Conditional Operator</h3>
      <div className={"context-body"}>
        <h6>1. Single line</h6>
        <pre>
          <p>{"render(){"}</p>
          <p>{" return ("}</p>
          <p>{"  const hasProduct = false;"}</p>
          <p className={"b-beige"}> {' Message: {hasProduct ? "Go to Shopping!": "Pay now!" }'}</p>
          <p>{" )"}</p>
          <p>{"}"}</p>
        </pre>
        <h6>2. Multi-lines</h6>
        <pre>
          <p>{"render(){"}</p>
          <p>{" return ("}</p>
          <p>{"  const hasProduct = false;"}</p>
          <p className={"b-beige"}> {" Message:"}</p>
          <p className={"b-beige"}> {" { hasProduct"}</p>
          <p className={"b-beige"}> {" ? <GotoShopping />}"}</p>
          <p className={"b-beige"}> {" : <Payment />"}</p>
          <p>{"  }"}</p>
          <p>{" )"}</p>
          <p>{"}"}</p>
        </pre>
      </div>
      <hr />

      <h3>4. Prevent Component from Rendering</h3>
      <div className={"context-body"}>
        <p>We can return "null" when the condition is matched, if we want!</p>
        <pre>
          <p>function GotoShoping(props) {"{"}</p>
          <p> {" if(props.products.lenght == 0){"}</p>
          <p className={"b-beige"}> {"  return null;"}</p>
          <p> {" }"}</p>
          <p> </p>
          <p> {" return ("}</p>
          <p> {'  <button onClick="{props.onClick}">'}</p>
          <p> {"   Clear"}</p>
          <p> {"  </button>"}</p>
          <p>{"}"}</p>
        </pre>
        <pre>
          <p>class Cart extends React.component {"{"}</p>
          <p>{" constructor(props){ "}</p>
          <p>{"  super(props);"}</p>
          <p>{"  this.state = { products: []};"}</p>
          <p>{" } "}</p>
          <p> </p>
          <p>{" render(){ "}</p>
          <p>{"  return ("}</p>
          <p className={"b-beige"}>{"    <p>Cart: <GotoShoping products={this.state.products }/></p>"}</p>
          <p>{"  )"}</p>
          <p>{" }"}</p>
          <p>{"}"}</p>
        </pre>
      </div>
      <hr />
    </div>
  );
}

export default ConditionalRendering;
