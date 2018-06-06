import React from 'react';
import WrapperLocations from '../../containers/WrapperLocations';
import WrapperAdvertising from '../../containers/WrapperAdvertising';

 const Locations = (props) => {
    const {menuIsOpen} =  props;
    return(
        <div className={`main ${menuIsOpen ? "hide_main" : "" }`}>
            <div className="wrapper main__wrapper">
                <div className="main-content">
                    <div className="">
                        <WrapperLocations/>
                    </div>
                </div>
                <div className="right-side">
                    <div className="right-side__advertising">
                        <WrapperAdvertising repeats={2}/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Locations; 