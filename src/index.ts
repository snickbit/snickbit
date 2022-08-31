/**
 * A Snickbit Project
 */
export interface SnickbitProject {
	name: string
	description: string
	url: string
}

export type PlayGuitar = '🎸 x ⏳'
export type Sing = '🎤 x ⏳'
export type PlayPiano = '🎹 x ⏳'
export type RecordMusic = '(🎛🎚 + 🎧) x ⏳'
export type MusicMaking = PlayGuitar | PlayPiano | RecordMusic | Sing
export type VideoGaming = '(🎮 + 💀) x ⏳'
export type FamilyTime = '👧👩👨👩👦 x ⏳'
export type Coding = string | '💻 x ⏳ x 2'
export type RealName = 'Nick Lowe'

/**
 * A full-stack developer that probably spends too much time coding, and definitely spent too much time on this.
 */
export class Snickbit {
	/**
	 * The name I go by when I'm not coding.
	 * @returns {'Nick Lowe'}
	 */
	readonly realName: RealName = 'Nick Lowe'

	/**
	 * My preferred pronouns
	 * @returns {['he', 'him', 'his']}
	 * he, him, his
	 */
	readonly pronouns: ['he', 'him', 'his'] = ['he', 'him', 'his']

	/**
	 * How many children I have
	 * @returns {2}
	 */
	readonly children = 2

	/**
	 * Programming languages I'm proficient in
	 */
	private languages: string[] = [
		'JavaScript',
		'Liquid',
		'PHP',
		'SCSS/CSS',
		'Shell/Bash',
		'TypeScript'
	]

	/**
	 * Database systems I'm proficient in
	 */
	private databases: string[] = [
		'CouchDB',
		'MongoDB',
		'MySQL',
		'Redis'
	]

	/**
	 * Frameworks I'm proficient in, in various languages
	 */
	private frameworks: string[] = [
		'Bootstrap',
		'Electron',
		'Express',
		'jQuery',
		'Laravel',
		'Node',
		'Quasar',
		'React',
		'Vue'
	]

	/**
	 * Tools & utilities that I use
	 */
	private tools: string[] = [
		'DigitalOcean',
		'Docker',
		'esbuild',
		'eslint',
		'Git',
		'Intellij Idea',
		'Jest',
		'pnpm',
		'Vite',
		'VS Code'
	]

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

	/**
	 * Singleton instance of Snickbit. There can only be one.
	 */
	private static _instance: Snickbit

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
	 * Learn a new programming language
	 * @param language
	 */
	learnLanguage(language: string): void {
		this.languages.push(language)
	}

	/**
	 * Learn a new database system
	 * @param database
	 */
	learnDatabase(database: string): void {
		this.databases.push(database)
	}

	/**
	 * Learn a new framework
	 * @param framework
	 */
	learnFramework(framework: string): void {
		this.frameworks.push(framework)
	}

	/**
	 * Learn a new tool
	 * @param tool
	 */
	learnTool(tool: string): void {
		this.tools.push(tool)
	}

	/**
	 * Get the list of languages I know
	 */
	knownLanguages(): string[] {
		return this.languages
	}

	/**
	 * Get the list of databases I know
	 */
	knownDatabases(): string[] {
		return this.databases
	}

	/**
	 * Get the list of frameworks I know
	 */
	knownFrameworks(): string[] {
		return this.frameworks
	}

	/**
	 * Get the list of tools I know
	 */
	knownTools(): string[] {
		return this.tools
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
		return [
			'🎸 x ⏳',
			'🎤 x ⏳',
			'🎹 x ⏳',
			'(🎛🎚 + 🎧) x ⏳'
		][Math.floor(Math.random() * 4)] as MusicMaking
	}
}

/**
 * A full-stack developer that probably spends too much time coding, and definitely spent too much time on this.
 */
export const snickbit = new Snickbit()
