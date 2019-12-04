import React from "react";

const Heading = props => {
    return (
        <>
            <h1>{props.text}</h1>
            <style jsx>
                {`
                    h1 {
                        font-size: 48px;
                        margin: 30px;
                        padding: 0 50px;
                    }
                `}

            </style>
        </>
    )
}

export default Heading;