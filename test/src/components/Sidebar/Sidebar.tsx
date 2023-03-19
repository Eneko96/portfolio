import { SidebarButton, Sidebar } from '@adeccoux/tag-ds';
import { useState } from 'react';
import { sElements } from './constants';
import './styles.css';

const TITLE_OFFSET = 100;

const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) window.scrollTo(0, element.offsetTop - TITLE_OFFSET);
};

export default function SB({ url }: { url: string }) {
  const [selected, setSelected] = useState(
    sElements.find((e) => e.href === url)?.id || 'button2'
  );
  return (
    <Sidebar collapsed className="sidebar-custom">
      {sElements.map(({ icon: Icon, ...element }, idx) => (
        <SidebarButton
          key={element.id + idx}
          icon={
            <Icon
              active={
                selected === element.id ||
                (element.href !== '/' && element.href === url)
              }
            />
          }
          onClick={
            element.onClick &&
            url === '/' &&
            element.onClick(() => {
              handleScroll(element.label.toLowerCase().replace(' ', ''));
              setSelected(element.id);
            })
          }
          id={element.id}
          label={element.label}
          href={!element.onClick && url !== '/' ? element.href : '/'}
        />
      ))}
    </Sidebar>
  );
}
