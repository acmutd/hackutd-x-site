import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { RequestHelper } from '../lib/request-helper';
import HomeHero from '../components/homeComponents/HomeHero';
import HomeNotif from '../components/homeComponents/HomeNotif';
import HomeVideoStats from '../components/homeComponents/HomeVideoStats';
import HomeAbout from '../components/homeComponents/HomeAbout';
import HomeSpeakers from '../components/homeComponents/HomeSpeakers';
import HomeChallenges from '../components/homeComponents/HomeChallenges';
// import HomeTeam from '../components/homeComponents/HomeTeam';
import HomeSponsors from '../components/homeComponents/HomeSponsors';
import HomeFooter from '../components/homeComponents/HomeFooter';
import HomeFaq from '../components/homeComponents/HomeFaq';

/**
 * The home page.
 *
 * Landing: /
 *
 */
export default function Home(props: {
  keynoteSpeakers: KeynoteSpeaker[];
  answeredQuestion: AnsweredQuestion[];
  fetchedMembers: TeamMember[];
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for all components to render before showing page
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>HackUTD X</title> {/* !change */}
        <meta name="description" content="A default HackUTD X instance" /> {/* !change */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeNotif />
      <HomeHero />
      <div className="bg-[url('/assets/about-bg.jpeg')] overflow-hidden">
        <HomeAbout />
        <HomeVideoStats />
        <HomeSpeakers keynoteSpeakers={props.keynoteSpeakers} />
        <HomeChallenges />
        <HomeFaq answeredQuestion={props.answeredQuestion} />
        {/* <HomeTeam members={props.fetchedMembers} /> */}
      </div>
      <div className="bg-[url('/assets/hero-bg.png')]">
        <HomeSponsors />
        <HomeFooter />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const protocol = context.req.headers.referer?.split('://')[0] || 'http';
  const { data: keynoteData } = await RequestHelper.get<KeynoteSpeaker[]>(
    `${protocol}://${context.req.headers.host}/api/keynotespeakers`,
    {},
  );
  const { data: answeredQuestion } = await RequestHelper.get<AnsweredQuestion[]>(
    `${protocol}://${context.req.headers.host}/api/questions/faq`,
    {},
  );
  const { data: memberData } = await RequestHelper.get<TeamMember[]>(
    `${protocol}://${context.req.headers.host}/api/members`,
    {},
  );
  return {
    props: {
      keynoteSpeakers: keynoteData,
      answeredQuestion: answeredQuestion,
      fetchedMembers: memberData,
    },
  };
};
