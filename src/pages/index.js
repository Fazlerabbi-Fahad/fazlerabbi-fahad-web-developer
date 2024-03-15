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
      <Head></Head>
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
