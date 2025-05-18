import Link from "next/link";
import { AnimatedImage } from "../components/animated-image";
import { ExperienceSection } from "../components/experience-section";
import { Navigation } from "../components/nav";

export default function About() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 w-screen min-h-screen">
      <Navigation />
      <AnimatedImage />
      <div className="w-full px-4 py-16">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-4xl font-bold animate-fade-in-delayed opacity-0 bg-gradient-to-r from-zinc-100 to-zinc-500 bg-clip-text text-transparent text-center mb-12">
            About me
          </h1>
          <p className="text-lg opacity-0 animate-fade-in-delayed text-zinc-300 text-center">
            I'm a software developer obsessed with building 
            <Link href="/projects" className="ml-1 text-sky-400 hover:text-sky-300 transition-colors">things</Link>
          </p>
          <br/>

          <p className="text-lg animate-fade-in-delayed-extra opacity-0 text-zinc-300 text-center">but that's not even half of it</p>
          <br/>
          
          <p className="text-lg opacity-0 animate-fade-in-delayed-extra-extra text-zinc-300 text-center max-w-2xl mx-auto mb-16">
            My experiences through different careers have equipped me with valuable skills that make me a stronger developer and team member.
          </p>

          <ExperienceSection
            title="Software Development Journey"
            description="My formal journey into software development began at Bloom Institute of Technology, where I immersed myself in web development through their intensive program. The curriculum emphasized real-world application through project-based learning and daily standup meetings with cross-functional teams and stakeholders. This experience taught me the importance of agile methodologies, effective communication, and collaborative problem-solving in software development. Since graduation, I've continued to expand my technical expertise and stay current with modern web technologies."
            images={[
              'tech1', 'tech2', 'tech3', 'tech4', 'tech5', 'tech6', 
              'tech7', 'tech8', 'tech9', 'tech10', 'tech11', 'tech12',
              'tech13', 'tech14'
            ]}
            skills={[
              'Agile Methodologies',
              'Team Collaboration',
              'Problem Solving',
              'Technical Documentation'
            ]}
            delay={5}
          />
          
          <ExperienceSection
            title="Coding & STEM Education"
            description="As a coding & STEM teacher across multiple prestigious schools in Miami, I've developed the ability to break down complex concepts into digestible lessons, adapt my teaching style to different learning needs, and foster a collaborative learning environment. This experience has enhanced my communication skills and deepened my understanding of programming fundamentals."
            images={['teaching1', 'teaching2', 'teaching3','teaching4']}
            skills={[
              'Technical Communication',
              'Problem Solving',
              'Adaptability',
              'Mentorship',
              'Knowledge Transfer'
            ]}
            delay={5}
          />

          <ExperienceSection
            title="Acting & Theater"
            description="My experience in theater and acting has been instrumental in developing my presentation skills, emotional intelligence, and ability to work under pressure. From performing in productions like 'Que Pasa USA' to working with renowned actors, I've learned the importance of timing, precision, and the power of effective communication."
            images={['acting1', 'acting2', 'acting3', 'acting4']}
            skills={[
              'Public Speaking',
              'Team Collaboration',
              'Performance Under Pressure',
              'Emotional Intelligence',
              'Creative Problem Solving'
            ]}
            delay={5}
          />

          <ExperienceSection
            title="Hospitality & Service"
            description="Working in fast-paced environments like Estefan Kitchen and Segafredo Zanetti has taught me the value of exceptional customer service, quick thinking, and maintaining composure under pressure. These skills translate directly to software development, where user experience and efficient problem-solving are paramount."
            images={['bartending1', 'bartending2']}
            skills={[
              'Customer Focus',
              'Time Management',
              'Stress Management',
              'Attention to Detail',
              'Service Excellence'
            ]}
            delay={5}
          />
        </div>
      </div>
    </div>
  );
}
