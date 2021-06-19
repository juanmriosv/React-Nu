import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    renderCampsite(campsite){
        return(
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    renderComments(comments){
        if (comments){
            return(
                <div nameClass="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(c => <p key={c.id}>{c.author}</p>)}
                </div>
            );

        }
        return <div />;
    }

    render() {
        if (this.props.campsite) { //why this and below props?
            return  (
                <div className="row">
                    {this.renderCampsite(this.props.campsite) }
                    {this.renderComments(this.props.campsite.comments) }
                </div>
            );
        }
        return <div />;
    }

}

export default CampsiteInfo;