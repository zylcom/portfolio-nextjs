import { useEffect, useRef, useState } from "react";
import { Badge } from "./ui/badge";
import { circOut, motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import CursorHover from "./cursorHover";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/utils/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const brandMetadata = [
  { className: "", src: "/upmedia-logo.png", alt: "UPMedia Logo" },
  { className: "rotate-90", src: "/ku-invitation-logo.png", alt: "Ku-Invitation Logo" },
  { className: "rotate-90", src: "/upmedia-logo.png", alt: "UPMedia Logo" },
];

gsap.registerPlugin(useGSAP);

export default function Works() {
  const workContainer = useRef<HTMLDivElement>(null);
  const workContainer1 = useRef<HTMLDivElement>(null);
  const workContainer2 = useRef<HTMLDivElement>(null);
  const [dynamicOffset, setDynamicOffset] = useState(590);
  const brandLogoRefs = useRef<HTMLImageElement[]>([]);

  const setItemRef = (element: HTMLImageElement | null, key: number) => {
    if (element) {
      brandLogoRefs.current[key] = element;
    }
  };

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: workContainer1,
    offset: [`start ${dynamicOffset - 90 * 3}px`, `start ${89}px`],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: workContainer2,
    offset: [`start ${dynamicOffset - 90 * 2}px`, `start ${89 * 2}px`],
  });
  const workContainer1Height = useTransform(scrollYProgress1, [0, 1], [89, dynamicOffset - 89 * 3]);
  const workContainer2Height = useTransform(scrollYProgress2, [0.01, 1], [89, dynamicOffset - 89 * 3]);

  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: -1,
    });

    tl.to(brandLogoRefs.current[0], { rotate: "-90", delay: 3 }, 0)
      .to(brandLogoRefs.current[1], { rotate: "0", delay: 3 }, 0)
      .to(brandLogoRefs.current[1], { rotate: "-90", delay: 3 }, 3)
      .to(brandLogoRefs.current[2], { rotate: "0", delay: 3 }, 3);
  });

  useEffect(() => {
    setDynamicOffset(window.innerHeight);
  }, []);

  return (
    <section className="py-20" id="work">
      <div className="px-3.5 lg:px-14 2xl:px-24">
        <h2 className="font-figtree mb-4 font-bold uppercase">Selected Works</h2>
        <div className="font-figtree flex flex-wrap gap-6 text-7xl font-bold md:text-8xl">
          Creating impact for
          <div className="bg-rainstorm relative flex w-fit flex-col flex-wrap items-center justify-center overflow-hidden rounded-lg px-6 py-2">
            <Image className="h-16 w-auto opacity-0" src="/upmedia-logo.png" alt="" width={1} height={64} />
            {brandMetadata.map((metadata, index) => (
              <Image
                key={index}
                className={cn("absolute h-16 w-auto origin-[-55px_-25px]", metadata.className)}
                src={metadata.src}
                alt={metadata.alt}
                ref={(el) => setItemRef(el, index)}
                width={576}
                height={208}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-rainstorm">
        <div className="bg-rainstorm sticky top-0 mt-20 h-[calc(100vh_-_(89px_*_3))] px-3.5 py-6 lg:px-14 2xl:px-24" ref={workContainer}>
          <h3 className="text-lighthouse mb-8 text-2xl font-bold md:text-4xl">UPMedia - PT Dirandra Satu Media</h3>
          <div className="grid grid-cols-1 gap-x-2 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <p className="text-lighthouse mb-4 max-w-2xl text-sm lg:text-xl">
                Your all-in-one streaming companion for endless entertainment! Enjoy local and international movies, binge-worthy series, live TV channels, and
                even radio — all in one easy-to-use platform.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="text-lighthouse font-figtree rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                  Web Developer
                </Badge>
                <Badge className="text-lighthouse font-figtree rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                  Front-end Developer
                </Badge>
                <Badge className="font-figtree text-lighthouse rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                  Back-end Developer
                </Badge>
                <Badge className="font-figtree text-lighthouse rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                  Vue
                </Badge>
                <Badge className="font-figtree text-lighthouse rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                  Laravel
                </Badge>
                <Badge className="font-figtree text-lighthouse rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                  TailwindCSS
                </Badge>
                <Badge className="font-figtree text-lighthouse rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                  jQuery
                </Badge>
                <Badge className="text-lighthouse font-figtree rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                  MySQL
                </Badge>
                <Badge className="font-figtree text-lighthouse rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                  Figma
                </Badge>
                <Badge className="font-figtree text-lighthouse rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                  Git
                </Badge>
                <Badge className="font-figtree text-lighthouse rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                  RESTful API
                </Badge>
              </div>
              <CursorHover scaleSize={6}>
                <a
                  href="https://upmedia.co.id"
                  className="mt-14 hidden w-fit cursor-pointer items-center gap-x-2 rounded-md bg-red-100 p-3 font-bold md:flex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit site <MoveRightIcon />
                </a>
              </CursorHover>
            </div>

            <Dialog>
              <DialogTrigger className="order-1 mb-2 h-fit md:order-2">
                <CursorHover scaleSize={7}>
                  <Image
                    className="aspect-video h-full cursor-pointer rounded-2xl object-cover object-center"
                    src="https://res.cloudinary.com/dk9bcf16t/image/upload/v1755937003/upmedia-mock_fudrbo.png"
                    alt="UPMedia"
                    width={1366}
                    height={768}
                  />
                </CursorHover>
              </DialogTrigger>
              <DialogContent className="lg:max-w-6xl">
                <DialogHeader>
                  <DialogTitle>UPMedia</DialogTitle>
                </DialogHeader>
                <Image
                  className="aspect-video h-full w-full rounded object-cover object-center shadow"
                  src="https://res.cloudinary.com/dk9bcf16t/image/upload/v1755937003/upmedia-mock_fudrbo.png"
                  alt="UPMedia"
                  width={1366}
                  height={768}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="min-h-screen">
          <motion.div
            className="bg-rainstorm border-t-dire-wolf/50 sticky top-[89px] h-[89px] border-t px-3.5 pt-6 lg:px-14 2xl:px-24"
            ref={workContainer1}
            style={{ height: workContainer1Height }}
          >
            <h3 className="text-lighthouse mb-8 text-2xl font-bold md:text-4xl">Ku-Invitation - Freelancer</h3>
            <div className="grid grid-cols-1 gap-x-2 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <p className="text-lighthouse mb-4 max-w-2xl text-sm lg:text-xl">
                  A modern digital wedding invitation platform that helps you create beautiful, premium-quality invitations. Share your personalized link
                  instantly with all your WhatsApp contacts, making it easier than ever to impress your guests and make your special day unforgettable.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="text-lighthouse font-figtree rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    Web Developer
                  </Badge>
                  <Badge className="text-lighthouse font-figtree rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    Front-end Developer
                  </Badge>
                  <Badge className="font-figtree text-lighthouse rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    Back-end Developer
                  </Badge>
                  <Badge className="font-figtree text-lighthouse rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    CodeIgniter
                  </Badge>
                  <Badge className="font-figtree text-lighthouse rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    Bootstrap
                  </Badge>
                  <Badge className="font-figtree text-lighthouse rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    jQuery
                  </Badge>
                  <Badge className="text-lighthouse font-figtree rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    MySQL
                  </Badge>
                  <Badge className="font-figtree text-lighthouse rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    Git
                  </Badge>
                </div>
                <CursorHover scaleSize={6}>
                  <a
                    href="https://system.ku-invitation.com"
                    className="mt-14 hidden w-fit cursor-pointer items-center gap-x-2 rounded-md bg-red-100 p-3 font-bold md:flex"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit site <MoveRightIcon />
                  </a>
                </CursorHover>
              </div>

              <Dialog>
                <DialogTrigger className="order-1 mb-2 h-fit md:order-2">
                  <CursorHover scaleSize={7}>
                    <Image
                      className="aspect-video h-full cursor-pointer rounded-2xl object-cover object-center"
                      src="https://res.cloudinary.com/dk9bcf16t/image/upload/v1756024295/kuinvitation_czu6ch.png"
                      alt="Ku-Invitation"
                      width={1366}
                      height={768}
                    />
                  </CursorHover>
                </DialogTrigger>
                <DialogContent className="lg:max-w-6xl">
                  <DialogHeader>
                    <DialogTitle>Ku-Invitation</DialogTitle>
                  </DialogHeader>
                  <Image
                    className="aspect-video h-full w-full rounded object-cover object-center shadow"
                    src="https://res.cloudinary.com/dk9bcf16t/image/upload/v1756024295/kuinvitation_czu6ch.png"
                    alt="Ku-Invitation"
                    width={1366}
                    height={768}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
          <motion.div
            className="bg-rainstorm border-t-dire-wolf/50 sticky top-[calc(89px_*_2)] h-[89px] border-t px-3.5 pt-6 lg:px-14 2xl:px-24"
            ref={workContainer2}
            style={{ height: workContainer2Height }}
          >
            <h3 className="text-lighthouse mb-8 text-2xl font-bold md:text-4xl">UPMedia - PT Dirandra Satu Media</h3>
            <div className="grid grid-cols-1 gap-x-2 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <p className="text-lighthouse mb-4 max-w-2xl text-sm lg:text-xl">
                  Your all-in-one streaming companion for endless entertainment! Enjoy local and international movies, binge-worthy series, live TV channels,
                  and even radio — all in one easy-to-use platform.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="text-lighthouse font-figtree rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    Web Developer
                  </Badge>
                  <Badge className="text-lighthouse font-figtree rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    Front-end Developer
                  </Badge>
                  <Badge className="font-figtree text-lighthouse rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    Back-end Developer
                  </Badge>
                  <Badge className="font-figtree text-lighthouse rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    Vue
                  </Badge>
                  <Badge className="font-figtree text-lighthouse rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    Laravel
                  </Badge>
                  <Badge className="font-figtree text-lighthouse rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    TailwindCSS
                  </Badge>
                  <Badge className="font-figtree text-lighthouse rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    jQuery
                  </Badge>
                  <Badge className="text-lighthouse font-figtree rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    MySQL
                  </Badge>
                  <Badge className="font-figtree text-lighthouse rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    Figma
                  </Badge>
                  <Badge className="font-figtree text-lighthouse rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    Git
                  </Badge>
                  <Badge className="font-figtree text-lighthouse rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    RESTful API
                  </Badge>
                </div>
                <CursorHover scaleSize={6}>
                  <a
                    href="https://upmedia.co.id"
                    className="mt-14 hidden w-fit cursor-pointer items-center gap-x-2 rounded-md bg-red-100 p-3 font-bold md:flex"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit site <MoveRightIcon />
                  </a>
                </CursorHover>
              </div>

              <Dialog>
                <DialogTrigger className="order-1 mb-2 h-fit md:order-2">
                  <CursorHover scaleSize={7}>
                    <Image
                      className="aspect-video h-full cursor-pointer rounded-2xl object-cover object-center"
                      src="https://res.cloudinary.com/dk9bcf16t/image/upload/v1755937003/upmedia-mock_fudrbo.png"
                      alt="UPMedia"
                      width={1366}
                      height={768}
                    />
                  </CursorHover>
                </DialogTrigger>
                <DialogContent className="lg:max-w-6xl">
                  <DialogHeader>
                    <DialogTitle>UPMedia</DialogTitle>
                  </DialogHeader>
                  <Image
                    className="aspect-video h-full w-full rounded object-cover object-center shadow"
                    src="https://res.cloudinary.com/dk9bcf16t/image/upload/v1755937003/upmedia-mock_fudrbo.png"
                    alt="UPMedia"
                    width={1366}
                    height={768}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
          <motion.div className="bg-rainstorm border-t-dire-wolf/50 sticky top-0 min-h-[calc(100vh_-_(89px_*_3))] border-t px-3.5 py-6 lg:px-14 2xl:px-24">
            <h3 className="text-lighthouse mb-8 text-2xl font-bold md:text-4xl">Ku-Invitation - Freelancer</h3>
            <div className="grid grid-cols-1 gap-x-2 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <p className="text-lighthouse mb-4 max-w-2xl text-sm lg:text-xl">
                  A modern digital wedding invitation platform that helps you create beautiful, premium-quality invitations. Share your personalized link
                  instantly with all your WhatsApp contacts, making it easier than ever to impress your guests and make your special day unforgettable.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="text-lighthouse font-figtree rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    Web Developer
                  </Badge>
                  <Badge className="text-lighthouse font-figtree rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    Front-end Developer
                  </Badge>
                  <Badge className="font-figtree text-lighthouse rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    Back-end Developer
                  </Badge>
                  <Badge className="font-figtree text-lighthouse rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    CodeIgniter
                  </Badge>
                  <Badge className="font-figtree text-lighthouse rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    Bootstrap
                  </Badge>
                  <Badge className="font-figtree text-lighthouse rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    jQuery
                  </Badge>
                  <Badge className="text-lighthouse font-figtree rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    MySQL
                  </Badge>
                  <Badge className="font-figtree text-lighthouse rounded-full px-3 py-1 text-sm font-normal" variant="outline">
                    Git
                  </Badge>
                </div>
                <CursorHover scaleSize={6}>
                  <a
                    href="https://system.ku-invitation.com"
                    className="mt-14 hidden w-fit cursor-pointer items-center gap-x-2 rounded-md bg-red-100 p-3 font-bold md:flex"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit site <MoveRightIcon />
                  </a>
                </CursorHover>
              </div>

              <Dialog>
                <DialogTrigger className="order-1 mb-2 h-fit md:order-2">
                  <CursorHover scaleSize={7}>
                    <Image
                      className="aspect-video h-full cursor-pointer rounded-2xl object-cover object-center"
                      src="https://res.cloudinary.com/dk9bcf16t/image/upload/v1756024295/kuinvitation_czu6ch.png"
                      alt="Ku-Invitation"
                      width={1366}
                      height={768}
                    />
                  </CursorHover>
                </DialogTrigger>
                <DialogContent className="lg:max-w-6xl">
                  <DialogHeader>
                    <DialogTitle>Ku-Invitation</DialogTitle>
                  </DialogHeader>
                  <Image
                    className="aspect-video h-full w-full rounded object-cover object-center shadow"
                    src="https://res.cloudinary.com/dk9bcf16t/image/upload/v1756024295/kuinvitation_czu6ch.png"
                    alt="Ku-Invitation"
                    width={1366}
                    height={768}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
