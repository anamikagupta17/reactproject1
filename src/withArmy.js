import React, { Component } from 'react'
const Army = (Men,shot) =>{
 class WithArmy extends Component {
    state={
        gunshots:0
    };
    handleShots = () =>{
        this.setState({gunshots:this.state.gunshots + shot });
    }
    render() {
        return (
                <Men 
                hocguname="Ak47"
                hocgunshots={this.state.gunshots}
                hochandleShots={this.state.handleShots}
                />
            
        )
    }
};
return WithArmy;
}
export default Army;
