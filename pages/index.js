import Head from 'next/head'
import Home from '../components/home';
import Education from '../components/education';
import Skills from '../components/skills';
import Experience from '../components/experience';
import Project from '../components/project';
import Contact from '../components/contact';
import homeCss from '../assets/css/home/home.module.css';
import apiService from '../services/apiService';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import dynamic from 'next/dynamic';


function Index({ personalProject, contributeProject }) {
  const router = useRouter();
  const handleTittle = useCallback(() => {
    if (router.asPath === '/') {
      return `Debkanta Pradhan's portfolio`
    } else {
      let section = router.asPath.replace('/#', '');
      return `Debkanta Pradhan || ${section}`
    }
  }, [router]);
  return (
    <div>
      <Head>
        <title>{handleTittle()}</title>
        <meta name="description" content="Debkanta Pradhan Profile. Pursuing B.Tech on ECE from University of Engineering & Management jaipur. I am a Full-stack developer( MERN stack). I am looking for a fulltime job on this domain." />
        <link rel="icon" href='/profile.png' />
      </Head>
      <div>

        <div className={homeCss.globalContainer}>
          <Home />
          <Education />
          <Skills />
          <Experience />
          <Project
            personalProject={personalProject}
            contributeProject={contributeProject}
          />
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Index;
// dynamic(() => Promise.resolve(Index), { ssr: false });

export async function getStaticProps() {
  try {
    const pp = await apiService.get('/api/project', { projectType: 'personal', perPageItem: 6, token: process.env.NEXT_PUBLIC_API_TOKEN });
    const cp = await apiService.get('/api/project', { projectType: 'contribute', token: process.env.NEXT_PUBLIC_API_TOKEN });

    if (pp.status !== 200) {
      pp.data = {
        projects: [],
        totalItem: 0,
      };
    } else if (cp.status !== 200) {
      cp.data = {
        projects: [],
        totalItem: 0,
      };
    } else if (pp.status !== 200 && cp.status !== 200) {
      pp.data = {
        projects: [],
        totalItem: 0,
      };
      cp.data = {
        projects: [],
        totalItem: 0,
      };
    } else {
      pp.data = JSON.parse(pp?.data);
      cp.data = JSON.parse(cp?.data);
    }


    return {
      props: {
        personalProject: {
          ...pp.data
        },
        contributeProject: {
          ...cp.data,
        }
      }
    }
  } catch (e) {
    console.log(e.message);
    return {
      props: {
        personalProject: [],
        contributeProject: []
      }
    }
  }


}