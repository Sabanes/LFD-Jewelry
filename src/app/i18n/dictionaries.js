const dictionaries = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      jewelry: "Jewelry",
      watches: "Watches",
      celebrities: "Celebrities",
      events: "Events",
      contacts: "Contacts"
    },
    about: {
      text: "Since 1974, we have dedicated ourselves to jewelry production, with the experience and commitment that define us. We value detail and innovation in each piece of jewelry, which is created and designed with passion and professionalism by our designers and craftsmen. In 2013, we began representing international jewelry, watchmaking, and accessory brands across various continents."
    },
    contact: {
      intro: "We are always ready to answer your questions.",
      getInTouch: "Get in touch",
      location: "Location",
      callDisclaimer: "*call to national landline",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Submit",
      formTitle: "Send us a message",
      formDescription: "We would be happy to answer your questions about our exclusive brands.",
      phone: "Phone"
    },
    brands: {
      title: "Brands We Represent"
    }
  },
  pt: {
    nav: {
      home: "Início",
      about: "Sobre Nós",
      jewelry: "Joalharia",
      watches: "Relojoaria",
      celebrities: "Celebridades",
      events: "Eventos",
      contacts: "Contactos"
    },
    about: {
      text: "Desde 1974 que nos dedicamos à produção de joalharia, com a experiência e o compromisso que nos caracterizam. Valorizamos o detalhe e a inovação em cada peça, criada e desenhada com paixão e profissionalismo pelos nossos designers e artesãos. Em 2013, iniciámos a representação de marcas internacionais de joalharia, relojoaria e acessórios em diversos continentes."
    },
    contact: {
      intro: "Estamos sempre disponíveis para esclarecer as suas dúvidas.",
      getInTouch: "Contactos",
      location: "Localização",
      callDisclaimer: "*chamada para rede fixa nacional",
      name: "Nome",
      email: "Email",
      message: "Mensagem",
      submit: "Enviar",
      formTitle: "Envie-nos uma mensagem",
      formDescription: "Teremos todo o prazer em responder às suas questões sobre as nossas marcas exclusivas.",
      phone: "Telefone"
    },
    brands: {
      title: "Marcas que Representamos"
    }
  }
};

export const getDictionary = (locale) => {
  return dictionaries[locale] || dictionaries.pt; // fallback to Portuguese
};