import React, { Component } from 'react';

class CampsiteInfo extends Component {
    constructor(props) { 
        super(props);
        this.state = {

        }
    }
    render() {
        if (this.props.campsite) { //why this?
            return  (
                <div className="row">

                </div>
            )
        }
        return <div />;
    }

}

export default CampsiteInfo;