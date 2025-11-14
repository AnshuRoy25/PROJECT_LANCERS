import React, { useState } from 'react';

const FreelancerPlatform = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = ['Project 1', 'Project 2'];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div style={styles.container}>
      <div style={styles.frameLabel}></div>
      
      <header style={styles.header}>
        <button style={styles.menuBtn}>
          <div style={styles.hamburger}></div>
          <div style={styles.hamburger}></div>
          <div style={styles.hamburger}></div>
        </button>
        <div style={styles.logo}>LANCE</div>
        <nav style={styles.nav}>
          <a href="#" style={styles.navLink}>Find FreeLancers</a>
          <a href="#" style={styles.navLinkInactive}>Find Work</a>
        </nav>
        <div style={styles.headerActions}>
          <button style={styles.btnAuth}>Login</button>
          <button style={styles.btnAuth}>Sign In</button>
          <button style={styles.iconBtn}>♡</button>
          <button style={styles.iconBtn}>🔔</button>
          <button style={styles.profileBtn}></button>
        </div>
      </header>

      <main style={styles.mainContent}>
        <aside style={styles.sidebar}>
          <button style={styles.filterBtn}>
            <span style={styles.filterIcon}>▼</span>
            <span>Filter By</span>
          </button>
          
          <div style={styles.filterOptions}>
            <div style={styles.filterItem}>
              <span>Domain</span>
              <span style={styles.arrow}>▶</span>
            </div>
            <div style={styles.filterItem}>
              <span>Skills</span>
              <span style={styles.arrow}>▶</span>
            </div>
            <div style={styles.filterItem}>
              <span>Ratings</span>
              <span style={styles.arrow}>▶</span>
            </div>
            <div style={styles.filterItem}>
              <span>Fee</span>
              <span style={styles.arrow}>▶</span>
            </div>
            <div style={styles.filterItem}>
              <span>Availability</span>
              <span style={styles.arrow}>▶</span>
            </div>
          </div>
        </aside>

        <section style={styles.contentArea}>
          <div style={styles.searchBarContainer}>
            <div style={styles.searchBar}>
              <span style={styles.searchIcon}>🔍</span>
            </div>
            <button style={styles.sortBtn}>Sort By</button>
          </div>

          <div style={styles.freelancerCard}>
            <div style={styles.cardHeader}>
              <div style={styles.freelancerInfo}>
                <div style={styles.avatar}></div>
                <span style={styles.freelancerName}>Freelancer id</span>
              </div>
              <div style={styles.cardBadges}>
                <span style={styles.badgeProjects}>Projects done</span>
                <span style={styles.badgeRating}>Rating : 4.9 ★</span>
                <button style={styles.favoriteBtn}>♡</button>
              </div>
            </div>

            <div style={styles.freelancerDetails}>
              <p style={styles.detailText}>Freelancer skills : Java, Python</p>
              <p style={styles.detailText}>Working fields : Data Science, Web Development</p>
            </div>

            <div style={styles.projectsCarousel}>
              <button style={styles.carouselBtnLeft} onClick={prevProject}>
                &lt;
              </button>
              
              <div style={styles.projectCards}>
                <div style={styles.projectCard1}>
                  Project 1
                </div>
                <div style={styles.projectCard2}>
                  Project 2
                </div>
              </div>

              <button style={styles.carouselBtnRight} onClick={nextProject}>
                &gt;
              </button>
            </div>

            <div style={styles.cardFooter}>
              <button style={styles.btnViewProfile}>View Profile</button>
              <button style={styles.btnHire}>Hire Now</button>
              <div style={styles.priceTag}>From 100 Token/ project</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const styles = {
  container: {
    background: '#2b2b2b',
    minHeight: '100vh',
    padding: '15px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
  },
  frameLabel: {
    color: '#888',
    fontSize: '11px',
    marginBottom: '8px',
    paddingLeft: '15px',
  },
  header: {
    background: 'linear-gradient(to right, #9eb5be, #b4c8cf)',
    borderRadius: '15px 15px 0 0',
    padding: '18px 25px',
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
  },
  menuBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  hamburger: {
    width: '22px',
    height: '2.5px',
    background: '#1a1a1a',
    borderRadius: '2px',
  },
  logo: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#1a1a1a',
    letterSpacing: '3px',
    marginRight: '35px',
  },
  nav: {
    display: 'flex',
    gap: '35px',
    flex: 1,
  },
  navLink: {
    color: '#1a1a1a',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '500',
  },
  navLinkInactive: {
    color: '#8b9da6',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '500',
  },
  headerActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  btnAuth: {
    background: 'white',
    border: 'none',
    padding: '9px 22px',
    borderRadius: '18px',
    fontSize: '14px',
    cursor: 'pointer',
    color: '#1a1a1a',
    fontWeight: '500',
  },
  iconBtn: {
    background: 'none',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    color: '#1a1a1a',
    padding: '5px',
  },
  profileBtn: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    background: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  mainContent: {
    background: 'linear-gradient(to bottom, #5d7a88, #6d8b99)',
    borderRadius: '0 0 15px 15px',
    padding: '25px',
    display: 'flex',
    gap: '25px',
    minHeight: '480px',
  },
  sidebar: {
    background: 'rgba(183, 201, 209, 0.35)',
    borderRadius: '12px',
    padding: '18px',
    width: '230px',
  },
  filterBtn: {
    width: '100%',
    background: 'rgba(255, 255, 255, 0.5)',
    border: 'none',
    padding: '11px 14px',
    borderRadius: '22px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#1a1a1a',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    marginBottom: '18px',
  },
  filterIcon: {
    fontSize: '10px',
  },
  filterOptions: {
    background: 'rgba(210, 220, 225, 0.4)',
    borderRadius: '12px',
    padding: '14px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  filterItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#1a1a1a',
    fontSize: '15px',
    fontWeight: '500',
    cursor: 'pointer',
  },
  arrow: {
    fontSize: '11px',
    color: '#1a1a1a',
  },
  contentArea: {
    flex: 1,
  },
  searchBarContainer: {
    background: 'rgba(255, 255, 255, 0.25)',
    display: 'flex',
    gap: '18px',
    marginBottom: '18px',
  },
  searchBar: {
    flex: 1,
    background: 'rgba(255, 255, 255, 0.25)',
    borderRadius: '22px',
    padding: '11px 18px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  searchIcon: {
    fontSize: '16px',
    color: '#1a1a1a',
  },
  sortBtn: {
    background: 'rgba(255, 255, 255, 0.35)',
    border: 'none',
    padding: '11px 28px',
    borderRadius: '22px',
    color: '#1a1a1a',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
  },
  freelancerCard: {
    background: 'rgba(183, 201, 209, 0.3)',
    borderRadius: '18px',
    padding: '22px 24px',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },
  freelancerInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  avatar: {
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.5)',
  },
  freelancerName: {
    color: '#1a1a1a',
    fontSize: '16px',
    fontWeight: '500',
  },
  cardBadges: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  badgeProjects: {
    background: 'rgba(220, 235, 240, 0.55)',
    padding: '7px 16px',
    borderRadius: '18px',
    color: '#1a1a1a',
    fontSize: '13px',
    fontWeight: '500',
  },
  badgeRating: {
    background: 'rgba(230, 240, 245, 0.65)',
    padding: '7px 16px',
    borderRadius: '18px',
    color: '#1a1a1a',
    fontSize: '13px',
    fontWeight: '500',
  },
  favoriteBtn: {
    background: 'rgba(230, 240, 245, 0.6)',
    border: 'none',
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    fontSize: '18px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1a1a1a',
  },
  freelancerDetails: {
    marginBottom: '18px',
  },
  detailText: {
    color: '#1a1a1a',
    fontSize: '12.5px',
    marginBottom: '4px',
    fontWeight: '400',
  },
  projectsCarousel: {
    position: 'relative',
    marginBottom: '18px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  carouselBtnLeft: {
    background: 'rgba(76, 94, 104, 0.65)',
    border: 'none',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    color: 'white',
    fontSize: '14px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: '8px',
    zIndex: 2,
  },
  carouselBtnRight: {
    background: 'rgba(76, 94, 104, 0.65)',
    border: 'none',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    color: 'white',
    fontSize: '14px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: '8px',
    zIndex: 2,
  },
  projectCards: {
    display: 'flex',
    gap: '12px',
    width: '100%',
    padding: '0 45px',
  },
  projectCard1: {
    flex: 1,
    background: 'rgba(205, 220, 228, 0.45)',
    border: '2.5px solid #4d8a9f',
    borderRadius: '12px',
    padding: '75px 18px',
    textAlign: 'center',
    color: '#1a1a1a',
    fontWeight: '600',
    fontSize: '15px',
    minHeight: '170px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  projectCard2: {
    flex: 1,
    background: 'rgba(195, 210, 218, 0.4)',
    borderRadius: '12px',
    padding: '75px 18px',
    textAlign: 'center',
    color: '#1a1a1a',
    fontWeight: '600',
    fontSize: '15px',
    minHeight: '170px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardFooter: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  btnViewProfile: {
    background: 'rgba(68, 85, 95, 0.5)',
    border: 'none',
    padding: '11px 22px',
    borderRadius: '7px',
    color: 'white',
    fontSize: '13.5px',
    fontWeight: '500',
    cursor: 'pointer',
  },
  btnHire: {
    background: 'rgba(45, 58, 68, 0.75)',
    border: 'none',
    padding: '11px 22px',
    borderRadius: '7px',
    color: 'white',
    fontSize: '13.5px',
    fontWeight: '500',
    cursor: 'pointer',
  },
  priceTag: {
    background: '#35495c',
    color: 'white',
    padding: '11px 22px',
    borderRadius: '7px',
    fontSize: '13.5px',
    fontWeight: '500',
    marginLeft: 'auto',
  },
};

export default FreelancerPlatform;