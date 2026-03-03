<template>
  <div
    class="bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(242,241,254,0.2)_0%,_rgba(60,41,235,0.2)_100%)] text-slate-900"
  >
    <div class="pb-0 pt-4 lg:pt-0">
      <section
        class="mx-auto px-4 rounded-t-sm lg:flex lg:min-h-[1121px] lg:max-w-[1440px] lg:flex-col lg:gap-[64px] lg:px-[100px] lg:pt-[80px]"
      >
        <header>
          <nav
            aria-label="Main navigation"
            class="flex w-full max-w-[1240px] mx-auto items-center justify-between"
          >
            <div class="flex items-center gap-1">
              <img
                src="/intellilogo.png"
                alt="IntelliToggle home"
                class="w-[54.5px] lg:h-14"
              />
              <span
                class="inline-block bg-gradient-to-r from-[#42389E] to-[#0F1026] bg-clip-text pb-[2px] text-center font-merriweather text-[22px] font-[700] leading-[115%] tracking-[0] text-transparent lg:text-[24px] lg:leading-[100%]"
                >IntelliToggle</span
              >
            </div>

            <AppButton
              class="hidden px-[36px] text-[20px] tracking-[0] lg:inline-flex lg:h-[55px] lg:min-w-[184px]"
            >
              Get Started
            </AppButton>

            <button
              type="button"
              :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
              :aria-expanded="isMobileMenuOpen"
              aria-controls="mobile-menu"
              class="relative z-40 inline-flex h-12 w-12 items-center justify-center rounded-md text-[#42389E] focus:outline-none focus:ring-2 focus:ring-[#42389E] focus:ring-offset-2 lg:hidden"
              @click="isMobileMenuOpen = !isMobileMenuOpen"
            >
              <svg
                v-if="!isMobileMenuOpen"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-9 w-9"
                aria-hidden="true"
              >
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="7" y1="12" x2="17" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>

              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-9 w-9"
                aria-hidden="true"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
          </nav>
        </header>

        <div
          v-if="isMobileMenuOpen"
          id="mobile-menu"
          role="dialog"
          aria-label="Mobile navigation menu"
          class="fixed inset-0 z-30 flex items-center justify-center bg-[radial-gradient(circle_at_top,_#F2F1FE_0%,_#3C29EB_100%)] px-6 lg:hidden"
        >
          <AppButton
            class="rounded-md px-7 py-3 text-[20px] tracking-[0]"
            @click="isMobileMenuOpen = false"
          >
            Get Started
          </AppButton>
        </div>

        <div
          class="mx-auto mt-10 max-w-[841px] px-4 text-center text-[#42389E] lg:mt-[64px] lg:px-0"
        >
          <h1
            class="text-center text-[28px] font-[700] leading-[36px] sm:text-[34px] sm:leading-[42px] lg:text-[64px] lg:leading-[84px]"
          >
            The First Dart–Native
            <span class="whitespace-normal text-center lg:whitespace-nowrap">
              Feature Flag & DartCodeAI</span
            >
          </h1>

          <p
            class="mx-auto mt-6 text-[15px] leading-[22px] sm:text-[16px] text-[#42389E] lg:text-[24px] lg:leading-[24px]"
          >
            Ship faster, control rollouts, and get ready for AI-powered
            delivery, starting at just $1/month for a limited time
          </p>

          <div
            class="mt-6 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8"
          >
            <AppButton
              class="w-full max-w-[280px] sm:w-auto px-5 py-3 text-[16px] tracking-[0] lg:h-[55px] lg:px-[36px] lg:text-[20px]"
            >
              Start for $1/mo
            </AppButton>
            <AppButton
              variant="secondary"
              class="w-full max-w-[280px] sm:w-auto px-5 py-3 text-[16px] tracking-[0] lg:h-[55px] lg:w-[231px] lg:px-[36px] lg:text-[20px]"
            >
              Join AI Early Access
            </AppButton>
          </div>
        </div>

        <div
          class="relative mt-10 w-full max-w-[964px] mx-auto rounded-lg bg-[linear-gradient(180deg,_#42389E_0%,_#0F1026_100%)] shadow-[0px_4px_30px_20px_#0000000D] lg:rounded-bl-none lg:rounded-br-none lg:rounded-tl-[16px] lg:rounded-tr-[16px]"
        >
          <div class="w-full overflow-hidden">
            <img
              src="/dashboard.svg"
              alt="IntelliToggle dashboard showing feature flag management interface"
              class="w-full"
            />
          </div>

          <div
            class="absolute left-[-104px] top-[150px] z-20 mx-auto hidden h-[199.141px] w-[283.372px] max-w-[1068px] rounded-[10px] bg-[#42389E] p-2 shadow-md xl:block 2xl:left-[-120px]"
            aria-hidden="true"
          >
            <div
              class="flex h-[183.14px] w-[267.37px] flex-col gap-[6.26px] rounded-[2.78px] border-[0.35px] border-slate-200 bg-white p-[8.34px] text-[8px] text-slate-700"
            >
              <div class="flex items-start justify-between">
                <div
                  class="mx-auto flex h-[27.579px] w-[204.691px] flex-col items-center gap-[4.17px] text-[8px] font-semibold text-slate-800"
                >
                  <div class="flex items-center gap-1">
                    <img
                      src="/intellilogo.png"
                      alt=""
                      class="h-3 w-auto"
                    />
                    <span class="text-[8px] font-semibold text-[#42389E]"
                      >intelliToggle</span
                    >
                  </div>
                  <span>Let's Start By Creating Your First Project </span>
                </div>
                <span class="text-[9px] text-slate-500">&times;</span>
              </div>

              <div
                class="flex h-[107.98px] w-[250.691px] flex-col gap-[4.17px]"
              >
                <div>
                  <p class="mb-[2px] text-[7px] font-medium text-slate-700">
                    Project name *
                  </p>
                  <div
                    class="h-5 rounded-[4px] border border-slate-200 bg-white px-2 text-[7px] leading-5 text-slate-400"
                  >
                    Project 1
                  </div>
                </div>

                <div>
                  <p class="mb-[2px] text-[7px] font-medium text-slate-700">
                    Environment Setup *
                  </p>
                  <div
                    class="flex h-5 items-center justify-between rounded-[4px] border border-slate-200 bg-white px-2 text-[7px] text-slate-500"
                  >
                    <span>Prod</span>
                    <span>&#9662;</span>
                  </div>
                </div>

                <div>
                  <p class="mb-[2px] text-[7px] font-medium text-slate-700">
                    Description
                  </p>
                  <div
                    class="rounded-[4px] border border-slate-200 bg-white px-2 py-1"
                  >
                    <p class="text-[7px] text-slate-400">Message...</p>
                    <p class="mt-4 text-right text-[6px] text-slate-400">
                      0/200
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                class="-mx-1 mt-[6.26px] h-5 w-[calc(100%+8px)] rounded-[4px] bg-[#3F46B5] text-[7px] font-medium text-white"
              >
                Create
              </button>
            </div>
          </div>

          <div
            class="absolute right-[-135px] top-[100px] z-20 hidden h-[121.865px] w-[223px] rounded-[10.26px] bg-[linear-gradient(180deg,_#42389E_0%,_#848AE4_100%)] p-[12px] text-white shadow-md xl:block 2xl:right-[-108px]"
            aria-hidden="true"
          >
            <div
              class="flex h-[42.653px] w-[199px] items-center gap-[4.27px] whitespace-nowrap rounded-[8.53px] border-[1.07px] border-transparent bg-white p-[8.53px] font-satoshi text-[14.93px] font-medium leading-[21.33px] tracking-[-0.6%] text-[#42389E]"
            >
              <img
                src="/eos-icons.png"
                alt=""
                class="h-5 w-5 shrink-0 object-contain"
              />
              <span>Generate Flag with AI</span>
            </div>
            <div
              class="mt-2 flex h-[42.653px] w-[199px] items-center justify-center gap-[4.27px] whitespace-nowrap rounded-[8.53px] bg-[#42389E] p-[8.53px] font-inter text-[14.05px] font-medium leading-[20.08px] tracking-[-0.6%] text-white"
            >
              <img
                src="/elements.png"
                alt=""
                class="h-5 w-5 shrink-0 object-contain"
              />
              <span>Create Flag</span>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="Limited time offer countdown"
        class="relative z-20 mt-8 w-full bg-[#42389E] py-4 font-poppins text-white lg:min-h-[176px] lg:py-[50px]"
      >
        <div
          class="mx-auto flex w-full flex-col gap-4 px-4 lg:px-0 max-w-[1272px] lg:flex-row lg:items-center lg:justify-between lg:gap-[51px]"
        >
          <p
            class="flex-1 text-center text-[14px] font-[500] leading-[145%] tracking-[0] lg:max-w-[865px] lg:text-left lg:text-[20px] lg:leading-[120%]"
          >
            $1/month for your first year. Normally $10/month. Sign up before
            September 15, 2025.
          </p>

          <div
            role="timer"
            aria-label="Time remaining for offer"
            class="flex w-full lg:w-max flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-[16px]"
          >
            <CountdownUnit value="36" label="Days" />
            <CountdownUnit value="04" label="Hrs" />
            <CountdownUnit value="45" label="Min" />
            <CountdownUnit value="22" label="Sec" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isMobileMenuOpen = ref(false);
</script>
