import React, { useEffect } from "react";

export default function Alert({name = '',clouseAlert}) {
    useEffect(() => {
        const timerId = setTimeout(clouseAlert, 3000)
        return () => clearTimeout(timerId)
    },[name])
    return(
        <div id="toast-container">
            <div className="toast">{name} add in Cart</div>
        </div>
    )
}