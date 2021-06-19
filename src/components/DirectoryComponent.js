import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import CampsiteInfo from './CampsiteInfoComponent';

class Directory extends Component {
    constructor(props) { //props :properties must be use everytime we use contructor inside a React component
        super(props); // require this as first line when using a constructor
        this.state = {
            selectedCampsite: null
        };
    }

    onCampsiteSelect(campsite){
        this.setState({selectedCampsite: campsite});
    }


    render() {
        const directory = this.props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick={ () => this.onCampsiteSelect(campsite) }>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <CampsiteInfo campsite={this.state.selectedCampsite}/>
            </div>
        );
    }
}




export default Directory;