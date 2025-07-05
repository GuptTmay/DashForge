import KanbanImage1 from '@/assets/KanbanImg1.png';
import KanbanImage2 from '@/assets/KanbanImg2.png';


export const TopCreatorData = [
  {
    name: "@maddison_c21",
    artworks: 9821,
    rating: 100
  },
  {
    name: "@karl.will02",
    artworks: 7032,
    rating: 90
  },
  {
    name: "@andreea.lz",
    artworks: 5204,
    rating: 80
  },
  {
    name: "@abraham47.y",
    artworks: 4309,
    rating: 70
  },
  {
    name: "@simmmple.web",
    artworks: 3871,
    rating: 60
  },
  {
    name: "@venus.sys",
    artworks: 3152,
    rating: 50
  },
  {
    name: "@ape.vpp8",
    artworks: 2907,
    rating: 40
  },
  {
    name: "@leon_pwrr",
    artworks: 2309,
    rating: 30
  },
];

import {
  BidImage2,
  BidImage3,
  BidImage4,
  BidImage5,
  BidImage6,
} from '@/assets';
import { KanbanStatus, Status } from './utilsFunc';

export const HistoryData = [
  {
    title: "Abstract Colors",
    artist: "Esthera Jackson",
    price: 0.91,
    timeAgo: "58s ago",
    image: BidImage2
  },
  {
    title: "ETH AI Brain",
    artist: "Nick Wilson",
    price: 2.82,
    timeAgo: "1m ago",
    image: BidImage3
  },
  {
    title: "Swipe Circles",
    artist: "Peter Will",
    price: 2.30,
    timeAgo: "1m ago",
    image: BidImage4
  },
  {
    title: "Mesh Gradients",
    artist: "Will Smith",
    price: 0.56,
    timeAgo: "2m ago",
    image: BidImage5
  },
  {
    title: "3D Cubes Art",
    artist: "Manny Gates",
    price: 6.58,
    timeAgo: "3m ago",
    image: BidImage6
  }
];

export const DevTableData = [
  {
    title: 'OrbitX Marketplace',
    platforms: ['apple', 'android', 'windows'],
    date: '12.Jan.2021',
    progress: 82.3,
  },
  {
    title: 'NovaDB PRO',
    platforms: ['android', 'windows'],
    date: '05.Feb.2022',
    progress: 47.8,
  },
  {
    title: 'LunaSync Studio',
    platforms: ['apple'],
    date: '18.Mar.2023',
    progress: 19.6,
  },
  {
    title: 'Quantum Render 3D',
    platforms: ['apple', 'windows'],
    date: '29.Apr.2021',
    progress: 100,
  },
  {
    title: 'Helios CRM',
    platforms: ['android'],
    date: '02.May.2024',
    progress: 64.9,
  },
  {
    title: 'Zephyr Notes',
    platforms: ['apple', 'android'],
    date: '11.Jun.2023',
    progress: 32.0,
  },
  {
    title: 'Apollo Analytics',
    platforms: ['windows'],
    date: '22.Jul.2021',
    progress: 77.1,
  },
  {
    title: 'Orion Cloud Sync',
    platforms: ['apple', 'android', 'windows'],
    date: '10.Aug.2022',
    progress: 58.6,
  },
  {
    title: 'Uranus DevTools',
    platforms: ['apple', 'windows'],
    date: '30.Sep.2023',
    progress: 12.2,
  },
  {
    title: 'Saturn IoT Bridge',
    platforms: ['android', 'windows'],
    date: '15.Oct.2022',
    progress: 39.5,
  },
];


export const CheckTableData = [
  {
    title: "OrbitX Marketplace",
    percentage: 17.5,
    value: 2458,
    date: "24.Jan.2024",
    checked: false
  },
  {
    title: "NovaDB Pro Suite",
    percentage: 10.8,
    value: 1485,
    date: "12.Jun.2023",
    checked: true
  },
  {
    title: "Uranus DevKit",
    percentage: 21.3,
    value: 1024,
    date: "05.Mar.2024",
    checked: false
  },
  {
    title: "LunaSync Dashboard",
    percentage: 31.5,
    value: 858,
    date: "07.May.2023",
    checked: true
  },
  {
    title: "Apollo UI Framework",
    percentage: 12.2,
    value: 768,
    date: "17.Dec.2022",
    checked: false
  },
  {
    title: "Zephyr Reports",
    percentage: 22.6,
    value: 1940,
    date: "11.Feb.2024",
    checked: true
  },
  {
    title: "Helios CRM",
    percentage: 8.9,
    value: 315,
    date: "28.Jul.2023",
    checked: false
  },
  {
    title: "Stellar Analytics",
    percentage: 14.3,
    value: 1422,
    date: "02.Sep.2022",
    checked: false
  },
  {
    title: "Neptune Asset Engine",
    percentage: 26.8,
    value: 1667,
    date: "10.Aug.2024",
    checked: true
  },
  {
    title: "Titan IoT Bridge",
    percentage: 18.4,
    value: 1296,
    date: "19.Nov.2023",
    checked: false
  }
];


export const ColTableData = [
  {
    title: "OrbitX Marketplace",
    percentage: 17.5,
    value: 2458,
    date: "24.Jan.2024",
    checked: false
  },
  {
    title: "NovaDB Pro Suite",
    percentage: 10.8,
    value: 1485,
    date: "12.Jun.2023",
    checked: true
  },
  {
    title: "Uranus DevKit",
    percentage: 21.3,
    value: 1024,
    date: "05.Mar.2024",
    checked: false
  },
  {
    title: "LunaSync Dashboard",
    percentage: 31.5,
    value: 858,
    date: "07.May.2023",
    checked: true
  }
]


export const ComplexTableData = [
  {
    name: 'Sales PRO',
    status: Status.APPROVED,
    date: '18 Apr 2022',
    progress: 80,
  },
  {
    name: 'Inventory Free',
    status: Status.DISABLE,
    date: '18 Apr 2022',
    progress: 40,
  },
  {
    name: 'Marketplace',
    status: Status.ERROR,
    date: '20 May 2021',
    progress: 90,
  },
  {
    name: 'Weekly Updates',
    status: Status.APPROVED,
    statusColor: 'green',
    date: '12 Jul 2021',
    progress: 60,
  },
];


export const kanbanData = {
  backlog: [
    {
      title: "Option to 'use local/server version' feature",
      description:
        "It usually displays this message when you close an unsaved page and it's frustrating to see this every time.",
      status: KanbanStatus.UPDATE
    },
    {
      title: "Add/modify your own CSS-Selectors",
      description:
        "Website Design: The ability to add/modify your own CSS-Selectors like it's done in Venus.",
      image: KanbanImage1,
      status: KanbanStatus.PENDING
    },
    {
      title: "Shortcode for templates to display correctly",
      description:
        "When you save sections as a template and paste a shortcode, layout is broken, some styles missing — in editor.",
      status: KanbanStatus.ERROR
    }
  ],
  inProgress: [
    {
      title: "General ideas to improve 'Edit' workflow",
      description:
        "I have templates in the Local Library and every time I add one, the same preset shows (by default).",
      status: KanbanStatus.PENDING
    },
    {
      title: "Shortcode for templates to display correctly",
      description:
        "When saving templates and using shortcodes, layout breaks. Some styles are missing in editor.",
      status: KanbanStatus.UPDATE
    },
    {
      title: "[UX Design] – Set the default Library tab",
      description:
        "Set the default Library tab (or remember last opened tab). Especially useful when there are many templates.",
      image: KanbanImage2,
      status: KanbanStatus.ERROR
    }
  ],
  done: [
    {
      title: "Copy/Paste elements between pages",
      description:
        "We can now copy/paste elements (or groups) across pages, not just within the same page.",
      status: KanbanStatus.DONE
    },
    {
      title: "Remove Extra DIV for each container added",
      description:
        "Each added container used to wrap with an unnecessary div. That has been fixed for cleaner markup.",
      status: KanbanStatus.DONE
    },
    {
      title: "Add Figma files for the Library design blocks",
      description:
        "Clients can now get the Figma files directly. Makes downloads and design handoff easier.",
      status: KanbanStatus.DONE
    }
  ]
};
