import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Modal, ModalHeader, ModalBody, Card, CardImg, CardText, CardTitle, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rating: '',
            name: '',
            comment: '',
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }
    render() {
      return (
          <div>
        <Button outline onClick={this.toggleModal}>
            <i className="fa fa-pencil fa-lg" /> Submit Comment
        </Button>
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleLogin}>
                                <FormGroup>
                                    <Label htmlFor="username">Username</Label>
                                    <Input type="text" id="username" name="username"
                                        innerRef={input => this.username = input} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input type="password" id="password" name="password"
                                        innerRef={input => this.password = input} />
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="remember"
                                            innerRef={input => this.remember = input} />
                                        Remember me
                                    </Label>
                                </FormGroup>
                                <Button type="submit" value="submit" color="primary">Login</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
                    </div>
        );
    }
  }
function RenderCampsite({campsite}){
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

function RenderComments({comments}){
    if (comments){
        return(
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map(c => (<div key={c.id}>
                    <p>
                        <span className="jmr-comment">{c.text}</span>
                        --{c.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}
                    </p>
                </div>))}
                <CommentForm/>
            </div>
        );
    }
    return <div />;
}


function CampsiteInfo(props){
    if (props.campsite){
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    return <div />
}



export default CampsiteInfo;