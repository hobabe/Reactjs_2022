function HandlingEvent() {
    function handleSubmit(es) {
        es.preventDefault();
        alert('Haha, có 1 thanh niên bị lừa......')
    }

    return (
        <div className="style">
            <div className="content">
                <h1>Unit 6: Handling Event</h1>
                <form onSubmit={handleSubmit}>
                    <button type="Submit" className="btn-handle">Bấm vào đây có điều vui lắm</button>
                </form>
                <h5>For example, the HTML:</h5>
                <label>
                    &lt;button onclick="activateLasers()"&gt;<br />
                    Activate Lasers<br />
                    &lt;/button&gt;
                </label>
                <h5>is slightly different in React:</h5>
                <p>- Những sự kiện của React được đặt tên theo dạng camelCase, thay vì lowercase.<br />
                    - Với JSX, có thể sử dụng “hàm” (function) để bắt sự kiện thay vì phải truyền vào một chuỗi.<br />
                </p>
                <label>
                    &lt;button onclick={'{activateLasers}'}&gt;<br />
                    Activate Lasers<br />
                    &lt;/button&gt;
                </label>
                <h5>In React, this could instead be:</h5>
                <p> Trong React là không thể trả về false để chặn những hành vi mặc định mà phải gọi preventDefault</p><br />
                <label>function Form() {"{"}</label><br />
                <label>function handleSubmit(e) {"{"}</label><br />
                <label>    e.preventDefault();<br />
                    console.log('You clicked submit.');<br />
                    {"}"}
                </label>
                <label>  return (<br />
                    &lt;form onSubmit={"{handleSubmit}"}&gt;<br />
                    &lt;button type="submit"&gt;Submit&lt;/button&gt;<br />
                    &lt;/form&gt;<br />
                    );<br />
                    {"}"}</label>
            </div><br />
            <div className="content">
                <h3>Passing Arguments to Event Handlers</h3>
                <p>Inside a loop, it is common to want to pass an extra parameter to an event handler.</p>
                <p>
                    &lt;button onClick={"{(e) => this.deleteRow(id, e)}"}&gt;Delete Row&lt;/button&gt;<br />
                    &lt;button onClick={"{this.deleteRow.bind(this, id)}"}&gt;Delete Row&lt;/button&gt;
                </p>
            </div>
        </div>
    );
}
export default HandlingEvent;