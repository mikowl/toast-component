import { useEffect } from 'react';

function useKeydown(key, callback) {
	useEffect(() => {
		function handleKeyDown() {
			if (window.event.code === key) {
				callback(window.event);
			}
		}

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [callback, key]);
}

export default useKeydown;
