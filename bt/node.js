const http = require("node:http");
http
  .createServer((request, response) => {
    // response.write("<html>");
    // response.write("<body>");
    response.write("<h1>Hello +  World!</h1>");
    // response.write("</body>");
    // response.write("</html>");
    response.end();
  })
  .listen(8080);

  const { exec } = require("child_process");

// exec("npm init -y", (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Lỗi khi chạy npm init: ${error.message}`);
//     return;
//   }

//   if (stderr) {
//     console.error(`Cảnh báo: ${stderr}`);
//     return;
//   }

//   console.log(`Kết quả: ${stdout}`);
// });