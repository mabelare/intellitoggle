<template>
  <footer class="bg-[#E6E7F3] px-6 py-10 font-['DM_Sans'] lg:px-12">
    <div class="mx-auto max-w-[1180px]">
      <div class="grid grid-cols-2 gap-10 lg:grid-cols-[1.7fr_1fr_1.2fr_1.3fr]">
        <div class="col-span-2 lg:col-span-1">
          <div class="flex items-center gap-2">
            <img
              src="/intellilogo.png"
              alt="IntelliToggle"
              class="h-14 w-auto"
            />
            <span
              class="bg-gradient-to-r from-[#0F1026] to-[#42389E] bg-clip-text text-[22px] font-[700] leading-none text-transparent"
            >
              IntelliToggle
            </span>
          </div>

          <p
            class="mt-5 max-w-[390px] text-[16px] font-[400] leading-[145%] text-[#263238]"
          >
            Intelli Toggle is built by AORTEM, a company focused on powering
            scalable, multi-platform developer tools.
          </p>

          <img
            src="/github.png"
            alt="GitHub"
            class="mt-6 h-8 w-8 rounded-full"
          />
        </div>

        <div class="col-span-1">
          <h3 class="text-[16px] font-[700] text-[#263238]">Company</h3>
          <ul class="mt-4 space-y-3 text-[14px] font-[400] text-[#263238]">
            <li>Pricing</li>
            <li>Doc</li>
            <li>About Us</li>
          </ul>
        </div>

        <div class="col-span-1">
          <h3 class="text-[16px] font-[700] text-[#263238]">Resources</h3>
          <ul class="mt-4 space-y-3 text-[14px] font-[400] text-[#263238]">
            <li>Why IntelliToggle is different</li>
            <li>Customer Support</li>
            <li>Terms & conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div class="col-span-2 mt-10 lg:col-span-1 lg:mt-0">
          <h3 class="text-[16px] font-[700] text-[#263238]">
            Subscribe to Newsletter
          </h3>
          <div
            class="mt-4 flex h-[46px] w-full overflow-hidden rounded-[8px] bg-white"
          >
            <input
              type="email"
              placeholder="Enter email address"
              class="w-full border-0 bg-white px-8 text-[14px] text-[#263238] outline-none"
            />
            <button
              type="button"
              class="w-[104px] bg-[#42389E] text-[16px] font-[700] text-white"
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
