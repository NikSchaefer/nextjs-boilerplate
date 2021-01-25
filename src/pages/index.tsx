import styled from 'styled-components'
import { IconGithub } from '@components/icons'
const Container = styled.main`
	display:flex;
	flex-direction: column;
	justify-content:center;
	align-items:center;
	height:100vh;
`
const StyledDiv = styled.div`
	display:flex;
	flex-wrap:wrap;
	max-width: 700px;
	justify-content:center;
`

const StyledComponent = styled.div`
	width:300px;
	text-align:left;
	box-sizing: border-box;
	padding:20px;
	margin:20px;
	transition: box-shadow 0.3s ease-in-out;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.342);
	& h2 {
		color:#008cff;
	}
	&:hover {
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.342);
	}
`
// eslint-disable-next-line import/no-default-export
export default function Home(): JSX.Element {
	return <Container>
		<h1>Hello, World</h1>
		<StyledDiv>
			<StyledComponent>
				<h2>This content</h2>
				<p>You can remove these components in src/pages/index</p>
			</StyledComponent>
			<StyledComponent>
				<h2>NextJS</h2>
				<p>This template uses NextJS, Jest, Eslint-Config-Galex, Google Analytics</p>
			</StyledComponent>
			<StyledComponent>
				<h2>Learn more</h2>
				<p>Learn more about this boilerplate in the README.md</p>
			</StyledComponent>
			<StyledComponent>
				<h2>Config</h2>
				<p>You can enter a google analytics measurement id in src/config.ts</p>
			</StyledComponent>
		</StyledDiv>
		<a aria-label="Github" href="https://github.com/NikSchaefer/nextjs-typescript"><IconGithub /></a>
	</Container>;
}
