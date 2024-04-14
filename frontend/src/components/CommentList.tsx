import { useEffect, useState } from 'react';
import commentsData from '../constants/comments.json'
import Comment, { CommentProps } from './Comment'
import Pagination from '@mui/material/Pagination';
import FilterStarButton from './FilterStarButton';
import { valueInArray } from '../utils/helper';

const CommentList = () => {
  const [numberPage, setnumberPage] = useState(10);
  const [perPage, setperPage] = useState(4);
  const [page, setPage] = useState(1);
  const [comments, setComments] = useState<CommentProps[]>([])
  const [star, setStar] = useState([1, 2, 3, 4, 5])

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

  useEffect(()=>{
    // call api here
  },[star, page])

  const toggleStar=(newStar: number) =>{
    if (valueInArray(newStar, star)){
      const tmp = star.filter(star => star !== newStar)
      setStar(tmp);
    }
    else{
      setStar([...star, newStar]);
    }
  }
  
  return (
    <div className="py-3 bg-gray-200 rounded shadow-xl mb-5">
      <div className='font-bold mb-5 px-5 text-lg justify-between flex flex-wrap'>
        <span className=''>Bình luận về sản phẩm</span>
        {
          comments.length > 0 && (
            <div className='flex items-center justify-around gap-4 pr-5'>
              {
                [1, 2, 3, 4, 5].map(index => (
                  <FilterStarButton
                    key={index}
                    currentStar={index}
                    star={star}
                    toggleStar={toggleStar}
                  />
                ))
              }
            </div>
          )
        }
      </div>
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