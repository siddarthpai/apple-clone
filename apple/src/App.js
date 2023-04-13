import ip14proimage from "./assets/ip14pro.png"


export default function App() {
  return (
    <div class="bg-black text-white text-center h-200">
      <div >
        <h1 class="text-6xl pt-8">iPhone 14 Pro</h1>
        <h2 class="text-3xl p-3">Pro. Beyond.</h2>
        <div class="inline-grid grid-cols-2 text-indigo-700 text-xl">
        <a href="https://www.apple.com/iphone-14-pro/" class="mr-8">Learn More 	&#x3E; </a>
        <a href="https://www.apple.com/shop/buy-iphone/iphone-14-pro" class="mr-8">Buy &#x3E; </a>
        </div>
        <img src={ip14proimage} class="pt-5 mx-auto w-[900px] h-[400px]"></img>
        
      </div>
    </div>
  )
}