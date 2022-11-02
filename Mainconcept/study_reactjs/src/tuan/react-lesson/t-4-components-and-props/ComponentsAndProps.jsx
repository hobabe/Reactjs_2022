export default function ComponentsAndProps(props) {
  return (
    <div>
      <h3>1. Function And Class Components</h3>
      <div className={"context-body"}>
        <p>These are samples of function and class component:</p>
        <h6>a. Function component</h6>
        <pre>
          <p>function Card(prop) {"{"}</p>
          <p>{" return <h2>Card name is: {prop.name}</h2>;"}</p>
          <p>{"}"}</p>
        </pre>
        
        <h6>b. Class component</h6>
        <pre>
          <p>class Sport extend React.Component {"{"}</p>
          <p>{" render() {"}</p>
          <p>{"  return <h2>This is: {this.prop.name}</h2>;"}</p>
          <p>{" }"}</p>
          <p>{"}"}</p>
        </pre>
      </div>
      <hr />

      <h3>2. Rendering a Component</h3>
      <div className={"context-body"}>
        <p>The previous lesson, we only encountered React elements that represent DOM tags</p>
        <pre>
          <p>const element = {"<div />"}</p>
        </pre>
        <p>However React elements can also represent user-definded Components, single object passes JSX attribute is PROP</p>
        <pre>
          <p>const element = {'<Sport name="football" />'}</p>
        </pre>
        <p>And it can use like this to render that component, "football" will be rendered on the page!</p>
        <pre>
          <p>const element = {'<Sport name="football" />'}</p>
          <p>root.Render(element)</p>
        </pre>
      </div>
      <hr />

      <h3>3. Composing Components</h3>
      <div className={"context-body"}>
        <p>Components can refer to other components in their output!</p>
        <pre>
          <p>function App(){"{"}</p>
          <p> return (</p>
          <p>  {'<Welcome name="Khanh" />'}</p>
          <p>  {'<Welcome name="Tuan" />'}</p>
          <p>  {'<Welcome name="React" />'}</p>
          <p> )</p>
          <p>{"}"}</p>
        </pre>
      </div>
      <hr />

      <h3>4. Extracting components</h3>
      <div className={"context-body"}>
        <p>We can split the big component into smaller components</p>
        <h6>1. This is the big component!</h6>
        <pre>
          <p>function Book(props) {"{"}</p>
          <p> return (</p>
          <p> {' <div>'}</p>
          <p> {'  <div>'}</p>
          <p> {'   <h3>Book name</h3>'}</p>
          <p> {'   <div>{props.book.name}</div>'}</p>
          <p> {'  </div>'}</p>
          <p> {'  <div>'}</p>
          <p> {'   <h3>Author</h3>'}</p>
          <p> {'   <div>First Name: {props.author.firstName}</div>'}</p>
          <p> {'   <div>Last Name: {props.author.lastName}</div>'}</p>
          <p> {'  </div>'}</p>
          <p> {' </div>'}</p>
          <p>{"}"}</p>
        </pre>
        
        <h6>2. We can split into 2 components: {"Tile component and Author compoent"}</h6>
        <pre>
          <p>function Title(props) {"{"}</p>
          <p> return (</p>
          <p> {' <div>'}</p>
          <p> {'  <h3>Book name</h3>'}</p>
          <p> {'  <div>{props.name}</div>'}</p>
          <p> {' <div>'}</p>
          <p>{"}"}</p>
        </pre>
        <pre>
          <p>function Author(props) {"{"}</p>
          <p> return (</p>
          <p> {'  <div>'}</p>
          <p> {'   <h3>Author</h3>'}</p>
          <p> {'   <div>First Name: {props.author.firstName}</div>'}</p>
          <p> {'   <div>Last Name: {props.author.lastName}</div>'}</p>
          <p> {'  </div>'}</p>
          <p>{"}"}</p>
        </pre>
        
        <h6>3. Now the our big component looks like this, really simple!</h6>
        <pre>
          <p>function Book(props) {"{"}</p>
          <p> return (</p>
          <p> {'<div>'}</p>
          <p> {' <Title name="{props.book.name}>'}</p>
          <p> {' <Author author="{props.author}">'}</p>
          <p> {'</div>'}</p>
          <p>{"}"}</p>
        </pre>
      </div>
      <hr />
      
      <h3>5. Props are readonly!</h3>
      <div className={"context-body"}>
        <p>Props are <b className="text-danger">readonly!</b>, this is rule, so, we can not change values of them!</p>
      </div>
    </div>
  );
}
