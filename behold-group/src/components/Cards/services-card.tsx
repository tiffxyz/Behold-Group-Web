import { useState, useEffect, useRef } from "react";
import { Card, Image,CardBody, Button } from "@heroui/react";

interface ServiceCardProps {
  title: string;
  image: string;
  description: string;
}

export default function ServiceCard({title, image, description }: ServiceCardProps) {
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
  className="relative w-[300px] h-[400px]"
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
          <Card className="h-[400px] w-[300px] cursor-pointer">
            <CardBody className="absolute z-10 top-1 flex-col !items-start">
              <h4 className="text-white font-medium text-large">{title}</h4>

            </CardBody>
            <Image
              removeWrapper
              alt={`${name} Card background`}
              className="z-0 w-full h-full object-cover"
              src={image}
            />
          </Card>
        </div>

        <div
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
          className="absolute w-full h-full"
        >
          <Card className="h-[400px] w-[300px] cursor-pointer flex flex-col items-center justify-center p-4">
            <p className="text-sm text-gray-700 mt-4">{description}</p>
           <Button>Learn More</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
