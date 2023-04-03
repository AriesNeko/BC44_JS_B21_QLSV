var dssv = [];

var dataJSON = localStorage.getItem("DSSV_LOCAL");
if (dataJSON != null) {
  var dataArr = JSON.parse(dataJSON);
  for (var i = 0; i < dataArr.length; i++) {
    var item = dataArr[i];
    var sv = new SinhVien(
      item.ma,
      item.ten,
      item.email,
      item.matKhau,
      item.toan,
      item.ly,
      item.hoa
    );
    dssv.push(sv);
  }
  renderDSSV(dssv);
}

function themSinhVien() {
  var sv = layThongTinTuForm();
  dssv.push(sv);
  var dataJSON = JSON.stringify(dssv);
  localStorage.setItem("DSSV_LOCAL", dataJSON);

  renderDSSV(dssv);
}

function suaSV(id) {
  var viTri = dssv.findIndex(function (item) {
    return item.ma == id;
  });
  if (viTri != -1) {
    document.getElementById("txtMaSV").disabled = true;
    layThongTinShowLenForm(dssv[viTri]);
  }
}

function capNhatSinhVien() {
  document.getElementById("txtMaSV").disabled = false;
  var sv = layThongTinTuForm();
  var viTri = dssv.findIndex(function (item) {
    return item.ma == sv.ma;
  });
  if (viTri != -1) {
    dssv[viTri] = sv;
  }
  var dataJSON = JSON.stringify(dssv);
  localStorage.setItem("DSSV_LOCAL", dataJSON);

  renderDSSV(dssv);
  resetForm();
}

function xoaSV(id) {
  var viTri = -1;
  for (var i = 0; i < dssv.length; i++) {
    var sv = dssv[i];
    if (sv.ma == id) {
      viTri = i;
    }
  }
  dssv.splice(viTri, 1);
  renderDSSV(dssv);
}
