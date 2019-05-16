var episodes = {
		    1: 'https://www.youtube.com/embed/pWMzbUvsdxQ',
		    2: 'https://www.youtube.com/embed/vFAoKPrE6Lg'
		}

	/*tập đầu tiên tô màu đỏ*/
	document.getElementsByTagName('input')[0].style.color = "red";

	/*chèn link youtube vào div#wrapper*/
	document.querySelector('#wrapper').insertAdjacentHTML(
	    'afterbegin');
	/*hàm thay đổi link youtube*/
	function changeLink(id) {
		
		var iframe = document.getElementById('player');

		iframe.src = episodes[id];
		/*đổi màu số tập đang chọn*/
		changeBackground(id);
	}      

	/*đổi màu số tập đang chọn*/
	function changeBackground(id) {

		var inputs, i;

		inputs = document.getElementsByTagName('input');
		
		/*tô tất cả các nút thành màu đen*/
		for (i = 0; i < inputs.length; ++i) {

		    inputs[i].style.color = 'black';
		}

		/*tô nút đang chọn thành đỏ*/
		inputs[id-1].style.color = 'red';
	}