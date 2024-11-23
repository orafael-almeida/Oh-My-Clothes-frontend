const cards = [
  {
    src: "/fast-shipping.svg",
    alt: "Entrega rápida",
    title: "ENTREGA RÁPIDA",
    subtitle: "Sul e Sudeste",
  },
  {
    src: "/support.svg",
    alt: "Suporte 24/7",
    title: "SUPORTE 24/7",
    subtitle: "Suporte dedicado",
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
    <div className="mt-2 px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-64 grid grid-cols-4 gap-4 sm:grid-cols-4">
      {/* CARD */}
      {cards.map((card) => (
        <div className="flex flex-col items-center p-2 justify-start">
          {/* CIRCULO */}
          <div className="rounded-full h-20 w-20 sm:h-28 sm:w-28">
            <img src={card.src} alt={card.alt} className="p-3 sm:p-4" />
          </div>
          {/* TEXTOS */}
          <p className="text-[0.6rem] xs:text-xs text-center sm:text-sm text-[#252525] mt-2">
            {card.title}
          </p>
          <p className="text-sm text-center text-[#847e7e] mt-1 hidden md:block">
            {card.subtitle}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PolicyBanner;
