import { useState } from 'react';
import Comment, { CommentProps } from './Comment'
import Pagination from '@mui/material/Pagination';
import FilterStarButton from './FilterStarButton';
import { valueInArray } from '../utils/helper';
import AddComment from './AddComment';
import { useQuery } from '@tanstack/react-query';
import { getCommentsByProductId } from '../api/comment/apiComment';
import { FaCommentAlt } from "react-icons/fa";

const CommentList = ({ productId }: {productId: string|undefined}) => {
  const [perPage, setperPage] = useState(4);
  const [countPage, setcountPage] = useState(4);
  const [page, setPage] = useState(1);
  const [totalComments, setTotalComments] = useState(1);
  const [storePage, setStorePage] = useState(1);
  const [star, setStar] = useState([])

  const handleChangePage = (e: React.ChangeEvent<unknown>, value: number) =>{
    setPage(value);
    changePage(value);
  } 

  const changePage=(page: number)=>{
    if (page > countPage) setPage(1);
    setPage(page);
  }

  const toggleStar=(newStar: number) =>{
    if (valueInArray(newStar, star)){
      const tmp = star.filter(star => star !== newStar)
      setStar(tmp);
    }
    else{
      setStar([...star, newStar]);
    }
  }

  
  const { isLoading, data: comments} = useQuery({
    queryKey: ['comments', page, star],
    queryFn: async () => {
      if (page === storePage) setPage(1);
      setStorePage(page);
      const data = await getCommentsByProductId(productId, page, star);
      setcountPage(data.totalPage);
      setperPage(data.perPage);
      setTotalComments(data.totalComments);
      const response: CommentProps[] = data.comments; 
      return response;
    },
  })

  if (isLoading)return <div>Loading...</div>
  if (!comments) return <div>Not found</div>
  return (
    <div className="py-3 bg-gray-200 rounded shadow-xl mb-5">
      <div className='gap-2 font-bold mb-5 px-5 text-lg justify-between flex flex-wrap'>
        <div>
          <span className=''>Bình luận về sản phẩm</span>
          <div className="text-xl font-bold text-amber-700 flex items-center gap-2">
            <FaCommentAlt />
            <span>{totalComments} đánh giá</span>
          </div>
        </div>
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
                  key={comment.commentId}
                />
              ))
            }
            <div className='mt-5 flex item-center justify-center'>
              <Pagination 
                count={countPage} 
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
      <AddComment/>
    </div>
  )
}

export default CommentList