export const offerConfig = {
  name: "+150 Pranchas de Situações de Trânsito",
  basicPrice: "R$ 10,00",
  completePrice: "R$ 27,90",
  completeAnchor: "DE R$ 97,00",
  upgradePrice: "R$ 17,90",
  bonusTotal: "R$ 87,00",
  basicCheckout: "https://ggcheckout.app/checkout/v5/NsImqTEGL7VoRozGbrPbJP",
  completeCheckout: "https://ggcheckout.app/checkout/v5/MZIouKFUrIygT43iz7X7lO",
  upgradeCheckout: "https://ggcheckout.app/checkout/v5/GqRucOQRhPlfjtwJC4EIWc",
  countdownMinutes: 30,
  countdownStorageKey: "pranchas-transito:offer-start:v1"
};

export const audiences = [
  { image: "/assets/traffic-round/audience-learning.webp", title: "Para quem está aprendendo a dirigir", text: "Se você ainda se confunde em várias situações do trânsito, esse material ajuda a visualizar e entender melhor o que acontece na prática." },
  { image: "/assets/traffic-round/audience-cnh.webp", title: "Para quem vai tirar ou acabou de tirar a CNH", text: "Uma forma mais visual de revisar regras, placas e situações comuns sem depender só de texto e decoreba." },
  { image: "/assets/traffic-round/audience-confidence.webp", title: "Para quem já dirige, mas quer ter mais segurança", text: "Muita gente dirige há anos e ainda tem dúvidas sobre preferência, estacionamento, placas e sinalizações." },
  { image: "/assets/traffic-round/audience-worker.webp", title: "Para quem trabalha dirigindo", text: "Motoristas de app, entregadores e profissionais que passam muito tempo no trânsito podem usar o material como consulta prática no dia a dia." },
  { image: "/assets/traffic-round/audience-visual.webp", title: "Para quem prefere aprender visualmente", text: "Em vez de tentar entender tudo por textos longos, você vê a situação acontecendo e entende com muito mais facilidade." }
];

export const summaryItems = [
  { image: "/assets/traffic-round/summary-pages.webp", title: "+150 pranchas visuais de situações de trânsito", text: "Entenda placas, preferências, cruzamentos, sinalizações, infrações e várias situações reais do trânsito." },
  { image: "/assets/traffic-round/summary-pdf.webp", title: "Material digital em PDF", text: "Você recebe tudo de forma organizada para acessar no celular, tablet ou computador." },
  { image: "/assets/traffic-round/summary-mail.webp", title: "Acesso imediato no e-mail", text: "Assim que a compra for confirmada, o material chega para você imediatamente no e-mail." },
  { image: "/assets/traffic-round/summary-consult.webp", title: "Consulta prática para usar quando quiser", text: "Você pode estudar com calma, revisar ou simplesmente abrir uma situação específica quando tiver dúvida." },
  { image: "/assets/traffic-round/audience-visual.webp", title: "Leitura mais fácil e visual", text: "Em vez de depender de textos longos, você aprende vendo e entendendo as situações." }
];

export const bonuses = [
  { image: "/assets/bonus/certificado-conclusao.png", title: "Certificado de Conclusão", text: "Um certificado digital para registrar a conclusão do material.", value: "R$ 27,00" },
  { image: "/assets/bonus/desafios-visuais-transito.png", title: "+50 Desafios Visuais de Trânsito", text: "Situações ilustradas para testar seus conhecimentos e fixar melhor o que aprendeu.", value: "R$ 23,00" },
  { image: "/assets/bonus/emergencias-imprevistos-transito.png", title: "Manual de Emergências e Imprevistos no Trânsito", text: "Um guia visual com orientações para situações inesperadas do dia a dia no trânsito.", value: "R$ 17,00" },
  { image: "/assets/bonus/multas-pontos-infracoes-final.png", title: "Guia Visual de Multas, Pontos e Infrações", text: "Entenda de forma simples as principais infrações, pontuação e consequências.", value: "R$ 20,00" }
];

export const benefits = [
  { title: "Você entende situações que antes geravam dúvida", text: "Cruzamentos, preferências, placas, ultrapassagens e sinalizações ficam muito mais fáceis de visualizar.", image: "/assets/traffic-round/benefit-junction.webp" },
  { title: "Aprende de forma mais clara e menos cansativa", text: "Em vez de depender só de texto e teoria, você passa a entender as regras vendo a situação acontecer.", image: "/assets/traffic-round/summary-pages.webp" },
  { title: "Consulta quando quiser, sem complicação", text: "É o tipo de material que você pode abrir para revisar ou tirar dúvidas sempre que precisar.", image: "/assets/traffic-round/benefit-search.webp" },
  { title: "Dirige com mais clareza e segurança", text: "Quando você entende melhor o que está acontecendo no trânsito, as decisões ficam mais simples no dia a dia.", image: "/assets/traffic-round/audience-confidence.webp" }
];

export const faqs = [
  ["Como eu recebo o material?", "Após a confirmação da compra, o acesso é enviado imediatamente para o seu e-mail."],
  ["O material é físico?", "Não. Este é um material 100% digital."],
  ["Posso acessar pelo celular?", "Sim. Você pode acessar pelo celular, tablet ou computador."],
  ["Esse material serve só para quem vai tirar CNH?", "Não. Ele também é útil para quem já dirige e quer entender melhor várias situações do trânsito."],
  ["O material é muito técnico?", "Não. Ele foi pensado para ser visual, direto e fácil de entender."],
  ["Vou receber os bônus junto?", "Sim. Ao escolher o plano completo, você recebe também os bônus descritos na oferta."],
  ["Tem mensalidade?", "Não. O pagamento é único."]
];

export function checkoutWithParams(checkout, search = "") {
  if (!checkout || checkout.includes("{{")) return null;
  try {
    const url = new URL(checkout);
    if (!["https:", "http:"].includes(url.protocol)) return null;
    const incoming = new URLSearchParams(search);
    for (const [key, value] of incoming) {
      if (!url.searchParams.getAll(key).includes(value)) url.searchParams.append(key, value);
    }
    return url.href;
  } catch {
    return null;
  }
}

export function getOfferDeadline(storage, now = Date.now()) {
  let start = now;
  try {
    const saved = storage?.getItem(offerConfig.countdownStorageKey);
    const parsed = Number(saved);
    if (saved !== null && saved !== void 0 && Number.isFinite(parsed) && parsed > 0 && parsed <= now) start = parsed;
    else storage?.setItem(offerConfig.countdownStorageKey, String(now));
  } catch {
  }
  return start + offerConfig.countdownMinutes * 60 * 1e3;
}
