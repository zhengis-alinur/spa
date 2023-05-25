
import { Card } from 'react-bootstrap';
import type { CommentEntity } from '../../types';

const Comment = ({body, id, email}: Partial<CommentEntity>) => {
    return (
    <Card>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <footer className="blockquote-footer">
            {email}
          </footer>
          <p>
            {' '}
            {body}{' '}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
    )
}

export default Comment;