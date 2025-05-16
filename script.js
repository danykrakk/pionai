
const services = [
  { title: "Desenvolvimento de websites e sistemas web", description: "Criação de soluções digitais personalizadas e responsivas." },
  { title: "Consultoria em Inteligência Artificial e IoT", description: "Projetos inteligentes para empresas e ambientes conectados." },
  { title: "Manutenção de redes e servidores", description: "Garantia de estabilidade e segurança para sua infraestrutura." },
  { title: "Automatização de processos empresariais", description: "Aumente a produtividade com soluções automatizadas." },
  { title: "Formação e capacitação em TIC", description: "Treinamentos sob medida para profissionais e equipes." },
  { title: "Design e implementação de bases de dados", description: "Organize e gerencie seus dados com eficiência." },
  { title: "Suporte técnico e Helpdesk", description: "Atendimento rápido e eficaz para suas demandas." },
  { title: "Venda de equipamentos informáticos", description: "As melhores marcas e modelos para sua empresa ou residência." }
];

const servicesContainer = document.getElementById("services");

services.forEach(service => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3> ${service.title}</h3>
    <p>${service.description}</p>
  `;
  servicesContainer.appendChild(card);
});
