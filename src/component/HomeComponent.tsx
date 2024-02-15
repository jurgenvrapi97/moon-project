import  { useEffect, useState } from 'react';
import { Welcome } from '../types';
import ArticleComponent from './ArticleComponent';
import {  Row, Container, Spinner } from 'react-bootstrap';


const HomeComponent = () => {
    const [articles, setArticles] = useState<Welcome | null>(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles');
            const data: Welcome = await response.json();
            setArticles(data);
          } catch (error) {
            console.error("Errore durante il recupero degli articoli:", error);
          }
        };
    
        fetchData();
      }, []);
    
      return (
        articles 
          ? (
              <Container className='mt-3'> 
                  <Row>
                      <ArticleComponent articles={articles.results}/>
                  </Row>
              </Container>
            )
          : <div><Spinner animation="border" variant="danger" /></div>
      );
}

export default HomeComponent;
