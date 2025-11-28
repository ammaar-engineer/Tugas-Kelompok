import { useEffect, useRef } from "react";
import { useQuantaIntersection } from "../../hook/anim-hook";
import { CustumerServiceIcon, GaransiIcon, PackageIcon } from "../../icon";

export function ServicesSection () {

    const refBox = useRef<HTMLDivElement>(null)
    const onView = useQuantaIntersection(refBox, {threshold: 0.8})

    useEffect(()  => {
        console.log(onView ? 'masuk' : 'kaga')
    }, [onView])

    return (
        <section className="service-section bg-[rgba(17,17,17,1)] w-screen h-screen" ref={refBox}>
            <div className="main-padding">
                <h1 className={`service-title opacity-0 ${onView && 'showIn slideDown'} duration-500`}>Quanta Services</h1>
                <p className={`service-desc opacity-0 ${onView && 'showIn'} duration-500`}>Quanta Dealer adalah tempat dimana para pembeli bisa membeli mobil dengan mudah tanpa perlu melakukan persyaratan yang mempersulit proses pembelian. Layanan kami menjamin</p>
                <div className={`flex gap-20 justify-center mt-10! opacity-0 ${onView && 'showIn'}`}>
                    <div className="service-card">
                        <PackageIcon w={40} h={40} fill="rgba(255, 243, 110, 1)"/>
                        <h1 className="pt-4 font-semibold text-[rgba(255,243,110,1)] text-[1.1em]">Pengantaran cepat</h1>
                        <p className="text-[0.9em] text-[rgba(255,243,110,0.54)]">Mobil akan langsung diantar tepat saat pembeli memesan kepada kami</p>                        
                    </div>
                    <div className="service-card">
                        <CustumerServiceIcon w={40} h={40} fill="rgba(255, 209, 110, 1)"/>
                        <h1 className="pt-4 font-semibold text-[rgba(255,209,110,1)] text-[1.1em]">Layanan aktif</h1>
                        <p className="text-[0.9em] text-[rgba(255,209,110,0.54)]">Customer services kami akan setia melayani setiap waktu</p>                        
                    </div>
                    <div className="service-card">
                        <GaransiIcon w={40} h={40} fill="rgba(255,178,110,1)"/>
                        <h1 className="pt-4 font-semibold text-[rgba(255,178,110,1)] text-[1.1em]">Garansi pembelian</h1>
                        <p className="text-[0.9em] text-[rgba(255,178,110,0.54)]">Customer services kami akan setia melayani setiap waktu</p>                        
                    </div>
                </div>
                <p className={`w-fit text-[rgba(255,255,255,0.54)] font-semibold mx-auto! mt-15! mb-2! opacity-0 ${onView && 'showIn'}`}>Amarix and Fadex team:</p>
                <h1 className={`slogan ${onView && 'slideUp'} opacity-0`}>“Jika produk yang kami jual berhubungan dengan kecepatan, maka layanan kami harus secepat produk kami, Diapakan dulu biar ga apakali”</h1>
            </div>
        </section>
    )
}