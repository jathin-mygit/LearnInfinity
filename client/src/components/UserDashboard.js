import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiCreditCard, FiTrendingUp, FiAward, FiLogOut, FiSettings } from 'react-icons/fi';
import './UserDashboard.css';

const UserDashboard = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated || !user) {
    return null;
  }

  const handleLogout = () => {
    logout();
  };

  const handleViewProfile = () => {
    navigate('/profile');
  };

  return (
    <motion.div
      className="user-dashboard"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="dashboard-header">
        <div className="user-info">
          <div className="user-avatar">
            <FiUser />
          </div>
          <div className="user-details">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        </div>
        <div className="user-actions">
          <motion.button
            className="profile-btn"
            onClick={handleViewProfile}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiSettings />
          </motion.button>
          <motion.button
            className="logout-btn"
            onClick={handleLogout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiLogOut />
          </motion.button>
        </div>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <FiCreditCard />
          </div>
          <div className="stat-info">
            <span className="stat-value">{user.credits}</span>
            <span className="stat-label">Credits</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <FiTrendingUp />
          </div>
          <div className="stat-info">
            <span className="stat-value">{user.stats?.sessionsCompleted || 0}</span>
            <span className="stat-label">Sessions</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <FiAward />
          </div>
          <div className="stat-info">
            <span className="stat-value">{user.stats?.rating || 5.0}</span>
            <span className="stat-label">Rating</span>
          </div>
        </div>
      </div>

      <div className="dashboard-actions">
        <motion.button
          className="action-btn primary"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Find Skills to Learn
        </motion.button>
        <motion.button
          className="action-btn secondary"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Offer Your Skills
        </motion.button>
      </div>
    </motion.div>
  );
};

export default UserDashboard;