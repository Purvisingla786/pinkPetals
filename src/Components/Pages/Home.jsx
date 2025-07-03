import hero from "../../assets/Images/heroImage.png";
import accessory from "../../assets/Images/watch.jpg";
import bottoms from "../../assets/Images/bottoms.jpg";
import ethnic from "../../assets/Images/ethnic.webp";
import tops from "../../assets/Images/tops.webp";
import western from "../../assets/Images/western.jpg";
import dress from "../../assets/Images/dress.webp";
import leftArrow from "../../assets/Images/left_arrow.gif";
import Slider from "../utils/Slider";

function Home() {

  let category=[
    {
      name:'Ethnic'
    },
    {
      name:'Western'
    },
    {
      name:'Tops'
    },
    {
      name:'Bottoms'
    },
    {
      name:'Accessories'
    },
  ]

let categories = [
  {
    name: 'Ethnic',
    image:ethnic
  },
  {
    name: 'Western',
    image:western
  },
  {
    name: 'Tops',
    image:tops
  },
  {
    name: 'Bottoms',
    image:bottoms
  },
  {
    name: 'Accessories',
    image:accessory
  },
]

  return (
    <>
    <div className="w-full">
    <section>

    <div className="bg-black ">
      <div className="flex justify-center  gap-10 text-white p-2 container sub_header">
        {categories?.map((e)=>{
          return(
            <div>{e.name}</div>
          )
        })}
      </div>
      <div className="text-white container hidden slider_header">
        <Slider content={category} slidesPerView='3'
        breakpoints={{
                    
                            375:{
                    slidesPerView:4
                  },
        }}/>
      </div>
        </div>
        </section>

        <section>

      <div className="flex justify-center">
        <img src={hero} className="max-h-[calc(100vh-150px)] w-full" alt="" />
      </div>
        </section>

        <section className="space-y-2">

      <div className="bg-[#fcd3e1]">

      <div className="container text-center sm:p-10 p-5 ">
        <p className="sm:text-2xl text-lg font-bold">Explore Our Styles</p>
        <p className="sm:text-xl text-sm font-semibold">Find the perfect look for every occasion.</p>
      </div>
      </div>

      <div className="flex justify-around container">
        <Slider content={categories} className="h-60 w-60 rounded-2xl mx-4 category_slider" slidesPerView={2}
        breakpoints={{
        
          480:{
            slidesPerView:3
          },
          991:{
            slidesPerView:4
          }
        }} />

      </div>
  </section>
  <section className="py-4 bg-gray-100 ">
    <div className="flex  container">
      <img  src={dress} alt="" />
      <img src={leftArrow} className="h-28 w-52" alt="" />
      <p>Dresses</p>
    </div>
  </section>
  </div>
    </>
  );
}

export default Home;
