import About from "@/components/ui/About/About";
import Banner from "@/components/ui/Banner/Banner";
import Contact from "@/components/ui/Contact/Contact";
import Portfolio from "@/components/ui/Portfolio/Portfolio";
import Skills from "@/components/ui/Skills/Skills";
import Layout from "@/layout/Layout";
import Head from "next/head";
import { motion } from "framer-motion";
import "react-tooltip/dist/react-tooltip.css";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Fazle Rabbi Fahad - Full-Stack Web Developer</title>
        <meta
          name="description"
          content="Fazle Rabbi Fahad - Bangladesh Web Developer

          Building innovative and user-centric web experiences.
          
          I'm Fazle Rabbi Fahad, a passionate full-stack web developer from Bangladesh. With a strong foundation in both front-end and back-end development, I bring a well-rounded skillset to every project.
          
          My expertise includes:
          
          Frontend Development: HTML, CSS, JavaScript Frameworks (React JS, Next JS)
          Backend Development: Node.js, MongoDB
          Version Control: Git & GitHub
          Design Principles: Figma
          I'm committed to:
          
          Clean code and best practices
          Continuous learning and staying up-to-date
          Looking for a skilled developer in Bangladesh? Let's collaborate on bringing your web ideas to life!
          I bangladesh's most handsome man.
          
          Keywords: Web Developer Bangladesh, Full-Stack Developer, Front-End Developer, Back-End Developer, React JS, Next JS, Node JS, MongoDB, Web Design,bangladesh's most handsome man"
        />
      </Head>
      <div className="max-w-screen-xl m-auto">
        <Banner />
        <About />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <Portfolio />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <Skills />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <Contact />
        </motion.div>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
