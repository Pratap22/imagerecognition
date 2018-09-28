import React from 'react'

class Signin extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            signInEmail: '',
            signInPassword:''
        }
        
    }
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSignInSubmit = () => {
        fetch('https://secret-fortress-34543.herokuapp.com/signin',{
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(user => {
          if(user.id){
            this.props.loadUser(user);
            this.props.onRouteChange('home');
          }
        })
    }

    render() {
        
        const {onRouteChange} = this.props;

        return (
            <article className="br5 pv2 ba white b--white-10 mv4 w-100 w-50-m w-25-l mw5 center ">
                <main>
                    <div className ='' >
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw8 ph0 mh0">Sign In</legend>
                                <div className="mt3">
                                    <label className="db fw6 f6" htmlFor="email-address">Email</label>
                                    <input onChange = {this.onEmailChange} required 
                                    className="pa2 white bg-transparent w-100" 
                                    placeholder='Email' type="email" name="email-address"  id="email-address"/>
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input onChange = {this.onPasswordChange} required 
                                    className="pa2 white bg-transparent w-100" 
                                    placeholder='Password' type="password" name="password"  id="password"/>
                                </div>
                        </fieldset>
                        <div className="mt3">
                            <input onClick={this.onSignInSubmit} 
                            className ="f4 b ph3 pv2 input-reset grow pointer f6 dib" 
                            type="submit" value="Sign In"/>
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => onRouteChange('register')} 
                            className="f6 link dim white db pointer">Register</p>
                        </div>
                    </div>
                </main>
            </article>
        )
    }
    
}
export default Signin;