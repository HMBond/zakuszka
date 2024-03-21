import "./icon-link.css";

export default function IconLink(props: {
  href: string;
  iconPath: string;
  label: string;
  hideLabel?: boolean;
}) {
  return (
    <a
      class="icon-link"
      href={props.href}
      target="_blank"
      title={props.hideLabel && props.label}
    >
      <div class="icon-link-icon" style={`--url: url('${props.iconPath}');`} />
      <span class={props.hideLabel && "sr-only"}>{props.label}</span>
    </a>
  );
}
