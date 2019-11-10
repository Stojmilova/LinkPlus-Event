import React, { Component } from 'react';
import { getAllUsers } from './UserService.js';
import './DisplayUsers.css'

class DisplayUsers extends Component{
    state = {
        users:[],      
    }
    componentDidMount() {
        getAllUsers().then(response => {
            this.setState({ users: response })  
                   
        });
    };
    
     render() {
        let users = this.state.users;
         return (
            <div className ="centered">
                
            { <div className="row">                           
            <div className="col part">
            <h3 className="text-align-center"><i className ="fa fa-map-marker"></i> Quadrant 1</h3>
                {users && users.map(user => {                 
                        if(user.address.geo.lat > 0 && user.address.geo.lng > 0){
                        return ( 
                            <div className ="item">                                
                            <div key={user.id}  >
                            <div className="item-name">{user.name}</div>
                            <div>{user.address.city}</div>   
                    </div>      
                </div>  
                                                                                                                          
                        )
                    }
                  
                })
            }
            </div>
            <div className="col part">
            <h3 className="text-align-center"><i className ="fa fa-map-marker"></i> Quadrant 2</h3>{users && users.map(user => {                 
                        if(user.address.geo.lat < 0 && user.address.geo.lng > 0){
                        return ( 
                            <div className ="item">                                
                                    <div key={user.id}  >
                                    <div className="item-name">{user.name}</div>
                                    <div>{user.address.city}</div>   
                            </div>      
                        </div>  
                                                                     
                        )
                    }
                })
            }
            </div>
            <div className="w-100 p-3"></div>
            <div className="col part">
            <h3 className="text-align-center"><i className ="fa fa-map-marker"></i> Quadrant 3</h3>{users && users.map(user => {                 
                        if(user.address.geo.lat < 0 && user.address.geo.lng < 0){
                        return ( 
                            <div className ="item">                                
                            <div key={user.id}  >
                            <div className="item-name">{user.name}</div>
                            <div>{user.address.city}</div>   
                    </div>      
                </div>                                                                                                       
                        )
                    }
                })
            }
            </div>
            <div className="col part">
            <h3 className="text-align-center"><i className ="fa fa-map-marker"></i> Quadrant 4</h3>{users && users.map(user => {                 
                        if(user.address.geo.lat > 0 && user.address.geo.lng < 0){
                        return ( 
                            <div className ="item">                                
                            <div key={user.id}  >
                            <div className="item-name">{user.name}</div>
                            <div>{user.address.city}</div>   
                    </div>      
                </div>                                                                                                      
                        )
                    }
                })
            }
            </div>
          </div> }
        </div>
        )  
                  
    } 
    
}
export default DisplayUsers;