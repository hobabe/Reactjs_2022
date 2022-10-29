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
            <p className="content">
                <h3>Adding Local State to a Class</h3>
            </p>
        </div>
    )
}
export default StateAndLifecycle;