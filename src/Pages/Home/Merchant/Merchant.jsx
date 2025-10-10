import React from 'react';

const Merchant = () => {
    return (
        <div>
       <section 
  class="bg-cover bg-center" 
  style="background-image: url('your-background.jpg');"
>
  <div class="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center lg:items-start gap-10">
    
    <div class="flex-1 text-white space-y-6">
      <h2 class="text-3xl md:text-4xl font-bold">Merchant Header</h2>
      <h1 class="text-4xl md:text-5xl font-extrabold">Title Goes Here</h1>
      <p class="text-lg md:text-xl text-gray-200">
        This is a description about the merchant or the service. You can add more details here.
      </p>

     
      <div class="flex space-x-4 mt-4">
        <button class="bg-white text-black px-6 py-2 rounded hover:bg-yellow-400 transition-colors duration-300">
          Button 1
        </button>
        <button class="bg-white text-black px-6 py-2 rounded hover:bg-yellow-400 transition-colors duration-300">
          Button 2
        </button>
      </div>
    </div>

    
    <div class="flex-1">
      <img src="your-image.jpg" alt="Merchant" class="w-full rounded-lg shadow-lg" />
    </div>

  </div>
</section>
     
        </div>
    );
};

export default Merchant;