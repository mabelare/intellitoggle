<template>
  <footer class="bg-[#E6E7F3] px-6 py-10 lg:px-[100px] lg:py-[63px] w-full">
    <div class="mx-auto w-full max-w-[1240px]">
      <div
        class="grid grid-cols-2 gap-10 w-full lg:max-w-[1240px] lg:grid-cols-[1fr_auto_auto_1fr] lg:gap-x-[40px] xl:gap-x-[88px] lg:gap-y-0"
      >
        <div
          class="col-span-2 flex flex-col gap-4 lg:col-span-1 lg:max-w-[359px] lg:gap-[10px]"
        >
          <div class="flex items-center gap-2 lg:w-[182px]">
            <img
              src="/intellilogo.png"
              alt="IntelliToggle logo"
              class="h-[42.024px] w-[45.085px]"
            />
            <span
              class="bg-[linear-gradient(180deg,_#42389E_0%,_#0F1026_100%)] bg-clip-text text-center font-merriweather text-[19.85px] font-[700] leading-[100%] text-transparent"
            >
              IntelliToggle
            </span>
          </div>

          <p
            class="max-w-[390px] text-[16px] font-[300] leading-[24px] text-[#263238E6] lg:max-w-[359px] lg:text-[18px]"
          >
            Intelli Toggle is built by AORTEM, a company focused on powering
            scalable, multi-platform developer tools.
          </p>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="IntelliToggle on GitHub (opens in a new tab)"
            class="hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-[#42389E] focus:rounded-full transition-opacity w-fit"
          >
            <img
              src="/github.png"
              alt=""
              class="h-[30px] w-[30px] rounded-full"
            />
          </a>
        </div>

        <nav aria-label="Company links" class="col-span-1">
          <h3
            class="text-[16px] font-[600] text-[#263238] lg:text-[18px] lg:leading-[20px]"
          >
            Company
          </h3>
          <ul
            class="mt-4 space-y-3 text-[14px] font-[300] text-[#263238] lg:mt-[16px] lg:text-[16px] lg:leading-[24px]"
          >
            <li>
              <a
                href="#"
                class="hover:text-[#42389E] focus:outline-none focus:underline transition-colors"
                >Pricing</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-[#42389E] focus:outline-none focus:underline transition-colors"
                >Documentation</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-[#42389E] focus:outline-none focus:underline transition-colors"
                >About Us</a
              >
            </li>
          </ul>
        </nav>

        <nav aria-label="Resources links" class="col-span-1">
          <h3
            class="text-[16px] font-[600] text-[#263238] lg:text-[18px] lg:leading-[20px]"
          >
            Resources
          </h3>
          <ul
            class="mt-4 space-y-1 text-[14px] font-[300] text-[#263238] lg:mt-[16px] lg:text-[16px] lg:leading-[24px]"
          >
            <li>
              <a
                href="#"
                class="hover:text-[#42389E] focus:outline-none focus:underline transition-colors"
                >Why IntelliToggle is different</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-[#42389E] focus:outline-none focus:underline transition-colors"
                >Customer Support</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-[#42389E] focus:outline-none focus:underline transition-colors"
                >Terms & conditions</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-[#42389E] focus:outline-none focus:underline transition-colors"
                >Privacy Policy</a
              >
            </li>
          </ul>
        </nav>

        <div
          class="col-span-2 mt-10 lg:col-span-1 lg:mt-0 lg:flex lg:max-w-[321.667px] lg:flex-col lg:gap-[27px]"
        >
          <h3
            class="text-[16px] font-[600] text-[#263238] lg:text-[15px] lg:leading-[100%] text-center sm:text-left"
            id="newsletter-label"
          >
            Subscribe to Newsletter
          </h3>
          <form
            class="mt-4 flex w-full overflow-hidden rounded-[8px] bg-white lg:mt-0 mx-auto sm:mx-0 max-w-[321.667px]"
            aria-labelledby="newsletter-label"
            @submit.prevent
          >
            <label for="newsletter-email" class="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              autocomplete="email"
              placeholder="Enter email address"
              class="w-full border-0 bg-white px-4 py-[13px] font-inter text-[11.67px] leading-[18.33px] text-[#263238] outline-none focus:ring-2 focus:ring-inset focus:ring-[#42389E] placeholder:font-inter placeholder:text-[11.67px] placeholder:leading-[18.33px] placeholder:text-[#263238]"
            />
            <button
              type="submit"
              class="flex items-center justify-center bg-[#42389E] font-inter text-[13.33px] font-[700] leading-[23.33px] text-white lg:w-[115.833px] lg:rounded-br-[6.67px] px-10 py-[13px] lg:rounded-tr-[6.67px] hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset transition-colors"
            >
              <span class="text-center">Join</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>
