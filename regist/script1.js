function checkValue() {
   var frm = document.emplyFrm;
   
   if(frm.employee_id.value == "") {
      alert("아이디를 입력해주세요.");
      frm.employee_id.focus();
      return;
   }
   if(frm.password.value == "") {
      alert("패스워드를 입력해주세요.");
      frm.password.focus();
      return;
   }
   if(frm.name.value == "") {
     alert("이름을 입력해주세요.");
     frm.name.focus();
     return;
  }
   if(frm.telno.value == "") {
      alert("전화번호를 입력해주세요.");
      frm.telno.focus();
      return;
   }
   if(frm.gender.value == "") {
      alert("성별을 입력해주세요.");
      frm.gender.focus();
      return;
   }
   if(frm.email.value == "") {
      alert("이메일을 입력해주세요.");
      frm.email.focus();
      return;
   }
   if(frm.address.value == "") {
      alert("주소를 입력해주세요.");
      frm.address.focus();
      return;
   }
/*   if(frm.dept_id.value == "") {
      alert("부서를 선택해주세요.");
      frm.dept_id.focus();
      return;
   }
   if(frm.position_id.value == "") {
      alert("직급을 선택해주세요.");
      frm.position_id.focus();
      return;
   }*/
   if(frm.hiredate.value == "") {
      alert("가입일을 입력해주세요.");
      frm.hiredate.focus();
      return;
   }
   frm.submit();
}      

function resetValue() {
	window.alert("정보를 지우고 처음부터 다시 입력합니다.");
	document.emplyFrm.reset();
	document.emplyFrm.employee_id.focus();
}


// 아이디 중복확인
function chkId() {
	let id = emplyFrm.employee_id.value;
	
	$.ajax(
		{
			type:"get",
			async:true,	//T:동기, F:비동기
			url:"/getData",
			data:{"id":id},
			success:function(data, textStatus) {
				/*alert("데이터 전송 성공");*/
				//alert(data);
				var responseData = JSON.parse(data);
				//alert(responseData);
				if(responseData.id == "y")
					alert("사용가능한 아이디입니다.");
				else alert("해당 아이디는 사용할 수 없습니다.");
				/*alert(responseData.id);*/
				
			},
			error:function(data) {
				alert("데이터 전송 실패")
			}
	});
}