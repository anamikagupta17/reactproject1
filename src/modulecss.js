import React, { Component } from 'react';
import style from './custom.module.css'
import Newcss from './newcss';

export default class Modulecss extends Component {
    render() {
        return (
            <div>
                <h1 className={style.txt}>Module Css</h1>
                <Newcss/>
            </div>
        )
    }
}
