import commentsData from '../constants/comments.json'
import Comment from './Comment'

const CommentList = () => {
  return (
    <div className="py-3 bg-gray-200 rounded shadow-xl">
      {
        commentsData["comments"].length > 0 ?(
          <div>
            <div className='font-bold mb-5 px-5'>Bình luận về sản phẩm</div>
            {
              commentsData["comments"].map(comment =>(
                <Comment
                  comment={comment}
                  key={comment.id}
                />
              ))
            }
          </div>
        ):(
          <div>Chưa có bình luận nào</div>
        )
      }
    </div>
  )
}

export default CommentList