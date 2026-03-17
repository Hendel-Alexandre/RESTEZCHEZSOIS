export interface Service {
  id: string
  title: string
  subtitle: string
  image: string
  items: string[]
}

export interface Value {
  id: string
  number: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    id: 'aide-domicile',
    title: 'Soins \u00e0 domicile',
    subtitle: 'Un accompagnement professionnel dans le confort de votre foyer.',
    image: 'https://pub-85aceffc7f094aeeb5f4e65c0c3d3e04.r2.dev/photos/nurse%20inside.png',
    items: [
      'Rappels de m\u00e9dicaments et suivi quotidien',
      'Accompagnement en fin de vie',
      'Soutien sp\u00e9cialis\u00e9 pour les personnes atteintes d\u2019Alzheimer',
      'Aide lors des exercices de r\u00e9habilitation',
      'Surveillance et veille de nuit',
      'Soutien \u00e0 la mobilit\u00e9 et aux d\u00e9placements int\u00e9rieurs',
      'Aide au bain, \u00e0 la douche et \u00e0 l\u2019hygi\u00e8ne personnelle',
      'Assistance pour les t\u00e2ches m\u00e9nag\u00e8res l\u00e9g\u00e8res',
      'Soutien aux personnes vivant avec un handicap physique ou intellectuel',
      'Pr\u00e9paration et accompagnement lors des repas',
      'Pr\u00e9sence rassurante et compagnie bienveillante',
      'Soutien postnatal pour les nouvelles familles',
      'Aide aux nouveaux parents dans les premiers mois',
      'Soins m\u00e8re et nourrisson \u00e0 domicile',
    ],
  },
  {
    id: 'soins-infirmiers',
    title: 'Soins infirmiers',
    subtitle: 'Des soins m\u00e9dicaux professionnels directement chez vous.',
    image: 'https://pub-85aceffc7f094aeeb5f4e65c0c3d3e04.r2.dev/photos/service1.jpg',
    items: [
      'Bilan et \u00e9valuation compl\u00e8te de l\u2019\u00e9tat de sant\u00e9',
      'Suivi infirmier r\u00e9gulier et personnalis\u00e9',
      'Conseils cliniques et \u00e9ducation th\u00e9rapeutique',
      'Soins palliatifs et accompagnement en fin de vie',
      'Prise en charge des patients atteints d\u2019Alzheimer',
      'Soins et traitement des plaies',
      'Soins de stomie et entretien',
      'Changement de pansements',
      'Irrigation et nettoyage des oreilles',
      'Pr\u00e9l\u00e8vements sanguins \u00e0 domicile',
      'Suivi et encadrement du diab\u00e8te',
      'Surveillance de la tension art\u00e9rielle',
      'Monitorage continu de la pression art\u00e9rielle',
    ],
  },
  {
    id: 'accompagnement',
    title: 'Accompagnement ext\u00e9rieur',
    subtitle: 'Parce que la vie ne s\u2019arr\u00eate pas \u00e0 la porte de chez soi.',
    image: 'https://pub-85aceffc7f094aeeb5f4e65c0c3d3e04.r2.dev/photos/outside%20nurse.png',
    items: [
      'Transport et pr\u00e9sence lors des consultations m\u00e9dicales',
      'Participation aux activit\u00e9s culturelles et de loisirs',
      'Soutien \u00e0 la mobilit\u00e9 lors des sorties',
      'Aide pour les courses et les emplettes du quotidien',
      'Promenades et compagnie \u00e0 l\u2019ext\u00e9rieur',
      'P\u00e9riodes de r\u00e9pit pour les proches aidants',
    ],
  },
]

export const values: Value[] = [
  {
    id: '1',
    number: '01',
    title: 'Dimension humaine',
    description:
      'Chaque personne est unique. Nous pla\u00e7ons l\u2019humain au coeur de chacune de nos interventions avec respect et dignit\u00e9.',
  },
  {
    id: '2',
    number: '02',
    title: 'Communication efficace',
    description:
      'Nous maintenons un dialogue constant avec les clients, les familles et les \u00e9quipes m\u00e9dicales pour assurer une prise en charge optimale.',
  },
  {
    id: '3',
    number: '03',
    title: 'Simplicit\u00e9',
    description:
      'Des d\u00e9marches simples et transparentes. Nous rendons l\u2019acc\u00e8s aux soins \u00e0 domicile facile et accessible pour tous.',
  },
  {
    id: '4',
    number: '04',
    title: 'Personnel de qualit\u00e9',
    description:
      'Tous nos intervenants sont form\u00e9s, v\u00e9rifi\u00e9s et passionn\u00e9s par leur m\u00e9tier. Vous m\u00e9ritez le meilleur soin possible.',
  },
  {
    id: '5',
    number: '05',
    title: 'Gamme adapt\u00e9e',
    description:
      'Une large gamme de services personnalis\u00e9s pour r\u00e9pondre \u00e0 chaque besoin, de l\u2019aide quotidienne aux soins sp\u00e9cialis\u00e9s.',
  },
  {
    id: '6',
    number: '06',
    title: 'Disponibilit\u00e9 7/7',
    description:
      'Nous sommes disponibles tous les jours de la semaine pour vous offrir flexibilit\u00e9 et soutien quand vous en avez le plus besoin.',
  },
]
