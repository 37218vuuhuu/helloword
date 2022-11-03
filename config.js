const { platform } = require('os')
const { existsSync } = require('fs')

const local = () => {
  const local = `${ __dirname }/config.local.js`

  return existsSync(local) ? require(local) : {}
}

module.exports = {
  // tải danh sách

    listUrl: 'http://103.6.249.86:9951/v.txt',
  // thời gian tải lại
  // min: 60000 (1 phút)
  listCacheTimeout: 600000,

  // cổng proxy

  // nên để cổng >= 10000
  portRange: [
    10000,
    10200,
  ],

  // lựa chọn server

  // thời gian đổi server cho mỗi cổng
  // min: 30000 (30 giây)
  rotateAfter: 150000,
  // timeout kiểm tra server
  // nên để timeout nhỏ, khoảng 3000-5000 (3-5 giây)
  // max: 30000 (30 giây)
  knockTimeout: 3000,
  // thời gian lưu kết quả kiểm tra server
  // nếu chất lượng server tương đối ổn định,
  // nên để ít nhất 60000 (60 giây)
  //   hoặc lớn hơn thời gian xoay vòng ít nhất 30000 (30 giây)
  knockCacheTimeout: 150000,

  // server đã sử dụng sẽ bị lọc khỏi danh sách các lựa chọn
  // sau một khoảng thời gian,
  // server đã sử dụng được làm mới, được tính như một server chưa sử dụng
  // min: 60000 (60 giây)
  renewAfter: 600000,

  // kết nối ssh
  connectTimeout: 500,
  connectionAttempts: 3,
  knownHostsFile: 'known_hosts.local',
  enableDataCompression: true,
  bin: platform() === 'win32' ? 'ssh.exe' : 'ssh',

  ...local(),
}
