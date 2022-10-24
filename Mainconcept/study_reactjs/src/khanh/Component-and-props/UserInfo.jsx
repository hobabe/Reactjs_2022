import Avatar from "./Avatar";
import Info from "./Info";

export default function UserInfo(props) {
    const avatar = props.dataUser.avatar;
    const user = props.dataUser
    return (
        <div>
            <Avatar avatar={avatar} />
            <Info user={user} />
        </div>
    )
}