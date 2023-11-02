import type { PoliticalParty } from "@/interfaces";
import type { Uf } from "@/interfaces";

const columns = [
  { name: 'ID', uid: 'id' },
  { name: 'NOME', uid: 'nome' },
  { name: 'PARTIDO', uid: 'partido' },
  { name: 'ESTADO', uid: 'estado' },
  { name: 'AVATAR', uid: 'urlFoto' },
  { name: 'EMAIL', uid: 'email' },
  { name: 'STATUS', uid: 'status' },
  { name: 'AÇÕES', uid: 'actions' },
];

const ufs: Uf[] = [
  { name: 'Acre', uid: 'AC' },
  { name: 'Alagoas', uid: 'AL' },
  { name: 'Amapá', uid: 'AP' },
  { name: 'Amazonas', uid: 'AM' },
  { name: 'Bahia', uid: 'BA' },
  { name: 'Ceará', uid: 'CE' },
  { name: 'Distrito Federal', uid: 'DF' },
  { name: 'Espírito Santo', uid: 'ES' },
  { name: 'Goiás', uid: 'GO' },
  { name: 'Maranhão', uid: 'MA' },
  { name: 'Mato Grosso', uid: 'MT' },
  { name: 'Mato Grosso do Sul', uid: 'MS' },
  { name: 'Minas Gerais', uid: 'MG' },
  { name: 'Pará', uid: 'PA' },
  { name: 'Paraíba', uid: 'PB' },
  { name: 'Paraná', uid: 'PR' },
  { name: 'Pernambuco', uid: 'PE' },
  { name: 'Piauí', uid: 'PI' },
  { name: 'Rio de Janeiro', uid: 'RJ' },
  { name: 'Rio Grande do Norte', uid: 'RN' },
  { name: 'Rio Grande do Sul', uid: 'RS' },
  { name: 'Rondônia', uid: 'RO' },
  { name: 'Roraima', uid: 'RR' },
  { name: 'Santa Catarina', uid: 'SC' },
  { name: 'São Paulo', uid: 'SP' },
  { name: 'Sergipe', uid: 'SE' },
  { name: 'Tocantins', uid: 'TO' },
];

const parties: PoliticalParty[] = [
  {
    id: 36898,
    uid: 'AVANTE',
    name: 'Avante',
    uri: 'https://dadosabertos.camara.leg.br/api/v2/partidos/36898',
  },
  {
    id: 37905,
    uid: 'CIDADANIA',
    name: 'Cidadania',
    uri: 'https://dadosabertos.camara.leg.br/api/v2/partidos/37905',
  },
  {
    id: 36899,
    uid: 'MDB',
    name: 'Movimento Democrático Brasileiro',
    uri: 'https://dadosabertos.camara.leg.br/api/v2/partidos/36899',
  },
  {
    id: 37901,
    uid: 'NOVO',
    name: 'Partido Novo',
    uri: 'https://dadosabertos.camara.leg.br/api/v2/partidos/37901',
  },
  {
    id: 37907,
    uid: 'PATRIOTA',
    name: 'Patriota',
    uri: 'https://dadosabertos.camara.leg.br/api/v2/partidos/37907',
  },
  {
    id: 36779,
    uid: 'PCdoB',
    name: 'Partido Comunista do Brasil',
    uri: 'https://dadosabertos.camara.leg.br/api/v2/partidos/36779',
  },
  {
    id: 36786,
    uid: 'PDT',
    name: 'Partido Democrático Trabalhista',
    uri: 'https://dadosabertos.camara.leg.br/api/v2/partidos/36786',
  },
  {
    id: 37906,
    uid: 'PL',
    name: 'Partido Liberal',
    uri: 'https://dadosabertos.camara.leg.br/api/v2/partidos/37906',
  },
  {
    id: 36896,
    uid: 'PODE',
    name: 'Podemos',
    uri: 'https://dadosabertos.camara.leg.br/api/v2/partidos/36896',
  },
  {
    id: 37903,
    uid: 'PP',
    name: 'Progressistas',
    uri: 'https://dadosabertos.camara.leg.br/api/v2/partidos/37903',
  },
  {
    id: 36832,
    uid: 'PSB',
    name: 'Partido Socialista Brasileiro',
    uri: 'https://dadosabertos.camara.leg.br/api/v2/partidos/36832',
  },
  {
    id: 36834,
    uid: 'PSD',
    name: 'Partido Social Democrático',
    uri: 'https://dadosabertos.camara.leg.br/api/v2/partidos/36834',
  },
  {
    id: 36835,
    uid: 'PSDB',
    name: 'Partido da Social Democracia Brasileira',
    uri: 'https://dadosabertos.camara.leg.br/api/v2/partidos/36835',
  },
  {
    id: 36839,
    uid: 'PSOL',
    name: 'Partido Socialismo e Liberdade',
    uri: 'https://dadosabertos.camara.leg.br/api/v2/partidos/36839',
  },
  {
    id: 36844,
    uid: 'PT',
    name: 'Partido dos Trabalhadores',
    uri: 'https://dadosabertos.camara.leg.br/api/v2/partidos/36844',
  },
];

// need to get secretaries salary by type, there is no place to get it dinamicaly

const salaries = [
  {
    type: 'SP01',
    value: 'R$ 12.126,54',
  },
  { type: 'SP01', value: 'R$ 12.126,54' },
  { type: 'SP02', value: 'R$ 12.126,54' },
  { type: 'SP03', value: 'R$ 12.126,54' },
  { type: 'SP04', value: 'R$ 12.126,54' },
  { type: 'SP05', value: 'R$ 12.126,54' },
  { type: 'SP06', value: 'R$ 12.126,54' },
  { type: 'SP07', value: 'R$ 12.126,54' },
  { type: 'SP08', value: 'R$ 12.126,54' },
  { type: 'SP09', value: 'R$ 12.126,54' },
  { type: 'SP10', value: 'R$ 12.126,54' },
  { type: 'SP11', value: 'R$ 12.126,54' },
  { type: 'SP12', value: 'R$ 12.126,54' },
  { type: 'SP13', value: 'R$ 12.126,54' },
  { type: 'SP14', value: 'R$ 12.126,54' },
  { type: 'SP15', value: 'R$ 12.126,54' },
  { type: 'SP16', value: 'R$ 12.126,54' },
  { type: 'SP17', value: 'R$ 12.126,54' },
  { type: 'SP18', value: 'R$ 12.126,54' },
  { type: 'SP19', value: 'R$ 12.126,54' },
  { type: 'SP20', value: 'R$ 12.126,54' },
  { type: 'SP21', value: 'R$ 12.126,54' },
  { type: 'SP22', value: 'R$ 12.126,54' },
  { type: 'SP23', value: 'R$ 12.126,54' },
  { type: 'SP24', value: 'R$ 12.126,54' },
  { type: 'SP25', value: 'R$ 12.126,54' },
];

export { columns, ufs, parties };
