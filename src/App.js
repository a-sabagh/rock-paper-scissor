import header from './Components/Header/Header.js'
import footer from './Components/Footer/Footer.js'

export default class {

	render(){
		let headerComponent = header('Rock Scissor Paper')
		let footerComponent = footer('All Right Reserved 2023')
		return (`
			${headerComponent}
			Application
			${footerComponent}
		`)
	}

}
