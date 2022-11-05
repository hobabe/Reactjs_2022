import React from 'react';
class Form extends React.Component {
    constructor(props) {
        super(props)
    }
    handleSelectTag(e) {

    }
    handleMultiInput(e) {

    }
    render() {


        return (
            <div className="style">
                <h1>Unit 9: Form</h1>
                <div className="content">
                    <h3>Controlled Components</h3>
                    <p>Đối với một controlled component, giá trị của input luôn luôn được điều khiển bởi state của React</p>
                </div><br />
                <div className="content">
                    <h3>The textarea Tag</h3>
                    <p>Thuộc tính value không hỗ trợ trên textarea</p>
                </div><br />
                <div className="content">
                    <h3>The select Tag</h3>
                    <p>Trong React, thay vì dùng thuộc tính selected, ta sẽ dùng thuộc tính value ở thẻ select.</p>
                    <select onchange={this.handleSelectTag} style={{ marginBottom: '10px' }}>
                        <option>Select 1</option>
                        <option>Select 2</option>
                        <option>Select 3</option>
                        <option>Select 4</option>
                    </select>

                </div><br />
                <div className="content">
                    <h3>The file input Tag</h3>
                    <input type="file" style={{ marginBottom: '10px' }} />
                </div><br />
                <div className="content">
                    <h3>Handling Multiple Inputs</h3>
                    <input type="checkbox" onchange={this.handleMultiInput} />
                    <input type="text" style={{ marginBottom: '10px' }} onchange={this.handleMultiInput} />
                </div><br />
                <div className="content">
                    <h3>Controlled Input Null Value</h3>
                    <strong>You may have accidentally set value to undefined or null</strong>
                </div><br />

            </div>
        )
    }
}
export default Form;