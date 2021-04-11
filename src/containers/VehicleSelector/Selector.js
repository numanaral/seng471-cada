import { PanelContainer } from 'components/VerticalTabs';
import { getElementFromElementOrType } from 'utils/react';
import ColorThumbnail from './ColorThumbnail';
import VehicleThumbnail from './VehicleThumbnail';

const SelectorItem = ({ type, ind, selected, setSelected, item }) => {
	const onSelect = selectInd => () => {
		if (selectInd === selected) return;
		setSelected(selectInd);
	};

	return type === 'color' ? (
		<ColorThumbnail
			{...(selected === ind && { className: 'active' })}
			key={ind}
			onClick={onSelect(ind)}
			$color={item}
		/>
	) : (
		<VehicleThumbnail
			{...(selected === ind && { className: 'active' })}
			key={ind}
			onClick={onSelect(ind)}
		>
			{getElementFromElementOrType(item)}
		</VehicleThumbnail>
	);
};

const Selector = ({ type, items, selected, setSelected }) => {
	return (
		<PanelContainer>
			{items.map((item, ind) => (
				<SelectorItem
					key={ind}
					{...(selected === ind && { className: 'active' })}
					ind={ind}
					type={type}
					selected={selected}
					setSelected={setSelected}
					item={item}
				/>
			))}
		</PanelContainer>
	);
};

export default Selector;
