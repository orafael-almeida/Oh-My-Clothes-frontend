import Image from "next/image";
import Link from "next/link";
import {RiMailSendLine} from "react-icons/ri";
import TextComponent from "./TextComponent";

const Footer = () => {
  return (
    <>
      <TextComponent />
      <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm">
        {/* TOP */}
        <div className="py-24 flex flex-col md:flex-row justify-between gap-24">
          {/* LEFT */}
          <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
            <Link href="/">
              <div className="text-2xl tracking-wide">SHOP+</div>
            </Link>
            <p>Av. Beira Mar Norte, Centro Florianópolis - SC, 88015-970</p>
            <span className="font-semibold">contato@shop.dev</span>
            <span className="font-semibold">(48) 99999-9999</span>
            <div className="flex gap-6">
              <Image
                src="/facebook.png"
                alt="Facebook Logo"
                width={16}
                height={16}
              />
              <Image
                src="/instagram.png"
                alt="Instagram Logo"
                width={16}
                height={16}
              />
              <Image
                src="/youtube.png"
                alt="Youtube Logo"
                width={16}
                height={16}
              />
              <Image src="/x.png" alt="X Logo" width={16} height={16} />
            </div>
          </div>
          {/* CENTER */}
          <div className="hidden lg:flex justify-between w-1/2">
            <div className="flex flex-col justify-between">
              <h1 className="font-medium text-lg">EMPRESA</h1>
              <div className="flex flex-col gap-6">
                <Link href="">Sobre nós</Link>
                <Link href="">Carreiras</Link>
                <Link href="">Parceiros</Link>
                <Link href="">Blog</Link>
                <Link href="">Contato</Link>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <h1 className="font-medium text-lg">CATÁLOGO</h1>
              <div className="flex flex-col gap-6">
                <Link href="">Nova coleção</Link>
                <Link href="">Acessórios</Link>
                <Link href="">Homens</Link>
                <Link href="">Mulheres</Link>
                <Link href="">Kids</Link>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <h1 className="font-medium text-lg">AJUDA</h1>
              <div className="flex flex-col gap-6">
                <Link href="">Atendimento</Link>
                <Link href="">Minha conta</Link>
                <Link href="">Lojas</Link>
                <Link href="">LGPD</Link>
                <Link href="">Gift Card</Link>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
            <h1 className="font-medium text-lg">INSCREVA-SE</h1>
            <p>Seja o primeiro a receber as últimas promoções e muito mais!</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Email address"
                className="p-4 w-3/4"
              />
              <button className="w-1/4 bg-rosa text-white flex items-center justify-center">
                <RiMailSendLine size={18} />
              </button>
            </div>
            <span className="font-semibold">Pagamento Seguro</span>
            <div className="flex justify-between">
              <Image src="/paypal.png" alt="" width={40} height={20} />
              <Image src="/mastercard.png" alt="" width={40} height={20} />
              <Image src="/visa.png" alt="" width={40} height={20} />
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
          <div className="">© 2024 Ecommerce Shop</div>
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="">
              <span className="text-gray-500 mr-4">Linguagem</span>
              <span className="font-medium">Brasil | Português</span>
            </div>
            <div className="">
              <span className="text-gray-500 mr-4">Moeda:</span>
              <span className="font-medium">R$ BRL</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
