import * as React from "react";

const ToDoRow = ({ children }) => {
    
    const childStyle = {
        marginLeft: '${spacing}px',
    };

    return (
        <div className="ToDoContainer">
            {React.Children.map(children, (child , index) => {
                return React.cloneElement(child, {
                    style: {
                        ...child.props.style,
                        ...(index > 0 ? childStyle : {}),
                    },
                })
            })}
        </div>
    )
}

export default ToDoRow;