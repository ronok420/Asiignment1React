import React from 'react';
import Ca1 from '../../../Component/Ca1';
import Ca2 from '../../../Component/Ca2';


const propertiesInfo = [
    { id:0,
      imgSrc: "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
      title: "Modern Design villa",
      price: "$3000.00",
      bedrooms: 3,
      bathrooms: 2
    },
    { id:1,
      imgSrc: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Loft interior",
      price: "$4000.00",
      bedrooms: 3,
      bathrooms: 4
    },
    { id:2,
      imgSrc: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "The  Chambers villa",
      price: "$5000.00",
      bedrooms: 4,
      bathrooms: 3
    },
    { id:3,
      imgSrc: "https://images.unsplash.com/photo-1501876725168-00c445821c9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "The Urban Haven",
      price: "$2500.00",
      bedrooms: 2,
      bathrooms: 2
    },
    { id:4,
      imgSrc: "https://images.unsplash.com/photo-1527772482340-7895c3f2b3f7?q=80&w=2151&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "The Luxe Loft",
      price: "$5500.00",
      bedrooms: 6,
      bathrooms: 4
    },
   
  ];

const Cards = () => {
    return (
        <section>
        <div className="container">
          <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
            <span className="mb-2 block text-lg font-semibold text-primary">
              propertiesInfo
            </span>
            <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
              Grab your Dream info
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
              There are many variations of passages of Lorem Ipsum available
              but the majority have suffered alteration in some form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          
         
                {propertiesInfo.map((info) => (
                    <div key={info.id} className="p-4 bg-white rounded-lg border border-gray-600/10">
                    <img src={info.imgSrc} alt="info" />

                    <div className="p-6">
                        <h4 className="text-2xl font-bold cursor-pointer">{info.title}</h4>
                        <div className="mt-2">
                        <span className="text-xl font-extrabold text-blue-600">{info.price}</span> /M
                        </div>
                    </div>

                    <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
                        <div className="flex items-center">
                        <Ca1></Ca1>
                        <p>
                            <span className="font-bold text-gray-900">{info.bedrooms}</span> Bedrooms
                        </p>
                        </div>

                        <div className="flex items-center">
                        <Ca2></Ca2>
                        <p>
                            <span className="font-bold text-gray-900">{info.bathrooms}</span> Bathrooms
                        </p>
                        </div>
                    </div>
                    </div>
                ))}


        


          </div>
        </div>

         </section>
    );
};

export default Cards;