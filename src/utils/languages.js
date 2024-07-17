import js from "../images/languages/js.png";
import ts from "../images/languages/ts.png";
import html from "../images/languages/html.png";
import css from "../images/languages/css.png";
import react from "../images/languages/reactjs.png";
import vite from "../images/languages/Vitejs.png";
import nodejs from "../images/languages/nodejs.png";
import expresjs from "../images/languages/express.png";
import mongoDB from "../images/languages/mongoDB.png";
import mySql from "../images/languages/mysql.png";
import postgres from "../images/languages/postgresql.png";
import solidity from "../images/languages/solidity.png";
import web3 from "../images/languages/web3.png";
import s3 from "../images/languages/aws-s3.png";
import cognito from "../images/languages/aws-cognito.png";
import flutter from "../images/languages/flutter.png";
import git from "../images/languages/git.png";
import nfc from "../images/languages/nfc.png";
import java from "../images/languages/java.png";
import dart from "../images/languages/dart.png";
import npm from "../images/languages/npm.png";
import webpack from "../images/languages/webpack.png";
import babel from "../images/languages/babel.png";
import etherum from "../images/languages/ethereum.png";
import truffle from "../images/languages/truffle.png";
import chakraui from "../images/languages/chrakra-ui.png";
import github from "../images/languages/github.png";

import authentical_team from "../images/authentical_team.png"
import authentical from "../images/authentical_login.png"
import vishnuproteins from "../images/vishnuproteins.png"


export const programmingLanguage = [
  { name: 'JavaScript', icon: js },
  { name: 'TypeScript', icon: ts },
  { name: 'HTML', icon: html },
  { name: 'CSS', icon: css },
  { name: 'Solidity', icon: solidity },
  { name: 'Java', icon: java },
  { name: 'Dart', icon: dart }
];

export const framework = [
  { name: 'React', icon: react },
  { name: 'Flutter', icon: flutter },
  { name: 'Express', icon: expresjs }
];

export const Database = [
  { name: 'MongoDB', icon: mongoDB },
  { name: 'MySQL', icon: mySql },
  { name: 'PostgreSQL', icon: postgres }
];

export const tools = [
  { name: 'Node.js', icon: nodejs },
  { name: 'Vite', icon: vite },
  { name: 'npm', icon: npm },
  { name: 'Webpack', icon: webpack },
  { name: 'Babel', icon: babel }
];

export const blockchainTechnology = [
  { name: 'Web3', icon: web3 },
  { name: 'Ethereum', icon: etherum },
  { name: 'Truffle', icon: truffle }
];

export const cloudServices = [
  { name: 'AWS S3', icon: s3 },
  { name: 'AWS Cognito', icon: cognito }
];

export const libraries = [
  { name: 'Chakra UI', icon: chakraui }
];

export const versionControl = [
  { name: 'Git', icon: git },
  { name: 'GitHub', icon: github }
];

export const hardware = [
  { name: 'NFC', icon: nfc }
];

export const projects = [
  {
    "title": "Authentical",
    "imageSrc": authentical,
    "description": "This is a project made to learn the latest languages by building an app.",
    "skills": ["React", "Vite", "S3", "Cognito", "Typescript"],
    "isLive": "true",
    "demo": "https://www.authentical.co/team",
    "source": ""
  },
  {
    "title": "VishnuProteins",
    "imageSrc": vishnuproteins,
    "description": "This is a project made to learn the latest languages by building an app.",
    "skills": ["React", "Vite"],
    "isLive": "true",
    "demo": "https://vishnuproteins.com",
    "source": ""
  },
]

export const experince = [
  {
    "role": "Associate Software Engineer",
    "organisation": "Authentical",
    "startDate": "Aug, 2023",
    "endDate": "Present",
    "experiences": ["Deployed Smart Contracts", "Implemented REST API", "Developed Flutter App", "Integrated NFC Technology"],
    "imageSrc": authentical_team,
  }
]

export const all = [
  { name: 'Programming Languages', data: programmingLanguage },
  { name: 'Framework', data: framework },
  { name: 'Databases', data: Database },
  { name: 'Tools', data: tools },
  { name: 'Blockchain Services', data: blockchainTechnology },
  { name: 'Cloud Services', data: cloudServices },
  { name: 'Libraries', data: libraries },
  { name: 'Version Control', data: versionControl },
  { name: 'Hardware', data: hardware },
]