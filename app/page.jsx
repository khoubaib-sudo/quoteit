"use client"
import Feed from '@components/Feed'
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex-center flex-col"
    >
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center">Inspirational Quotes</span>
      </h1>
      <p className="desc text-center">
        Quoteit is a website to discover, create, and share quotes
      </p>
      <Feed />
    </motion.section>
  );
};

export default Home;
