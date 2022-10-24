function IntroducingJSX(){
    return (
        <div>
            <h3>Hi there!</h3>
            <p>This is JSX: This funny tag syntax is neither a string nor HTML.</p>
            
            <pre>
                const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;;
            </pre>
            <hr/>

            <h3>1. Embeding expressions in JSX</h3>
            <p>Variable 'lessonName' is wrapped by curly braces</p>
            <pre>
                <p>const lessonName = "Introducing JSX";</p>
                <p>const result = &lt;h1&gt;Lesson: "{"{lessonName}"}"&lt;/h1&gt;</p>
            </pre>
            <hr/>

            <h3>2. Embeding expressions in JSX</h3>
            <p>Variable 'lessonName' is wrapped by curly braces</p>
            <pre>
                <p>const lessonName = "Introducing JSX";</p>
                <p>const result = &lt;h1&gt;Lesson: "{"{lessonName}"}"&lt;/h1&gt;</p>
            </pre>
            <hr/>

            <h3>3. JSX is an expression too</h3>
            <p>We can use 'if', loop and so on</p>
            <pre>
                <p>function Hello(userName){"{"}</p>
                <p> if(userName) {"return {<h2>hello {userName}<h2/>}"}</p>
                <p> return {"userName is not definded!"}</p>
                <p>{"}"}</p>
            </pre>
            <hr/>

            <h3>4. Specifying attribute with JSX</h3>
            <p>We can also use curly braces to embed a Javascript expression</p>
            <pre>
                <p>const imageTag = {'<img src={user.imgUrl} />'}</p>
            </pre>
            <hr/>

            <h3>5. Specifying children with JSX</h3>
            <p>When the tag is empty use '/' & has children tags (close tag and open tag)</p>
            <pre>
                <p>const imageTag = {'<input />'}</p>
                <p>const sidebar = {'<div><h2>Hello<h2/><div>'}</p>
            </pre>
            <hr/>

            <h3>6. JSX prevent Injection Attack</h3>
            <p>Our variable can not become script execution</p>
            <pre>
                <p>const value = data.script</p>
                <p>const result = {'<div>{value}<div>'}</p>
            </pre>
            <hr/>
            
            <h3>7. JSX Represents Objects</h3>
            <p>The 1st code block is JSX will compiled down to the 2nd code block (javascript )</p>
            <pre>
                <p>const value = {'<h1 className="big-font">Hello<h1/>"'}</p>
            </pre>
            <pre>
                <p>const element = {"React.createElement('h1', {className: 'big-font'}, 'Hello')"}</p>
            </pre>
        </div>
    )
}

export default IntroducingJSX