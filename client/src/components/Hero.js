import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    navigate('/auth');
  };

  const handleWatchDemo = () => {
    navigate('/explore-skills');
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{
                y: [null, Math.random() * -100, Math.random() * 100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span>🚀 Revolutionary Learning Platform</span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Trade <span className="highlight">Skills</span>,
            <br />
            Not <span className="highlight-secondary">Cash</span>
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            Join the future of learning where knowledge is currency. Teach what you know, 
            learn what you need. Every hour you teach earns you an hour to learn something new.
          </motion.p>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Active Learners</span>
            </div>
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Skills Available</span>
            </div>
            <div className="stat">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Hours Exchanged</span>
            </div>
          </motion.div>

          <motion.div className="hero-actions" variants={itemVariants}>
            <motion.button
              className="btn-primary"
              onClick={handleStartLearning}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 215, 0, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Learning
              <FiArrowRight className="btn-icon" />
            </motion.button>

            <motion.button
              className="btn-secondary"
              onClick={handleWatchDemo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiPlay className="btn-icon" />
              Watch Demo
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          variants={floatingVariants}
          animate="animate"
        >
          <div className="skill-cards">
            <motion.div
              className="skill-card"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <div className="card-icon">💻</div>
              <h3>Web Development</h3>
              <p>Learn React, Node.js</p>
              <div className="card-credits">2 Credits/hour</div>
            </motion.div>

            <motion.div
              className="skill-card"
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: -5 }}
            >
              <div className="card-icon">🎨</div>
              <h3>UI/UX Design</h3>
              <p>Master Figma, Adobe XD</p>
              <div className="card-credits">1.5 Credits/hour</div>
            </motion.div>

            <motion.div
              className="skill-card"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 3 }}
            >
              <div className="card-icon">📊</div>
              <h3>Data Science</h3>
              <p>Python, Machine Learning</p>
              <div className="card-credits">3 Credits/hour</div>
            </motion.div>
          </div>

          <motion.div
            className="credit-flow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flow-line"></div>
            <div className="credit-badge">
              <span>1 Hour = 1 Credit</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;