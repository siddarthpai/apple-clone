import ip14 from "./assets/ip14.png"

export default function IP14() {
    return (
      <div class="  text-center h-200">
        <div >
          <h1 class = "text-6xl pt-10">iPhone 14</h1>
          <h2>Two great sizes. <br/> Now with a splash of yellow.</h2>
          <div class="inline-grid grid-cols-2 text-indigo-700">
          <h2 class="mr-8">Learn More 	&#x3E; </h2>
          <h2>Buy 	&#x3E; </h2>
          </div>
          <img src={ip14} class="mx-auto"></img>
          
        </div>
      </div>
    )
  }