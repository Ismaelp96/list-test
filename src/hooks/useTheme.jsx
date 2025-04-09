import { useEffect, useState } from 'react';

export function useTheme() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)',
		).matches;

		if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
			document.documentElement.classList.add('dark');
			setIsDark(true);
		} else {
			document.documentElement.classList.remove('dark');
			setIsDark(false);
		}
	}, []);

	const toggleTheme = () => {
		const isDarkNow = !isDark;
		setIsDark(isDarkNow);
		if (isDarkNow) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	};

	return { isDark, toggleTheme };
}
