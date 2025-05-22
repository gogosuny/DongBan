function editEmply(n) {
    let id_name = "#line" + n;
    let id = $(id_name +" > .id").text();
    let password = $(id_name +" > .password").text();
    let name = $(id_name +" > .name").text();
    let address = $(id_name +" > .address").text();
    let telno = $(id_name +" > .telno").text();
    let email = $(id_name +" > .email").text();
    
    // 입력란으로 변경하고 스타일 적용
    $(id_name +" > .password").html("<input type='password' name='password' value='"+password+"' class='input-field'>");
    $(id_name +" > .name").html("<input type='text' name='name' value='"+name+"' class='input-field'>");
    $(id_name +" > .address").html("<input type='text' name='address' value='"+address+"' class='input-field'>");
    $(id_name +" > .telno").html("<input type='text' name='telno' value='"+telno+"' class='input-field'>");
    $(id_name +" > .email").html("<input type='text' name='email' value='"+email+"' class='input-field'>");
    
    // 수정된 저장버튼 생성 및 스타일 적용
    $(id_name +" > .edit").html("<p class='edit'><a href='javascript:void(0)' onclick='saveEmply("+n+")'>[저장]</a></p>");
}



function saveEmply(n) {
	let id_name = "#line" + n;
	
	// 새로운 폼을 동적으로 생성
	let frm = document.createElement("form");
	frm.action = "edit";		// 서버에서 데이터를 처리할 URL로 설정
	frm.method = "post"; 
	document.body.appendChild(frm);

	// 폼에 필요한 hidden 필드를 추가
	let id = document.createElement("input");
	id.name = "employee_id";
	id.type = "hidden";
	id.value = $(id_name +" > .id").text();
	frm.appendChild(id);

/*	let password = document.createElement("input");
	password.name = "password";
	password.type = "hidden";
	password.value = $(id_name +" > .password > input").val();
	frm.appendChild(password);*/
	
	let name = document.createElement("input");
	name.name = "name";
	name.type = "hidden";
	name.value = $(id_name +" > .name > input").val();
	frm.appendChild(name);

	let address = document.createElement("input");
	address.name = "address";
	address.type = "hidden";
	address.value = $(id_name +" > .address > input").val();
	frm.appendChild(address);

	let telno = document.createElement("input");
	telno.name = "telno";
	telno.type = "hidden";
	telno.value = $(id_name +" > .telno > input").val();
	frm.appendChild(telno);
	
	let email = document.createElement("input");
	email.name = "email";
	email.type = "hidden";
	email.value = $(id_name +" > .email > input").val();
	frm.appendChild(email);

	// 폼을 body에 추가하고 제출합니다.
	document.body.appendChild(frm);
	frm.submit();
}