import UserInfo from "./UserInfo"

export default function ComponentAndProps(props) {
    const dataUser = {
        name: 'Phan Xuan Khanh',
        age: 29,
        avatar: 'https://picsum.photos/200/300'
    }
    return (
        <div>
            <UserInfo dataUser={dataUser} />
        </div>
    )
}