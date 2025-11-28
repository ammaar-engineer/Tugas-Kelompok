import { useDelayAnim } from "../hook/anim-hook";


interface SupportedCardTS {
    pngName: string,
    width: string,
    height: string,
    content: string    
    delayNumber: number
}

export function SupportedCard({pngName, width, height, content, delayNumber}: SupportedCardTS) {
  const onLoad = useDelayAnim(true, delayNumber)

  return (
    <div className={`h-[200px] w-[200px] flex flex-col items-center gap-4 opacity-0 ${onLoad && 'showIn slideUp'}`}>
      <img src={pngName} alt="" className={`w-[140px] h-[140px]`} />
      <h1 className="text-white font-semibold">{content}</h1>
    </div>
  );
}
