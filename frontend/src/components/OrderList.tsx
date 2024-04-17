import TableContainer from "@mui/material/TableContainer"
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

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
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>STT</StyledTableCell>
            <StyledTableCell align="center">Tổng tiền</StyledTableCell>
            <StyledTableCell align="center">Trạng thái</StyledTableCell>
            <StyledTableCell align="center">Đã thanh toán</StyledTableCell>
            <StyledTableCell align="center">Ngày đặt</StyledTableCell>
            <StyledTableCell align="center">Chi tiết</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* list */}
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              1
            </StyledTableCell>
            <StyledTableCell align="center">
            100.000.000 VNĐ
            </StyledTableCell>
            <StyledTableCell align="center">PENDING</StyledTableCell>
            <StyledTableCell align="center">True</StyledTableCell>
            <StyledTableCell align="center">15-04-2024</StyledTableCell>
            <StyledTableCell align="center">More</StyledTableCell>
          </StyledTableRow>

        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default OrderList