import React from 'react'
export default function (props) {
    return (
        <>
            <div className="container">
                <div class="mb-3">
                    <h1>{props.title}</h1>
                    <textarea className="form-control" rows="8"></textarea>
                </div>
            </div>
        </>
    )
}