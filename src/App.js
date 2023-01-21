import header from './Components/Header/Header.js'

export default class {

	render(){
		let headerComponent = header('Rock Scissor Paper')
		return (`
			${headerComponent}
			Application
		`)
	}

}
