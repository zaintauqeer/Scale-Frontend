import React, { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface DetailDealBoxProps {
  id: string;
  image: string;
  images?: string[]; // Made optional to match default prop
  title: string;
  price: string;
  location: string;
  timeLeft: string;
  participants: string[];
  participantsExtra: number;
  progress: number;
  supplierImg: string;
  supplierName: string;
  minOrder: string;
  deliveryTimeframe: string;
  delivery: string;
}

const DetailDealBox = ({
  image,
  images = [],
  title,
  price,
  location,
  timeLeft,
  participants,
  participantsExtra,
  progress,
  supplierImg,
  supplierName,
  minOrder,
  deliveryTimeframe,
  delivery,
}: DetailDealBoxProps) => {
  // Destructure both the ref and the API from useEmblaCarousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const dealImages = images.length > 0 ? images : [image, image, image, image];

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="lg:px-20 px-5 py-14 flex flex-col lg:flex-row gap-x-12">
      {/* Images Section */}
      <div className="flex flex-col gap-5 w-full lg:w-5/12">
        {/* Main Image */}
        <div className="bg-[#CCCCCC] rounded-sm overflow-hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="embla__container aspect-square">
              {dealImages.map((img: string, index: React.Key) => (
                <div key={index} className="embla__slide ">
                  <div className="h-full flex items-center justify-center">
                    <img
                      src={img}
                      alt={`${title}`}
                      className="object-contain max-h-3/4"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {dealImages.map((img: string, index: React.Key) => (
            <button
              key={index}
              onClick={() => {
                if (emblaApi) {
                  emblaApi.scrollTo(Number(index));
                }
              }}
              className={`
                flex-shrink-0 
                w-20 h-20 
                rounded-sm
                overflow-hidden 
                cursor-pointer
                border-2 
                bg-[#F2F2F2]
                aspect-square
                flex items-center justify-center

                ${selectedIndex === index ? 'border-[#F25550]' : 'border-transparent'}
              `}
            >
              <img
                src={img}
                alt={`Preview`}
                className="h-3/4 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
      {/* Information Section */}
      <div className="gap-5 lg:w-7/12">
        <div className='flex gap-6 flex-wrap justify-between pb-5 border-b border-[#DDDDDD]'>
          <h2 className="lg:text-[32px] font-[Outfit-Bold] rtl:font-sans rtl:font-bold mb-2">{title}</h2>
          <span className="lg:text-[32px] text-lg font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold text-[#F25550]">{price}</span>
        </div>
        <div className="mt-12 flex flex-col gap-5 font-[Outfit-Medium] rtl:font-sans rtl:font-medium text-xl">
          <div className='flex gap-x-3 justify-between'>
            <div className="text-[#666666]">Time Left:</div>
            <div className=" text-[#F25550]">{timeLeft}</div>
          </div>
          <div className='flex gap-x-3 justify-between'>
            <div className="text-[#666666]">Supplier:</div>
            <div className="flex items-center gap-2">
              <img src={supplierImg} alt={supplierName} className="w-[40px] h-[40px] rounded-full border" />
              <span className="">{supplierName}</span>
            </div>
          </div>
          <div className='flex gap-x-3 justify-between'>
            <div className="text-[#666666]">Supplier:</div>
            <div className=" text-[#222222]">{location}</div>
          </div>
          <div className='flex gap-x-3 justify-between'>
            <div className="text-[#666666]">Delivery Area:</div>
            <div className=" text-[#222222]">{location}</div>
          </div>
          <div className='flex gap-x-3 justify-between'>
            <div className="text-[#666666]">Minimum Order Quantity:</div>
            <div className=" text-[#222222]">{minOrder}</div>
          </div>
          <div className='flex gap-x-3 justify-between'>
            <div className="text-[#666666]">Delivery Timeframe:</div>
            <div className=" text-[#222222]">{deliveryTimeframe}</div>
          </div>
          <div className='flex gap-x-3 justify-between'>
            <div className="text-[#666666]">Delivery:</div>
            <div className=" text-[#222222]">{delivery}</div>
          </div>
        </div>
        {/* Participants */}
        <div className='mt-12 flex justify-between gap-x-3 mb-6'>
          <div className="text-[##222222] text-2xl mb-2">Participants</div>
          <div className="flex items-center gap-2">
            {participants.map((p, i) => (
              <img key={i} src={p} className="w-[40px] h-[40px] object-cover rounded-full border-2 border-white -ms-2 first:ms-0" alt="participant" />
            ))}
            <div className="w-[40px] h-[40px] bg-gray-200 rounded-full flex items-center justify-center text-xs font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold text-gray-700 border-2 border-white -ms-2">
              +{participantsExtra}
            </div>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="flex items-center gap-4">
          <div className="w-full h-[14px] bg-gray-200 rounded-full">
            <div className="h-full bg-[#F25550] rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <span className="font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold text-lg text-[#444444]">{progress}%</span>
        </div>
        {/* Action Buttons */}
        <div className="flex gap-4 mt-12">
          <button className="bg-[#F25550] flex-auto text-white px-6 py-3 rounded font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold">Join now</button>
          <button className="border border-gray-300 px-6 py-3 rounded font-[Outfit-SemiBold] rtl:font-sans rtl:font-semibold flex items-center gap-2">
            <img src="/icons/share-icon.svg" alt="Share" className="w-4 h-4" />
            Share <span className="hidden lg:inline">for more to join</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailDealBox;