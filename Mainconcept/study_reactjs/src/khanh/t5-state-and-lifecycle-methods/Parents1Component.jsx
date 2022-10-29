import Child1Component from "./Child1Component";
import React from 'react'

class Parents1Component extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gioHang: 'hoa'
        }
    }

    render() {
        console.log('day la parent 1', this)
        return (
            <div>
                Đây là component Cha 1
                <Child1Component />
            </div>
        )
    }

}




export default Parents1Component;