import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import hero from "../../public/bg-hero.png";
import catHero from "../../public/cat-hero.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#E84C30] text-white relative overflow-hidden">
      <div className="lg:hidden">
        <Image
          src={hero}
          alt="foto do cachorro"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className=" container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1
              className="text-3xl md:text-4xl font-bold lg:text-5xl leading-10"
              data-aos="fade-down"
            >
              Seu pet merece cuidado, carinho e atenção especial.
            </h1>
            <p className="lg:text-lg" data-aos="fade-right">
              Oferecemos os melhores serviços para garantir o bem estar e a
              felicidade do seu amigo de quatro patas
            </p>
            <div>
              <a
                data-aos="fade-up"
                data-aos-delay="500"
                target="_blank"
                href={`https://wa.me/1234567?text="ola vim pelo site e gostaria de mais informações`}
                className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
              >
                <WhatsappLogoIcon className="w-5 h-5" />
                contato via whatsApp
              </a>
            </div>
            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>
                de desconto na primeira compra
              </p>
              <div className="flex mt-4">
                <div className="w-32 hidden lg:block">
                  <Image
                    src={catHero}
                    alt="cat image"
                    quality={100}
                    className="object-fill"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block h-full relative">
            <Image
              src={hero}
              alt="Foto do dog"
              className="object-contain"
              fill
              sizes="(max-width:768px) 0vw , 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
