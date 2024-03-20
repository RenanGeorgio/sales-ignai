import "./SidebarBadge.css";

export default function SidebarBadge({ value }: { value: number | string }) {
  return (
    <div className="sidebar-badge">
      <span>{value}</span>
    </div>
  );
}
