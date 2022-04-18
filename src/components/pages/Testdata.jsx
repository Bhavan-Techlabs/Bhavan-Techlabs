import React from "react";
import faker from "faker";
import CopyToClipboard from "../common/CopyToClipboard";

function TestdataComponent({
	isRandomWord = false,
	isTextArea = false,
	wordCount,
	handleWordCount,
	datatype,
	name,
}) {
	const handleChange = (e) => {
		e.preventDefault();
	};

	return (
		<>
			{isRandomWord ? (
				<div className="m-3 row">
					<div className="col-md-2 m-2 p-2">
						<label className="col-form-label">
							{`${name}: `}
							<input
								type="text"
								className="form-control mt-1"
								id="random-words-count"
								value={wordCount}
								onChange={handleWordCount}
							/>
						</label>
					</div>
					<div className="col-md">
						<textarea
							type="text"
							className="form-control h-100"
							id={datatype}
							value={datatype}
							onChange={handleChange}
						></textarea>
					</div>
					<div className="col-auto">
						<CopyToClipboard selector={`#${datatype}`} />
					</div>
				</div>
			) : isTextArea ? (
				<div className="m-3 row">
					<div className="col-md-2 m-2 p-2">
						<label className="col-form-label">
							{`${name}: `}
						</label>
					</div>
					<div className="col-md">
						<textarea
							type="text"
							className="form-control"
							id={datatype}
							value={datatype}
							onChange={handleChange}
						></textarea>
					</div>
					<div className="col-auto">
						<CopyToClipboard selector={`#${datatype}`} />
					</div>
				</div>
			) : (
				<div className="m-3 row">
					<div className="col-md-2 m-2 p-2">
						<label className="col-form-label">
							{`${name}: `}
						</label>
					</div>
					<div className="col-md">
						<input
							type="text"
							className="form-control h-100"
							id={datatype}
							value={datatype}
							onChange={handleChange}
						/>
					</div>
					<div className="col-auto">
						<CopyToClipboard selector={`#${datatype}`} />
					</div>
				</div>
			)}
		</>
	);
}

export default function Testdata() {
	const getData = (count) => {
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
			words: faker.random.alpha(count),
			timezone: faker.address.timeZone(),
			country: faker.address.country(),
			fileName: faker.system.fileName(),
			fileType: faker.system.fileType(),
			fileExt: faker.system.fileExt(),
			jobTitle: faker.name.jobTitle(),
			jobType: faker.name.jobType(),
			jobDescriptor: faker.name.jobDescriptor(),
			prefix: faker.name.prefix(),
			title: faker.name.title(),
			genre: faker.music.genre(),
			userName: faker.internet.userName(),
			url: faker.internet.url(),
			bitcoinAddress: faker.finance.bitcoinAddress(),
			transactionDescription: faker.finance.transactionDescription(),
			creditCardNumber: faker.finance.creditCardNumber(),
			color: faker.commerce.color(),
			address: faker.address.streetAddress(),
		};
	};

	const [wordCount, setWordCount] = React.useState(100);
	const [data, setData] = React.useState(getData(wordCount));

	const generateData = (e) => {
		e.preventDefault();
		setData(getData(wordCount));
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
					<div className="col">
						<TestdataComponent name={"Name"} datatype={data.name} />
						<TestdataComponent name={"Email"} datatype={data.email} />
						<TestdataComponent name={"Password"} datatype={data.password} />
						<TestdataComponent name={"Timezone"} datatype={data.timezone} />
						<TestdataComponent name={"Phone"} datatype={data.phone} />
						<TestdataComponent name={"Street"} datatype={data.street} />
						<TestdataComponent name={"City"} datatype={data.city} />
						<TestdataComponent name={"Country"} datatype={data.country} />
						<TestdataComponent name={"State"} datatype={data.state} />
						<TestdataComponent name={"Address"} datatype={data.address} />
						<TestdataComponent name={"Company"} datatype={data.company} />
						<TestdataComponent name={"Department"} datatype={data.department} />
						<TestdataComponent name={"Product"} datatype={data.product} />
						<TestdataComponent name={"Vehicle"} datatype={data.vehicle} />
						<TestdataComponent name={"File Name"} datatype={data.fileName} />
						<TestdataComponent name={"File EXT"} datatype={data.fileExt} />
						<TestdataComponent name={"File Type"} datatype={data.fileType} />
						<TestdataComponent
							name={"Bitcoin"}
							datatype={data.bitcoinAddress}
						/>
					</div>
					<div className="col">
						<TestdataComponent
							isRandomWord={true}
							name={"Random Letters Count"}
							datatype={data.words}
							wordCount={wordCount}
							handleWordCount={(e) => {
								setWordCount(Number(e.target.value));
							}}
						/>
						<TestdataComponent
							name={"Sentences"}
							datatype={data.sentences}
							isTextArea={true}
						/>
						<TestdataComponent
							name={"Paragraphs"}
							datatype={data.paragraphs}
							isTextArea={true}
						/>
						<TestdataComponent name={"UUID"} datatype={data.uuid} />
						<TestdataComponent name={"Job Title"} datatype={data.jobTitle} />
						<TestdataComponent name={"Job Type"} datatype={data.jobType} />
						<TestdataComponent
							name={"Job Descriptor"}
							datatype={data.jobDescriptor}
						/>
						<TestdataComponent name={"Username"} datatype={data.userName} />
						<TestdataComponent name={"URL"} datatype={data.url} />
						<TestdataComponent name={"Prefix"} datatype={data.prefix} />
						<TestdataComponent name={"Title"} datatype={data.title} />
						<TestdataComponent name={"Genre"} datatype={data.genre} />
						<TestdataComponent name={"Color"} datatype={data.color} />
						<TestdataComponent
							name={"CC No"}
							datatype={data.creditCardNumber}
						/>
						<TestdataComponent
							name={"Transaction Description"}
							datatype={data.transactionDescription}
							isTextArea={true}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
