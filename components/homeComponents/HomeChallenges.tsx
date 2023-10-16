import HomeChallengeCard from './HomeChallengeCard';

// This section is hidden if there are no challenges
export default function HomeChallenges() {
  return (
    <section className="md:py-12 py-2 2xl:w-3/5 w-4/5 mx-auto text-secondaryDark">
      <div className="text-center font-bold lg:text-5xl md:text-3xl text-2xl my-4 mb-8 xl:mb-12 2xl:mb-16">
        CHALLENGES
      </div>
      {/* Main challenge card */}
      <div className="border-2 border-secondaryDark p-[2px] hoefler-text">
        <div className="border-2 border-secondaryDark 2xl:py-12 py-8 2xl:px-32 xl:px-24 md:px-12 px-10">
          <div className="2xl:text-4xl text-3xl text-center font-semibold">Grand Prizes</div>
          <p className="sm:my-6 my-3 xl:text-lg">
            This will be a description of how we judge grand prizing as well as any requirements.
            blah blah balh blah blah blah blah.
          </p>
          <p className="text-xl font-semibold">Judging Criteria</p>
          <p className="xl:text-lg mt-2">
            Here, we can talk about the various factors that we might consider in grand prizing. Idk
            how long it would be se you can ask experience about it or something. Here, we can talk
            about the various factors that we might consider in grand prizing. Idk how long it would
            be se you can ask experience about it or something. Here, we can talk about the various
            factors that we might consider in grand prizing. Idk how long it would be se you can ask
            experience about it or something.
          </p>
          <div className="hidden sm:flex w-full justify-between mt-10 md:text-base text-sm">
            <div className="flex flex-col items-center grow">
              <div className="md:text-xl text-lg font-semibold">1st Place Prize</div>
              <div>MacBook Pro</div>
              <div> &#40;1 per team member&#41;</div>
            </div>
            <div className="flex flex-col items-center grow">
              <div className="md:text-xl text-lg font-semibold">2nd Place Prize</div>
              <div>iPad Air</div>
              <div> &#40;1 per team member&#41;</div>
            </div>
            <div className="flex flex-col items-center grow">
              <div className="md:text-xl text-lg font-semibold">3rd Place Prize</div>
              <div>iPhone 15</div>
              <div> &#40;1 per team member&#41;</div>
            </div>
          </div>
          <div className="sm:hidden block mt-8">
            <ul className="leading-snug">
              <li>1st: MacBook &#40;1 per team member&#41;</li>
              <li>2nd: iPad Air &#40;1 per team member&#41;</li>
              <li>3rd: iPhone 15 &#40;1 per team member&#41;</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Sponsor challenges */}
      <div className="flex flex-wrap justify-between">
        <HomeChallengeCard
          sponsor="Goldman Sachs"
          challengeName="Goldman Sachs Challenge"
          prizes={['Macbook Air', 'iPad Air', 'iPhone 15']}
          sponsorSummary="Goldman Sachs Goldman Sachs Goldman Sachs Goldman Sachs Goldman Sachs Goldman Sachs Goldman Sachs"
          challengeStatement="This is the Goldman Sachs challenge. This is the Goldman Sachs challenge. This is the Goldman Sachs challenge. This is the Goldman Sachs challenge. This is the Goldman Sachs challenge. This is the Goldman Sachs challenge. This is the Goldman Sachs challenge. This is the Goldman Sachs challenge. This is the Goldman Sachs challenge. This is the Goldman Sachs challenge. This is the Goldman Sachs challenge. "
        />
        <HomeChallengeCard
          sponsor="Toyota"
          challengeName="Toyota Challenge"
          prizes={['Macbook Air', 'iPad Air', 'iPhone 15']}
          sponsorSummary="Toyota Toyota Toyota Toyota Toyota Toyota Toyota Toyota Toyota Toyota Toyota Toyota Toyota Toyota Toyota Toyota"
          challengeStatement="This is the Toyota Challenge. This is the Toyota Challenge. This is the Toyota Challenge. This is the Toyota Challenge. This is the Toyota Challenge. This is the Toyota Challenge. This is the Toyota Challenge. This is the Toyota Challenge. This is the Toyota Challenge. This is the Toyota Challenge. This is the Toyota Challenge. This is the Toyota Challenge. This is the Toyota Challenge. This is the Toyota Challenge. This is the Toyota Challenge. "
        />
        <HomeChallengeCard
          sponsor="Fidelity"
          challengeName="Fidelity Challenge"
          prizes={['Macbook Air', 'iPad Air', 'iPhone 15']}
          sponsorSummary="Fidelity Fidelity Fidelity Fidelity Fidelity Fidelity Fidelity Fidelity Fidelity Fidelity Fidelity Fidelity Fidelity"
          challengeStatement="This is the Fidelity Challenge. This is the Fidelity Challenge. This is the Fidelity Challenge. This is the Fidelity Challenge. This is the Fidelity Challenge. This is the Fidelity Challenge. This is the Fidelity Challenge. This is the Fidelity Challenge. This is the Fidelity Challenge. This is the Fidelity Challenge. This is the Fidelity Challenge. This is the Fidelity Challenge. This is the Fidelity Challenge. This is the Fidelity Challenge. "
        />
        <HomeChallengeCard
          sponsor="StateFarm"
          challengeName="StateFarm Challenge"
          prizes={['Macbook Air', 'iPad Air', 'iPhone 15']}
          sponsorSummary="StateFarm StateFarm StateFarm StateFarm StateFarm StateFarm StateFarm StateFarm StateFarm StateFarm StateFarm StateFarm StateFarm"
          challengeStatement="This is the StateFarm Challenge. This is the StateFarm Challenge. This is the StateFarm Challenge. This is the StateFarm Challenge. This is the StateFarm Challenge. This is the StateFarm Challenge. This is the StateFarm Challenge. This is the StateFarm Challenge. This is the StateFarm Challenge. This is the StateFarm Challenge. This is the StateFarm Challenge. This is the StateFarm Challenge. This is the StateFarm Challenge. "
        />
      </div>
    </section>
  );
}
