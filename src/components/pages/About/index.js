import React  from 'react';
import WrapperAbout from '../../../containers/WrapperAbout'
import WrapperAdvertising from '../../../containers/WrapperAdvertising';


const About  = () => {
    return(
        <div className={`main`}>
            <div className="wrapper main__wrapper">
                <div className="main-content">
                    <div className="">
                        <WrapperAbout/>
                    </div>
                </div>
                <div className="right-side">
                    <div className="right-side__advertising">
                        <WrapperAdvertising repeats={4}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;
