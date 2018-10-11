import React from 'react';
import PropTypes from "prop-types";
import Button from '../Common/Button'
import { connect } from 'react-redux';
import { signUpUser, clearErrMsg } from '../../redux/actions/authActions'

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

    componentWillUnmount() {
        // this.props.clearErrorMsg();
    }

    signUpUser() {
        let userData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
        }

        if (!this.state.sending) {
            this.handleCommunicationState(true);
            
            this.props.setUserData(userData)
                .then(() => {
                    this.handleCommunicationState(false);

                    !this.props.error && this.props.history.push('/home');                
                });
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
                    <div className="grey-panel flex-row">    
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
                            { 
                                this.props.error
                                    && (<p className="error">{this.props.error}</p>)
                            }
                            <Button clickCallback={this.signUpUser} propClass='btn btn-primary'>SignUp</Button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

SignUp.propTypes = {
    user: PropTypes.object.isRequired,
    error: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
      user: state.login.userData,
      error: state.login.authError
    };
  };
  
const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (data) => dispatch(signUpUser(data)),
        clearErrorMsg: () => dispatch(clearErrMsg())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);