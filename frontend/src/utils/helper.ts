export function convertToVND(money: number){
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(money);
}

export function valueInArray(value: number, array: number[]) {
  return array.filter((val) => val == value).length > 0;
}

export function isNumber(value?: string | number): boolean
{
  return ((value != null) &&
          (value !== '') &&
          !isNaN(Number(value.toString())));
}