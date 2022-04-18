import React from "react";
import faker from "faker";
import CopyToClipboard from "../common/CopyToClipboard";
import AccordionItem from "../common/AccordionItem";

function TestdataComponent({
    isRandomWord = false,
    isTextArea = false,
    wordCount,
    handleWordCount,
    datatype,
    data,
    name,
}) {
    const handleChange = (e) => {
        e.preventDefault();
    };

    return (
        <>
            {isRandomWord ? (
                <div className="row align-items-center">
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
                            value={data}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="col-auto">
                        <CopyToClipboard selector={`#${datatype}`} />
                    </div>
                </div>
            ) : isTextArea ? (
                <div className="row align-items-center">
                    <div className="col-md-2 m-2 p-2">
                        <label className="col-form-label">{`${name}: `}</label>
                    </div>
                    <div className="col-md">
                        <textarea
                            type="text"
                            className="form-control"
                            id={datatype}
                            value={data}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="col-auto">
                        <CopyToClipboard selector={`#${datatype}`} />
                    </div>
                </div>
            ) : (
                <div className="row align-items-center">
                    <div className="col-md-2 m-2 p-2">
                        <label className="col-form-label">{`${name}: `}</label>
                    </div>
                    <div className="col-md">
                        <input
                            type="text"
                            className="form-control h-100"
                            id={datatype}
                            value={data}
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
                <div className="p-3 row">
                    <input
                        type="button"
                        className="btn btn-outline-secondary"
                        id="gen-random-data-btn"
                        value="Generate Data"
                        onClick={generateData}
                    />
                </div>
                <div className="row">
                    <div className="accordion">
                        <AccordionItem
                            accordion_header_id={"user-details"}
                            accordion_collapse_id={"user-details-collapse"}
                            accordion_header_title={"User details"}
                            accordion_body={
                                <>
                                    <TestdataComponent
                                        name={"Name"}
                                        datatype={"dataname"}
                                        data={data.name}
                                    />
                                    <TestdataComponent
                                        name={"Email"}
                                        datatype={"dataemail"}
                                        data={data.email}
                                    />
                                    <TestdataComponent
                                        name={"Password"}
                                        datatype={"datapassword"}
                                        data={data.password}
                                    />
                                    <TestdataComponent
                                        name={"Timezone"}
                                        datatype={"datatimezone"}
                                        data={data.timezone}
                                    />
                                    <TestdataComponent
                                        name={"Phone"}
                                        datatype={"dataphone"}
                                        data={data.phone}
                                    />
                                    <TestdataComponent
                                        name={"Job Title"}
                                        datatype={"datajobTitle"}
                                        data={data.jobTitle}
                                    />{" "}
                                    <TestdataComponent
                                        name={"Job Type"}
                                        datatype={"data.jobType"}
                                        data={data.jobType}
                                    />
                                </>
                            }
                            show={true}
                        />
                        <AccordionItem
                            accordion_header_id={"address"}
                            accordion_collapse_id={"address-collapse"}
                            accordion_header_title={"Address"}
                            accordion_body={
                                <>
                                    <TestdataComponent
                                        name={"Address"}
                                        datatype={"dataaddress"}
                                        data={data.address}
                                    />
                                    <TestdataComponent
                                        name={"Street"}
                                        datatype={"datastreet"}
                                        data={data.street}
                                    />
                                    <TestdataComponent
                                        name={"City"}
                                        datatype={"datacity"}
                                        data={data.city}
                                    />
                                    <TestdataComponent
                                        name={"Country"}
                                        datatype={"datacountry"}
                                        data={data.country}
                                    />
                                    <TestdataComponent
                                        name={"State"}
                                        datatype={"datastate"}
                                        data={data.state}
                                    />
                                </>
                            }
                        />
                        <AccordionItem
                            accordion_header_id={"commerce"}
                            accordion_collapse_id={"commerce-collapse"}
                            accordion_header_title={"Commerce"}
                            accordion_body={
                                <>
                                    <TestdataComponent
                                        name={"Company"}
                                        datatype={"datacompany"}
                                        data={data.company}
                                    />
                                    <TestdataComponent
                                        name={"Department"}
                                        datatype={"datadepartment"}
                                        data={data.department}
                                    />
                                    <TestdataComponent
                                        name={"Product"}
                                        datatype={"dataproduct"}
                                        data={data.product}
                                    />
                                    <TestdataComponent
                                        name={"Vehicle"}
                                        datatype={"datavehicle"}
                                        data={data.vehicle}
                                    />
                                </>
                            }
                        />
                        <AccordionItem
                            accordion_header_id={"system"}
                            accordion_collapse_id={"system-collapse"}
                            accordion_header_title={"System"}
                            accordion_body={
                                <>
                                    <TestdataComponent
                                        name={"File Name"}
                                        datatype={"datafileName"}
                                        data={data.fileName}
                                    />
                                    <TestdataComponent
                                        name={"File EXT"}
                                        datatype={"datafileExt"}
                                        data={data.fileExt}
                                    />
                                    <TestdataComponent
                                        name={"File Type"}
                                        datatype={"datafileType"}
                                        data={data.fileType}
                                    />
                                    <TestdataComponent
                                        name={"Bitcoin"}
                                        datatype={"databitcoinAddress"}
                                        data={data.bitcoinAddress}
                                    />
                                    <TestdataComponent
                                        name={"Color"}
                                        datatype={"datacolor"}
                                        data={data.color}
                                    />
                                    <TestdataComponent
                                        name={"UUID"}
                                        datatype={"datauuid"}
                                        data={data.uuid}
                                    />
                                    <TestdataComponent
                                        name={"URL"}
                                        datatype={"dataurl"}
                                        data={data.url}
                                    />
                                </>
                            }
                        />
                        <AccordionItem
                            accordion_header_id={"random"}
                            accordion_collapse_id={"random-collapse"}
                            accordion_header_title={"Random"}
                            accordion_body={
                                <>
                                    <TestdataComponent
                                        isRandomWord={true}
                                        name={"Random Letters Count"}
                                        datatype={"datawords"}
                                        data={data.words}
                                        wordCount={wordCount}
                                        handleWordCount={(e) => {
                                            setWordCount(
                                                Number(e.target.value)
                                            );
                                        }}
                                    />{" "}
                                    <TestdataComponent
                                        name={"Sentences"}
                                        datatype={"datasentences"}
                                        data={data.sentences}
                                        isTextArea={true}
                                    />
                                    <TestdataComponent
                                        name={"Paragraphs"}
                                        datatype={"dataparagraphs"}
                                        data={data.paragraphs}
                                        isTextArea={true}
                                    />
                                    <TestdataComponent
                                        name={"Job Descriptor"}
                                        datatype={"datajobDescriptor"}
                                        data={data.jobDescriptor}
                                    />
                                    <TestdataComponent
                                        name={"Username"}
                                        datatype={"datauserName"}
                                        data={data.userName}
                                    />
                                    <TestdataComponent
                                        name={"Prefix"}
                                        datatype={"dataprefix"}
                                        data={data.prefix}
                                    />
                                    <TestdataComponent
                                        name={"Genre"}
                                        datatype={"datagenre"}
                                        data={data.genre}
                                    />
                                    <TestdataComponent
                                        name={"CC No"}
                                        datatype={"datacreditCardNumber"}
                                        data={data.creditCardNumber}
                                    />
                                    <TestdataComponent
                                        name={"Transaction Description"}
                                        datatype={"datatransactionDescription"}
                                        data={data.transactionDescription}
                                        isTextArea={true}
                                    />
                                </>
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
