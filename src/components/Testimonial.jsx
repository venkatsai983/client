import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets';
import { motion } from 'motion/react';

const Testimonial = () => {

    const testimonials = [
    { 
      name: "Michael Carter", 
      location: "Chicago, Illinois", 
      image: assets.testimonial_image_1, 
      testimonial: "DriveEasy made finding a rental car simple and convenient. I was able to browse different options and quickly find a vehicle that suited my trip." 
    },
    { 
      name: "Daniel Brooks", 
      location: "Austin, Texas", 
      image: assets.testimonial_image_2, 
      testimonial: "The platform was easy to navigate and the vehicle information was clearly presented. The overall rental experience felt straightforward and well organized." 
    },
    { 
      name: "Sophia Miller", 
      location: "Seattle, Washington", 
      image: assets.testimonial_image_1, 
      testimonial: "I liked how easy it was to explore different vehicles and compare my options. DriveEasy made the process much more convenient for planning my trip." 
    }
];

  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
            
           <Title title="What Our Customers Say" subTitle="See why travelers trust DriveEasy to find the perfect car for every journey"/>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial, index) => (
                    <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    
                    key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">

                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src={assets.star_icon} alt="star-icon" />
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </motion.div>
                ))}
            </div>
        </div>
  )
}

export default Testimonial
