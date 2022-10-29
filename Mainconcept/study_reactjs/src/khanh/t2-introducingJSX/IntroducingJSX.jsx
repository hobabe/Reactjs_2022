export default function IntroducingJSX() {
    const unit = ' Introducing JSX';
    return (
        <div className="style">
            <h1>Unit 2:  {unit}
            </h1>
            <p className="content">
                <h3>Consider this variable declaration:</h3>
                const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;;
            </p>
            <p className="content">
                <h3>Embedding Expressions in JSX</h3>
                const name = 'Josh Perez';
                const element =  &lt;h1&gt;Hello, {"{name}"} &lt;h1&gt;;
            </p>
            <p className="content">
                <h3>JSX is an Expression Too</h3>


                <label> function getGreeting(user) {"{"}</label><br />
                <label> if (user)  {"{"}</label><br />
                <label> return &lt;h1&gt;Hello, {"formatName(user)"}!&lt;/h1&gt;;</label><br />
                <label>  {"{"}</label><br />
                <label>  return &lt;h1&gt;Hello, Stranger.&lt;/h1&gt;;</label><br />
                <label>  {"}"}</label>

            </p>
            <p className="content">
                <h3>Specifying Attributes with JSX</h3>
                <p>You may use quotes to specify string literals as attributes:</p>
                const element = &lt;a href="https://www.reactjs.org"&gt; link &lt;/a&gt;;
                <p>You may also use curly braces to embed a JavaScript expression in an attribute:</p>
                const element = &lt;img src={"{user.avatarUrl}"}&gt;&lt;/img&gt;

            </p>
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