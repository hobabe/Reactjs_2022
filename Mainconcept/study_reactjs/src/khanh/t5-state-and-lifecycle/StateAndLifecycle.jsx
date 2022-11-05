const StateAndLifecycle = () => {
    return (
        <div className="style">
            <h1>Unit 5: State and Lifecycle</h1>
            <div className="content">

                <h3>
                    Converting a Function to a Class
                </h3>
                <p>
                    You can convert a function component like Clock to a class in five steps:<br />

                    1.Tạo một ES6 "class", cùng tên, cho nó "extends React.Component"<br />
                    2.Thêm một phương thức render().<br />
                    3.Di chuyển tất cả nội dung của function vào bên trong phương thức render()<br />
                    4.Thay thế "props" thành "this.props" trong nội dung của render().<br />
                    5.Xóa function rỗng mà ta đã lấy nội dung từ nó.
                </p>
                <label>class Clock extends React.Component {"{"}</label><br />
                <label>render() {"{"}</label><br />
                <label>return (<br />
                    &lt;div&gt;<br />
                    &lt;h1&gt;Hello, world!&lt;/h1&gt;<br />
                    &lt;h2&gt;It is{"{this.props.date.toLocaleTimeString()}"} .&lt;/h2&gt;<br />
                    &lt;/div&gt;
                    );</label>
            </div><br />
            <div className="content">
                <h3>Adding Local State to a Class</h3>
                <p>Thêm một class constructor có tham số truyền vào là props</p>
                <p>Thêm 1 super(props) vào trong constructor</p>
                <p>Tất cả state đều nằm trong constructor</p>
            </div><br />
            <div className="content">
                <h3>Adding Lifecycle Methods to a Class</h3>
                <strong>These methods are called “lifecycle methods”:</strong>
                <p>componentDidMount() {"{"}  {"}"}: chạy sau khi component đã được render vào trong DOM. </p>
                <p>componentWillUnmount() {"{"}  {"}"}: chạy sau khi component kết thúc quá trình render.</p>
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