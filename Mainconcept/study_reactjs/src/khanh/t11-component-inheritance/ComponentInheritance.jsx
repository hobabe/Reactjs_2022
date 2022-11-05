import React from 'react';
class ComponentInheritance extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="style">
                <h1>Unit 11: Component Inheritance</h1>
                <div className="content">
                    <h3>Containment</h3>
                    <p>Thay vì dùng component như:<br />
                        <strong>{" <Component/>"}</strong><br />
                        ta có thể dùng cách khác như:<br />
                        <strong> {"<Component>Nội dung</Component>"}</strong>
                    </p>
                </div><br />
                <div className="content">
                    <h3>Specialization</h3>
                    <p>Có thể tái sử dụng component bằng cách sử dụng props</p><br />
                    <p>
                        <strong>function Dialog(props) {"{"}</strong><br />
                        return (<br />
                        &lt;FancyBorder color="blue"&gt;<br />
                        &lt;h1 className="Dialog-title"&gt;<br />
                        {"{props.title}"}<br />
                        &lt;/h1&gt;<br />
                        &lt;p className="Dialog-message"&gt;<br />
                        {"{props.message}"}<br />
                        &lt;/p&gt;<br />
                        &lt;/FancyBorder&gt;<br />
                        );<br />
                        {"}"}<br />

                        <strong>function WelcomeDialog() {"{"}</strong><br />
                        return (<br />
                        &lt;Dialog<br />
                        title="Welcome"<br />
                        message="Thank you for visiting our spacecraft!" /&gt;<br />
                        );<br />
                        {"}"}
                    </p>
                </div><br />
                <div className="content">
                    <h3>So What About Inheritance?</h3>
                    <p>Props và composition cần để tuỳ chỉnh giao hiện và hành vi một cách rõ ràng và an toàn. <br />Các component nhận các props không giới hạn, kể cả các giá trị sơ khai, các phần tử React hoặc các hàm.</p>
                </div><br />

            </div>
        )
    }
}
export default ComponentInheritance;