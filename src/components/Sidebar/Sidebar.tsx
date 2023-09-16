import Sidebar, { SidebarButton } from '../../../tag/sidebar';
import { useEffect, useState, useRef } from 'react';
import { sElements } from './constants';
import './styles.css';
const TRANSITION_CONSTRUCTOR = 'top 0.3s ease-in-out';

export default function SB({ url }: { url: string }) {
  const firstRender = useRef(false);
  const [selected, setSelected] = useState<(typeof sElements)[number]>(
    sElements.find((e) => e.href === url) || sElements[0],
  );

  useEffect(() => {
    const urlHash = window.location.hash;
    if (urlHash.length > 1)
      // eslint-disable-next-line $rulename
      setSelected(sElements.find((e) => e.href === urlHash));
  }, []);

  useEffect(() => {
    if (!firstRender.current) firstRender.current = true;
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

    const urlHash = window.location.hash;
    if (firstRender.current && urlHash.length > 1) {
      document.getElementById(urlHash.slice(0));
    }
  }, [url, selected]);

  const replaceHash = (href: string) => {
    if (href.includes('#')) {
      return `/${href}`;
    }
    return '/';
  };

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
          onClick={() => {
            setSelected(element as (typeof sElements)[number]);
          }}
          id={element.id}
          label={element.label}
          href={url.length > 1 ? replaceHash(element.href) : element.href}
        />
      ))}
    </Sidebar>
  );
}
