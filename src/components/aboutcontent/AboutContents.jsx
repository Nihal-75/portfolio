import React from 'react'
import SectionWrapper from '../scrol/SectionWraper';
import ContentCard from '../card/ContentCard';
import { item } from '../../store/item';

const AboutContents = () => {
  return (
    <>
      {" "}
      <SectionWrapper>
        <h1 className="about-title">About Me</h1>
      </SectionWrapper>
      <SectionWrapper>
        <p className="about-description">
          Hello! I'm a passionate <strong>Data Analyst</strong> currently
          studying in <strong>BCA</strong>. I specialize in analyzing and
          visualizing data using tools like
          <strong> MS Excel</strong>, <strong>Power BI</strong>,{" "}
          <strong>Python</strong>, <strong>SQL</strong>, and{" "}
          <strong>NoSQL</strong>. I focus on transforming raw data into
          meaningful insights through dashboards, reports, and automation. I'm
          also currently learning advanced <strong>data analytics</strong> and{" "}
          <strong>data science</strong> concepts to further enhance my
          analytical skills.
        </p>
      </SectionWrapper>
      <SectionWrapper>
        <h3>💻 Skills & Technologies</h3>
        <ContentCard item={item} />
      </SectionWrapper>
      <div className="border-about" />
      <br />
      <SectionWrapper>
        <h3>🎯 Goals</h3>
        <p>
          My short-term goal is to become a skilled{" "}
          <strong>Data Analyst</strong> and work on real-world data projects
          that uncover actionable insights. Long-term, I aim to grow into a{" "}
          <strong>Data Scientist</strong> or <strong>Analytics Lead</strong>,
          driving strategic decisions through data.
        </p>
      </SectionWrapper>
      <SectionWrapper>
        <h3>🧠 Learning Philosophy</h3>
        <p>
          I believe in learning by doing — analyzing datasets, building
          dashboards, and solving real business problems. I'm always eager to
          explore new tools, analytical techniques, and industry best practices
          to stay ahead in the field of data analytics.
        </p>
      </SectionWrapper>
      <SectionWrapper>
        <h3>🌐 Let's Connect</h3>
        <p>
          You can find me on <strong>GitHub</strong> and{" "}
          <strong>LinkedIn</strong>. I’m always open to{" "}
          <strong>collaborations</strong>,{" "}
          <strong>freelance analytics projects</strong>, and insightful
          conversations about <strong>data and technology</strong>.
        </p>
      </SectionWrapper>
    </>
  );
}

export default AboutContents