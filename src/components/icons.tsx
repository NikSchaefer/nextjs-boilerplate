import { IconGithub, IconFolder } from "./icons/in";

// eslint-disable-next-line import/no-default-export
export default function Icon(data: { name: string }): JSX.Element {
	switch (data.name) {
		case "Github":
			return <IconGithub />;
		case "Folder":
			return <IconFolder />;
		default:
			return <IconGithub />;
	}
}

/*

// directory
import Icon from './icons'

// Icon
<Icon name="Github" />

*/
