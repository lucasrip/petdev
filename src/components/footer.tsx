import Image from "next/image";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import brands from "@/utils/brandsData";

export default function Footer() {
  return (
    <footer className="bg-[#E84c3d] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8">
          <h4 className="text-3xl font-semibold mb-8 text-center">
            Marcas com que trabalhamos
          </h4>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {brands.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg flex items-center justify-center"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Pet Shop Dev</h3>
            <p className="mb-4">
              cuidando do seu melhor amigo com amor e dedição{" "}
            </p>
            <a
              target="_blank"
              href={`https://wa.me/1234567?text="ola vim pelo site e gostaria de mais informações`}
              className="bg-green-500 px-4 py-1 rounded-md"
            >
              Contato via whatsApp
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
            <p>Email: teste@teste.com</p>
            <p>telefone: (xx) 123456789</p>
            <p>rua x centro ,sao paulo sp</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Rede sociais</h3>
            <div className="flex gap-4">
              <a href="#" target="_blank">
                <FacebookLogoIcon className="w-8 h-8" />
              </a>
              <a href="#" target="_blank">
                <InstagramLogoIcon className="w-8 h-8" />
              </a>
              <a href="#" target="_blank">
                <YoutubeLogoIcon className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
