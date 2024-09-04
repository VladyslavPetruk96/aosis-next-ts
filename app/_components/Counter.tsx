"use client"

import { useState } from "react"

export default function Counter() {
	const [counter, setCounter] = useState<number>(0)

	const onAddUser = (): void => {
		setCounter(p => p + 1)
	}

	return (
		<div>
			<p>There are {counter} users</p>
			<button onClick={onAddUser}>Add user</button>
		</div>
	)
}
