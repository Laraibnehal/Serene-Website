import React from 'react'
import { Link } from 'react-router-dom'
import Spray from '../assets/spray.png'
import { Cards } from '../components'
import Adira30 from "../assets/adira-30.jpg";
import Cher30 from "../assets/cher-30.jpg";
import Lubov30 from "../assets/lubov-30.jpeg";
import ArcaneTester from "../assets/imgtester.jpeg"
import Arcane10 from '../assets/Arcane 10ml.jpeg'
import Lubov from "../assets/lubov 30ml.jpeg"
import Musk from '../assets/Orphic Musk.jpg'
import Arsh from "../assets/Arsh.jpg"
import Jasmin10 from "../assets/Jasmine 10ml.jpg"
import Jasmin30 from "../assets/Jasmine 30ml.jpg"
function AllPerfumes() {
  return (
    <div className=' w-full' >
    
    <div className='bg-blue-200 mx-6 h-44 px-14 py-8 flex items-center justify-between shrink-0'>
    <div className='w-60'>
<h1 className='text-2xl text-sky-600 font-semibold w-80'>Grab Upto 20% Off on <span className='flex'>Selected Perfumes</span></h1>

<Link to = '#Perfumes'>
<button className='bg-sky-600 hover:bg-white px-6 py-2 my-3 rounded-full text-white hover:text-sky-600 border-2 border-sky-600'>Buy Now</button>
</Link>
    </div>
<div className='float-right hidden md:block'>
<img src={Spray} className='w-96 h-44 ' alt='perfume' />

</div>

    </div>
    <div className="my-4 w-full flex flex-wrap md:flex-row items-center justify-center gap-8 md:gap-2" id="perfumes">
          <Cards
            image={Adira30}
            name="Adira"
            description={
              "Unleash your inner enchantress with this mesmerizing fragrance, wherever you go."
            }
            quantity={"30 ML"}
            cost={"379 /-"}
          />
          <Cards
            image={Cher30}
            name="Cher"
            description={
              "Unleash your inner enchantress with this mesmerizing fragrance, wherever you go."
            }
            quantity={"30 ML"}
            cost={"379 /-"}
          />
          <Cards
            image={Lubov30}
            name="Lubov"
            description={
              "Unleash your inner enchantress with this mesmerizing fragrance, wherever you go."
            }
            quantity={"30 ML"}
            cost={"379 /-"}
          />
          <Cards
            image={ArcaneTester}
            name="Testers"
            description={
              "Unleash your inner enchantress with this mesmerizing fragrance, wherever you go."
            }
            quantity={"2 ML"}
            cost={"30 /-"}
          />
          <Cards
            image={Arcane10}
            name="Arcane"
            description={
              "Unleash your inner enchantress with this mesmerizing fragrance, wherever you go."
            }
            quantity={"10 ML"}
            cost={"249 /-"}
          />
          <Cards
            image={Lubov}
            name="Lubov"
            description={
              "Unleash your inner enchantress with this mesmerizing fragrance, wherever you go."
            }
            quantity={"30 ML"}
            cost={"379 /-"}
          />
          <Cards
            image={Jasmin10}
            name="Jasmine"
            description={
              "Unleash your inner enchantress with this mesmerizing fragrance, wherever you go."
            }
            quantity={"10 ML"}
            cost={"279 /-"}
          />
          <Cards
            image={Musk}
            name="Orphic Musk"
            description={
              "Unleash your inner enchantress with this mesmerizing fragrance, wherever you go."
            }
            quantity={"10 ML"}
            cost={"249 /-"}
          />
          <Cards
            image={Arsh}
            name="Arsh"
            description={
              "Unleash your inner enchantress with this mesmerizing fragrance, wherever you go."
            }
            quantity={"10 ML"}
            cost={"279 /-"}
          />
          <Cards
            image={Jasmin30}
            name="Jasmin"
            description={
              "Unleash your inner enchantress with this mesmerizing fragrance, wherever you go."
            }
            quantity={"10 ML"}
            cost={"389 /-"}
          />
      
        </div>
    </div>
  )
}

export default AllPerfumes