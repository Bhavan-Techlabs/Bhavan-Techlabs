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
		e.preventDefault();
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
									defaultValue={data.name}
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
									defaultValue={data.email}
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
									defaultValue={data.street}
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
									defaultValue={data.city}
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
									defaultValue={data.state}
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
									defaultValue={data.company}
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
									defaultValue={wordCount}
									onChange={(e) => {
										setWordCount(Number(e.target.defaultValue));
									}}
								/>
							</label>
							<div className="col-md">
								<textarea
									type="text"
									className="form-control h-100"
									id="random-words"
									defaultValue={data.words}
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
									defaultValue={data.department}
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
									defaultValue={data.product}
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
									defaultValue={data.phone}
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
									defaultValue={data.vehicle}
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
									defaultValue={data.password}
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
									defaultValue={data.transactionId}
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
									defaultValue={data.sentences}
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
									defaultValue={data.paragraphs}
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
						defaultValue="Generate Data"
						onClick={generateData}
					/>
				</div>
			</div>
		</>
	);
}
