import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
    renderComments(comments){
        if (comments){
            return(
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(c => (<div>
                        <p>
                            <span className="jmr-comment">{c.text}</span>
                            --{c.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}
                        </p>
                    </div>))}
                </div>
            );
        }
        return <div />;

    }
    renderCampsite(campsite){
        return (
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
    render(){
        if (this.props.campsite){
            return <div className="row">
                {this.renderCampsite(this.props.campsite)}
                {this.renderComments(this.props.campsite.comments)}
            </div>
        }
        return <div />
    }
}

export default CampsiteInfo;