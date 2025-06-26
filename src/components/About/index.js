import Navigation from ".././Navigation";
import SocialLinks from ".././SocialLinks";

import './index.css'
const About = () => {
  return (
    <div className="min-h-screen bg-white font-segoe">
      <Navigation />
      

      <main className="content">
        <div className="social">
            <SocialLinks />
        </div>
          <div className="text">
            <h1>This is it. ;)</h1>
            <p className="para">Anish Kr. Sinha is an Indian UI/UX Designer & Front End Developer with a passion for designing beautiful and fuctional user experiences. Typically, he’s Driven & permanently Curious. He’s obsessed with designing things and even more obsessed with designing cool & clean stuff for the web and mobile. He has been in the business of creating since he hung his first painting on the wall when he was 11. 
He holds a bachelor degree in Computer Applications. During his graduation, he has been actively involved in the web design community for the last 3 years. he has designed websites for small businesses, events, nonprofits and more. Currently he’s based in Bihar, India. Where he’s working as an independent creative. 

His interests, however, extend beyond the web and he loves helping people with branding and print design. He even loves designing 3D floor plan.

When he’s not designing, he’s probably hanging out with his girlfriend, watching series, sketching or messing around on something inspired by YouTube tutorials.</p>
        
        </div>
        <div className="email">
          <div className="writing-mode-vertical text-sm lg:text-base font-semibold text-black transform -rotate-90 whitespace-nowrap origin-center">
            sinhaanishkumar@outlook.com
          </div>
          <div className="w-px h-16 lg:h-20 bg-black"></div>
        </div>
      </main>
    </div>
  );
};

export default About;
