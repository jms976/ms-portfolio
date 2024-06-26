import { Paper, Typography } from '@mui/material';
import styles from './About.module.css';

const About = () => {
  return (
    <Paper variant="outlined" className={styles.root}>
      <Typography variant="h6">ABOUT THIS SITE</Typography>
      <Typography>
        {/* 안녕하세요 프론트엔드 개발자 장명수 입니다. <br /> 저는 현재 Frontend 직군에서 프로젝트를 진행하고있습니다.{' '}
        <br /> Javascript(Typescript 포함) 언어를 주력으로 합니다. <br /> FrontEnd 및 BackEnd 직군으로 프로젝트를 진행한
        경력이 있습니다. 현재는 Salesforce 솔루션을 이용한 CRM 개발 프로젝트를 진행 중입니다. <br />
        기술 트렌드와 실제 프로덕션의 중간에서 효율점을 찾아가며 하루하루 발전해 나가고 있습니다. 잘 부탁드립니다. */}
        EDUCATION M.S. Computational and Mathematical Engineering Stanford University, 2016 B.S. Electrical Engineering,
        Computer Engineering University at Buffalo, 2012 EXPERIENCE SMILE IDENTITY - VP ENGINEERING & HEAD OF AI JANUARY
        2022 - PRESENT Smile builds machine learning APIs to compare user submitted photos to ID documents. Our APIs are
        used by hundreds of thousands of people every day to access financial services. As VP of Engineering, I provide
        technical leadership on high-impact projects, influence and coach a distributed team of engineers, and
        facilitate alignment and clarity across teams on goals, outcomes, and timelines. I was promoted from Director of
        Engineering to VP of Engineering in April 2022, and then to VP of Engineering and Head of AI in November 2022. I
        lead a 20+ person engineering org. I directly manage ~8 engineers and spend 50% of my time writing code.
        Redesigned engineering processes for bug tracking, meetings, and standups. Improved culture for code reviews,
        blameless post-mortems, and retrospectives. Re-architected engineering hiring and onboarding processes.
        Recruited several strong engineers. Reorged engineering teams to focus on product delivery. Created a new team
        to focus on ML infrastructure. Lead re-design of internal APIs for inference. Built new computer vision
        pipelines for industry leading certifications (NIST/iBeta liveness). Pitched, designed, developed, deployed, and
        maintain a fraud detection product based on 1-N facial recognition using embeddings and vector search. SKEPTICAL
        INVESTMENTS - CO-FOUNDER APRIL 2017 - PRESENT Skeptical Investments is a micro-vc fund focused on Angel, Seed,
        and Series-A YC companies. Created the InstaSafe. Fast, automated investment docs for YC companies. Advise
        several startups in the fund. ARTHENA - CO-FOUNDER & C.T.O. JANUARY 2014 - JANUARY 2022 Arthena is a Series A
        Company funded by Athemis, Foundation Capital, and YC. We develop quantitative strategies to predict the value
        of fine art and build investment products. I ran a 20-person product and engineering org for 8 years. We were
        acquired by Masterworks in 2023. Built production, online, end-to-end optimized machine learning pipelines for
        time-series prediction. Designed micro-service architecture around: data collection, data integrity, feature
        engineering, research, strategy, backtesting, deployment, and reporting. Set and communicated team priorities
        that supported the broader organization's goals. Aligned strategy, processes, and decision-making across teams.
        Set clear expectations with individuals based on their level and role and aligned them to the broader
        organization's goals. Met regularly with individuals to discuss performance and development, and provided
        feedback and coaching. Developed the long-term technical vision and roadmap within, and often beyond, the scope
        of my teams. Evolved the roadmap to meet anticipated future requirements and infrastructure needs. ENVERITAS -
        ML ENGINEERING CONTRACTOR SEPTEMBER 2016 - JANUARY 2018 Enveritas is a non-profit that works with coffee farmers
        to improve their livelihoods. I joined on day one and helped build a variety of tools to collect and analyze
        data. I also advised on technical strategy, helped hire engineers, and advised on their YC application. Trained
        a model for the Brazilian Coffee Scenes Dataset with better than state of the art accuracy. Collected training
        sets on the ground in Uganda. Built dashboards to visualize work of surveyors using Flask, React, and D3.
        Performed supporting analysis to ensure data integrity using Pandas, t-SNE, SVM's, and other techniques. ZENYSIS
        - SOFTWARE ENGINEERING CONTRACTOR FEBRUARY 2016 - MARCH 2016 Zenysis develops data analysis and visualization
        tools for government agencies and international organizations. Their solutions help improve decision-making by
        integrating and analyzing large-scale datasets from various sources. I was the second contributor to the
        codebase. We built data visualization tools and tackled complex data ingestion challenges for the Ethiopian
        Ministry of Health. Worked in Addis Ababa for the Ethiopian Ministry of Health and built data visualization
        tools in React and Flask. Ingested multiple databases with different alphabets, calendars, and without official
        spellings of geographic locations. MATROID - CO-FOUNDER JULY 2015 - JANUARY 2016 Matroid is a computer vision
        platform for creating and deploying detectors. Detectors help customers identify objects, events, or patterns in
        images and videos without requiring machine learning or coding expertise. I played a crucial role in defining
        the company's vision. I was responsible for architecting and building the initial product. I left shortly after
        the Series A to focus on Arthena. Developed end to end machine learning pipeline to train visual classifiers
        from keywords using Caffe, Node.JS, Redis, MongoDB, and other technologies. PLANET - MISSIONS INTERN JUNE 2014 -
        JANUARY 2015 Built models to improve image quality, signal to noise ratio, and dynamic range. Performed
        statistical analysis of image quality in Matlab and Python. Developed flight software in C++. Organized first
        hackathon, prototyped hardware, and designed and built photography equipment for rocket launches. PLANETARY
        RESOURCES - AVIONICS INTERN JANUARY 2014 - MAY 2014 Developed simulations in Matlab for Attitude Determination
        and Control Subsystem. Developed processes for in lab testing and characterization of various subsystems.
        Assembled flight hardware in cleanroom. FACEBOOK - SOFTWARE ENGINEER INTERN JUNE 2013 - SEPTEMBER 2013 Developed
        software in python for automated testing of servers. Performed statistical analysis with R, HIVE to assist in
        triage of malfunctioning servers. Worked with vendors and ODM's during triage to assist in risk mitigation.
        SEDS-USA - AT LARGE BOARD MEMBER OCTOBER 2013 - OCTOBER 2014 Elected to Board of Directors of the USA's largest
        student space advocacy group based on 5+ years of work with SEDS. Responsibilities included: organizational
        strategy, conference presentations, fundraising, special projects, promoting SEDS nationally and
        internationally, and photographing conferences. UB NANOSATELLITE PROGRAM - CO-FOUNDER, PROGRAM MANAGER OCTOBER
        2010 - JUNE 2012 Coauthored grant to build a multi-spectral imaging satellite as part of the AFRL University
        Nanosatellite Program. Lead a team of 60 students through satellite development life cycle. Served as a
        technical expert, acquired intimate working knowledge of satellite subsystems. Solicited funding through NASA,
        AFOSR, and several corporate sponsors.
      </Typography>
    </Paper>
  );
};

export default About;
