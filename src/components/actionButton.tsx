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
        `group block relative h-8 overflow-hidden rounded-full bg-dire-wolf px-8 text-center before:absolute before:top-0 before:bottom-0 before:left-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-700 before:content-[''] after:relative after:left-0 after:bottom-0 after:whitespace-nowrap after:h-full after:flex after:justify-center after:items-center after:transition-all after:text-zhen-zhu-bai-pearl after:duration-700 before:hover:w-full after:hover:bottom-9 ${afterContent} ` +
        className
      }
      target={target}
      {...props}
    >
      <span className="absolute left-0 top-9 text-dynamic-black flex w-full justify-center items-center transition-all duration-700 group-hover:top-0 h-full">
        {text}
      </span>
    </Link>
  );
}
