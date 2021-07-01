import React, { Component } from 'react'
 class UserGreeting extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedin : true
         }
     }
     
    render() {

        // if else condition
        // if(this.isLoggedin){
        //     return (
        //         <div>welocome to saiful</div>
        //     )
        // }else{
        //     return (
        //         <div>welocome to guest</div>
        //     )
        // }
        // return (
        //     <div>
                
        //     </div>
        // )

        // element variable condition

        let message 
        if(this.state.isLoggedin){
            message = <div>welcome to  saiful</div>
        }else{
            message = <div>welcome to guest</div>
        }

        return(
            <div>{message}</div>
        )
    }
}

export default UserGreeting
