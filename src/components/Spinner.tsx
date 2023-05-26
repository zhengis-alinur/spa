import React from "react";
import { Spinner } from "react-bootstrap";

export default function CustomSpinner() {
    return (<Spinner animation="border" role="status" style={{margin: '0 auto'}}>
        <span className="visually-hidden">Loading...</span>
    </Spinner>)
}