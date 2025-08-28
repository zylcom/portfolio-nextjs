import { useEffect, useRef, useState } from "react";
import { Badge } from "./ui/badge";
import { circOut, motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import CursorHover from "./cursorHover";
import { MoveRightIcon } from "lucide-react";

export default function Works() {
  const workContainer = useRef<HTMLDivElement>(null);
  const workContainer1 = useRef<HTMLDivElement>(null);
  const workContainer2 = useRef<HTMLDivElement>(null);
  const [dynamicOffset, setDynamicOffset] = useState(590);

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

  useEffect(() => {
    setDynamicOffset(window.innerHeight);
  }, []);

  return (
    <section className="py-20" id="works">
      <div className="px-3.5 lg:px-14 2xl:px-24">
        <h2 className="font-figtree mb-4 font-bold uppercase">Selected Works</h2>
        <h3 className="font-figtree text-8xl font-bold">Creating impact for</h3>
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
                  <img
                    className="aspect-video h-full cursor-pointer rounded-2xl object-cover object-center"
                    src="https://res.cloudinary.com/dk9bcf16t/image/upload/v1755937003/upmedia-mock_fudrbo.png"
                    alt="UPMedia"
                  />
                </CursorHover>
              </DialogTrigger>
              <DialogContent className="lg:max-w-6xl">
                <DialogHeader>
                  <DialogTitle>UPMedia</DialogTitle>
                </DialogHeader>
                <img
                  className="aspect-video h-full w-full rounded object-cover object-center shadow"
                  src="https://res.cloudinary.com/dk9bcf16t/image/upload/v1755937003/upmedia-mock_fudrbo.png"
                  alt="UPMedia"
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
                    <img
                      className="aspect-video h-full cursor-pointer rounded-2xl object-cover object-center"
                      src="https://res.cloudinary.com/dk9bcf16t/image/upload/v1756024295/kuinvitation_czu6ch.png"
                      alt="Ku-Invitation"
                    />
                  </CursorHover>
                </DialogTrigger>
                <DialogContent className="lg:max-w-6xl">
                  <DialogHeader>
                    <DialogTitle>Ku-Invitation</DialogTitle>
                  </DialogHeader>
                  <img
                    className="aspect-video h-full w-full rounded object-cover object-center shadow"
                    src="https://res.cloudinary.com/dk9bcf16t/image/upload/v1756024295/kuinvitation_czu6ch.png"
                    alt="Ku-Invitation"
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
            <h3 className="text-lighthouse mb-8 text-2xl font-bold md:text-4xl">Strategy</h3>
            <div className="grid grid-cols-1 gap-x-2 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <p className="text-lighthouse mb-4 max-w-2xl text-sm lg:text-xl">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nisi, ratione suscipit voluptatum necessitatibus, facilis dolor voluptate
                  laborum, dolore dolorum officiis?
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
                    TailwindCSS
                  </Badge>
                </div>
                <button className="mt-14 hidden w-fit cursor-pointer items-center gap-x-2 rounded-md bg-red-100 p-3 font-bold md:flex">
                  Learn more <MoveRightIcon />
                </button>
              </div>
              <Dialog>
                <DialogTrigger className="order-1 mb-2 h-fit md:order-2">
                  <CursorHover scaleSize={7}>
                    <img
                      className="aspect-video h-full cursor-pointer rounded-2xl object-cover object-center"
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Ku-Invitation"
                    />
                  </CursorHover>
                </DialogTrigger>
                <DialogContent className="lg:max-w-6xl">
                  <DialogHeader>
                    <DialogTitle>UPMedia</DialogTitle>
                  </DialogHeader>
                  <img
                    className="aspect-video h-full w-full rounded object-cover object-center shadow"
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Ku-Invitation"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
          <motion.div className="bg-rainstorm border-t-dire-wolf/50 sticky top-0 min-h-[calc(100vh_-_(89px_*_3))] border-t px-3.5 py-6 lg:px-14 2xl:px-24">
            <h3 className="text-lighthouse col-span-2 mb-8 text-4xl font-bold">Strategy</h3>
            <div className="grid grid-cols-1 gap-x-2 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <p className="text-lighthouse mb-4 max-w-2xl text-sm lg:text-xl">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nisi, ratione suscipit voluptatum necessitatibus, facilis dolor voluptate
                  laborum, dolore dolorum officiis?
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
                    TailwindCSS
                  </Badge>
                </div>
                <button className="mt-14 hidden w-fit cursor-pointer items-center gap-x-2 rounded-md bg-red-100 p-3 font-bold md:flex">
                  Learn more <MoveRightIcon />
                </button>
              </div>
              <Dialog>
                <DialogTrigger className="order-1 mb-2 h-fit md:order-2">
                  <CursorHover scaleSize={7}>
                    <img
                      className="aspect-video h-full cursor-pointer rounded-2xl object-cover object-center"
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Ku-Invitation"
                    />
                  </CursorHover>
                </DialogTrigger>
                <DialogContent className="lg:max-w-6xl">
                  <DialogHeader>
                    <DialogTitle>UPMedia</DialogTitle>
                  </DialogHeader>
                  <img
                    className="aspect-video h-full w-full rounded object-cover object-center shadow"
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Ku-Invitation"
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
