// Dados de exemplo usados pelas telas
// Nomes, clubes e números de registro são fictícios

// Contas de demonstração, uma para cada papel do clube
const CONTAS = [
  { papel: 'Desbravadora', nome: 'Ana Souza', senha: 'aguias2026', clube: 'Águias do Vale', tela: 'inicio' },
  { papel: 'Instrutor', nome: 'Carlos Lima', senha: 'instrutor26', clube: 'Águias do Vale', tela: 'instrutor' },
  { papel: 'Secretária', nome: 'Lúcia Ramos', senha: 'secretaria26', clube: 'Águias do Vale', tela: 'secretaria' },
  { papel: 'Diretora do clube', nome: 'Marta Reis', senha: 'diretora26', clube: 'Águias do Vale', tela: 'diretoria' },
  { papel: 'Regional', nome: 'Paulo Mendes', senha: 'regional26', clube: 'Diretoria regional', tela: 'regional' }
]

// Clubes que aparecem para cada região no login
const CLUBES_POR_REGIAO = {
  'Região 1 – Centro': ['Estrela da Manhã', 'Pioneiros da Fé', 'Diretoria regional'],
  'Região 2 – Norte': ['Guardiões', 'Leões do Norte', 'Diretoria regional'],
  'Região 3 – Sul': ['Águias do Vale', 'Sentinelas', 'Diretoria regional']
}

// As seis etapas de uma especialidade, da escolha até a investidura
const ETAPAS = [
  'Planejamento: diretor define e designa o instrutor',
  'Requisitos: teoria e prática',
  'Avaliação: teste e nota do instrutor',
  'Registro: secretaria lança no SGC e no passaporte',
  'Insígnia: clube faz o pedido à Associação',
  'Investidura: insígnia na faixa'
]

// Nome curto de cada área da planilha
const AREAS = {
  CS: 'Saúde', EN: 'Natureza', AR: 'Recreativas', AM: 'Missionárias', 'AM-EB': 'Bíblicos',
  HM: 'Manuais', AP: 'Profissionais', AA: 'Agrícolas', HD: 'Domésticas', AD: 'ADRA', ME: 'Mestrados'
}

// Filtros de área do catálogo, na ordem em que aparecem
const FILTROS_AREA = [
  ['TODAS', 'Todas'], ['EN', 'Natureza'], ['AR', 'Recreativas'], ['CS', 'Saúde'], ['AM', 'Missionárias'],
  ['AM-EB', 'Bíblicos'], ['HM', 'Manuais'], ['AP', 'Profissionais'], ['AA', 'Agrícolas'],
  ['HD', 'Domésticas'], ['AD', 'ADRA'], ['ME', 'Mestrados']
]

// Amostra da planilha Mapeamento de Especialidades 2025
// min é o tempo estimado em minutos e req a classe que exige a especialidade
// st é a situação da Ana: feita, estudando ou investidura (registrada, esperando a cerimônia)
const CATALOGO = [
  { id: 'CS-003', nome: 'Primeiros socorros – básico', area: 'CS', min: 64, req: 'Pesquisador', st: 'estudando' },
  { id: 'AR-052', nome: 'Acampamento III', area: 'AR', min: 112, req: 'Pesquisador' },
  { id: 'EN-003', nome: 'Aves', area: 'EN', min: 34, st: 'feita' },
  { id: 'EN-007', nome: 'Insetos', area: 'EN', min: 28, st: 'feita' },
  { id: 'AR-021', nome: 'Mapa e bússola', area: 'AR', min: 138, req: 'Pioneiro', st: 'investidura' },
  { id: 'CS-042', nome: 'Vacinas', area: 'CS', min: 44, novo: true },
  { id: 'EN-104', nome: 'Primatas', area: 'EN', min: 56, novo: true },
  { id: 'EN-107', nome: 'Bromélias', area: 'EN', min: 80, novo: true },
  { id: 'EN-002', nome: 'Astronomia', area: 'EN', min: 56 },
  { id: 'AR-020', nome: 'Fogueiras e cozinha ao ar livre', area: 'AR', min: 192, req: 'Pioneiro' },
  { id: 'AR-001', nome: 'Arte de acampar', area: 'AR', min: 160, req: 'Amigo', st: 'feita' },
  { id: 'AR-050', nome: 'Acampamento I', area: 'AR', min: 104, req: 'Amigo', st: 'feita' },
  { id: 'CS-012', nome: 'Resgate básico', area: 'CS', min: 122, req: 'Pioneiro' },
  { id: 'AM-054', nome: 'Livro de Daniel', area: 'AM', min: 66, novo: true },
  { id: 'AM-052', nome: 'Apocalipse', area: 'AM', min: 32, st: 'feita' },
  { id: 'AM-006', nome: 'Cidadania cristã', area: 'AM', min: 108, req: 'Pioneiro' },
  { id: 'AM-EB-001', nome: 'Escrituras sagradas', area: 'AM-EB', min: 38, novo: true },
  { id: 'HM-004', nome: 'Música – básico', area: 'HM', min: 58 },
  { id: 'HM-003', nome: 'Desenho e pintura', area: 'HM', min: 80 },
  { id: 'AP-044', nome: 'Computação IV', area: 'AP', min: 394 },
  { id: 'AA-001', nome: 'Avicultura', area: 'AA', min: 120 },
  { id: 'HD-006', nome: 'Orçamento familiar', area: 'HD', min: 102, req: 'Guia' }
]

// Atalhos para montar as linhas do passaporte
const vazia = (nome) => ({ nome, st: 'vazia' })
const investida = (nome, data, nota, dataInvestidura) => ({
  nome, st: 'investida', data, inst: 'Carlos Lima', nota, reg: '3', ass: 'APS', investidura: dataInvestidura
})

// Páginas do passaporte, separadas por área como no livreto
const PASSAPORTE = [
  { area: 'ADRA', itens: [
    vazia('Alfabetização'), vazia('Alívio da fome'), vazia('Avaliação da comunidade'),
    vazia('Desenvolvimento comunitário'), vazia('Resolução de conflitos'),
    vazia('Resposta a emergências e desastres'), vazia('Resposta a emergências e desastres – av.'),
    vazia('Reassentamento de refugiados'), vazia('Serviço comunitário')
  ] },
  { area: 'ARTES E HABILIDADES MANUAIS', itens: [
    vazia('Aeromodelismo'), vazia('Apitos'), vazia('Apitos – avançado'), vazia('Arte com barbante'),
    vazia('Arte de fazer esteiras'), vazia('Desenho e pintura'), vazia('Música – básico')
  ] },
  { area: 'ATIVIDADES MISSIONÁRIAS', itens: [
    investida('Apocalipse', '18/05/2025', '9,5', '14/06/2025'), vazia('Cidadania cristã'), vazia('Livro de Daniel')
  ] },
  { area: 'ATIVIDADES RECREATIVAS', itens: [
    investida('Arte de acampar', '14/09/2024', '9,0', '07/12/2024'),
    investida('Acampamento I', '14/09/2024', '9,0', '07/12/2024'),
    investida('Acampamento II', '20/07/2025', '8,5', '13/12/2025'),
    Object.assign(investida('Mapa e bússola', '20/10/2026', '9,5', ''), { st: 'aguardando' }),
    vazia('Acampamento III')
  ] },
  { area: 'CIÊNCIA E SAÚDE', itens: [
    { nome: 'Primeiros socorros – básico', st: 'estudando' }, vazia('Resgate básico'), vazia('Vacinas')
  ] },
  { area: 'ESTUDO DA NATUREZA', itens: [
    investida('Insetos', '05/10/2025', '9,0', '13/12/2025'), investida('Aves', '12/10/2025', '10', '13/12/2025'),
    vazia('Astronomia'), vazia('Bromélias'), vazia('Primatas')
  ] }
]

// Blocos de identificação, um por ano no clube
const ANOS = [
  { ano: '2024', classe: 'Amigo', clube: 'Águias do Vale', regiao: 'Região 3 – Sul' },
  { ano: '2025', classe: 'Companheiro', clube: 'Águias do Vale', regiao: 'Região 3 – Sul' },
  { ano: '2026', classe: 'Pesquisador', clube: 'Águias do Vale', regiao: 'Região 3 – Sul' },
  { ano: '____', classe: 'Pioneiro', clube: '______________', regiao: '______________', futuro: true },
  { ano: '____', classe: 'Excursionista', clube: '______________', regiao: '______________', futuro: true },
  { ano: '____', classe: 'Guia', clube: '______________', regiao: '______________', futuro: true }
]

// Classes regulares, com as especialidades obrigatórias da planilha
// feitos e total contam os requisitos da classe
const CLASSES = [
  { nome: 'Amigo', idade: 10, cor: '#2F6FD6', feitos: 9, total: 9, esp: [
    ['AR-001', 'Arte de acampar', 'feita'], ['AR-050', 'Acampamento I', 'feita']] },
  { nome: 'Companheiro', idade: 11, cor: '#D63B3B', feitos: 6, total: 12, esp: [
    ['AR-051', 'Acampamento II', 'feita'], ['AR-056', 'Excursionismo pedestre com mochila', 'estudando']] },
  { nome: 'Pesquisador', idade: 12, cor: '#2E9E55', feitos: 3, total: 11, esp: [
    ['CS-003', 'Primeiros socorros – básico', 'estudando'], ['AR-052', 'Acampamento III', 'nao']] },
  { nome: 'Pioneiro', idade: 13, cor: '#8A94A3', feitos: 0, total: 0, esp: [
    ['AM-006', 'Cidadania cristã', 'nao'], ['AR-020', 'Fogueiras e cozinha ao ar livre', 'nao'],
    ['AR-021', 'Mapa e bússola', 'investidura'], ['CS-012', 'Resgate básico', 'nao']] },
  { nome: 'Excursionista', idade: 14, cor: '#7B3FA0', feitos: 0, total: 0, esp: [
    ['AM-010', 'Testemunho juvenil', 'nao'], ['AM-013', 'Temperança', 'nao'], ['AM-016', 'Aventuras com Cristo', 'nao'],
    ['AR-024', 'Vida silvestre', 'nao'], ['AR-047', 'Ordem unida', 'nao'], ['AR-101', 'Pioneirias', 'nao']] },
  { nome: 'Guia', idade: 15, cor: '#E0A800', feitos: 0, total: 0, esp: [
    ['AR-057', 'Liderança campestre', 'nao'], ['HD-006', 'Orçamento familiar', 'nao'], ['AM-015', 'Mordomia', 'nao']] }
]

// Seções de requisitos de cada classe
const SECOES = [
  'Gerais', 'Descoberta espiritual', 'Servindo a outros', 'Desenvolvendo amizade', 'Saúde e aptidão física',
  'Organização e liderança', 'Estudo da natureza', 'Arte de acampar', 'Enriquecendo a vida'
]

// Requisitos de Primeiros socorros usados como exemplo
const REQUISITOS = [
  'Explicar o que são primeiros socorros e qual é o papel de quem presta o atendimento.',
  'Saber avaliar se a cena é segura antes de se aproximar da vítima.',
  'Verificar pulso e respiração de uma pessoa.',
  'Explicar como limpar e proteger um ferimento simples.',
  'Identificar os tipos de queimadura e os primeiros cuidados com cada uma.',
  'Saber quando e como chamar ajuda: SAMU 192 e Bombeiros 193.'
]

// Lições de estudo da especialidade
const LICOES = [
  ['Introdução', 'Importância e princípios', true],
  ['Avaliação da cena', 'Segurança e cuidados', true],
  ['Sinais vitais', 'Como verificar', false],
  ['Ferimentos e curativos', 'Limpeza e proteção', false],
  ['Queimaduras', 'Tipos e primeiros cuidados', false]
]

// Perguntas do teste teórico, com a resposta certa em certa
const PERGUNTAS = [
  { p: 'Qual é a primeira coisa a fazer ao chegar no local de um acidente?', op: ['Mover a vítima imediatamente', 'Avaliar se a cena é segura', 'Dar água para a vítima', 'Tirar fotos para registrar'], certa: 1, exp: 'Antes de ajudar, garanta que você não vai se tornar a próxima vítima.' },
  { p: 'Qual dedo NÃO deve ser usado para medir o pulso?', op: ['Indicador', 'Médio', 'Polegar', 'Anelar'], certa: 2, exp: 'O polegar tem pulsação própria e pode confundir a contagem.' },
  { p: 'Qual é o pulso normal de um adulto em repouso?', op: ['30 a 50 bpm', '60 a 100 bpm', '120 a 160 bpm', '180 a 200 bpm'], certa: 1, exp: 'Em repouso, o coração de um adulto bate entre 60 e 100 vezes por minuto.' },
  { p: 'Você contou 9 respirações em 30 segundos. Quantas são por minuto?', op: ['9', '15', '18', '30'], certa: 2, exp: 'Conte por 30 segundos e multiplique por 2: 9 × 2 = 18 respirações por minuto.' },
  { p: 'Para qual número você liga para chamar o SAMU?', op: ['190', '192', '193', '199'], certa: 1, exp: '192 é o SAMU. 193 são os Bombeiros e 190, a Polícia Militar.' }
]

// Respostas da Ana que o instrutor vê na avaliação
const RESPOSTAS_ANA = [
  ['Primeira coisa a fazer em um acidente?', 'Avaliar se a cena é segura', true],
  ['Qual dedo não usar para medir o pulso?', 'Polegar', true],
  ['Pulso normal de um adulto em repouso?', '60 a 100 bpm', true],
  ['9 respirações em 30 s equivalem a', '15 por minuto', false],
  ['Número do SAMU?', '192', true]
]

// Itens que o instrutor confere na prova prática
const PRATICA = [
  'Avaliou a segurança da cena em uma simulação',
  'Verificou pulso e respiração corretamente',
  'Explicou como acionar o SAMU (192)'
]

// Instrutores que a diretoria pode escolher
const INSTRUTORES = ['Carlos Lima', 'Joana Prado', 'Rui Alves (bombeiro convidado)', 'Marta Reis']

// Calendário de especialidades do clube em 2026
const CALENDARIO = [
  { id: 'CS-003', nome: 'Primeiros socorros – básico', periodo: 'Ago a Out', turma: '8 Desbravadores', selo: 'Obrigatória · Pesquisador' },
  { id: 'CS-012', nome: 'Resgate básico', periodo: 'Set a Nov', turma: '10 Desbravadores', selo: 'Obrigatória · Pioneiro' },
  { id: 'AR-051', nome: 'Acampamento II', periodo: 'Jul a Set', turma: '6 Desbravadores', selo: 'Obrigatória · Companheiro' },
  { id: 'HM-004', nome: 'Música – básico', periodo: 'Fev a Abr 2027', turma: 'inscrições abertas', selo: '' }
]

// Insígnias registradas no SGC que o clube precisa comprar
const PEDIDO_INSIGNIAS = [
  { id: 'CS-003', nome: 'Primeiros socorros – básico', quem: 'Ana Souza, Pedro Henrique, Marina Costa', qtd: 3 },
  { id: 'AR-021', nome: 'Mapa e bússola', quem: 'Ana Souza', qtd: 1 },
  { id: 'AR-051', nome: 'Acampamento II', quem: 'Júlia Santos', qtd: 1 }
]

// Quem recebe insígnia na próxima investidura do clube
const RECEBEM = [
  ['Ana Souza', 'CS-003', 'Primeiros socorros – básico'],
  ['Ana Souza', 'AR-021', 'Mapa e bússola'],
  ['Pedro Henrique', 'CS-003', 'Primeiros socorros – básico'],
  ['Marina Costa', 'CS-003', 'Primeiros socorros – básico'],
  ['Júlia Santos', 'AR-051', 'Acampamento II']
]

// Investiduras agendadas na região
const INVESTIDURAS = [
  { clube: 'Sentinelas', quando: '26/10/2026 · 18h', local: 'Igreja do Jardim Sul', insignias: 14, pessoas: 9 },
  { clube: 'Águias do Vale', quando: '13/12/2026 · 19h', local: 'Igreja do clube', insignias: 5, pessoas: 4 },
  { clube: 'Sentinelas', quando: '20/12/2026 · 18h', local: 'Igreja do Jardim Sul', insignias: 8, pessoas: 6 }
]
