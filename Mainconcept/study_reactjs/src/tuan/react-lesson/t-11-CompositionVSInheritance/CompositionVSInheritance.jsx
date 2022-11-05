function CompositionVSInheritance() {
  return (
    <div>
      <h3>1. Containment</h3>
      <div className={"context-body"}>
        <p>We can use properties has been passed from its parent to use as its own.</p>
        <pre>
          <p>function PostIndex() {"{"}</p>
          <p> {" return ("}</p>
          <p> {"  <ul>"}</p>
          <p> {"    <li>1. Hello World</li>"}</p>
          <p> {"    <li>2. Introducing JSX</li>"}</p>
          <p> {"  </ul>"}</p>
          <p> {" );"}</p>
          <p>{"}"}</p>
          <p> </p>
          <p>function PostBody() {"{"}</p>
          <p> {" return ("}</p>
          <p> {"  <div>"}</p>
          <p> {"    <div>This is lesson 1: Hello World</div>"}</p>
          <p> {"  </div>"}</p>
          <p> {" );"}</p>
          <p>{"}"}</p>
          <p> </p>
          <p>function MainBody(props){"{"}</p>
          <p>{" render(){ "}</p>
          <p>{"  return ("}</p>
          <p> {"  <div>"}</p>
          <p className={"b-beige"}> {"    <div id={'sidebar'}>{props.sideBar}</div>"}</p>
          <p className={"b-beige"}> {"    <div id={'container'}>{props.postBody}</div>"}</p>
          <p> {"  </div>"}</p>
          <p>{"  );"}</p>
          <p>{"}"}</p>
          <p> </p>
          <p>function WebApp{"{"}</p>
          <p>{" render(){ "}</p>
          <p>{"  return ("}</p>
          <p> {"   <MainBody"}</p>
          <p> {"    sideBar={"}</p>
          <p className={"b-beige"}> {"     <PostIndex />}"}</p>
          <p> {"    }"}</p>
          <p> {"    postBody={"}</p>
          <p className={"b-beige"}> {"     <PostBody />}"}</p>
          <p> {"    }/>"}</p>
          <p>{"  );"}</p>
          <p>{"}"}</p>
        </pre>
        <h6>WebApp component can implement like this:</h6>
        <pre>
          <p>function WebApp{"{"}</p>
          <p>{" render(){ "}</p>
          <p>{"  return ("}</p>
          <p> {"   <MainBody>"}</p>
          <p className={"b-beige"}> {"     <PostIndex />"}</p>
          <p className={"b-beige"}> {"     <PostBody />"}</p>
          <p> {"   </MainBody>"}</p>
          <p>{"  );"}</p>
          <p>{"}"}</p>
        </pre>
        <hr />

        <h3>2. Specialization</h3>
        <div className={"context-body"}>
          <p>MainBody component above can be a part of many project because it like template!</p>
        </div>
        <hr />

        <h3>3. So What About Inheritance</h3>
        <div className={"context-body"}>
          <p>One thing to say: Props and composition give you all the flexibility you need to customize a component.</p>
          <p>One thing to see: Facebook said: they haven't found any case to use inheritance.</p>
          <p>If you want to resuse non-UI functionality between components, we suggest extracting it into seprate JavaScript module.</p>
        </div>
      </div>
    </div>
  );
}

export default CompositionVSInheritance;
