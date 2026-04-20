import express from 'express';
import cors from 'cors';
import * as xlsx from 'xlsx';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const EXCEL_FILE_PATH = path.join(__dirname, 'appointments.xlsx');

app.use(cors());
app.use(express.json());

// Helper function to append data to the Excel file
const appendToExcel = (data) => {
  let workbook;
  const sheetName = 'Appointments';

  if (fs.existsSync(EXCEL_FILE_PATH)) {
    // Read existing workbook
    workbook = xlsx.readFile(EXCEL_FILE_PATH);
  } else {
    // Create new workbook
    workbook = xlsx.utils.book_new();
    const headers = [['Date', 'Name', 'Email', 'Message']];
    const ws = xlsx.utils.aoa_to_sheet(headers);
    xlsx.utils.book_append_sheet(workbook, ws, sheetName);
  }

  const sheet = workbook.Sheets[sheetName];
  const existingData = xlsx.utils.sheet_to_json(sheet, { header: 1 });
  
  // Append new row
  existingData.push([
    new Date().toLocaleString(),
    data.name,
    data.email,
    data.message
  ]);

  const newSheet = xlsx.utils.aoa_to_sheet(existingData);
  workbook.Sheets[sheetName] = newSheet;

  xlsx.writeFile(workbook, EXCEL_FILE_PATH);
};

app.post('/api/book', (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required.' });
    }

    appendToExcel({ name, email, message });
    
    res.status(200).json({ success: true, message: 'Appointment booked successfully.' });
  } catch (error) {
    console.error('Error saving appointment:', error);
    res.status(500).json({ error: 'Failed to book appointment. Please try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
  console.log(`Appointments will be saved to ${EXCEL_FILE_PATH}`);
});
