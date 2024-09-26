import { useEffect, useState } from 'react';

export const useScrollArrowsVisibility = (ref1, ref2, items) => {
	const [showArrows1, setShowArrows1] = useState(false);
	const [showArrows2, setShowArrows2] = useState(false);
	const [canScrollLeft1, setCanScrollLeft1] = useState(false);
	const [canScrollLeft2, setCanScrollLeft2] = useState(false);

	const getItemsToScroll = (containerWidth) => {
		if (containerWidth >= 1200) return 4;
		if (containerWidth >= 1000) return 3;
		if (containerWidth >= 800) return 2;
		return 1;
	};

	useEffect(() => {
		const checkScrollArrowsVisibility = () => {
			if (ref1.current && ref2.current) {
				const width1 = ref1.current.scrollWidth;
				const width2 = ref2.current.scrollWidth;
				const containerWidth1 = ref1.current.clientWidth;
				const containerWidth2 = ref2.current.clientWidth;

				const hasMoreThanFourItems = items.length > 4;

				setShowArrows1(hasMoreThanFourItems && width1 > containerWidth1);
				setShowArrows2(hasMoreThanFourItems && width2 > containerWidth2);

				setCanScrollLeft1(ref1.current.scrollLeft > 0);
				setCanScrollLeft2(ref2.current.scrollLeft > 0);
			}
		};

		checkScrollArrowsVisibility();

		window.addEventListener('resize', checkScrollArrowsVisibility);

		if (ref1.current && ref2.current) {
			ref1.current.addEventListener('scroll', checkScrollArrowsVisibility);
			ref2.current.addEventListener('scroll', checkScrollArrowsVisibility);
		}

		return () => {
			window.removeEventListener('resize', checkScrollArrowsVisibility);

			if (ref1.current && ref2.current) {
				ref1.current.removeEventListener('scroll', checkScrollArrowsVisibility);
				ref2.current.removeEventListener('scroll', checkScrollArrowsVisibility);
			}
		};
	}, [ref1, ref2, items]);

	const scrollContainer = (ref, direction) => {
		if (ref.current) {
			const containerWidth = ref.current.clientWidth; // Obtém a largura do contêiner
			const itemsToScroll = getItemsToScroll(containerWidth); // Determina quantos itens rolar

			const itemWidth = 383; // Largura de cada item
			const scrollAmount = itemWidth * itemsToScroll; // Cálculo da quantidade a rolar

			ref.current.scrollBy({
				left: direction === 'right' ? scrollAmount : -scrollAmount,
				behavior: 'smooth',
			});
		}
	};

	return [
		showArrows1,
		showArrows2,
		canScrollLeft1,
		canScrollLeft2,
		scrollContainer,
	];
};
