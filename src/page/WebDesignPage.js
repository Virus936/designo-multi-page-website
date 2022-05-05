import { useEffect } from 'react';
import WebDesignHero from '../components/hero/WebDesignHero';
import Projects from '../components/projects/Projects';
import WebDesign from '../components/webdesign/WebDesign';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const designs = {
  web: {
    title: 'web design',
    desc:
      'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
  },
  app: {
    title: 'app design',
    desc:
      ' Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
  },
  graphic: {
    title: 'graphic design',
    desc:
      'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
  },
};

const WebDesignPage = () => {
  let navigate = useNavigate();
  let params = useParams();
  useEffect(() => {
    if (designs[params.design] === undefined) {
      navigate('/');
    }
  }, []);

  return (
    <main>
      <WebDesignHero
        title={designs[params.design]?.title}
        desc={designs[params.design]?.desc}
      />
      <Projects />
      <WebDesign />
    </main>
  );
};

export default WebDesignPage;
