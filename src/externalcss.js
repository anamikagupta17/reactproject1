import React, { Component } from 'react'
import './custom.css'
export default class Externalcss extends Component {
    render() {
        const style=false
        return (
            <div>
                <h1 className="txt">Hello Anamika...this is external Css</h1>
                <h1 className="txtg txts">Hello App</h1>
                <h1 className={style ? "txtr" :"txtp"}>Style with Condition</h1>
            </div>
        )
    }
}
