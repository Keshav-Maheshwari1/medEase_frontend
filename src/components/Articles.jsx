import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
import { useUserContext } from '../User'

export const Articles = () => {
  const {displayUser} = useUserContext();
  const [loading,setLoading] = useState(true)
  const [articles,setArticles] = useState([])
  const[searchQuery ,setSearchQuery] = useState('')

  const navigate = useNavigate();
  
  const handleUserLogin =()=>{
    navigate('/Login');
  }
  const handleVideoClick = ()=>{
    navigate('/Video');
  }
  const handleEducationClick = ()=>{
    navigate('/Education');
  }
  const handleDoctorClick = ()=>{
    navigate('/Doctor');
  }
  const handleLabTestClick = ()=>{
    navigate('/LabTest');
  }


  useEffect(() => {

      const fetchdata = async () => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d2b207b7887d4ac59361ba989c4b9cf4';
        const apiKey = 'd2b207b7887d4ac59361ba989c4b9cf4';
        
        const options = {
          method: 'GET',
          url,
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json', // Adjust content type if needed
          },  
        };
  
        try {
          const response = await axios.request(options)
          const data = response.data.articles;
          setArticles(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
    fetchdata()
  },[])

  const handleSearchChange = (event)=>{
    setSearchQuery(event.target.value);
  }
  const filteredArticles = articles.filter((article)=>{
      return article.title.toLowerCase().includes(searchQuery.toLowerCase());
  })


  return (
    <>
      <div className="main-article">
        <nav className='nav-items'>
          <Link className='nav-group-logo' tag='a' to='/'>
            <img src={logo} className='nav-website-logo' alt='logo'/>
          </Link>
          <div className='nav-links'>
            <span className='nav-group-item' onClick={handleVideoClick}>Video Consult</span>
            <span className='nav-group-item' onClick={handleDoctorClick}>Find Doctors</span>
            <span className='nav-group-item' onClick={handleEducationClick}>Education</span>
            <span className='nav-group-item' onClick={handleLabTestClick}>Lab Test</span>
          </div>
          <p className='nav-login-button' onClick={handleUserLogin}>
            {displayUser.username}
          </p>
        </nav>
        <hr />
        <div className="main-article-input">
          <input 
            type="text"  
            id="search"
            value={searchQuery}
            placeholder='Search any articles'
            onChange={handleSearchChange}
          />
        </div>
        <h1 className='main-article-headline'>Pulse Check: Bitesize Briefs on Today's Buzzworthy Affairs</h1>
        <div className="main-article-card">
        {loading ? (
        <p>Loading...</p>
      ) : (
        Array.isArray(filteredArticles) && filteredArticles.length > 0 ? (
          filteredArticles.map((article, index) => (
            <div key={article.id || index} className='articles-cards'>
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
              {/* Add more fields as needed */}
            </div>
          ))
        ) : (
          <p>No articles found</p>
        )
      )}
        </div>
      </div>
      <footer className='lastcontainer'>

      </footer>
    </>
  )
}

