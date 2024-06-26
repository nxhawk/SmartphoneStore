import { useState } from 'react'
import avatar from '../assets/images/chitietsanpham/avatar.jpg'
import ReactStars from "react-rating-stars-component";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { IUser } from '../types/user';
import { CommentForm } from '../types/comment';
import { addNewComment } from '../api/comment/apiComment';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const AddComment = ({user, productId}: {user: IUser, productId: string|undefined}) => {
  const [name, setName] = useState<string>(user.name);
  const [content, setContent] = useState<string>("");
  const [star, setStar] = useState<number>(0)

  const addCommentMutation = useMutation({
    mutationFn: async (data: CommentForm) => addNewComment(data),
    onError: () =>{
      toast.error('Something went wrong');
    },
    onSuccess: () =>{
      setName(user.name);
      setContent("");
      setStar(0);
      toast.success('Added Comment successfully', {
        className: 'w-96'
      });
    }
  })

  const handlePost = () => {
    if (addCommentMutation.isPending) return;
    if (!name || !star) {
      toast.warning('Please fill all fields');
      return;
    }
    if (!productId) {
      toast.error('Product not found');
      return;
    }
    addCommentMutation.mutate({
      productId: Number(productId),
      comment: {
        name,
        content,
        rate: star,
      }
    })
  }

  const ratingChanged = (newRating: number) => {
    setStar(newRating);
  };

  return (
    <div className='mt-6'>
      <div className='px-5 flex md:gap-4 gap-2 md:items-center items-start'>
        <div className='min-w-10 min-h-10 w-10 h-10 rounded-full flex justify-center items-center'>
          <img src={user.avatar || avatar} alt="avatar" className='object-fit rounded-full'/>
        </div>
        <div className='flex flex-wrap md:flex-nowrap md:gap-6 gap-2 justify-start align-top w-full'>
          <input placeholder='Nhập tên của bạn' className='p-3 rounded shadow-inner border-black border' 
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
          <textarea placeholder='Nhập nội dung đánh giá' className='w-full p-3 rounded shadow-inner border-black border'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          />
        </div>
        
      </div>
      <div className='flex flex-wrap justify-between px-5 mt-3'>
        <div className='flex items-center gap-4'>
          <div className='text-xl font-bold'>Số sao: </div>
          <ReactStars
            emptyIcon={<AiOutlineStar/>}
            filledIcon={<AiFillStar />}
            count={5}
            value={star}
            size={60}
            activeColor="orange"
            onChange={ratingChanged}
          />
        </div>
        <div className='flex justify-center items-center w-full mt-3 md:mt-0 md:w-fit'>
          <button 
            className={`ease-in-out bg-sky-500 text-white border-sky-900 hover:bg-sky-600 border py-2 px-4 rounded-lg shadow-lg ${addCommentMutation.isPending&&'opacity-40'}`}
            onClick={handlePost}
          >
            Thêm bình luận
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default AddComment