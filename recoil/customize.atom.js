import { atom } from "recoil";

import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()



const localStorageEffect = key => ({ setSelf, onSet }) => {
	const savedValue = localStorage.getItem(key)
	if (savedValue != null) {
		setSelf(JSON.parse(savedValue))
	}
	onSet(newValue => {
		localStorage.setItem(key, JSON.stringify(newValue))
	})
}


export const currIndex = atom({
	key: "currIndex",
	default: 0,
});


//steps
export const OneStep = atom({
	key: "stepOne",
	default: {
		title: "Number of Pages", value: null
	},


})

export const Two = atom({
	key: "stepTwo",
	default: {
		title: "Size of the Notebook", value: null
	}
})
export const Three = atom({
	key: "stepThree",
	default: {
		title: "Number of Pages", value: null
	}
})
export const Four = atom({
	key: "stepFour",
	default: {
		title: "Number of Pages", value: null
	}
})
export const Five = atom({
	key: "stepFive",
	default: {
		title: "Number of Pages", value: null
	}
})