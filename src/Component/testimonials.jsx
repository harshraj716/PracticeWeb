import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Testimonials() {
  const swiperRef = useRef(null); // Reference to Swiper instance

  const testimonials = [
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
      avatar: "/placeholder.svg",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Sarah",
      position: "Marketing Director, TechGrow, Canada",
      rating: 5,
      avatar: "/placeholder.svg",
    },
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      author: "Michael",
      position: "CTO, InnovateCorp, UK",
      rating: 4,
      avatar: "/placeholder.svg",
    },
    {
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
      author: "Emily",
      position: "Product Manager, SoftSolutions, Australia",
      rating: 4.5,
      avatar: "/placeholder.svg",
    },
    {
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      author: "David",
      position: "Founder, EcoTech, Germany",
      rating: 5,
      avatar: "/placeholder.svg",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < Math.floor(rating)
            ? "text-yellow-400"
            : index < rating
            ? "text-yellow-400"
            : "text-gray-300"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const prevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const nextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className="bg-[#1B365D] py-16 relative">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          What people say about us
        </h2>

        {/* Custom Navigation Arrows */}
        <div className="absolute top-8 right-8 flex gap-4 z-10">
        <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white text-[#1B365D] flex items-center justify-center hover:bg-opacity-90 transition-colors"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-[#FF8A1E] text-white flex items-center justify-center hover:bg-opacity-90 transition-colors"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Assign Swiper instance to ref
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg p-6 h-[300px] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-4xl text-[#1B365D] font-serif">"</span>
                    <div className="flex gap-1">{renderStars(testimonial.rating)}</div>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm line-clamp-4">
                    {testimonial.text}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-[#1B365D] text-sm">
                      {testimonial.author}
                    </h3>
                    <p className="text-xs text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
