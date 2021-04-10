import React from 'react';
import {
	Grid,
	Button,
	Dialog as MuiDialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	useMediaQuery,
	useTheme,
} from '@material-ui/core';
import styled from 'styled-components';

import {
	CloseIcon,
	InfoIcon,
	FullscreenIcon,
	ExitFullscreenIcon,
	EditIcon,
} from 'icons';
import Popover from 'components/Popover';
import HtmlContainer from 'components/HtmlContainer/Lazy';
import PrettyPre from 'components/PrettyPre';
import TooltipButton from 'components/TooltipButton';
import LoadingIndicator from 'components/LoadingIndicator';
import { propTypes, defaultProps } from './types';

const StyledDialogContent = styled(DialogContent)`
	${({ $hasMaxHeight }) => `
		${
			($hasMaxHeight &&
				`
			max-height: 75vh;
			// height: '100vh',
			& > *: {
				max-height: 98%;
				max-width: 100%;
			}
		`) ||
			''
		}
	`}
`;

const Dialog = ({
	isOpen,
	title,
	content,
	infoComponent,
	actionButtons,
	onCancel,
	bodyComponent,
	className,
	type,
	fullScreen,
	isFullScreenToggled,
	onFullScreenToggle,
	hasFullScreenButton,
	pending,
	hasDynamicWidth,
	maxHeight,
	enableBackdropClick,
	disableEnforceFocus,
	onEdit,
	bg,
	scroll,
}) => {
	const smAndDown = useMediaQuery(t => t.breakpoints.down('xs'));
	const theme = useTheme();

	if (isOpen === null) return <div />;
	const buttons = actionButtons.map(button => (
		<Button
			key={button.text}
			onClick={button.callback || null}
			color={button.colorType || 'primary'}
			disabled={pending}
			startIcon={
				button.isConfirm &&
				pending && <LoadingIndicator color="primary" size="small" />
			}
		>
			{button.text}
		</Button>
	));

	let bodyContent = '';
	if (content) {
		switch (type) {
			case 'html':
				bodyContent = <HtmlContainer html={content} />;
				break;
			case 'component':
				bodyContent = content;
				break;
			default:
				bodyContent = (
					<DialogContentText
						id="alert-modal-description"
						component={bodyComponent}
					>
						{content}
					</DialogContentText>
				);
				break;
		}
	}

	return (
		<MuiDialog
			disableBackdropClick={pending || !enableBackdropClick}
			disableEnforceFocus={disableEnforceFocus}
			disableEscapeKeyDown={pending}
			fullScreen={
				isFullScreenToggled ||
				(hasDynamicWidth && smAndDown) ||
				fullScreen
			}
			open={isOpen}
			onClose={onCancel}
			scroll={scroll}
			fullWidth
			maxWidth="md"
			aria-labelledby="alert-modal-title"
			aria-describedby="alert-modal-description"
			{...(bg !== 'default' && {
				PaperProps: { style: { root: theme.palette[bg].main } },
			})}
		>
			<DialogTitle id="alert-modal-title" className={className}>
				<Grid container alignItems="center" justify="space-between">
					<div style={{ maxWidth: infoComponent ? '70%' : '80%' }}>
						<PrettyPre variant="h6">{title}</PrettyPre>
					</div>
					<div style={{ display: 'flex' }}>
						{infoComponent && (
							<Popover
								icon={<InfoIcon />}
								component={infoComponent}
								tooltip="Info"
								// passDownOnCloseProp={false}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'right',
								}}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
							/>
						)}
						{onEdit && (
							<TooltipButton
								tooltip="Edit"
								onClick={onEdit}
								icon={EditIcon}
							/>
						)}
						{hasFullScreenButton && !smAndDown && (
							<TooltipButton
								tooltip="Toggle full screen"
								onClick={onFullScreenToggle}
								icon={
									(isFullScreenToggled && (
										<ExitFullscreenIcon />
									)) || <FullscreenIcon />
								}
							/>
						)}
						<TooltipButton
							tooltip="Close"
							aria-label="Close"
							onClick={onCancel}
							icon={<CloseIcon />}
							disabled={pending}
						/>
					</div>
				</Grid>
			</DialogTitle>
			{content && (
				<StyledDialogContent
					$maxHeight={maxHeight && !isFullScreenToggled && !smAndDown}
					dividers
				>
					{bodyContent}
				</StyledDialogContent>
			)}
			{buttons.length > 0 && <DialogActions>{buttons}</DialogActions>}
		</MuiDialog>
	);
};

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

export default Dialog;
