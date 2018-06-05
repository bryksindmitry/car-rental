import React from 'react';
import Advantage from '../Advantage';


const AboutArticle = () => {
    let advantages = listOfAdvantages();
    return(
        <div className="article">
            <div className="article__title">
                Duis sed odio sit amet nibh vulputate cursus
            </div>
            <div className="article__text">
                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. C
                lass aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.
                Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi.
                Proin condimentum fermentum nunc. Etiam pharetra,
                erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque.
            </div>
            <div className="article__title">
                Sed non  mauris vitae erat consequat auctor eu in elit.
            </div>
            <div className="article__list-advantages">
                {advantages}
            </div>
            <div className="article__text">
                Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Mauris in erat justo.
                Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.
            </div>

        </div>
    )
};

const listOfAdvantages = (num = 0, array = []) =>{
    if(num == 6 )return array;
    array.push( <div key={num}
                     className="article__advantage">
        <Advantage type={"laptop"} title={"Laptop title"} text={"Duis sed odio sit amet nibh vulputate cursus"}/>
    </div>);
    return listOfAdvantages(num+1, array);
};

export default AboutArticle;