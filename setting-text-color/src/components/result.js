import React, { Component } from 'react'

class Result extends Component {

  //App cha truyền color và result con
  setStyle(){
    return{
      color : this.props.color,
      borderColor:  this.props.color,
      fontSize: this.props.font
    }
  }
  render() {
    return (
    
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <p>Color : {this.props.color} - Fontsize : { this.props.font} px</p>
          <div id="content" style={this.setStyle()}>
            Nội dung setting
          </div>
        </div>
    )
  }
}
export default Result
