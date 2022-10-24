import { Component } from "react";
import getAlbums from "../../helpers/Api"

export class Albums extends Component {
state = {
alboms: [],
    }
    
    async componentDidMount() {
        const data = await getAlbums()
        
         this.setState({alboms: data})
    }




    render() {
       
    return (
        <ul>
           {this.state.alboms.map(albom => (<li key={albom.id}>albom: {albom.title}</li>) )} 
        </ul>

        )           
}
}