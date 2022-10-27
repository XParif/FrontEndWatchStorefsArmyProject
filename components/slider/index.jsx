import { Carousel } from 'react-responsive-carousel';

const Slider = ()=>{

    return (
      <Carousel
       autoPlay={Boolean}
       infiniteLoop={Boolean}
       interval ={3000}
     
    
      >
                <div >
                    <img src="1.png" />
                    <p >Legend 1</p>
                </div>
                <div>
                    <img src="2.png" />
                    <p>Legend 2</p>
                </div>
                <div>
                    <img src="3.png" />
                    <p>Legend 3</p>
                </div>
            </Carousel>
    )
}
export default Slider;

    