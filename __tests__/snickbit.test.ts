import {Snickbit} from '../src'

describe('snickbit methods', () => {
	let instance: Snickbit
	beforeEach(() => {
		instance = new Snickbit()
	})

	it('should have a realName property set to "Nick Lowe"', () => {
		expect(instance.realName).toBe('Nick Lowe')
	})

	it('should have a pronouns property set to [he, him, his]', () => {
		expect(instance.pronouns).toStrictEqual(['he', 'him', 'his'])
	})

	it('should have a children property set to 2', () => {
		expect(instance.children).toBe(2)
	})

	it('should have a `addProject` method', () => {
		expect(typeof instance.addProject).toBe('function')
	})

	it('should have an async `writeCode` function', () => {
		expect(typeof instance.writeCode).toBe('function')
	})

	it('should return 💻 x ⏳ x 2 when calling writeCode', async () => {
		await expect(instance.writeCode()).resolves.toBe('💻 x ⏳ x 2')
	})

	it('should return 💻 x ⏳ x 2 for snickbit.com when calling writeCode(`snickbit.com`)', async () => {
		await expect(instance.writeCode('snickbit.com')).resolves.toBe('💻 x ⏳ x 2 for snickbit.com')
	})

	it('should have an async `beWithFamily` function', () => {
		expect(typeof instance.beWithFamily).toBe('function')
	})

	it('should return 👧👩👨👩👦 x ⏳ when calling beWithFamily', async () => {
		await expect(instance.beWithFamily()).resolves.toBe('👧👩👨👩👦 x ⏳')
	})

	it('should have an async `playVideoGames` function', () => {
		expect(typeof instance.playVideoGames).toBe('function')
	})

	it('should return (🎮 + 💀) x ⏳ when calling playVideoGames', async () => {
		await expect(instance.playVideoGames()).resolves.toBe('(🎮 + 💀) x ⏳')
	})

	it('should have an async `writeMusic` function', () => {
		expect(typeof instance.writeMusic).toBe('function')
	})

	it('should return one of 🎸 x ⏳ | 🎤 x ⏳ | 🎹 x ⏳ | (🎛🎚 + 🎧) x ⏳ when calling writeMusic 6 times', async () => {
		for (let i = 0; i < 6; i++) {
			expect([
				'🎸 x ⏳',
				'🎤 x ⏳',
				'🎹 x ⏳',
				'(🎛🎚 + 🎧) x ⏳'
			].includes(await instance.writeMusic())).toBeTruthy()
		}
	})
})
