const ListsAndKeys = () => {
    const newArray = [1, 2, 3, 6, 523, 4234234, 23423, 1]
    const listNumber = newArray.map((number) => {
        return <li key={number.toString()}>{number}</li>
    })
    return (
        <div className="style">
            <h1>Unit 8: Lists and Keys</h1>
            <div className="content">

                <strong>Demo:</strong>
                {listNumber}
            </div><br />
            <div className="content">
                <h3>Basic List Component</h3>
                <strong>Usually you would render lists inside a component.</strong>
                <p>
                    function NumberList(props) {"{"}<br />
                    const numbers = props.numbers;<br />
                    const listItems = numbers.map((number) {"=>"}<br />
                    &lt;li&gt;{"{number}"}&lt;/li&gt;<br />
                    );<br />
                    return (<br />
                    &lt;ul&gt;{"{listItems}"}&lt;/ul&gt;<br />
                    );<br />
                    {"}"}<br />

                    const numbers = [1, 2, 3, 4, 5];<br />
                    const root = ReactDOM.createRoot(document.getElementById('root'));<br />
                    root.render(&lt;NumberList numbers={"{numbers}"} /&gt;);
                </p>
                <strong>When you run this code, you’ll be given a warning that a key should be provided for list items. A “key” is a special string attribute you need to include when creating lists of elements. We’ll discuss why it’s important in the next section.<br />
                    Let’s assign a key to our list items inside numbers.map() and fix the missing key issue.
                </strong>
                <p>
                    function NumberList(props) {"{"}<br />
                    const numbers = props.numbers;<br />
                    const listItems = numbers.map((number) {"=>"}<br />
                    &lt;li key={"{number.toString()}"}&gt;<br />
                    {"{number}"}<br />
                    &lt;/li&gt;<br />
                    );<br />
                    return (<br />
                    &lt;ul&gt;{"{listItems}"}&lt;/ul&gt;<br />
                    );<br />
                    {"}"}
                </p>
            </div><br />
            <div className="content">
                <h3>Keys</h3>
                <strong>Keys help React identify which items have changed, are added, or are removed</strong><br />
                <strong>If you choose not to assign an explicit key to list items then React will default to using indexes as keys.</strong>
                <p>
                    const numbers = [1, 2, 3, 4, 5];<br />
                    const listItems = numbers.map((number) {"=>"}<br />
                    &lt;li key={"{number.toString()}"}&gt;<br />
                    {"{number}"}<br />
                    &lt;/li&gt;<br />
                    );
                </p>
            </div><br />
            <div className="content">
                <h3>Extracting Components with Keys</h3>
                <strong>Keys only make sense in the context of the surrounding array.</strong>
            </div><br />
            <div className="content">
                <h3>Keys Must Only Be Unique Among Siblings</h3>
                <p><strong>Keys only make sense in the context of the surrounding array.</strong></p>
                <p>
                    <strong>
                        Keys used within arrays should be unique among their siblings. However, they don’t need to be globally unique.<br />
                        Keys serve as a hint to React but they don’t get passed to your components. If you need the same value in your component, pass it explicitly as a prop with a different name
                    </strong>
                </p>
            </div>
        </div>
    )
}
export default ListsAndKeys;