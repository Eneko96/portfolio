import Sidebar, { SidebarButton } from '../../../tag/sidebar';
import { useEffect, useState } from 'react';
import { sElements } from './constants';
import './styles.css';
const TRANSITION_CONSTRUCTOR = 'top 0.3s ease-in-out';

const TITLE_OFFSET = 100;

const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) window.scrollTo(0, element.offsetTop - TITLE_OFFSET);
};

export default function SB({ url }: { url: string }) {
  const [selected, setSelected] = useState<typeof sElements[number]>(
    sElements.find((e) => e.href === url) || sElements[0]
  );

  useEffect(() => {
    const focuser = document.getElementsByClassName('focuser');
    let focus: any;
    if (focuser.length > 0) {
      focus = focuser[0] as HTMLElement;
    }
    if (selected.label.includes('Study')) {
      setSelected(sElements.find((e) => e.id === 'button6')!);
      if (focus) {
        focus.style.top = `${document.getElementById('button6')!.offsetTop}px`;
      }
    }
    if (selected.label.includes('Book')) {
      setSelected(sElements.find((e) => e.id === 'button7')!);
      if (focus) {
        focus.style.transition = undefined;
        focus.style.top = `${document.getElementById('button7')!.offsetTop}px`;
      }
    } else {
      focus.style.transition = TRANSITION_CONSTRUCTOR;
      focus.style.top = `${document.getElementById(selected.id)!.offsetTop}px`;
    }
  }, [url, selected]);

  return (
    <Sidebar collapsed className="sidebar-custom">
      <div className="focuser" />
      {sElements.map(({ icon: Icon, ...element }, idx) => (
        <SidebarButton
          key={element.id + idx}
          title={element.label}
          icon={
            <Icon
              active={
                selected.id === element.id ||
                (element.href !== '/' && element.href === url)
              }
            />
          }
          onClick={
            (element.onClick &&
              url === '/' &&
              element.onClick(() => {
                handleScroll(element.label.toLowerCase().replace(' ', ''));
                setSelected(element as typeof sElements[number]);
              }) as any)  ||
            undefined
          }
          id={element.id}
          label={element.label}
          href={
            !element.onClick ? element.href : (url !== '/' && '/') || '#'
          }
        />
      ))}
    </Sidebar>
  );
}
