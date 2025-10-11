const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Sobre o CoralSense</h2>
          <p className="text-lg text-muted-foreground mb-4">
            O CoralSense é um sistema inovador de monitoramento de recifes de coral que utiliza 
            tecnologia de ponta para coletar e analisar dados em tempo real.
          </p>
          <p className="text-lg text-muted-foreground">
            Nossa missão é fornecer informações precisas sobre a saúde dos ecossistemas coralinos, 
            ajudando pesquisadores e conservacionistas a tomar decisões informadas para a preservação 
            marinha.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
