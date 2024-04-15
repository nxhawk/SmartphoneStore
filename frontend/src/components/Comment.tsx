import ReactStars from "react-rating-stars-component";

export interface CommentProps {
  id: number;
  date: string;
  star: number;
  name: string;
  content: string;
  avatar: string;
}

const Comment = ({ comment } : {comment: CommentProps}) => {
  return (
    <div className='flex gap-2 border-b-2 px-5 border-gray-300 py-3 cursor-pointer hover:bg-gray-300'>
      <div className='min-w-10 min-h-10 w-10 h-10 rounded-full flex justify-center items-center'>
        <img src={comment.avatar} alt="avatar" className='object-fit rounded-full'/>
      </div>
      <div className='flex flex-col gap-0'>
        <div className='font-semibold text-sm'>{comment.name}</div>
        <div className='flex gap-4 justify-start items-center'>
          <p className="font-normal text-sm">{comment.date}</p>
          <ReactStars
            count={5}
            value={comment.star || 0}
            size={24}
            edit={false}
            activeColor="orange"
          />
        </div>
        <div>
          {comment.content}
        </div>
      </div>

    </div>
  )
}

export default Comment