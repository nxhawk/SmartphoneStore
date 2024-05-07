import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import ExcelJS from "exceljs";
import { useTranslation } from "react-i18next";
import { FileDownload } from "@mui/icons-material";
import { IOrderInfo_User } from "../../types/order";

interface Props {
  title: string[];
  data: IOrderInfo_User[];
}

const DownloadOrderListTemplate = ({ data, title }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { t } = useTranslation("global");

  const handleDownloadClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const downloadXLSX = async () => {
    // Create a new workbook
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet1");

     // Add data to the worksheet
    worksheet.addRow(title);
    data.forEach((row) => {
      const data = row as IOrderInfo_User;
      worksheet.addRow([data.order_orderId, data.order_totalCost, data.order_status, data.order_isPayment, data.order_timeOrder]);
    });

    // Generate a buffer from the workbook
    const buffer = await workbook.xlsx.writeBuffer();
     // Create a Blob from the buffer

    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a temporary <a> element to trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.download = "order_list_data.xlsx";
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  const downloadCSV = () => {
    // Convert data to CSV format
    let csvContent = title.join(",") + '\n';
    data.map((row) => {
        csvContent += (row.order_orderId+','+row.order_totalCost+','+row.order_status+','+row.order_isPayment+','+row.order_timeOrder+'\n');
    });

    // Create a Blob object
    const blob = new Blob([csvContent], { type: "text/csv" });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a temporary <a> element to trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.download = "student_list_template.csv";
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <Button onClick={handleDownloadClick} startIcon={<FileDownload />}>
        {/* {t("downloadTemplate")} */}
        download
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
      <MenuItem
          onClick={() => {
            downloadCSV();
            handleClose();
          }}
        >
          Download CSV
        </MenuItem>
        <MenuItem
          onClick={() => {
            downloadXLSX();
            handleClose();
          }}
        >
          Download XLSX
        </MenuItem>
      </Menu>
    </div>
  )
}

export default DownloadOrderListTemplate