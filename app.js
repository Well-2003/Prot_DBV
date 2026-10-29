// Controle do app: estado, navegação, cliques e relógios

const app = document.getElementById('app')

// Estado atual: tela aberta, dados dessa tela e quem entrou
const estado = { tela: 'boasVindas', t: {}, usuario: null }

// Relógios ligados pela tela aberta, desligados ao trocar de tela
let relogios = []

// Abre uma tela do zero
function ir(tela) {
  pararRelogios()
  estado.tela = tela
  estado.t = TELAS[tela].inicial ? TELAS[tela].inicial() : {}
  app.innerHTML = ''
  desenhar()
  if (TELAS[tela].aoEntrar) TELAS[tela].aoEntrar(estado.t)
}

// Desliga todos os relógios da tela
function pararRelogios() {
  relogios.forEach((id) => {
    clearTimeout(id)
    clearInterval(id)
  })
  relogios = []
}

// Roda uma função uma vez, depois de alguns milissegundos
function depois(ms, funcao) {
  const dados = estado.t
  relogios.push(setTimeout(() => {
    funcao(dados)
    desenhar()
  }, ms))
}

// Roda uma função várias vezes, até ela devolver false
function aCada(ms, funcao) {
  const dados = estado.t
  const id = setInterval(() => {
    if (funcao(dados) === false) clearInterval(id)
    desenhar()
  }, ms)
  relogios.push(id)
}

// Desenha a tela de novo, sem perder a rolagem nem o cursor do campo
function desenhar() {
  const rolagens = {}
  app.querySelectorAll('[data-rola]').forEach((el) => {
    rolagens[el.dataset.rola] = [el.scrollTop, el.scrollLeft]
  })
  const foco = document.activeElement
  const idFoco = foco && app.contains(foco) ? foco.id : ''
  let selecao = null
  try {
    if (idFoco) selecao = [foco.selectionStart, foco.selectionEnd]
  } catch (erro) {
    selecao = null
  }

  app.innerHTML = TELAS[estado.tela].desenhar(estado.t)

  app.querySelectorAll('[data-rola]').forEach((el) => {
    const r = rolagens[el.dataset.rola]
    if (r) {
      el.scrollTop = r[0]
      el.scrollLeft = r[1]
    }
  })
  if (idFoco) {
    const campo = document.getElementById(idFoco)
    if (campo) {
      campo.focus()
      try {
        if (selecao && selecao[0] !== null) campo.setSelectionRange(selecao[0], selecao[1])
      } catch (erro) {
        // Alguns tipos de campo não aceitam posição de cursor
      }
    }
  }
}

// Ações que servem para qualquer tela
const ACOES_GERAIS = {
  // Guarda um valor, por exemplo qual aba está aberta
  definir: (t, d) => {
    t[d.chave] = d.num ? Number(d.valor) : d.valor
  },
  // Liga ou desliga um valor de sim ou não
  alternar: (t, d) => {
    t[d.chave] = !t[d.chave]
  },
  // Liga ou desliga um item de uma lista, como as caixas de marcar
  marcar: (t, d) => {
    const atual = t[d.chave] || {}
    t[d.chave] = Object.assign({}, atual, { [d.i]: !atual[d.i] })
  }
}

// Guarda o valor de um campo, aceitando nomes como instrutores.1
function guardarCampo(dados, caminho, valor) {
  const partes = caminho.split('.')
  const ultima = partes.pop()
  let alvo = dados
  partes.forEach((parte) => {
    alvo[parte] = Object.assign({}, alvo[parte])
    alvo = alvo[parte]
  })
  alvo[ultima] = valor
}

// Cliques em links de navegação e em botões com ação
app.addEventListener('click', (evento) => {
  const alvo = evento.target.closest('[data-ir], [data-acao]')
  if (!alvo || !app.contains(alvo) || alvo.disabled) return
  evento.preventDefault()

  if (alvo.dataset.ir) {
    if (alvo.dataset.ir === 'login') estado.usuario = null
    ir(alvo.dataset.ir)
    return
  }

  const tela = TELAS[estado.tela]
  const nome = alvo.dataset.acao
  const acao = (tela.acoes && tela.acoes[nome]) || ACOES_GERAIS[nome]
  if (!acao) return
  const telaAntes = estado.tela
  acao(estado.t, alvo.dataset)
  if (estado.tela === telaAntes) desenhar()
})

// Digitação em campos de texto e escolha em listas
app.addEventListener('input', (evento) => {
  const campo = evento.target.dataset.campo
  if (!campo) return
  guardarCampo(estado.t, campo, evento.target.value)
  const extra = TELAS[estado.tela].aoMudar
  if (extra && extra[campo]) extra[campo](estado.t)
  desenhar()
})

// Ajusta o tamanho do celular para caber na janela do computador
function ajustarTamanho() {
  const moldura = document.querySelector('.moldura')
  const encaixe = document.querySelector('.encaixe')
  if (window.innerWidth <= 520) {
    moldura.style.transform = ''
    encaixe.style.width = ''
    encaixe.style.height = ''
    return
  }
  const escala = Math.min(1, (window.innerHeight - 96) / 868, (window.innerWidth - 32) / 414)
  moldura.style.transform = `scale(${escala})`
  encaixe.style.width = `${414 * escala}px`
  encaixe.style.height = `${868 * escala}px`
}

// Botão de recomeçar do topo da página
document.getElementById('recomecar').addEventListener('click', () => {
  estado.usuario = null
  ir('boasVindas')
})

window.addEventListener('resize', ajustarTamanho)
ajustarTamanho()
ir('boasVindas')
