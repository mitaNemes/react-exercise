import React from 'react';
import PropTypes from "prop-types";
import Button from '../Common/Button'
import { connect } from 'react-redux';
import { signUpUser } from '../../redux/actions/authActions'

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            sending: false
        };

        this.signUpUser = this.signUpUser.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleCommunicationState = this.handleCommunicationState.bind(this);
    }

    signUpUser() {
        if (!this.state.sending) {
            this.handleCommunicationState(true);
            this.props.setUserData({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
            }).then(() => {
                this.handleCommunicationState(false);
                this.props.history.push('/user-list');
            })
        }
    }

    handleFormChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleCommunicationState(bool) {
        this.setState({
            sending: bool
        });
    }

    formAction(e){
        e.preventDefault()
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="center" >
                    <h2>Please sign-up</h2>
                    <div className="grey-panel">    
                        <form onSubmit={this.formAction} className="col-xs-12 col-lg-12">
                            <div className="form-group">
                                <label>First name:</label>
                                <input type="text" className="form-control" placeholder="Enter your first name" 
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.handleFormChange}/>
                            </div>
                            <div className="form-group">
                                <label>Last name:</label>
                                <input type="text" className="form-control" placeholder="Enter your last name" 
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={this.handleFormChange}/>
                            </div>
                            <Button clickCallback={this.signUpUser} propClass='btn btn-primary'>SignUp</Button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

SignUp.propTypes = {
    user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
      user: state.login.userData
    };
  };
  
const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (data) => dispatch(signUpUser(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);