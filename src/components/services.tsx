"use client";

import servicesData from "@/utils/servicesData";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import useEmblaCarousel from "embla-carousel-react";
import { Clock } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width:768px)": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Serviços</h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {servicesData.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                >
                  <article className="bg-[#1e203b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex-1 flex items-start justify-between">
                      <div className="flex gap-4">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h3 className="font-bold text-xl mb-l">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm select-none ">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-5 h-5" />
                        <span>{item.duration}</span>
                      </div>
                      <a
                        target="_blank"
                        href={`https://wa.me/1234567?text="ola vim pelo site e gostaria de mais informações ${item.title}`}
                        className="flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-400"
                      >
                        Entrar em contato
                        <WhatsappLogoIcon className="w-5 h-5" />
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <button className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -trnaslate-x-1/2 top-1/2 z-10">
            <ChevronLeft
              className="w-6 h-6 text-gray-600  "
              onClick={scrollPrev}
            />
          </button>
          <button className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -trnaslate-x-1/2 top-1/2 z-10">
            <ChevronRight
              className="w-6 h-6 text-gray-600  "
              onClick={scrollNext}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
