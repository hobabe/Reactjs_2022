function RenderingElements() {
  return (
    <div>
      <h3>1. Rendering an Element into the DOM</h3>
      <div className={"context-body"}>
        <p>To render a React Element:</p>
        <h6>1. Pass DOM element to "ReactDOM.CreateRoot()"</h6>
        <h6>2. Pass React Element to "root.Render()"</h6>
        <pre>
          <p>const root = ReactDOME.CreateRoot(document.GetElementById('root'));</p>
          <p>const element = {"<h3>Hello</h3>"};</p>
          <p>root.render(element);</p>
        </pre>
      </div>
      <hr />

      <h3>2. Updating the rendered Element</h3>
      <div className={"context-body"}>
        <p>React elements are <b className={"text-danger"}>immutable!</b> and we can only update by create new Element and pass it into "root.render"</p>
        <pre>
          <p>const root = ReactDOM.createRoot(document.GetElementById('root'));</p>
          <p>function tick(){"{ "}</p>
          <p>{" root.render(<h3> {new Date().toLocalTimeString()} </h3>);"}</p>
          <p>{"}"}</p>
          <p>setInterVal(tick, 1000);</p>
        </pre>
      </div>
      <hr />

      <h3>3. React Only Updates What's Necessary</h3>
      <div className={"context-body"}>
        <p>React DOM compares the element and its children to the previous one.</p>
        <p>Then, React DOM only applies the DOM updates necessary to bring the DOM to the desired state!</p>
      </div>
    </div>
  );
}

export default RenderingElements;
