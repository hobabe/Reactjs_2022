function ListsAndKeys() {
  return (
    <div>
      <h3>1. Rendering Multiple Components</h3>
      <div className={"context-body"}>
        <p>We can build collections of elements and include them in JSX, using curly braces!</p>
        <pre>
          <p> {"const alphabet= ['a', 'b', 'c', 'd'];"}</p>
          <p className={"b-beige"}> {"const answers = alphabet.map((charactor) => "}</p>
          <p className={"b-beige"}> {" <b>{charactor}</b>"}</p>
          <p className={"b-beige"}> {");"}</p>
        </pre>
      </div>
      <hr />

      <h3>2. Basic List Component</h3>
      <div className={"context-body"}>
        <p>We will use 2 components in Cart component</p>
        <pre>
          <p>function ProductList(props) {"{"}</p>
          <p> {" const products= ['ball', 't-shirt', 'shoes', 'glove'];"}</p>
          <p className={"b-beige"}> {" const productElements = products.map((product, index) => "}</p>
          <p className={"b-beige"}> {"  <li>{index}. {product}</li>"}</p>
          <p className={"b-beige"}> {" );"}</p>
          <p> {" return ("}</p>
          <p className={"b-beige"}> {"  <ul>{productElements}</ul>"}</p>
          <p> {" );"}</p>
          <p>{"}"}</p>
        </pre>
      </div>
      <hr />

      <h3>3. Keys</h3>
      <div className={"context-body"}>
        <p>Elements inside loop should have a key and don't use index of array for a key!</p>
        <pre>
          <p> {"const productElements = products.map((product, index) => "}</p>
          <p> {" // DO NOT use: <b key={index}>{product.title}</b>"}</p>
          <p className={"b-beige"}> {" <b key={product.id}>{product.title}</b>"}</p>
          <p> {");"}</p>
        </pre>
      </div>
      <hr />

      <h3>4. Extracting Components with Keys</h3>
      <div className={"context-body"}>
        <p>Keys only make sense in the context of the surrouding array!</p>
        <pre>
          <p>function ProductItem(props) {"{"}</p>
          <p className={"b-beige"}> {" //The is no need to specify the key here:"}</p>
          <p className={"b-beige"}> {" return <li>{props.value}</li>"}</p>
          <p>{"}"}</p>
          <p> </p>
          <p>function Cart(props) {"{"}</p>
          <p> {" const productElements = props.products.map((number) => "}</p>
          <p className={"b-beige"}> {"  //Key should be specified inside the array!"}</p>
          <p className={"b-beige"}> {"  <ProductItem key={number.toString()} value={number} />"}</p>
          <p> {" }"}</p>
          <p> </p>
          <p> {" return ("}</p>
          <p> {"  <ul>"}</p>
          <p> {"   {productElements}"}</p>
          <p> {"  </ul>"}</p>
          <p> {" );"}</p>
          <p>{"}"}</p>
        </pre>
      </div>
      <hr />

      <h3>5. Keys Must Only Be Unique Among Siblings</h3>
      <div className={"context-body"}>
        <p>We will use 2 components in Cart component</p>
        <pre>
          <p>function ProductList(props) {"{"}</p>
          <p> {" const titles = props.products.map((product) => "}</p>
          <p className={"b-beige"}> {"   <li key={product.id}>{product.title}</li>"}</p>
          <p> {"  ));"}</p>
          <p> </p>
          <p> {" const productElements = props.products.map((product) => "}</p>
          <p className={"b-beige"}> {"   <div key={product.id}>"}</p>
          <p> {"    <p>{product.title}</p>"}</p>
          <p> {"    <p>{product.content}</p>"}</p>
          <p> {"   </div>"}</p>
          <p> {"  ));"}</p>
          <p> </p>
          <p> {" return ("}</p>
          <p> {"  <div>"}</p>
          <p> {"   <ul>"}</p>
          <p> {"   {titles}"}</p>
          <p> {"   </ul>"}</p>
          <p> {"   {productElements}"}</p>
          <p> {"  </div>"}</p>
          <p> {" );"}</p>
          <p>{"}"}</p>
        </pre>
        <p>Keys serve as a hint to React but they don't get passed to your components. If we need the same value in our component, </p>
        <p>pass it explicitly as prop with a different name (such as "myId")</p>
        <pre>
          <p> {"const answers = products.map((product) => "}</p>
          <p> {" <Product "}</p>
          <p> {"  key={product.id}</b>"}</p>
          <p className={"b-beige"}> {"  myId={product.id}</b>"}</p>
          <p> {"  name={product.name} />"}</p>
          <p> {");"}</p>
        </pre>
      </div>
      <hr />

      <h3>6. Embedding map() in JSX</h3>
      <div className={"context-body"}>
        <p>We can also use curly braces for embedding any expression!</p>
        <pre>
          <p>function Products(props) {"{"}</p>
          <p> {" return ("}</p>
          <p> {"  <ul>"}</p>
          <p className={"b-beige"}> {"  {props.products.map((product) => "}</p>
          <p className={"b-beige"}> {"    <Product "}</p>
          <p className={"b-beige"}> {"    key={product.id}</b>"}</p>
          <p className={"b-beige"}> {"    myId={product.id}</b>"}</p>
          <p className={"b-beige"}> {"    name={product.name} />"}</p>
          <p className={"b-beige"}> {"   )}"}</p>
          <p> {"  </ul>"}</p>
          <p> {" );"}</p>
          <p>{"}"}</p>
        </pre>
      </div>
      <hr />
    </div>
  );
}

export default ListsAndKeys;
