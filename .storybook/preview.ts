import type { Preview } from "@storybook/sveltekit";
import "../static/styles.css";

const preview: Preview = {
	parameters: {
		layout: "centered",
		backgrounds: {
			default: "dark",
			values: [{ name: "dark", value: "#000000" }]
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		a11y: {
			test: "todo"
		}
	}
};

export default preview;
