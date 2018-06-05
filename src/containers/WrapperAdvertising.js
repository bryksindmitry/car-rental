import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Advertising from '../components/Advertising';

export default  class WrapperAdvertising extends Component{

    static propTypes = {
        repeats: PropTypes.number.isRequired
    }

    render(){
        let {repeats } = this.props;
        let adverts = this.getAdvertising(repeats);
        return(
            <div>
                {adverts}
            </div>
        );
    }
    getAdvertising = ( repeats,num = 0, array = []) => {
        if(num == repeats)return array;
        array.push(<Advertising key={num}
                                type={"flag"}
                                title={"Rental Locations"}
                                description={"Duis sed odio sit amet nibh vulputate cursus a sit amet "}
                                button={"Find Location Now"} />);

        return this.getAdvertising(repeats, num+1, array);
    }
}