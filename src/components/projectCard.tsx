"use client"

import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import Link from "next/link"

interface ThreeDCardDemoProps {
  title: string;
  description: string;
  src: string;  
  livelink: string;
  gitlink: string;
  stack: string[];
}

const ThreeDCardDemo: React.FC<ThreeDCardDemoProps> = ({ title, description, src, livelink, gitlink, stack }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-cyan-200">
          {title}
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-300 text-sm mt-2 mb-4 pl-3">
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full">
          <div className="aspect-[16/9] relative w-full">
            <Image
              src={src}
              fill
              alt={title}
              className="object-contain rounded-xl group-hover/card:shadow-xl"
            />
          </div>
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-cyan-200 text-sm mt-2 mb-4 pl-3">
            {stack.join(", ")}
        </CardItem>
        <div className="flex justify-between items-center mt-6">
          <CardItem
            translateZ={20}
            as={Link}
            href={livelink}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white hover:bg-white/10 transition-colors"
          >
            Visit →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={gitlink}
            target="__blank"
            className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold hover:bg-neutral-200 transition-colors"
          >
            GitHub
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}

export default ThreeDCardDemo
