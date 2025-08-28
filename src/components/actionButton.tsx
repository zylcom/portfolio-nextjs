import Link, { LinkProps } from "next/link";

interface Props extends LinkProps {
  afterContent: string;
  text: string;
  className?: string | undefined;
  target?: React.HTMLAttributeAnchorTarget | undefined;
}

export default function ActionButton({ afterContent, className, target, text, ...props }: Props) {
  return (
    <Link
      role="button"
      className={
        `group bg-dire-wolf after:text-zhen-zhu-bai-pearl relative block h-8 overflow-hidden rounded-full px-8 text-center before:absolute before:top-0 before:bottom-0 before:left-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-700 before:content-[''] after:relative after:bottom-0 after:left-0 after:flex after:h-full after:items-center after:justify-center after:whitespace-nowrap after:transition-all after:duration-700 before:hover:w-full after:hover:bottom-9 ${afterContent} ` +
        className
      }
      target={target}
      {...props}
    >
      <span className="text-dynamic-black absolute top-9 left-0 flex h-full w-full items-center justify-center transition-all duration-700 group-hover:top-0">
        {text}
      </span>
    </Link>
  );
}
