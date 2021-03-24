import React from 'react'
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Loader from './Loader'

class App extends React.Component {
    state = { lat: null, errorMessage: ''}

   componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
        position => this.setState({ lat: position.coords.latitude}),
        err => this.setState({errorMessage: err.message})
    )
   }

   renderContent() {
    if(this.state.errorMessage && !this.state.late) {
        return(
            <div>Error: {this.state.errorMessage}</div>
        )
    }
    if(!this.state.errorMessage && this.state.lat) {
        return(
            <div><SeasonDisplay lat={this.state.lat} /></div>
        )
    }

        return (
            <div><Loader message='Please accept location request' /> </div>
            )
    
   
}
   
    render() {
       return (
           <div>{this.renderContent()}</div>
       )
}
}
ReactDOM.render(<App />, document.getElementById('root'))