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
                    <h3>Step 1: Break The UI Into A Component Hierarchy</h3>
                    <p>Bước đầu tiên ta cần tạo cây component từ bản thiết kế</p>
                    <p><strong>* FilterableProductTable</strong><br />
                    </p>
                    <p style={{ paddingLeft: "20px" }}>
                        <strong>* SearchBar</strong><br />
                        <strong>* ProductTable</strong>
                    </p>
                    <p style={{ paddingLeft: "40px" }}>

                        <strong>* ProductCategoryRow</strong> <br />
                        <strong>* ProductRow</strong>
                    </p>

                </div><br />
                <div className="content">
                    <h3>Step 2: Build A Static Version in React</h3>
                    <p>Xây dựng giao diện tĩnh và tái sử dụng các component bằng props</p>
                </div><br />
                <div className="content">
                    <h3>Step 3: Identify The Minimal (but complete) Representation Of UI State</h3>
                    <p>Sử dụng State để kích hoạt các thay đổi của giao diện</p><br />
                    <p>Để xác định có phải State hay không ta dựa vào 3 điều kiện dưới đây</p><br />
                    <p><strong>1.Có phải nó được truyền từ component cha qua props không? Nếu có thì nó có thể không phải là state.</strong><br />
                        <strong> 2.Dữ liệu có thay đổi không? nếu không thì nó không phải là state.</strong><br />
                        <strong>3.Bạn có thể tính toán nó từ các state hay props khác trong component cuả bạn không? nếu có thì nó không phải là state.</strong></p>
                </div><br />
                <div className="content">
                    <h3>Step 4: Identify Where Your State Should Live</h3>
                    <p><strong>Để xác định vị trí của state ta cần dựa theo 4 điều dưới đây:</strong></p>
                    <p>Xác định tất cả các component sẽ hiển thị dựa trên state.<br />
                        Tìm ra một component cha ( component ở phía trên các component cần state ở trong hệ thống phân chia cấp bậc).<br />
                        Hoặc là component cha hay component khác ở phía trên nên giữ state.<br />
                        Nếu bạn không thể tìm ra component hợp lí, thì hãy tạo ra một component mới nắm giữ state và thêm nó vào trong hệ thông phân chia cấp bậc ở phía trên component cha.</p>
                </div><br />
                <div className="content">
                    <h3>Step 5: Add Inverse Data Flow</h3>
                    <p>Để xây dựng được ứng dụng hiển thị chính xác các giá trị thì ta sử dụng props và state nhưng để dữ liệu có thể truyền từ component con lên component cha thì ta dùng state để thực hiện điều đó</p>
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