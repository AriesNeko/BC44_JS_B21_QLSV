function SinhVien(_ma, _ten, _email, _matKhau, _diemToan, _diemLy, _diemHoa) {
  this.ma = _ma;
  this.ten = _ten;
  this.email = _email;
  this.matKhau = _matKhau;
  this.toan = _diemToan;
  this.ly = _diemLy;
  this.hoa = _diemHoa;
  this.tinhDTB = function () {
    return (this.toan + this.ly + this.hoa) / 3;
  };
}
