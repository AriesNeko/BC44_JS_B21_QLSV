function layThongTinTuForm() {
  var ma = document.getElementById("txtMaSV").value;
  var ten = document.getElementById("txtTenSV").value;
  var email = document.getElementById("txtEmail").value;
  var matKhau = document.getElementById("txtPass").value;
  var toan = document.getElementById("txtDiemToan").value * 1;
  var ly = document.getElementById("txtDiemLy").value * 1;
  var hoa = document.getElementById("txtDiemHoa").value * 1;

  var sinhVien = new SinhVien(ma, ten, email, matKhau, toan, ly, hoa);
  return sinhVien;
}

function renderDSSV(svArr) {
  var contentHTML = "";

  for (var i = 0; i < svArr.length; i++) {
    var sv = svArr[i];
    var contentList = `<tr>
    <td> ${sv.ma} </td>
    <td> ${sv.ten} </td>
    <td> ${sv.email} </td>
    <td> ${sv.tinhDTB().toFixed(2)} </td>
    <td class="d-flex">  
    <button onclick="suaSV(${sv.ma})" class="btn btn-secondary">Sửa</button>
    <button onclick="xoaSV(${sv.ma})" class="btn btn-danger ml-1">Xóa</button>
    </td>
    </tr>
    `;
    contentHTML += contentList;
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}

function layThongTinShowLenForm(sv) {
  document.getElementById("txtMaSV").value = sv.ma;
  document.getElementById("txtTenSV").value = sv.ten;
  document.getElementById("txtEmail").value = sv.email;
  document.getElementById("txtPass").value = sv.matKhau;
  document.getElementById("txtDiemToan").value = sv.toan;
  document.getElementById("txtDiemLy").value = sv.ly;
  document.getElementById("txtDiemHoa").value = sv.hoa;
}

function resetForm() {
  document.getElementById("formQLSV").reset();
}
