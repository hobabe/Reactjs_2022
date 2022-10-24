export default function Info(props) {
    const name = props.user.name;
    const age = props.user.age;
    return (
        <div>
            <h1>My name's {name}</h1>
            <h2>Age:{age}</h2>
        </div>
    )
}