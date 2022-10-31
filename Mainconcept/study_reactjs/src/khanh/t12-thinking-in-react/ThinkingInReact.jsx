import React from 'react';
class ThinkingInReact extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const renderData = data.map((data) => {
            return <span>category: {data.category}, price: {data.price}, name: {data.name}<br /></span>
        })
        return (
            <div className="style">
                <h1>Unit 12: Thinking In React</h1>
                <div className="content">
                    <h3>Start With A Mock</h3>
                    <strong>Our JSON API returns some data that looks like this:</strong><br />
                    {renderData}
                </div><br />
                <div className="content">
                    <h3>Step 1: Break The UI Into A Component Hierarchy: tạo cây component từ bản thiết kế</h3>
                </div><br />
                <div className="content">
                    <h3>Step 2: Build A Static Version in React</h3>
                </div><br />
                <div className="content">
                    <h3>Step 3: Identify The Minimal (but complete) Representation Of UI State</h3>
                </div><br />
                <div className="content">
                    <h3>Step 4: Identify Where Your State Should Live</h3>
                </div><br />
                <div className="content">
                    <h3>Step 5: Add Inverse Data Flow</h3>
                </div>
            </div>
        )
    }
}
const data = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];
export default ThinkingInReact;