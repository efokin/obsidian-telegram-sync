import { compareVersions } from "compare-versions";

export const version = "1.10.0";
// TODO getting messages one by one instead of parallel processing
// TODO add Demo gif and screenshots to readme.md
// ## Demo
//![](https://raw.githubusercontent.com/vslinko/obsidian-outliner/main/demos/demo1.gif)<br>
export const showNewFeatures = true;
export let showBreakingChanges = false;

const newFeatures =
	"This release introduces connection status indicator instead of notifications, along with 5 other important features.";
export const breakingChanges =
	"⚠️ <b><i>If you were connected as a user, due to API changes, the user has been disconnected and needs to be reconnected! Apologies</i></b> ⚠️";

const telegramChannelLink = "<a href='https://t.me/obsidian_telegram_sync_insider'>channel</a>";
const telegramChannelIntroduction = `Find the complete list of new features on the plugin's ${telegramChannelLink}.`;
const telegramChatLink = "<a href='https://t.me/ObsidianTelegramSync'>chat</a>";
const telegramChatIntroduction = `For discussions, please feel free to join the plugin's ${telegramChatLink}.`;
const donation =
	"If you appreciate this plugin and would like to support its continued development, please consider donating through the buttons below!";
const bestRegards = "Best regards,\nYour soberhacker🍃🧘💻\n⌞";

export const notes = `
<u><b>Telegram Sync ${version}</b></u>\n
🆕 ${newFeatures}\n
💡 ${telegramChannelIntroduction}\n
💬 ${telegramChatIntroduction}\n
🦄 ${donation}\n
${bestRegards}`;

export function showBreakingChangesInReleaseNotes() {
	showBreakingChanges = true;
}

export function versionALessThanVersionB(versionA, versionB) {
	if (!versionA || !versionB) return undefined;
	return compareVersions(versionA, versionB) == -1;
}

const check = process.argv[2] === "check";

if (check) {
	const packageVersion = process.env.npm_package_version;

	if (packageVersion !== version) {
		console.error(`Failed! Release notes are outdated! ${packageVersion} !== ${version}`);
		process.exit(1);
	}
}
