
import type { CommentEntity } from '../../types';

const Comment = ({body, id, email}: Partial<CommentEntity>) => {
    return (
    <div key={id}>
        <p>{email}</p>
        <p>{body}</p>
    </div>
    )
}

export default Comment;