import Avatar from "./Avatar";
import Info from "./Info";

export default function UserInfo(props) {
    const avatar = props.dataUser.avatar;
    const user = props.dataUser
    return (
        <div className="style">
            <h1>Unit 4: Component and Props</h1>
            <Avatar avatar={avatar} />
            <Info user={user} />

            <div className="content">
                <h3>
                    Function and Class Components

                </h3>
                <label>
                    <strong>Function component:</strong><br />
                </label>
                <p>
                    <label>
                        function Welcome(props) {"{"}<br />
                    </label>
                    <label>
                        return &lt;h1&gt;Hello,{"{props.name}"} &lt;/h1&gt;;<br />
                    </label>
                    <label>
                        {"}"}
                    </label>
                </p>
                <label>
                    <strong>Class component:</strong><br />
                </label>
                <label>class Welcome extends React.Component {"{"}<br /></label>
                <label> render() {"{"}<br /></label>
                <label>
                    return &lt;h1&gt;Hello,{"{this.props.name}"} &lt;/h1&gt;;<br />
                </label>
                <label>
                    {"}"}<br />
                </label>
                <label>
                    {"}"}
                </label>
            </div><br />
            <div className="content">
                <h3>Props are Read-Only</h3>
                <strong>
                    React is pretty flexible but it has a single strict rule:<br />
                    All React components must act like pure functions with respect to their props.
                </strong>
            </div>
        </div>
    )
}