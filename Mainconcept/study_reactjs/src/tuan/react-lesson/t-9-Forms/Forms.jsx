function Forms() {
  return (
    <div>
      <h3>1. Controlled Components</h3>
      <div className={"context-body"}>
        <p>The React component that renders a form also controls what happends in that form on subsequent use input.</p>
        <pre>
          <p>class LoginForm extends React.component {"{"}</p>
          <p>{" constructor(props){ "}</p>
          <p>{"  super(props);"}</p>
          <p>{"  this.state = { code: ''};"}</p>
          <p>{"  this.handleChange = this.handleChange.bind(this);"}</p>
          <p>{" } "}</p>
          <p> </p>
          <p>{" onChange(event){"}</p>
          <p>{"  this.setState({code: event.tartget.value});"}</p>
          <p>{" }"}</p>
          <p> </p>
          <p> {" return ("}</p>
          <p> {" <form onSubmit={this.handleSubmit}/>"}</p>
          <p> {"  <label>"}</p>
          <p> {"   Code"}</p>
          <p className={"b-beige"}> {"   <input type='text' value={this.state.code} onChange={this.handleChange}/>"}</p>
          <p> {"  </label>"}</p>
          <p> {"  <input type='Submit' value='submit'/>"}</p>
          <p> {" </form>"}</p>
          <p>{" );"}</p>
          <p>{"}"}</p>
        </pre>
      </div>
      <hr />

      <h3>2. The textarea Tag</h3>
      <div className={"context-body"}>
        <p>In HTML, text displays by its childrend, but in React we will use "value" attribute instead!</p>
        <h6>1. HTML</h6>
        <pre>
          <p> {"<textarea>"}</p>
          <p className={"b-beige"}> {" Hello"}</p>
          <p> {"</textarea>"}</p>
        </pre>
        <h6>2. In React</h6>
        <pre>
          <p>function CheckCart(props) {"{"}</p>
          <p> {" return ("}</p>
          <p className={"b-beige"}> {" <textarea value={'Hello'}/>"}</p>
          <p>{" );"}</p>
          <p>{"}"}</p>
        </pre>
      </div>
      <hr />

      <h3>3. The select Tag</h3>
      <div className={"context-body"}>
        <p>In HTML, select item by option element, in React select by "value" of "select" element!</p>
        <h6>1. HTML</h6>
        <pre>
          <p> {"<select>"}</p>
          <p> {" <option value='apple'>apple</option>"}</p>
          <p className={"b-beige"}> {" <option selected value='pineapple'>pineapple</option>"}</p>
          <p> {"</textarea>"}</p>
        </pre>
        <h6>2. In React</h6>
        <pre>
          <p>function FruitCart(props) {"{"}</p>
          <p> {" const value = 'pineapple';"}</p>
          <p> </p>
          <p> {" return ("}</p>
          <p className={"b-beige"}> {"  <select value={value}>"}</p>
          <p> {"   <option value='apple'>apple</option>"}</p>
          <p> {"   <option value='pineapple'>pineapple</option>"}</p>
          <p> {"  </select>"}</p>
          <p>{" );"}</p>
          <p>{"}"}</p>
        </pre>
        <h6>3. In React (multi select, this is rarely case)</h6>
        <pre>
          <p className={"b-beige"}> {"  <select multiple={true} value={['apple', 'pineapple']}>"}</p>
        </pre>
      </div>
      <hr />

      <h3>4. The file input Tag</h3>
      <div className={"context-body"}>
        <p>This is uncontrolled component, because it is read-only</p>
        <pre>
          <p className={"b-beige"}> {"<input type='file'/>"}</p>
        </pre>
      </div>
      <hr />

      <h3>5. Handling Multiple Inputs</h3>
      <div className={"context-body"}>
        <p>When you need to handle multiple controlled "input" elements, you can add a name attribute to each element, and choose value base "event.target.name", for single event functions.</p>
        <pre>
          <p>class Card extends React.component {"{"}</p>
          <p>{" constructor(props){ "}</p>
          <p>{"  super(props);"}</p>
          <p>{"  this.state = { userName: '', password: ''};"}</p>
          <p>{"  this.myHandle = this.myHandle.bind(this);"}</p>
          <p>{" } "}</p>
          <p> </p>
          <p>{" myHandle(event){"}</p>
          <p>{"  var nameOfElement = event.target.name;"}</p>
          <p>{"  var value = event.target.value;"}</p>
          <p>{"  this.setState({"}</p>
          <p className={"b-beige"}>{"    [nameOfElement]: value"}</p>
          <p>{"  });"}</p>
          <p>{" }"}</p>
          <p> </p>
          <p>{" render(){ "}</p>
          <p>{"  return ("}</p>
          <p className={"b-beige"}> {"   <input name='userName' value={this.state.userName} onChange={this.handleChange}/>"}</p>
          <p className={"b-beige"}> {"   <input name='password' value={this.state.password} onChange={this.handleChange}/>"}</p>
          <p>{"  );"}</p>
          <p>{"}"}</p>
        </pre>
      </div>
      <hr />

      <h3>6. Controlled Input Null Value</h3>
      <div className={"context-body"}>
        <p>input's value is set constant, we can not edit!</p>
        <pre>
          <p> {"   <input value='userName'/>"}</p>
        </pre>
        
        <p>Set by "null" or variable, it can be editable</p>
        <pre>
          <p> {"   <input value={null}/>"}</p>
        </pre>
      </div>
      <hr />

      <h3>7. Alternatives to Controlled Components</h3>
      <div className={"context-body"}>
        <p>"Uncontrolled components" is a technique for implenenting input forms.</p>
      </div>
      <hr />

      <h3>8. Fully-Fledged Solutions</h3>
      <div className={"context-body"}>
        <p>Yay! we have some Libaries for validation, keep track of the visited fields, and handlin form submission, such as Formik, Ant etc.</p>
      </div>
      <hr />
    </div>
  );
}

export default Forms;
