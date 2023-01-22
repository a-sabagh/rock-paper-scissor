import header from './Components/Header/Header.js'
import footer from './Components/Footer/Footer.js'
import panel from './Components/Panel/Panel.js'
import rock from './images/rock.png'
import paper from './images/paper.png'
import scissor from './images/scissor.png'

export default class {

	start = (event) => {
		let counter = 3
		let panel = document.querySelector('.panel')
		new Promise((resolve,reject)=>{
			const interval = setInterval(()=>{
				panel.innerHTML = counter
				counter--
				if(counter <= 0){
					 clearInterval(interval)
					panel.innerHTML = ''
					 resolve('done')
				}
			},1000)	
		}).then((result)=>{
			let items = [rock,paper,scissor]
			let img = document.createElement('img')
			img.src = items[Math.floor(Math.random()*items.length)]
			document.querySelector('.panel').append(img)
		})
	}

	render(){
		let headerComponent = header('Rock Scissor Paper')
		let footerComponent = footer('All Right Reserved 2023')
		let panelComponent = panel()
		return (`
			${headerComponent}
			${panelComponent}
			${footerComponent}
		`)
	}

}
