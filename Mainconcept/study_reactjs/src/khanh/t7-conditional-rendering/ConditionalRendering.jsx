const ConditionalRendering = () => {
    return (
        <div className="style">
            <h1>Unit 7: Conditional Rendering</h1>
            <div className="content">
                <h3>Element Variables</h3>

            </div><br />
            <div className="content">
                <h3>Inline If with Logical && Operator</h3>
                <p>Có thể sử dụng toán tử "&&" trong JSX</p>
                <p>function Mailbox(props){" {"}<br />
                    const unreadMessages = props.unreadMessages;<br />
                    return (<br />
                    &lt;div&gt;<br />
                    &lt;h1&gt;<br />Hello!&lt;/h1&gt;<br />
                    {" {"}unreadMessages.length &gt; 0 &&<br />
                    &lt;h2&gt;<br />
                    You have{" {"}unreadMessages.length{"}"} unread messages.<br />
                    &lt;/h2&gt;<br />
                    {"}"}<br />
                    &lt;/div&gt;<br />
                    );<br />
                    {"}"}</p>
            </div><br />
            <div className="content">
                <h3>Inline If-Else with Conditional Operator</h3>
                <p>Thay vì dùng IF ta có thể sử dụng toán tử 3 ngôi </p>
                <p>render() {"{"}<br />
                    const isLoggedIn = this.state.isLoggedIn;<br />
                    return (<br />
                    &lt;div&gt;<br />
                    The user is &lt;b&gt;{"{isLoggedIn ? 'currently' : 'not'}"}&lt;/b&gt; logged in.<br />
                    &lt;/div&gt;<br />
                    );<br />
                    {"}"}</p>

            </div><br />
        </div>
    )
}
export default ConditionalRendering;