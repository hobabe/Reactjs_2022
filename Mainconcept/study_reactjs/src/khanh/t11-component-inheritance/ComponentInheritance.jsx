import React from 'react';
class ComponentInheritance extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="style">
                <h1>Unit 11: Component Inheritance</h1>
                <div className="content">
                    <h3>Containment</h3>
                </div><br />
                <div className="content">
                    <h3>Specialization</h3>
                </div><br />
                <div className="content">
                    <h3>So What About Inheritance?</h3>
                </div><br />

            </div>
        )
    }
}
export default ComponentInheritance;