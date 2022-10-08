import { render } from '@testing-library/react';
import React from 'react'
class Parent2Component extends React.Component {
    constructor(props) {
        super(props);
    }
    // var gioHang1 = undefined;
    // var gioHang2 = {};

    // // this["tui"] = "Qua Tao";
    // gioHang1["tui"] = "Qua cam";
    // // gioHang2["tui"] = "Qua cam";

    // console.log('day la parent 2-1', gioHang1);


    // // gioHang2['tui'] = 'Qua Nho';
    // // console.log('day la parent 2-2', gioHang2);
    render() {
        console.log('day la parent 2', this)
        return (
            <div>
                Đây là component Cha 2
            </div>
        )
    }
}
export default Parent2Component;