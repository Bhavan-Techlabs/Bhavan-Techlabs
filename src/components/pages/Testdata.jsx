import React from "react";
import faker from "faker";

function TestdataComponent({
	isRandomWord = false,
	wordCount,
	handleWordCount,
	datatype,
	name,
}) {
	const handleChange = (e) => {
		e.preventDefault();
		navigator.clipboard.writeText(e.target.value);
	};

	return (
		<>
			{isRandomWord ? (
				<div className="m-3 row">
					<label className="col-sm-2 col-form-label">
						{name}
						<input
							type="text"
							className="form-control mt-1"
							id="random-words-count"
							value={wordCount}
							onChange={handleWordCount}
						/>
					</label>
					<div className="col-md">
						<textarea
							type="text"
							className="form-control h-100"
							id={datatype}
							value={datatype}
							onChange={handleChange}
						></textarea>
					</div>
				</div>
			) : (
				<div className="m-3 row">
					<label className="col-sm-2 col-form-label">{name}: </label>
					<div className="col-md">
						<input
							type="text"
							className="form-control"
							id={datatype}
							value={datatype}
							onChange={handleChange}
						/>
					</div>
				</div>
			)}
		</>
	);
}

export default function Testdata() {
	const [wordCount, setWordCount] = React.useState(100);

	const getData = () => {
		return {
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
			uuid: faker.datatype.uuid(),
			sentences: faker.lorem.sentences(),
			paragraphs: faker.lorem.paragraphs(),
			words: faker.random.alpha(wordCount),
			timezone: faker.address.timeZone(),
			country: faker.address.country(),
		};
	};

	const [data, setData] = React.useState(getData);

	const generateData = (e) => {
		e.preventDefault();
		setData(getData);
		console.log(
			faker.system.fileName(),
			faker.system.fileType(),
			faker.system.fileExt(),
			faker.random.alphaNumeric(),
			faker.name.jobTitle(),
			faker.name.jobType(),
			faker.name.jobDescriptor(),
			faker.name.prefix(),
			faker.name.title(),
			faker.music.genre(),
			faker.internet.userName(),
			faker.internet.url(),
			faker.finance.bitcoinAddress(),
			faker.finance.transactionDescription(),
			faker.finance.creditCardNumber(),
			faker.commerce.color()
		);
	};

	return (
		<>
			<div className="container mt-4">
				<div className="row">
					<input
						type="button"
						className="btn btn-outline-secondary"
						id="gen-random-data-btn"
						value="Generate Data"
						onClick={generateData}
					/>
				</div>
				<div className="row">
					<TestdataComponent name={"Name"} datatype={data.name} />
					<TestdataComponent name={"Email"} datatype={data.email} />
					<TestdataComponent name={"Password"} datatype={data.password} />
					<TestdataComponent name={"Timezone"} datatype={data.timezone} />
					<TestdataComponent name={"Phone"} datatype={data.phone} />
					<TestdataComponent name={"Street"} datatype={data.street} />
					<TestdataComponent name={"City"} datatype={data.city} />
					<TestdataComponent name={"Country"} datatype={data.country} />
					<TestdataComponent name={"State"} datatype={data.state} />
					<TestdataComponent name={"Company"} datatype={data.company} />
					<TestdataComponent name={"Department"} datatype={data.department} />
					<TestdataComponent name={"Product"} datatype={data.product} />
					<TestdataComponent name={"Vehicle"} datatype={data.vehicle} />
					<TestdataComponent name={"UUID"} datatype={data.uuid} />
					<TestdataComponent name={"Sentences"} datatype={data.sentences} />
					<TestdataComponent name={"Paragraphs"} datatype={data.paragraphs} />
					<TestdataComponent
						isRandomWord={true}
						name={"Random Words"}
						datatype={data.words}
						wordCount={wordCount}
						handleWordCount={(e) => {
							setWordCount(Number(e.target.value));
						}}
					/>
					{/* 
						<div className="col"></div>
						<div className="col"></div> 
					*/}
				</div>
			</div>
		</>
	);
}
