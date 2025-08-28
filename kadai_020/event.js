// btnというidを持つHTML要素を取得し、定数に代入する
const clickBtn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
clickBtn.addEventListener('click', () => {
	const changeText = document.getElementById('text');
	changeText.textContent = 'ボタンをクリックしました';
});