import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0
        }
    }
    componentDidMount() {
        console.log(`run componentDidMount`);
        
        this.interval = setInterval( () => {
            console.log(`run this.tick`);
            
            this.tick()


        }, 1000);
    }

    tick = () => {
                // nanti akan lebih sering memakai seperti ini
        // this.setState({state:2})  

                //bisa seperti bawah atas atau bawah
        // this.setState( (state) => ({
        //     seconds: state.seconds + 1   
        // })
        // );

        this.setState( (state) => {
            console.log(`run tick to add state.seconds from`, state.seconds);
            
            return {
                seconds: (state.seconds + 1)
            }
        }) 
        if (this.state.seconds >=5) {
            clearInterval(this.interval);
        }
    }

    render() {
        console.log(`run render wih state.seconds is`, this.state.seconds);
        
        return (
            <div>Second: {this.state.seconds}</div>
        );
    }
}
export default Timer;