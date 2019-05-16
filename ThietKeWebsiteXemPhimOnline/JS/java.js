// JavaScript Document

function Kiemtrathongtin()
{
	var hoten=document.getElementById("txthoten");
	if(hoten.value=="")
	{
		alert("Vui lòng nhập họ tên");
		hoten.focus();
		return false;
	}
	var namsinh=document.getElementById("txtNam");
	if(namsinh.value=="")
	{
		alert("Vui lòng nhập năm sinh");
		namsinh.focus();
		return false;
	}
	
	if(isNaN(namsinh.value)==true)
	{
		alert("Năm sinh phải là số")
		nam.focus();
			return false;
	}
	var diachi=document.getElementById("txtDiachi");
	if(diachi.value=="")
		{
		 alert("Vui lòng nhập địa chỉ");
			diachi.focus();
			return false;
		}
	var dienthoai=document.getElementById("txtDienthoai");
	if(dienthoai.value=="")
		{
			alert("Vui lòng nhập số điện thoại");
			dienthoai.focus();
			return false;
		}
	if(isNaN(dienthoai.value)==true)
		{
			alert("Nhập sai cú pháp ! VD: 0383197989");
			dienthoai.focus();
			return false;
		}
	var email =document.getElementById("txtEmail");
	re=/\w+@\w+\.\w+/;
	if(email.value=="")
		{
			alert("Vui lòng nhập email");
			email.focus();
			return false;
		}
	else
		if(re.test(email.value)==false)
		{
			alert("Email không hợp lệ");
			email.focus();
			return false;
		}
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
	var Npass=document.getElementById("txtnhaplai");

	if(Npass.value ==""){
		alert("Vui lòng nhập lại Password ");
		Npass.focus();
				return false;
	}
	else
		if(password.value != Npass.value)
			{
				alert("Password không trùng nhau");
				Npass.focus();
				return false;
			}
	alert("Đăng ký thành công ! Xin chúc mừng ");
	window.location.href = "dnthanhcong.html";
	return true;
	
}

function trove()
{
	window.location.href = "trangchu.html";
}