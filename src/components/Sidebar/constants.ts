import { Icons } from '../../Icons';
const onClick = (cb: any) => cb;

interface SidebarElement {
  id: string;
  href: string;
  label: string;
  icon: any;
  onClick?: (cb: any) => void;
}

export const sElements: SidebarElement[] = [
  {
    id: 'button2',
    label: 'About',
    icon: Icons.LocationIcon,
    href: '#',
  },
  {
    id: 'button3',
    label: 'Work',
    icon: Icons.WorkIcon,
    href: '#work',
  },
  {
    id: 'button4',
    label: 'Studies',
    href: '#studies',
    icon: Icons.BookIcon,
  },
  {
    id: 'button5',
    label: 'Tech Stack',
    href: '#techstack',
    icon: Icons.ViewIcon,
  },
  {
    id: 'button6',
    label: 'Case Studies',
    href: '#casestudies',
    icon: Icons.FolderIcon,
  },
  {
    id: 'button7',
    href: '/Book',
    label: 'Book a Call',
    icon: Icons.ChatIcon,
  },
  {
    id: 'button8',
    href: '/CV',
    label: 'Resume',
    icon: Icons.DownloadIcon,
  },
];
