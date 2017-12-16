import React,{Component} from 'react'
import {connect} from 'react-redux'

class FlatDetails extends Component{
    render(){
        const flatDetails = this.props.flatDetails        
        return (
            <div className="FlatDetails">
                <div className="width-70"></div>
                <div className="width-30">
                    <div><span className="headingFlatD">FlatType : </span><span className="descFlatD">{flatDetails.flatType}</span></div>
                    <div><span className="headingFlatD">Owner : </span><span className="descFlatD">{flatDetails.owner + " ( "+flatDetails.mobile+ " )"}</span></div>
                    <div><span className="headingFlatD">Address : </span><span className="descFlatD">{flatDetails.address}</span></div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        flatDetails : state.haveliData.flatDetails
    }
}

export default connect(mapStateToProps)(FlatDetails)

