import Marquee from "react-fast-marquee";

const TextComponent = () => {
  return (
    <Marquee className="bg-black mt-24">
      <span className="text-white tracking-wider font-bold ml-4">
        As imagens utilizadas neste site foram gentilmente autorizadas pela loja{" "}
      </span>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3de85d] via-[#03f6f4] to-[#937fff] font-extrabold text-2xl mx-2">
        <a
          href="https://www.camisetasdeprogramador.com.br"
          className="underline font-extrabold text-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#F35C7A] hover:via-[#FF7F50] hover:to-[#FFB6C1] hover:bg-clip-text hover:text-transparent"
        >
          CAMISETAS DE PROGRAMADOR
        </a>
      </span>
      <span className="text-white tracking-wider font-bold">
        {" "}
        e estão autorizadas para uso não comercial.
      </span>
    </Marquee>
  );
};

export default TextComponent;
