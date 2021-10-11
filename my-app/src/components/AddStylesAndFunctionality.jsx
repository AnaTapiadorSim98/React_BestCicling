import { Helmet } from "react-helmet-async";
import React from "react";
import less_styles from '../App.less'

export function AddStylesAndFunctionality() {
    return (
        <Helmet>
            <link crossOrigin="anonymous" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" rel="stylesheet"/>
            <link rel="stylesheet/less" type="text/css" href={ less_styles } />
            <script src="https://cdn.jsdelivr.net/npm/less@4.1.1" />
            <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossOrigin="anonymous"/>
        </Helmet>
    );
}