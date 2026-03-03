<template>
  <footer class="bg-[#E6E7F3] px-6 py-10 lg:px-[100px] lg:py-[63px] w-full">
    <div class="mx-auto w-full max-w-[1240px]">
      <div
        class="grid grid-cols-2 gap-10 w-full lg:max-w-[1240px] lg:grid-cols-[359px_88px_208px_321.667px] lg:gap-x-[88px] lg:gap-y-0"
      >
        <div
          class="col-span-2 flex flex-col gap-4 lg:col-span-1 lg:w-[359px] lg:gap-[10px]"
        >
          <div class="flex items-center gap-2 lg:w-[182px]">
            <img
              src="/intellilogo.png"
              alt="IntelliToggle"
              class="h-[42.024px] w-[45.085px]"
            />
            <span
              class="bg-[linear-gradient(180deg,_#42389E_0%,_#0F1026_100%)] bg-clip-text text-center font-merriweather text-[19.85px] font-[700] leading-[100%] text-transparent"
            >
              IntelliToggle
            </span>
          </div>

          <p
            class="max-w-[390px] text-[16px] font-[300] leading-[24px] text-[#263238E6] lg:w-[359px] lg:max-w-none lg:text-[18px]"
          >
            Intelli Toggle is built by AORTEM, a company focused on powering
            scalable, multi-platform developer tools.
          </p>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:opacity-75 transition-opacity"
          >
            <img
              src="/github.png"
              alt="GitHub"
              class="h-[30px] w-[30px] rounded-full"
            />
          </a>
        </div>

        <div class="col-span-1 lg:w-[88px]">
          <h3
            class="text-[16px] font-[600] text-[#263238] lg:text-[18px] lg:leading-[20px]"
          >
            Company
          </h3>
          <ul
            class="mt-4 space-y-3 text-[14px] font-[300] text-[#263238] lg:mt-[16px] lg:text-[16px] lg:leading-[24px]"
          >
            <li>
              <a href="#" class="hover:text-[#42389E] transition-colors"
                >Pricing</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-[#42389E] transition-colors">DOC</a>
            </li>
            <li>
              <a href="#" class="hover:text-[#42389E] transition-colors"
                >About Us</a
              >
            </li>
          </ul>
        </div>

        <div class="col-span-1 lg:w-[208px]">
          <h3
            class="text-[16px] font-[600] text-[#263238] lg:text-[18px] lg:leading-[20px]"
          >
            Resources
          </h3>
          <ul
            class="mt-4 space-y-1 text-[14px] font-[300] text-[#263238] lg:mt-[16px] lg:text-[16px] lg:leading-[24px]"
          >
            <li>
              <a href="#" class="hover:text-[#42389E] transition-colors"
                >Why IntelliToggle is different</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-[#42389E] transition-colors"
                >Customer Support</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-[#42389E] transition-colors"
                >Terms & conditions</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-[#42389E] transition-colors"
                >Privacy Policy</a
              >
            </li>
          </ul>
        </div>

        <div
          class="col-span-2 mt-10 lg:col-span-1 lg:mt-0 lg:flex lg:w-[321.667px] lg:flex-col lg:gap-[27px]"
        >
          <h3
            class="text-[16px] font-[600] text-[#263238] lg:text-[15px] lg:leading-[100%]"
          >
            Subscribe to Newsletter
          </h3>
          <div
            class="mt-4 flex w-full overflow-hidden rounded-[8px] bg-white lg:mt-0 mx-auto sm:mx-0 max-w-[321.667px]"
          >
            <input
              type="email"
              placeholder="Enter email address"
              class="w-full border-0 bg-white px-4 py-[13px] font-inter text-[11.67px] leading-[18.33px] text-[#263238] outline-none placeholder:font-inter placeholder:text-[11.67px] placeholder:leading-[18.33px] placeholder:text-[#263238]"
            />
            <button
              type="button"
              class="flex items-center justify-center bg-[#42389E] font-inter text-[13.33px] font-[700] leading-[23.33px] text-white lg:w-[115.833px] lg:rounded-br-[6.67px] px-10 py-[13px] lg:rounded-tr-[6.67px] hover:bg-indigo-800 transition-colors"
            >
              <span class="text-center">Join</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
