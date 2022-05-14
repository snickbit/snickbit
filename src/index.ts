/**
 * A Snickbit Project
 */
interface SnickbitProject {
	name: string
	description: string
	url: string
}

type PlayGuitar = '🎸 x ⏳'
type Sing = '🎤 x ⏳'
type PlayPiano = '🎹 x ⏳'
type RecordMusic = '(🎛🎚 + 🎧) x ⏳'
type MusicMaking = PlayGuitar | Sing | PlayPiano | RecordMusic
type VideoGaming = '(🎮 + 💀) x ⏳'
type FamilyTime = '👧👩👨👩👦 x ⏳'
type Coding = '💻 x ⏳ x 2' | string

/**
 * A full-stack developer that probably spends too much time coding, and definitely spent too much time on this.
 */
export class Snickbit {
	/**
	 * Singleton instance of Snickbit. There can only be one.
	 */
	private static _instance: Snickbit

	/**
	 * The name I go by when I'm not coding.
	 */
	static readonly $name = 'Nick Lowe'

	/**
	 * My preferred pronouns
	 */
	static readonly pronouns: string[] = ['he', 'him', 'his']

	/**
	 * How many children I have
	 */
	static readonly children = 2

	/**
	 * Programming languages I'm proficient in
	 */
	private languages: string[] = ['JavaScript', 'Liquid', 'PHP', 'SCSS/CSS', 'Shell/Bash', 'TypeScript']

	/**
	 * Database systems I'm proficient in
	 */
	private databases: string[] = ['CouchDB', 'MongoDB', 'MySQL', 'Redis']

	/**
	 * Frameworks I'm proficient in, in various languages
	 */
	private frameworks: string[] = ['Bootstrap', 'Express', 'jQuery', 'Laravel', 'Node', 'Quasar', 'Vue', 'WordPress']

	/**
	 * Tools & utilities that I use
	 */
	private tools: string[] = ['DigitalOcean', 'Docker', 'esbuild', 'eslint', 'Git', 'Intellij Idea', 'Jest', 'pnpm', 'Vite', 'VS Code']

	/**
	 * Some projects I'm currently working on
	 */
	private projects: SnickbitProject[] = [
		{
			name: 'snickbit.com',
			description: 'My personal website built with Quasar (vue.js), Feathers.js, and MongoDB.',
			url: 'https://snickbit.com'
		},

		{
			name: `Arbiter's Aide`,
			description: 'Laravel & Vue SPA web app for organizing Table Top RPG campaigns like Dungeons & Dragons. Uses Socket.io & Redis for real-time updates.',
			url: 'https://arbitersaide.com'
		},

		{
			name: 'IsThisDubbed?',
			description: 'Single-serving website built with Laravel. Uses multiple APIs, web scraping, and community moderation for data and corrections',
			url: 'https://isthisdubbed.com'
		}
	]

	constructor() {
		// There can be only one
		if (Snickbit._instance) {
			Snickbit._instance = this
		}
		return Snickbit._instance
	}

	/**
	 * Add a project to the list of projects
	 */
	addProject(project: SnickbitProject): void {
		this.projects.push(project)
	}

	/**
	 * Spend too much time writing code.
	 * @returns
	 * 💻 x ⏳ x 2 \
	 * 💻 x ⏳ x 2 for snickbit.com
	 */
	async writeCode(projectName?: string): Promise<Coding> {
		let response = '💻 x ⏳ x 2'
		if (projectName) {
			const project = this.projects.find(project => project.name === projectName)
			if (project) {
				response += ` for ${project.name}`
			}
		}
		return response
	}

	/**
	 * Spend time with my family
	 */
	async beWithFamily(): Promise<FamilyTime> {
		return '👧👩👨👩👦 x ⏳'
	}

	/**
	 * Spend time playing video games badly
	 */
	async playVideoGames(): Promise<VideoGaming> {
		return '(🎮 + 💀) x ⏳'
	}

	/**
	 * Spend time writing music
	 * @returns
	 * 🎸 x ⏳ \
	 * 🎤 x ⏳ \
	 * 🎹 x ⏳ \
	 * (🎛🎚 + 🎧) x ⏳
	 */
	async writeMusic(): Promise<MusicMaking> {
		return ['🎸 x ⏳', '🎤 x ⏳', '🎹 x ⏳', '(🎛🎚 + 🎧) x ⏳'][Math.floor(Math.random() * 4)] as MusicMaking
	}
}

/**
 * A full-stack developer that probably spends too much time coding, and definitely spent too much time on this.
 */
export function snickbit() {
	return new Snickbit()
}
