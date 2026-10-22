import Image from "next/image";
import about1Img from "../../public/about-1.png";
import about2Img from "../../public/about-2.png";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export default function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="relative"
            data-aos="fade-up-right"
            data-aos-delay="300"
          >
            <div className="relative w-full h-100 rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="foto do cachorro"
                className="object-cover hover:scale-110"
                quality={100}
                fill
              />
            </div>
            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden border-white rounded-lg">
              <Image
                src={about2Img}
                alt="foto do cachorro"
                quality={100}
                fill
              />
            </div>
          </div>

          <div
            className="space-y-6 mt-10"
            data-aos="fade-up-left"
            data-aos-delay="500"
          >
            <h2 className="text-4xl font-bold">SOBRE</h2>
            <p>
              Until one has loved an animal, a part of one's soul remains
              unawakened. We believe in it and we believe in easy access to
              things that are good for our mind, body and spirit. With a clever
              offering, superb support and a secure checkout you're in good
              hands.
            </p>
            <ul className="space-y-4">
              <li className="flex ites-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 2006
              </li>
              <li className="flex ites-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de 10 veterinarios
              </li>
              <li className="flex ites-center gap-2">
                <Check className="text-red-500" />
                Qualiddae é nossa prioridade.
              </li>
              <div className="flex gap-2">
                <a
                  target="_blank"
                  href={`https://wa.me/1234567?text="ola vim pelo site e gostaria de mais informações`}
                  className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                >
                  <WhatsappLogoIcon className="w-5 h-5 text-white" />
                  Contato via whatsApp
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                >
                  Endereco da loja
                  <MapPin className="w-5 h-5 text-black" />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
