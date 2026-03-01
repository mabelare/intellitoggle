<template>
  <div
    class="bg-[radial-gradient(circle_at_top,_#F2F1FE_0%,_#3C29EB_100%)] font-[Poppins] text-slate-900 lg:min-h-screen"
  >
    <main class="pb-0 pt-4 lg:pt-10">
      <section class="rounded-t-sm">
        <div class="flex items-center justify-between px-4 lg:px-8 xl:px-14">
          <div class="flex items-center gap-2">
            <img
              src="/intellilogo.png"
              alt="IntelliToggle"
              class="h-12 w-auto lg:h-14"
            />
            <span
              class="inline-block bg-gradient-to-r from-[#42389E] to-[#0F1026] bg-clip-text pb-[2px] text-center font-['Merriweather_Sans'] text-[22px] font-[700] leading-[115%] tracking-[0] text-transparent lg:text-[24px]"
              >IntelliToggle</span
            >
          </div>

          <button
            type="button"
            class="hidden rounded-md bg-[#42389E] px-7 py-3 font-['DM_Sans'] text-[20px] font-[700] leading-[23px] tracking-[0] text-white shadow-md hover:bg-indigo-800 lg:inline-flex"
          >
            Get Started
          </button>

          <button
            type="button"
            aria-label="Toggle menu"
            class="relative z-40 inline-flex h-12 w-12 items-center justify-center rounded-md text-[#42389E] lg:hidden"
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
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>

        <div
          v-if="isMobileMenuOpen"
          class="fixed inset-0 z-30 flex items-center justify-center bg-[radial-gradient(circle_at_top,_#F2F1FE_0%,_#3C29EB_100%)] px-6 lg:hidden"
        >
          <button
            type="button"
            class="rounded-md bg-[#42389E] px-7 py-3 font-['DM_Sans'] text-[20px] font-[700] leading-[23px] tracking-[0] text-white shadow-md hover:bg-indigo-800"
            @click="isMobileMenuOpen = false"
          >
            Get Started
          </button>
        </div>

        <div
          class="mx-auto mt-10 max-w-4xl px-4 text-center text-[#42389E] lg:mt-12 xl:mt-14"
        >
          <h1
            class="font-['DM_Sans'] text-[34px] font-[700] leading-[42px] tracking-[0] text-center align-middle lg:text-[54px] lg:leading-[70px] xl:text-[64px] xl:leading-[84px]"
          >
            The First Dart–Native
            <span class="whitespace-normal text-center lg:whitespace-nowrap">
              Feature Flag & DartCodeAI</span
            >
          </h1>

          <p
            class="mx-auto mt-6 max-w-3xl text-[16px] text-[#42389E] lg:mt-7 lg:text-[22px] xl:mt-8 xl:text-2xl"
          >
            Ship faster, control rollouts, and get ready for AI-powered
            delivery, starting at just $1/month for a limited time
          </p>

          <div
            class="mt-8 flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-[36px]"
          >
            <button
              type="button"
              class="inline-flex h-[46px] items-center justify-center gap-[10px] whitespace-nowrap rounded-[5px] bg-[#42389E] px-5 py-3 font-['DM_Sans'] text-[16px] font-[700] leading-[23px] tracking-[0] text-white shadow-md hover:bg-indigo-800 lg:h-[52px] lg:pt-[20px] lg:pr-[30px] lg:pb-[20px] lg:pl-[30px] lg:text-[18px] xl:h-[55px] xl:pt-[24px] xl:pr-[36px] xl:pb-[24px] xl:pl-[36px] xl:text-[20px]"
            >
              Start for $1/mo
            </button>
            <button
              type="button"
              class="inline-flex h-[46px] items-center justify-center gap-[10px] whitespace-nowrap rounded-[5px] border border-[#42389E] bg-[#ece9fb] px-5 py-3 font-['DM_Sans'] text-[16px] font-[700] leading-[23px] tracking-[0] text-[#42389E] hover:bg-white lg:h-[52px] lg:pt-[20px] lg:pr-[30px] lg:pb-[20px] lg:pl-[30px] lg:text-[18px] xl:h-[55px] xl:pt-[24px] xl:pr-[36px] xl:pb-[24px] xl:pl-[36px] xl:text-[20px]"
            >
              Join AI Early Access
            </button>
          </div>
        </div>

        <div
          class="relative mx-4 mt-10 max-w-5xl rounded-lg bg-[linear-gradient(180deg,_#42389E_0%,_#0F1026_100%)] p-2 lg:mx-6 lg:mt-12 lg:p-3 xl:mx-auto xl:mt-14"
        >
          <img
            src="/dashboard.png"
            alt="IntelliToggle dashboard"
            class="w-full rounded-lg"
          />

          <div
            class="absolute left-[-96px] top-[86px] hidden w-[286px] rounded-[10px] bg-[#42389E] p-3 shadow-md xl:block 2xl:left-[-188px]"
          >
            <div
              class="rounded-[10px] bg-white px-3 pb-3 pt-2 text-[8px] text-slate-700"
            >
              <div class="flex items-start justify-between">
                <div
                  class="mx-auto flex flex-col items-center gap-1 text-[8px] font-semibold text-slate-800"
                >
                  <div class="flex items-center gap-1">
                    <img
                      src="/intellilogo.png"
                      alt="IntelliToggle logo"
                      class="h-3 w-auto"
                    />
                    <span class="text-[8px] font-semibold text-[#42389E]"
                      >intelliToggle</span
                    >
                  </div>
                  <span>🎉 Let's Start By Creating Your First Project 🎉</span>
                </div>
                <span class="text-[9px] text-slate-500">×</span>
              </div>

              <div class="mt-2 space-y-1.5">
                <div>
                  <p class="mb-0.5 text-[7px] font-medium text-slate-700">
                    Project name *
                  </p>
                  <div
                    class="h-5 rounded-[4px] border border-slate-200 bg-white px-2 text-[7px] leading-5 text-slate-400"
                  >
                    Project 1
                  </div>
                </div>

                <div>
                  <p class="mb-0.5 text-[7px] font-medium text-slate-700">
                    Environment Setup *
                  </p>
                  <div
                    class="flex h-5 items-center justify-between rounded-[4px] border border-slate-200 bg-white px-2 text-[7px] text-slate-500"
                  >
                    <span>Prod</span>
                    <span>▾</span>
                  </div>
                </div>

                <div>
                  <p class="mb-0.5 text-[7px] font-medium text-slate-700">
                    Description
                  </p>
                  <div
                    class="rounded-[4px] border border-slate-200 bg-white px-2 py-1"
                  >
                    <p class="text-[7px] text-slate-400">Message...</p>
                    <p class="mt-5 text-right text-[6px] text-slate-400">
                      0/200
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                class="-mx-1 mt-2 h-5 w-[calc(100%+8px)] rounded-[4px] bg-[#3F46B5] text-[7px] font-medium text-white"
              >
                Create
              </button>
            </div>
          </div>

          <div
            class="absolute right-[-40px] top-[18%] hidden w-[216px] rounded-xl bg-[linear-gradient(180deg,_#42389E_0%,_#848AE4_100%)] p-3 text-white shadow-md xl:block 2xl:right-[-108px]"
          >
            <div
              class="flex w-full items-center gap-2 whitespace-nowrap rounded-md bg-white px-3 py-2 text-[13px] font-medium leading-none text-[#42389E]"
            >
              <img
                src="/eos-icons.png"
                alt="Generate icon"
                class="h-5 w-5 shrink-0 object-contain"
              />
              <span>Generate Flag with AI</span>
            </div>
            <div
              class="mt-2 flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[#42389E] px-3 py-2 text-[14px] font-medium leading-none text-white"
            >
              <img
                src="/elements.png"
                alt="Create icon"
                class="h-5 w-5 shrink-0 object-contain"
              />
              <span>Create Flag</span>
            </div>
          </div>
        </div>
      </section>

      <section
        class="relative z-20 mt-8 w-full bg-[#42389E] py-4 text-white lg:-mt-12 lg:py-6"
      >
        <div
          class="mx-auto flex w-full max-w-[1400px] flex-col gap-4 px-4 lg:flex-row lg:items-center lg:justify-between lg:px-8"
        >
          <p
            class="flex-1 whitespace-normal text-center font-['Poppins'] text-[14px] font-[500] leading-[145%] tracking-[0] lg:text-left lg:text-[18px] lg:leading-[125%] xl:whitespace-nowrap xl:text-[20px] xl:leading-[120%]"
          >
            $1/month for your first year. Normally $10/month. Sign up before
            September 15, 2025.
          </p>

          <div
            class="ml-0 flex w-full flex-wrap items-center justify-center gap-[6px] lg:h-[75px] lg:w-auto lg:shrink-0 lg:flex-wrap lg:gap-[10px] xl:ml-8 xl:w-[356px] xl:flex-nowrap xl:gap-[12px]"
          >
            <div
              class="rounded-lg bg-amber-400 px-2.5 py-1.5 text-center text-white lg:px-3"
            >
              <p class="text-lg font-bold leading-none lg:text-2xl">36</p>
              <p class="mt-1 text-[9px] font-semibold uppercase lg:text-[11px]">
                Days
              </p>
            </div>
            <div
              class="rounded-lg bg-amber-400 px-2.5 py-1.5 text-center text-white lg:px-3"
            >
              <p class="text-lg font-bold leading-none lg:text-2xl">04</p>
              <p class="mt-1 text-[9px] font-semibold uppercase lg:text-[11px]">
                Hrs
              </p>
            </div>
            <div
              class="rounded-lg bg-amber-400 px-2.5 py-1.5 text-center text-white lg:px-3"
            >
              <p class="text-lg font-bold leading-none lg:text-2xl">45</p>
              <p class="mt-1 text-[9px] font-semibold uppercase lg:text-[11px]">
                Min
              </p>
            </div>
            <div
              class="rounded-lg bg-amber-400 px-2.5 py-1.5 text-center text-white lg:px-3"
            >
              <p class="text-lg font-bold leading-none lg:text-2xl">22</p>
              <p class="mt-1 text-[9px] font-semibold uppercase lg:text-[11px]">
                Sec
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isMobileMenuOpen = ref(false);
</script>
