import React,{Component} from 'react';
import './Details.css'
class Details extends Component{
  
    state = {
        hospitalKeys: []
    }
    componentDidMount(){
        const { hospitals } = this.props;
        console.log(`this is details`, hospitals)
        const keys = Object.keys(hospitals);
        console.log('keys', keys);

        const hospitalKeys = keys.filter(key => hospitals[key]);
        console.log(hospitalKeys);
        this.setState({hospitalKeys})
    //    let showHospitals= this.props.hospitals.map(item=>{
    //        console.log(Object.keys(item))
    //   return(
    //     <div className="hospitals">
    //     //       <li>{Object.keys(item)}</li> 
    //     //        </div>
    //     //    )
    //    })
    //    console.log(`hospitals`,showHospitals);
    }
    render(){
        const { hospitalKeys } = this.state;
        const { hospitals } = this.props;
        const list = hospitals && hospitalKeys.map(key => {
            return <div class="target" key={key}>name: {key} price: ${hospitals[key]}</div>
        })
        return(
            <>
            <h2 id="price-list">Price List</h2>
            <ul class="names">
            {list}
            </ul>
            </>

        );
    }
}
export default Details;