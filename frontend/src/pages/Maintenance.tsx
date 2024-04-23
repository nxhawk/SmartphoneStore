import TableContainer from "@mui/material/TableContainer"
import CustomMarquee from "../components/CustomMarquee"
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import maintenance from "../constants/data.json"
import { Link } from "react-router-dom";
import { MaintenanceMeta } from "../utils/meta";
import DocumentMeta from "react-document-meta";
import { useTranslation } from "react-i18next";

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
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Maintenance = () => {
  const [t] = useTranslation("global");
  
  return (
    <DocumentMeta {...MaintenanceMeta}>
      <CustomMarquee message={t('navbar.MaintenanceText')}/>
      <div className="p-2 lg:p-5 mb-5">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>STT</StyledTableCell>
                <StyledTableCell align="left">{t('address')}</StyledTableCell>
                <StyledTableCell align="left">{t('numberPhone')}</StyledTableCell>
                <StyledTableCell align="left">{t('workingTime')}</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                maintenance["maintenance"].map((row)=>(
                  <StyledTableRow key={row.stt}>
                    <StyledTableCell component="th" scope="row">
                      {row.stt}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Link target="_blank" className="hover:underline hover:text-blue-600" to={row.url}>{row.address}</Link>
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.phone}</StyledTableCell>
                    <StyledTableCell align="left">{row.time}</StyledTableCell>
                  </StyledTableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </DocumentMeta>
  )
}

export default Maintenance