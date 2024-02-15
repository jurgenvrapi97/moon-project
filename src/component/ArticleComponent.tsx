

import { Card, Button, Col } from 'react-bootstrap';
import { Result } from '../types'; // Assumendo che le tue interfacce siano in un file chiamato 'types.ts'
import { Link } from 'react-router-dom';
interface Props {
  articles: Result[];
}

const ArticleComponent= ({ articles }: Props) => {
  return (
    <>
      {articles.map((article) => (
      <Col key={article.id} sm={12} md={4} className='mb-3 '>
        <Card bg='dark' className='h-100 ' style={{ height: '300px'}}>
          <Card.Img variant="top" src={article.image_url} />
          <Card.Body className='d-flex flex-column justify-content-between'>
            <Card.Title className='text-light'>{article.title}</Card.Title>
            <Card.Text className='text-light' >
              {article.summary}
            </Card.Text>
            <Link to={`/detail/${article.id}`}>
              <Button variant="primary">Leggi di più</Button>
            </Link>
          </Card.Body>
        </Card>
        </Col>
      ))}
    </>
  );
};

export default ArticleComponent;

