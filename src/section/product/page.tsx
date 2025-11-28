import { useEffect, useRef } from "react"
import { ProductCard, type ProductCardTS } from "../../components/product-card"
import { useQuantaIntersection } from "../../hook/anim-hook"

export const ProductSection = () => {
    const AudioRef = useRef(new Audio('bgsound.mp3'))
    const BoxRef = useRef(null)
    const OnView = useQuantaIntersection(BoxRef, {threshold: 0.9})

    const ProductList: ProductCardTS[] = [
        {
            company: 'Koenigsegg', 
            car: 'Jesko Attack',
            logo: 'k.png',
            productclass: 'firstpage',
            description: 'Jesko Attack menonjol dengan fitur aerodinamika ekstrem yang menghasilkan downforce (gaya tekan ke bawah) luar biasa. Ini menjadikannya sangat stabil dan responsif saat melibas tikungan berkecepatan tinggi, ideal bagi mereka yang mencari mobil balap legal di jalan raya.',
            spec_one: '1.280 Horsepower',
            spec_two: 'V8 Twin Turbo'
         },         
        {
            company: 'Porsche', 
            car: '911 GT3',
            logo: 'p.png',
            productclass: 'secondpage',
            description: 'Porsche 911 GT3 adalah lambang dari mobil sport yang berfokus pada lintasan balap (track-focused) namun tetap legal untuk digunakan di jalan raya. Mobil ini mewakili filosofi Porsche untuk mengambil teknologi balap sejati dan menerapkannya pada model produksi massal.',
            spec_one: '510 Horsepower',
            spec_two: '7 Speed SDK'
         },         
        {
            company: 'Mercedes', 
            car: 'AMG GT R',
            logo: 'm.png',
            productclass: 'thridpage',
            description: 'Mercedes-AMG GT R ini dijuluki "The Beast of the Green Hell" karena pengembangannya yang luas di sirkuit Nürburgring Nordschleife yang legendaris di Jerman. Ini adalah model yang lebih ekstrem dan berfokus pada lintasan dari seri Mercedes-AMG GT.',
            spec_one: '585 Horsepower',
            spec_two: 'V8 Twin Turbo'
         },         
        {
            company: 'Lockheed Martin', 
            car: 'F 35 Lighting',
            logo: '',
            productclass: 'secretpage',
            description: 'F-35 Lightning II adalah pesawat tempur multiperan generasi kelima buatan Amerika Serikat yang dirancang untuk menjadi tulang punggung kekuatan udara militer AS dan sekutunya selama beberapa dekade mendatang. Proyek ini dikembangkan dan diproduksi oleh Lockheed Martin dengan mitra utama BAE Systems dan Northrop Grumman.',            
            spec_one: 'Stealth Jet',
            spec_two: '1.931 Km/Hour'
         },         
        {
            company: 'Porsche', 
            car: 'Panzerkampfwagen VI Tiger Ausf. E',
            logo: 'p.png',
            productclass: 'warpage',
            description: 'Tiger I adalah tank yang sangat dihormati dan ditakuti karena kekuatan tembak (meriam 88 mm) dan perlindungan lapis baja depannya yang superior, menjadikannya tank yang sangat berbahaya jika bertemu secara langsung, meskipun harus ditukar dengan mobilitas dan keandalan yang rendah.',            
            spec_one: 'Heavy Armour',
            spec_two: 'Big calliber'
         },         
    ]
    useEffect(() => {
        if (OnView) {
            const audio = AudioRef.current
            audio.loop = true
            audio.currentTime = 0.40
            audio.volume = 1
            audio.play()
            console.log(OnView)
        }
    }, [OnView])

    return (
        <section className="product-section flex overflow-x-scroll snap-end snap-x snap-mandatory" ref={BoxRef} onClick={() => {            
            AudioRef.current.play()
        }}>
            <div className="startpage w-screen h-screen snap-end bg-[rgba(17,17,17,1)]">
                <h1 className="showcase-text">Showcase our product</h1>
                <p className="text-[rgba(255,255,255,0.43)]">Drag to left</p>
            </div>
            {ProductList.map((obj, index) => 
            <ProductCard {...obj} key={index}/>)}
        </section>
    )
}