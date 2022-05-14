import {snickbit, Snickbit} from '../src'

describe('snickbit', () => {
	it('should be a function', () => {
		expect(typeof snickbit).toBe('function')
	})

	it('should be a class', () => {
		expect(typeof Snickbit.prototype).toBe('object')
	})

	it('should return a Snickbit instance', () => {
		expect(snickbit() instanceof Snickbit).toBeTruthy()
	})

	it('should have a static $name property', () => {
		expect(Snickbit.$name).toBe('Nick Lowe')
	})

	it('should have a static pronouns property', () => {
		expect(Snickbit.pronouns).toStrictEqual(['he', 'him', 'his'])
	})

	it('should have a static children property', () => {
		expect(Snickbit.children).toBe(2)
	})
})

describe('snickbit methods', () => {
	let instance: Snickbit = snickbit()
	beforeEach(() => {
		instance = snickbit()
	})
	it('should have a `addProject` method', () => {
		expect(typeof instance.addProject).toBe('function')
	})
	it('should have an async `writeCode` function', () => {
		expect(typeof instance.writeCode).toBe('function')
	})
	it('should return 💻 x ⏳ x 2 when calling writeCode', async () => {
		expect(await instance.writeCode()).toBe('💻 x ⏳ x 2')
	})
	it('should return 💻 x ⏳ x 2 for snickbit.com when calling writeCode(`snickbit.com`)', async () => {
		expect(await instance.writeCode('snickbit.com')).toBe('💻 x ⏳ x 2 for snickbit.com')
	})
	it('should have an async `beWithFamily` function', () => {
		expect(typeof instance.beWithFamily).toBe('function')
	})
	it('should return 👧👩👨👩👦 x ⏳ when calling beWithFamily', async () => {
		expect(await instance.beWithFamily()).toBe('👧👩👨👩👦 x ⏳')
	})
	it('should have an async `playVideoGames` function', () => {
		expect(typeof instance.playVideoGames).toBe('function')
	})
	it('should return (🎮 + 💀) x ⏳ when calling playVideoGames', async () => {
		expect(await instance.playVideoGames()).toBe('(🎮 + 💀) x ⏳')
	})
	it('should have an async `writeMusic` function', () => {
		expect(typeof instance.writeMusic).toBe('function')
	})
	it('should return one of 🎸 x ⏳ | 🎤 x ⏳ | 🎹 x ⏳ | (🎛🎚 + 🎧) x ⏳ when calling writeMusic 6 times', async () => {
		for(let i = 0; i < 6; i++) {
			expect(['🎸 x ⏳', '🎤 x ⏳', '🎹 x ⏳', '(🎛🎚 + 🎧) x ⏳'].includes(await instance.writeMusic())).toBeTruthy()
		}
	})
})
