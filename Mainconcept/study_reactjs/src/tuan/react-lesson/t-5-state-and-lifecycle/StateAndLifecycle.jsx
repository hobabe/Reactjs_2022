function StateAndLifecycle(props) {
  return (
    <div>
      <h3>1. Convert a Function to a Class</h3>
      <div className={"context-body"}>
        <p>5 steps convert a function component to class component:</p>
        <h6>1. Create an ES6 class, that extends React.component</h6>
        <h6>2. Add a single empty method to it called "render()"</h6>
        <h6>3. Move body of function into the "render()" method</h6>
        <h6>4. Replace "prop" with "this.props" in the "render()" body</h6>
        <h6>5. Delete the remaining empty function declaration</h6>
        <p>Here we go~~</p>
        <h5>From</h5>
        <pre>
          <p className={'b-beige'}>function Card(prop) {"{"}</p>
          <p>{" return <h2>Card name is: {prop.name}</h2>;"}</p>
          <p className={'b-beige'}>{"}"}</p>
        </pre>
        <h5>to</h5>
        <pre>
          <p className={'b-beige'}>class Card extends React.component {"{"}</p>
          <p className={'b-beige'}>{" render(){ "}</p>
          <p>{"  return ("}</p>
          <p>{"   <h2>Card name is: {this.prop.name}</h2>;"}</p>
          <p>{"  )"}</p>
          <p className={'b-beige'}>{"}"}</p>
        </pre>
      </div>
      <hr />

      <h3>2. Add Local State to a Class</h3>
      <div className={"context-body"}>
        <p>3 steps :</p>
        <h6>1. Relace "this.props.name" with "this.state.name"</h6>
        <h6>2. Add "a class contructor" that assigns the initial "this.state"</h6>
        <h6>3. Remote the "name" prop from Card</h6>
        <p>Here we go~~</p>
        <h5>We have:</h5>
        <pre>
          <p>class Card extends React.component {"{"}</p>
          <p>{" constructor(props){ "}</p>
          <p className={'b-beige'}>{"  super(props);"}</p>
          <p className={'b-beige'}>{"  this.sate = { name: 'react'}"}</p>
          <p>{" } "}</p>
          <p>{" render(){ "}</p>
          <p>{"  return ("}</p>
          <p className={'b-beige'}>{"   <h2>Card name is: {this.state.name}</h2>;"}</p>
          <p>{"  )"}</p>
          <p>{"}"}</p>
          <p>{""}</p>
          <p>{"const root = ReactDOME.createRoot(document.getElementById('root');"}</p>
          <p className={'b-beige'}>{"root.render(<Card />)"}</p>
        </pre>
      </div>
      <hr />

      <h3>3. Add Lifecycle Methods to a Class</h3>
      <div className={"context-body"}>
        <p>3 steps :</p>
        <h6>1. When the card is rendered to the DOM for first time, this is called "mounting" in React</h6>
        <h6>2. Whenever the DOM produced by "Card" is removed, this is called "unmounting" in React</h6>
        <pre>
          <p>class Card extends React.component {"{"}</p>
          <p>{" constructor(props){ "}</p>
          <p>{"  super(props);"}</p>
          <p>{"  this.sate = { name: 'react'}"}</p>
          <p>{" } "}</p>
          <p>{""}</p>
          <p className={'b-beige'}>{"componentDidMount(){"}</p>
          <p className={'b-beige'}>{" "}</p>
          <p className={'b-beige'}>{"}"}</p>
          <p className={'b-beige'}>{" "}</p>
          <p className={'b-beige'}>{"componentWillUnmount(){"}</p>
          <p className={'b-beige'}>{" "}</p>
          <p className={'b-beige'}>{"}"}</p>
          <p>{""}</p>
          <p>{" render(){ "}</p>
          <p>{"  return ("}</p>
          <p>{"   <h2>Card name is: {this.state.name}</h2>;"}</p>
          <p>{"  )"}</p>
          <p>{"}"}</p>
        </pre>
      </div>
      <hr />

      <h3>4. Use State correctly</h3>
      <div className={"context-body"}>
        <p><b className={'text-danger'}>Three things</b> you should know about "setState()":</p>
        
        <h6>1. Do Not modify State Directly</h6>
        <h5>//Wrong</h5>
        <pre>
          <p>{"this.state.comment = 'Welcome'"}</p>
        </pre>
        <h5>//Correct</h5>
        <pre>
          <p>{"this.setState({comment: 'Welcome'})"}</p>
        </pre>

        <h6>2. State Updates May Be Asynchronous</h6>
        <h5>//Wrong</h5>
        <pre>
          <p>{"this.setState({"}</p>
          <p>{" value: this.state.title + this.props.index,"}</p>
          <p>{"});"}</p>
        </pre>
        <h5>//Correct</h5>
        <pre>
          <p>{"this.setState((state, props) => ({"}</p>
          <p>{" value: state.title + props.index,"}</p>
          <p>{"});"}</p>
        </pre>

        <h6>3. State Updates are Merged</h6>
        <pre>
          <p>{"constructor(props){ "}</p>
          <p>{" super(props);"}</p>
          <p>{" this.sate = {"}</p>
          <p className={'b-beige'}>{"  cards: []"}</p>
          <p className={'b-beige'}>{"  posts: []"}</p>
          <p>{" };"}</p>
          <p>{"} "}</p>
        </pre>
        <p>Each setState for the specific object, they will be replaced completely, (only a specific one)</p>
        <pre>
          <p>{"componentDidMount(){ "}</p>
          <p>{" fetchCards().the(response => {"}</p>
          <p>{"  this.setState({"}</p>
          <p className={'b-beige'}>{"   cards: response.cards"}</p>
          <p>{"  });"}</p>
          <p>{" });"}</p>
          <p>{" "}</p>
          <p>{" fetchPosts().the(response => {"}</p>
          <p>{"  this.setState({"}</p>
          <p className={'b-beige'}>{"   posts: response.posts"}</p>
          <p>{"  });"}</p>
          <p>{" });"}</p>
          <p>{"} "}</p>
        </pre>
      </div>
      <hr />

      <h3>5. Data Flows Down</h3>
      <div className={"context-body"}>
        <p>State is often called "local" or "encapsulated".</p>
        <p>A component may choose to pass its state down as props to its child components, this is commonly called a "top-down" or "unidirectional" data flow, Any state is always owned by some specific component, and any data or UI derived from that state can only affect components "below" them in the tree.</p>
      </div>
      <hr />
    </div>
  )
}

export default StateAndLifecycle;
