import accessory from "../../assets/Images/watch.jpg";
import bottoms from "../../assets/Images/bottoms.jpg";
import ethnic from "../../assets/Images/ethnic.webp";
import tops from "../../assets/Images/tops.webp";
import western from "../../assets/Images/western.jpg";
import bg from '../../assets/Images/hero_bg.webp';
import heroGif from '../../assets/Images/heroImage.gif'
import heroGraphic from '../../assets/Images/heroGraphic.png'
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

      <div className=' w-full flex gap-8 max-h-[calc(100vh-152px)] h-dvh bg-no-repeat bg-cover hero' style={{ backgroundImage: `url(${bg})` }}>
       <div className="rounded-3xl pl-12 pr-4  py-10 w-full hero_Image">
        <img src={heroGif} alt="" className="w-full h-full" />
       </div>
        <div className="font-[Cedarville_Cursive] py-8 w-full text-center flex flex-col justify-center text">
         <p className="text-pink-600 font-extrabold text-6xl hero_text">find your fashion style</p>
         <div>
         <button className="px-8 py-3 cta border-2 mt-12 border-black rounded-3xl hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:translate-y-1 duration-300">Shop Now</button>
         </div>
         <div className="flex justify-end graphic">
         <img src={heroGraphic} className="h-72 w-72 " alt="" />
         </div>
        </div>
      </div>
        </section>

        <section className="">

      <div className="bg-[#fcd3e1]">

      <div className="container text-center sm:p-10 p-5 ">
        <p className="sm:text-2xl text-lg font-bold">Explore Our Styles</p>
        <p className="sm:text-xl text-sm font-semibold">Find the perfect look for every occasion.</p>
      </div>
      </div>

<div className="bg-gray-200">

      <div className="flex justify-around container pt-2">
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
        </div>
  </section>
  <section className="py-4 bg-gray-100 ">
    <div className="flex  container">
      {/* <img  src={dress} alt="" /> */}
      {/* <img src={leftArrow} className="h-28 w-52" alt="" /> */}
      {/* <p>Dresses</p> */}
    </div>
  </section>
  </div>
    </>
  );
}

export default Home;
