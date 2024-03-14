const information = document.getElementById('info')
information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`

async function p() {
	const response = await window.versions.ping()
	console.log(window)
	console.log(response)
}

p()
