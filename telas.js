// Telas do protótipo
// Cada tela tem quatro partes:
// inicial cria os dados da tela quando ela abre
// desenhar devolve o HTML da tela
// acoes diz o que cada botão faz
// aoEntrar roda uma vez quando a tela abre (opcional)

const TELAS = {}

// Ícones de traço usados no app
const ICONES = {
  voltar: '<path d="M19 12H5M11 18l-6-6 6-6"/>',
  seta: '<path d="M15 18l-6-6 6-6"/>',
  direita: '<path d="m9 18 6-6-6-6"/>',
  baixo: '<path d="m6 9 6 6 6-6"/>',
  cima: '<path d="m6 15 6-6 6 6"/>',
  inicio: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
  cartao: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',
  livro: '<path d="M2 5h7a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H2z"/><path d="M22 5h-7a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h8z"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  busca: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  sair: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
  check: '<path d="M5 12l5 5 9-10"/>',
  relogio: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  ampulheta: '<path d="M8 4h8M8 20h8M9 4c0 5 6 5 6 8s-6 3-6 8M15 4c0 5-6 5-6 8"/>',
  traco: '<path d="M7 12h10"/>',
  cadeado: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  aberto: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.5-2"/>',
  fechar: '<path d="M6 6l12 12M18 6 6 18"/>',
  info: '<circle cx="12" cy="12" r="9.5"/><path d="M12 11v6M12 7.5v.5"/>',
  olho: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  perfil: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3.2"/><path d="M6.2 18.5a6.5 6.5 0 0 1 11.6 0"/>',
  prancheta: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2.5h6V4M9 12l2 2 4-4"/>',
  bandeira: '<path d="M5 21V4h11l-2 4 2 4H5"/>',
  baixar: '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
  sincronizar: '<path d="M21 12a9 9 0 0 1-15.5 6.2M3 12a9 9 0 0 1 15.5-6.2"/><path d="M18 2v4h-4M6 22v-4h4"/>',
  semRede: '<path d="M2 2l20 20"/><path d="M8.5 16.4a5 5 0 0 1 7 0"/><path d="M5 12.6a10 10 0 0 1 5.2-2.7"/><path d="M19 12.6a10 10 0 0 0-2.3-1.7"/><path d="M2 8.8a15 15 0 0 1 4.2-2.6"/><path d="M22 8.8A15 15 0 0 0 10.7 5"/><path d="M12 20h.01"/>',
  pulso: '<path d="M3 12h4l2-4 3 8 2-4h7"/>',
  ar: '<path d="M3 8h11a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h7"/>',
  termometro: '<path d="M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0z"/><path d="M12 9v7"/>',
  alerta: '<circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 16.5v.5"/>',
  devolver: '<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>',
  medalha: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14 7 22l5-3 5 3-1.5-8"/>'
}

// Desenha um ícone pelo nome
function icone(nome, tam = 22, cor = '') {
  const estilo = cor ? ` style="color:${cor}"` : ''
  return `<svg class="ic" width="${tam}" height="${tam}" viewBox="0 0 24 24" aria-hidden="true"${estilo}>${ICONES[nome]}</svg>`
}

// Bolinha verde com um visto, usada em itens concluídos
function visto(tam = 22) {
  return `<svg width="${tam}" height="${tam}" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#2E9E55"/><path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`
}

// Imagem da insígnia pelo código da planilha
function insignia(codigo, tam = 44) {
  return `<img class="insignia" src="${codigo}.png" width="${tam}" height="${tam}" alt="">`
}

// Montanha do logo
function marca(tam = 32) {
  return `<svg width="${tam}" height="${Math.round(tam * 0.82)}" viewBox="0 0 34 28" aria-hidden="true"><path d="M1 27 12 8l6 9 4-5 11 15z" fill="#F5B700"/><path d="M9 13l3-5 3 4.5" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round"/><circle cx="26" cy="6" r="4" fill="none" stroke="#F5B700" stroke-width="2"/></svg>`
}

// Logo completo DBV Estuda+
function logo() {
  return `<div class="logo">${marca()}DBV <span class="e">Estuda</span><span class="mais">+</span></div>`
}

// Triângulo de cada classe
function emblema(cor, largura = 48) {
  return `<svg width="${largura}" height="${Math.round(largura * 0.91)}" viewBox="0 0 44 40" aria-hidden="true"><path d="M2 2h40L22 38z" fill="#F5B700" stroke="#0E2A47" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 6.5h26L22 31z" fill="${cor}"/><path d="M17 10h10l-5 9z" fill="#FFFFFF"/></svg>`
}

// Protege textos digitados antes de colocar no HTML
function esc(texto) {
  const trocas = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
  return String(texto).replace(/[&<>"']/g, (c) => trocas[c])
}

// Formata minutos como texto curto, por exemplo 1h30
function tempo(min) {
  if (min < 60) return `~${min} min`
  const resto = min % 60
  return `~${Math.floor(min / 60)}h${resto ? String(resto).padStart(2, '0') : ''}`
}

// Situações possíveis de uma especialidade, com texto, cores e ícone
const SITUACOES = {
  feita: ['Concluída', '#1E7A3E', '#2E9E55', 'check'],
  estudando: ['Estudando', '#8A5A00', '#F5B700', 'relogio'],
  investidura: ['Aguardando investidura', '#1F5FAD', '#1F5FAD', 'ampulheta'],
  nao: ['Não iniciada', '#5E6A7A', '#AEB7C4', 'traco']
}

// Mostra a situação com bolinha colorida
function situacao(chave, texto) {
  const [nome, corTexto, corBola, ic] = SITUACOES[chave]
  return `<span class="situacao" style="color:${corTexto}"><span class="bolinha" style="background:${corBola}">${icone(ic, 11)}</span>${texto || nome}</span>`
}

// Barrinha das seis etapas
function etapas(feitas) {
  const partes = ETAPAS.map((_, i) => `<span class="${i < feitas ? 'feita' : i === feitas ? 'agora' : ''}"></span>`)
  return `<div class="etapas" aria-label="${feitas} de 6 etapas concluídas">${partes.join('')}</div>`
}

// Linha de abas sublinhadas
function abas(lista, atual, chave, classe = '') {
  const botoes = lista.map(([id, nome]) =>
    `<button type="button" role="tab" class="aba ${id === atual ? 'ativa' : ''}" aria-selected="${id === atual}" data-acao="definir" data-chave="${chave}" data-valor="${id}">${nome}</button>`)
  return `<div class="abas ${classe}" role="tablist">${botoes.join('')}</div>`
}

// Caixa de marcar, usada em listas de conferência
function caixaMarcar(ligado, texto, dados, classe = '') {
  return `<button type="button" role="checkbox" aria-checked="${ligado}" class="marcar ${classe} ${ligado ? 'ligado' : ''}" ${dados}>
    <span class="caixa">${icone('check', 14)}</span><span class="txt">${texto}</span></button>`
}

// Barra de baixo do Desbravador
function navDesbravador(ativa) {
  const itens = [['inicio', 'inicio', 'Início'], ['passaporte', 'cartao', 'Passaporte'], ['especialidades', 'livro', 'Estudar'], ['mais', 'menu', 'Mais']]
  const links = itens.map(([tela, ic, nome]) =>
    `<a href="#" data-ir="${tela}" class="${tela === ativa ? 'ativa' : ''}" ${tela === ativa ? 'aria-current="page"' : ''}>${icone(ic, 24)}${nome}</a>`)
  return `<nav class="nav" aria-label="Navegação principal">${links.join('')}</nav>`
}

// Barra do topo com botão de voltar e título
function barraTopo(voltarPara, titulo, comLinha = true) {
  return `<header class="barra-topo ${comLinha ? 'linha' : ''}">
    <a href="#" data-ir="${voltarPara}" class="btn-icone" aria-label="Voltar">${icone('voltar', 24)}</a>
    <h1>${titulo}</h1><span class="vazio44"></span></header>`
}

// Cabeçalho das telas da equipe do clube, com botão de sair
function cabecalhoEquipe(selo, corSelo, ola, sub, numeros) {
  const blocos = numeros.map(([valor, rotulo, destaque]) =>
    `<div class="numero"><b class="${destaque ? 'destaque' : ''}">${valor}</b><span>${rotulo}</span></div>`)
  return `<header class="cabecalho equipe">
    <div class="linha-logo">${logo()}
      <div class="papel"><span class="selo-papel" style="background:${corSelo}">${selo}</span>
      <a href="#" data-ir="login" class="btn-icone claro" aria-label="Sair">${icone('sair')}</a></div>
    </div>
    <div><h1>${ola}</h1><p>${sub}</p></div>
    <div class="numeros ${numeros.length === 2 ? 'dois' : ''}">${blocos.join('')}</div>
  </header>`
}

// Aviso que desce no topo da tela
function aviso(iniciais, cor, titulo, texto) {
  return `<div class="aviso" role="status"><span class="avatar" style="width:36px;height:36px;background:${cor};font-size:13px">${iniciais}</span>
    <span class="txt"><b>${titulo}</b><span>${texto}</span></span></div>`
}

// Anel de porcentagem
function anel(pct, tam, cor, centro) {
  const r = tam / 2 - 10
  const volta = 2 * Math.PI * r
  return `<div class="anel" style="width:${tam}px;height:${tam}px">
    <svg width="${tam}" height="${tam}" viewBox="0 0 ${tam} ${tam}" role="img" aria-label="${pct}%">
      <circle cx="${tam / 2}" cy="${tam / 2}" r="${r}" fill="none" stroke="#E5E9EF" stroke-width="14"/>
      <circle cx="${tam / 2}" cy="${tam / 2}" r="${r}" fill="none" stroke="${cor}" stroke-width="14" stroke-linecap="round"
        stroke-dasharray="${(volta * pct / 100).toFixed(1)} ${volta.toFixed(1)}" transform="rotate(-90 ${tam / 2} ${tam / 2})"/>
    </svg><div class="meio">${centro}</div></div>`
}

// Desenho de montanhas da tela de boas-vindas
const ILUSTRACAO = `<svg viewBox="0 0 390 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <rect width="390" height="300" fill="#14365A"/><circle cx="262" cy="140" r="78" fill="#1D4670"/><circle cx="262" cy="140" r="44" fill="#F5B700"/>
  <path d="M0 210 L70 130 L120 180 L190 90 L250 160 L300 110 L390 200 L390 300 L0 300 Z" fill="#1B3D63"/>
  <path d="M0 250 L60 195 L110 230 L170 165 L235 235 L290 190 L390 255 L390 300 L0 300 Z" fill="#12304F"/>
  <path d="M190 90 L190 48" stroke="#FFFFFF" stroke-width="2.5"/><path d="M190 48 L222 56 L190 66 Z" fill="#D32F2F"/>
  <path d="M28 300 L44 238 L60 300 Z M50 300 L68 222 L86 300 Z M320 300 L338 228 L356 300 Z M346 300 L362 246 L378 300 Z" fill="#0B2238"/>
  <path d="M0 280 Q195 250 390 280 L390 300 L0 300 Z" fill="#0E2A47"/></svg>`


// Tela 1: boas-vindas com três passos
TELAS.boasVindas = {
  inicial: () => ({ passo: 0 }),
  desenhar: (t) => {
    const passos = [
      ['cartao', '#F5B700', '#0E2A47', 'Seu passaporte, agora digital', 'Identificação, classes e todas as especialidades do Passaporte de Especialidades, sempre com você.'],
      ['prancheta', '#2E9E55', '#FFFFFF', 'Cumpra os requisitos', 'Estude a teoria e faça o teste quando o seu instrutor liberar. A prática é avaliada por ele.'],
      ['medalha', '#D32F2F', '#FFFFFF', 'Do registro à investidura', 'A secretaria registra, o clube pede a insígnia e você a recebe na investidura, pronta para a faixa.']
    ]
    const [ic, fundo, cor, titulo, texto] = passos[t.passo]
    const ultimo = t.passo === passos.length - 1
    const pontos = passos.map((_, i) => `<span class="${i === t.passo ? 'atual' : ''}"></span>`).join('')
    return `<div class="tela escura">
      <div class="ilustracao">${ILUSTRACAO}<a href="#" data-ir="login" class="pular">Pular</a></div>
      <div class="boas-vindas">
        <div class="logo grande">${marca(46)}DBV <span class="e">Estuda</span><span class="mais">+</span></div>
        <p class="slogan">CONHECIMENTO QUE PREPARA<br>PARA HOJE E PARA SEMPRE</p>
        <div class="slide" aria-live="polite">
          <span class="bola-icone" style="background:${fundo}">${icone(ic, 28, cor)}</span>
          <h2>${titulo}</h2><p>${texto}</p>
        </div>
        <div class="pontinhos" aria-hidden="true">${pontos}</div>
        ${ultimo
          ? '<a href="#" data-ir="login" class="btn amarelo">Começar</a>'
          : '<button type="button" class="btn amarelo" data-acao="proximo">Próximo</button>'}
        <a href="#" data-ir="login" class="link-claro">Já tenho conta ·<b>Entrar</b></a>
      </div>
    </div>`
  },
  acoes: {
    proximo: (t) => { t.passo = Math.min(t.passo + 1, 2) }
  }
}


// Tela 2: login com nome, senha, região e clube
TELAS.login = {
  inicial: () => ({ nome: 'Ana Souza', senha: 'aguias2026', regiao: 'Região 3 – Sul', clube: 'Águias do Vale', verSenha: false }),
  desenhar: (t) => {
    const conta = contaPeloNome(t.nome)
    const faltam = camposFaltando(t)
    const clubes = t.regiao ? CLUBES_POR_REGIAO[t.regiao] : []
    const opcoes = (lista, atual) => lista.map((v) => `<option value="${v}" ${v === atual ? 'selected' : ''}>${v}</option>`).join('')
    const demos = CONTAS.map((c, i) =>
      `<button type="button" class="marcar ${conta === c ? 'ligado' : ''}" style="padding:8px 10px" data-acao="usarConta" data-i="${i}" aria-pressed="${conta === c}">
        <span class="txt"><b>${c.papel}</b><span class="cinza pequeno">${c.nome}</span></span></button>`).join('')
    const textoBotao = conta && conta.papel !== 'Desbravadora' ? `Entrar como ${conta.papel.toLowerCase()}` : 'Entrar'
    return `<div class="tela">
      <header class="cabecalho" style="padding:6px 12px 20px;align-items:center;border-radius:0 0 24px 24px;gap:6px">
        <div style="width:100%"><a href="#" data-ir="boasVindas" class="btn-icone claro" aria-label="Voltar">${icone('seta', 24)}</a></div>
        <div class="logo" style="font-size:30px">${marca(36)}DBV <span class="e">Estuda</span><span class="mais">+</span></div>
      </header>
      <div class="rola" data-rola="login">
        <form class="conteudo junto" onsubmit="return false">
          <div><h1 style="font-size:22px;color:#0E2A47">Entrar</h1><p class="cinza" style="font-size:14px">Use os dados cadastrados pelo seu clube.</p></div>
          <div class="campo"><label for="nome">Nome</label>
            <input id="nome" class="entrada ${t.nome.trim() ? '' : 'erro'}" type="text" autocomplete="name" placeholder="Seu nome completo" value="${esc(t.nome)}" data-campo="nome"></div>
          <div class="campo"><label for="senha">Senha</label>
            <div class="entrada com-botao ${t.senha ? '' : 'erro'}">
              <input id="senha" type="${t.verSenha ? 'text' : 'password'}" autocomplete="current-password" placeholder="Sua senha" value="${esc(t.senha)}" data-campo="senha">
              <button type="button" class="btn-icone" style="color:#5E6A7A" data-acao="alternar" data-chave="verSenha" aria-label="${t.verSenha ? 'Ocultar senha' : 'Mostrar senha'}">${icone('olho')}</button>
            </div></div>
          <div class="grade2" style="gap:10px">
            <div class="campo"><label for="regiao">Região</label>
              <select id="regiao" class="entrada ${t.regiao ? '' : 'erro'}" style="font-size:15px;padding:0 8px" data-campo="regiao">
                <option value="">Escolha</option>${opcoes(Object.keys(CLUBES_POR_REGIAO), t.regiao)}</select></div>
            <div class="campo"><label for="clube">Clube</label>
              <select id="clube" class="entrada ${t.clube ? '' : 'erro'}" style="font-size:15px;padding:0 8px" data-campo="clube" ${t.regiao ? '' : 'disabled'}>
                <option value="">${t.regiao ? 'Escolha' : 'Escolha a região'}</option>${opcoes(clubes, t.clube)}</select></div>
          </div>
          ${faltam.length ? `<p class="msg erro" role="alert">Preencha: ${faltam.join(', ')}.</p>` : ''}
          <button type="button" class="btn" data-acao="entrar" ${faltam.length ? 'disabled' : ''}>${textoBotao}</button>
          <section class="secao" style="border-top:1px solid #E5E9EF;padding-top:12px;gap:8px">
            <span class="cinza" style="font-size:13px;font-weight:700;letter-spacing:0.04em">CONTAS DE DEMONSTRAÇÃO</span>
            <div class="grade2">${demos}</div>
          </section>
        </form>
      </div>
    </div>`
  },
  acoes: {
    usarConta: (t, d) => {
      const c = CONTAS[Number(d.i)]
      Object.assign(t, { nome: c.nome, senha: c.senha, regiao: 'Região 3 – Sul', clube: c.clube })
    },
    entrar: (t) => {
      if (camposFaltando(t).length) return
      const conta = contaPeloNome(t.nome) || CONTAS[0]
      estado.usuario = conta
      ir(conta.tela)
    }
  },
  aoMudar: {
    regiao: (t) => { t.clube = '' }
  }
}

// Procura a conta de demonstração pelo nome digitado
function contaPeloNome(nome) {
  return CONTAS.find((c) => c.nome.toLowerCase() === nome.trim().toLowerCase())
}

// Lista os campos do login que estão vazios
function camposFaltando(t) {
  const faltam = []
  if (!t.nome.trim()) faltam.push('nome')
  if (!t.senha) faltam.push('senha')
  if (!t.regiao) faltam.push('região')
  if (!t.clube) faltam.push('clube')
  return faltam
}


// Tela 3: início do Desbravador
TELAS.inicio = {
  desenhar: () => {
    const andamento = [
      ['CS-003', 'Primeiros socorros – básico', 1, 'Etapa 2 · cumpra os requisitos', 'detalhe', '#8A5A00'],
      ['AR-021', 'Mapa e bússola', 5, 'Registrada · investidura em 13/12', 'passaporte', '#1F5FAD']
    ].map(([id, nome, feitas, rotulo, tela, cor]) =>
      `<a href="#" data-ir="${tela}" class="cartao" style="gap:10px">
        <div class="linha-flex">${insignia(id, 42)}<span class="txt"><b style="font-size:15px">${nome}</b><span style="font-size:13px;color:${cor}">${rotulo}</span></span>${icone('direita', 18, '#5E6A7A')}</div>
        ${etapas(feitas)}</a>`).join('')
    const classes = CLASSES.slice(0, 3).map((c) =>
      `<a href="#" data-ir="classes" class="mini-cartao">${emblema(c.cor)}${c.nome}</a>`).join('')
    const fluxo = ETAPAS.map((e, i) =>
      `<div class="linha-flex" style="gap:10px;font-size:14px"><span class="avatar" style="width:24px;height:24px;font-size:12px;background:${i === 5 ? '#F5B700' : '#0E2A47'};color:${i === 5 ? '#0E2A47' : '#FFFFFF'}">${i + 1}</span>${e}</div>`).join('')
    return `<div class="tela">
      <div class="rola" data-rola="inicio">
        <header class="cabecalho">
          <div class="linha-logo">${logo()}<a href="#" data-ir="mais" class="btn-icone claro" aria-label="Abrir perfil">${icone('perfil', 28)}</a></div>
          <div><h1>Olá, Ana!</h1><p>Pesquisador · Águias do Vale · Região 3 – Sul</p></div>
          <a href="#" data-ir="passaporte" class="cartao" style="flex-direction:row;align-items:center;gap:14px">
            <span class="avatar" style="width:46px;height:46px;border-radius:10px;background:#F5B700;color:#0E2A47">${icone('cartao', 26)}</span>
            <span class="txt" style="flex:1;display:flex;flex-direction:column;gap:2px"><b style="font-size:15px">Meu Passaporte de Especialidades</b><span class="cinza pequeno">6 investidas · 1 aguardando investidura</span></span>
            ${icone('direita', 18, '#0E2A47')}</a>
        </header>
        <main class="conteudo">
          <section class="secao"><h2>Em andamento</h2>${andamento}</section>
          <section class="secao">
            <div class="titulo-linha"><h2>Classes</h2><a href="#" data-ir="classes" class="link-pequeno">Ver todas ${icone('direita', 16)}</a></div>
            <div class="grade3">${classes}</div>
          </section>
          <section class="caixa-suave"><h3 style="font-size:15px;color:#0E2A47">Da escolha à investidura</h3>${fluxo}</section>
        </main>
      </div>
      ${navDesbravador('inicio')}
    </div>`
  }
}


// Tela 4: Passaporte de Especialidades
TELAS.passaporte = {
  inicial: () => ({ aba: 'esp', filtro: 'minhas', busca: '', aberta: 'Aves', sobre: false }),
  desenhar: (t) => {
    const conteudo = t.aba === 'id' ? identificacao() : especialidadesDoPassaporte(t)
    return `<div class="tela">
      ${t.sobre ? sobrePassaporte() : ''}
      <div class="rola" data-rola="passaporte">
        <header class="cabecalho" style="padding:14px 20px 16px;gap:12px">
          <div class="titulo-linha" style="align-items:flex-start">
            <div><h1 style="font-size:20px">Passaporte de Especialidades</h1><p style="margin-top:2px;font-size:13px">Histórico oficial e vitalício</p></div>
            <button type="button" class="btn-icone" style="color:#F5B700;margin:-6px -10px 0 0" data-acao="definir" data-chave="sobre" data-valor="1" aria-label="Sobre o passaporte">${icone('info', 24)}</button>
          </div>
          <div class="numero" style="flex-direction:row;align-items:center;gap:14px;padding:12px 14px">
            <span class="avatar" style="width:52px;height:52px;border-radius:10px;background:#2E9E55;font-size:19px">AS</span>
            <div style="display:flex;flex-direction:column;gap:2px"><b style="font-size:16px">Ana Souza</b><span>Pesquisador · Águias do Vale</span><span>Região 3 – Sul · Passaporte nº R3-0457</span></div>
          </div>
          <div class="numeros">
            <div class="numero"><b class="destaque">6</b><span>investidas</span></div>
            <div class="numero"><b>1</b><span>p/ investidura</span></div>
            <div class="numero"><b>3</b><span>anos de clube</span></div>
          </div>
        </header>
        ${abas([['id', 'Identificação'], ['esp', 'Especialidades']], t.aba, 'aba', 'margem')}
        <main class="conteudo junto" style="padding-top:14px">${conteudo}</main>
      </div>
      ${navDesbravador('passaporte')}
    </div>`
  },
  acoes: {
    abrirLinha: (t, d) => { t.aberta = t.aberta === d.nome ? '' : d.nome },
    fecharSobre: (t) => { t.sobre = false }
  }
}

// Página da esquerda do passaporte: identificação por ano
function identificacao() {
  const blocos = ANOS.map((a) =>
    `<div class="ano-bloco ${a.futuro ? 'futuro' : ''}"><span><b>Ano:</b> ${a.ano}</span><span><b>Classe:</b> ${a.classe}</span>
      <span class="largo"><b>Clube:</b> ${a.clube}</span><span class="largo"><b>Região:</b> ${a.regiao}</span></div>`).join('')
  return `<div class="faixa-area" style="font-size:17px">IDENTIFICAÇÃO</div>
    <div style="display:flex;gap:8px;font-size:15px;padding:4px 2px 8px;border-bottom:1px solid #C3CBD6"><b>Nome:</b>Ana Souza</div>
    ${blocos}<p class="cinza pequeno">O bloco de cada ano é preenchido pela secretaria do clube na matrícula.</p>`
}

// Página da direita do passaporte: especialidades por área
function especialidadesDoPassaporte(t) {
  const busca = normalizar(t.busca.trim())
  const filtros = [['minhas', 'Minhas'], ['todas', 'Todas do passaporte']].map(([id, nome]) =>
    `<button type="button" class="chip ${t.filtro === id ? 'ativo' : ''}" role="radio" aria-checked="${t.filtro === id}" data-acao="definir" data-chave="filtro" data-valor="${id}">${nome}</button>`).join('')
  const areas = PASSAPORTE.map((pagina) => {
    const itens = pagina.itens
      .filter((it) => t.filtro === 'todas' || it.st !== 'vazia')
      .filter((it) => !busca || normalizar(it.nome).includes(busca))
    if (!itens.length) return ''
    return `<section><div class="faixa-area">${pagina.area}</div>${itens.map((it) => linhaPassaporte(it, t.aberta === it.nome)).join('')}</section>`
  }).join('')
  return `<label class="busca" for="busca-pass">${icone('busca', 18)}<input id="busca-pass" type="search" placeholder="Buscar no passaporte" value="${esc(t.busca)}" data-campo="busca"></label>
    <div class="chips sem-margem" role="radiogroup" aria-label="Mostrar">${filtros}</div>
    ${areas || '<p class="cinza centro" style="padding:28px 8px">Nenhuma especialidade encontrada no passaporte.</p>'}`
}

// Uma linha do passaporte, com os campos REGISTRO, Inst., Reg. e Ass./Missão
function linhaPassaporte(it, aberta) {
  const registrada = it.st === 'investida' || it.st === 'aguardando'
  const branco = '<span class="vazio">_________</span>'
  const ok = (rotulo, valor) => [rotulo, valor, '#2E9E55', 'check', '#1E7A3E']
  const espera = (rotulo, valor) => [rotulo, valor, '#F5B700', 'relogio', '#8A5A00']
  const falta = (rotulo) => [rotulo, 'Pendente', '#AEB7C4', 'traco', '#5E6A7A']
  const feito = registrada ? [ok('Avaliação · instrutor', `${it.inst} · nota ${it.nota}`), ok('Registro · secretaria (SGC)', `Lúcia Ramos · ${it.data}`), ok('Reg. · região', it.reg), ok('Ass. ou Missão', it.ass)] : []
  let passos
  if (it.st === 'investida') passos = [...feito, ok('Insígnia e investidura', it.investidura)]
  else if (it.st === 'aguardando') passos = [...feito, espera('Insígnia e investidura', 'Agendada 13/12/2026')]
  else if (it.st === 'estudando') passos = [ok('Planejamento', 'Instrutor Carlos Lima'), espera('Requisitos', 'Estudando'), falta('Avaliação · instrutor'), falta('Registro · secretaria (SGC)'), falta('Insígnia e investidura')]
  else passos = [falta('Planejamento'), falta('Requisitos'), falta('Avaliação · instrutor'), falta('Registro · secretaria (SGC)'), falta('Insígnia e investidura')]
  const historico = passos.map(([rotulo, valor, bola, ic, cor]) =>
    `<div class="linha-flex"><span class="bolinha" style="background:${bola}">${icone(ic, 10)}</span><span style="flex:1;color:#2A3547">${rotulo}</span><span style="color:${cor};text-align:right">${valor}</span></div>`).join('')
  let link = ''
  if (it.st === 'aguardando') link = '<a href="#" data-ir="acompanhar" class="forte pequeno" style="margin-top:4px">Acompanhar o processo</a>'
  if (it.st === 'estudando') link = '<a href="#" data-ir="detalhe" class="forte pequeno" style="margin-top:4px">Continuar estudando</a>'
  if (it.st === 'vazia') link = '<a href="#" data-ir="especialidades" class="forte pequeno" style="margin-top:4px">Ver especialidades</a>'
  return `<div>
    <button type="button" class="linha-pass" aria-expanded="${aberta}" data-acao="abrirLinha" data-nome="${esc(it.nome)}">
      <span class="topo"><span style="font-size:15px;font-weight:500">${it.nome}</span><span class="registro ${registrada ? 'feito' : ''}">REGISTRO: ${registrada ? it.data : '__/__/__'}</span></span>
      <span class="campos-pass">
        <span>Inst. ${registrada ? `<b>${it.inst}</b>` : branco}</span>
        <span>Reg. ${registrada ? `<b>${it.reg}</b>` : branco}</span>
        <span>Ass./Missão ${registrada ? `<b style="color:#1F5FAD;font-weight:700">${it.ass}</b>` : '<span class="vazio">____</span>'}</span>
      </span>
    </button>
    ${aberta ? `<div class="historico">${historico}${link}</div>` : ''}
  </div>`
}

// Página que explica o passaporte
function sobrePassaporte() {
  const campos = [
    ['REGISTRO', 'Data em que a especialidade foi concluída e registrada.'],
    ['Inst.', 'Rubrica do instrutor ou diretor que aplicou o teste e aprovou o Desbravador.'],
    ['Reg.', 'Número da região (ou número de registro de controle da secretaria ou do campo).'],
    ['Ass./Missão', 'Sigla da Associação ou Missão da região (ex.: APaC, APL, APS) e carimbo do campo.']
  ].map(([tag, texto]) =>
    `<div class="linha-flex" style="align-items:flex-start;gap:10px"><span class="selo cinza" style="min-width:74px;text-align:center;font-weight:700;font-style:italic;color:#0E2A47">${tag}</span><span>${texto}</span></div>`).join('')
  const fluxo = [
    ['Planejamento', 'a direção põe a especialidade no calendário e designa o instrutor (ou o Desbravador escolhe por conta própria).'],
    ['Requisitos', 'parte teórica (aulas, pesquisa, questionário) e parte prática.'],
    ['Avaliação', 'o instrutor aplica o teste, avalia a prática e passa a lista de aprovados à secretaria.'],
    ['Registro', 'a secretaria lança no SGC e preenche a linha do passaporte.'],
    ['Insígnias', 'o diretor ou tesoureiro faz o pedido à Associação ou Missão.'],
    ['Investidura', 'na cerimônia, com o Regional, o Desbravador recebe a insígnia e o passaporte atualizado e pode costurá-la na faixa.']
  ].map(([titulo, texto], i) =>
    `<div class="linha-flex" style="align-items:flex-start;gap:10px"><span class="avatar" style="width:24px;height:24px;font-size:12px;background:#0E2A47">${i + 1}</span><span><b>${titulo}:</b> ${texto}</span></div>`).join('')
  return `<div class="sobreposto" role="dialog" aria-modal="true" aria-labelledby="sobre-titulo">
    <header class="barra-topo linha" style="padding-left:20px"><h1 id="sobre-titulo" style="font-size:17px">Sobre o passaporte</h1>
      <button type="button" class="btn-icone" data-acao="fecharSobre" aria-label="Fechar">${icone('fechar')}</button></header>
    <div class="rola" data-rola="sobre"><div class="conteudo" style="font-size:14px;line-height:1.55;color:#2A3547">
      <section class="secao"><h3>O que é</h3><p>O Passaporte de Especialidades (também chamado de Caderneta ou Cartão de Registro de Especialidades) é o histórico oficial e vitalício de todas as especialidades e classes que o Desbravador concluiu na sua trajetória no clube.</p></section>
      <section class="secao"><h3>Para que serve</h3><p>Era comum perder os certificados de papel e não conseguir comprovar quais insígnias se tinha direito de usar, ou quais pré-requisitos já estavam cumpridos para avançar de classe ou se tornar Líder. O passaporte centraliza a validação oficial em um só lugar. Esse controle também é feito em paralelo no SGC (Sistema de Gerenciamento de Clubes).</p></section>
      <section class="secao"><h3>Identificação</h3><p>Nome completo e um bloco para cada ano: <b>Ano</b>, <b>Classe</b> (Amigo, Companheiro, Pesquisador, Pioneiro, Excursionista ou Guia), <b>Clube</b> e <b>Região</b>. As classes regulares vão dos 10 aos 15 anos e a partir dos 16 vem a liderança. Assim o histórico continua mesmo se o Desbravador mudar de clube ou de cidade.</p></section>
      <section class="secao"><h3>Campos de cada especialidade</h3>${campos}</section>
      <section class="secao"><h3>Da escolha à investidura</h3>${fluxo}</section>
      <p class="msg info">No DBV Estuda+, a secretaria preenche esta linha no app ao lançar a especialidade no SGC, e o Desbravador vê tudo na hora.</p>
    </div></div>
  </div>`
}

// Tira acentos e deixa minúsculo, para a busca achar com ou sem acento
function normalizar(texto) {
  return texto.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
}


// Tela 5: catálogo de especialidades
TELAS.especialidades = {
  inicial: () => ({ area: 'TODAS', busca: '', obrigatorias: false }),
  desenhar: (t) => {
    const busca = normalizar(t.busca.trim())
    const lista = CATALOGO
      .filter((e) => t.area === 'TODAS' || e.area === t.area)
      .filter((e) => !t.obrigatorias || e.req)
      .filter((e) => !busca || normalizar(e.nome).includes(busca) || normalizar(e.id).includes(busca))
    const chips = FILTROS_AREA.map(([id, nome]) =>
      `<button type="button" class="chip ${t.area === id ? 'ativo' : ''}" aria-pressed="${t.area === id}" data-acao="definir" data-chave="area" data-valor="${id}">${nome}</button>`).join('')
    const itens = lista.map((e) => {
      const selos = []
      if (e.req) selos.push(`<span class="selo amarelo">Obrigatória · ${e.req}</span>`)
      if (e.novo) selos.push('<span class="selo verde">Novo 2025</span>')
      const rotulo = { feita: 'Concluída', estudando: 'Estudando', investidura: 'Investidura' }[e.st]
      return `<a href="#" data-ir="detalhe" class="item">${insignia(e.id)}
        <span class="txt"><span class="nome">${e.nome}</span><span class="sub">${e.id} · ${AREAS[e.area]} · ${tempo(e.min)}</span>
        ${selos.length ? `<span class="etiquetas">${selos.join('')}</span>` : ''}</span>
        ${e.st ? situacao(e.st, rotulo) : ''}</a>`
    }).join('')
    const vazio = `<div class="centro" style="padding:48px 12px;display:flex;flex-direction:column;align-items:center;gap:10px">
      ${icone('busca', 44, '#5E6A7A')}<b style="font-size:17px">Nenhuma especialidade encontrada</b><span class="cinza" style="font-size:14px">Confira a grafia ou tente outra área.</span>
      <button type="button" class="btn compacto" data-acao="limpar">Limpar filtros</button></div>`
    return `<div class="tela">
      <header style="flex:none;padding:16px 20px 8px;display:flex;flex-direction:column;gap:12px">
        <div><h1 style="font-size:24px;color:#0E2A47">Especialidades</h1><p class="cinza" style="font-size:14px">574 especialidades em 11 áreas</p></div>
        <label class="busca" for="busca-esp">${icone('busca', 20)}<input id="busca-esp" type="search" placeholder="Buscar por nome ou código" value="${esc(t.busca)}" data-campo="busca"></label>
      </header>
      <div class="chips" data-rola="chips">${chips}</div>
      <div class="titulo-linha" style="flex:none;padding:2px 20px 8px;border-bottom:1px solid #E5E9EF">
        <span class="cinza" style="font-size:14px">${lista.length === 1 ? '1 resultado' : `${lista.length} resultados`}</span>
        <button type="button" role="switch" aria-checked="${t.obrigatorias}" class="linha-flex" style="border:0;background:transparent;gap:8px;font-size:14px;font-weight:500;min-height:40px;padding:0" data-acao="alternar" data-chave="obrigatorias">
          Obrigatórias de classe<span class="interruptor ${t.obrigatorias ? 'ligado' : ''}" style="width:40px;height:24px;padding:2px"></span></button>
      </div>
      <div class="rola" data-rola="lista" style="padding:0 20px 16px">${itens || vazio}</div>
      ${navDesbravador('especialidades')}
    </div>`
  },
  acoes: {
    limpar: (t) => { Object.assign(t, { area: 'TODAS', busca: '', obrigatorias: false }) }
  }
}


// Tela 6: requisitos, estudo e teste de uma especialidade
TELAS.detalhe = {
  inicial: () => ({ aba: 'teste', teste: 'bloqueado', aviso: false }),
  desenhar: (t) => {
    let corpo = ''
    if (t.aba === 'req') {
      const lista = REQUISITOS.map((r, i) =>
        `<div class="linha-flex" style="padding:11px 0;border-bottom:1px solid #EEF1F5;align-items:flex-start"><span class="avatar" style="width:24px;height:24px;font-size:12px;background:#E8EFF8;color:#0E2A47">${i + 1}</span><span style="font-size:14px;line-height:1.4">${r}</span></div>`).join('')
      corpo = `<div class="grade2" style="gap:10px"><div class="dado"><b>16</b><span>teóricos · teste no app</span></div><div class="dado"><b>Prática</b><span>avaliada pelo instrutor</span></div></div><div>${lista}</div>`
    }
    if (t.aba === 'estudo') {
      corpo = '<div>' + LICOES.map(([titulo, sub, lida], i) =>
        `<a href="#" data-ir="licao" class="item"><span class="avatar" style="width:28px;height:28px;font-size:13px;background:${lida ? '#0E2A47' : '#FFFFFF'};color:${lida ? '#FFFFFF' : '#0E2A47'};border:${lida ? '0' : '2px solid #0E2A47'}">${i + 1}</span>
          <span class="txt"><span style="font-size:14px;font-weight:500">${titulo}</span><span style="font-size:12px;color:#5E6A7A">${sub}</span></span>${lida ? visto() : ''}</a>`).join('') + '</div>'
    }
    if (t.aba === 'teste') {
      const textos = {
        bloqueado: ['Teste bloqueado', 'Estude os requisitos e peça ao seu instrutor para liberar o teste teórico.'],
        pedido: ['Aguardando liberação', 'Seu instrutor recebeu o pedido. Você será avisado quando o teste for liberado.'],
        liberado: ['Teste liberado!', 'Carlos Lima liberou o teste. Você pode fazer agora.']
      }
      const liberado = t.teste === 'liberado'
      let acao = '<button type="button" class="btn" data-acao="pedirLiberacao">Pedir liberação ao instrutor</button>'
      if (t.teste === 'pedido') acao = `<span class="selo azul grande" role="status" style="display:flex;align-items:center;gap:6px;padding:8px 14px">${icone('relogio', 16)} Pedido enviado a Carlos Lima</span>`
      if (liberado) acao = '<a href="#" data-ir="teste" class="btn ok">Começar teste teórico</a>'
      corpo = `<div class="cartao" style="align-items:center;text-align:center">
          <span class="avatar" style="width:64px;height:64px;background:${liberado ? '#2E9E55' : '#F0F3F7'};color:${liberado ? '#FFFFFF' : '#0E2A47'}">${icone(liberado ? 'aberto' : 'cadeado', 30)}</span>
          <b style="font-size:18px;color:#0E2A47">${textos[t.teste][0]}</b><span style="font-size:14px;line-height:1.45;color:#2A3547">${textos[t.teste][1]}</span>${acao}</div>
        <div class="caixa-suave" style="font-size:13px;gap:6px"><b style="font-size:14px;color:#0E2A47">Regras do teste</b>
          <span>• Só abre depois que o instrutor libera.</span><span>• 5 perguntas · nota mínima 70%.</span>
          <span>• A parte prática é avaliada pelo instrutor, que dá a nota final.</span><span>• Aprovado, seu nome vai na lista para a secretaria registrar.</span></div>`
    }
    return `<div class="tela">
      ${t.aviso ? aviso('CL', '#1F5FAD', 'Teste liberado!', 'Carlos Lima liberou seu teste teórico.') : ''}
      <header class="barra-topo"><a href="#" data-ir="especialidades" class="btn-icone" aria-label="Voltar">${icone('voltar', 24)}</a></header>
      <div style="flex:none;padding:0 20px;display:flex;flex-direction:column;gap:14px">
        <div class="linha-flex" style="gap:14px">${insignia('CS-003', 56)}
          <div class="txt"><h1 style="font-size:20px">Primeiros socorros – básico</h1><span class="cinza pequeno">CS-003 · Ciência e saúde · Nível 1</span><span class="pequeno" style="color:#1F5FAD">Instrutor designado: Carlos Lima</span></div></div>
        <div style="display:flex;flex-direction:column;gap:6px">${etapas(1)}<span class="cinza pequeno">Etapa 2 de 6 · requisitos: teoria e prática</span></div>
        ${abas([['req', 'Requisitos'], ['estudo', 'Estudo'], ['teste', 'Teste teórico']], t.aba, 'aba')}
      </div>
      <main class="rola" data-rola="detalhe" style="padding:14px 20px 16px;display:flex;flex-direction:column;gap:14px">${corpo}</main>
      <div class="rodape"><a href="#" data-ir="licao" class="btn sec">Estudar o conteúdo</a></div>
    </div>`
  },
  acoes: {
    // Envia o pedido e simula o instrutor liberando depois de 5 segundos
    pedirLiberacao: (t) => {
      t.teste = 'pedido'
      depois(5000, (dados) => {
        dados.teste = 'liberado'
        dados.aviso = true
      })
    }
  }
}


// Tela 7: lição Sinais vitais com cronômetro de prática
TELAS.licao = {
  inicial: () => ({ feita: false, segundos: 30, rodando: false, terminou: false }),
  desenhar: (t) => {
    const blocos = [
      ['pulso', '#D32F2F', '#FFFFFF', 'Pulso', 'Use dois dedos (indicador e médio), nunca o polegar, que tem pulsação própria. Procure no punho (pulso radial) ou na lateral do pescoço (pulso carotídeo). Conte os batimentos por 30 segundos e multiplique por 2.'],
      ['ar', '#1F5FAD', '#FFFFFF', 'Respiração', 'Observe o peito subir e descer sem avisar a pessoa: quem sabe que está sendo observado muda o ritmo. Conte por 30 segundos e multiplique por 2.'],
      ['termometro', '#F5B700', '#0E2A47', 'Temperatura', 'Toque a pele com as costas da mão. Pele fria e úmida pode indicar choque e quente e seca pode indicar febre. Para o valor exato, use um termômetro.']
    ].map(([ic, fundo, cor, titulo, texto]) =>
      `<section class="linha-flex" style="align-items:flex-start"><span class="avatar" style="width:36px;height:36px;background:${fundo};color:${cor}">${icone(ic, 20)}</span>
        <div class="txt" style="gap:4px"><h2 style="font-size:17px">${titulo}</h2><p style="font-size:15px;line-height:1.55;color:#2A3547">${texto}</p></div></section>`).join('')
    const dica = t.terminou ? 'Tempo! Multiplique o número de batimentos por 2 para ter o seu pulso por minuto.'
      : t.rodando ? 'Conte os batimentos no punho até o cronômetro zerar.'
      : 'Coloque dois dedos no punho, toque em Iniciar e conte os batimentos.'
    const botaoCrono = t.rodando ? 'Cancelar' : t.terminou ? 'Contar de novo' : 'Iniciar 30 segundos'
    const barras = [0, 1, 2, 3, 4].map((i) => `<span style="height:5px;border-radius:3px;background:${i < 2 || (i === 2 && t.feita) ? '#0E2A47' : i === 2 ? '#F5B700' : '#E5E9EF'}"></span>`).join('')
    return `<div class="tela">
      <header style="flex:none;padding:6px 6px 12px;border-bottom:1px solid #E5E9EF;display:flex;flex-direction:column;gap:8px">
        <div class="barra-topo" style="height:44px;padding:0"><a href="#" data-ir="detalhe" class="btn-icone" aria-label="Voltar">${icone('voltar', 24)}</a><h1>Primeiros socorros</h1><span class="vazio44 cinza centro" style="font-size:14px">3/5</span></div>
        <div style="display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:4px;padding:0 14px">${barras}</div>
      </header>
      <main class="rola conteudo" data-rola="licao" style="padding:20px">
        <div style="display:flex;flex-direction:column;gap:6px"><span class="forte" style="font-size:12px;color:#1F5FAD;letter-spacing:0.06em">LIÇÃO 3</span>
          <h1 style="font-size:26px;color:#0E2A47">Sinais vitais</h1>
          <p style="font-size:16px;line-height:1.55;color:#2A3547">Sinais vitais são medidas que mostram como o corpo está funcionando. Os principais são o <b>pulso</b>, a <b>respiração</b> e a <b>temperatura</b>.</p></div>
        ${blocos}
        <section class="cartao" style="gap:4px"><h2 style="font-size:15px;color:#0E2A47;margin-bottom:4px">Valores normais de um adulto em repouso</h2>
          <div class="titulo-linha" style="padding:8px 0;border-bottom:1px solid #EEF1F5;font-size:15px"><span>Pulso</span><b>60 a 100 bpm</b></div>
          <div class="titulo-linha" style="padding:8px 0;border-bottom:1px solid #EEF1F5;font-size:15px"><span>Respiração</span><b>12 a 20 por minuto</b></div>
          <div class="titulo-linha" style="padding:8px 0;font-size:15px"><span>Temperatura</span><b>36 a 37,5 °C</b></div></section>
        <section class="cartao" style="background:#0E2A47;color:#FFFFFF;border:0;gap:10px">
          <div class="titulo-linha"><div><span class="forte" style="font-size:12px;color:#F5B700;letter-spacing:0.06em">PRATIQUE AGORA</span><br><b style="font-size:16px">Conte o seu próprio pulso</b></div>
            <span aria-live="polite" style="font-family:'Baloo 2',sans-serif;font-size:34px;font-weight:800;color:#F5B700">${t.segundos}s</span></div>
          <p style="font-size:14px;line-height:1.45;color:#C9D6EA">${dica}</p>
          <button type="button" class="btn amarelo menor" data-acao="cronometro">${botaoCrono}</button></section>
        <p class="msg erro" style="color:#7A1A12"><b>Atenção:</b> se a pessoa não respira ou não tem pulso, ligue 192 (SAMU) imediatamente e chame um adulto treinado.</p>
        ${t.feita ? `<p class="msg ok linha-flex" role="status">${visto(24)}<b>Lição concluída! Agora são 3 de 5.</b></p>` : ''}
      </main>
      <div class="rodape">${t.feita
        ? `<a href="#" data-ir="detalhe" class="btn">Voltar para o teste ${icone('direita', 18)}</a>`
        : '<button type="button" class="btn" data-acao="concluir">Concluir lição</button>'}</div>
    </div>`
  },
  acoes: {
    concluir: (t) => { t.feita = true },
    // Liga ou cancela a contagem regressiva de 30 segundos
    cronometro: (t) => {
      if (t.rodando) {
        pararRelogios()
        Object.assign(t, { rodando: false, segundos: 30 })
        return
      }
      Object.assign(t, { rodando: true, terminou: false, segundos: 30 })
      aCada(1000, (dados) => {
        dados.segundos -= 1
        if (dados.segundos > 0) return true
        Object.assign(dados, { segundos: 0, rodando: false, terminou: true })
        return false
      })
    }
  }
}


// Tela 8: teste teórico com cinco perguntas
TELAS.teste = {
  inicial: () => ({ i: 0, escolha: null, confirmada: false, acertos: 0, fim: false }),
  desenhar: (t) => {
    if (t.fim) return resultadoDoTeste(t)
    const q = PERGUNTAS[t.i]
    const letras = ['A', 'B', 'C', 'D']
    // Cores de cada alternativa: normal, escolhida, certa ou errada
    const cores = {
      normal: { fundo: '#FFFFFF', borda: '#D5DBE3', bola: '#F0F3F7', letra: '#0E2A47' },
      escolhida: { fundo: '#E8EFF8', borda: '#0E2A47', bola: '#0E2A47', letra: '#FFFFFF' },
      certa: { fundo: '#E6F4EA', borda: '#2E9E55', bola: '#2E9E55', letra: '#FFFFFF' },
      errada: { fundo: '#FDECEA', borda: '#B42318', bola: '#B42318', letra: '#FFFFFF' }
    }
    const opcoes = q.op.map((texto, i) => {
      let tipo = 'normal'
      if (!t.confirmada && t.escolha === i) tipo = 'escolhida'
      if (t.confirmada && i === q.certa) tipo = 'certa'
      if (t.confirmada && t.escolha === i && i !== q.certa) tipo = 'errada'
      const c = cores[tipo]
      return `<button type="button" role="radio" aria-checked="${t.escolha === i}" class="marcar" style="min-height:54px;align-items:center;background:${c.fundo};border-color:${c.borda};font-size:15px" data-acao="escolher" data-i="${i}">
        <span class="avatar" style="width:28px;height:28px;font-size:13px;background:${c.bola};color:${c.letra}">${letras[i]}</span><span>${texto}</span></button>`
    }).join('')
    const certo = t.confirmada && t.escolha === q.certa
    const nada = !t.confirmada && t.escolha === null
    const ultima = t.i === PERGUNTAS.length - 1
    const rotulo = !t.confirmada ? 'Confirmar resposta' : ultima ? 'Ver resultado' : 'Próxima pergunta'
    const progresso = Math.round(((t.i + (t.confirmada ? 1 : 0)) / PERGUNTAS.length) * 100)
    return `<div class="tela">
      <header style="flex:none;padding:6px 6px 12px;border-bottom:1px solid #E5E9EF;display:flex;flex-direction:column;gap:8px">
        <div class="barra-topo" style="height:44px;padding:0"><a href="#" data-ir="detalhe" class="btn-icone" aria-label="Sair do teste">${icone('fechar')}</a><h1>Teste teórico</h1><span class="vazio44 cinza centro" style="font-size:14px">${t.i + 1}/${PERGUNTAS.length}</span></div>
        <div class="barra" style="flex:none;margin:0 14px"><i style="width:${progresso}%"></i></div>
      </header>
      <main class="rola conteudo junto" data-rola="teste" style="padding:22px 20px">
        <span class="forte" style="font-size:12px;color:#1F5FAD;letter-spacing:0.06em">PRIMEIROS SOCORROS · PERGUNTA ${t.i + 1}</span>
        <h1 style="font-size:21px;line-height:1.3;color:#0E2A47">${q.p}</h1>
        <div role="radiogroup" aria-label="Alternativas" style="display:flex;flex-direction:column;gap:10px">${opcoes}</div>
        ${t.confirmada ? `<div class="msg ${certo ? 'ok' : 'erro'}" role="status"><b>${certo ? 'Resposta certa!' : 'Não foi dessa vez'}</b><br><span style="color:#2A3547">${q.exp}</span></div>` : ''}
      </main>
      <div class="rodape"><button type="button" class="btn" data-acao="avancar" ${nada ? 'disabled' : ''}>${rotulo}</button></div>
    </div>`
  },
  acoes: {
    escolher: (t, d) => { if (!t.confirmada) t.escolha = Number(d.i) },
    // Confirma a resposta, passa para a próxima ou mostra o resultado
    avancar: (t) => {
      const q = PERGUNTAS[t.i]
      if (!t.confirmada) {
        if (t.escolha === null) return
        t.confirmada = true
        if (t.escolha === q.certa) t.acertos += 1
      } else if (t.i === PERGUNTAS.length - 1) {
        t.fim = true
      } else {
        Object.assign(t, { i: t.i + 1, escolha: null, confirmada: false })
      }
    },
    refazer: (t) => { Object.assign(t, { i: 0, escolha: null, confirmada: false, acertos: 0, fim: false }) }
  }
}

// Resultado do teste teórico
function resultadoDoTeste(t) {
  const pct = Math.round((t.acertos / PERGUNTAS.length) * 100)
  const passou = pct >= 70
  const centro = `<b style="font-size:38px;line-height:1">${pct}%</b><span class="cinza pequeno">${t.acertos} de ${PERGUNTAS.length} certas</span>`
  return `<div class="tela">
    <header class="barra-topo linha" style="justify-content:center"><h1>Resultado</h1></header>
    <main class="rola" data-rola="resultado" style="padding:32px 24px 20px;display:flex;flex-direction:column;align-items:center;gap:16px;text-align:center">
      ${anel(pct, 160, passou ? '#2E9E55' : '#F5B700', centro)}
      <h1 style="font-size:24px;color:#0E2A47">${passou ? 'Teste teórico concluído!' : 'Quase lá!'}</h1>
      <p style="font-size:15px;line-height:1.5;color:#2A3547;max-width:310px">${passou ? 'Seu instrutor vai avaliar a parte prática com você e dar a nota final.' : 'Você precisa de 70%. Revise o conteúdo e peça ao instrutor para liberar uma nova tentativa.'}</p>
      ${passou ? `<div class="cartao linha-flex" style="flex-direction:row;text-align:left;width:100%">${insignia('CS-003')}<span style="font-size:14px;line-height:1.4;color:#2A3547">Teste enviado ao instrutor <b>Carlos Lima</b>. Agora faltam a avaliação prática e a nota.</span></div>` : ''}
    </main>
    <div class="rodape" style="border-top:0">
      ${passou ? '<a href="#" data-ir="acompanhar" class="btn">Acompanhar o processo</a>' : '<a href="#" data-ir="licao" class="btn">Revisar a lição</a>'}
      <button type="button" class="btn sec" data-acao="refazer">Refazer o teste</button>
    </div>
  </div>`
}


// Tela 9: acompanhamento das seis etapas
TELAS.acompanhar = {
  inicial: () => ({ feitas: 2 }),
  // Simula as etapas avançando a cada 5 segundos para a apresentação
  aoEntrar: () => {
    aCada(5000, (dados) => {
      dados.feitas += 1
      return dados.feitas < 5
    })
  },
  desenhar: (t) => {
    const passos = [
      ['Planejamento', 'Diretora Marta Reis · instrutor Carlos Lima', 'No calendário do clube · instrutor designado'],
      ['Requisitos', 'Você', 'Teoria estudada · teste teórico 80%'],
      ['Avaliação', 'Instrutor Carlos Lima', 'Prática aprovada · nota 9,0 · na lista de aprovados'],
      ['Registro oficial', 'Secretária Lúcia Ramos', 'Lançada no SGC e no passaporte em 29/10/2026'],
      ['Insígnia', 'Diretora Marta Reis', 'Pedido feito à Associação ou Missão'],
      ['Investidura', 'Cerimônia com o Regional Paulo Mendes', 'Receba a insígnia e coloque na faixa']
    ].map(([titulo, quem, feito], i) => {
      const pronto = i < t.feitas
      const agora = i === t.feitas
      const detalhe = pronto ? feito : agora ? (i === 5 ? 'Agendada para 13/12/2026' : 'Aguardando') : 'Pendente'
      const cor = pronto ? '#1E7A3E' : agora ? '#8A5A00' : '#5E6A7A'
      return `<div class="passo ${pronto ? 'feito' : agora ? 'agora' : ''}">
        <div class="trilho"><span class="marca">${pronto ? icone('check', 14) : i + 1}</span><span class="fio"></span></div>
        <div class="txt"><span style="font-size:15px;font-weight:500;color:${pronto || agora ? '#1A2433' : '#5E6A7A'}">${titulo}</span><span class="cinza pequeno">${quem}</span><span class="pequeno" style="color:${cor}">${detalhe}</span></div></div>`
    }).join('')
    const avisos = {
      3: ['CL', '#1F5FAD', 'Você foi aprovada!', 'Carlos Lima deu nota 9,0 e enviou a lista à secretaria.'],
      4: ['LR', '#2E9E55', 'Registrada no SGC', 'Lúcia Ramos lançou no sistema e no seu passaporte.'],
      5: ['MR', '#7B3FA0', 'Insígnia pedida', 'O clube fez o pedido. Investidura em 13/12.']
    }
    const a = avisos[t.feitas]
    const fim = t.feitas >= 5
    return `<div class="tela">
      ${a ? aviso(...a) : ''}
      ${barraTopo('inicio', 'Acompanhar o processo')}
      <main class="rola conteudo" data-rola="acompanhar">
        <div class="linha-flex" style="gap:14px">${insignia('CS-003', 60)}
          <div class="txt" style="gap:4px"><b style="font-size:18px;color:#0E2A47">Primeiros socorros – básico</b>
            <span class="selo grande ${fim ? 'verde' : 'azul'}" style="align-self:flex-start">${fim ? 'Registrada · investidura em 13/12' : `Etapa ${t.feitas + 1} de 6`}</span></div></div>
        <section>${passos}</section>
      </main>
      <div class="rodape">
        ${fim ? '<a href="#" data-ir="investidura" class="btn amarelo">Ver o dia da investidura</a>' : ''}
        <a href="#" data-ir="passaporte" class="btn sec">Ver meu Passaporte</a>
      </div>
    </div>`
  }
}


// Tela 10: dia da investidura
TELAS.investidura = {
  inicial: () => ({ faixa: false }),
  desenhar: (t) => {
    const linhas = [['REGISTRO', '<span style="font-weight:700">29/10/2026</span>'],['Inst.', 'Carlos Lima · nota 9,0'], ['Reg.', '3'], ['Ass. ou Missão', 'APS']]
      .map(([rotulo, valor]) => `<div class="titulo-linha"><span style="color:#C9D6EA">${rotulo}</span><span>${valor}</span></div>`).join('')
    return `<div class="tela escura">
      <svg class="confete" height="300" viewBox="0 0 390 300" aria-hidden="true">
        <rect x="40" y="70" width="10" height="16" rx="2" fill="#F5B700" transform="rotate(-20 45 78)"/><rect x="330" y="60" width="10" height="16" rx="2" fill="#3FB86A" transform="rotate(25 335 68)"/>
        <rect x="70" y="200" width="8" height="14" rx="2" fill="#D63B3B" transform="rotate(35 74 207)"/><rect x="310" y="210" width="8" height="14" rx="2" fill="#F5B700" transform="rotate(-30 314 217)"/>
        <circle cx="66" cy="140" r="5" fill="#3FB86A"/><circle cx="326" cy="150" r="5" fill="#D63B3B"/></svg>
      <header class="barra-topo" style="position:relative"><a href="#" data-ir="inicio" class="btn-icone claro" aria-label="Fechar">${icone('fechar')}</a></header>
      <main class="rola" data-rola="investidura" style="position:relative;padding:0 22px 16px;display:flex;flex-direction:column;align-items:center;gap:12px;text-align:center">
        <div class="avatar" style="width:156px;height:156px;background:#1D4670"><div class="avatar" style="width:126px;height:126px;background:#FFFFFF;border:6px solid #F5B700">${insignia('CS-003', 94)}</div></div>
        <span class="forte" style="font-size:12px;letter-spacing:0.12em;color:#F5B700">INVESTIDURA · 13/12/2026</span>
        <h1 style="font-family:'Baloo 2',sans-serif;font-size:30px;font-weight:800;line-height:1.05">Parabéns, Ana!</h1>
        <p style="font-size:15px;line-height:1.45;color:#E4EBF5">Você recebeu a insígnia de <b style="color:#FFFFFF">Primeiros socorros – básico</b> e o seu passaporte atualizado.</p>
        <div class="numero" style="width:100%;gap:8px;text-align:left;font-size:13px;padding:12px 14px">
          <span class="forte" style="font-size:11px;letter-spacing:0.08em;color:#F5B700">LINHA DO PASSAPORTE</span>${linhas}
          <div class="titulo-linha" style="border-top:1px solid #2A4C74;padding-top:8px"><span style="color:#C9D6EA">Investidura</span><span>com o Regional Paulo Mendes</span></div></div>
        ${caixaMarcar(t.faixa, `<b style="font-size:15px">${t.faixa ? 'Insígnia costurada na faixa!' : 'Último passo: insígnia na faixa'}</b><span style="font-size:13px;color:#C9D6EA">${t.faixa ? 'Etapa 6 de 6 concluída.' : 'Agora você está autorizada a costurar a insígnia na faixa do uniforme de gala. Marque quando fizer.'}</span>`, 'data-acao="alternar" data-chave="faixa"', 'escuro')}
      </main>
      <div class="rodape sem-linha"><a href="#" data-ir="passaporte" class="btn amarelo">Ver no meu Passaporte</a></div>
    </div>`
  }
}


// Tela 11: classes regulares
TELAS.classes = {
  inicial: () => ({ sel: 2 }),
  desenhar: (t) => {
    const idadeAna = 12
    const c = CLASSES[t.sel]
    const futura = c.idade > idadeAna
    const completa = c.total > 0 && c.feitos === c.total
    const chips = CLASSES.map((k, i) =>
      `<button type="button" role="tab" aria-selected="${i === t.sel}" class="chip ${i === t.sel ? 'ativo' : ''}" style="height:40px;padding:0 14px 0 10px" data-acao="definir" data-chave="sel" data-valor="${i}" data-num="1">${emblema(k.cor, 18)}${k.nome}</button>`).join('')
    const nomesSituacao = { feita: 'Concluída', estudando: 'Estudando', investidura: 'Aguardando', nao: 'Não iniciada' }
    const esp = c.esp.map(([id, nome, st]) =>
      `<a href="#" data-ir="detalhe" class="item">${insignia(id, 38)}<span class="txt"><span style="font-size:14px;font-weight:500">${nome}</span><span style="font-size:12px;color:#5E6A7A">${id}</span></span>${situacao(st, nomesSituacao[st])}</a>`).join('')
    const secoesFeitas = c.total ? Math.round((c.feitos / c.total) * 9) : 0
    const secoes = SECOES.map((nome, i) => {
      const st = i < secoesFeitas ? 'feita' : i === secoesFeitas && !futura ? 'agora' : 'falta'
      const rotulo = { feita: 'Concluída', agora: 'Em andamento', falta: 'Pendente' }[st]
      const cor = { feita: '#1E7A3E', agora: '#8A5A00', falta: '#5E6A7A' }[st]
      const bola = st === 'feita' ? 'background:#2E9E55;border-color:#2E9E55' : st === 'agora' ? 'border-color:#F5B700' : ''
      return `<div class="item" style="min-height:46px;padding:0"><span class="bolinha" style="width:22px;height:22px;border:2px solid #C3CBD6;background:#FFFFFF;${bola}">${st === 'feita' ? icone('check', 12) : ''}</span><span class="txt" style="font-size:14px">${nome}</span><span style="font-size:12px;color:${cor}">${rotulo}</span></div>`
    }).join('')
    const selo = completa ? ['Investida', 'verde'] : futura ? ['Futura', 'cinza'] : ['Atual', 'amarelo']
    return `<div class="tela">
      ${barraTopo('inicio', 'Classes', false)}
      <div class="chips" data-rola="classes-chips" role="tablist" style="border-bottom:1px solid #E5E9EF;padding-bottom:12px">${chips}</div>
      <main class="rola conteudo" data-rola="classes">
        <section class="cartao">
          <div class="linha-flex" style="gap:14px">${emblema(c.cor, 60)}<div class="txt"><b style="font-size:22px;color:#0E2A47">${c.nome}</b><span class="cinza" style="font-size:14px">Classe regular · ${c.idade} anos</span></div><span class="selo grande ${selo[1]}">${selo[0]}</span></div>
          <div class="linha-flex" style="gap:10px"><div class="barra" style="height:7px"><i style="width:${c.total ? Math.round((c.feitos / c.total) * 100) : 0}%;background:${c.cor}"></i></div><span class="pequeno">${c.total ? `${c.feitos}/${c.total} requisitos` : 'Ainda não iniciada'}</span></div>
          ${futura ? `<p class="caixa-suave" style="padding:10px 12px">Você já pode estudar o conteúdo. A classe é investida a partir dos ${c.idade} anos.</p>` : ''}
        </section>
        <section class="secao" style="gap:2px"><h2 style="font-size:16px">Especialidades obrigatórias</h2><p class="cinza pequeno" style="margin-bottom:6px">${c.esp.length} especialidades exigidas para a classe ${c.nome}</p>${esp}</section>
        <section class="secao" style="gap:2px"><h2 style="font-size:16px;margin-bottom:6px">Seções de requisitos</h2>${secoes}</section>
      </main>
      ${navDesbravador('inicio')}
    </div>`
  }
}


// Tela 12: mais opções e perfil
TELAS.mais = {
  inicial: () => ({ avisos: true, lembretes: true, wifi: true }),
  desenhar: (t) => {
    const interruptores = [
      ['avisos', 'Avisos do processo', 'Quando cada etapa avançar'],
      ['lembretes', 'Lembretes de estudo', t.lembretes ? 'Todo dia às 19h' : 'Desligados'],
      ['wifi', 'Baixar só pelo Wi-Fi', 'Economiza o seu plano de dados']
    ].map(([chave, nome, sub]) =>
      `<div class="item"><span class="txt"><span id="rot-${chave}" style="font-size:15px">${nome}</span><span class="sub" style="font-size:12px">${sub}</span></span>
        <button type="button" role="switch" aria-checked="${t[chave]}" aria-labelledby="rot-${chave}" class="interruptor ${t[chave] ? 'ligado' : ''}" data-acao="alternar" data-chave="${chave}"></button></div>`).join('')
    const linha = (tela, ic, texto, extra) =>
      `<a href="#" data-ir="${tela}" class="item">${icone(ic, 22, '#0E2A47')}<span class="txt" style="font-size:15px">${texto}</span>${extra || icone('direita', 18, '#5E6A7A')}</a>`
    const titulo = (texto) => `<h2 class="cinza" style="font-size:13px;letter-spacing:0.06em;margin-bottom:4px">${texto}</h2>`
    return `<div class="tela">
      <header style="flex:none;padding:16px 20px 8px"><h1 style="font-size:24px;color:#0E2A47">Mais</h1></header>
      <main class="rola conteudo" data-rola="mais" style="padding-top:8px">
        <div class="cartao linha-flex" style="flex-direction:row;gap:14px"><span class="avatar" style="width:56px;height:56px;background:#2E9E55;font-size:20px">AS</span>
          <span class="txt"><b style="font-size:17px">Ana Souza</b><span class="cinza pequeno">Pesquisador · 12 anos</span><span class="cinza pequeno">Águias do Vale · Região 3 – Sul</span></span></div>
        <div class="caixa-suave" style="flex-direction:row;align-items:center;gap:12px"><span class="avatar" style="width:40px;height:40px;background:#1F5FAD;font-size:14px">CL</span>
          <span style="flex:1;display:flex;flex-direction:column"><span class="cinza" style="font-size:12px">Meu instrutor</span><b style="font-size:15px;font-weight:500">Carlos Lima</b></span><span class="cinza" style="font-size:12px;text-align:right">libera testes<br>e dá a nota</span></div>
        <section>${titulo('ESTUDOS')}${linha('acompanhar', 'prancheta', 'Acompanhar processos', '<span class="avatar" style="width:20px;height:20px;font-size:12px;background:#1F5FAD">1</span>')}${linha('classes', 'bandeira', 'Minhas classes')}
          <div class="item">${icone('baixar', 22, '#0E2A47')}<span class="txt"><span style="font-size:15px">Conteúdo offline</span><span class="sub" style="font-size:12px">3 classes · 8 especialidades salvas</span></span></div></section>
        <section>${titulo('PREFERÊNCIAS')}${interruptores}</section>
        <section>${titulo('CONTA')}${linha('semConexao', 'sincronizar', 'Sincronizar progresso')}
          <div class="item">${icone('info', 22, '#0E2A47')}<span class="txt" style="font-size:15px">Sobre o DBV Estuda+</span><span class="cinza pequeno">v1.0</span></div>
          <a href="#" data-ir="login" class="item" style="color:#B42318;border-bottom:0">${icone('sair')}<span class="txt" style="font-size:15px;font-weight:500">Sair</span></a></section>
      </main>
      ${navDesbravador('mais')}
    </div>`
  }
}


// Tela 13: sem conexão, mostrando como o app trata o erro
TELAS.semConexao = {
  inicial: () => ({ situacao: 'offline', tentativas: 0 }),
  desenhar: (t) => {
    let topo
    if (t.situacao === 'carregando') {
      topo = `<div role="status" class="centro" style="display:flex;flex-direction:column;align-items:center;gap:16px;padding-top:30px">
        <span class="avatar" style="width:120px;height:120px;background:#F0F3F7;color:#F5B700">${icone('sincronizar', 56)}</span><h1 style="font-size:22px;color:#0E2A47">Tentando conectar</h1></div>`
    } else if (t.situacao === 'ok') {
      topo = `<div role="status" style="display:flex;flex-direction:column;align-items:center;gap:16px;padding-top:10px">${visto(120)}
        <h1 style="font-size:24px;color:#0E2A47">Tudo sincronizado!</h1><p style="font-size:15px;line-height:1.5;color:#2A3547">Seu progresso foi salvo e o seu instrutor já pode ver os seus testes.</p></div>`
    } else {
      topo = `<div style="display:flex;flex-direction:column;align-items:center;gap:16px">
        <span class="avatar" style="width:120px;height:120px;background:#F0F3F7;color:#0E2A47">${icone('semRede', 60)}</span>
        <h1 style="font-size:24px;color:#0E2A47">Você está sem internet</h1>
        <p style="font-size:15px;line-height:1.5;color:#2A3547">Não deu para sincronizar agora. O que você estudou está salvo no celular e é enviado quando a conexão voltar.</p>
        ${t.tentativas ? `<span class="selo vermelho grande" role="status">Ainda sem conexão (${t.tentativas} ${t.tentativas === 1 ? 'tentativa' : 'tentativas'})</span>` : ''}</div>`
    }
    const item = (ok, texto) => `<div class="linha-flex" style="gap:10px;font-size:14px;${ok ? '' : 'color:#5E6A7A'}">${icone(ok ? 'check' : 'fechar', 18, ok ? '#2E9E55' : '#9AA3AF')}${texto}</div>`
    return `<div class="tela">
      ${barraTopo('mais', 'Sincronizar progresso')}
      <main class="rola conteudo centro" data-rola="sem-conexao" style="padding:36px 24px 20px;align-items:center">
        ${topo}
        <section class="cartao" style="width:100%;text-align:left;gap:10px"><h2 style="font-size:14px;color:#0E2A47">Funciona sem internet</h2>
          ${item(true, 'Lições e requisitos baixados')}${item(true, 'Teste teórico e progresso')}${item(false, 'Envio do teste ao instrutor')}</section>
      </main>
      <div class="rodape sem-linha">
        ${t.situacao !== 'ok' ? `<button type="button" class="btn" data-acao="tentar" ${t.situacao === 'carregando' ? 'disabled' : ''}>Tentar novamente</button>` : ''}
        <a href="#" data-ir="especialidades" class="btn sec">${t.situacao === 'ok' ? 'Voltar a estudar' : 'Continuar estudando offline'}</a>
      </div>
    </div>`
  },
  acoes: {
    // Na terceira tentativa a conexão volta, para mostrar o fluxo completo
    tentar: (t) => {
      if (t.situacao === 'carregando') return
      t.situacao = 'carregando'
      depois(1400, (dados) => {
        dados.tentativas += 1
        dados.situacao = dados.tentativas >= 3 ? 'ok' : 'offline'
      })
    }
  }
}


// Tela 14: painel do instrutor
TELAS.instrutor = {
  inicial: () => ({ aba: 'liberar', liberados: {}, enviada: false }),
  desenhar: (t) => {
    const pedidos = [['Ana Souza', 'Pediu liberação há 2 min'], ['Lucas Pereira', 'Pediu liberação ontem']]
    const faltam = pedidos.filter((_, i) => !t.liberados[i]).length
    let corpo = ''
    if (t.aba === 'liberar') {
      corpo = `<p class="cinza pequeno" style="margin:10px 0 4px">Só você libera o teste teórico. Libere quando o Desbravador tiver estudado os requisitos.</p>` +
        pedidos.map(([quem, quando], i) => `<div class="item">${insignia('CS-003', 40)}<span class="txt"><b style="font-size:15px">${quem}</b><span style="font-size:13px">Primeiros socorros – básico</span><span class="sub" style="font-size:12px">${quando}</span></span>
          ${t.liberados[i] ? '<span class="forte pequeno" role="status" style="color:#1E7A3E">✓ Liberado</span>' : `<button type="button" class="btn compacto" data-acao="marcar" data-chave="liberados" data-i="${i}">Liberar</button>`}</div>`).join('')
    }
    if (t.aba === 'avaliar') {
      corpo = '<p class="cinza pequeno" style="margin:10px 0 4px">Testes teóricos concluídos. Avalie a prática e dê a nota.</p>' +
        [['Ana Souza', '80%'], ['Júlia Santos', '90%']].map(([quem, nota]) =>
          `<a href="#" data-ir="avaliacao" class="item">${insignia('CS-003', 40)}<span class="txt" style="gap:3px"><b style="font-size:15px">${quem}</b><span style="font-size:13px">Primeiros socorros – básico</span>
            <span class="etiquetas"><span class="selo verde">Teórico ${nota}</span><span class="selo amarelo">Prática pendente</span></span></span>${icone('direita', 18, '#5E6A7A')}</a>`).join('')
    }
    if (t.aba === 'aprovados') {
      const lista = [['Pedro Henrique', '8,5'], ['Marina Costa', '9,5']].map(([quem, nota]) =>
        `<div class="item">${insignia('CS-003', 36)}<span class="txt"><b style="font-size:14px">${quem}</b><span style="font-size:13px">Primeiros socorros – básico</span></span><b style="color:#1E7A3E">${nota}</b></div>`).join('')
      corpo = `<div style="display:flex;flex-direction:column;gap:12px;padding-top:10px">
        <p class="cinza pequeno">Quem atingiu a nota mínima e entregou a prática. Envie a lista para a secretaria registrar.</p><div>${lista}</div>
        ${t.enviada ? '<p class="msg ok" role="status">✓ Lista enviada à secretária Lúcia Ramos em 29/10/2026.</p>' : '<button type="button" class="btn" data-acao="definir" data-chave="enviada" data-valor="1">Enviar lista à secretaria</button>'}</div>`
    }
    return `<div class="tela"><div class="rola" data-rola="instrutor">
      ${cabecalhoEquipe('INSTRUTOR', '#F5B700;color:#0E2A47', 'Olá, Carlos!', 'Instrutor designado · Águias do Vale', [[faltam, 'para liberar', true], [2, 'para avaliar', true], [2, 'aprovados']])}
      <div style="padding:12px 20px 0"><div class="caixa-suave" style="flex-direction:row;align-items:center;gap:10px;padding:10px 12px;font-size:13px">${insignia('CS-003', 32)}<span>Turma: <b>Primeiros socorros – básico</b> · 8 Desbravadores · designado pela diretora Marta Reis</span></div></div>
      ${abas([['liberar', `Liberar (${faltam})`], ['avaliar', 'Avaliar (2)'], ['aprovados', 'Aprovados']], t.aba, 'aba', 'margem')}
      <main style="padding:4px 20px 24px">${corpo}</main>
    </div></div>`
  }
}


// Tela 15: instrutor avalia a prática e dá a nota
TELAS.avaliacao = {
  inicial: () => ({ vista: 'avaliar', respostas: false, marcados: {}, nota: 9, obs: '', listaEnviada: false }),
  desenhar: (t) => {
    const nota = t.nota.toFixed(1).replace('.', ',')
    if (t.vista === 'aprovada') {
      return `<div class="tela">
        <main class="rola centro" data-rola="aprovada" style="padding:72px 24px 20px;display:flex;flex-direction:column;align-items:center;gap:14px">
          ${visto(92)}<h1 style="font-size:24px;color:#0E2A47">Aprovada com nota ${nota}</h1>
          <p style="font-size:15px;line-height:1.5;color:#2A3547;max-width:300px">A Ana entrou na <b>lista de aprovados</b> de Primeiros socorros – básico.</p>
          <div class="caixa-suave" style="text-align:left;width:100%"><b style="color:#0E2A47">Próximo passo</b><span>Envie a lista de aprovados à secretaria do clube. Ela registra no SGC e no passaporte da Ana.</span></div>
          ${t.listaEnviada ? '<p class="msg ok" role="status" style="width:100%">✓ Lista enviada à secretária Lúcia Ramos.</p>' : ''}
        </main>
        <div class="rodape sem-linha">
          ${t.listaEnviada ? '' : '<button type="button" class="btn" data-acao="definir" data-chave="listaEnviada" data-valor="1">Enviar lista à secretaria</button>'}
          <a href="#" data-ir="instrutor" class="btn sec">Voltar ao painel</a></div>
      </div>`
    }
    if (t.vista === 'reprovada') {
      return `<div class="tela">
        <main class="rola centro" data-rola="reprovada" style="padding:72px 24px 20px;display:flex;flex-direction:column;align-items:center;gap:14px">
          <span class="avatar" style="width:92px;height:92px;background:#FFF4CC;color:#8A5A00">${icone('devolver', 44)}</span>
          <h1 style="font-size:24px;color:#0E2A47">Nova tentativa pedida</h1>
          <p style="font-size:15px;line-height:1.5;color:#2A3547;max-width:300px">A Ana recebe o aviso. Quando ela estiver pronta, você libera o teste de novo.</p></main>
        <div class="rodape sem-linha"><a href="#" data-ir="instrutor" class="btn">Voltar ao painel</a></div>
      </div>`
    }
    const tudoMarcado = PRATICA.every((_, i) => t.marcados[i])
    const passa = t.nota >= 7
    const bloqueado = !tudoMarcado || !passa
    const respostas = RESPOSTAS_ANA.map(([p, r, ok]) =>
      `<div class="linha-flex" style="gap:10px;padding:8px 0;border-bottom:1px solid #E5E9EF;align-items:flex-start"><span class="avatar" style="width:20px;height:20px;font-size:12px;background:${ok ? '#2E9E55' : '#B42318'}">${ok ? '✓' : '✕'}</span>
        <span style="display:flex;flex-direction:column;gap:2px"><span style="font-size:13px">${p}</span><span class="cinza" style="font-size:12px">Respondeu: ${r}</span></span></div>`).join('')
    const pratica = PRATICA.map((texto, i) => caixaMarcar(!!t.marcados[i], texto, `data-acao="marcar" data-chave="marcados" data-i="${i}"`, 'lista')).join('')
    return `<div class="tela">
      ${barraTopo('instrutor', 'Avaliação prática e nota')}
      <main class="rola conteudo" data-rola="avaliacao" style="padding-top:14px">
        <div class="cartao linha-flex" style="flex-direction:row">${insignia('CS-003', 46)}<span class="txt"><b style="font-size:15px">Ana Souza</b><span style="font-size:13px">Primeiros socorros – básico</span><span class="cinza" style="font-size:12px">Pesquisador · Águias do Vale</span></span></div>
        <section class="secao" style="gap:4px"><h3>1. Teste teórico (feito no app)</h3>
          <div class="item" style="min-height:44px;padding:0">${visto(20)}<span class="txt" style="font-size:14px">Resultado</span><b style="font-size:14px">80% · 4 de 5</b></div>
          <button type="button" class="botao-texto" aria-expanded="${t.respostas}" data-acao="alternar" data-chave="respostas">${t.respostas ? 'Ocultar respostas' : 'Ver respostas do teste'} ${icone(t.respostas ? 'cima' : 'baixo', 16)}</button>
          ${t.respostas ? `<div class="caixa-suave" style="padding:4px 12px;gap:0">${respostas}</div>` : ''}</section>
        <section class="secao" style="gap:4px"><h3>2. Teste prático (presencial)</h3><p class="cinza pequeno" style="margin-bottom:4px">Marque o que a Ana demonstrou na sua frente.</p>${pratica}</section>
        <section class="secao" style="gap:8px"><h3>3. Nota final</h3>
          <div class="linha-flex" style="gap:14px">
            <button type="button" class="avatar" style="width:48px;height:48px;border:1.5px solid #D5DBE3;background:#FFFFFF;color:#0E2A47;font-size:24px" data-acao="nota" data-passo="-0.5" aria-label="Diminuir nota">−</button>
            <output aria-live="polite" class="centro" style="flex:1;font-size:40px;font-weight:700;color:${passa ? '#1E7A3E' : '#B42318'}">${nota}</output>
            <button type="button" class="avatar" style="width:48px;height:48px;border:1.5px solid #D5DBE3;background:#FFFFFF;color:#0E2A47;font-size:24px" data-acao="nota" data-passo="0.5" aria-label="Aumentar nota">+</button></div>
          <span class="cinza pequeno centro">Nota mínima 7,0 · só o instrutor ou o diretor podem dar a nota</span></section>
        <div class="campo"><label for="obs">Observação (opcional)</label>
          <textarea id="obs" class="entrada" rows="2" placeholder="Ex.: Ótima demonstração dos sinais vitais." data-campo="obs">${esc(t.obs)}</textarea></div>
        ${bloqueado ? `<p class="msg alerta">${!tudoMarcado ? 'Marque todos os itens do teste prático para aprovar.' : 'A nota está abaixo de 7,0. Para aprovar, a nota precisa ser 7,0 ou mais.'}</p>` : ''}
      </main>
      <div class="rodape">
        <button type="button" class="btn ok" data-acao="definir" data-chave="vista" data-valor="aprovada" ${bloqueado ? 'disabled' : ''}>Aprovar e incluir na lista de aprovados</button>
        <button type="button" class="btn perigo menor" data-acao="definir" data-chave="vista" data-valor="reprovada">Reprovar e pedir nova tentativa</button>
      </div>
    </div>`
  },
  acoes: {
    nota: (t, d) => { t.nota = Math.min(10, Math.max(0, t.nota + Number(d.passo))) }
  }
}


// Tela 16: secretaria registra no SGC e no passaporte
TELAS.secretaria = {
  inicial: () => ({ aba: 'pendentes', sgc: {}, registrados: {} }),
  desenhar: (t) => {
    const aprovados = [['Ana Souza', '9,0'], ['Pedro Henrique', '8,5'], ['Marina Costa', '9,5']]
    const pendentes = aprovados.map((a, i) => [a, i]).filter(([, i]) => !t.registrados[i])
    const novos = aprovados.filter((_, i) => t.registrados[i])
    let corpo
    if (t.aba === 'pendentes') {
      const cartoes = pendentes.map(([[quem, nota], i]) => {
        const lancado = !!t.sgc[i]
        return `<div class="cartao">
          <div class="linha-flex">${insignia('CS-003', 40)}<span class="txt"><b style="font-size:15px">${quem}</b><span style="font-size:13px">Primeiros socorros – básico · nota ${nota}</span></span></div>
          ${caixaMarcar(lancado, '<b>1. Lançado no SGC</b><span class="cinza" style="font-size:12px">Membro, especialidade, instrutor e data. Libera a compra da insígnia.</span>', `data-acao="marcar" data-chave="sgc" data-i="${i}"`)}
          <div style="display:flex;flex-direction:column;gap:6px"><b style="font-size:14px">2. Linha do passaporte</b>
            <div class="caixa-suave" style="gap:6px;padding:10px 12px"><span class="titulo-linha"><span style="font-size:14px;font-weight:500">Primeiros socorros – básico</span><span class="registro feito">REGISTRO: 29/10/2026</span></span>
              <span class="campos-pass" style="grid-template-columns:1.2fr 0.6fr 1fr"><span>Inst. <b>Carlos Lima</b></span><span>Reg. <b>3</b></span><span>Ass./Missão <b style="color:#1F5FAD;font-weight:700">APS</b></span></span></div></div>
          <button type="button" class="btn menor" data-acao="registrar" data-i="${i}" ${lancado ? '' : 'disabled'}>Registrar no passaporte</button></div>`
      }).join('')
      corpo = `<p class="cinza pequeno">Lista de aprovados enviada pelo instrutor Carlos Lima. Para cada um, lance no SGC e registre no passaporte.</p>${cartoes}
        ${pendentes.length ? '' : '<p class="msg ok" role="status">✓ Todos registrados. As insígnias já aparecem para a diretoria fazer o pedido.</p>'}`
    } else {
      const lista = [
        ...novos.map(([quem]) => [quem, 'CS-003', 'Primeiros socorros – básico', '29/10/2026']),
        ['Ana Souza', 'AR-021', 'Mapa e bússola', '20/10/2026'],
        ['Júlia Santos', 'AR-051', 'Acampamento II', '02/09/2026'],
        ['Lucas Pereira', 'EN-003', 'Aves', '15/08/2026']
      ]
      corpo = '<div>' + lista.map(([quem, id, nome, data]) =>
        `<div class="item">${insignia(id, 36)}<span class="txt"><b style="font-size:14px">${quem}</b><span style="font-size:13px">${nome}</span></span><span class="centro" style="font-size:12px;color:#1E7A3E">SGC ✓<br>${data}</span></div>`).join('') + '</div>'
    }
    return `<div class="tela"><div class="rola" data-rola="secretaria">
      ${cabecalhoEquipe('SECRETARIA', '#2E9E55', 'Olá, Lúcia!', 'Secretária · Águias do Vale · Região 3 · APS', [[pendentes.length, 'aprovados para registrar', true], [41 + novos.length, 'registrados em 2026']])}
      ${abas([['pendentes', `Para registrar (${pendentes.length})`], ['registrados', 'Registrados']], t.aba, 'aba', 'margem')}
      <main class="conteudo junto">${corpo}</main>
    </div></div>`
  },
  acoes: {
    registrar: (t, d) => {
      if (!t.sgc[d.i]) return
      t.registrados = Object.assign({}, t.registrados, { [d.i]: true })
    }
  }
}


// Tela 17: diretoria planeja, compra insígnias e faz a investidura
TELAS.diretoria = {
  inicial: () => ({ aba: 'plano', instrutores: { 0: 'Carlos Lima', 1: 'Rui Alves (bombeiro convidado)', 2: 'Joana Prado' }, pedido: 'nenhum', investidura: 'pendente' }),
  desenhar: (t) => {
    let corpo = ''
    if (t.aba === 'plano') {
      corpo = '<p class="cinza pequeno">Calendário de especialidades de 2026. Escolha o instrutor de cada uma.</p>' + CALENDARIO.map((e, i) => {
        const atual = t.instrutores[i] || ''
        const opcoes = INSTRUTORES.map((nome) => `<option value="${nome}" ${nome === atual ? 'selected' : ''}>${nome}</option>`).join('')
        return `<div class="cartao" style="gap:10px">
          <div class="linha-flex">${insignia(e.id, 38)}<span class="txt"><b style="font-size:15px">${e.nome}</b><span class="cinza" style="font-size:12px">${e.periodo} · ${e.turma}</span></span>${e.selo ? `<span class="selo amarelo">${e.selo}</span>` : ''}</div>
          <label class="linha-flex cinza" style="gap:10px;font-size:13px">Instrutor
            <select class="entrada" style="flex:1;height:40px;font-size:14px;padding:0 8px;${atual ? '' : 'border-color:#F5B700'}" data-campo="instrutores.${i}">
              <option value="">Escolher instrutor</option>${opcoes}</select></label></div>`
      }).join('')
    }
    if (t.aba === 'insignias') {
      const total = PEDIDO_INSIGNIAS.reduce((soma, p) => soma + p.qtd, 0)
      const linhas = PEDIDO_INSIGNIAS.map((p) =>
        `<div class="item">${insignia(p.id, 36)}<span class="txt"><b style="font-size:14px">${p.nome}</b><span class="sub" style="font-size:12px">${p.quem}</span></span><b>× ${p.qtd}</b></div>`).join('')
      let pedido = '<button type="button" class="btn" data-acao="definir" data-chave="pedido" data-valor="enviado">Fazer pedido à Associação (APS)</button>'
      if (t.pedido === 'enviado') pedido = '<p class="msg info" role="status">Pedido P-2026-118 enviado · aguardando entrega.</p><button type="button" class="btn sec menor" data-acao="definir" data-chave="pedido" data-valor="recebido">Marcar insígnias como recebidas</button>'
      if (t.pedido === 'recebido') pedido = '<p class="msg ok" role="status">✓ Insígnias recebidas e guardadas para a investidura.</p>'
      corpo = `<p class="cinza pequeno">Especialidades já lançadas no SGC pela secretaria. Com elas, o clube pode comprar as insígnias na Associação ou Missão.</p>
        <div>${linhas}</div><div class="titulo-linha" style="font-size:14px"><span>Total de insígnias</span><b>${total}</b></div>${pedido}`
    }
    if (t.aba === 'investidura') {
      const recebem = RECEBEM.map(([quem, id, nome]) => `<div class="item" style="min-height:50px">${insignia(id, 32)}<span class="txt" style="font-size:14px"><span><b>${quem}</b> · ${nome}</span></span></div>`).join('')
      const podeConcluir = t.pedido === 'recebido'
      corpo = `<div class="cartao" style="gap:6px"><span class="forte" style="font-size:12px;color:#1F5FAD;letter-spacing:0.06em">INVESTIDURA DE FIM DE ANO</span>
          <b style="font-size:18px">13/12/2026 · 19h</b><span style="font-size:14px;color:#2A3547">Igreja do clube · com o Regional Paulo Mendes</span>
          <span class="selo verde grande" style="align-self:flex-start">Regional confirmou presença</span></div>
        <h2 style="font-size:15px;margin-top:4px">Quem recebe insígnia</h2><div>${recebem}</div>
        ${t.investidura === 'feita'
          ? '<p class="msg ok" role="status">✓ Investidura concluída. Os Desbravadores podem costurar as insígnias na faixa.</p>'
          : `<button type="button" class="btn ok" data-acao="definir" data-chave="investidura" data-valor="feita" ${podeConcluir ? '' : 'disabled'}>Concluir investidura</button>
             ${podeConcluir ? '' : '<span class="centro pequeno" style="color:#8A5A00">Marque as insígnias como recebidas na aba Insígnias.</span>'}`}`
    }
    return `<div class="tela"><div class="rola" data-rola="diretoria">
      <header class="cabecalho equipe">
        <div class="linha-logo">${logo()}<div class="papel"><span class="selo-papel" style="background:#7B3FA0">DIRETORIA</span>
          <a href="#" data-ir="login" class="btn-icone claro" aria-label="Sair">${icone('sair')}</a></div></div>
        <div><h1>Olá, Marta!</h1><p>Diretora · Águias do Vale · Região 3 · APS</p></div>
      </header>
      ${abas([['plano', 'Planejamento'], ['insignias', 'Insígnias'], ['investidura', 'Investidura']], t.aba, 'aba', 'margem')}
      <main class="conteudo junto">${corpo}</main>
    </div></div>`
  }
}


// Tela 18: regional confirma as investiduras da região
TELAS.regional = {
  inicial: () => ({ situacoes: { 0: 'aguardando', 1: 'confirmada', 2: 'convite' } }),
  desenhar: (t) => {
    const visual = {
      convite: ['Convite recebido', 'amarelo', '#E5E9EF'],
      confirmada: ['Presença confirmada', 'azul', '#E5E9EF'],
      aguardando: ['Aguardando confirmação', 'amarelo', '#F5B700'],
      realizada: ['Realizada', 'verde', '#2E9E55']
    }
    const cartoes = INVESTIDURAS.map((e, i) => {
      const st = t.situacoes[i]
      const [rotulo, cor, borda] = visual[st]
      let botao = ''
      if (st === 'convite') botao = `<button type="button" class="btn menor" data-acao="mudar" data-i="${i}" data-valor="confirmada">Confirmar presença</button>`
      if (st === 'aguardando') botao = `<button type="button" class="btn ok menor" data-acao="mudar" data-i="${i}" data-valor="realizada">Confirmar investidura realizada</button>`
      return `<div class="cartao" style="border-color:${borda};gap:10px">
        <div class="titulo-linha" style="align-items:flex-start"><span class="txt" style="display:flex;flex-direction:column;gap:2px"><b style="font-size:15px">${e.clube}</b><span style="font-size:14px">${e.quando}</span><span class="cinza" style="font-size:12px">${e.local}</span></span>
          <span class="selo grande ${cor}">${rotulo}</span></div>
        <div class="etiquetas"><span class="selo cinza" style="font-size:12px">${e.insignias} insígnias</span><span class="selo cinza" style="font-size:12px">${e.pessoas} Desbravadores</span><span class="selo verde" style="font-size:12px">Registradas no SGC</span></div>
        ${botao}</div>`
    }).join('')
    const agendadas = INVESTIDURAS.filter((_, i) => t.situacoes[i] === 'convite' || t.situacoes[i] === 'confirmada').length
    const noAno = 112 + INVESTIDURAS.filter((_, i) => t.situacoes[i] === 'realizada').reduce((soma, e) => soma + e.insignias, 0)
    return `<div class="tela"><div class="rola" data-rola="regional">
      ${cabecalhoEquipe('REGIONAL', '#D63B3B', 'Olá, Paulo!', 'Regional · Região 3 – Sul · APS', [[agendadas, 'investiduras agendadas', true], [2, 'clubes na região'], [noAno, 'insígnias em 2026']])}
      <main class="conteudo junto">
        <h2 style="font-size:16px">Investiduras na região</h2>
        <p class="cinza pequeno">As insígnias só são entregues em cerimônia oficial, com a presença do Regional ou de um Líder investido.</p>
        ${cartoes}
      </main>
    </div></div>`
  },
  acoes: {
    mudar: (t, d) => { t.situacoes = Object.assign({}, t.situacoes, { [d.i]: d.valor }) }
  }
}
