import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import imgBanner from "../assets/Banner.jpeg"

export default function Component() {
  return (
    <div className="flex flex-col w-full h-[50hv] min-h-[200px] max-h-[600px] mt-10 overflow-hidden">
      <AspectRatio ratio={24 / 9} className="bg-muted">
        <Image
          src={imgBanner}
          alt="Responsive banner image"
          fill
          className="rounded-md object-cover"
          sizes="100vw"
          priority
        />
      </AspectRatio>
    </div>
  )
}