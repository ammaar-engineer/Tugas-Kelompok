import { HomeSection } from "./section/home/page";
import { ProductSection } from "./section/product/page";
import { ServicesSection } from "./section/services/page";

export function View () {
    return (
        <>
        <HomeSection />  
        <ServicesSection />      
        <ProductSection />        
        </>
    )
}