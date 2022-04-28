import {
	Container,
	Typography,
	Box,
	Grid,
	Item,
	Link,
	Button,
	Tooltip,
} from '@mui/material';
import React from 'react';
import Image from 'next/image';
import EmailIcon from '../../../public/images/icons/email-icon.png';

//Styles
import styles from './Contact.module.scss';
const Contact = () => {
	const preventDefault = (event) => event.preventDefault();

	return (
		<>
			<Box
				id='contact'
				className={styles['launchpad-wrapper']}
				width='100%'
				sx={{
					px: { xs: 2, md: 8 },
					py: { xs: 4, md: 8 },
					borderTop: '1px solid rgba(0,0,0,0.1)',
				}}
			>
				<Container maxWidth='lg'>
					{/* Contact Leading Header */}
					<Box
						textAlign='center'
						className={styles['contact-header']}
						pb={{ xs: 4, md: 8 }}
						mb={{ xs: 5, md: 0 }}
					>
						<Typography
							variant='h2'
							component='h3'
							color='#010007'
							fontWeight='300'
						>
							Contact Us
						</Typography>
						<Box pt={5}>
							<Typography
								variant='h4'
								component='h4'
								color='#010007'
								fontWeight='600'
							>
								We would love to hear from you!
							</Typography>
							<Typography
								variant='p'
								component='p'
								fontSize={{ xs: 16 }}
								mt={1}
								mb={3}
								lineHeight={1.5}
							>
								Have any question? Write to us and we'll get
								back to you shortly.
							</Typography>
						</Box>
						<Grid
							item
							className={styles['about-item']}
							pt={0}
							mt={0}
							columns={12}
							display='flex'
							justifyContent='center'
							flexDirection='row'
						>
							<Grid
								item
								xs='auto'
								mr={2.5}
								className={styles['about-icon']}
							>
								<Image
									src={EmailIcon}
									width='36'
									height='25'
									alt='Email Apecron'
								/>
							</Grid>
							<Grid item xs={8}>
								<Link
									href='mailto:info@apecron.com'
									underline='none'
									fontSize={{ xs: 18 }}
									fontWeight='600'
									color='#010007'
								>
									info@apecron.com
								</Link>
							</Grid>
						</Grid>
					</Box>
					{/* End: Contact Leading Header */}
				</Container>
			</Box>
		</>
	);
};

export default Contact;
