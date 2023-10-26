import HomeChallengeCard from './HomeChallengeCard';

// This section is hidden if there are no challenges
export default function HomeChallenges() {
  return (
    <section className="md:py-12 py-2 2xl:w-3/5 w-[85%] mx-auto text-secondaryDark">
      <div className="text-center font-bold lg:text-5xl md:text-3xl text-2xl my-4 mb-8 xl:mb-12 2xl:mb-16">
        CHALLENGES
      </div>
      {/* Main challenge card */}
      <div className="border-2 border-secondaryDark p-[2px] hoefler-text">
        <div className="border-2 border-secondaryDark 2xl:py-12 py-8 2xl:px-32 xl:px-24 md:px-12 px-10">
          <div className="2xl:text-4xl text-3xl text-center font-semibold">Grand Prizes</div>
          <p className="sm:my-6 my-3 xl:text-lg">
            Every project submitted will be automatically eligible for the grand prize running.
            However, you can only submit to two company challenges but as many tracks as you want.
            Present your project to the judge for 3-5 minutes about your app, how you built it, your
            challenges, and a demo. You will present your project to multiple judges one after
            another, please do not leave after presenting once.
          </p>
          <p className="text-xl font-semibold">Judging Criteria</p>
          <p className="xl:text-lg mt-2">
            <p className="font-bold inline">Idea:</p> Does it solve a necessary and prevalent issue?
            <br />
            <p className="font-bold inline">Technology:</p> How difficult was the hack?
            <br />
            <p className="font-bold inline">Design:</p> How was the user experience?
            <br />
            <p className="font-bold inline">Learning:</p> Have you worked on something similar or is
            this new?
            <br />
            <p className="font-bold inline">Completion:</p> Does it work?
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
          challengeName="AI based Algorithmic Earnings Forecasting - NOT DONE"
          prizes={['MISSING PRIZES']}
          sponsorSummary="At Goldman Sachs, our engineers don't just make things - we make things possible. Build innovations that drive our business and financial markets worldwide. Solve the most challenging and pressing engineering problems for our clients. Join our engineering teams that build massively scalable software and systems, architect low latency infrastructure solutions, proactively guard against cyber threats, and leverage machine learning alongside financial engineering to continuously turn data into action. Stop by our booth during the hackathon to learn more!"
          challengeStatement="Develop an AI application combining outputs of open source generative AI models and openly available market and economic data that predicts company earnings and financial performance using alternative data sources, like news sentiment and social media trends.\n\nTechnology Trends: GenAI, Natural language processing, sentiment analysis, and machine learning for financial forecasting."
        />
        <HomeChallengeCard
          sponsor="Toyota"
          challengeName="Toyota Challenge - NOT DONE"
          prizes={['MISSING PRIZES']}
          sponsorSummary="At Toyota, we work hard to create some of the highest quality vehicles on the road. But there is more to our story. We’re also finding innovative ways to advance society with cutting edge technology, and our commitment to creating a positive impact on people, local communities, and the environment. We're creating the future of mobility where everyone has the freedom to move. In addition, an important part of the Toyota family is Toyota Financial Services (TFS), the finance and insurance brand for Toyota and Lexus in North America. While TFS is a separate business entity, it is an essential part of this world-changing company – delivering on Toyota’s vision to move people beyond what’s possible. Across Toyota, we’re actively recruiting for computer science, data science, AI/automation, product management, software engineering, electrical engineering, and many more!"
          challengeStatement="Toyota’s global vision is to lead the future of mobility, enriching lives around the world with the safest and most responsible ways of moving people. Through our
commitment to quality, ceaseless innovation, and respect for the planet, we strive to exceed expectations, and be rewarded with a smile.\n\nYour challenge is to build a mobile app or in-cabin experience (e.g., driver, passenger, back seat, etc.) that leverages industry trends such as Electric Vehicle
(EV), Generative AI, or Cyber Security, to optimize the driving experience.\n\nStart Your Impossible."
        />
        <HomeChallengeCard
          sponsor="Fidelity"
          challengeName="Fidelity Challenge - NOT DONE"
          prizes={['MISSING PRIZES']}
          sponsorSummary="Fidelity Investments is a privately held company with a mission to strengthen the financial well-being of our clients. We help people invest and plan for their future. We assist companies and non-profit organizations in delivering benefits to their employees. And we provide institutions and independent advisors with investment and technology solutions to help invest their own clients’ money. At Fidelity, you’ll find endless opportunities to build a meaningful career that positively impacts peoples’ lives, including yours. You can take advantage of flexible benefits that support you through every stage of your career, empowering you to thrive at work and at home. Honored with a Glassdoor Employees’ Choice Award, we have been recognized by our employees as a Best Place to Work in 2023. By investing $2.5B annually in game-changing tech platforms, Fidelity encourages our technologists to help reinvent the way we deliver financial services to our customers. Join us!"
          challengeStatement="At Fidelity, Diversity, Equity, and Inclusion are viewed as major keys to the success of our business, which is why we are challenging you to come up with innovative ways to create forward-thinking financial tech that promotes equality for all people! We want you to use your hacking skills to find and build solutions that put financial opportunities and resources within reach for all communities, creating accessible, sustainable, and/or inclusive solutions."
        />
        <HomeChallengeCard
          sponsor="StateFarm"
          challengeName="StateFarm Challenge"
          prizes={['PlayStation 5', '3D Printers', 'Beats Studio 3']}
          sponsorSummary="Our vision for the future is to be the customer's first and best choice in the products and services we provide. We will continue to be the leader in the insurance industry and we will become a leader in the financial services arena. Our customers' needs will determine our path. Our values will guide us. "
          challengeStatement="State Farm doesn’t just have auto and home insurance, we also have small business insurance. Design a solution to enhance the small business insurance experience with State Farm."
        />
        <HomeChallengeCard
          sponsor="PRHI"
          challengeName="PRHI Challenge"
          prizes={['$250 Amazon Gift Card']}
          sponsorSummary="The Pittsburgh Regional Health Initiative (PRHI) is one of the nation's first regional collaboratives of medical, business, and civic leaders organized to address healthcare safety and quality improvements. Since its founding in 1998, PRHI has approached quality improvement as both a social and a business imperative. Its core mission is to show that an unwavering focus on meeting patient needs, and on achieving optimal care outcomes, along with simultaneous dedication to efficiency and zero defects, will create maximum value for the patient and for society. One of the newest initiatives under PRHI is the Patient Safety Technology Challenge which is designed to fuel the engagement of innovators in creating solutions to reduce preventable deaths and disabilities from medical errors and harmful events and reimagine a vastly safer healthcare system. The initiative injects patient safety awards into existing competitions to help increase awareness of this crisis and supports budding innovations."
          challengeStatement="We’re in search of bold new thinking. This is an invitation to solve the problem of medical error that harms millions of U.S. patients, kills approximately 250,000 patients, and costs billions of dollars every year. We’re calling on HackUTD teams to envision the best technology-enabled patient safety solution that has the potential to avert patient harm and save lives. The best team will be awarded $1,000. In order to be eligible to win your hack must align with one of the following five leading patient safety challenges facing health care across the continuum of care: Medication errors, procedural/surgical errors, errors during routine patient care (e.g. pressure ulcers, blood clots, falls), infections and diagnostic safety. Learn more about the problem and get access to resources to help your hack here."
        />
        <HomeChallengeCard
          sponsor="NOT DONE"
          challengeName="CBRE Challange - NOT DONE"
          prizes={['$250 Amazon Gift Card', '$150 Amazon Gift Card', '$75 Amazon Gift Card']}
          sponsorSummary="MISSING"
          challengeStatement="MISSING"
        />
        <HomeChallengeCard
          sponsor="EOG Resources"
          challengeName="EOG Resources Challange - NOT DONE"
          prizes={[
            'Nintendo Switch Mario Kart Bundle',
            'NuPhy Halo65 Mechanical Keyboards (Gateron Red Switch)',
          ]}
          sponsorSummary="EOG Resources, Inc. (NYSE: EOG) is one of the largest crude oil and natural gas exploration and production companies in the United States. The company is focused on being among the lowest cost, highest return, and lowest emissions producers, playing a significant role in the long-term future of energy.\n\nEOG strives to maintain the lowest possible operating cost structure through continued innovation that drives down operating and capital costs while maximizing reserve recoveries and lowering finding and development costs."
          challengeStatement="NOT DONE"
        />
        <HomeChallengeCard
          sponsor="Frontier"
          challengeName="Frontier Challenge"
          prizes={[
            "$250 Amazon Gift Card + 'day in the life' job shadow with our Fiber Innovation Labs team",
            '$100 Amazon Gift Card',
            '$50 Amazon Gift Card',
          ]}
          sponsorSummary="At Frontier, we believe in the power of technology to change lives. As the largest pure-play fiber provider in the U.S., we deliver blazing-fast broadband connectivity that unlocks the potential of millions of consumers and businesses. Everything we do comes down to our purpose: Building Gigabit America. These three words capture the unique value of what we do, the product and innovation we’re bringing, and the scale of our ambition. Working at Frontier will inspire you to expand your thinking beyond the typical early career or internship. This is your opportunity to lead and innovate in a transformative environment. We offer opportunities across our business where you can approach work with an entrepreneurial mindset—think a “start-up” within a large company. If want the opportunity to shape the future, Frontier is the place for you. Come Build Gigabit America with us! "
          challengeStatement="Software:\nAt Frontier, our customers depend on us to deliver blazing-fast, reliable internet.We’re looking for ways to solve connectivity problems before our customers even know they have them. Your challenge is to help us predict when a customer may be having a bad experience and call us or need us to visit them for a support call. This will include using AI and applying data from our network, along with any other data you think is valuable.\n\nHardware:\nAt Frontier, we are committed to sustainability in our technology. That means our equipment must work in all kinds of environments and situations. Your challenge is to help us design an enclosure that keeps our equipment cool during hot Texas summers. The best design will be inexpensive, self-powered, and have few moving parts. Your design can be built with real materials or in the CAD software of your choosing."
        />
        <HomeChallengeCard
          sponsor="Fannie Mae"
          challengeName="Fannie Mae Challenge - NOT DONE"
          prizes={['MISSING PRIZES']}
          sponsorSummary="What if your internship exceeded expectations? Working at Fannie Mae means being part of a supportive, inclusive company where you can forge your own path, but you’re never on your own. You’ll find encouragement through mentorship and early career training programs, plus our industry-leading benefits — including a student loan repayment program and lifestyle spending account. Fannie Mae employees help make housing more accessible, equitable, and attainable. It’s a big job that brings people working in technology, analytics, finance, and business together to collaborate on projects that make a real difference for millions of people. Our award-winning internship and early career roles offer the perfect opportunities to realize your full potential. Learn more about our student programs and current openings on our website."
          challengeStatement="MISSING"
        />
      </div>
    </section>
  );
}
