import { useState, useEffect, useRef } from "react";
import { Card, Image, CardFooter } from "@heroui/react";

interface TeamCardProps {
    name: string;
    title: string;
    image: string;
    description: string;
}

export default function TeamCard({name, title, image, description }: TeamCardProps){
    const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsFlipped(false);
      }
    };

    const handleScroll = () => setIsFlipped(false);

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
<div
  ref={cardRef}
  style={{ perspective: "1000px" }}
  className="relative w-[225px] h-[400px]"
>
      <div
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : '',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s'
        }}
        className="relative w-full h-full"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div style={{ backfaceVisibility: 'hidden' }} className="absolute w-full h-full">

          <Card isFooterBlurred className="w-full h-[300px]">
                    <Image
                    removeWrapper
                    alt={`${name} Card background`}
                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                    src={image}
                    />
                  <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                    <div>
                      <h3 className="text-black">{name}</h3>
                      <p className="text-black text-tiny">{title}</p>
                    </div>
                  </CardFooter>
                </Card>
        </div>

        <div
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
          className="absolute w-full h-full"
        >
          <Card className="w-full h-[300px] cursor-pointer flex flex-col items-center justify-center p-4">
            <h3 className="text-lg font-bold">More About {name}</h3>
            <p className="text-sm text-gray-700 mt-4">{description}</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
