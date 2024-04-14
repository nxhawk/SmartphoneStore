import ProductFrame from '../components/ProductFrame'
import Brands from '../components/Brands'
import { useEffect, useState } from 'react'
import FilterList from '../components/FilterList';

export interface filterProps {
  option_root: string;
  option_key: string;
  option_name: string;
}

const AllProduct = () => {
  const [filter, setFilter] = useState<filterProps[]>([]);

  const addFilterOption = (option: filterProps) => {
    if (option.option_root == 'type'){
      const tmp = filter.filter(prop => 
        ((prop.option_root != option.option_root)  || (prop.option_root == 'type' && prop.option_name !== option.option_name))
      );
      tmp.push(option);
      setFilter(tmp);
      return;
    }
    const tmp = filter.filter(prop => prop.option_root != option.option_root);
    tmp.push(option);
    setFilter(tmp);
  }

  const clearFilterOption = () =>{
    setFilter([]);
  }

  const removeOneFilterOption = (option_root: string, option_name?: string) => {
    if (option_root === 'type'){
      const tmp = filter.filter(prop => 
        (prop.option_name !== option_name)
      );
      setFilter(tmp);
      return;
    }
    const tmp = filter.filter(prop => prop.option_root != option_root);
    setFilter(tmp);
  }

  useEffect(() =>{
  }, [filter])

  return (
    <div className='mt-5'>
      <div className='border-y-2 p-4'>
        <Brands
          addFilterOption={addFilterOption}
        />
        <FilterList
          filter={filter}
          clearFilterOption={clearFilterOption}
          removeOneFilterOption={removeOneFilterOption}
        />
      </div>
      <div className='p-2'>
        <ProductFrame 
          title='* SẢN PHẨM TÌM KIẾM THEO YÊU CẦU *' 
          more={false}
          filter={filter}
        />
      </div>
    </div>
  )
}

export default AllProduct