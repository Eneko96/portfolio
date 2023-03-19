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
    href: '/',
    label: 'About',
    onClick,
    icon: Icons.LocationIcon,
  },
  {
    id: 'button3',
    href: '/',
    // should have on click to scroll to work section
    onClick,
    label: 'Work',
    icon: Icons.WorkIcon,
  },
  {
    id: 'button4',
    href: '/',
    label: 'Studies',
    onClick,
    icon: Icons.BookIcon,
  },
  {
    id: 'button5',
    href: '/techstack',
    label: 'Tech Stack',
    onClick,
    icon: Icons.ViewIcon,
  },
  {
    id: 'button6',
    href: '/',
    label: 'Case Studies',
    onClick,
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
