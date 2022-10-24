export default function Avatar(props) {
    const avatar = props.avatar
    return (
        <div>
            <img src={avatar} />
        </div>
    )
}