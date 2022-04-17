import React from "react";
import { copy_to_clipboard } from "../../functions/util";
import faker from "faker";

export default function Testdata() {
	const [wordCount, setWordCount] = React.useState(100);

	const [data, setData] = React.useState({
		name: faker.name.findName(),
		email: faker.internet.email(),
		street: faker.address.streetName(),
		city: faker.address.cityName(),
		state: faker.address.state(),
		company: faker.company.companyName(),
		department: faker.commerce.department(),
		product: faker.commerce.productName(),
		phone: faker.phone.phoneNumber(),
		vehicle: faker.vehicle.vehicle(),
		password: faker.internet.password(),
		transactionId: faker.datatype.uuid(),
		sentences: faker.lorem.sentences(),
		paragraphs: faker.lorem.paragraphs(),
		words: faker.random.alpha(wordCount),
	});

	const generateData = (e) => {
		// e.preventDefault();
		setData({
			name: faker.name.findName(),
			email: faker.internet.email(),
			street: faker.address.streetName(),
			city: faker.address.cityName(),
			state: faker.address.state(),
			company: faker.company.companyName(),
			department: faker.commerce.department(),
			product: faker.commerce.productName(),
			phone: faker.phone.phoneNumber(),
			vehicle: faker.vehicle.vehicle(),
			password: faker.internet.password(),
			transactionId: faker.datatype.uuid(),
			sentences: faker.lorem.sentences(),
			paragraphs: faker.lorem.paragraphs(),
			words: faker.random.alpha(wordCount),
		});
		console.log("clicked");
	};

	const handleChange = (e) => {
		e.preventDefault();
		copy_to_clipboard(e.target.id);
	};

	return (
		<>
			<div className="container mt-4">
				<div className="row">
					<div className="col">
						<div className="m-3 row">
							<label className="col-sm-2 col-form-label">Name: </label>
							<div className="col-md">
								<input
									type="text"
									className="form-control"
									id="random-name"
									value={data.name}
									onChange={() => {}}
									onClick={handleChange}
								/>
							</div>
						</div>
						<div className="m-3 row">
							<label className="col-sm-2 col-form-label">Email: </label>
							<div className="col-md">
								<input
									type="text"
									className="form-control"
									id="random-email"
									value={data.email}
									onChange={() => {}}
									onClick={handleChange}
								/>
							</div>
						</div>
						<div className="m-3 row">
							<label className="col-sm-2 col-form-label">Street: </label>
							<div className="col-md">
								<input
									type="text"
									className="form-control"
									id="random-street"
									value={data.street}
									onChange={() => {}}
									onClick={handleChange}
								/>
							</div>
						</div>
						<div className="m-3 row">
							<label className="col-sm-2 col-form-label">City: </label>
							<div className="col-md">
								<input
									type="text"
									className="form-control"
									id="random-city"
									value={data.city}
									onChange={() => {}}
									onClick={handleChange}
								/>
							</div>
						</div>
						<div className="m-3 row">
							<label className="col-sm-2 col-form-label">State: </label>
							<div className="col-md">
								<input
									type="text"
									className="form-control"
									id="random-state"
									value={data.state}
									onChange={() => {}}
									onClick={handleChange}
								/>
							</div>
						</div>
						<div className="m-3 row">
							<label className="col-sm-2 col-form-label">Company: </label>
							<div className="col-md">
								<input
									type="text"
									className="form-control"
									id="random-company"
									value={data.company}
									onChange={() => {}}
									onClick={handleChange}
								/>
							</div>
						</div>
						<div className="m-3 row">
							<label className="col-sm-2 col-form-label">
								Random Words:
								<input
									type="text"
									className="form-control mt-1"
									id="random-words-count"
									value={wordCount}
									onChange={(e) => {
										setWordCount(Number(e.target.value));
									}}
								/>
							</label>
							<div className="col-md">
								<textarea
									type="text"
									className="form-control h-100"
									id="random-words"
									value={data.words}
									onChange={() => {}}
									onClick={handleChange}
								></textarea>
							</div>
						</div>

					</div>
					<div className="col">
						<div className="m-3 row">
							<label className="col-sm-2 col-form-label">Department: </label>
							<div className="col-md">
								<input
									type="text"
									className="form-control"
									id="random-department"
									value={data.department}
									onChange={() => {}}
									onClick={handleChange}
								/>
							</div>
						</div>
						<div className="m-3 row">
							<label className="col-sm-2 col-form-label">Product: </label>
							<div className="col-md">
								<input
									type="text"
									className="form-control"
									id="random-product"
									value={data.product}
									onChange={() => {}}
									onClick={handleChange}
								/>
							</div>
						</div>
						<div className="m-3 row">
							<label className="col-sm-2 col-form-label">Phone: </label>
							<div className="col-md">
								<input
									type="text"
									className="form-control"
									id="random-phone"
									value={data.phone}
									onChange={() => {}}
									onClick={handleChange}
								/>
							</div>
						</div>
						<div className="m-3 row">
							<label className="col-sm-2 col-form-label">Vehicle: </label>
							<div className="col-md">
								<input
									type="text"
									className="form-control"
									id="random-vehicle"
									value={data.vehicle}
									onChange={() => {}}
									onClick={handleChange}
								/>
							</div>
						</div>
						<div className="m-3 row">
							<label className="col-sm-2 col-form-label">Password: </label>
							<div className="col-md">
								<input
									type="text"
									className="form-control"
									id="random-password"
									value={data.password}
									onChange={() => {}}
									onClick={handleChange}
								/>
							</div>
						</div>
						<div className="m-3 row">
							<label className="col-sm-2 col-form-label">Transaction Id: </label>
							<div className="col-md">
								<input
									type="text"
									className="form-control"
									id="random-transactionId"
									value={data.transactionId}
									onChange={() => {}}
									onClick={handleChange}
								/>
							</div>
						</div>
						<div className="m-3 row">
							<label className="col-sm-2 col-form-label">Sentences: </label>
							<div className="col-md">
								<textarea
									type="text"
									className="form-control h-100"
									id="random-sentences"
									value={data.sentences}
									onChange={() => {}}
									onClick={handleChange}
								></textarea>
							</div>
						</div>
						<div className="m-3 row">
							<label className="col-sm-2 col-form-label">Paragraphs: </label>
							<div className="col-md">
								<textarea
									type="text"
									className="form-control h-100"
									id="random-paragraphs"
									value={data.paragraphs}
									onChange={() => {}}
									onClick={handleChange}
								></textarea>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<input
						type="button"
						className="btn btn-success"
						id="gen-random-data-btn"
						value="Generate Data"
						onClick={generateData}
					/>
				</div>
			</div>
		</>
	);
}
