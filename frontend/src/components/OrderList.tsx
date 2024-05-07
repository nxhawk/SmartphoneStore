import TableContainer from "@mui/material/TableContainer"
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { ApiGetAllMyOrder } from "../api/order/apiOrder";
import { Link, Navigate } from "react-router-dom";
import { IOrderInfo_User } from "../types/order";
import { convertDate, convertToVND } from "../utils/helper";
import DownloadOrderListTemplate from "./ButtonDownload/DownloadOrderListTemplate";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    fontSize: 18,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '&:nth-of-type(odd) td, &:nth-of-type(odd) th, &:nth-of-type(even) td, &:nth-of-type(even) th': {
    fontSize: 18,
  }
}));

const OrderList = () => {
  const [t] = useTranslation("global");

  const { isLoading, isError, data: listOrder } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      const data = await ApiGetAllMyOrder();
      return data;
    },
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <Navigate to={'/auth/login'}/>
  if (listOrder && listOrder.length <= 0) return <div>Empty</div>

  return (
    <div>
      <div className="flex justify-end mb-2">
        <DownloadOrderListTemplate
          title={["orderId", "money", "status", "isPayment", "Date Order"]}
          data={listOrder}
        />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>STT</StyledTableCell>
              <StyledTableCell align="center">{t('page.order.sum')}</StyledTableCell>
              <StyledTableCell align="center">{t('page.order.status')}</StyledTableCell>
              <StyledTableCell align="center">{t('page.order.paid')}</StyledTableCell>
              <StyledTableCell align="center">{t('page.order.date')}</StyledTableCell>
              <StyledTableCell align="center">{t('page.order.detail')}</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              listOrder && listOrder.map((order: IOrderInfo_User, idx: number) => (
                <StyledTableRow key={idx}>
                  <StyledTableCell component="th" scope="row">
                    {idx + 1}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {convertToVND(order.order_totalCost)}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {order.order_status}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {order.order_isPayment ? 'True': 'False'}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {convertDate(order.order_timeOrder)}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Link className="hover:text-sky-500" to={`/order/${order.order_isPayment}`}>More</Link>
                  </StyledTableCell>
                </StyledTableRow>
              ))
            }

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default OrderList