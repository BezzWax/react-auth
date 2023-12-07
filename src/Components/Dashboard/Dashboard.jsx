import { Button, Container, Modal, Form } from 'react-bootstrap';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Dashboard = () => {
	const [show, setShow] = useState(false);
	const [events, setEvents] = useState([]);
	const form = useRef();
	const [currentEvent, setCurrentEvent] = useState({
		eventName: '',
		email: '',
		textarea: '',
		date: '',
	});

	const handleClose = () => {
		setShow(false);
	};

	const handleShow = () => {
		setCurrentEvent({
			eventName: '',
			email: '',
			textarea: '',
			date: '',
		});
		setShow(true);
	};

	const handleSaveChanges = () => {
		setEvents([...events, currentEvent]);
		handleClose();

		// emailjs.sendForm('service_0v65qub', 'template_pue20th', formData, '44MlebRXrdxPHlvSR');
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_0v65qub', 'template_aflw34o', form.current, '44MlebRXrdxPHlvSR')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
	};

	return (
		<div>
			<h3 className='text-center'>Dashboard</h3>

			<Container>
				<Button variant="primary" onClick={handleShow}>
					Create event
				</Button>

				<Modal show={show} centered onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Event</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Form.Group className="mb-3" controlId="eventName">
								<Form.Label>Name of event</Form.Label>
								<Form.Control
									type="text"
									autoFocus
									value={currentEvent.eventName}
									onChange={(e) =>
										setCurrentEvent({
											...currentEvent,
											eventName: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="email">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									placeholder="name@example.com"
									name='email_from'
									value={currentEvent.email}
									onChange={(e) =>
										setCurrentEvent({
											...currentEvent,
											email: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="textarea">
								<Form.Label>Description</Form.Label>
								<Form.Control
									as="textarea"
									rows={3}
									name='message'
									value={currentEvent.textarea}
									onChange={(e) =>
										setCurrentEvent({
											...currentEvent,
											textarea: e.target.value,
										})
									}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="date">
								<Form.Label>Date</Form.Label>
								<Form.Control
									type="date"
									value={currentEvent.date}
									onChange={(e) =>
										setCurrentEvent({
											...currentEvent,
											date: e.target.value,
										})
									}
								/>
							</Form.Group>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="primary" onClick={handleSaveChanges}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>

				{events.map((event, index) => (
					<div key={index}>
						<form ref={form} onSubmit={sendEmail}>
							<hr />
							<p>Name of event: {event.eventName}</p>
							<p>Email: {event.email}</p>
							<p>Description: {event.textarea}</p>
							<p>Date: {event.date}</p>
							<Button variant='primary' type="submit">Send</Button>
							<hr />
						</form>
					</div>
				))}
			</Container>
		</div>
	);
};

export default Dashboard;
