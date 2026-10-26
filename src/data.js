// Remplace les exemples et liens fictifs avant publication.
export const profile = {
  firstName: 'Mamadou Saidou', lastName: 'Keita', role: 'Développeur · Data Analyst',
  location: 'Dakar, Sénégal', email: 'ton.email@example.com',
  github: 'https://github.com/TON-PSEUDO', linkedin: 'https://www.linkedin.com/in/TON-PROFIL/',
  cvPath: `${import.meta.env.BASE_URL}documents/cv.pdf`,
  intro: 'Je conçois des expériences web et transforme les données en solutions utiles, claires et mesurables.'
}
export const skills = [
 {category:'Frontend',items:['React','JavaScript','HTML5 / CSS3','Tailwind CSS','Framer Motion']},
 {category:'Backend & outils',items:['FastAPI','Python','PostgreSQL','Docker','Git / GitHub']},
 {category:'Data & BI',items:['Power BI','Pandas','NumPy','Scikit-learn','SQL']}
]
export const projects = [
 {
  number:'01',title:'Sales Dashboard',
  category:'Business Intelligence',
  description:'Tableau de bord interactif pour suivre recettes, dépenses et performances par région et service.',
  tags:['Power BI','DAX','Data Visualization'],
  accent:'violet',
  image: 'images/keitashop.png',
  github:'https://github.com/Saidou-L2I',
  demo:''
},

 {number:'02',title:'MediScan Africa',category:'Machine Learning',description:'Projet de machine learning explorant la préparation des données et la classification sur des jeux de données médicaux.',tags:['Python','Scikit-learn','XGBoost'],accent:'blue',github:'https://github.com/Saidou-L2I',demo:''},
 {number:'03',title:'StageFlow',category:'Développement API',description:'API de gestion de workflow avec FastAPI, PostgreSQL et Docker.',tags:['FastAPI','PostgreSQL','Docker'],accent:'pink',github:'https://github.com/Saidou-L2I',demo:''},
 
 {
  number:'04',title:'Bitcoin EUR Analysis',
  category:'Data Analysis',
  description:'Exploration de l’historique du Bitcoin en euros et préparation de séries chronologiques.',
  tags:['Python','Pandas','yfinance'],
  accent:'cyan',
  github:'https://github.com/Saidou-L2I',demo:''},

  {
    number: '05',
    title: 'HESTIMA',
    category: 'Site institutionnel',
    description: 'Site web du Groupe HESTIMA pour présenter ses formations et faciliter les demandes de renseignements.',
    tags: ['WordPress', 'Astra', 'Elementor'],
    accent: 'violet',
    image: 'images/hestima.png',
    demo: 'https://hestima.sn/',
    github: ''
  }

]
export const journey = 
[
  {
    date: 'Aujourd’hui',
    title: 'Projets Data & Développement',
    place: 'Projets personnels',
    description:
      'Réalisation de tableaux de bord interactifs, analyses de données et applications web.'
  },
  {
    date: 'En cours',
    title: 'Master Data Science & Intelligence Artificielle',
    place: 'Groupe ISI Dakar',
    description:
      'Formation spécialisée en science des données, intelligence artificielle et Machine Learning.',
    website: 'https://www.groupeisi.com/'
  },
  {
    date: 'Licence',
    title: 'Licence en Ingénierie Informatique',
    place: 'Université Assane Seck de Ziguinchor',
    description:
      'Formation en informatique, développement logiciel et systèmes informatiques.'
  },
  {
    date: 'Expérience',
    title: 'Formateur en informatique',
    place: 'Groupe HESTIMА Dakar',
    description:
      'Formation et accompagnement des apprenants dans l’utilisation des outils informatiques.'
  }
]
