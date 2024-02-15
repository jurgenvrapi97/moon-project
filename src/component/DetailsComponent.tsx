import  { useEffect, useState } from 'react';
import {  Col, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Result } from '../types'; 

const DetailsComponent = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Result | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`);
        const data: Result = await response.json();
        setArticle(data);
      } catch (error) {
        console.error("Errore durante il recupero dell'articolo:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    article 
      ? (
          <Row className='justify-content-center'>
              <Col className='col-8'>
              <h2 className='text-center text-light mt-3'>{article.title}</h2>
              <div className='d-flex justify-content-center'>
              <img src={article.image_url} alt=""  className='img-fluid' />
             
              </div>
              <div className='bg-dark p-5 mt-2'>
               <h4 className='text-light text-center'>Articolo di : {article.news_site}</h4>
               <hr className='text-light my-3' />
               <h4 className='text-light text-center'>{article.summary}</h4>
               <hr className='text-light' />
               <div className='d-flex justify-content-between mt-3'>
                  <h5 className='text-light'>Pubblicato il: {new Date (article.published_at).toLocaleDateString()}</h5>
                  <h5 className='text-light'>Aggiornato il: { new Date(article.updated_at).toLocaleDateString()}</h5>
               </div>
               </div>
              </Col>
              
          </Row>
        )
      : <div><Spinner animation="border" variant="danger" /></div>
  );
  
};

export default DetailsComponent;
