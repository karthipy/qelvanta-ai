const images = [
    "ai1.avif",
    "ai2.avif",
    "ai3.avif",
    "ai4.avif"
];

let i = 0;

setInterval(() => {
    i = (i + 1) % images.length;

    document.querySelector(".hero").style.background =
        `url("${images[i]}") center / cover no-repeat`;

}, 2000);

const mlProjects = [
    "Customer Churn Prediction",
    "Fraud Detection System",
    "Credit Risk Prediction",
    "Loan Approval Prediction",
    "Sales Forecasting",
    "Customer Segmentation",
    "Recommendation System",
    "Demand Prediction",
    "Price Prediction System",
    "House Price Prediction",
    "Employee Attrition Prediction",
    "Insurance Claim Prediction",
    "Fake Review Detection",
    "Sentiment Analysis",
    "Spam Detection System",
    "Disease Risk Prediction",
    "Crop Yield Prediction",
    "Delivery Time Prediction",
    "Stock Price Prediction",
    "Predictive Maintenance",
    "Lead Conversion Prediction",
    "Customer Purchase Prediction"
];

const dlProjects = [
    "Synthetic Image Detection",
    "Object Detection System",
    "Face Recognition System",
    "Facial Emotion Recognition",
    "Plant Disease Detection",
    "Medical Image Classification",
    "OCR Document Intelligence",
    "Image Classification System",
    "AI-Based Video Analysis",
    "Fire & Smoke Detection",
    "PPE / Safety Detection",
    "Traffic Sign Recognition",
    "Number Plate Recognition",
    "Human Activity Recognition",
    "Defect Detection System",
    "AI Image Captioning",
    "Deepfake Detection",
    "Gesture Recognition",
    "Document Classification",
    "Speech Emotion Recognition",
    "Sign Language Recognition",
    "Visual Search System"
];

function openProjects(type) {

    const projects =
        type === "ml"
        ? mlProjects
        : dlProjects;

    const title =
        type === "ml"
        ? "Machine Learning Projects"
        : "Deep Learning Projects";

    let projectHTML = `
        <div class="project-modal">

            <div class="project-modal-content">

                <button class="close-projects"
                    onclick="closeProjects()">
                    ×
                </button>

                <p class="modal-label">
                    QELVANTA PROJECT LAB
                </p>

                <h2>${title}</h2>

                <div class="project-list">
    `;

    projects.forEach((project, index) => {

        projectHTML += `
            <button
                class="project-item"
                onclick="showProjectDetails('${type}', ${index})">

                <span>${String(index + 1).padStart(2, "0")}</span>

                <strong>${project}</strong>

                <b>→</b>

            </button>
        `;

    });

    projectHTML += `
                </div>

            </div>

        </div>
    `;

    document.body.insertAdjacentHTML(
        "beforeend",
        projectHTML
    );
}


function closeProjects() {

    const modal =
        document.querySelector(".project-modal");

    if (modal) {
        modal.remove();
    }
}

const mlProjectDetails = [
    {
        title: "Customer Churn Prediction",
        description: "Predicts whether a customer is likely to stop using a company's product or service.",
        objective: "Identify customers who may leave and help businesses improve customer retention.",
        technology: "Python, Pandas, Scikit-learn, Classification",
        model: "Logistic Regression / Random Forest",
        use: "Telecom, banking, SaaS and subscription businesses."
    },

    {
        title: "Fraud Detection System",
        description: "Detects potentially fraudulent transactions using historical transaction patterns.",
        objective: "Identify suspicious activities and reduce financial losses.",
        technology: "Python, Pandas, Scikit-learn",
        model: "Random Forest / Logistic Regression",
        use: "Banking, payments, e-commerce and financial services."
    },

    {
        title: "Credit Risk Prediction",
        description: "Estimates the risk level associated with a customer's credit application.",
        objective: "Support better and more consistent credit-risk decisions.",
        technology: "Python, Pandas, Scikit-learn",
        model: "Random Forest / Gradient Boosting",
        use: "Banks, lending platforms and financial institutions."
    },

    {
        title: "Loan Approval Prediction",
        description: "Predicts whether a loan application is likely to meet predefined approval criteria.",
        objective: "Assist lenders in evaluating applications efficiently.",
        technology: "Python, Pandas, Scikit-learn",
        model: "Logistic Regression / Decision Tree",
        use: "Banks, NBFCs and digital lending platforms."
    },

    {
        title: "Sales Forecasting",
        description: "Forecasts future sales using historical sales patterns and business data.",
        objective: "Help businesses plan inventory, staffing and sales strategies.",
        technology: "Python, Pandas, Scikit-learn",
        model: "Regression / Time-Series Models",
        use: "Retail, e-commerce and distribution businesses."
    },

    {
        title: "Customer Segmentation",
        description: "Groups customers into meaningful segments based on their behavior and characteristics.",
        objective: "Understand customer groups and support targeted business strategies.",
        technology: "Python, Pandas, Scikit-learn",
        model: "K-Means Clustering",
        use: "Marketing, retail, e-commerce and customer analytics."
    },

    {
        title: "Recommendation System",
        description: "Recommends relevant products, services or content based on user preferences and behavior.",
        objective: "Improve personalization and user engagement.",
        technology: "Python, Pandas, Scikit-learn",
        model: "Collaborative Filtering / Content-Based Filtering",
        use: "E-commerce, entertainment and content platforms."
    },

    {
        title: "Demand Prediction",
        description: "Predicts future demand for products or services using historical and business data.",
        objective: "Support inventory planning and operational decisions.",
        technology: "Python, Pandas, Scikit-learn",
        model: "Regression / Forecasting",
        use: "Retail, manufacturing, logistics and supply-chain businesses."
    },

    {
        title: "Price Prediction System",
        description: "Estimates the expected price of a product or asset using relevant historical features.",
        objective: "Provide data-driven price estimates.",
        technology: "Python, Pandas, Scikit-learn",
        model: "Linear Regression / Random Forest",
        use: "Real estate, automotive, retail and marketplace platforms."
    },

    {
        title: "House Price Prediction",
        description: "Predicts property prices based on features such as location, size and property characteristics.",
        objective: "Generate useful property price estimates.",
        technology: "Python, Pandas, Scikit-learn",
        model: "Linear Regression / Random Forest Regression",
        use: "Real estate platforms and property analytics."
    },

    {
        title: "Employee Attrition Prediction",
        description: "Predicts the likelihood of employees leaving an organization.",
        objective: "Help organizations understand workforce retention risks.",
        technology: "Python, Pandas, Scikit-learn",
        model: "Logistic Regression / Random Forest",
        use: "HR analytics and workforce management."
    },

    {
        title: "Insurance Claim Prediction",
        description: "Predicts the likelihood or expected characteristics of insurance claims using historical data.",
        objective: "Support efficient claim-risk assessment.",
        technology: "Python, Pandas, Scikit-learn",
        model: "Classification / Regression",
        use: "Insurance companies and risk-management teams."
    },

    {
        title: "Fake Review Detection",
        description: "Identifies potentially fake or suspicious customer reviews using text patterns.",
        objective: "Improve trust and reliability of online reviews.",
        technology: "Python, NLP, Scikit-learn",
        model: "Naive Bayes / Logistic Regression",
        use: "E-commerce, review platforms and marketplaces."
    },

    {
        title: "Sentiment Analysis",
        description: "Analyzes text and identifies whether the expressed sentiment is positive, negative or neutral.",
        objective: "Understand customer opinions and feedback at scale.",
        technology: "Python, NLP, Scikit-learn",
        model: "Naive Bayes / Logistic Regression",
        use: "Customer feedback, social media and product reviews."
    },

    {
        title: "Spam Detection System",
        description: "Classifies messages or emails as spam or legitimate content.",
        objective: "Automatically identify unwanted messages.",
        technology: "Python, NLP, Scikit-learn",
        model: "Naive Bayes / Logistic Regression",
        use: "Email systems, messaging platforms and communication services."
    },

    {
        title: "Disease Risk Prediction",
        description: "Estimates disease risk from relevant input features using trained machine-learning models.",
        objective: "Support preliminary risk assessment from available data.",
        technology: "Python, Pandas, Scikit-learn",
        model: "Logistic Regression / Random Forest",
        use: "Healthcare analytics and clinical decision-support research."
    },

    {
        title: "Crop Yield Prediction",
        description: "Predicts expected crop yield using agricultural and environmental information.",
        objective: "Help improve agricultural planning and resource management.",
        technology: "Python, Pandas, Scikit-learn",
        model: "Random Forest Regression",
        use: "Agriculture, farming analytics and crop planning."
    },

    {
        title: "Delivery Time Prediction",
        description: "Estimates delivery time using order, distance, traffic and operational information.",
        objective: "Improve delivery planning and customer experience.",
        technology: "Python, Pandas, Scikit-learn",
        model: "Regression / Random Forest",
        use: "Food delivery, e-commerce and logistics."
    },

    {
        title: "Stock Price Prediction",
        description: "Analyzes historical market data to estimate future price trends.",
        objective: "Explore market patterns and generate predictive insights.",
        technology: "Python, Pandas, Scikit-learn",
        model: "Regression / Time-Series Models",
        use: "Financial analytics and market research."
    },

    {
        title: "Predictive Maintenance",
        description: "Predicts potential equipment failures using machine and sensor data.",
        objective: "Identify maintenance needs before unexpected equipment downtime.",
        technology: "Python, Pandas, Scikit-learn",
        model: "Random Forest / Classification Models",
        use: "Manufacturing, industrial systems and IoT."
    },

    {
        title: "Lead Conversion Prediction",
        description: "Predicts which business leads are more likely to become customers.",
        objective: "Help sales teams prioritize promising leads.",
        technology: "Python, Pandas, Scikit-learn",
        model: "Logistic Regression / Random Forest",
        use: "Sales, marketing and CRM platforms."
    },

    {
        title: "Customer Purchase Prediction",
        description: "Predicts the likelihood of a customer purchasing a particular product or service.",
        objective: "Improve personalized marketing and sales strategies.",
        technology: "Python, Pandas, Scikit-learn",
        model: "Logistic Regression / Random Forest",
        use: "E-commerce, retail and digital marketing."
    }
];

function showProjectDetails(type, index) {

    if (type === "ml") {

        const project = mlProjectDetails[index];

        const detailsHTML = `
            <div class="project-details-modal">

                <div class="project-details-content">

                    <button
                        class="close-projects"
                        onclick="closeProjectDetails()">
                        ×
                    </button>

                    <p class="modal-label">
                        QELVANTA PROJECT LAB
                    </p>

                    <h2>${project.title}</h2>

                    <div class="detail-block">
                        <h3>What it does</h3>
                        <p>${project.description}</p>
                    </div>

                    <div class="detail-block">
                        <h3>Objective</h3>
                        <p>${project.objective}</p>
                    </div>

                    <div class="detail-block">
                        <h3>Technology</h3>
                        <p>${project.technology}</p>
                    </div>

                    <div class="detail-block">
                        <h3>Model</h3>
                        <p>${project.model}</p>
                    </div>

                    <div class="detail-block">
                        <h3>Real-world use</h3>
                        <p>${project.use}</p>
                    </div>

                    <button class="request-project-btn">
                        Request This Project →
                    </button>

                </div>

            </div>
        `;

        document.body.insertAdjacentHTML(
            "beforeend",
            detailsHTML
        );
    }
}


function closeProjectDetails() {

    const modal =
        document.querySelector(".project-details-modal");

    if (modal) {
        modal.remove();
    }
}

const dlProjectDetails = [
    {
        title: "Synthetic Image Detection",
        description: "Identifies whether an image is naturally captured or synthetically generated.",
        objective: "Help detect AI-generated or synthetic visual content.",
        technology: "Python, Deep Learning, Computer Vision",
        model: "CNN / Transfer Learning",
        use: "Content verification, digital media and AI research."
    },

    {
        title: "Object Detection System",
        description: "Detects and locates multiple objects within an image or video.",
        objective: "Automatically identify important objects in visual data.",
        technology: "Python, Deep Learning, Computer Vision",
        model: "YOLO / Object Detection Networks",
        use: "Security, retail, manufacturing and smart systems."
    },

    {
        title: "Face Recognition System",
        description: "Identifies or verifies a person based on facial features.",
        objective: "Build automated face-based identification capabilities.",
        technology: "Python, OpenCV, Deep Learning",
        model: "CNN / Face Embedding Models",
        use: "Access control, attendance and identity applications."
    },

    {
        title: "Facial Emotion Recognition",
        description: "Analyzes facial expressions and classifies visible emotional states.",
        objective: "Understand facial-expression patterns automatically.",
        technology: "Python, OpenCV, Deep Learning",
        model: "CNN",
        use: "Human-computer interaction, research and customer experience."
    },

    {
        title: "Plant Disease Detection",
        description: "Detects visible plant diseases from leaf images.",
        objective: "Support early identification of common plant diseases.",
        technology: "Python, TensorFlow, Computer Vision",
        model: "CNN / Transfer Learning",
        use: "Agriculture and smart farming."
    },

    {
        title: "Medical Image Classification",
        description: "Classifies medical images into predefined categories using deep-learning models.",
        objective: "Assist research and image-based analysis workflows.",
        technology: "Python, TensorFlow, Computer Vision",
        model: "CNN / Transfer Learning",
        use: "Medical imaging research and healthcare analytics."
    },

    {
        title: "OCR Document Intelligence",
        description: "Extracts and analyzes text from scanned documents and images.",
        objective: "Convert visual documents into usable digital information.",
        technology: "Python, OCR, Deep Learning",
        model: "OCR / Vision Models",
        use: "Document processing, finance and business automation."
    },

    {
        title: "Image Classification System",
        description: "Classifies images into predefined categories using visual features.",
        objective: "Automatically organize and categorize image data.",
        technology: "Python, TensorFlow, Deep Learning",
        model: "CNN / Transfer Learning",
        use: "Retail, agriculture, manufacturing and image analysis."
    },

    {
        title: "AI-Based Video Analysis",
        description: "Analyzes video frames to identify objects, activities or events.",
        objective: "Extract meaningful information from video streams.",
        technology: "Python, OpenCV, Deep Learning",
        model: "CNN / Object Detection Models",
        use: "Security, surveillance and industrial monitoring."
    },

    {
        title: "Fire & Smoke Detection",
        description: "Detects visible fire or smoke patterns from images or video.",
        objective: "Support early identification of potential fire events.",
        technology: "Python, Computer Vision, Deep Learning",
        model: "CNN / YOLO",
        use: "Industrial safety and monitoring systems."
    },

    {
        title: "PPE / Safety Detection",
        description: "Detects safety equipment such as helmets or protective gear in visual data.",
        objective: "Support automated workplace safety monitoring.",
        technology: "Python, OpenCV, Deep Learning",
        model: "YOLO / Object Detection",
        use: "Construction, manufacturing and industrial environments."
    },

    {
        title: "Traffic Sign Recognition",
        description: "Recognizes and classifies traffic signs from road images.",
        objective: "Automatically interpret common road-sign information.",
        technology: "Python, TensorFlow, Computer Vision",
        model: "CNN",
        use: "Intelligent transportation and autonomous-driving research."
    },

    {
        title: "Number Plate Recognition",
        description: "Detects vehicle number plates and extracts their visible characters.",
        objective: "Automate vehicle identification workflows.",
        technology: "Python, OpenCV, OCR, Deep Learning",
        model: "Object Detection + OCR",
        use: "Parking, traffic management and vehicle monitoring."
    },

    {
        title: "Human Activity Recognition",
        description: "Classifies human activities from images, video or sensor-based inputs.",
        objective: "Automatically identify predefined human activities.",
        technology: "Python, Deep Learning, Computer Vision",
        model: "CNN / LSTM",
        use: "Sports analytics, smart environments and research."
    },

    {
        title: "Defect Detection System",
        description: "Detects visible defects or irregularities in manufactured products.",
        objective: "Support automated quality inspection.",
        technology: "Python, Computer Vision, Deep Learning",
        model: "CNN / Object Detection",
        use: "Manufacturing and industrial quality control."
    },

    {
        title: "AI Image Captioning",
        description: "Generates a natural-language description for an image.",
        objective: "Connect visual understanding with language generation.",
        technology: "Python, Deep Learning, NLP",
        model: "CNN + LSTM / Vision-Language Models",
        use: "Accessibility, media management and AI research."
    },

    {
        title: "Deepfake Detection",
        description: "Analyzes visual patterns to identify potentially manipulated media.",
        objective: "Support the detection of AI-generated or manipulated content.",
        technology: "Python, Computer Vision, Deep Learning",
        model: "CNN / Vision Models",
        use: "Digital media verification and content research."
    },

    {
        title: "Gesture Recognition",
        description: "Recognizes predefined hand or body gestures from visual input.",
        objective: "Enable gesture-based interaction with digital systems.",
        technology: "Python, OpenCV, Deep Learning",
        model: "CNN / Vision Models",
        use: "Human-computer interaction and accessibility."
    },

    {
        title: "Document Classification",
        description: "Automatically categorizes documents based on their visual or textual content.",
        objective: "Reduce manual document sorting and processing.",
        technology: "Python, OCR, Deep Learning, NLP",
        model: "CNN / Transformer Models",
        use: "Finance, legal, business and document automation."
    },

    {
        title: "Speech Emotion Recognition",
        description: "Analyzes speech signals and classifies emotional patterns.",
        objective: "Understand emotional characteristics in voice data.",
        technology: "Python, Audio Processing, Deep Learning",
        model: "CNN / LSTM",
        use: "Customer experience, voice analytics and research."
    },

    {
        title: "Sign Language Recognition",
        description: "Recognizes predefined sign-language gestures from visual input.",
        objective: "Support communication between sign-language users and digital systems.",
        technology: "Python, OpenCV, Deep Learning",
        model: "CNN / LSTM",
        use: "Accessibility and human-computer interaction."
    },

    {
        title: "Visual Search System",
        description: "Finds visually similar products or images from an image query.",
        objective: "Enable users to search using visual information instead of only text.",
        technology: "Python, Computer Vision, Deep Learning",
        model: "CNN / Image Embeddings",
        use: "E-commerce, digital asset management and visual discovery."
    }
];

function showProjectDetails(type, index) {

    const project =
        type === "ml"
        ? mlProjectDetails[index]
        : dlProjectDetails[index];

    const detailsHTML = `
        <div class="project-details-modal">

            <div class="project-details-content">

                <button
                    class="close-projects"
                    onclick="closeProjectDetails()">
                    ×
                </button>

                <p class="modal-label">
                    QELVANTA PROJECT LAB
                </p>

                <h2>${project.title}</h2>

                <div class="detail-block">
                    <h3>What it does</h3>
                    <p>${project.description}</p>
                </div>

                <div class="detail-block">
                    <h3>Objective</h3>
                    <p>${project.objective}</p>
                </div>

                <div class="detail-block">
                    <h3>Technology</h3>
                    <p>${project.technology}</p>
                </div>

                <div class="detail-block">
                    <h3>Model</h3>
                    <p>${project.model}</p>
                </div>

                <div class="detail-block">
                    <h3>Real-world use</h3>
                    <p>${project.use}</p>
                </div>

                <button
                    class="request-project-btn"
                    onclick="openRequestForm('${project.title}')">
                    Request This Project →
                </button>

            </div>

        </div>
    `;

    document.body.insertAdjacentHTML(
        "beforeend",
        detailsHTML
    );
}


// ================= CLOSE PROJECT DETAILS =================

function closeProjectDetails() {

    const modal =
        document.querySelector(".project-details-modal");

    if (modal) {
        modal.remove();
    }
}


// ================= PROJECT REQUEST FORM =================

function openRequestForm(projectName) {

    const formHTML = `
        <div class="request-modal">

            <div class="request-content">

                <button
                    class="close-projects"
                    onclick="closeRequestForm()">
                    ×
                </button>

                <p class="modal-label">
                    QELVANTA PROJECT LAB
                </p>

                <h2>Request This Project</h2>

                <p class="request-intro">
                    Tell us about your requirements and
                    our team will review your project request.
                </p>

                <form onsubmit="submitProjectRequest(event)">

                    <label>Selected Project</label>

                    <input
                        type="text"
                        id="selectedProject"
                        value="${projectName}"
                        readonly
                    >

                    <label>Your Name</label>

                    <input
                        type="text"
                        id="clientName"
                        placeholder="Enter your name"
                        required
                    >

                    <label>Email Address</label>

                    <input
                        type="email"
                        id="clientEmail"
                        placeholder="Enter your email"
                        required
                    >

                    <label>Project Requirements</label>

                    <textarea
                        id="clientRequirements"
                        rows="5"
                        placeholder="Tell us about your requirements..."
                        required></textarea>

                    <button
                        type="submit"
                        class="submit-request-btn">
                        Send Project Request →
                    </button>

                </form>

            </div>

        </div>
    `;

    document.body.insertAdjacentHTML(
        "beforeend",
        formHTML
    );
}


// ================= CLOSE REQUEST FORM =================

function closeRequestForm() {

    const modal =
        document.querySelector(".request-modal");

    if (modal) {
        modal.remove();
    }
}


// ================= SUBMIT REQUEST =================

function submitProjectRequest(event) {

    event.preventDefault();

    const project =
        document.getElementById("selectedProject").value;

    const name =
        document.getElementById("clientName").value;

    const email =
        document.getElementById("clientEmail").value;

    const requirements =
        document.getElementById("clientRequirements").value;

    console.log("Project:", project);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Requirements:", requirements);

    alert(
        "Thank you! Your project request has been received."
    );

    closeRequestForm();
}

async function submitProjectRequest(event) {

    event.preventDefault();

    const project =
        document.getElementById("selectedProject").value;

    const name =
        document.getElementById("clientName").value;

    const email =
        document.getElementById("clientEmail").value;

    const requirements =
        document.getElementById("clientRequirements").value;


    try {

        const response = await fetch(
            "https://qelvanta-ai.onrender.com/project-request",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    project: project,
                    name: name,
                    email: email,
                    requirements: requirements
                })
            }
        );


        const data = await response.json();


        if (data.success) {

            alert(
                "Project request sent successfully!"
            );

            closeRequestForm();

        } else {

            alert(
                "Something went wrong. Please try again."
            );

        }

    } catch (error) {

        console.error(error);

        alert(
            "Backend server is not running."
        );
    }
}