import Header from "../components/Header/Header";

const CoursesPage = () => {
    return (
        <div>
            <Header />
            <h1>Our Academic Programs</h1>
            <p>
                Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.
            </p>

            <h2>Discover Campus Life</h2>
            <video width="1300px" controls>
                <source src="https://vck-ojt.vercel.app/assets/college-tour-FAmcnyfF.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <p>Get a glimpse of the vibrant academic and social life at Vivekanand College.</p>

            <h2>Undergraduate Programs (UG)</h2>
            <hr />
            <ul>
                <li>
                    <b>Bachelor of Science (B.Sc.)</b>
                    <ul>
                        <li>Computer Science (3 years)</li>
                        <li>Information Technology (3 years)</li>
                        <li>Biotechnology (3 years)</li>
                    </ul>
                </li>
                <li>
                    <b>Bachelor of Commerce (B.Com)</b>
                    <ul>
                        <li>Accounting & Finance (3 years)</li>
                        <li>Banking & Insurance (3 years)</li>
                    </ul>
                </li>
                <li>
                    <b>Bachelor of Arts (B.A.)</b>
                    <ul>
                        <li>English Literature (3 years)</li>
                        <li>Psychology (3 years)</li>
                    </ul>
                </li>
            </ul>

            <h2>Postgraduate Programs (PG)</h2>
            <hr />
            <ul>
                <li>
                    <b>Master of Science (M.Sc.)</b>
                    <ul>
                        <li>Computer Science (2 years)</li>
                        <li>Information Technology (2 years)</li>
                    </ul>
                </li>
                <li>
                    <b>Master of Commerce (M.Com)</b> (2 years)
                </li>
                <li>
                    <b>Master of Arts (M.A.)</b> (2 years)
                </li>
            </ul>

            <h2>Program Details & Fee Structure (Annual)</h2>
            <hr />
            <table border="2px">
                <thead>
                    <tr>
                        <th>Program Type</th>
                        <th>Course Name</th>
                        <th>Duration</th>
                        <th>Annual Fee (INR)</th>
                        <th>Eligibility</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>UG</td>
                        <td>B.Sc. Computer Science</td>
                        <td>3 Years</td>
                        <td>₹ 85,000</td>
                        <td>10+2 with PCM (50%)</td>
                    </tr>
                    <tr>
                        <td>UG</td>
                        <td>B.Com. Accounting & Finance</td>
                        <td>3 Years</td>
                        <td>₹ 70,000</td>
                        <td>10+2 Commerce (45%)</td>
                    </tr>
                    <tr>
                        <td>PG</td>
                        <td>M.Sc. Information Technology</td>
                        <td>2 Years</td>
                        <td>₹ 95,000</td>
                        <td>B.Sc. IT/CS (50%)</td>
                    </tr>
                </tbody>
            </table>

            <h2>Specialized & Vocational Courses</h2>
            <hr />
            <p>
                In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.
            </p>
            <br />
            <p>Have questions about a specific course?</p>
        </div>
    );
};

export default CoursesPage;
