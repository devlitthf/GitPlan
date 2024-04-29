import React from 'react'
import PropTypes from 'prop-types'
export default function TextForm(props) {
    return (
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">{props.title}</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    )
}

TextForm.propTypes = {
    title:PropTypes.string
}

TextForm.defaultProps = {
    title: "Enter Title here"
}