import { useRef } from "react";
import { useQuantaIntersection } from "../hook/anim-hook";

export interface ProductCardTS {
    company: string,
    car: string,
    logo: 'k.png' | 'm.png' | 'p.png' | ''
    productclass: string,
    description: string,
    spec_one: string,
    spec_two: string
}

export const ProductCard = ({company, car, logo, productclass, description, spec_one, spec_two}:ProductCardTS) => {

  const refBox = useRef(null)
  const OnView = useQuantaIntersection(refBox, {threshold: 0.9})

  return (
    <div className={`${productclass} w-screen h-screen snap-end shrink-0 bg-[rgba(17,17,17,1)] ${OnView && 'cover'}`} ref={refBox}>
      <div className={`overlay px-20 py-10 flex flex-col justify-between ${OnView && 'showIn'} opacity-0`}>
        <div className={`header relative opacity-0 ${OnView && 'slideDown'}`}>
          <h1 className="company">{company}</h1>
          <h2 className="cartype">{car}</h2>
          <img
            src={logo}
            alt=""
            className="w-20 h-20 absolute right-0 top-2"
          />
        </div>
        <div className={`footer flex justify-between ${OnView && 'slideUp'}`}>
          <div className="desc flex flex-col gap-3">
            <h1 className="gradient descs text-[1.3em]">Description</h1>
            <p className="subdesc">
              {description}
            </p>
          </div>
          <div className="specs flex flex-col gap-3">
            <h1 className="gradient spec">Specs</h1>
            <p className="spec-bubble">{spec_one}</p>
            <p className="spec-bubble">{spec_two}</p>
          </div>
        </div>
      </div>
    </div>
  );
};