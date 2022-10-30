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


export default function Index({ personalProject, contributeProject }) {
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
        <meta name="description" content="Full-stack developer, MERN stack developer" />
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

export async function getStaticProps() {
  try {
    const pp = await apiService.get('/api/project', { projectType: 'personal', perPageItem: 6 });
    const cp = await apiService.get('/api/project', { projectType: 'contribute' });

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