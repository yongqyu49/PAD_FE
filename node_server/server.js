const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
// const sanitizeHtml = require('sanitize-html');
const multer = require('multer'); // 파일 업로드를 위한 라이브러리
const path = require('path');
const fs = require('fs');

app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));

// Serve uploaded images
app.use('/images', express.static(path.join(__dirname, '../pad/public/images')));

// Multer storage configuration for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './image'); // 이미지를 저장할 디렉토리 설정
    // cb(null, ' ../pad/public/image');
   
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// API endpoint for image upload
app.post('/node/board/image', upload.single('file'), (req, res) => {
  const { file } = req;
  const imgName = req.file.filename;

  // 이동할 경로 설정 (React 앱의 public 폴더)
  const destinationPath = path.join(__dirname, '../pad/public/images', imgName);

  // 파일 이동
  fs.rename(file.path, destinationPath, (err) => {
    if (err) {
      console.error('Error moving file:', err);
      return res.status(500).send('Internal Server Error');
    }

    res.json(imgName)
  });
});

// Serve React build files (production mode)
// This should be after all API routes
const buildPath = path.join(__dirname, '../pad/build');
if (fs.existsSync(buildPath)) {
  // Serve static files from the React build folder
  app.use(express.static(buildPath));
  
  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
} else {
  console.log('React build folder not found. Run "npm run build" in the pad directory first.');
  console.log('Development mode: Frontend should be running on port 3000');
}

const port = 7223;
app.listen(port, function () {
  console.log(port+'포트로 서버 오픈')
});
