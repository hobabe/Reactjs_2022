import React from 'react';

function PropsAreReadOnly(props) {
    // account.total -= amount;
    const age2 = props.user.age + 3;
    return (
        <div>
            <h3>Age {age2}</h3>
        </div>
    );
}

export default PropsAreReadOnly;