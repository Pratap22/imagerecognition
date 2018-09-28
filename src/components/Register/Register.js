import React from 'react'

class Register extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password:'',
            name: ''
        }
        
    }
    onNameChange = (event) => {
            if(event.target.value !== ''){
            this.setState({name: event.target.value})
        }
    }

    onEmailChange = (event) => {
            if(event.target.value !== ''){
            this.setState({email: event.target.value})
        }
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onRegisterSubmit = () => {
        fetch('https://secret-fortress-34543.herokuapp.com/register',{
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json()).then(user => {
            if(user.id){
                console.log(user)
                this.props.loadUser(user)
                this.props.onRouteChange('home')
            }
        })
    }

    render () {
        return (
            <article className="br5 pv2 ba white b--white-10 mv4 w-100 w-50-m w-25-l mw5 center">
                <main>
                    <div>
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f5 fw8 ph0 mh0">Fill in your details</legend>
                            <div className="mt3">
                                    <label className="db fw6 f6" htmlFor="first-name">Name</label>
                                    <input className="pa2 white bg-transparent w-100" 
                                    placeholder='Name' type="text" name="name"  id="name"
                                    onChange = {this.onNameChange} required />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 f6" htmlFor="email-address">Email</label>
                                    <input className="pa2 white bg-transparent w-100" 
                                    placeholder='Email' type="email" name="email-address"  id="email-address"
                                    onChange = {this.onEmailChange} required />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input className="pa2 white bg-transparent w-100" 
                                    placeholder='Password' type="password" name="password"  id="password"
                                    onChange = {this.onPasswordChange} required />
                                </div>
                        </fieldset>
                        <div className="mt3">
                            <input onClick={this.onRegisterSubmit} className="f4 b ph3 pv2 input-reset grow pointer f6 dib" 
                            type="submit" value="Sign Up"/>
                        </div>
                        <div className="lh-copy mt3">
                        </div>
                    </div>
                </main>
            </article>
        )
    }
}
export default Register;