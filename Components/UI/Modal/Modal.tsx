import React, {useEffect, useRef, useState} from "react";
import styles from "./Modal.module.scss"

interface IModal {
	isOpen: boolean;
	children:React.ReactNode;
	close: ()=>void;
}

export const Modal = ({isOpen,children,close}: IModal) => {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(()=>{
		const handler = (event: MouseEvent) =>{
			if(event.target === ref.current) {
				close();
			}
		}
		window.addEventListener('click',handler )
		return ()=> window.removeEventListener('click',handler)
	},[])

	return (
		<>
			{isOpen && (
			<div ref={ref} className={styles.modal}>
				<div className={styles.modal_window}>
					{children}
				</div>
			</div>
			)}
		</>
	)
}