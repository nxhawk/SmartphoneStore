import { useEffect, useState } from 'react';
import commentsData from '../constants/comments.json'
import Comment, { CommentProps } from './Comment'
import Pagination from '@mui/material/Pagination';

const CommentList = () => {
  const [numberPage, setnumberPage] = useState(10);
  const [perPage, setperPage] = useState(4);
  const [page, setPage] = useState(1);
  const [comments, setComments] = useState<CommentProps[]>([])

  const handleChangePage = (e: React.ChangeEvent<unknown>, value: number) =>{
    setPage(value);
    changePage(value, perPage);
  } 

  const changePage=(page: number, perPage: number)=>{
    const from = (page - 1) * perPage;
    const to = Math.min(commentsData["comments"].length, page * perPage);

    setComments(commentsData["comments"].slice(from, to))
  }

  useEffect(() =>{
    const pageCount = Math.floor(commentsData["comments"].length / perPage) + (commentsData["comments"].length % perPage > 0?1:0);
    setnumberPage(pageCount);
    changePage(1, perPage);
  },[])
  
  return (
    <div className="py-3 bg-gray-200 rounded shadow-xl">
      <div className='font-bold mb-5 px-5 text-lg'>Bình luận về sản phẩm</div>
      {
        comments.length > 0 ?(
          <div>
            {
              comments.map(comment =>(
                <Comment
                  comment={comment}
                  key={comment.id}
                />
              ))
            }
            <div className='mt-5 flex item-center justify-center'>
              <Pagination 
                count={numberPage} 
                page={page}
                color="primary" size="large" 
                onChange={handleChangePage}  
              />
            </div>
          </div>
        ):(
          <div className='text-center font-bold text-2xl mb-2'>Chưa có bình luận nào</div>
        )
      }
    </div>
  )
}

export default CommentList