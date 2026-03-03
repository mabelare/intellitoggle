<template>
  <section
    aria-label="Customer testimonials"
    class="bg-[#ECEBF5] py-[56px] lg:mx-auto lg:min-h-[596px] w-full lg:p-[80px]"
  >
    <div
      class="mx-auto flex flex-col gap-8 px-4 w-full lg:max-w-[1284px] lg:gap-[26px] lg:px-0"
    >
      <h2
        class="text-center text-[30px] font-[600] leading-[110%] text-[#42389E] lg:text-[48px] lg:leading-[100%]"
      >
        What Customers Say About Us
      </h2>
      <p
        class="text-center text-[16px] font-[400] leading-[130%] text-[#42389E] lg:text-[20px] lg:leading-[150%]"
      >
        Stay updated with our groundbreaking research discoveries and scientific
        publications
      </p>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:max-w-[1284px] lg:grid-cols-3 lg:gap-[48px]"
      >
        <TestimonialCard
          quote="Intellitoggle cut our launch risk dramatically. We ship confidently every day."
          photo="/chima.png"
          name="Eng. Chima Umeh"
          role="CTO, Nova"
        />
        <TestimonialCard
          quote="Our PMs now control rollouts without waiting on dev cycles. Huge win."
          photo="/John.png"
          name="John Kennedy"
          role="Head of Product, EdgeFlow"
        />
        <TestimonialCard
          quote="Experiments are painless and data-driven. Engagement up 12% in two weeks."
          photo="/Henry.png"
          name="Dan Harry"
          role="Software Engineer, Nova"
        />
      </div>
    </div>
  </section>

  <section
    aria-label="Call to action"
    class="px-4 py-[56px] lg:mx-auto w-full lg:px-[98px] lg:py-[72px]"
  >
    <div
      class="relative mx-auto rounded-[20px] bg-[radial-gradient(50%_50%_at_50%_50%,_#6F66C2_0%,_#42389E_100%)] lg:min-h-[375px] w-full max-w-[1243px] flex-col justify-center items-center"
    >
      <div
        class="mx-auto lg:min-h-[375px] flex w-full flex-col justify-center items-center gap-10 text-center max-w-[896px] p-6 lg:gap-[48px]"
      >
        <div class="flex flex-col items-center gap-4">
          <h2
            class="text-[28px] font-[500] leading-[115%] text-[#FFFFFF] lg:text-[36px] lg:leading-[120%]"
          >
            Launch Features Confidently With AI Driven Flags
          </h2>
          <p
            class="text-[16px] font-[400] leading-[130%] text-[#FFFFFFE6] lg:text-[18px] lg:leading-[132%]"
          >
            Start for free, scale as your team grows
          </p>
        </div>

        <div
          class="mt-4 flex items-center justify-center gap-4 max-[1023px]:flex-col lg:h-[55px] w-full lg:max-w-[841px] lg:gap-[32px]"
        >
          <AppButton
            variant="cta-primary"
            class="h-[55px] w-full sm:w-[210px] text-[20px]"
          >
            <span>Start for $1/mo</span>
          </AppButton>
          <AppButton
            variant="cta-ghost"
            class="h-[55px] w-full sm:w-[231px] text-[20px]"
          >
            <span>Join AI Early Access</span>
          </AppButton>
        </div>
      </div>
    </div>
  </section>
</template>
