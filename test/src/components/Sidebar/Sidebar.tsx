import { Sidebar, SidebarButton } from "@adeccoux/tag-ds/sidebar";
import { sElements } from "./constants";

export default function SB() {
  return (
    <Sidebar collapsed>
      {sElements.map((element, idx) => (
        <SidebarButton
          key={element.id+idx}
          icon={<span className="material-icons">home</span>}
          id={element.id}
          label={element.label}
          href={element.href}
        />
      ))}
    </Sidebar>
  )
}