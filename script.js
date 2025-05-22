// Cookie Modal
function showCookieModal() {
    const cookieModal = document.getElementById('cookie-modal');
    cookieModal.classList.add('show');
}

function closeModal() {
    const cookieModal = document.getElementById('cookie-modal');
    cookieModal.classList.remove('show');
}

function acceptCookies() {
    const cookieModal = document.getElementById('cookie-modal');
    cookieModal.classList.remove('show');
    localStorage.setItem('cookieStatus', 'accepted');
    setCookie('cookies_accepted', 'true', 365);
}

function rejectCookies() {
    const cookieModal = document.getElementById('cookie-modal');
    cookieModal.classList.remove('show');
    localStorage.setItem('cookieStatus', 'rejected');
    setCookie('cookies_accepted', 'false', 365);
}

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Mostrar modal quando a página carregar
document.addEventListener('DOMContentLoaded', showCookieModal);

// Serviços
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
    <h3>${service.title}</h3>
    <p>${service.description}</p>
  `;
  servicesContainer.appendChild(card);
});
