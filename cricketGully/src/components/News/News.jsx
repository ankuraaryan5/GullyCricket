import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import aos from 'aos';
import 'aos/dist/aos.css';

const NewsContainer = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background: linear-gradient(135deg, #fff5e6 0%, #ffebcc 100%);
  padding: 2rem;
`;

const Bubble = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 165, 0, 0.1);
  pointer-events: none;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
`;

const Title = styled.h1`
  color: #ff6b00;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.p`
  color: #ff8c00;
  font-size: 1.2rem;
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 2;
`;

const NewsCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(255, 102, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(255, 102, 0, 0.2);
  }
`;

const NewsImage = styled.div`
  height: 200px;
  background: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
`;

const NewsContent = styled.div`
  padding: 1.5rem;
`;

const NewsTitle = styled.h3`
  color: #e65c00;
  margin-bottom: 0.5rem;
`;

const NewsExcerpt = styled.p`
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const NewsMeta = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ff8c00;
  font-size: 0.9rem;
`;

const BreakingNewsBanner = styled.div`
  background: linear-gradient(90deg, #ff4500, #ff8c00);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(255, 69, 0, 0.3);
  position: relative;
  z-index: 2;
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.02); }
    100% { transform: scale(1); }
  }
`;

const NewsPage = () => {
  useEffect(() => {
    // Initialize AOS
    aos.init({
      duration: 1000,
      once: true
    });
    
    // Create bubbles
    const bubblesContainer = document.getElementById('bubbles-container');
    for (let i = 0; i < 20; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.style.width = `${Math.random() * 100 + 50}px`;
      bubble.style.height = bubble.style.width;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.top = `${Math.random() * 100}%`;
      bubble.style.opacity = Math.random() * 0.3 + 0.1;
      
      bubblesContainer.appendChild(bubble);
    }
  }, []);

  // Sample cricket news data
  const cricketNews = [
    {
      id: 1,
      title: 'India Wins T20 World Cup 2023',
      excerpt: 'Team India clinched the T20 World Cup title after a thrilling final against Australia.',
      date: 'May 28, 2023',
      category: 'International',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      title: 'Virat Kohli Scores Century in IPL Final',
      excerpt: 'Virat Kohli smashed a brilliant century to lead his team to victory in the IPL 2023 finals.',
      date: 'May 25, 2023',
      category: 'IPL',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      title: 'New Cricket Rules Announced by ICC',
      excerpt: 'ICC introduces new rules to make the game more exciting for fans worldwide.',
      date: 'May 20, 2023',
      category: 'International',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
    
  ];

  return (
    <NewsContainer>
      {/* Bubbles background */}
      <div id="bubbles-container" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        overflow: 'hidden'
      }} />
      
      <Header data-aos="fade-down">
        <Title>Cricket News Hub</Title>
        <Subtitle>Stay updated with the latest from the world of cricket</Subtitle>
      </Header>
      
      <BreakingNewsBanner data-aos="fade-up">
        BREAKING: India to host next ICC Champions Trophy in 2025
      </BreakingNewsBanner>
      
      <NewsGrid>
        {cricketNews.map((news, index) => (
          <NewsCard 
            key={news.id} 
            data-aos="fade-up" 
            data-aos-delay={(index % 3) * 100}
          >
            <NewsImage image={news.image} />
            <NewsContent>
              <NewsTitle>{news.title}</NewsTitle>
              <NewsExcerpt>{news.excerpt}</NewsExcerpt>
              <NewsMeta>
                <span>{news.date}</span>
                <span>{news.category}</span>
              </NewsMeta>
            </NewsContent>
          </NewsCard>
        ))}
      </NewsGrid>
    </NewsContainer>
  );
};

export default NewsPage;