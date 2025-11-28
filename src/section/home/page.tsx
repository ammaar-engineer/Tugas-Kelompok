import { SupportedCard } from '../../components/supported-card'
import '../../global.css'

export function HomeSection () {

    const SupportedInformation = [
        {content: 'Koenigsegg', pngName: 'k.png', width: '70%', height: '70%'},
        {content: 'Porsche', pngName: 'p.png', width: '40px', height: '40px'},
        {content: 'Mercedes', pngName: 'm.png', width: '70%', height: '70%'}
    ]

    return (
        <section className="home-container bg-[rgba(17,17,17,1)] w-screen h-screen">       
            <div className="main-padding home-sec">
                <h1 className='text-[rgba(255,255,255,0.74)] title showIn'>Welcome to</h1>
                <h1 className='main-title slideDown'>Quanta Sportcar Dealer</h1>
                <p className='sub-title showIn'>Sell best hypercar and sports car from around the world with excelent services</p>
                <div className='supported-container'>
                    <h1 className='supported-text text-white font-semibold showIn'>Supported by:</h1>
                    <div className='flex items-center justify-center gap-50  mt-10!'>                        
                        {SupportedInformation.map((item, index) => {                            
                            return <SupportedCard {...item} key={index} delayNumber={200 + (index * 300)}/>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}