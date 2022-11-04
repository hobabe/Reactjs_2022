export default function IntroducingJSX() {
    const unit = ' Introducing JSX';
    return (
        <div className="style">
            <h1>Unit 2:  {unit}
            </h1>
            <div className="content">

                <label>JSX là cú pháp mở rộng đến từ JavaScipt, JSX trông giống ngôn ngữ mẫu, nhưng JSX đi kèm toàn bộ tính năng của JavaScript.<br />
                    JSX làm ra những React "element."
                </label>
                const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;;
            </div><br />
            <div className="content">
                <h3>Embedding Expressions in JSX</h3>
                <label>Có thể nhúng bất kỳ biểu thức JavaScript hợp lệ bên trong JSX bằng cặp dấu ngoặc nhọn.</label><br />
                const name = 'Josh Perez';
                const element =  &lt;h1&gt;Hello, {"{name}"} &lt;h1&gt;;
            </div><br />
            <div className="content">
                <h3>JSX is an Expression Too</h3>
                <label> Can use JSX inside of if statements and for loops</label><br />

                <label> function getGreeting(user) {"{"}</label><br />
                <label> if (user)  {"{"}</label><br />
                <label> return &lt;h1&gt;Hello, {"formatName(user)"}!&lt;/h1&gt;;</label><br />
                <label>  {"{"}</label><br />
                <label>  return &lt;h1&gt;Hello, Stranger.&lt;/h1&gt;;</label><br />
                <label>  {"}"}</label>

            </div><br />
            <div className="content">
                <h3>Specifying Attributes with JSX</h3>
                <p>You may use quotes to specify string literals as attributes:</p>
                const element = &lt;a href="https://www.reactjs.org"&gt; link &lt;/a&gt;;
                <p>You may also use curly braces to embed a JavaScript expression in an attribute:</p>
                const element = &lt;img src={"{user.avatarUrl}"}&gt;&lt;/img&gt;

            </div>
            <p className="content">
                <h3>Specifying Children with JSX</h3>
                <p>If a tag is empty, you may close it immediately with /&gt;, like XML:</p>
                const element = &lt;img src={"{user.avatarUrl}"} /&gt;;
                <p>JSX tags may contain children:</p>
                const element = (
                &lt;div&gt;
                &lt;h1&gt;Hello!&lt;/h1&gt;
                &lt;h2&gt;Good to see you here.&lt;/h2&gt;
                &lt;/div&gt;
                );
            </p>
            <p className="content">
                <h3>JSX Prevents Injection Attacks</h3>
                <p>It is safe to embed user input in JSX:</p>
                const title = response.potentiallyMaliciousInput;
                // This is safe:
                const element = &lt;h1&gt;{"{title}"}&lt;/h1&gt;;
            </p>

        </div>
    )
}