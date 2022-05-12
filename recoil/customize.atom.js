import { atom } from "recoil";

import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()



const localStorageEffect = ({ onSet, node }) => {
	let key = node.key;


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

	effects: [
		localStorageEffect
	]


})

export const Two = atom({
	key: "stepTwo",
	default: {
		title: "Size of the Notebook", value: null
	},
	effects: [
		localStorageEffect
	]
})
export const Three = atom({
	key: "stepThree",
	default: {
		title: "Number of Pages", value: null
	},
	effects: [
		localStorageEffect
	]
})
export const Four = atom({
	key: "stepFour",
	default: {
		title: "Number of Pages", value: null
	},
	effects: [
		localStorageEffect
	]
})
export const Five = atom({
	key: "stepFive",
	default: {
		title: "Number of Pages", value: 0
	},
	effects: [
		localStorageEffect
	]
})

export const Six = atom({
	key: "stepSix",
	default: {
		title: "Number of Pages", value: "checked"
	},
	effects: [
		localStorageEffect
	]
})

export const Canvas = atom({
	key: "Canvas",
	default: ""
})

export const showCanvas = atom({
	key: "showCanvas",
	default: false
})


export const cvUrl = atom({
	key: "cvUrl",
	default: ""
})

export const canvasData = atom({
	key: "canvasData",
	default: []
})

export const selectedCanvas = atom({
	key: "selectedCanvas",
	default: null
})