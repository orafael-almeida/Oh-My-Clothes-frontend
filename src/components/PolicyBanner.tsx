const cards = [
  {
    src: "/fast-shipping.svg",
    alt: "Entrega grátis",
    title: "ENTREGA GRÁTIS",
    subtitle: "Sul e Sudeste",
  },
  {
    src: "/support.svg",
    alt: "Suporte 24/7",
    title: "SUPORTE 24/7",
    subtitle: "Suporte Dedicado",
  },
  {
    src: "/refund.svg",
    alt: "Troca fácil",
    title: "TROCA FÁCIL",
    subtitle: "Devolução e troca garantidas",
  },
  {
    src: "/securepayment.svg",
    alt: "Pagamento seguro",
    title: "PAGAMENTO SEGURO",
    subtitle: "Compra 100% segura",
  },
];

const PolicyBanner = () => {
  return (
    <div className=" justify-around mt-6 px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-64 hidden sm:flex">
      {/* CARD */}
      {cards.map((card) => (
        <div className="w-max flex flex-col p-2 justify-center items-center">
          {/* CIRCULO */}
          <div className="rounded-full h-28 w-28">
            <img src={card.src} alt={card.alt} className="p-4" />
          </div>
          {/* TEXTOS */}
          <p className="w-max text-md sm:text-sm text-[#252525] sm:text-wrap">
            {card.title}
          </p>
          <p className="w-max text-sm text-[#847e7e] hidden md:block">
            {card.subtitle}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PolicyBanner;
