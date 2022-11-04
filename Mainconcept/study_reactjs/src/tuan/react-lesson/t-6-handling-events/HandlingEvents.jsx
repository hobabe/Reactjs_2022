function HandlingEvents() {
  return (
    <div>
      <h3>1. Bind events</h3>
      <div className={"context-body"}>
        <h6>1. Example handling Events</h6>
        <p>In the HTML</p>
        <pre>
          <p className={'b-beige'}>{'<button onclick="addNew()">'}</p>
          <p>{" Add"}</p>
          <p>{"</button>"}</p>
        </pre>
        <p>In React</p>
        <pre>
          <p className={'b-beige'}>{'<button onClick={addNew}">'}</p>
          <p>{" Add"}</p>
          <p>{"</button>"}</p>
        </pre>
        <h6>2. Form</h6>
        <p>In the HTML</p>
        <pre>
          <p className={"b-beige"}>{'<form onsubmit="console.log(\'You click submit.\'); return false">'}</p>
          <p>{'<button type="submit">Submit</button>'}</p>
          <p>{"</form>"}</p>
        </pre>
        <p>In React</p>
        <pre>
          <p>function UserForm() {"{"}</p>
          <p>{" function handleSunmit(e){"}</p>
          <p className={'b-beige'}>{"  e.preventDefault();"}</p>
          <p className={'b-beige'}>{"  console.log('You clicked submit.');"}</p>
          <p>{" } "}</p>
          <p>{" "}</p>
          <p>{" return ("}</p>
          <p>{'  <form onSubmit={handleSunmit}>'}</p>
          <p>{'    <button type="submit">Submit</button>'}</p>
          <p>{"    </button>"}</p>
          <p>{"  </form>"}</p>
          <p>{" ) "}</p>
          <p>{"}"}</p>
        </pre>
        
        <h6>3. Events in class ES6</h6>
        <pre>
          <p>class Card extends React.component {"{"}</p>
          <p>{" constructor(props){ "}</p>
          <p>{"  super(props);"}</p>
          <p>{"  this.sate = { name: 'React'}"}</p>
          <p className={'b-beige'}>{"  this.handleClick = this.myHandle.bind(this);"}</p>
          <p>{" } "}</p>
          <p>{" "}</p>
          <p className={'b-beige'}>{" myHandle(){"}</p>
          <p className={'b-beige'}>{"  this.setState(prevState => ({"}</p>
          <p className={'b-beige'}>{"    name: 'JSX'"}</p>
          <p className={'b-beige'}>{"  }));"}</p>
          <p className={'b-beige'}>{" }"}</p>
          <p>{" "}</p>
          <p>{" render(){ "}</p>
          <p>{"  return ("}</p>
          <p className={'b-beige'}>{'   <button onclick={this.handleClick}>'}</p>
          <p>{"    Add {this.state.name}"}</p>
          <p>{"   </button>"}</p>
          <p>{"  )"}</p>
          <p>{"}"}</p>
        </pre>
        
        <h6>4. Arrow function</h6>
        <p>We can use:</p>
        <pre>
          <p>class Card extends React.component {"{"}</p>
          <p>{" constructor(props){ "}</p>
          <p>{"  super(props);"}</p>
          <p>{"  this.sate = { name: 'React'}"}</p>         
          <p>{" } "}</p>
          <p>{" "}</p>
          <p>{" myHandle(){"}</p>
          <p>{"  this.setState(prevState => ({"}</p>
          <p>{"    name: 'JSX'"}</p>
          <p>{"  }));"}</p>
          <p>{" }"}</p>
          <p>{" "}</p>
          <p>{" render(){ "}</p>
          <p>{"  return ("}</p>
          <p className={'b-beige'}>{'   <button onclick={() =>this.handleClick}>'}</p>
          <p>{"     Add {this.state.name}"}</p>
          <p>{"    </button>"}</p>
          <p>{"  )"}</p>
          <p>{"}"}</p>
        </pre>
        <p>or:</p>
        <pre>
          <p>class Card extends React.component {"{"}</p>
          <p>{" constructor(props){ "}</p>
          <p>{"  super(props);"}</p>
          <p>{"  this.sate = { name: 'React'}"}</p>         
          <p>{" } "}</p>
          <p>{" "}</p>
          <p className={'b-beige'}>{" myHandle = () => {"}</p>
          <p>{" this.setState(prevState => ({"}</p>
          <p>{"   name: 'JSX'"}</p>
          <p>{" }));"}</p>
          <p>{"}"}</p>
          <p>{" "}</p>
          <p>{" render(){ "}</p>
          <p>{"  return ("}</p>
          <p>{'   <button onclick={this.handleClick}>'}</p>
          <p>{" Add {this.state.name}"}</p>
          <p>{"</button>"}</p>
          <p>{"  )"}</p>
          <p>{"}"}</p>
        </pre>
      </div>
      <hr />

      <h3>2. Passing Arguments to Event Handlers</h3>
      <div className={"context-body"}>
        <p>Via arrow function</p>
        <pre>
          <p className={'b-beige'}>{'<button onClick={(e) => this.addNew(id, e)}">'}</p>
          <p>{" Add"}</p>
          <p>{"</button>"}</p>
        </pre>
        <p>Via bind function (Function.protorype.bind)</p>
        <pre>
          <p className={'b-beige'}>{'<button onClick={this.addNew(this, id)}">'}</p>
          <p>{" Add"}</p>
          <p>{"</button>"}</p>
        </pre>
      </div>
      <hr />
    </div>
  );
}

export default HandlingEvents;
