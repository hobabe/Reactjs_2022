const StateAndLifecycle = () => {
    return (
        <div className="style">
            <h1>Unit 5: State and Lifecycle</h1>
            <p className="content">

                <h3>
                    Converting a Function to a Class
                </h3>
                <p>
                    You can convert a function component like Clock to a class in five steps:<br />

                    1.Create an ES6 class, with the same name, that extends React.Component.<br />
                    2.Add a single empty method to it called render().<br />
                    3.Move the body of the function into the render() method.<br />
                    4.Replace props with this.props in the render() body.<br />
                    5.Delete the remaining empty function declaration.
                </p>
                <label>class Clock extends React.Component {"{"}</label><br />
                <label>render() {"{"}</label><br />
                <label>return (<br />
                    &lt;div&gt;<br />
                    &lt;h1&gt;Hello, world!&lt;/h1&gt;<br />
                    &lt;h2&gt;It is{"{this.props.date.toLocaleTimeString()}"} .&lt;/h2&gt;<br />
                    &lt;/div&gt;
                    );</label>
            </p>
            <div className="content">
                <h3>Adding Local State to a Class</h3>
            </div><br />
            <div className="content">
                <h3>Adding Lifecycle Methods to a Class</h3>
                <strong>These methods are called “lifecycle methods”:</strong>
                <p>componentDidMount() {"{"}  {"}"}: sẽ chạy lần đầu tiên khi ứng dụng được render</p>
                <p>componentWillUnmount() {"{"}  {"}"}: sẽ chạy khi kết thúc quá trình</p>
            </div><br />
            <div className="content">
                <h3>Using State Correctly</h3>
                <strong>Do Not Modify State Directly</strong><br />
                <strong>State Updates May Be Asynchronous</strong><br />
                <strong>State Updates are Merged</strong><br />
            </div><br />
            <div className="content">
                <h3>The Data Flows Down</h3>
                <p>Một component có thể truyền State của nó xuống component con</p>
            </div>
        </div>
    )
}
export default StateAndLifecycle;