import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const handleClickButtonPrev = () => {
		setActiveIndex(activeIndex - 1);
	};
	const handleClickButtonNext = () => {
		setActiveIndex(activeIndex + 1);
	};
	const handleClickButtonNewStart = () => {
		setActiveIndex(0);
		setSteps(data);
	};

	let isStepFirst = activeIndex === 0;
	let isStepLast = activeIndex === data.length - 1;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{data.map(({ id, title }) => {
							return (
								<li
									className={
										styles['steps-item'] +
										' ' +
										(activeIndex + 1 > Number(id)
											? styles.done
											: '') +
										' ' +
										(activeIndex + 1 === Number(id)
											? styles.active
											: '')
									}
									key={id}
								>
									<button
										className={styles['steps-item-button']}
										onClick={() => setActiveIndex(Number(id) - 1)}
									>
										{Number(id)}
									</button>
									{title}
								</li>
							);
						})}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={handleClickButtonPrev}
							disabled={isStepFirst}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={
								isStepLast
									? handleClickButtonNewStart
									: handleClickButtonNext
							}
						>
							{isStepLast ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
