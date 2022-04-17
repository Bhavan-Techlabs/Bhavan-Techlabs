let WELCOME_JSON = {
    name: "Sahas Profile",
    url: "http://localhost:3000/login",
};

let PROFILE_UPDATE_JSON = {
    name: "Sahas SillsTwo",
    message: "You have updated your profile. Please complete your profile information to complete your profile",
};

let INTERVIEW_JSON = {
    summary: "Interview : Sahas Tuf",
    eventId: 120,
    attendees: ["sahasp+an@techprovint.com", "sahasp+an35@techprovint.com"],
    link: "https://keth-test.web.app/login/1647270202704",
    description: "",
    startTime: "2022-03-15 06:00:00.0",
    endTime: "2022-03-15 07:00:00.0",
    type: "INTERVIEW",
};

let PROFILE_COMPLETE_JSON = {
    name: "Eranga Manoj",
    link: "https://w3gig-customer-web-dev.web.app/profile/24",
    message: "You have updated your profile. Please send your profile for verification.",
};

let OFFER_HIRED_JSON = {
    name: "Shashith engine",
    project: "Sample job to create a page that has a long project title Sample job to create a page that has a long project title  Sample job to create a page that has a long project title ",
};

let VALIDATION_START_JSON = {
    name: "Emmeline Warwick",
    validator: "John Tancredi",
};

let ADD_TESTS_JSON = {
    name: "Sahas Punchihewa",
    validator: "Martha Egbert",
    link: "https://w3gig-customer-web-dev.web.app/profile/40",
};

let TEST_SUBMISSION_JSON = {
    repoUrl: "https://bitbucket.org/techprovint/gig-notification-handler/src/main/",
    test: "Web3 implementation with Metamask",
    name: "Martha Egbert",
    comment: "fdfgdfg",
    engineer: "Sahas Punchihewa",
};

let TEST_MARKS_JSON = {
    result: "PASS",
    test: "Web3 implementation with Metamask",
    name: "Sahas Punchihewa",
    validator: "Martha Egbert",
    comment: "gsdfgd",
    marks: 89,
};

let INTERVIEW_RESULT_JSON = {
    name: "Sahas Punchihewa",
    validator: "Martha Egbert",
    rating: 6,
    comment: "hdhdf",
    proficiency: "SENIOR",
};

let VALIDATION_APPROVE_JSON = {
    name: "Sahas Punchihewa",
    link: "https://w3gig-customer-web-dev.web.app/jobs/list/",
};

let JOB_PROPOSAL_JSON = {
    totalAmount: 7020,
    name: "Scott Boulch 22s",
    preferredRate: 78,
    project: "Calendar test job",
    comment: "<p>gfhghfhg</p>",
    effort: 90,
    engineer: "Martha Egbert",
    preferredRateType: "HOURLY",
};

let JOB_OFFER_JSON = {
    name: "Chloe Mazikeen",
    link: "https://w3gig-customer-web-dev.web.app/jobs/applied/1035",
    project: "SQM test job 3",
};

let JOB_REJECTED_JSON = {
    name: "Sahas Punchihewa",
    project: "test 123",
};

let OFFER_ACCEPT_JSON = {
    name: "Harshana Dissanayaka",
    project: "SQM test job 3",
    engineer: "Andrew  James",
};

let OFFER_REJECT_JSON = {
    name: "Sahas Emp three",
    project: "test 1",
    engineer: "Sahas Punchihewa",
};

let PROJECT_START_JSON = {
    name: "Sahas Punchihewa",
    project: "explore Pluto",
};

let CALENDAR_JSON = {
    summary: "get data",
    eventId: 523,
    attendees: ["sahasp+an@techprovint.com", "w3gig.qa+employer@gmail.com"],
    organizer: "w3gig.qa+employer@gmail.com",
    link: "https://keth-test.web.app/login/1647584140610",
    description: "gfdgf",
    startTime: "2022-03-18 13:00:00.0",
    endTime: "2022-03-18 14:00:00.0",
    type: "MEETING",
};

let AVAILABILITY_JSON = {
    name: "Venura Test",
    url: "https://w3gig-customer-web-dev.web.app/interview-schedule/2jQcCfqSw0b5tHDpqooN6j0AivnN3NaBKMD-KfFxDEy-S4IICvuSfQJCNYHltt7-",
};

let REFERRAL_JSON = {
    referral: "72125FC0CBFF4130B03587EDEA646017",
    name: "viraj sameera",
    url: "https://w3gig-customer-web-dev.web.app/signup?referral=72125FC0CBFF4130B03587EDEA646017",
};

document.querySelector("#gen-msg-btn").addEventListener("click", (e) => {

    let createdAt = timestamp();
    let expireAt = future_timestamp(2);
    let transactionId = uuid();

    document.getElementById('timestamp-value').value = createdAt;
    document.getElementById('transactionid-value').value = transactionId;

    let source = document.getElementById('source-value').value;
    let id = +document.getElementById('id-value').value;

    let subject = document.getElementById('subject-value').value;
    let emailFrom = document.getElementById('email-from-value').value;
    let to = document.getElementById('email-to-value').value;
    let email_type = document.getElementById('email-type').value;

    let message = document.getElementById('push-message-value').value;
    let title = document.getElementById('push-title-value').value;
    let userId = document.getElementById('push-userid-value').value;
    let push_type = document.getElementById('push-type-value').value;

    let email_data = document.getElementById("pre-json").value;

    let email = {
        data: JSON.stringify(JSON.parse(email_data)),
        subject: subject,
        emailFrom: emailFrom,
        to: to,
        type: email_type,
    };

    let push = {
        message: message,
        title: title,
        userId: userId,
        type: push_type,
    };

    let notification_msg = {
        createdAt: createdAt,
        data: [{
                notificationType: "EMAIL",
                content: JSON.stringify(email),
            },
            {
                notificationType: "PUSH",
                content: JSON.stringify(push),
            },
        ],
        source: source,
        priority: "HIGHEST",
        expireAt: expireAt,
        transactionId: transactionId,
        status: "NEW",
    };

    let email_notification = {
        data: JSON.stringify(email),
        id: id,
        source: source,
        transactionId: transactionId,
    };

    let push_notification = {
        data: JSON.stringify(push),
        id: id,
        source: source,
        transactionId: transactionId,
    };

    let value = document.querySelector('input[name="message_type"]:checked').value;

    let text = "";
    if (value === "email") {
        text = email_notification;
    }
    if (value === "push") {
        text = push_notification;
    }

    let output = "";
    try {
        output = JSON.stringify(text, null, '\t');
    } catch (error) {
        output = error;
    }

    document.querySelector("#final-output-json").value = output;
});

document.querySelector("#copy-msg-btn").addEventListener('click', () => {
    copy_to_clipboard("final-output-json");
});

document.querySelector("#clear-msg-btn").addEventListener('click', () => {
    document.querySelector("#final-output-json").value = "";
});

var radios = document.querySelectorAll('input[type=radio][name="message_type"]');

radios.forEach(radio => radio.addEventListener('change', () => {
    let value = document.querySelector('input[name="message_type"]:checked').value;
    if (value === "email") {
        document.getElementById("email-notification-tab").classList.remove("d-none");
        document.getElementById("push-notification-tab").classList.add("d-none");
    }
    if (value === "push") {
        document.getElementById("push-notification-tab").classList.remove("d-none");
        document.getElementById("email-notification-tab").classList.add("d-none");
    }
}));

document.querySelector("#email-type").addEventListener('change', function () {
    let output = "";
    switch (this.value) {
        case "WELCOME":
            output = JSON.stringify(WELCOME_JSON, null, '\t');
            break;
        case "PROFILE_UPDATE":
            output = JSON.stringify(PROFILE_UPDATE_JSON, null, '\t');
            break;
        case "PROFILE_COMPLETE":
            output = JSON.stringify(PROFILE_COMPLETE_JSON, null, '\t');
            break;
        case "VALIDATION_START":
            output = JSON.stringify(VALIDATION_START_JSON, null, '\t');
            break;
        case "ADD_TESTS":
            output = JSON.stringify(ADD_TESTS_JSON, null, '\t');
            break;
        case "TEST_SUBMISSION":
            output = JSON.stringify(TEST_SUBMISSION_JSON, null, '\t');
            break;
        case "TEST_MARKS":
            output = JSON.stringify(TEST_MARKS_JSON, null, '\t');
            break;
        case "INTERVIEW_RESULT":
            output = JSON.stringify(INTERVIEW_RESULT_JSON, null, '\t');
            break;
        case "VALIDATION_APPROVE":
            output = JSON.stringify(VALIDATION_APPROVE_JSON, null, '\t');
            break;
        case "JOB_PROPOSAL":
            output = JSON.stringify(JOB_PROPOSAL_JSON, null, '\t');
            break;
        case "JOB_OFFER":
            output = JSON.stringify(JOB_OFFER_JSON, null, '\t');
            break;
        case "JOB_REJECTED":
            output = JSON.stringify(JOB_REJECTED_JSON, null, '\t');
            break;
        case "OFFER_ACCEPT":
            output = JSON.stringify(OFFER_ACCEPT_JSON, null, '\t');
            break;
        case "OFFER_REJECT":
            output = JSON.stringify(OFFER_REJECT_JSON, null, '\t');
            break;
        case "OFFER_HIRED":
            output = JSON.stringify(OFFER_HIRED_JSON, null, '\t');
            break;
        case "PROJECT_START":
            output = JSON.stringify(PROJECT_START_JSON, null, '\t');
            break;
        case "CALENDAR":
            output = JSON.stringify(CALENDAR_JSON, null, '\t');
            break;
        case "AVAILABILITY":
            output = JSON.stringify(AVAILABILITY_JSON, null, '\t');
            break;
        case "INTERVIEW":
            output = JSON.stringify(INTERVIEW_JSON, null, '\t');
            break;
        case "REFERRAL":
            output = JSON.stringify(REFERRAL_JSON, null, '\t');
            break;
        default:
            break;
    }
    document.getElementById("pre-json").value = output;
});


document.querySelector("#push-type-value").addEventListener('change', function () {
    let output = "";

    let message = document.getElementById('push-message-value').value;
    let title = document.getElementById('push-title-value').value;
    let userId = document.getElementById('push-userid-value').value;
    let push_type = document.getElementById('push-type-value').value;

    let push = {
        message: message,
        title: title,
        userId: userId,
        type: push_type,
    };

    document.getElementById("pre-json").value = JSON.stringify(push, null, '\t');
});