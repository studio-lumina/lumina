import coverChanel from '../assets/covers/cover_chanel.jpg'
import coverModeEtSport from '../assets/covers/cover_modeetsport.jpg'
import coverQiriness from '../assets/covers/cover_qiriness.jpg'
import coverScentception from '../assets/covers/cover_scentception.jpg'
import coverGrigri from '../assets/covers/cover_grigri.png'
import coverLaneige from '../assets/covers/cover_laneige.jpg'

const projects = [
  {
    name: 'Laneige',
    link: 'laneige',
    image: coverLaneige,
    type: ['Digital', 'Vidéo'],
    date: '2025',
    details: [
      {
        type: 'Veille',
        descriptions: ['Benchmarks', 'Brainstorm', 'Moodboards'],
      },
      {
        type: 'Digital',
        descriptions: [
          'Landing Pages',
          'Bannières Web',
          'Publications et Stories Instagram',
        ],
      },
      {
        type: 'Vidéo',
        descriptions: [
          'Pré-Prod',
          'Post-Prod avec Montage Vidéo & Motion Design',
        ],
      },
    ],
  },
  {
    name: 'Qiriness',
    link: 'qiriness',
    image: coverQiriness,
    type: ['Digital', 'Vidéo', 'Print'],
    date: '2022 - 2023',
    details: [
      {
        type: 'Veille',
        descriptions: ['Benchmarks', 'Brainstorm', 'Moodboards'],
      },
      {
        type: 'Digital',
        descriptions: [
          'Landing Pages',
          'Bannières Web',
          'Stories Instagram',
          'Pictogrammes',
        ],
      },
      {
        type: 'Vidéo',
        descriptions: [
          'Pré-Prod',
          'Production',
          'Post-Prod avec Montage Vidéo & Motion Design',
        ],
      },
      {
        type: 'Print',
        descriptions: ['Packagings', 'PLV', 'Mises en Page'],
      },
    ],
  },
  {
    name: 'Chanel',
    link: 'chanel',
    image: coverChanel,
    type: ['Print'],
    date: '2023 - 2024',
    details: [
      {
        type: 'Print',
        descriptions: ['PLV'],
      },
    ],
  },
  {
    name: 'Scentception',
    link: 'scentception',
    image: coverScentception,
    type: ['Digital', 'Vidéo'],
    date: '2023',
    details: [
      {
        type: 'Veille',
        descriptions: ['Benchmarks', 'Brainstorm', 'Moodboards'],
      },
      {
        type: 'Digital',
        descriptions: ['Stories Instagram'],
      },
      {
        type: 'Vidéo',
        descriptions: [
          'Pré-Prod',
          'Post-Prod avec Montage Vidéo & Motion Design',
        ],
      },
    ],
  },
  {
    name: 'Mode & Sport',
    link: 'mode-et-sport',
    image: coverModeEtSport,
    type: ['Vidéo'],
    date: '2023',
    details: [
      {
        type: 'Veille',
        descriptions: [
          'Benchmarks',
          'Brainstorm',
          'Statégie',
          'Moodboards',
          'D.A.',
        ],
      },
      {
        type: 'Vidéo',
        descriptions: [
          'Pré-Prod',
          'Post-Prod avec Montage Vidéo & Motion Design',
        ],
      },
    ],
  },
  {
    name: 'GRIGRI',
    link: 'grigri',
    image: coverGrigri,
    type: ['Digital', 'Vidéo', 'Print'],
    date: '2023 - 2024',
    details: [
      {
        type: 'Veille',
        descriptions: [
          'Benchmarks',
          'Brainstorm',
          'Statégie',
          'Moodboards',
          'D.A.',
        ],
      },
      {
        type: 'Digital',
        descriptions: ['Posts & Stories Instagram'],
      },
      {
        type: 'Vidéo',
        descriptions: [
          'Pré-Prod',
          'Production',
          'Post-Prod avec Montage Vidéo & Motion Design',
        ],
      },
    ],
  },
]

export default projects
