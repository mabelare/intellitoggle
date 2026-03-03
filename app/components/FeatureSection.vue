<template>
  <section
    class="py-16 lg:mx-auto lg:flex lg:h-[920px] lg:max-w-[1440px] lg:justify-center lg:py-[80px]"
  >
    <div
      class="mx-auto flex flex-col gap-12 px-4 lg:h-[760px] w-full lg:max-w-[1184px] lg:gap-[64px] lg:px-0"
    >
      <div
        class="text-center lg:mx-auto lg:flex lg:h-[132px] w-full lg:max-w-[868px] lg:flex-col lg:justify-between"
      >
        <h2
          class="text-3xl font-semibold text-[#2E2E2E] lg:text-[48px] lg:leading-[100%]"
        >
          Powerful Features, Simplified
        </h2>
        <p
          class="mt-4 text-base font-[400] text-[#2E2E2E] lg:mt-0 lg:text-[20px] lg:leading-[150%]"
        >
          AI-driven intelligence meets developer-friendly simplicity
        </p>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:h-[618px] w-full lg:max-w-[1184px] lg:gap-[32px]"
      >
        <FeatureCard
          icon="/file.png"
          icon-alt="AI Icon"
          title="AI–Powered Flag Creation"
          description="Our AI analyzes your user base, traffic patterns, and historical data to suggest optimal rollout strategies automatically."
        />
        <FeatureCard
          icon="/file.png"
          icon-alt="AI Icon"
          title="Smart Targeting"
          description="Advanced user segmentation with real-time behavioral analysis ensures your features reach the most engaged audience."
        />
        <FeatureCard
          icon="/file.png"
          icon-alt="AI Icon"
          title="Flag Cleanup"
          description="Keep your codebase clean with intelligent flag lifecycle management that removes technical debt automatically."
        />
        <FeatureCard
          icon="/file.png"
          icon-alt="note Icon"
          title="Environment & A/B Testing"
          description="Multi-environment support with sophisticated A/B testing framework gives you confidence in every release."
        />
      </div>
    </div>
  </section>
</template>
