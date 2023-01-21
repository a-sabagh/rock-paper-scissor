import header from './Components/Header/Header.js'
import footer from './Components/Footer/Footer.js'
import panel from './Components/Panel/Panel.js'

export default class {

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
