export default function RenderingElement() {
    return (
        <div className="style">

            <h1>Unit 3: Rendering Elements</h1>
            <p className="content">
                <h3>
                    Rendering an Element into the DOM
                </h3>
                <p>
                    const root = ReactDOM.createRoot(
                    document.getElementById('root')
                    );
                    <p>const element = &lt;h1&gt;Hello, world&lt;/h1&gt;;</p>
                    root.render(element);
                </p>
            </p>
            <p className="content">
                <h3>Updating the Rendered Element</h3>
                <p>
                    const root = ReactDOM.createRoot(
                    document.getElementById('root')
                    );
                </p>
                <label>function tick() {"{"}</label><br />
                <label>const element = (</label><br />
                <label>
                    &lt;div&gt;<br />
                    &lt;h1&gt;Hello, world!&lt;/h1&gt;
                    &lt;h2&gt;It is {"{new Date().toLocaleTimeString()}"}.&lt;/h2&gt;<br />
                    <label> &lt;/div&gt;</label>
                    );<br />
                    root.render(element);<br />
                    {"}"}<br />
                    setInterval(tick, 1000);
                </label><br />
            </p>


        </div>
    )
}