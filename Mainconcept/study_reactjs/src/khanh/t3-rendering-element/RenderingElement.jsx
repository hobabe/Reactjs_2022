export default function RenderingElement() {
    return (
        <div className="style">

            <h1>Unit 3: Rendering Elements</h1>
            <div className="content">
                <h3>
                    Rendering an Element into the DOM
                </h3>
                <p>tạo 1 biến có tên là root bằng ReactDOM gọi tới hàm createRoot, trong hàm createRoot gọi phương thức document.getElementByID truyền tham số root vào.<br />
                    tạo 1 biến có tên element tạo các thẻ tag, sau đó từ biến root gọi tới hàm render và truyền tham số element vô.
                </p>
                <p>
                    const root = ReactDOM.createRoot(
                    document.getElementById('root')
                    );
                    <p>const element = &lt;h1&gt;Hello, world&lt;/h1&gt;;</p>
                    root.render(element);
                </p>
            </div><br />
            <div className="content">
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
            </div><br />
            <div className="content">
                <h3>React Only Updates What’s Necessary</h3>
                <p>
                    React DOM so sánh các phần tử và các thành phần con của nó với cái trước đó, nếu có thay đổi thì sẽ cập nhật lại DOM.
                </p>
            </div>

        </div>
    )
}