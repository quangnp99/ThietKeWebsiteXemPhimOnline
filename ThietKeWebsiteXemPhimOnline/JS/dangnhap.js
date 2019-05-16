// JavaScript Document

function Kiemtrathongtin()
{
	var username=document.getElementById("txtdangnhap");
	if(username.value==""){
		alert("Vui lòng nhập tên đăng nhập");
		username.focus();
		return false;
	}
	var password=document.getElementById("txtmatkhau");
	if(password.value=="")
		{
			alert("Vui lòng nhập Password");
			password.focus();
			return false;
		}
	alert("Đăng nhập thành công ! Xin chúc mừng ");
	window.location.href = "dnthanhcong.html";
	return true;
}
function trove()
{
	window.location.href = "trangchu.html";
}
