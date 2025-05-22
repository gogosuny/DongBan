// 사진을 추가할 때마다 맨 처음에 보이도록 하는 코드
function addImageToGalary(dto) {
    const galaryList = document.querySelector('.galary_list');

    // 새로운 이미지 항목 생성
    const galaryFrame = document.createElement('div');
    galaryFrame.classList.add('galary_frame');
    
    // 이미지 태그 추가
    const image = document.createElement('img');
    image.src = `/downloadImg/${dto.id}`; // 서버에서 이미지 경로를 받아와서 사용
    image.alt = 'Image';
    image.classList.add('galary-image');
    galaryFrame.appendChild(image);

    // 제목 추가
    const title = document.createElement('p');
    title.textContent = dto.title; // 서버에서 전달된 제목 사용
    title.classList.add('galary-title');
    galaryFrame.appendChild(title);

    // 사용자 아이디 추가
    const userId = document.createElement('p');
    userId.textContent = dto.user_id; // 서버에서 전달된 사용자 아이디 사용
    userId.classList.add('galary-user-id');
    galaryFrame.appendChild(userId);

    // 생성된 항목을 맨 처음에 추가
    galaryList.insertBefore(galaryFrame, galaryList.firstChild);
}

// 다른 기능들...
function savePost() {
    let post_id = $(".post_id").val();
    location.href="editPost?post_id=" + post_id;
}

function addFile(button) {
    const parent = button.parentElement;
    var addElement = document.createElement('div');
    addElement.innerHTML = '<input type="file" name="file">'
                            + '<input type="button" value="X" onclick="delFile(this)">';
    parent.appendChild(addElement);
}

function delFile(button) {
    button.parentElement.remove();
}

function ckfrm() {
   var frm = document.galaryForm;
   
   if(frm.title.value == "") {
      alert("제목을 입력해주세요.");
      frm.title.focus();
      return;
   }
   if(frm.content.value == "") {
      alert("내용을 입력해주세요.");
      frm.content.focus();
      return;
   }
   frm.submit();
}   

// 팝업을 새 창으로 띄우는 함수
function openImagePopup(imageId) {
    var width = 800;  // 너비를 좀 더 넓게
    var height = 500; // 높이를 조금 더 여유롭게

    var left = (window.innerWidth / 2) - (width / 2);
    var top = (window.innerHeight / 2) - (height / 2);

    window.open('/getImageDetails/' + imageId, 'popupWindow', 
        'width=' + width + ',height=' + height + 
        ',left=' + left + ',top=' + top + 
        ',resizable=yes,scrollbars=yes');
}

// 세부 검색 버튼 클릭 이벤트 핸들러
$('#searchButton').click(function() {
    $('.table-container').fadeIn(300); // 부드럽게 나타나도록 fadeIn 사용
});

// 좋아요
function toggle_like() {
    const post_no = document.getElementById("post_no").innerText;
    const user_id = replyFrm.user_id.value;
    location.href = "/like?post_no=" + post_no + "&user_id=" + user_id;
}

// 글쓰기
function checkValue() {
   var frm = document.writePost;
   
   if(frm.title.value == "") {
      window.alert("제목을 입력해주세요.");
      frm.title.focus();
      return;
   }
   if(frm.content.value == "") {
      window.alert("내용을 입력해주세요.");
      frm.content.focus();
      return;
   }
   window.alert("게시물이 등록되었습니다");
   frm.submit();
}     

function resetValue() {
    window.alert("입력한 내용을 지우고 처음부터 다시 입력합니다!");
    document.writePost.reset();
    document.writePost.title.focus();
}
