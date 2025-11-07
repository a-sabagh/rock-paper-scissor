import style from './Panel.css'

export default () => {
	return `
		<div class="wrapper">
			<div class="panel"></div>
			<button class="start" onclick="app.start(event)">Start</button>
		</div>
	`
}
